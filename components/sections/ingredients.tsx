"use client"

import { useState } from 'react'
import { ChevronDown, Check, ExternalLink, Sparkles, Beaker, Shield, Leaf } from 'lucide-react'
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
        icon: Sparkles,
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
        tagline: "Klinisch bewezen",
        subheader: "+17% meer haar",
        compound: "DHQG + EGCG2",
        icon: Beaker,
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
        icon: Shield,
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
        icon: Leaf,
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
        icon: Leaf,
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
        icon: Shield,
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

                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 bg-[#C4956A]/10 text-[#C4956A] px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <Beaker className="w-4 h-4" />
                        Klinisch onderbouwd
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl font-medium text-[#1a1a1a] mb-4 tracking-tight">
                        6 Actieve Technologieën
                    </h2>

                    <p className="text-[#6B6560] text-lg mb-8">
                        Elke druppel bevat <span className="font-semibold text-[#C4956A]">20.5%</span> werkzame ingrediënten
                    </p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-8 text-center"
                    >
                        <div>
                            <p className="text-2xl font-semibold text-[#C4956A]">24</p>
                            <p className="text-xs text-[#9A948E] uppercase tracking-wider">Studies</p>
                        </div>
                        <div className="w-px h-10 bg-[#E8E4DF]" />
                        <div>
                            <p className="text-2xl font-semibold text-[#C4956A]">20.5%</p>
                            <p className="text-xs text-[#9A948E] uppercase tracking-wider">Actief</p>
                        </div>
                        <div className="w-px h-10 bg-[#E8E4DF]" />
                        <div>
                            <p className="text-2xl font-semibold text-[#C4956A]">0%</p>
                            <p className="text-xs text-[#9A948E] uppercase tracking-wider">Hormonen</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredients.map((ing, i) => {
                        const Icon = ing.icon
                        return (
                            <motion.div
                                key={ing.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-white border border-[#E8E4DF] hover:border-[#C4956A] ${ing.hero ? 'md:col-span-2' : ''
                                    } ${expanded === ing.id ? 'shadow-lg border-[#C4956A]' : 'hover:shadow-md'}`}
                                onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                {/* Card Header */}
                                <div className="p-5 sm:p-6">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <motion.div
                                                className="w-10 h-10 rounded-xl bg-[#C4956A]/10 flex items-center justify-center flex-shrink-0"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <Icon className="w-5 h-5 text-[#C4956A]" />
                                            </motion.div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className="text-lg font-semibold text-[#C4956A]">
                                                        {ing.percentage}
                                                    </span>
                                                    <span className="text-lg font-medium text-[#1a1a1a]">
                                                        {ing.name}
                                                    </span>
                                                    {ing.hero && (
                                                        <motion.span
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            className="text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-[#C4956A] text-white"
                                                        >
                                                            ★ GAME-CHANGER
                                                        </motion.span>
                                                    )}
                                                </div>
                                                <p className="text-xs text-[#9A948E] uppercase tracking-wider">
                                                    {ing.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                            className="mt-2"
                                        >
                                            <ChevronDown className="w-5 h-5 text-[#C4956A] opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    </div>

                                    {/* Subheader - Quantification */}
                                    <motion.p
                                        className="text-xl font-semibold text-[#C4956A] mt-3"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1 }}
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
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-[#F0EDE8]">

                                                {/* Compound */}
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-[10px] tracking-[0.2em] text-[#9A948E] mb-4 pb-3 border-b border-[#F0EDE8]"
                                                >
                                                    {ing.compound}
                                                </motion.p>

                                                {/* Benefits */}
                                                <ul className="space-y-2.5 mb-5">
                                                    {ing.benefits.map((b, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.15 + idx * 0.08 }}
                                                            className="flex items-start gap-3 text-sm text-[#4A4540]"
                                                        >
                                                            <div className="w-5 h-5 rounded-full bg-[#C4956A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                                <Check className="w-3 h-3 text-[#C4956A]" />
                                                            </div>
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
                                                    <p className="text-[10px] tracking-[0.2em] text-[#9A948E] mb-2">
                                                        KLINISCHE STUDIES
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {ing.studies.map((s, idx) => (
                                                            <motion.a
                                                                key={idx}
                                                                href={s.url}
                                                                onClick={(e) => e.stopPropagation()}
                                                                whileHover={{ scale: 1.05 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-[#F5F3F0] text-[#6B6560] hover:bg-[#C4956A] hover:text-white transition-all duration-200"
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
                        )
                    })}
                </div>

                {/* Footer Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mt-12"
                >
                    {["Zonder parfum", "Hormoonvrij", "Made in NL"].map((badge, i) => (
                        <motion.span
                            key={badge}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="text-sm text-[#6B6560] bg-white border border-[#E8E4DF] px-4 py-2 rounded-full hover:border-[#C4956A] transition-colors"
                        >
                            {badge}
                        </motion.span>
                    ))}
                </motion.div>

                <p className="text-center text-xs text-[#9A948E] mt-6">
                    *Zonder bijwerkingen. Claims gebaseerd op peer-reviewed studies.
                </p>
            </div>
        </section>
    )
}
