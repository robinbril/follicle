"use client"

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section id="hero" className="relative pt-24 pb-14 lg:pt-32 lg:pb-28 bg-white overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] border border-gray-100 shadow-sm">
            {/* Premium multi-layer mesh gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(196,149,106,0.12)_0%,transparent_60%)]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,149,106,0.08)_0%,transparent_60%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(196,149,106,0.06)_0%,transparent_70%)]" />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">

                    {/* LEFT - Emotional, Customer-Focused Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* TRUSTPILOT BADGE - Elegant pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#E8E4DF]/50 mb-5 mt-2 md:mt-0 lg:mb-8"
                        >
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                </svg>
                                <span className="text-xs font-semibold text-[#1a1a1a]">Trustpilot</span>
                            </div>
                            <div className="w-px h-3 bg-[#E8E4DF]" />
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-[#1a1a1a]">4.8</span>
                        </motion.div>

                        {/* MOBILE: Massive Product with Animated Orb */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="relative w-72 h-auto mx-auto mb-6 lg:hidden"
                        >
                            {/* Animated Copper Orb - Pulsing glow */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    opacity: [0.4, 0.6, 0.4]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,149,106,0.35)_0%,transparent_50%)] blur-3xl scale-150"
                            />
                            
                            {/* Floating Product Animation */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/images/revive-hero-bottle.png"
                                    alt="REVIVE Hair Growth Serum"
                                    width={288}
                                    height={360}
                                    className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] relative z-10"
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        {/* HEADLINE - Bold, Commanding */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mb-3"
                        >
                            <h1 
                                className="text-[2.5rem] sm:text-5xl lg:text-7xl font-black text-[#1a1a1a] tracking-tight leading-[1.1] sm:leading-[1.05]"
                                style={{ hyphens: 'none', wordBreak: 'keep-all' }}
                            >
                                Stop haaruitval<br className="sm:hidden" /> in 90 dagen.
                            </h1>
                            <p className="text-[1.75rem] sm:text-3xl lg:text-5xl font-semibold text-[#C4956A] mt-2 tracking-tighter leading-none">
                                Of je geld terug.
                            </p>
                        </motion.div>

                        {/* PRIMARY CTA - Large & Premium */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto mb-8"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-16 px-14 text-base font-black bg-[#C4956A] hover:bg-[#B38559] text-white shadow-[0_15px_40px_rgba(196,149,106,0.25)] hover:shadow-[0_20px_50px_rgba(196,149,106,0.4)] hover:scale-[1.03] transition-all duration-500 rounded-full group relative overflow-hidden"
                                asChild
                            >
                                <Link href="#prijzen">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-widest uppercase">
                                        Start je behandeling
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </Button>
                        </motion.div>

                        {/* SUBHEADLINE - Elegant, not shouty */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            {/* Desktop: detailed */}
                            <p className="hidden md:block text-lg text-[#4A4540] max-w-md leading-relaxed">
                                REVIVE bevat 6 klinisch onderbouwde ingrediënten in concentraties die daadwerkelijk werken.
                            </p>
                            {/* Mobile: concise */}
                            <p className="md:hidden text-[15px] text-[#4A4540]/80 font-bold tracking-tight">
                                6 klinische ingrediënten · 24 studies
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg aspect-[4/5]">
                            {/* Animated Copper Orb - Desktop */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.08, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,149,106,0.25)_0%,transparent_50%)] blur-3xl scale-125"
                            />
                            
                            {/* Floating Product - Desktop */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ 
                                    duration: 6, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/images/revive-hero-bottle.png"
                                    alt="REVIVE Hair Growth Serum"
                                    fill
                                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

