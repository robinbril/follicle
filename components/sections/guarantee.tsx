"use client"

import { ShieldCheck, RotateCcw, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Guarantee() {
    return (
        <section id="garantie" className="py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden relative">
            {/* Ethereal mesh glow for premium depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C4956A]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Minimal Shield Icon */}
                    <div className="inline-flex items-center justify-center mb-8">
                        <div className="relative w-14 h-14 rounded-full border border-white/5 flex items-center justify-center bg-gradient-to-b from-[#141414] to-[#0A0A0A] shadow-2xl">
                            <ShieldCheck className="w-6 h-6 text-[#C4956A] stroke-[1.2]" />
                        </div>
                    </div>

                    {/* Refined Header Hierarchy */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        De REVIVE Garantie
                    </h2>

                    <div className="flex flex-col items-center gap-3 mb-16">
                        <span className="text-lg sm:text-xl text-[#C4956A] font-medium tracking-tight">
                            180 Dagen Risicovrij Proberen
                        </span>
                        <p className="text-base text-white/40 max-w-sm mx-auto leading-relaxed" style={{ hyphens: 'none' }}>
                            Niet tevreden? <span className="text-white font-semibold">Geld terug.</span><br />
                            Zelfs als de fles leeg is.
                        </p>
                    </div>

                    {/* Ultra-Slim Trust Bar */}
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 pt-10 border-t border-white/[0.03]">
                        <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity">
                            <RotateCcw className="w-3.5 h-3.5 text-[#C4956A]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Gratis retour</span>
                        </div>
                        <div className="w-[1px] h-3 bg-white/5 hidden sm:block" />
                        <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity">
                            <MessageCircle className="w-3.5 h-3.5 text-[#C4956A]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Geen gedoe</span>
                        </div>
                        <div className="w-[1px] h-3 bg-white/5 hidden sm:block" />
                        <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C4956A]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">Garantie</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
