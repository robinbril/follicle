"use client"

import { useState } from 'react'
import { ChevronDown, Check, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu",
        subheader: "Stimuleert stamcelactivatie",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        benefits: [
            "Activeert 4.000+ herstel-genen",
            "Stimuleert dermal papilla stamcellen",
            "+70% collageen na 12 weken"
        ],
        studies: [
            { name: "Pickart 2018", url: "#" },
            { name: "Lee 2016", url: "#" }
        ]
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        subheader: "+17% meer haar in 84 dagen",
        compound: "DHQG + EGCG2",
        benefits: [
            "Activeert slapende haarfollikels",
            "10.000+ nieuwe haren in trials",
            "85% ziet zichtbaar resultaat"
        ],
        studies: [
            { name: "Givaudan 2014", url: "#" }
        ]
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        subheader: "-93% DHT-blokkade",
        compound: "ACETYL TETRAPEPTIDE-3",
        benefits: [
            "Blokkeert DHT zonder hormonen",
            "+46% haardichtheid",
            "Versterkt verankering"
        ],
        studies: [
            { name: "Lucas Meyer 2024", url: "#" }
        ]
    },
    {
        id: "procapil",
        percentage: "3%",
        name: "Procapil",
        subheader: "+121% haargroei",
        compound: "BIOTINYL-GHK",
        benefits: [
            "Verbetert doorbloeding",
            "-47% uitval na 4 maanden",
            "Versterkt haarwortel"
        ],
        studies: [
            { name: "Sederma 2005", url: "#" }
        ]
    },
    {
        id: "anagain",
        percentage: "3%",
        name: "Anagain",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM",
        benefits: [
            "Verlengt groeicyclus",
            "+56% FGF-7 groeifactor",
            "Biologisch & hormoonvrij"
        ],
        studies: [
            { name: "Mibelle 2014", url: "#" }
        ]
    },
    {
        id: "baicapil",
        percentage: "4%",
        name: "Baicapil",
        subheader: "+59% haardichtheid",
        compound: "SCUTELLARIA + SOY",
        benefits: [
            "-60% uitval in 6 maanden",
            "+68% groei/rust verhouding",
            "Antioxidante bescherming"
        ],
        studies: [
            { name: "Provital 2015", url: "#" }
        ]
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>("ghkcu")

    return (
        <section id="ingredienten" className="py-24 bg-[#FAFAF9]">
            <div className="max-w-3xl mx-auto px-6">

                {/* Minimal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-[11px] tracking-[0.25em] uppercase text-[#999] mb-3">
                        Formule
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a1a] tracking-tight">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-sm text-[#888] mt-3">
                        20.5% werkzame concentratie
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="space-y-3">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            className={`group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${ing.hero
                                    ? 'bg-white border-2 border-[#C4956A]/40 shadow-sm'
                                    : 'bg-white border border-[#eee] hover:border-[#C4956A]/30'
                                } ${expanded === ing.id ? 'shadow-md' : 'hover:shadow-sm'}`}
                        >
                            {/* Header */}
                            <div className="px-5 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-[#C4956A] w-10">
                                        {ing.percentage}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-base font-medium text-[#1a1a1a]">
                                                {ing.name}
                                            </span>
                                            {ing.hero && (
                                                <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded bg-[#C4956A]/10 text-[#C4956A] font-medium">
                                                    Top
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-[#C4956A] mt-0.5 font-normal">
                                            {ing.subheader}
                                        </p>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4 text-[#bbb] group-hover:text-[#C4956A] transition-colors" />
                                </motion.div>
                            </div>

                            {/* Expandable */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-2 border-t border-[#f5f5f5]">
                                            <p className="text-[10px] tracking-[0.15em] text-[#bbb] mb-4">
                                                {ing.compound}
                                            </p>

                                            <ul className="space-y-2 mb-4">
                                                {ing.benefits.map((b, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -5 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                                        className="flex items-start gap-2 text-sm text-[#555]"
                                                    >
                                                        <Check className="w-3.5 h-3.5 text-[#C4956A] mt-0.5 flex-shrink-0" />
                                                        <span>{b}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {ing.studies.map((s, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={s.url}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1 text-xs text-[#888] hover:text-[#C4956A] transition-colors"
                                                    >
                                                        {s.name}
                                                        <ArrowUpRight className="w-3 h-3" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex justify-center gap-6 mt-10 text-xs text-[#999]">
                    <span>Hormoonvrij</span>
                    <span>·</span>
                    <span>Zonder parfum</span>
                    <span>·</span>
                    <span>Made in NL</span>
                </div>
            </div>
        </section>
    )
}
