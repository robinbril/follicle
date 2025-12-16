"use client"

import { useState } from 'react'
import { ChevronDown, Check, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu",
        subheader: "Vergelijkbaar met Minoxidil*",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        benefits: [
            "Activeert 4.000+ herstel-genen in je hoofdhuid",
            "Stimuleert stamcellen voor nieuwe groei",
            "+70% collageen na 12 weken"
        ],
        studies: [
            { name: "Pickart 2018", url: "#" },
            { name: "Lee 2016", url: "#" },
            { name: "Badenhorst 2016", url: "#" }
        ]
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        subheader: "+17% meer haar",
        compound: "DHQG + EGCG2",
        benefits: [
            "Activeert slapende haarfollikels",
            "10.000+ nieuwe haren in 84 dagen",
            "85% ziet zichtbaar resultaat"
        ],
        studies: [
            { name: "Givaudan 2014", url: "#" },
            { name: "Karaca 2019", url: "#" }
        ]
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        subheader: "-93% DHT",
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
        subheader: "+121% groei",
        compound: "BIOTINYL-GHK",
        benefits: [
            "Meer doorbloeding naar follikels",
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
        subheader: "+59% dichtheid",
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
        <section id="ingredienten" className="py-20 sm:py-28 bg-[#FDFCFA]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-medium text-[#1a1a1a] mb-4 tracking-tight">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-[#6B6560] text-lg">
                        20.5% werkzame concentratie
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.6 }}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white border border-[#E8E4DF] hover:border-[#C4956A]/50 ${ing.hero ? 'md:col-span-2' : ''
                                } ${expanded === ing.id ? 'shadow-md border-[#C4956A]' : 'hover:shadow-sm'}`}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            whileHover={{ y: -2 }}
                        >
                            {/* Card Header */}
                            <div className="p-5 sm:p-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl font-semibold text-[#C4956A]">
                                            {ing.percentage}
                                        </span>
                                        <span className="text-lg font-medium text-[#1a1a1a]">
                                            {ing.name}
                                        </span>
                                        {ing.hero && (
                                            <span className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#C4956A] text-white">
                                                ★ TOP
                                            </span>
                                        )}
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-[#999]" />
                                    </motion.div>
                                </div>

                                {/* Subheader - Gold accent */}
                                <p className="text-base font-semibold text-[#C4956A] mt-1">
                                    {ing.subheader}
                                </p>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-[#F0EDE8]">

                                            {/* Compound */}
                                            <p className="text-[10px] tracking-[0.15em] text-[#9A948E] mb-4">
                                                {ing.compound}
                                            </p>

                                            {/* Benefits */}
                                            <ul className="space-y-2 mb-5">
                                                {ing.benefits.map((b, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.06 }}
                                                        className="flex items-start gap-2.5 text-sm text-[#4A4540]"
                                                    >
                                                        <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-0.5" />
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Studies */}
                                            <div className="flex flex-wrap gap-2">
                                                {ing.studies.map((s, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={s.url}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-[#F5F3F0] text-[#6B6560] hover:bg-[#C4956A] hover:text-white transition-colors"
                                                    >
                                                        {s.name} <ExternalLink className="w-3 h-3" />
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
                <div className="flex flex-wrap justify-center gap-3 mt-12 text-sm text-[#6B6560]">
                    <span className="bg-white border border-[#E8E4DF] px-4 py-2 rounded-full">Zonder parfum</span>
                    <span className="bg-white border border-[#E8E4DF] px-4 py-2 rounded-full">Hormoonvrij</span>
                    <span className="bg-white border border-[#E8E4DF] px-4 py-2 rounded-full">Made in NL</span>
                </div>

                <p className="text-center text-xs text-[#9A948E] mt-6">
                    *Zonder bijwerkingen. Claims gebaseerd op peer-reviewed studies.
                </p>
            </div>
        </section>
    )
}
