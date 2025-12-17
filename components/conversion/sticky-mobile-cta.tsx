"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Shield } from 'lucide-react'

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="md:hidden fixed bottom-0 left-0 right-0 z-50"
                >
                    {/* Ultra-Compact Edge-to-Edge Container */}
                    <div className="relative bg-white/95 backdrop-blur-2xl border-t border-black/5 rounded-t-[1.5rem] shadow-[0_-15px_40px_rgba(0,0,0,0.08)] px-5 pb-safe-offset-2 pt-2 overflow-hidden">
                        
                        {/* Luxury Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4956A]/20 to-transparent" />

                        {/* Unified Micro-Trust & CTA Row */}
                        <div className="flex items-center justify-between gap-4">
                            
                            {/* Left: Info Block */}
                            <div className="flex flex-col gap-0.5">
                                {/* Compact Trust */}
                                <div className="flex items-center gap-3 opacity-60 mb-0.5">
                                    <div className="flex items-center gap-0.5">
                                        <Star className="w-1.5 h-1.5 fill-[#C4956A] text-[#C4956A]" />
                                        <span className="text-[7px] font-black text-gray-500 tracking-widest uppercase">4.8</span>
                                    </div>
                                    <div className="w-px h-1.5 bg-black/10" />
                                    <div className="flex items-center gap-1">
                                        <Shield className="w-1.5 h-1.5 text-[#C4956A]" />
                                        <span className="text-[7px] font-black text-gray-400 tracking-widest uppercase">Garantie</span>
                                    </div>
                                </div>

                                {/* Price / Save */}
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-black text-gray-900 tracking-tighter">€19</span>
                                    <span className="px-1.5 py-0.5 rounded-md bg-[#C4956A]/10 text-[#C4956A] text-[7px] font-black uppercase tracking-widest">Bespaar €180</span>
                                </div>
                            </div>

                            {/* Right: Action */}
                            <Link href="#resultaatpakket" className="relative">
                                <motion.div
                                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-[#C4956A] rounded-lg blur-md"
                                />
                                <button className="relative px-5 py-2.5 bg-[#C4956A] text-white rounded-lg font-black text-[9px] tracking-[0.15em] flex items-center gap-2 shadow-lg active:scale-95 transition-all">
                                    BESTEL NU
                                    <ArrowRight className="w-3 h-3" strokeWidth={3} />
                                </button>
                            </Link>
                        </div>

                        {/* Minimal Home Indicator Space */}
                        <div className="h-[env(safe-area-inset-bottom)] mt-1" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
