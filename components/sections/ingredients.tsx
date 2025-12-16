"use client"

import { useState } from 'react'
import { ChevronDown, Check, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu",
        tagline: "Het geheim van dermatologen",
        subheader: "Vergelijkbaar met Minoxidil*",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        emoji: "🧬",
        benefits: [
            "Activeert 4.000+ herstel-genen",
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
        tagline: "Klinisch bewezen",
        subheader: "+17% meer haar",
        compound: "DHQG + EGCG2",
        emoji: "🔬",
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
        tagline: "DHT-blokkade",
        subheader: "-93% DHT",
        compound: "ACETYL TETRAPEPTIDE-3",
        emoji: "🛡️",
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
        tagline: "Doorbloeding",
        subheader: "+121% groei",
        compound: "BIOTINYL-GHK",
        emoji: "💧",
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
        tagline: "Groeicyclus",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM",
        emoji: "🌱",
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
        tagline: "Bescherming",
        subheader: "+59% dichtheid",
        compound: "SCUTELLARIA + SOY",
        emoji: "✨",
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
        <section id="ingredienten" className="py-24 sm:py-32 bg-gradient-to-b from-white to-[#FAF9F7]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Premium Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xs tracking-[0.3em] uppercase text-[#B8956A] font-medium mb-4"
                    >
                        De Wetenschap
                    </motion.p>

                    <h2 className="text-4xl sm:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight">
                        6 Actieve Technologieën
                    </h2>

                    <div className="flex items-center justify-center gap-4 text-sm text-[#666]">
                        <span className="font-semibold text-[#1a1a1a]">20.5%</span>
                        <span className="text-[#ccc]">·</span>
                        <span>Werkzame concentratie</span>
                        <span className="text-[#ccc]">·</span>
                        <span className="font-semibold text-[#1a1a1a]">24 studies</span>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className={`group rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${ing.hero
                                    ? 'md:col-span-2 bg-[#1a1a1a] text-white'
                                    : 'bg-white border border-[#E8E4DF] hover:border-[#B8956A]/50 hover:shadow-xl'
                                } ${expanded === ing.id ? (ing.hero ? '' : 'shadow-xl border-[#B8956A]') : ''}`}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            whileHover={{ y: -4 }}
                        >
                            {/* Card Header */}
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-start gap-5">
                                        {/* Emoji Icon */}
                                        <div className={`text-3xl ${ing.hero ? 'opacity-100' : 'opacity-90'}`}>
                                            {ing.emoji}
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-xl font-semibold ${ing.hero ? 'text-[#B8956A]' : 'text-[#1a1a1a]'}`}>
                                                    {ing.percentage}
                                                </span>
                                                <span className={`text-xl font-medium ${ing.hero ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                                    {ing.name}
                                                </span>
                                                {ing.hero && (
                                                    <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#B8956A] text-white">
                                                        ★ TOP INGREDIENT
                                                    </span>
                                                )}
                                            </div>
                                            <p className={`text-xs uppercase tracking-[0.15em] ${ing.hero ? 'text-white/50' : 'text-[#999]'}`}>
                                                {ing.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="mt-1"
                                    >
                                        <ChevronDown className={`w-5 h-5 ${ing.hero ? 'text-white/50' : 'text-[#ccc] group-hover:text-[#B8956A]'} transition-colors`} />
                                    </motion.div>
                                </div>

                                {/* Quantification - Big & Bold */}
                                <motion.p
                                    className={`text-2xl sm:text-3xl font-medium mt-4 ${ing.hero ? 'text-[#B8956A]' : 'text-[#B8956A]'}`}
                                >
                                    {ing.subheader}
                                </motion.p>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`px-6 sm:px-8 pb-8 pt-4 ${ing.hero ? 'border-t border-white/10' : 'border-t border-[#F0EDE8]'}`}>

                                            {/* Compound */}
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className={`text-[11px] tracking-[0.2em] mb-5 ${ing.hero ? 'text-white/30' : 'text-[#bbb]'}`}
                                            >
                                                {ing.compound}
                                            </motion.p>

                                            {/* Benefits */}
                                            <ul className="space-y-3 mb-6">
                                                {ing.benefits.map((b, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.15 + idx * 0.1 }}
                                                        className={`flex items-start gap-3 text-[15px] ${ing.hero ? 'text-white/80' : 'text-[#444]'}`}
                                                    >
                                                        <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${ing.hero ? 'text-[#B8956A]' : 'text-[#B8956A]'}`} />
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Studies */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <p className={`text-[10px] tracking-[0.2em] mb-3 ${ing.hero ? 'text-white/30' : 'text-[#bbb]'}`}>
                                                    STUDIES
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {ing.studies.map((s, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href={s.url}
                                                            onClick={(e) => e.stopPropagation()}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 ${ing.hero
                                                                    ? 'bg-white/10 text-white/70 hover:bg-[#B8956A] hover:text-white'
                                                                    : 'bg-[#F5F3F0] text-[#666] hover:bg-[#B8956A] hover:text-white'
                                                                }`}
                                                        >
                                                            {s.name} <ExternalLink className="w-3 h-3" />
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-14"
                >
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-[#999]">
                        <span>Zonder parfum</span>
                        <span className="text-[#ddd]">·</span>
                        <span>Hormoonvrij</span>
                        <span className="text-[#ddd]">·</span>
                        <span>Made in NL</span>
                    </div>
                    <p className="text-[11px] text-[#bbb] mt-4">
                        *Zonder bijwerkingen. Claims gebaseerd op peer-reviewed studies.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
