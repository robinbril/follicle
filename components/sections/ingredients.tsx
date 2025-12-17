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
                        className="relative mt-8 inline-flex p-[1.5px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(196,149,106,0.15)] group"
                    >
                        {/* Layer 1: 7 High-Vibrancy Ingredient Colors - Extremely Smooth Flow */}
                        <motion.div 
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#C4956A_0%,#3B82F6_14%,#10B981_28%,#8B5CF6_42%,#F59E0B_56%,#EC4899_70%,#06B6D4_84%,#C4956A_100%)] opacity-100 blur-[0.5px]"
                        />
                        
                        {/* Layer 2: Liquid Turbulence & Gloss */}
                        <motion.div 
                            animate={{ rotate: [360, 0] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] mix-blend-overlay"
                        />
                        
                        {/* Compact Luxury Badge */}
                        <div className="relative flex items-center gap-3 px-6 py-2.5 bg-[#080808] text-white rounded-full text-[11px] font-bold tracking-tight">
                            <span className="text-[#C4956A] font-black border-r border-white/10 pr-3">20.5%</span>
                            <span className="text-white/80 uppercase tracking-widest text-[9px]">actieve stoffen</span>
                            <span className="w-1 h-1 rounded-full bg-[#C4956A]" />
                            <span className="text-white/80 uppercase tracking-widest text-[9px]">24 studies</span>
                        </div>

                        {/* Ultra-Smooth Glass Rim */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/5 via-transparent to-white/20 pointer-events-none" />
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
                        className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#111] text-white shadow-xl border border-white/5"
                    >
                        {/* Subtle color indicator */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#C4956A]" />
                        
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-black text-[#C4956A]">5%</span>
                                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">
                                        GHK-Cu Peptide
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: expanded === "ghkcu" ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-white/20" />
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">GHK-Cu</h3>
                            <p className="text-sm text-[#C4956A] font-medium opacity-90">{ingredients[0].subheader}</p>
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
                                    <div className="px-6 pb-6 pt-2 border-t border-white/5">
                                        <p className="text-[10px] tracking-[0.15em] text-white/30 mb-4 uppercase">Clinical Compound: {ingredients[0].compound}</p>
                                        <ul className="space-y-3 mb-6">
                                            {ingredients[0].benefits.map((b, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + idx * 0.08 }}
                                                    className="flex items-start gap-3 text-[13px] text-white/70 leading-relaxed"
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
                                                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-lg bg-white/5 text-white/50 hover:bg-[#C4956A] hover:text-white transition-all"
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
                        {ingredients.slice(1).map((ing, i) => {
                            // Define distinct colors for each card
                            const colors = [
                                "#3B82F6", // Blue (Capixyl)
                                "#10B981", // Green (Redensyl)
                                "#8B5CF6", // Violet (Baicapil)
                                "#F59E0B", // Gold (Procapil)
                                "#EC4899", // Pink (Anagain)
                                "#C4956A"  // Copper (Rozenwater)
                            ]
                            const accentColor = colors[i % colors.length]
                            
                            return (
                                <motion.div
                                    key={ing.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={() => setExpanded(expanded === ing.id ? null : ing.id)}
                                    whileHover={{ y: -3, borderColor: `${accentColor}40` }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 bg-white border hover:shadow-2xl ${expanded === ing.id ? 'border-[#C4956A] shadow-xl col-span-2 lg:col-span-3' : 'border-[#F2F0ED] hover:border-[#F2F0ED]'
                                        }`}
                                >
                                    {/* Subtiel kleur accentje */}
                                    <div className="absolute top-0 left-0 w-full h-[3px] opacity-20" style={{ background: accentColor }} />
                                    <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />

                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-2xl font-black" style={{ color: accentColor }}>{ing.percentage}</span>
                                            <motion.div
                                                animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ChevronDown className="w-4 h-4 text-[#DDD]" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-1 tracking-tight">{ing.name}</h3>
                                        <p className="text-[12px] font-medium leading-relaxed" style={{ color: accentColor }}>{ing.subheader}</p>
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
                                                <div className="px-6 pb-6 pt-2 border-t border-[#F2F0ED]">
                                                    <p className="text-[10px] tracking-[0.2em] text-[#AAA] mb-4 uppercase font-bold">{ing.compound}</p>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                                        {ing.benefits.map((b, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.05 + idx * 0.05 }}
                                                                className="flex items-start gap-2.5 text-[13px] text-[#555] leading-relaxed"
                                                            >
                                                                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
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
                                                                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase px-4 py-2 rounded-lg bg-[#F8F7F5] text-[#666] hover:bg-[#1a1a1a] hover:text-white transition-all"
                                                            >
                                                                {s.name} <ArrowUpRight className="w-3 h-3 opacity-30" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            )
                        })}
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
