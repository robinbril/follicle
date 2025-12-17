"use client"

import { ShieldCheck, RotateCcw, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Guarantee() {
    return (
        <section id="garantie" className="py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden relative">
            {/* Subtle mesh glow for premium depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C4956A]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Minimal Shield Icon */}
                    <div className="inline-flex items-center justify-center mb-10 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#C4956A]/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative w-16 h-16 rounded-full border border-[#C4956A]/20 flex items-center justify-center bg-[#0F0F0F] shadow-2xl">
                                <ShieldCheck className="w-8 h-8 text-[#C4956A] stroke-[1.5]" />
                            </div>
                        </div>
                    </div>

                    {/* Header Hierarchy */}
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter mb-6">
                        De REVIVE Garantie
                    </h2>

                    <div className="flex flex-col items-center gap-4 mb-14">
                        <span className="text-xl sm:text-2xl text-[#C4956A] font-bold tracking-tight">
                            180 Dagen Bedenktijd
                        </span>
                        <p className="text-base sm:text-lg text-white/50 max-w-md mx-auto leading-relaxed font-medium">
                            Niet tevreden? <span className="text-white font-bold">Geld terug.</span><br />
                            Zonder vragen. Zelfs als de fles leeg is.
                        </p>
                    </div>

                    {/* Elegant Horizontal Trust Markers */}
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 pt-10 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <RotateCcw className="w-4 h-4 text-[#C4956A]/60" />
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40">Gratis retour</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-[#C4956A]/60" />
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40">Geen gedoe</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#C4956A]/60" />
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40">100% Garantie</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
