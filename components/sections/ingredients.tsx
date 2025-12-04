"use client"

import { useState, useEffect, useRef } from 'react'
import { Plus, Check, X, ExternalLink } from 'lucide-react'

const ingredients = [
    {
        id: 'redensyl',
        percentage: 3,
        name: 'REDENSYL',
        shortDesc: 'Activeert follikel stamcellen',
        benefits: [
            '85% zag verbetering na 84 dagen',
            'Verdubbelt anageen/telogeen ratio',
            'Geen bekende bijwerkingen'
        ],
        source: 'PubMed 2020',
        sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/32473084/',
        isNew: false
    },
    {
        id: 'capixyl',
        percentage: 5,
        name: 'CAPIXYL',
        shortDesc: 'Remt DHT productie',
        benefits: [
            'Remt DHT productie tot 52%',
            'Versterkt extracellulaire matrix',
            'Verbetert haarverankering'
        ],
        source: 'Lucas Meyer Cosmetics',
        sourceUrl: 'https://www.redenhair.com/img/cms/CAPIXYL-Techfile.pdf',
        isNew: false
    },
    {
        id: 'procapil',
        percentage: 3,
        name: 'PROCAPIL',
        shortDesc: 'Verbetert bloedcirculatie',
        benefits: [
            'Verbetert microcirculatie',
            'Versterkt haarwortel',
            'Voorkomt follikel veroudering'
        ],
        source: 'Sederma Clinical Data',
        sourceUrl: 'https://www.rekze.ro/wp-content/uploads/2018/05/study3.pdf',
        isNew: false
    },
    {
        id: 'anagain',
        percentage: 3,
        name: 'ANAGAIN',
        shortDesc: 'Verlengt groeifase',
        benefits: [
            'Stimuleert Noggin-signaalstof',
            'Verlengt actieve groeifase',
            'Start nieuwe haargroeicycli'
        ],
        source: 'PMC 2020',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8246764/',
        isNew: false
    },
    {
        id: 'baicapil',
        percentage: 4,
        name: 'BAICAPIL',
        shortDesc: 'Beschermt tegen stress',
        benefits: [
            'Beschermt tegen vrije radicalen',
            'Vertraagt follikel veroudering',
            '90% minder haarverlies in studies'
        ],
        source: 'Provital Group',
        sourceUrl: 'https://www.weareprovital.com/en/careactives/baicapil',
        isNew: false
    },
    {
        id: 'ghk-cu',
        percentage: 2.5,
        name: 'GHK-Cu',
        shortDesc: 'Stimuleert collageen',
        benefits: [
            '33% snellere resultaten dan Minoxidil',
            'Stimuleert collageen en elastine',
            'Vergroot actieve follikels'
        ],
        source: 'PMC 2016',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4969472/',
        isNew: true
    }
]

export default function Ingredients() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null)
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLDivElement>(null)

    // Staggered entrance animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        ingredients.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => new Set([...prev, index]))
                            }, index * 100)
                        })
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (expandedCard && !(e.target as Element).closest('.ingredient-card')) {
                setExpandedCard(null)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [expandedCard])

    // ESC to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setExpandedCard(null)
        }
        document.addEventListener('keydown', handleEsc)
        return () => document.removeEventListener('keydown', handleEsc)
    }, [])

    const toggleCard = (cardId: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setExpandedCard(expandedCard === cardId ? null : cardId)
    }

    return (
        <section id="ingredienten" className="py-20 bg-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-4">
                    <span className="text-[#C4956A] text-sm font-semibold tracking-[0.2em] uppercase">
                        DE OPLOSSING
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">
                        6 gepatenteerde technologieën.
                    </h2>
                    <p className="text-xl text-[#C4956A] mb-6">
                        1 krachtige formule.
                    </p>
                </div>

                {/* Client Thought - Transition */}
                <div className="text-center mb-12">
                    <p className="text-gray-600 italic text-lg">
                        "Mooi verhaal. Maar werkt het ook?"
                    </p>
                </div>

                {/* Backdrop when expanded */}
                {expandedCard && (
                    <div
                        className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-10 transition-opacity duration-300"
                        onClick={() => setExpandedCard(null)}
                    />
                )}

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                    {ingredients.map((ingredient, index) => {
                        const isExpanded = expandedCard === ingredient.id

                        return (
                            <div
                                key={ingredient.id}
                                className={`
                                    ingredient-card relative bg-gray-50 border rounded-2xl p-5 cursor-pointer
                                    transition-all duration-300 ease-out
                                    ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                    ${isExpanded
                                        ? 'z-20 bg-white shadow-2xl border-[#C4956A] scale-105'
                                        : 'border-gray-200 hover:border-[#C4956A]/50 hover:shadow-lg hover:-translate-y-1'
                                    }
                                `}
                                style={{ transitionDelay: visibleCards.has(index) ? '0s' : `${index * 0.1}s` }}
                                onClick={(e) => toggleCard(ingredient.id, e)}
                            >
                                {/* NEW Badge */}
                                {ingredient.isNew && (
                                    <div className="absolute -top-2 -right-2 bg-[#C4956A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider z-10">
                                        Nieuw
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[#C4956A] text-sm font-bold">
                                            {ingredient.percentage}%
                                        </span>
                                        <h3 className="text-gray-900 text-lg font-bold">
                                            {ingredient.name}
                                        </h3>
                                    </div>
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded
                                            ? 'bg-[#C4956A] rotate-0'
                                            : 'border border-[#C4956A]/30 hover:bg-[#C4956A]/10'
                                        }`}>
                                        {isExpanded
                                            ? <X className="w-3.5 h-3.5 text-white" />
                                            : <Plus className="w-3.5 h-3.5 text-[#C4956A]" />
                                        }
                                    </div>
                                </div>

                                {/* Short desc */}
                                {!isExpanded && (
                                    <p className="text-gray-500 text-sm mt-1">
                                        {ingredient.shortDesc}
                                    </p>
                                )}

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div className="mt-4 pt-3 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {ingredient.benefits.map((benefit, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2.5 py-1.5"
                                                style={{
                                                    animation: `fadeInLeft 0.3s ease ${i * 0.08}s forwards`,
                                                    opacity: 0
                                                }}
                                            >
                                                <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{benefit}</span>
                                            </div>
                                        ))}

                                        {/* Clickable Source */}
                                        <a
                                            href={ingredient.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 mt-4 text-xs text-[#C4956A] hover:text-[#B38559] transition-colors group"
                                        >
                                            <span>Bron: {ingredient.source}</span>
                                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Summary Bar */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm">
                        <span className="text-gray-900 font-semibold">20.5% actief</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-600">6 technologieën</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-600">Hormoonvrij</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    )
}
