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
        studies: [
            { label: 'PubMed 2020', url: 'https://pubmed.ncbi.nlm.nih.gov/32473084/' },
            { label: 'Karaca 2019', url: 'https://www.hilarispublisher.com/open-access/a-comparative-study-between-topical-5-minoxidil-and-topical-redensyl-capixyl-and-procapil-combination-in-men-with-androg.pdf' },
            { label: 'Merja 2024', url: 'https://pubmed.ncbi.nlm.nih.gov/38050644/' },
            { label: 'Kumar 2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10246929/' },
            { label: 'Review 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/' },
        ],
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
        studies: [
            { label: 'PMC 2020', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7840088/' },
            { label: 'Karaca 2019', url: 'https://www.hilarispublisher.com/open-access/a-comparative-study-between-topical-5-minoxidil-and-topical-redensyl-capixyl-and-procapil-combination-in-men-with-androg.pdf' },
            { label: 'Review 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/' },
            { label: 'Cochrane', url: 'https://www.cochranelibrary.com/central/doi/10.1002/central/CN-02260138/full' },
        ],
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
        studies: [
            { label: 'ResearchGate', url: 'https://www.researchgate.net/publication/326229067' },
            { label: 'Eslahi 2022', url: 'https://www.odermatol.com/odermatology/20224/1.Effectiveness-EslahiE.pdf' },
            { label: 'Kumar 2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10246929/' },
            { label: 'Review 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/' },
        ],
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
        studies: [
            { label: 'PubMed 2020', url: 'https://pubmed.ncbi.nlm.nih.gov/31680356/' },
            { label: 'PMC Full', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8246764/' },
            { label: 'Wiley', url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/ptr.6528' },
            { label: 'Review 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/' },
        ],
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
        studies: [
            { label: 'Shin 2015', url: 'https://pubmed.ncbi.nlm.nih.gov/25434532/' },
            { label: 'Li 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5810219/' },
            { label: 'Kim 2014', url: 'https://pubmed.ncbi.nlm.nih.gov/24496985/' },
            { label: 'Liu 2022', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9699788/' },
            { label: 'Review 2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/' },
        ],
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
        studies: [
            { label: 'Pyo 2007', url: 'https://www.semanticscholar.org/paper/The-effect-of-tripeptide-copper-complex-on-human-in-Pyo-Yoo/a7dd6f25ff702c912ba95f7e27fe9cd52414d69d' },
            { label: 'Lee 2016', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4969472/' },
            { label: 'Pickart 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/' },
            { label: 'Gelfuso 2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10643103/' },
            { label: 'Pickart 2008', url: 'https://pubmed.ncbi.nlm.nih.gov/18644225/' },
        ],
        isNew: true
    }
]

export default function Ingredients() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null)
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (expandedCard && !(e.target as Element).closest('.ingredient-card')) {
                setExpandedCard(null)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [expandedCard])

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
        <section id="ingredienten" className="py-16 sm:py-20 bg-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-3 sm:mb-4">
                    <span className="text-[#C4956A] text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                        DE OPLOSSING
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-3 sm:mt-4 mb-1 sm:mb-2">
                        6 gepatenteerde technologieën.
                    </h2>
                    <p className="text-lg sm:text-xl text-[#C4956A]">
                        1 krachtige formule.
                    </p>
                </div>

                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-gray-600 italic text-base sm:text-lg">
                        "Mooi verhaal. Maar werkt het ook?"
                    </p>
                </div>

                {expandedCard && (
                    <div
                        className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-10 transition-opacity duration-300"
                        onClick={() => setExpandedCard(null)}
                    />
                )}

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative">
                    {ingredients.map((ingredient, index) => {
                        const isExpanded = expandedCard === ingredient.id

                        return (
                            <div
                                key={ingredient.id}
                                className={`
                                    ingredient-card relative bg-gray-50 border rounded-xl sm:rounded-2xl p-3 sm:p-5 cursor-pointer
                                    transition-all duration-300 ease-out
                                    ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                    ${isExpanded
                                        ? 'z-20 bg-white shadow-2xl border-[#C4956A] scale-[1.02] sm:scale-105 col-span-2 lg:col-span-1'
                                        : 'border-gray-200 hover:border-[#C4956A]/50 hover:shadow-lg hover:-translate-y-1'
                                    }
                                `}
                                style={{ transitionDelay: visibleCards.has(index) ? '0s' : `${index * 0.1}s` }}
                                onClick={(e) => toggleCard(ingredient.id, e)}
                            >
                                {ingredient.isNew && (
                                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-[#C4956A] text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10">
                                        Nieuw
                                    </div>
                                )}

                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                                            <span className="text-[#C4956A] text-xs sm:text-sm font-bold">
                                                {ingredient.percentage}%
                                            </span>
                                            <h3 className="text-gray-900 text-sm sm:text-lg font-bold truncate">
                                                {ingredient.name}
                                            </h3>
                                        </div>
                                        {!isExpanded && (
                                            <p className="text-gray-500 text-[11px] sm:text-sm mt-0.5 sm:mt-1 line-clamp-2">
                                                {ingredient.shortDesc}
                                            </p>
                                        )}
                                    </div>
                                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isExpanded
                                            ? 'bg-[#C4956A]'
                                            : 'border border-[#C4956A]/30'
                                        }`}>
                                        {isExpanded
                                            ? <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                                            : <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C4956A]" />
                                        }
                                    </div>
                                </div>

                                {isExpanded && (
                                    <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {ingredient.benefits.map((benefit, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2 sm:gap-2.5 py-1 sm:py-1.5"
                                                style={{
                                                    animation: `fadeInLeft 0.3s ease ${i * 0.08}s forwards`,
                                                    opacity: 0
                                                }}
                                            >
                                                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C4956A] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-xs sm:text-sm">{benefit}</span>
                                            </div>
                                        ))}

                                        {/* Studies Section */}
                                        <div className="mt-4 pt-3 border-t border-gray-100">
                                            <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
                                                Klinische studies
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {ingredient.studies.map((study, i) => (
                                                    <a
                                                        key={i}
                                                        href={study.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-gray-100 hover:bg-[#C4956A]/10 border border-gray-200 hover:border-[#C4956A]/30 rounded-md text-[10px] sm:text-xs text-gray-700 hover:text-[#C4956A] transition-all group"
                                                    >
                                                        <span>{study.label}</span>
                                                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-center mt-8 sm:mt-12">
                    <div className="inline-flex items-center gap-2 sm:gap-4 bg-gray-50 border border-gray-200 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
                        <span className="text-gray-900 font-semibold">20.5% actief</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-600">6 technologieën</span>
                        <span className="text-gray-300 hidden sm:inline">·</span>
                        <span className="text-gray-600 hidden sm:inline">Hormoonvrij</span>
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
