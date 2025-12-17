"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Check, ArrowUpRight, MousePointer2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "5%",
        name: "GHK-Cu",
        subheader: "5× hogere dosis · Standaard serums <1%",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        benefits: ["Stimuleert collageen & bloedvatvorming", "Activeert 4.000+ herstel-genen", "+70% collageen productie"],
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
        name: "Capixyl™",
        subheader: "-93% DHT-schade · Hormoonvrij",
        compound: "ACETYL TETRAPEPTIDE-3",
        benefits: ["Verlaagt ontstekingen rond haarwortel", "Blokkeert DHT zonder hormonen", "+46% haardichtheid"],
        studies: [
            { name: "Lucas Meyer 2024", url: "#" },
            { name: "Thai Study 2020", url: "#" }
        ]
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl®",
        subheader: "+17% haargroei · Beter dan Minoxidil",
        compound: "DHQG + EGCG2",
        benefits: ["Activeert slapende stamcellen in haarwortel", "10.000+ nieuwe haren in trials", "85% ziet zichtbaar resultaat"],
        studies: [
            { name: "Givaudan 2014", url: "#" },
            { name: "Karaca 2019", url: "#" },
            { name: "Eslahi 2022", url: "#" }
        ]
    },
    {
        id: "baicapil",
        percentage: "4%",
        name: "Baicapil™",
        subheader: "+59% haardichtheid · Verlengt groeifase",
        compound: "SCUTELLARIA + SOY",
        benefits: ["Verlengt de anagene groeifase", "-60% haaruitval in 6 maanden", "Meer haren per cm²"],
        studies: [
            { name: "Provital 2015", url: "#" },
            { name: "Opast 2018", url: "#" }
        ]
    },
    {
        id: "procapil",
        percentage: "3%",
        name: "Procapil™",
        subheader: "+121% betere hechting · Anti-haaruitval",
        compound: "BIOTINYL-GHK",
        benefits: ["Versterkt de follikel in de dermis", "Verbetert doorbloeding", "-47% uitval na 4 maanden"],
        studies: [
            { name: "Sederma 2005", url: "#" },
            { name: "PMC Review 2024", url: "#" }
        ]
    },
    {
        id: "anagain",
        percentage: "0.5%",
        name: "AnaGain™",
        subheader: "78% reactivatie · Biologische erwtenscheuten",
        compound: "PISUM SATIVUM",
        benefits: ["Brengt haren terug naar groeifase", "+56% FGF-7 groeifactor", "100% biologisch"],
        studies: [
            { name: "Mibelle 2014", url: "#" },
            { name: "Grothe 2016", url: "#" }
        ]
    },
    {
        id: "rozenwater",
        percentage: "basis",
        name: "Rozenwater",
        subheader: "Plakvrij · Snelle opname",
        compound: "ROSA DAMASCENA",
        benefits: ["Optimale absorptie in huid", "Geen plakkerig gevoel", "Kalmeert en hydrateert"],
        studies: [
            { name: "Mahboubi 2016", url: "#" }
        ]
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>(null)
    const [showCursor, setShowCursor] = useState(false)
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 0 })
    const [animationPlayed, setAnimationPlayed] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !animationPlayed) {
                    setAnimationPlayed(true)

                    // Only show cursor on desktop
                    const isDesktop = window.innerWidth >= 768

                    if (isDesktop) {
                        // Desktop: show arrow cursor
                        setTimeout(() => {
                            setShowCursor(true)
                            setCursorPos({ x: 50, y: -30 })
                        }, 800)

                        setTimeout(() => {
                            setCursorPos({ x: 15, y: 50 })
                        }, 1200)

                        setTimeout(() => {
                            setExpanded("ghkcu")
                            setTimeout(() => setShowCursor(false), 400)
                        }, 1800)
                    } else {
                        // Mobile: just expand after delay
                        setTimeout(() => {
                            setExpanded("ghkcu")
                        }, 1000)
                    }
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5 // Higher threshold - really on section
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
                        De formule
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1a1a1a] tracking-tight mb-5"
                    >
                        7 Actieve Ingrediënten
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-base sm:text-lg text-[#666] max-w-md mx-auto leading-relaxed"
                        style={{ hyphens: 'none' }}
                    >
                        Klinisch bewezen ingrediënten.<br className="sm:hidden" />
                        Hoogste concentratie op de markt.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="relative mt-8 inline-flex p-[1px] rounded-full overflow-hidden"
                    >
                        {/* 7-Color Liquid Border - Ultra Thin & Muted */}
                        <motion.div 
                            animate={{ 
                                rotate: [0, 360]
                            }}
                            transition={{ 
                                duration: 15, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#C4956A_0%,#7C8BA1_14%,#849E8D_28%,#948BA1_42%,#A1947C_56%,#A17C8B_70%,#7CA19F_84%,#C4956A_100%)] opacity-40"
                        />
                        
                        {/* Compact Luxury Badge */}
                        <div className="relative flex items-center gap-3 px-5 py-2 bg-[#0a0a0a] text-white rounded-full text-[11px] font-medium tracking-tight">
                            <span className="text-[#C4956A] font-bold">20.5%</span>
                            <span className="text-white/50">actieve stoffen</span>
                            <span className="w-[3px] h-[3px] rounded-full bg-white/10" />
                            <span className="text-white/50">24 studies</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Cards Container */}
                <div ref={cardsRef} className="relative space-y-4">

                    {/* Desktop Arrow Cursor */}
                    <AnimatePresence>
                        {showCursor && (
                            <motion.div
                                initial={{ opacity: 0, x: '-50%' }}
                                animate={{
                                    opacity: 1,
                                    left: `${cursorPos.x}%`,
                                    top: cursorPos.y
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute z-50 pointer-events-none hidden md:block"
                            >
                                <MousePointer2 className="w-6 h-6 text-[#1a1a1a] fill-white drop-shadow-lg" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Row 1: GHK-Cu (hero) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setExpanded(expanded === "ghkcu" ? null : "ghkcu")}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.995 }}
                        className="relative group cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white shadow-xl"
                    >
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-light text-[#C4956A]">5%</span>
                                    <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md bg-[#C4956A] text-white font-medium">
                                        Bewezen
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: expanded === "ghkcu" ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-white/40" />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-1">GHK-Cu</h3>
                            <p className="text-sm text-[#C4956A]">{ingredients[0].subheader}</p>
                        </div>

                        <AnimatePresence>
                            {expanded === "ghkcu" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                        <p className="text-[10px] tracking-[0.15em] text-white/30 mb-4">COPPER TRIPEPTIDE-1</p>
                                        <ul className="space-y-2 mb-4">
                                            {ingredients[0].benefits.map((b, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + idx * 0.08 }}
                                                    className="flex items-start gap-2 text-sm text-white/80"
                                                >
                                                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C4956A]" />
                                                    {b}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {ingredients[0].studies.map((s, idx) => (
                                                <a
                                                    key={idx}
                                                    href={s.url}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-white/10 text-white/70 hover:bg-[#C4956A] hover:text-white transition-all"
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

                    {/* Row 2-3: Other ingredients in grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {ingredients.slice(1).map((ing, i) => (
                            <motion.div
                                key={ing.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 bg-white border hover:shadow-lg ${expanded === ing.id ? 'border-[#C4956A] shadow-lg col-span-2 lg:col-span-3' : 'border-[#e8e8e8] hover:border-[#C4956A]/50'
                                    }`}
                            >
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-xl font-light text-[#C4956A]">{ing.percentage}</span>
                                        <motion.div
                                            animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4 text-[#ccc] group-hover:text-[#C4956A] transition-colors" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-1">{ing.name}</h3>
                                    <p className="text-sm text-[#C4956A]">{ing.subheader}</p>
                                </div>

                                <AnimatePresence>
                                    {expanded === ing.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 pt-2 border-t border-[#f0f0f0]">
                                                <p className="text-[10px] tracking-[0.15em] text-[#bbb] mb-3">{ing.compound}</p>
                                                <ul className="space-y-2 mb-4">
                                                    {ing.benefits.map((b, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.05 + idx * 0.05 }}
                                                            className="flex items-start gap-2 text-sm text-[#555]"
                                                        >
                                                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C4956A]" />
                                                            {b}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                                <div className="flex flex-wrap gap-2">
                                                    {ing.studies.map((s, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={s.url}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-[#f5f5f5] text-[#666] hover:bg-[#C4956A] hover:text-white transition-all"
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
