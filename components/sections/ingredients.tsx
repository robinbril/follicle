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
        benefits: ["4.000+ herstel-genen", "Stimuleert stamcellen", "+70% collageen"],
        study: "Pickart 2018"
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        subheader: "+17% meer haar",
        compound: "DHQG + EGCG2",
        benefits: ["Activeert follikels", "10.000+ nieuwe haren", "85% ziet resultaat"],
        study: "Givaudan 2014"
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        subheader: "-93% DHT",
        compound: "ACETYL TETRAPEPTIDE-3",
        benefits: ["Blokkeert DHT", "+46% dichtheid", "Versterkt verankering"],
        study: "Lucas Meyer 2024"
    },
    {
        id: "procapil",
        percentage: "3%",
        name: "Procapil",
        subheader: "+121% groei",
        compound: "BIOTINYL-GHK",
        benefits: ["Meer doorbloeding", "-47% uitval", "Versterkt wortel"],
        study: "Sederma 2005"
    },
    {
        id: "anagain",
        percentage: "3%",
        name: "Anagain",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM",
        benefits: ["Verlengt cyclus", "+56% FGF-7", "Biologisch"],
        study: "Mibelle 2014"
    },
    {
        id: "baicapil",
        percentage: "4%",
        name: "Baicapil",
        subheader: "+59% dichtheid",
        compound: "SCUTELLARIA + SOY",
        benefits: ["-60% uitval", "+68% A/T ratio", "Antioxidant"],
        study: "Provital 2015"
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>(null)

    return (
        <section id="ingredienten" className="py-20 bg-[#FAFAF9]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-2">
                        Formule
                    </p>
                    <h2 className="text-2xl font-light text-[#1a1a1a]">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-sm text-[#888] mt-2">
                        20.5% werkzame concentratie
                    </p>
                </motion.div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            className={`cursor-pointer transition-all duration-200 rounded-lg overflow-hidden ${ing.hero
                                    ? 'bg-white border-2 border-[#C4956A]/30'
                                    : 'bg-white border border-[#e5e5e5] hover:border-[#C4956A]/40'
                                } ${expanded === ing.id ? 'shadow-md' : 'hover:shadow-sm'}`}
                        >
                            {/* Compact Header */}
                            <div className="p-4">
                                <div className="flex items-baseline justify-between mb-1">
                                    <span className="text-xs font-medium text-[#C4956A]">
                                        {ing.percentage}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-3.5 h-3.5 text-[#ccc]" />
                                    </motion.div>
                                </div>
                                <h3 className="text-sm font-medium text-[#1a1a1a] mb-1">
                                    {ing.name}
                                </h3>
                                <p className="text-xs text-[#C4956A]">
                                    {ing.subheader}
                                </p>
                            </div>

                            {/* Expandable */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 border-t border-[#f5f5f5]">
                                            <p className="text-[9px] tracking-wider text-[#bbb] mt-3 mb-2">
                                                {ing.compound}
                                            </p>
                                            <ul className="space-y-1 mb-3">
                                                {ing.benefits.map((b, idx) => (
                                                    <li key={idx} className="flex items-center gap-1.5 text-xs text-[#666]">
                                                        <Check className="w-3 h-3 text-[#C4956A]" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                            <a
                                                href="#"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center gap-1 text-[10px] text-[#999] hover:text-[#C4956A]"
                                            >
                                                {ing.study} <ArrowUpRight className="w-2.5 h-2.5" />
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex justify-center gap-4 mt-10 text-[10px] text-[#999] tracking-wider">
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
