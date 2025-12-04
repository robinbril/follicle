"use client"

import { useState } from 'react'
import { Plus, Check } from 'lucide-react'

const ingredients = [
    {
        id: 'redensyl',
        percentage: '3%',
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
        percentage: '5%',
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
        percentage: '3%',
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
        percentage: '3%',
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
        percentage: '4%',
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
        percentage: '2.5%',
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

    const toggleCard = (cardId: string) => {
        setExpandedCard(expandedCard === cardId ? null : cardId)
    }

    return (
        <section id="ingredienten" className="py-20 bg-[#111111]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#C4956A] text-sm font-semibold tracking-[0.2em] uppercase">
                        DE OPLOSSING
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2">
                        6 gepatenteerde technologieën.
                    </h2>
                    <p className="text-xl text-[#C4956A]">
                        1 krachtige formule.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ingredients.map((ingredient) => (
                        <div
                            key={ingredient.id}
                            id={`card-${ingredient.id}`}
                            onClick={() => toggleCard(ingredient.id)}
                            className={`relative bg-[#1A1A1A] border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${expandedCard === ingredient.id
                                    ? 'border-[#C4956A] shadow-[0_0_30px_rgba(196,149,106,0.2)] sm:col-span-2 lg:col-span-2'
                                    : 'border-[#2A2A2A] hover:border-[#C4956A]/50 hover:shadow-[0_0_20px_rgba(196,149,106,0.1)] hover:-translate-y-1'
                                }`}
                        >
                            {/* NEW Badge */}
                            {ingredient.isNew && (
                                <div className="absolute -top-2 -right-2 bg-[#C4956A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Nieuw
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-[#C4956A] text-sm font-semibold">
                                        {ingredient.percentage}
                                    </span>
                                    <h3 className="text-white text-xl font-bold mt-1">
                                        {ingredient.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {ingredient.shortDesc}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-[#C4956A]/30 flex items-center justify-center transition-transform duration-300 ${expandedCard === ingredient.id ? 'rotate-45 bg-[#C4956A]/20' : ''
                                    }`}>
                                    <Plus className="w-4 h-4 text-[#C4956A]" />
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div className={`overflow-hidden transition-all duration-400 ${expandedCard === ingredient.id ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="border-t border-[#2A2A2A] pt-6">
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {ingredient.fullDesc}
                                    </p>

                                    {/* Benefits */}
                                    <div className="bg-[#111111] rounded-xl p-4 mb-4">
                                        {ingredient.benefits.map((benefit, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 py-2"
                                                style={{
                                                    animation: expandedCard === ingredient.id
                                                        ? `fadeInLeft 0.3s ease ${0.1 + index * 0.1}s forwards`
                                                        : 'none',
                                                    opacity: 0
                                                }}
                                            >
                                                <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                                                <span className="text-white text-sm">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Source */}
                                    <p className="text-gray-600 text-xs">
                                        Bron: {ingredient.source}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Bar */}
                <div className="flex justify-center mt-12">
                    <div className="inline-flex items-center gap-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-6 py-3 text-sm">
                        <span className="text-white font-semibold">20.5% actief</span>
                        <span className="text-[#444]">·</span>
                        <span className="text-white">6 technologieën</span>
                        <span className="text-[#444]">·</span>
                        <span className="text-white">Hormoonvrij</span>
                    </div>
                </div>
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
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
