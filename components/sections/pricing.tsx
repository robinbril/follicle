"use client"

import { Check, Truck, Shield, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Default to 6 months (Resultaatpakket)

    const plans = [
        {
            id: "trial",
            label: "Proberen",
            months: 1,
            bottles: 1,
            perMonth: 49,
            totalPrice: 49,
            perDay: "1.63",
            featured: false,
            bgClass: "bg-white border-[#F0EDE9]",
            textColor: "text-[#1a1a1a]",
            subColor: "text-[#6B6560]",
            benefits: [
                "1× REVIVE Serum (30ml)",
                "30 dagen haargroei kuur",
                "180 dagen garantie",
                "Morgen al in huis"
            ],
            cta: "PROBEER 1 FLES"
        },
        {
            id: "popular",
            label: "Startpakket",
            months: 3,
            bottles: 3,
            perMonth: 29,
            totalPrice: 87,
            perDay: "0.96",
            featured: false,
            badge: "Snelste resultaat",
            bgClass: "bg-white border-[#E8DCCF]",
            textColor: "text-[#1a1a1a]",
            subColor: "text-[#6B6560]",
            benefits: [
                "3× REVIVE Serum (90ml)",
                "90 dagen haargroei kuur",
                "180 dagen garantie",
                "Gratis verzending"
            ],
            cta: "BESTEL STARTPAKKET"
        },
        {
            id: "best",
            label: "Resultaatpakket",
            months: 6,
            bottles: 6,
            perMonth: 19,
            totalPrice: 114,
            perDay: "0.62",
            featured: true,
            badge: "Meest gekozen",
            bgClass: "bg-[#111] border-[#C4956A]",
            textColor: "text-white",
            subColor: "text-white/60",
            benefits: [
                "6× REVIVE Serum (180ml)",
                "180 dagen haargroei kuur",
                "Gratis dermaroller t.w.v. €19",
                "180 dagen garantie",
                "Gratis verzending"
            ],
            cta: "BESTEL RESULTAATPAKKET"
        }
    ]

    return (
        <section id="prijzen" className="py-20 sm:py-32 bg-[#FDFCFA]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-3 uppercase tracking-[0.2em]">
                        Start direct
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-bold text-[#1a1a1a] tracking-tight mb-8">
                        Kies je behandeling
                    </h2>
                    
                    {/* Compact Trust Summary */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-[#6B6560] font-medium opacity-80">
                        <span className="flex items-center gap-2">
                            <Truck className="w-4 h-4 text-[#C4956A]" /> Gratis verzending
                        </span>
                        <span className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#C4956A]" /> 180 dagen garantie
                        </span>
                        <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[#C4956A]" /> Geen abonnement
                        </span>
                    </div>
                </motion.div>

                {/* 3-Tier Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            onClick={() => setSelectedPlan(i)}
                            className={`relative flex flex-col cursor-pointer rounded-[2.5rem] transition-all duration-500 border-[1.5px] group ${
                                plan.featured 
                                ? 'bg-[#111] border-[#C4956A] shadow-[0_40px_80px_rgba(0,0,0,0.3)] md:scale-[1.05] z-10' 
                                : selectedPlan === i
                                    ? 'bg-white border-[#C4956A] shadow-2xl'
                                    : 'bg-white border-[#E8E4DF] hover:border-[#C4956A]/50 hover:shadow-xl'
                            }`}
                        >
                            {/* Featured Badge */}
                            {plan.badge && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C4956A] text-white text-[9px] tracking-[0.15em] font-bold py-1.5 px-5 rounded-full uppercase shadow-lg z-20">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="p-8 sm:p-10 flex flex-col flex-grow">
                                {/* Plan Identity */}
                                <div className="mb-8">
                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${plan.featured ? 'text-[#C4956A]' : 'text-[#888]'}`}>
                                        {plan.label}
                                    </span>
                                    <h3 className={`text-2xl sm:text-3xl font-bold mt-1 ${plan.textColor}`}>
                                        {plan.months} Maand{plan.months > 1 ? 'en' : ''}
                                    </h3>
                                </div>

                                {/* Pricing */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-5xl font-bold ${plan.textColor}`}>€{plan.totalPrice}</span>
                                        <span className={`text-sm ${plan.subColor}`}>totaal</span>
                                    </div>
                                    <div className="mt-2 flex items-center gap-2 text-sm">
                                        {plan.months > 1 && (
                                            <>
                                                <span className="text-[#888] line-through opacity-50">€{plan.months * 49}</span>
                                                <span className="font-bold text-[#C4956A]">€{plan.perMonth}/mnd</span>
                                            </>
                                        )}
                                        {plan.months === 1 && (
                                            <span className="font-bold text-[#C4956A]">€{plan.perDay}/dag</span>
                                        )}
                                    </div>
                                </div>

                                {/* Checkmarks */}
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.benefits.map((benefit, idx) => (
                                        <li key={idx} className={`flex items-start gap-3.5 text-[14px] leading-snug ${plan.featured ? 'text-white/80' : 'text-[#4A4540]'}`}>
                                            <div className={`mt-0.5 p-0.5 rounded-full ${plan.featured ? 'bg-[#C4956A]/30 text-[#C4956A]' : 'bg-[#C4956A]/10 text-[#C4956A]'}`}>
                                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                            </div>
                                            <span className={plan.featured ? 'font-light' : ''}>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    <Link href="/checkout" className="block w-full">
                                        <button className={`w-full py-4 rounded-2xl font-bold text-[11px] tracking-[0.2em] transition-all duration-500 uppercase ${
                                            plan.featured
                                            ? 'bg-gradient-to-r from-[#C4956A] to-[#D4A57A] text-white hover:shadow-[0_20px_40px_rgba(196,149,106,0.4)] hover:-translate-y-1'
                                            : 'bg-[#1a1a1a] text-white hover:bg-black shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1'
                                        }`}>
                                            {plan.cta}
                                        </button>
                                    </Link>
                                    
                                    <div className="mt-5 flex items-center justify-center gap-2 opacity-50">
                                        <div className="w-1 h-1 rounded-full bg-green-500" />
                                        <span className={`text-[10px] font-bold tracking-widest uppercase ${plan.featured ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                            Beperkte voorraad
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Ultra-Premium Trust Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-[#F0EDE9] flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    <div className="flex items-start gap-6 max-w-lg text-left">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FDFCFA] rounded-2xl border border-[#F0EDE9] flex items-center justify-center shadow-sm">
                            <Sparkles className="w-6 h-6 text-[#C4956A]" />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-[#1a1a1a] mb-1 tracking-tight">Geen risico. Gegarandeerd resultaat.</p>
                            <p className="text-sm text-[#6B6560] leading-relaxed font-medium opacity-90">
                                We zijn zo overtuigd van onze formule dat we je 180 dagen de tijd geven. Geen resultaat na een volledige kuur? Dan storten we het volledige bedrag terug.
                            </p>
                        </div>
                    </div>
                    
                    {/* Trust Section Footer - Clean */}
                    <div className="flex flex-col items-center lg:items-end gap-4 opacity-40">
                         <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Beveiligde afrekening</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
