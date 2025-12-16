"use client"

import { Button } from '@/components/ui/button'
import { Check, Star, Shield, Truck } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Pre-select 6 months (best deal)

    const plans = [
        {
            id: "trial",
            label: "Proberen",
            months: 1,
            price: 49,
            perMonth: 49,
            originalTotal: 49,
            totalPrice: 49,
            savings: 0,
            featured: false,
            benefits: [
                "1× REVIVE Serum (30ml)",
                "Gratis verzending"
            ],
        },
        {
            id: "popular",
            label: "Populair",
            months: 3,
            price: 35,
            perMonth: 35,
            originalTotal: 147,
            totalPrice: 105,
            savings: 42,
            featured: false,
            benefits: [
                "3× REVIVE Serum",
                "Gratis verzending",
                "Eerste resultaten zichtbaar"
            ],
        },
        {
            id: "best",
            label: "Beste Deal",
            months: 6,
            price: 20,
            perMonth: 20,
            originalTotal: 294,
            totalPrice: 119,
            savings: 175,
            featured: true,
            benefits: [
                "6× REVIVE Serum (Complete kuur)",
                "Gratis verzending",
                "Volledige resultaten",
                "180 dagen garantie"
            ],
            badge: "BESPAAR €175"
        },
    ]

    // Listen for plan selection from calculator
    useEffect(() => {
        const handleSelectPlan = (event: CustomEvent) => {
            if (event.detail?.planIndex !== undefined) {
                setSelectedPlan(event.detail.planIndex)
            }
        }

        window.addEventListener('selectPlan', handleSelectPlan as EventListener)
        return () => window.removeEventListener('selectPlan', handleSelectPlan as EventListener)
    }, [])

    return (
        <section id="prijzen" className="py-24 sm:py-32 bg-gradient-to-b from-white to-[#FAFAF9]">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-3">
                        Start vandaag
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-light text-[#1a1a1a] tracking-tight mb-4">
                        Kies je behandeling
                    </h2>
                    <div className="flex items-center justify-center gap-6 text-sm text-[#888]">
                        <span className="flex items-center gap-2">
                            <Truck className="w-4 h-4" /> Gratis verzending
                        </span>
                        <span className="flex items-center gap-2">
                            <Shield className="w-4 h-4" /> 180 dagen garantie
                        </span>
                    </div>
                </motion.div>

                {/* 3-Tier Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedPlan(i)}
                            className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${plan.featured
                                    ? 'bg-[#1a1a1a] text-white scale-[1.02] shadow-2xl z-10'
                                    : selectedPlan === i
                                        ? 'bg-white border-2 border-[#C4956A] shadow-lg'
                                        : 'bg-white border border-[#e8e8e8] hover:border-[#C4956A]/50 hover:shadow-md'
                                }`}
                        >
                            {/* Savings Badge */}
                            {plan.badge && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4956A] text-white text-[10px] tracking-wider font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Header */}
                            <div className="text-center mb-4 pt-2">
                                <p className={`text-xs tracking-widest uppercase mb-2 ${plan.featured ? 'text-[#C4956A]' : 'text-[#999]'
                                    }`}>
                                    {plan.label}
                                </p>
                                <h3 className={`text-2xl font-medium ${plan.featured ? 'text-white' : 'text-[#1a1a1a]'
                                    }`}>
                                    {plan.months} maand{plan.months > 1 ? 'en' : ''}
                                </h3>
                            </div>

                            {/* Product Visual */}
                            <div className="flex justify-center mb-4">
                                <div className={`w-20 h-20 rounded-xl flex items-center justify-center ${plan.featured ? 'bg-white/10' : 'bg-[#f8f8f8]'
                                    }`}>
                                    <span className={`text-3xl font-light ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'
                                        }`}>
                                        {plan.months}×
                                    </span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-4">
                                {plan.savings > 0 && (
                                    <p className={`text-sm line-through mb-1 ${plan.featured ? 'text-white/40' : 'text-[#bbb]'
                                        }`}>
                                        €{plan.originalTotal}
                                    </p>
                                )}
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className={`text-4xl font-medium ${plan.featured ? 'text-white' : 'text-[#1a1a1a]'
                                        }`}>
                                        €{plan.totalPrice}
                                    </span>
                                    <span className={`text-sm ${plan.featured ? 'text-white/50' : 'text-[#999]'
                                        }`}>
                                        totaal
                                    </span>
                                </div>
                                <p className={`text-sm mt-1 ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'
                                    }`}>
                                    €{plan.perMonth}/maand
                                </p>
                            </div>

                            {/* Benefits */}
                            <ul className="space-y-2 mb-6">
                                {plan.benefits.map((benefit, idx) => (
                                    <li key={idx} className={`flex items-start gap-2 text-sm ${plan.featured ? 'text-white/80' : 'text-[#666]'
                                        }`}>
                                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'
                                            }`} />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href="/checkout" className="block">
                                <button className={`w-full py-3 rounded-lg font-medium transition-all ${plan.featured
                                        ? 'bg-[#C4956A] text-white hover:bg-[#b8896a]'
                                        : selectedPlan === i
                                            ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                                            : 'border border-[#ddd] text-[#666] hover:border-[#C4956A] hover:text-[#C4956A]'
                                    }`}>
                                    {plan.featured ? 'Kies beste deal' : 'Selecteer'}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-white border border-[#eee] rounded-full px-5 py-2.5 shadow-sm">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-[#C4956A] text-[#C4956A]" />
                            ))}
                        </div>
                        <span className="text-sm text-[#666]">
                            Keuze van <strong>847+</strong> klanten
                        </span>
                    </div>

                    <p className="text-xs text-[#999] mt-6">
                        Niet tevreden? Volledige terugbetaling binnen 180 dagen. Geen vragen.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
