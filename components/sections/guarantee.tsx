"use client"

import { ShieldCheck, RotateCcw, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Guarantee() {
    return (
        <section className="py-16 sm:py-20 bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-br from-[#141414] to-[#0F0F0F] rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A574]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto sm:mx-0">
                            <ShieldCheck className="w-8 h-8 text-emerald-400" />
                        </div>

                        {/* Header */}
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center sm:text-left">
                            De REVIVE Garantie
                        </h2>

                        {/* Main promise */}
                        <div className="space-y-4 mb-8">
                            <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed text-center sm:text-left">
                                180 dagen om te beslissen.
                            </p>
                            <p className="text-lg text-white/70 leading-relaxed text-center sm:text-left">
                                Niet tevreden? <span className="text-white font-semibold">Volledige terugbetaling.</span><br />
                                Geen vragen. Geen formulieren. Zelfs als de fles leeg is.
                            </p>
                        </div>

                        {/* Why section */}
                        <div className="bg-white/5 rounded-2xl p-6 mb-8">
                            <p className="text-white/80 leading-relaxed">
                                <span className="text-[#D4A574] font-semibold">Waarom?</span> Omdat we weten dat het werkt.
                                En als het niet voor jou werkt, verdienen we je geld niet. Zo simpel is het.
                            </p>
                        </div>

                        {/* Trust points */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                                <RotateCcw className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-white/80 text-sm">Gratis retour</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                                <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-white/80 text-sm">Geen gedoe</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-white/80 text-sm">100% geld terug</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
