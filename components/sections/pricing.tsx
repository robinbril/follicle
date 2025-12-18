"use client"

import { Check, Truck, Shield, ArrowRight, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const plans = [
    {
        id: "trial",
        label: "Proberen",
        months: 1,
        totalPrice: 49,
        perMonth: 49,
        originalPrice: 49,
        savings: 0,
        featured: false,
        badge: "Testfase",
        benefits: [
            { title: "1× REVIVE (30ml)", subtitle: "1 maand voorraad" },
            { title: "30 dagen kuur", subtitle: "Startperiode" },
            { title: "180 dgn garantie", subtitle: "Volledige terugbetaling" }
        ],
        cta: "PROBEER 1 FLES"
    },
    {
        id: "popular",
        label: "Start",
        months: 3,
        totalPrice: 87,
        perMonth: 29,
        originalPrice: 147,
        savings: 60,
        featured: false,
        badge: "Snelle start",
        benefits: [
            { title: "3× REVIVE (90ml)", subtitle: "3 maanden voorraad" },
            { title: "90 dagen kuur", subtitle: "Eerste resultaten zichtbaar" },
            { title: "Gratis verzending", subtitle: "Binnen 2 werkdagen" }
        ],
        cta: "BESTEL STARTPAKKET"
    },
    {
        id: "best",
        label: "Resultaat",
        months: 6,
        totalPrice: 114,
        perMonth: 19,
        originalPrice: 294,
        savings: 180,
        featured: true,
        badge: "Meest gekozen",
        benefits: [
            { title: "6× REVIVE (180ml)", subtitle: "6 maanden volledige voorraad" },
            { title: "180 dagen kuur", subtitle: "Complete behandelperiode" },
            { title: "Gratis Dermaroller", subtitle: "€39 waarde • Verhoogt absorptie met 200%" }
        ],
        cta: "BESTEL NU"
    }
]

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2)

    useEffect(() => {
        if (window.location.hash === '#resultaatpakket') {
            setSelectedPlan(2)
        }
    }, [])

    const activePlan = plans[selectedPlan]

    return (
        <section id="prijzen" className="py-8 sm:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden relative">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,149,106,0.06)_0%,transparent_60%)]" />
            </div>

            <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Compact Header - Mobile Optimized */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-4 sm:mb-12 text-center"
                >
                    <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                        Prijzen & Pakketten
                    </h2>
                </motion.div>

                {/* Compact Segmented Control - Mobile First */}
                <div className="sticky top-0 z-50 bg-gradient-to-b from-white via-white to-white/0 pt-2 pb-4 -mx-4 px-4 sm:static sm:bg-transparent sm:pt-0 sm:pb-0 sm:mx-0 sm:px-0">
                    <div className="flex p-1 bg-gray-100/80 backdrop-blur-xl rounded-xl w-full border border-gray-200/60 shadow-sm">
                        {plans.map((plan, i) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(i)}
                                className="relative z-10 flex-1 px-2 sm:px-4 py-3 transition-all duration-300 group outline-none"
                            >
                                <span className={`relative z-20 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap block ${
                                    selectedPlan === i ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                                }`}>
                                    {plan.label}
                                </span>
                                
                                {selectedPlan === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-lg shadow-md z-10 border border-gray-100"
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Compact Pricing Card - Mobile Optimized */}
                <div className="relative mt-4 sm:mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedPlan}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            id={activePlan.id === 'best' ? 'resultaatpakket' : undefined}
                            className={`relative bg-white border rounded-2xl p-4 sm:p-8 overflow-hidden ${
                                activePlan.featured 
                                ? 'border-[#C4956A]/20 shadow-lg' 
                                : 'border-gray-200 shadow-md'
                            }`}
                        >
                            {/* Badge - Compact */}
                            {activePlan.featured ? (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-900 text-white text-[9px] font-bold uppercase tracking-[0.1em] w-fit mb-3">
                                    <span className="text-[#C4956A]">★</span>
                                    Meest Gekozen
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-[9px] font-bold uppercase tracking-[0.1em] text-gray-500 w-fit mb-3">
                                    {activePlan.badge}
                                </div>
                            )}

                            {/* Price Section - Ultra Compact */}
                            <div className="mb-4">
                                {/* Price Row */}
                                <div className="flex items-baseline gap-2 mb-2">
                                    {activePlan.savings > 0 && (
                                        <span className="text-base font-medium text-gray-300 line-through">€{activePlan.originalPrice}</span>
                                    )}
                                    <span className="text-lg font-bold text-gray-900">€</span>
                                    <motion.span 
                                        key={activePlan.totalPrice}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ type: "spring", bounce: 0.3 }}
                                        className="text-5xl font-black text-gray-900 tracking-tighter leading-none"
                                    >
                                        {activePlan.totalPrice}
                                    </motion.span>
                                </div>

                                {/* Savings + Monthly */}
                                <div className="flex flex-wrap items-center gap-2">
                                    {activePlan.savings > 0 && (
                                        <span className="px-2 py-1 rounded-md bg-[#C4956A] text-white text-[11px] font-bold">
                                            Bespaar €{activePlan.savings}
                                        </span>
                                    )}
                                    <span className="text-sm text-gray-500">
                                        <span className="font-bold text-gray-900">€{activePlan.perMonth}</span>/maand
                                    </span>
                                </div>
                            </div>

                            {/* Features - Ultra Compact */}
                            <div className="space-y-1.5 mb-4">
                                {activePlan.benefits.map((benefit, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.05 + idx * 0.03 }}
                                        className="flex items-center gap-2 py-2 px-2.5 rounded-lg bg-gray-50/80"
                                    >
                                        <div className="w-4 h-4 rounded-full bg-[#C4956A] flex items-center justify-center shrink-0">
                                            <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-[13px] font-semibold text-gray-900">{benefit.title}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button - Prominent */}
                            <Link href="/checkout" className="block outline-none group">
                                <motion.button 
                                    whileTap={{ scale: 0.98 }}
                                    className={`relative w-full py-4 sm:py-5 rounded-xl font-bold text-[13px] sm:text-[14px] tracking-wide uppercase overflow-hidden transition-all duration-300 ${
                                        activePlan.featured
                                        ? 'bg-gray-900 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                                >
                                    {activePlan.featured && (
                                        <motion.div 
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {activePlan.cta}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </motion.button>
                            </Link>

                            {/* Trust Row - Compact */}
                            <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gray-500">
                                    <Truck className="w-3.5 h-3.5 text-[#C4956A]" />
                                    Gratis verzending
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gray-500">
                                    <Shield className="w-3.5 h-3.5 text-[#C4956A]" />
                                    180d garantie
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-gray-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Op voorraad
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
