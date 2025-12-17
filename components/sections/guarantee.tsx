"use client"

import { ShieldCheck, RotateCcw, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Guarantee() {
    return (
        <section id="garantie" className="py-16 sm:py-20 bg-[#080808] relative overflow-hidden">
            {/* Soft ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C4956A]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center"
                >
                    {/* The "Jewel" - Ultra premium 180-day pill */}
                    <div className="relative p-[1px] rounded-full overflow-hidden mb-8 shadow-2xl group">
                        {/* 7-Color Liquid Border (Inherited from Ingredients) */}
                        <motion.div 
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#C4956A_0%,#3B82F6_14%,#10B981_28%,#8B5CF6_42%,#F59E0B_56%,#EC4899_70%,#06B6D4_84%,#C4956A_100%)]"
                        />
                        
                        <div className="relative px-6 py-2 bg-[#0A0A0A] rounded-full flex items-center gap-3">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C4956A]" />
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white">
                                180 Dagen Tevredenheidsgarantie
                            </span>
                        </div>
                    </div>

                    {/* Minimal Copy */}
                    <div className="text-center mb-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                            Geld terug. <span className="text-white/40">Zelfs als de fles leeg is.</span>
                        </h2>
                        <p className="text-[11px] font-medium text-white/30 uppercase tracking-[0.1em]">
                            Geen vragen · Geen kleine lettertjes · Directe verwerking
                        </p>
                    </div>

                    {/* Slim Horizontal Service Bar */}
                    <div className="flex items-center gap-6 sm:gap-10 opacity-30">
                        <div className="flex items-center gap-2">
                            <RotateCcw className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white">Gratis retour</span>
                        </div>
                        <div className="w-[1px] h-3 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white">Geen gedoe</span>
                        </div>
                        <div className="w-[1px] h-3 bg-white/20" />
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white">Bewezen</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
