"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Shield } from 'lucide-react'

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Get the pricing section
            const pricingSection = document.getElementById('prijzen')
            
            if (pricingSection) {
                const rect = pricingSection.getBoundingClientRect()
                const isInPricingSection = rect.top < window.innerHeight && rect.bottom > 0
                
                // Hide when in pricing section, show when scrolled past 600px and NOT in pricing section
                setIsVisible(window.scrollY > 600 && !isInPricingSection)
            } else {
                setIsVisible(window.scrollY > 600)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Check initial state
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
                                    <span className="text-xl font-black text-gray-900 tracking-tighter">€19</span>
                                    <div className="px-1.5 py-0.5 rounded-md bg-[#C4956A] shadow-[0_2px_8px_rgba(196,149,106,0.2)]">
                                        <span className="text-[7px] font-black text-white uppercase tracking-widest whitespace-nowrap">Bespaar €180</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Action */}
                            <Link href="#resultaatpakket" className="relative group overflow-hidden rounded-xl">
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-[#C4956A] rounded-xl blur-md"
                                />
                                <button className="relative px-6 py-3 bg-[#C4956A] text-white rounded-xl font-black text-[10px] tracking-[0.2em] flex items-center gap-2 shadow-lg active:scale-95 transition-all overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    BESTEL NU
                                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={4} />
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
