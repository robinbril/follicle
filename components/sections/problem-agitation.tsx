"use client"

import { Check, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const treatments = [
    {
        name: "REVIVE",
        price: "€29/mnd",
        highlight: true,
        features: [
            { text: "6 gepatenteerde ingrediënten", positive: true },
            { text: "Hormoonvrij", positive: true },
            { text: "Geen bijwerkingen", positive: true },
            { text: "1x per dag", positive: true },
            { text: "180 dagen garantie", positive: true },
        ]
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        highlight: false,
        features: [
            { text: "Stop = onmiddellijke uitval", positive: false },
            { text: "2x per dag", positive: false },
            { text: "Hoofdhuid irritatie", positive: false },
        ]
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        highlight: false,
        features: [
            { text: "Hormoonblokker", positive: false },
            { text: "Bijwerkingen libido", positive: false },
            { text: "Dagelijks pillen", positive: false },
        ]
    },
    {
        name: "Transplant",
        price: "€5.000+",
        highlight: false,
        features: [
            { text: "Chirurgisch ingrijpen", positive: false },
            { text: "Herstelperiode", positive: false },
            { text: "Eenmalig, maar risico's", positive: false },
        ]
    },
]

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Title - Bridge from Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Vergelijk Eerlijk
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        REVIVE is ons serum tegen beginnend haarverlies —
                        met <span className="text-[#D4A574] font-semibold">20.5% actieve stof</span>. Kies slimmer dan de industrie.
                    </p>
                </motion.div>

                {/* Treatment Comparison - REVIVE dominant */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {treatments.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-5 md:p-6 rounded-xl border transition-all ${t.highlight
                                ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/20 border-emerald-500/50 shadow-lg shadow-emerald-500/20 md:scale-105'
                                : 'bg-white/5 border-white/10 opacity-80 hover:opacity-100'
                                }`}
                        >
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Aanbevolen
                                </div>
                            )}
                            <div className="mb-4">
                                <h3 className={`text-lg md:text-xl font-bold mb-1 ${t.highlight ? 'text-emerald-400' : 'text-white/90'}`}>
                                    {t.name}
                                </h3>
                                <p className="text-white/50 text-sm">{t.price}</p>
                            </div>
                            <ul className="space-y-2">
                                {t.features.map((feature, idx) => (
                                    <li key={idx} className={`flex items-start gap-2 text-xs md:text-sm ${t.highlight ? 'text-white/80' : 'text-white/60'}`}>
                                        {feature.positive ? (
                                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <X className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Scepticism acknowledgment */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20"
                >
                    <p className="text-amber-100/90 text-center leading-relaxed mb-4">
                        <span className="text-amber-50 font-medium">"Klinisch bewezen" — je hebt het 400x gehoord.</span>
                        <br className="hidden sm:block" />
                        Daarom hebben we geen marketingclaims. Alleen{' '}
                        <span className="text-white font-semibold">transparantie</span>.
                        24 peer-reviewed studies. Klik, lees, oordeel zelf.
                    </p>

                    {/* CTA */}
                    <div className="text-center">
                        <Button
                            asChild
                            className="bg-[#C4956A] hover:bg-[#B38559] text-white font-bold py-5 px-8"
                        >
                            <Link href="#prijzen" className="flex items-center gap-2">
                                Start met REVIVE
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-white/40 text-xs mt-2">180 dagen risico-vrij</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
