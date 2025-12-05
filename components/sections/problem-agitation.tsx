"use client"

import { Check, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const treatments = [
    {
        name: "Niets doen",
        price: "€0",
        risk: "Geen",
        effectiveness: 0,
        description: "Accepteren",
        highlight: false,
    },
    {
        name: "REVIVE",
        price: "€29/mnd",
        risk: "< 5%",
        effectiveness: 85,
        description: "Sweet spot",
        highlight: true,
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        risk: "Bijwerkingen",
        effectiveness: 60,
        description: "Afhankelijkheid",
        highlight: false,
    },
    {
        name: "PRP",
        price: "€500/sessie",
        risk: "Pijn",
        effectiveness: 70,
        description: "Injecties",
        highlight: false,
    },
    {
        name: "Transplant",
        price: "€5.000+",
        risk: "Chirurgie",
        effectiveness: 95,
        description: "Invasief",
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
                    viewport={{ once: true }}
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
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8"
                >
                    {treatments.map((t, i) => (
                        <div
                            key={i}
                            className={`relative p-4 rounded-xl border transition-all ${t.highlight
                                    ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/20 border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/20'
                                    : 'bg-white/5 border-white/10'
                                }`}
                        >
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                                    Aanbevolen
                                </div>
                            )}
                            <p className={`text-sm font-bold mb-2 ${t.highlight ? 'text-emerald-400' : 'text-white/80'}`}>
                                {t.name}
                            </p>
                            <p className={`text-xl font-bold mb-2 ${t.highlight ? 'text-white' : 'text-white/60'}`}>
                                {t.price}
                            </p>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                                <div
                                    className={`h-full rounded-full ${t.highlight ? 'bg-emerald-500' : 'bg-white/30'}`}
                                    style={{ width: `${t.effectiveness}%` }}
                                />
                            </div>
                            <p className="text-xs text-white/40">{t.risk}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Arrow indicator on mobile */}
                <div className="flex justify-center mb-8 md:hidden">
                    <ArrowRight className="w-5 h-5 text-white/40 animate-pulse" />
                </div>

                {/* Detailed Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-4 py-4 text-left text-xs font-semibold text-white/60 uppercase tracking-wide" />
                                    <th className="px-4 py-4 text-center text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                        REVIVE
                                    </th>
                                    <th className="px-4 py-4 text-center text-xs font-medium text-white/40 uppercase tracking-wide">
                                        Minoxidil
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-4 text-white/80 font-medium text-sm">Bijwerkingen</td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="text-lg font-bold text-emerald-400">&lt; 5%</span>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="text-lg font-bold text-white/40">11-18%</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-4 text-white/80 font-medium text-sm">Afhankelijkheid</td>
                                    <td className="px-4 py-4 text-center">
                                        <X className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <Check className="w-5 h-5 text-white/40 mx-auto" />
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-4 text-white/80 font-medium text-sm">Hormoonvrij</td>
                                    <td className="px-4 py-4 text-center">
                                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <X className="w-5 h-5 text-white/40 mx-auto" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-4 text-white/80 font-medium text-sm">Stop wanneer je wilt</td>
                                    <td className="px-4 py-4 text-center">
                                        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <X className="w-5 h-5 text-white/40 mx-auto" />
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
                    className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10"
                >
                    <p className="text-white/70 text-center leading-relaxed">
                        <span className="text-white font-medium">"Klinisch bewezen" — je hebt het 400x gehoord.</span>
                        <br className="hidden sm:block" />
                        Daarom hebben we geen marketingclaims. Alleen{' '}
                        <span className="text-emerald-400 font-medium">peer-reviewed studies</span>.
                        24 in totaal. Klik. Lees. Oordeel zelf.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
