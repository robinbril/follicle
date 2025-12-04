"use client"

import { useState, useEffect, useRef } from 'react'
import { Plus, Check } from 'lucide-react'

const ingredients = [
    {
        id: 'redensyl',
        percentage: 3,
        name: 'REDENSYL',
        shortDesc: 'Activeert follikel stamcellen',
        fullDesc: 'Redensyl® is een doorbraak in haarverzorging. Het activeert haarfollikel stamcellen (ORSC) en stimuleert de dermale papilla cellen - de motor van haargroei.',
        benefits: [
            '85% zag verbetering na 84 dagen',
            'Verdubbelt de haar anageen/telogeen ratio',
            'Geen bekende bijwerkingen'
        ],
        source: 'Int. Journal of Cosmetic Science, 2014',
        isNew: false
    },
    {
        id: 'capixyl',
        percentage: 5,
        name: 'CAPIXYL',
        shortDesc: 'Remt DHT productie',
        fullDesc: 'Capixyl™ combineert een biomimetisch peptide (Acetyl Tetrapeptide-3) met rode klaver extract. Het remt DHT - de hoofdoorzaak van haarverlies bij mannen.',
        benefits: [
            'Remt DHT productie tot 52%',
            'Versterkt extracellulaire matrix',
            'Verbetert haarverankering in follikel'
        ],
        source: 'Clinical study, Lucas Meyer Cosmetics',
        isNew: false
    },
    {
        id: 'procapil',
        percentage: 3,
        name: 'PROCAPIL',
        shortDesc: 'Verbetert bloedcirculatie',
        fullDesc: 'Procapil® verbetert de bloedcirculatie naar haarfollikels en versterkt de verankering van haar in de hoofdhuid. Het voorkomt dat follikels "verstikken."',
        benefits: [
            'Verbetert microcirculatie',
            'Versterkt haarwortel',
            'Voorkomt follikel veroudering'
        ],
        source: 'Sederma Clinical Data',
        isNew: false
    },
    {
        id: 'anagain',
        percentage: 3,
        name: 'ANAGAIN',
        shortDesc: 'Verlengt groeifase',
        fullDesc: 'AnaGain™ is gebaseerd op biologische erwtenspruit extract. Het verlengt de anagene (groei) fase van haar en verkort de telogene (rust) fase.',
        benefits: [
            'Stimuleert Noggin-signaalstof',
            'Verlengt actieve groeifase',
            'Start nieuwe haargroeicycli'
        ],
        source: 'Mibelle Biochemistry Research',
        isNew: false
    },
    {
        id: 'baicapil',
        percentage: 4,
        name: 'BAICAPIL',
        shortDesc: 'Beschermt tegen stress',
        fullDesc: 'Baicapil™ combineert drie krachtige plantenextracten: Scutellaria baicalensis, soja en tarwekiemen. Het beschermt follikels tegen oxidatieve stress.',
        benefits: [
            'Beschermt tegen vrije radicalen',
            'Vertraagt follikel veroudering',
            '90% minder haarverlies in studies'
        ],
        source: 'Provital Group Clinical Study',
        isNew: false
    },
    {
        id: 'ghk-cu',
        percentage: 2.5,
        name: 'GHK-Cu',
        shortDesc: 'Stimuleert collageen',
        fullDesc: 'GHK-Cu is een koperpeptide dat van nature in je lichaam voorkomt. Het stimuleert collageen productie en versnelt celvernieuwing rond de haarfollikel.',
        benefits: [
            '33% snellere resultaten dan Minoxidil',
            'Stimuleert collageen en elastine',
            'Vergroot actieve follikels'
        ],
        source: 'Skin Pharmacology & Physiology, 2018',
        isNew: true
    }
]

export default function Ingredients() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null)
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
    const sectionRef = useRef<HTMLDivElement>(null)

    // Staggered entrance animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger the card appearances
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

    const toggleCard = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId)
    }

    return (
        <section id="ingredienten" className="py-20 bg-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Transition Text - Client Thought */}
                <div className="text-center mb-4">
                    <p className="text-gray-500 italic text-lg">
                        "Oké, maar wat zit er dan precies in?"
                    </p>
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#C4956A] text-sm font-semibold tracking-[0.2em] uppercase">
                        DE OPLOSSING
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">
                        6 gepatenteerde technologieën.
                    </h2>
                    <p className="text-xl text-[#C4956A]">
                        1 krachtige formule.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ingredients.map((ingredient, index) => (
                        <div
                            key={ingredient.id}
                            id={`card-${ingredient.id}`}
                            onClick={() => toggleCard(ingredient.id)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect()
                                const x = ((e.clientX - rect.left) / rect.width) * 100
                                const y = ((e.clientY - rect.top) / rect.height) * 100
                                e.currentTarget.style.setProperty('--mouse-x', `${x}%`)
                                e.currentTarget.style.setProperty('--mouse-y', `${y}%`)
                            }}
                            className={`
                                relative bg-gray-50 border rounded-2xl p-6 cursor-pointer
                                transition-all duration-500 ease-out
                                ${visibleCards.has(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }
                                ${expandedCard === ingredient.id
                                    ? 'border-[#C4956A] shadow-xl scale-[1.02] sm:col-span-2 lg:col-span-2 bg-white'
                                    : 'border-gray-200 hover:border-[#C4956A]/50 hover:shadow-lg hover:-translate-y-1'
                                }
                                before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
                                before:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(196,149,106,0.1)_0%,transparent_50%)]
                                before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                            `}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* NEW Badge */}
                            {ingredient.isNew && (
                                <div className="absolute -top-2 -right-2 bg-[#C4956A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Nieuw
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="flex items-start justify-between relative z-10">
                                <div>
                                    <span className="text-[#C4956A] text-sm font-semibold">
                                        {ingredient.percentage}%
                                    </span>
                                    <h3 className="text-gray-900 text-xl font-bold mt-1">
                                        {ingredient.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {ingredient.shortDesc}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-[#C4956A]/30 flex items-center justify-center transition-all duration-300 ${expandedCard === ingredient.id ? 'rotate-45 bg-[#C4956A] border-[#C4956A]' : 'hover:bg-[#C4956A]/10'
                                    }`}>
                                    <Plus className={`w-4 h-4 transition-colors ${expandedCard === ingredient.id ? 'text-white' : 'text-[#C4956A]'}`} />
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div
                                className={`grid transition-all duration-500 ease-out ${expandedCard === ingredient.id ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-gray-200 pt-6">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {ingredient.fullDesc}
                                        </p>

                                        {/* Benefits */}
                                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                                            {ingredient.benefits.map((benefit, benefitIndex) => (
                                                <div
                                                    key={benefitIndex}
                                                    className={`flex items-center gap-3 py-2 transition-all duration-300 ${expandedCard === ingredient.id
                                                            ? 'opacity-100 translate-x-0'
                                                            : 'opacity-0 -translate-x-2'
                                                        }`}
                                                    style={{
                                                        transitionDelay: expandedCard === ingredient.id
                                                            ? `${0.15 + benefitIndex * 0.1}s`
                                                            : '0s'
                                                    }}
                                                >
                                                    <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                                                    <span className="text-gray-800 text-sm">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Source */}
                                        <p className="text-gray-400 text-xs">
                                            Bron: {ingredient.source}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Bar */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-sm">
                        <span className="text-gray-900 font-semibold">20.5% actief</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-700">6 technologieën</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-700">Hormoonvrij</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
