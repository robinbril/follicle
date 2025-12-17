"use client"

import { ShieldCheck, RotateCcw, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { PaymentTrust } from '@/components/ui/payment-trust'

export default function Guarantee() {
    return (
        <section id="garantie" className="py-16 sm:py-20 bg-[#080808] relative overflow-hidden">
            {/* Soft ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C4956A]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center w-full"
                >
                    {/* The "Jewel" - Ultra premium 180-day pill */}
                    <div className="relative p-[1px] rounded-full overflow-hidden mb-12 group">
                        {/* 7-Color Liquid Border - Subtler, slower */}
                        <motion.div 
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,#C4956A_15%,transparent_30%,#3B82F6_45%,transparent_60%,#EC4899_75%,transparent_90%)] opacity-40"
                        />
                        
                        <div className="relative px-8 py-2.5 bg-[#0A0A0A] rounded-full flex items-center gap-3 border border-white/5">
                            <ShieldCheck className="w-4 h-4 text-[#C4956A]" />
                            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-white/90">
                                180 DAGEN GARANTIE
                            </span>
                        </div>
                    </div>

                    {/* Minimal Copy with refined spacing */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                            Geen risico. <span className="text-white/30 italic font-light">Echt.</span>
                        </h2>
                        <p className="text-[12px] sm:text-[13px] font-medium text-white/60 tracking-[0.05em] leading-relaxed max-w-md mx-auto">
                            Zichtbaar resultaat of je geld terug. We geven je <span className="text-white font-bold">180 dagen</span> de tijd om REVIVE te proberen. <br className="hidden sm:block" />
                            <span className="text-[#C4956A] font-bold">Zelfs als de fles volledig leeg is.</span>
                        </p>
                    </div>

                    {/* Refined Service Bar - Higher visibility, better spacing */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 items-center mb-16">
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-[#C4956A]/10 group-hover:border-[#C4956A]/20 transition-all duration-500">
                                <RotateCcw className="w-4 h-4 text-[#C4956A]" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Gratis retour</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-[#C4956A]/10 group-hover:border-[#C4956A]/20 transition-all duration-500">
                                <MessageCircle className="w-4 h-4 text-[#C4956A]" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Geen gedoe</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group">
                            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-[#C4956A]/10 group-hover:border-[#C4956A]/20 transition-all duration-500">
                                <ShieldCheck className="w-4 h-4 text-[#C4956A]" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Bewezen</span>
                        </div>
                    </div>

                    {/* Integrated Trust Bar */}
                    <div className="w-full pt-12 border-t border-white/[0.05]">
                        <PaymentTrust variant="dark" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
