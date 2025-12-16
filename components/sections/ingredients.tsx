"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Check, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "5%",
        name: "GHK-Cu",
        subheader: "5% concentratie (markt avg 0,5-1%)*",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        benefits: ["Activeert 4.000+ herstel-genen", "Stimuleert dermal papilla stamcellen", "+70% collageen productie"],
        studies: [
            { name: "Pickart 2018", url: "#" },
            { name: "Lee 2016", url: "#" },
            { name: "Badenhorst 2016", url: "#" },
            { name: "Pickart 2008", url: "#" }
        ]
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        subheader: "-93% DHT-blokkade",
        compound: "ACETYL TETRAPEPTIDE-3",
        benefits: ["Blokkeert DHT zonder hormonen", "+46% haardichtheid", "Versterkt verankering"],
        studies: [
            { name: "Lucas Meyer 2024", url: "#" },
            { name: "Thai Study 2020", url: "#" }
        ]
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        subheader: "+17% meer haar",
        compound: "DHQG + EGCG2",
        benefits: ["Activeert slapende haarfollikels", "10.000+ nieuwe haren in trials", "85% ziet zichtbaar resultaat"],
        studies: [
            { name: "Givaudan 2014", url: "#" },
            { name: "Karaca 2019", url: "#" },
            { name: "Eslahi 2022", url: "#" }
        ]
    },
    {
        id: "baicapil",
        percentage: "4%",
        name: "Baicapil",
        subheader: "+59% dichtheid",
        compound: "SCUTELLARIA + SOY",
        benefits: ["-60% haaruitval in 6 maanden", "+68% groei/rust verhouding", "Antioxidante bescherming"],
        studies: [
            { name: "Provital 2015", url: "#" },
            { name: "Opast 2018", url: "#" }
        ]
    },
    {
        id: "procapil",
        percentage: "3%",
        name: "Procapil",
        subheader: "+121% groei",
        compound: "BIOTINYL-GHK",
        benefits: ["Verbetert doorbloeding", "-47% uitval na 4 maanden", "Versterkt haarwortel"],
        studies: [
            { name: "Sederma 2005", url: "#" },
            { name: "PMC Review 2024", url: "#" }
        ]
    },
    {
        id: "anagain",
        percentage: "3%",
        name: "Anagain",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM",
        benefits: ["Verlengt groeicyclus", "+56% FGF-7 groeifactor", "100% biologisch"],
        studies: [
            { name: "Mibelle 2014", url: "#" },
            { name: "Grothe 2016", url: "#" }
        ]
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>(null)
    const [showCursor, setShowCursor] = useState(false)
    const [cursorStage, setCursorStage] = useState(0)
    const [animationPlayed, setAnimationPlayed] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationPlayed) {
                    setAnimationPlayed(true)

                    // Stage 0: Cursor appears above cards, centered
                    setTimeout(() => {
                        setShowCursor(true)
                        setCursorStage(0)
                    }, 1200)

                    // Stage 1: Move to GHK-Cu card
                    setTimeout(() => {
                        setCursorStage(1)
                    }, 1800)

                    // Stage 2: Click effect
                    setTimeout(() => {
                        setCursorStage(2)
                        setExpanded("ghkcu")
                    }, 2400)

                    // Stage 3: Fade out
                    setTimeout(() => {
                        setShowCursor(false)
                    }, 3200)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.4
        })

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [animationPlayed])

    // Cursor positions for each stage (relative to cards container)
    const cursorPositions = [
        { x: '50%', y: '-20px' },      // Stage 0: Above cards, centered
        { x: '120px', y: '80px' },     // Stage 1: On GHK-Cu card
        { x: '120px', y: '80px' },     // Stage 2: Click (same position)
    ]

    return (
        <section
            ref={sectionRef}
            id="ingredienten"
            className="py-24 sm:py-32 bg-gradient-to-b from-[#FDFCFA] to-white overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-sm text-[#C4956A] font-medium mb-4"
                    >
                        Kracht uit wetenschap
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1a1a1a] tracking-tight mb-5"
                    >
                        6 Gepatenteerde Technologieën
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-lg text-[#666] max-w-xl mx-auto"
                    >
                        Elk ingrediënt geselecteerd op <span className="text-[#1a1a1a]">klinisch bewijs</span>.
                        Samen vormen ze de hoogste concentratie op de markt.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="inline-flex items-center gap-3 mt-8 px-5 py-3 bg-[#1a1a1a] text-white rounded-full text-sm"
                    >
                        <span className="font-semibold">20.5%</span>
                        <span className="text-white/60">actieve concentratie</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="text-white/60">24 studies</span>
                    </motion.div>
                </motion.div>

                {/* Cards Container with Cursor */}
                <div ref={cardsRef} className="relative">

                    {/* Animated Cursor */}
                    <AnimatePresence>
                        {showCursor && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, x: '-50%' }}
                                animate={{
                                    opacity: cursorStage === 2 ? [1, 0.7, 1] : 1,
                                    scale: cursorStage === 2 ? [1, 0.9, 1] : 1,
                                    left: cursorPositions[cursorStage].x,
                                    top: cursorPositions[cursorStage].y,
                                    x: cursorStage === 0 ? '-50%' : 0
                                }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                className="absolute z-50 pointer-events-none"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                                    <path
                                        d="M5 3L19 12L12 14L9 21L5 3Z"
                                        fill="#1a1a1a"
                                        stroke="white"
                                        strokeWidth="2"
                                    />
                                </svg>
                                {/* Click ripple */}
                                {cursorStage === 2 && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0.6 }}
                                        animate={{ scale: 2.5, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#C4956A]"
                                    />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Cards Grid - align-start prevents stretching */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                        {ingredients.map((ing, i) => (
                            <motion.div
                                key={ing.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`group cursor-pointer rounded-2xl overflow-hidden transition-shadow duration-300 ${ing.hero
                                        ? 'bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white shadow-xl'
                                        : 'bg-white border border-[#e8e8e8] hover:border-[#C4956A]/50 hover:shadow-lg'
                                    }`}
                            >
                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Top Row */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-2xl font-light text-[#C4956A]">
                                                {ing.percentage}
                                            </span>
                                            {ing.hero && (
                                                <motion.span
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="ml-2 text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md bg-[#C4956A] text-white font-medium"
                                                >
                                                    Bewezen
                                                </motion.span>
                                            )}
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <ChevronDown className={`w-5 h-5 ${ing.hero ? 'text-white/40' : 'text-[#ccc] group-hover:text-[#C4956A]'} transition-colors`} />
                                        </motion.div>
                                    </div>

                                    {/* Name & Subheader */}
                                    <h3 className={`text-xl font-medium mb-1 ${ing.hero ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                        {ing.name}
                                    </h3>
                                    <p className="text-sm text-[#C4956A]">
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
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className={`px-6 pb-6 pt-2 ${ing.hero ? 'border-t border-white/10' : 'border-t border-[#f0f0f0]'}`}>
                                                <p className={`text-[10px] tracking-[0.15em] mb-4 ${ing.hero ? 'text-white/30' : 'text-[#bbb]'}`}>
                                                    {ing.compound}
                                                </p>

                                                <ul className="space-y-2 mb-4">
                                                    {ing.benefits.map((b, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 + idx * 0.08 }}
                                                            className={`flex items-start gap-2 text-sm ${ing.hero ? 'text-white/80' : 'text-[#555]'}`}
                                                        >
                                                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 text-[#C4956A]`} />
                                                            {b}
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {ing.studies.map((s, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={s.url}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full transition-all ${ing.hero
                                                                ? 'bg-white/10 text-white/70 hover:bg-[#C4956A] hover:text-white'
                                                                : 'bg-[#f5f5f5] text-[#666] hover:bg-[#C4956A] hover:text-white'
                                                                }`}
                                                        >
                                                            {s.name} <ArrowUpRight className="w-3 h-3" />
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
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-6 mt-14 text-sm text-[#999]"
                >
                    <span>Hormoonvrij</span>
                    <span className="text-[#ddd]">·</span>
                    <span>Zonder parfum</span>
                    <span className="text-[#ddd]">·</span>
                    <span>Made in NL</span>
                </motion.div>
            </div>
        </section>
    )
}
