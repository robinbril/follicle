"use client"

import { Check, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const treatments = [
    {
        name: "Niets doen",
        price: "€0",
        risk: "Geen resultaat",
        highlight: false,
    },
    {
        name: "REVIVE",
        price: "€29/mnd",
        risk: "Geen bijwerkingen",
        highlight: true,
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        risk: "Stop = haar weg",
        highlight: false,
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        risk: "Seksuele bijwerkingen",
        highlight: false,
    },
    {
        name: "Transplant",
        price: "€5.000+",
        risk: "Invasief + €5k+",
        highlight: false,
    },
]

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Emotional Hook */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Je hebt opties. Maar welke is slim?
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Van niets doen tot chirurgie — hier zie je hoe REVIVE zich positioneert.
                    </p>
                </motion.div>

                {/* Treatment Spectrum */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8 md:mb-12"
                >
                    {treatments.map((t, i) => (
                        <div
                            key={i}
                            className={`relative p-4 md:p-6 rounded-xl border transition-all flex flex-col justify-between ${t.highlight
                                ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/20 border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/20'
                                : 'bg-white/5 border-white/10 opacity-80 hover:opacity-100'
                                }`}
                        >
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap shadow-lg">
                                    Aanbevolen
                                </div>
                            )}
                            <div>
                                <p className={`text-sm md:text-base font-bold mb-1 md:mb-2 ${t.highlight ? 'text-emerald-400' : 'text-white/80'}`}>
                                    {t.name}
                                </p>
                                <p className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${t.highlight ? 'text-white' : 'text-white/60'}`}>
                                    {t.price}
                                </p>
                            </div>
                            <p className={`text-xs md:text-sm font-medium ${t.highlight ? 'text-emerald-400' : 'text-white/40'}`}>
                                {t.risk}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Detailed Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-3 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wide" />
                                    <th className="px-3 py-4 text-center text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                        REVIVE
                                    </th>
                                    <th className="px-3 py-4 text-center text-xs font-medium text-white/40 uppercase tracking-wide">
                                        Minoxidil
                                    </th>
                                    <th className="px-3 py-4 text-center text-xs font-medium text-white/40 uppercase tracking-wide">
                                        Finasteride
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 text-white/80 font-medium text-sm">Bijwerkingen</td>
                                    <td className="px-3 py-4 text-center">
                                        <span className="text-base font-bold text-emerald-400">&lt; 5%</span>
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <span className="text-base font-bold text-white/40">11-18%</span>
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <span className="text-base font-bold text-red-400/70">Libido ↓</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 text-white/80 font-medium text-sm">Haar valt uit bij stoppen</td>
                                    <td className="px-3 py-4 text-center">
                                        <X className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <Check className="w-5 h-5 text-red-400/70 mx-auto" />
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <Check className="w-5 h-5 text-red-400/70 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 text-white/80 font-medium text-sm">Hormoonvrij</td>
                                    <td className="px-3 py-4 text-center">
                                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <X className="w-5 h-5 text-white/40 mx-auto" />
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <X className="w-5 h-5 text-red-400/70 mx-auto" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-3 py-4 text-white/80 font-medium text-sm">Libido problemen</td>
                                    <td className="px-3 py-4 text-center">
                                        <X className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <span className="text-xs text-white/40">Zeldzaam</span>
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        <X className="w-5 h-5 text-red-400/70 mx-auto" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>



                {/* Scepticism acknowledgment */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20"
                >
                    <p className="text-amber-100/90 text-center leading-relaxed">
                        <span className="text-amber-50 font-medium">"Klinisch bewezen" — je hebt het 400x gehoord.</span>
                        <br className="hidden sm:block" />
                        Daarom hebben we geen marketingclaims. Alleen{' '}
                        <span className="text-amber-300 font-semibold">peer-reviewed studies</span>.
                        24 in totaal. Klik. Lees. Oordeel zelf.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
