"use client"

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const competitors = [
    {
        name: "Minoxidil",
        price: "€45/mnd",
        features: ["Bewezen effectief", "2× daags toepassen", "Stop = uitval"]
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        features: ["Remt DHT", "Invloed op testosteron", "Bijwerkingen mogelijk"]
    },
    {
        name: "Transplantatie",
        price: "€5.000+",
        features: ["Permanent", "Chirurgisch", "Herstelperiode"]
    }
]

const reviveFeatures = [
    { left: "6 gepatenteerde ingrediënten", right: "Hormoonvrij" },
    { left: "20.5% actieve concentratie", right: "Geen bijwerkingen" },
    { left: "Combineerbaar met Minoxidil", right: "180 dagen garantie" },
]

export default function ProblemAgitation() {
    return (
        <section className="py-24 sm:py-32 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Elegant Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl font-light text-[#2D2A26] mb-6 tracking-[0.2em] uppercase">
                        Vergelijk
                    </h2>
                    <p className="text-[#8A8580] text-lg font-light tracking-wide">
                        Eén serum. Zes technologieën. Geen compromis.
                    </p>
                </motion.div>

                {/* Competitors Grid - Smaller, less prominent */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 max-w-3xl mx-auto">
                    {competitors.map((comp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-transparent border border-[#E8E4DF] rounded-xl p-6 text-center"
                        >
                            <h3 className="text-xs tracking-widest uppercase text-[#6B6560] mb-2">
                                {comp.name}
                            </h3>
                            <p className="text-2xl font-medium text-[#2D2A26] mb-5">
                                {comp.price}
                            </p>
                            <ul className="space-y-2">
                                {comp.features.map((feat, idx) => (
                                    <li key={idx} className="text-sm text-[#9A948E] leading-relaxed">
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* REVIVE Hero Card - Separate, dominant */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-2xl mx-auto bg-white rounded-2xl p-12 sm:p-16 border border-[#C4956A] shadow-[0_20px_60px_rgba(196,149,106,0.1)]"
                >
                    {/* Subtle gold glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#C4956A]/5 to-transparent pointer-events-none" />

                    <div className="relative text-center">
                        {/* Brand name */}
                        <h3 className="text-4xl sm:text-5xl font-light text-[#C4956A] mb-3 tracking-[0.3em] uppercase">
                            REVIVE
                        </h3>
                        <p className="text-[#6B6560] text-lg font-light mb-10">
                            €29/maand
                        </p>

                        {/* Separator */}
                        <div className="w-16 h-px bg-[#E8E4DF] mx-auto mb-10" />

                        {/* Features in 2 columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-12">
                            {reviveFeatures.map((row, i) => (
                                <div key={i} className="contents">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-[#C4956A] flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-[#C4956A]" />
                                        </div>
                                        <span className="text-[#4A4540] text-sm">{row.left}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border border-[#C4956A] flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-[#C4956A]" />
                                        </div>
                                        <span className="text-[#4A4540] text-sm">{row.right}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Subtle CTA - outline style */}
                        <Link
                            href="#prijzen"
                            className="inline-block px-10 py-4 border border-[#2D2A26] rounded-lg text-[#2D2A26] text-sm tracking-widest uppercase hover:bg-[#2D2A26] hover:text-white transition-all duration-300"
                        >
                            Bekijk studies
                        </Link>
                    </div>
                </motion.div>

                {/* Confident copy - no defensiveness */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[#9A948E] text-sm mt-12 tracking-wide"
                >
                    24 peer-reviewed studies. Oordeel zelf.
                </motion.p>
            </div>
        </section>
    )
}
