"use client"

import { Check, Truck, Shield, Sparkles, ArrowRight, Zap } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Default to 6 months (Resultaatpakket)

    const plans = [
        {
            id: "trial",
            label: "Proberen",
            months: 1,
            totalPrice: 49,
            perMonth: 49,
            savings: 0,
            featured: false,
            benefits: ["1× REVIVE (30ml)", "30 dagen kuur", "180 dgn garantie"],
            cta: "PROBEER 1 FLES"
        },
        {
            id: "popular",
            label: "Startpakket",
            months: 3,
            totalPrice: 87,
            perMonth: 29,
            savings: 60,
            featured: false,
            badge: "Snel resultaat",
            benefits: ["3× REVIVE (90ml)", "90 dagen kuur", "Gratis verzending"],
            cta: "BESTEL STARTPAKKET"
        },
        {
            id: "best",
            label: "Resultaatpakket",
            months: 6,
            totalPrice: 114,
            perMonth: 19,
            savings: 180,
            featured: true,
            badge: "Meest gekozen",
            benefits: ["6× REVIVE (180ml)", "180 dagen kuur", "Gratis Dermaroller"],
            cta: "BESTEL RESULTAATPAKKET"
        }
    ]

    return (
        <section id="prijzen" className="py-12 sm:py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Header - Ultra Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] mb-4">
                        <Zap className="w-3 h-3 text-[#C4956A]" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Tijdelijke Actie</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight text-center">
                        Kies je transformatie.
                    </h2>
                </motion.div>

                {/* Triple Pricing Ribbon - Desktop Horizontal / Mobile Compact */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Background Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(196,149,106,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 relative z-10">
                        {plans.map((plan, i) => {
                            const isSelected = selectedPlan === i
                            const isFeatured = plan.featured

                            return (
                                <motion.div
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setSelectedPlan(i)}
                                    className={`relative flex flex-col cursor-pointer transition-all duration-500 overflow-hidden ${
                                        isFeatured 
                                        ? 'bg-[#0A0A0A] border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] md:scale-[1.03] md:z-20 md:rounded-[2.5rem]' 
                                        : 'bg-white border-gray-100 hover:border-[#C4956A]/30 md:z-10 md:rounded-[2rem]'
                                    } border-[1.5px] p-6 sm:p-8 flex-grow`}
                                >
                                    {/* Internal Glow for Featured */}
                                    {isFeatured && (
                                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(196,149,106,0.15)_0%,transparent_50%)] pointer-events-none" />
                                    )}

                                    {/* Badge */}
                                    <div className="h-6 mb-6">
                                        {plan.badge && (
                                            <span className={`text-[8px] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full ${isFeatured ? 'bg-[#C4956A] text-white' : 'bg-gray-100 text-gray-500 opacity-60'}`}>
                                                {plan.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Plan Info */}
                                    <div className="mb-6">
                                        <h3 className={`text-[11px] font-black tracking-[0.2em] uppercase mb-1 ${isFeatured ? 'text-white/40' : 'text-gray-400'}`}>
                                            {plan.label}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className={`text-4xl font-black tracking-tighter ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                                                €{plan.totalPrice}
                                            </span>
                                            {plan.savings > 0 && (
                                                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#C4956A]/10 text-[#C4956A] border border-[#C4956A]/20`}>
                                                    Bespaar €{plan.savings}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`text-[11px] font-medium mt-1 ${isFeatured ? 'text-white/60' : 'text-gray-500'}`}>
                                            €{plan.perMonth} per maand
                                        </p>
                                    </div>

                                    {/* Benefits List - Compact */}
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {plan.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isFeatured ? 'bg-[#C4956A]/20' : 'bg-gray-50'}`}>
                                                    <Check className={`w-2.5 h-2.5 ${isFeatured ? 'text-[#C4956A]' : 'text-gray-400'}`} strokeWidth={3} />
                                                </div>
                                                <span className={`text-[12px] font-bold ${isFeatured ? 'text-white/80' : 'text-gray-600'}`}>
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Area */}
                                    <div className="mt-auto">
                                        <Link href="/checkout" className="block outline-none">
                                            <button className={`w-full py-4 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                                                isFeatured
                                                ? 'bg-[#C4956A] text-white hover:bg-[#D4A57A] shadow-[0_15px_30px_rgba(196,149,106,0.2)] active:scale-95'
                                                : 'bg-gray-900 text-white hover:bg-black active:scale-95'
                                            }`}>
                                                {plan.cta}
                                            </button>
                                        </Link>
                                        
                                        <div className="mt-4 flex items-center justify-center gap-2 opacity-30">
                                            <div className="w-1 h-1 rounded-full bg-green-500" />
                                            <span className={`text-[9px] font-black tracking-widest uppercase ${isFeatured ? 'text-white' : 'text-gray-900'}`}>
                                                Op voorraad
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Subtle Trust Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center"
                >
                    <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest opacity-60">
                        <Truck className="w-4 h-4" strokeWidth={1.5} />
                        Morgen in huis
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest opacity-60">
                        <Shield className="w-4 h-4" strokeWidth={1.5} />
                        180 dgn garantie
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-black text-gray-400 uppercase tracking-widest opacity-60">
                        <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                        Risicovrij resultaat
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
