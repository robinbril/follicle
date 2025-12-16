"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Check, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu",
        subheader: "2.5% concentratie (markt avg 0.5%)",
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
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const [animationPlayed, setAnimationPlayed] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const ghkcuCardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationPlayed) {
                    setAnimationPlayed(true)

                    // Start cursor animation after 1.5s delay
                    setTimeout(() => {
                        setShowCursor(true)
                        // Start from center-right of section
                        setCursorPos({ x: 80, y: 30 })

                        // Move to GHK-Cu card
                        setTimeout(() => {
                            setCursorPos({ x: 20, y: 55 })

                            // Click effect and expand
                            setTimeout(() => {
                                setExpanded("ghkcu")

                                // Hide cursor after click
                                setTimeout(() => {
                                    setShowCursor(false)
                                }, 800)
                            }, 600)
                        }, 800)
                    }, 1500)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3
        })

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [animationPlayed])

    return (
        <section
            ref={sectionRef}
            id="ingredienten"
            className="py-24 sm:py-32 bg-gradient-to-b from-[#FDFCFA] to-white overflow-hidden relative"
        >
            {/* Animated Cursor */}
            <AnimatePresence>
                {showCursor && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            left: `${cursorPos.x}%`,
                            top: `${cursorPos.y}%`
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            left: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                            top: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                        }}
                        className="absolute z-50 pointer-events-none"
                        style={{ left: `${cursorPos.x}%`, top: `${cursorPos.y}%` }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M5 3L19 12L12 14L9 21L5 3Z"
                                fill="#1a1a1a"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                        </svg>
                        {cursorPos.x < 30 && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: [0, 1.5, 1], opacity: [0, 0.5, 0] }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#C4956A]/30 -translate-x-1/2 -translate-y-1/2"
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-5xl mx-auto px-6">

                {/* Header with Marketing Copy */}
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

                {/* Cards Grid - 2x3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            ref={ing.id === "ghkcu" ? ghkcuCardRef : undefined}
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
                                        <span className={`text-2xl font-light ${ing.hero ? 'text-[#C4956A]' : 'text-[#C4956A]'}`}>
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
                                <p className={`text-sm ${ing.hero ? 'text-[#C4956A]' : 'text-[#C4956A]'}`}>
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
                                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${ing.hero ? 'text-[#C4956A]' : 'text-[#C4956A]'}`} />
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
