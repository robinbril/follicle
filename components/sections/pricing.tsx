"use client"

import { Check, Truck, Shield, Package } from 'lucide-react'
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
            bgClass: "bg-white border border-[#e8e8e8]",
            benefits: [
                "1× REVIVE Serum (30ml)",
                "Gratis verzending"
            ],
            cta: "Probeer éénmalig"
        },
        {
            id: "popular",
            label: "Bundel",
            months: 3,
            bottles: 3,
            perMonth: 30,
            originalTotal: 147,
            totalPrice: 89,
            perDay: "0.99",
            savings: 58,
            featured: false,
            bgClass: "bg-[#F5F5F7] border border-[#e8e8e8]",
            benefits: [
                "3× REVIVE Serum",
                "Gratis verzending",
                "Eerste resultaten"
            ],
            cta: "Kies bundel"
        },
        {
            id: "best",
            label: "Voordeelverpakking",
            months: 6,
            bottles: 6,
            perMonth: 20,
            originalTotal: 294,
            totalPrice: 119,
            perDay: "0.66",
            savings: 175,
            featured: true,
            bgClass: "bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]",
            benefits: [
                "6× REVIVE Serum (Complete kuur)",
                "1× Minoxidil flesje (GRATIS)",
                "1× Dermaroller 0.25mm (GRATIS)",
                "180 dagen garantie"
            ],
            cta: "Claim Voordeelverpakking",
            badge: "3 MAANDEN GRATIS"
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
                            className={`relative cursor-pointer rounded-2xl transition-all duration-300 ${plan.bgClass} ${plan.featured
                                    ? 'text-white scale-[1.03] shadow-[0_20px_60px_rgba(196,149,106,0.3)] z-10'
                                    : selectedPlan === i
                                        ? 'border-2 !border-[#C4956A] shadow-lg'
                                        : 'hover:border-[#C4956A]/50 hover:shadow-md'
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-[#C4956A] to-[#d4a57a] text-white text-[11px] tracking-wider font-bold py-2 text-center rounded-t-2xl">
                                    {plan.badge}
                                </div>
                            )}

                            <div className={`p-6 ${plan.featured ? 'pt-12' : ''}`}>

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

                                {/* Simple Icon Visual */}
                                <div className="flex justify-center mb-5 min-h-[60px] items-center">
                                    <div className="flex items-center gap-1">
                                        {[...Array(Math.min(plan.bottles, 3))].map((_, idx) => (
                                            <Package
                                                key={idx}
                                                className={`${plan.bottles === 1 ? 'w-8 h-8' : 'w-6 h-6'} ${plan.featured ? 'text-[#C4956A]' : 'text-[#C4956A]'
                                                    }`}
                                            />
                                        ))}
                                        {plan.bottles > 3 && (
                                            <span className={`text-sm font-medium ml-1 ${plan.featured ? 'text-white/60' : 'text-[#999]'
                                                }`}>
                                                +{plan.bottles - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-4">
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

                                    {/* Smart customer logic */}
                                    {plan.featured && (
                                        <p className="text-xs mt-2 text-[#d4a57a] font-medium">
                                            Slechts €30 méér dan 3 maanden
                                        </p>
                                    )}

                                    <p className={`text-xs mt-1 ${plan.featured ? 'text-white/40' : 'text-[#bbb]'
                                        }`}>
                                        €{plan.perDay} per dag
                                    </p>
                                </div>

                                {/* Benefits */}
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
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
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
