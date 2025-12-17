"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 600px)
            setIsVisible(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="md:hidden fixed bottom-6 left-4 right-4 z-50 overflow-hidden"
                >
                    {/* Glassmorphic Container */}
                    <div className="relative bg-white/90 backdrop-blur-2xl border border-black/5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-1.5 overflow-hidden">
                        
                        {/* Elite Trust Ribbon (Top) */}
                        <div className="bg-[#0A0A0A] rounded-t-[2.2rem] py-2 px-6 flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-1.5">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-2 h-2 fill-[#C4956A] text-[#C4956A]" />
                                    ))}
                                </div>
                                <span className="text-[9px] font-black text-white tracking-widest uppercase">4.8 Rating</span>
                            </div>
                            <div className="h-2 w-px bg-white/10" />
                            <div className="flex items-center gap-1.5">
                                <Shield className="w-2 h-2 text-[#C4956A]" />
                                <span className="text-[9px] font-black text-white/60 tracking-widest uppercase">180 dgn garantie</span>
                            </div>
                        </div>

                        {/* main Content Area */}
                        <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[9px] font-black text-[#C4956A] uppercase tracking-[0.2em]">REVIVE</span>
                                    <span className="px-1.5 py-0.5 rounded-full bg-[#C4956A]/10 text-[#C4956A] text-[8px] font-black uppercase tracking-widest">-41% Bespaar</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-2xl font-black text-gray-900 tracking-tighter">€19</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">/mnd</span>
                                </div>
                            </div>

                            <Link href="#prijzen" className="relative group">
                                {/* Button Pulse Effect */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-[#C4956A] rounded-2xl blur-lg pointer-events-none"
                                />
                                
                                <button className="relative px-6 py-4 bg-[#C4956A] text-white rounded-2xl font-black text-[10px] tracking-[0.15em] flex items-center gap-2 shadow-[0_10px_25px_rgba(196,149,106,0.3)] active:scale-95 transition-all">
                                    START ROUTINE
                                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                                </button>
                            </Link>
                        </div>

                        {/* Stock Indicator Dot */}
                        <div className="absolute bottom-1 right-12 opacity-20 pointer-events-none">
                             <div className="flex items-center gap-1">
                                <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[7px] font-black text-gray-900 tracking-[0.2em] uppercase">In stock</span>
                             </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
