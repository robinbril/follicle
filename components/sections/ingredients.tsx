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
        ],
        color: "#3B82F6",
        bgColor: "from-blue-50 to-cyan-50"
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
        ],
        color: "#F59E0B",
        bgColor: "from-amber-50 to-orange-50"
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
        ],
        color: "#EC4899",
        bgColor: "from-pink-50 to-rose-50"
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
        ],
        color: "#10B981",
        bgColor: "from-emerald-50 to-teal-50"
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
        ],
        color: "#8B5CF6",
        bgColor: "from-violet-50 to-purple-50"
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
        ],
        color: "#06B6D4",
        bgColor: "from-cyan-50 to-sky-50"
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>("ghkcu")

    return (
        <section id="ingredienten" className="py-20 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-3">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-[#666]">
                        20.5% werkzame concentratie · <span className="font-medium text-[#1a1a1a]">Klik voor studies</span>
                    </p>
                </motion.div>

                {/* Concentration Bar */}
                <div className="flex items-center justify-center gap-1 mb-10">
                    {ingredients.map((ing) => (
                        <motion.div
                            key={ing.id}
                            className="h-2.5 rounded-full cursor-pointer"
                            style={{
                                backgroundColor: ing.color,
                                width: `${parseFloat(ing.percentage) * 14}px`
                            }}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                    <span className="ml-4 text-xs font-semibold text-[#1a1a1a] bg-[#F3F4F6] px-3 py-1 rounded-full">
                        20.5%
                    </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${ing.hero
                                    ? `md:col-span-2 bg-gradient-to-br ${ing.bgColor} border-2`
                                    : `bg-gradient-to-br ${ing.bgColor}`
                                } ${expanded === ing.id ? 'shadow-lg' : 'hover:shadow-md'}`}
                            style={{ borderColor: ing.hero ? ing.color : 'transparent' }}
                            onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                            whileHover={{ y: -2 }}
                        >
                            {/* Card Header - Compact */}
                            <div className="p-5">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="text-2xl font-bold"
                                            style={{ color: ing.color }}
                                        >
                                            {ing.percentage}
                                        </span>
                                        <span className="text-lg font-semibold text-[#1a1a1a]">
                                            {ing.name}
                                        </span>
                                        {ing.hero && (
                                            <span
                                                className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full text-white"
                                                style={{ backgroundColor: ing.color }}
                                            >
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

                                {/* Subheader - POP COLOR */}
                                <p
                                    className="text-lg font-bold mt-1"
                                    style={{ color: ing.color }}
                                >
                                    {ing.subheader}
                                </p>
                            </div>

                            {/* Expandable Content - Compact */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-2 border-t border-black/5">

                                            {/* Compound - tiny */}
                                            <p className="text-[10px] tracking-widest text-[#999] mb-3">
                                                {ing.compound}
                                            </p>

                                            {/* Benefits - compact */}
                                            <ul className="space-y-1.5 mb-4">
                                                {ing.benefits.map((b, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -5 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                                        className="flex items-center gap-2 text-sm text-[#333]"
                                                    >
                                                        <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: ing.color }} />
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Studies - pill row */}
                                            <div className="flex flex-wrap gap-2">
                                                {ing.studies.map((s, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={s.url}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white/80 text-[#555] hover:text-white transition-colors"
                                                        style={{ ['--hover-bg' as string]: ing.color }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ing.color}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)'}
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
                <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm text-[#666]">
                    <span className="bg-[#F3F4F6] px-4 py-2 rounded-full">Zonder parfum</span>
                    <span className="bg-[#F3F4F6] px-4 py-2 rounded-full">Hormoonvrij</span>
                    <span className="bg-[#F3F4F6] px-4 py-2 rounded-full">Made in NL</span>
                </div>

                <p className="text-center text-xs text-[#999] mt-6">
                    *Zonder bijwerkingen. Claims gebaseerd op peer-reviewed studies.
                </p>
            </div>
        </section>
    )
}
