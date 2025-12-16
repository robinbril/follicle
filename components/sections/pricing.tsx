"use client"

import { Check, Star, Truck, Shield, Package } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2)

    const plans = [
        {
            id: "trial",
            label: "Proberen",
            months: 1,
            bottles: 1,
            perMonth: 49,
            originalTotal: 49,
            totalPrice: 49,
            perDay: "1.63",
            savings: 0,
            featured: false,
            benefits: [
                "1× REVIVE Serum (30ml)",
                "Gratis verzending"
            ],
            cta: "In winkelmand"
        },
        {
            id: "popular",
            label: "Populair",
            months: 3,
            bottles: 3,
            perMonth: 35,
            originalTotal: 147,
            totalPrice: 105,
            perDay: "1.17",
            savings: 42,
            featured: false,
            benefits: [
                "3× REVIVE Serum",
                "Gratis verzending",
                "Eerste resultaten"
            ],
            cta: "In winkelmand"
        },
        {
            id: "best",
            label: "Meest gekozen",
            months: 6,
            bottles: 6,
            perMonth: 20,
            originalTotal: 294,
            totalPrice: 119,
            perDay: "0.66",
            savings: 175,
            featured: true,
            benefits: [
                "6× REVIVE Serum (Complete kuur)",
                "Gratis verzending",
                "Volledige resultaten",
                "180 dagen garantie"
            ],
            cta: "Start behandeling",
            badge: "BESPAAR €175"
        },
    ]

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 items-end mb-10">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelectedPlan(i)}
                            className={`relative cursor-pointer rounded-2xl transition-all duration-300 ${plan.featured
                                    ? 'bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] text-white scale-[1.03] shadow-[0_20px_60px_rgba(196,149,106,0.25)] z-10'
                                    : selectedPlan === i
                                        ? 'bg-white border-2 border-[#C4956A] shadow-lg'
                                        : 'bg-white border border-[#e8e8e8] hover:border-[#C4956A]/50 hover:shadow-md'
                                }`}
                        >
                            {/* Savings Ribbon */}
                            {plan.badge && (
                                <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-[#C4956A] to-[#d4a57a] text-white text-[11px] tracking-wider font-bold py-2 text-center rounded-t-2xl">
                                    {plan.badge}
                                </div>
                            )}

                            <div className={`p-6 ${plan.featured ? 'pt-12' : ''}`}>

                                {/* Social Proof - Only for featured */}
                                {plan.featured && (
                                    <div className="flex items-center justify-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#C4956A] text-[#C4956A]" />
                                        ))}
                                        <span className="text-xs text-white/60 ml-1">Meest gekozen</span>
                                    </div>
                                )}

                                {/* Header */}
                                <div className="text-center mb-4">
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
                                <div className="flex justify-center mb-5 min-h-[80px] items-end">
                                    <div className={`flex items-end justify-center gap-1 ${plan.featured ? '' : ''
                                        }`}>
                                        {[...Array(Math.min(plan.bottles, 6))].map((_, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + idx * 0.05 }}
                                                className={`rounded-md flex items-center justify-center ${plan.featured
                                                        ? 'bg-white/10 border border-white/20'
                                                        : 'bg-[#f8f8f8] border border-[#eee]'
                                                    } ${plan.bottles === 1 ? 'w-14 h-20' : plan.bottles === 3 ? 'w-10 h-16' : 'w-8 h-14'}`}
                                            >
                                                <Package className={`${plan.bottles === 1 ? 'w-6 h-6' : 'w-4 h-4'
                                                    } ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'}`} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-5">
                                    {plan.savings > 0 && (
                                        <p className={`text-base line-through mb-1 ${plan.featured ? 'text-white/40' : 'text-[#bbb]'
                                            }`}>
                                            €{plan.originalTotal}
                                        </p>
                                    )}
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className={`text-4xl font-medium ${plan.featured ? 'text-white' : 'text-[#1a1a1a]'
                                            }`}>
                                            €{plan.totalPrice}
                                        </span>
                                    </div>
                                    <p className={`text-sm mt-1 ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'
                                        }`}>
                                        €{plan.perMonth}/maand
                                    </p>
                                    <p className={`text-xs mt-1 ${plan.featured ? 'text-white/40' : 'text-[#bbb]'
                                        }`}>
                                        Slechts €{plan.perDay} per dag
                                    </p>
                                </div>

                                {/* Benefits - Fixed height area */}
                                <ul className="space-y-2 mb-6 min-h-[100px]">
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
                                    <button className={`w-full py-3.5 rounded-xl font-medium transition-all ${plan.featured
                                            ? 'bg-gradient-to-r from-[#C4956A] to-[#d4a57a] text-white hover:shadow-lg hover:shadow-[#C4956A]/30'
                                            : selectedPlan === i
                                                ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                                                : 'border border-[#ddd] text-[#666] hover:border-[#C4956A] hover:text-[#C4956A]'
                                        }`}>
                                        {plan.cta} {plan.featured && '›'}
                                    </button>
                                </Link>

                                {/* Trust indicator for featured */}
                                {plan.featured && (
                                    <p className="text-center text-xs text-green-400 mt-3 flex items-center justify-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        Op voorraad · Morgen in huis
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-xs text-[#999]">
                        Niet tevreden? Volledige terugbetaling binnen 180 dagen. Geen vragen.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
