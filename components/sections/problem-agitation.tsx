"use client"

import { Check, ArrowRight } from 'lucide-react'
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
            { text: "Combineerbaar met Minoxidil", positive: true },
        ]
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        highlight: false,
        features: [
            { text: "Bewezen effectief", positive: true },
            { text: "2x per dag toepassen", neutral: true },
            { text: "Stop = mogelijke uitval", neutral: true },
        ]
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        highlight: false,
        features: [
            { text: "Sterk tegen DHT", positive: true },
            { text: "Hormoonblokker", neutral: true },
            { text: "Mogelijke bijwerkingen", neutral: true },
        ]
    },
    {
        name: "Transplant",
        price: "€5.000+",
        highlight: false,
        features: [
            { text: "Permanente oplossing", positive: true },
            { text: "Chirurgisch ingrijpen", neutral: true },
            { text: "Lange herstelperiode", neutral: true },
        ]
    },
]

export default function ProblemAgitation() {
    return (
        <section className="py-20 sm:py-28 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Title - Elegant serif */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-normal text-[#2D2A26] mb-4 tracking-tight">
                        Vergelijk Eerlijk
                    </h2>
                    <p className="text-[#6B6560] max-w-xl mx-auto leading-relaxed">
                        REVIVE: Natuurlijk serum met <span className="text-[#C4956A] font-medium">20.5% actieve stof</span>.
                        Standalone of gecombineerd met Minoxidil.
                    </p>
                </motion.div>

                {/* Treatment Comparison - Premium Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
                    {treatments.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-300 ${t.highlight
                                ? 'bg-white border-2 border-[#C4956A] shadow-[0_8px_30px_rgba(196,149,106,0.15)] lg:scale-[1.02]'
                                : 'bg-white border border-[#E8E4DF] hover:shadow-[0_8px_30px_rgba(45,42,38,0.08)] hover:-translate-y-1'
                                }`}
                        >
                            {/* Recommended badge */}
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C4956A] to-[#D4A574] text-white text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full uppercase shadow-sm">
                                    Aanbevolen
                                </div>
                            )}

                            {/* Product name & price */}
                            <div className="mb-6">
                                <h3 className={`text-xl font-semibold mb-1 ${t.highlight ? 'text-[#C4956A]' : 'text-[#2D2A26]'}`}>
                                    {t.name}
                                </h3>
                                <p className="text-[#9A948E] text-sm">{t.price}</p>
                            </div>

                            {/* Features list - elegant, no red crosses */}
                            <ul className="space-y-3">
                                {t.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#6B6560]">
                                        {feature.positive ? (
                                            <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <span className="w-4 h-4 flex items-center justify-center text-[#C4C0BA] flex-shrink-0 mt-0.5">·</span>
                                        )}
                                        <span className="leading-relaxed">{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Trust section - Elegant, not aggressive */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-[#6B6560] leading-relaxed mb-6">
                        <span className="text-[#2D2A26] font-medium">"Klinisch bewezen"</span> — we snappen de scepsis.
                        <br className="hidden sm:block" />
                        Daarom geen marketingclaims, alleen{' '}
                        <span className="text-[#C4956A] font-medium">24 peer-reviewed studies</span>.
                    </p>

                    {/* CTA */}
                    <Button
                        asChild
                        className="bg-[#C4956A] hover:bg-[#B38559] text-white font-medium py-6 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <Link href="#prijzen" className="flex items-center gap-2">
                            Bekijk prijzen
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <p className="text-[#9A948E] text-xs mt-3">180 dagen niet tevreden? Volledige terugbetaling.</p>
                </motion.div>
            </div>
        </section>
    )
}
