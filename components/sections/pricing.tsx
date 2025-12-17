"use client"

import { Check, Truck, Shield, Sparkles, ArrowRight, Zap } from 'lucide-react'
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
        savings: 0,
        featured: false,
        badge: "Testfase",
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
        badge: "Snelle start",
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

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Default to 6 months

    useEffect(() => {
        if (window.location.hash === '#resultaatpakket') {
            setSelectedPlan(2)
        }
    }, [])

    const activePlan = plans[selectedPlan]

    return (
        <section id="prijzen" className="py-16 sm:py-24 bg-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(196,149,106,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12 text-center"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.05] mb-6">
                        <Zap className="w-3 h-3 text-[#C4956A]" />
                        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-500">Kies je transformatie</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] sm:leading-[1.1]">
                        Prijzen & Pakketten.
                    </h2>
                </motion.div>

                {/* Segmented Control - Award Winning Switcher */}
                <div className="flex justify-center mb-10">
                    <div className="relative flex p-1.5 bg-gray-100/50 backdrop-blur-md rounded-2xl w-full max-w-2xl border border-gray-200/40 shadow-inner">
                        {plans.map((plan, i) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(i)}
                                className="relative z-10 flex-1 px-1 sm:px-4 py-3 sm:py-4 transition-all duration-300 group outline-none"
                            >
                                <span className={`relative z-20 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-500 whitespace-nowrap block ${
                                    selectedPlan === i ? 'text-[#C4956A]' : 'text-gray-400 group-hover:text-gray-600'
                                }`}>
                                    {plan.label}
                                </span>
                                
                                {selectedPlan === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] z-10 border border-black/[0.02]"
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-50 rounded-xl" />
                                    </motion.div>
                                )}

                                {plan.savings > 0 && (
                                    <span className={`hidden sm:block absolute -top-1 -right-1 px-2 py-0.5 rounded-md text-[7px] font-black transition-colors duration-300 z-30 ${
                                        selectedPlan === i ? 'bg-[#C4956A] text-white' : 'bg-gray-200 text-gray-500'
                                    }`}>
                                        -{Math.round((plan.savings / (plan.totalPrice + plan.savings)) * 100)}%
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Morphing Card */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedPlan}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            id={activePlan.id === 'best' ? 'resultaatpakket' : undefined}
                            className={`relative bg-white/70 backdrop-blur-2xl border ${
                                activePlan.featured ? 'border-[#C4956A]/20 shadow-[0_40px_100px_rgba(196,149,106,0.12)]' : 'border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.05)]'
                            } rounded-[3rem] p-8 sm:p-12 overflow-hidden`}
                        >
                            {/* Accent Glow for Best Choice */}
                            {activePlan.featured && (
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C4956A]/5 blur-[100px] rounded-full pointer-events-none" />
                            )}

                            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                                {/* Left: Pricing Details */}
                                <div className="flex-grow w-full md:w-auto">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-6">
                                        <div className={`w-1.5 h-1.5 rounded-full ${activePlan.featured ? 'bg-[#C4956A] animate-pulse' : 'bg-gray-300'}`} />
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
                                            {activePlan.badge}
                                        </span>
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <div className="flex items-baseline gap-4">
                                            <motion.span 
                                                key={activePlan.totalPrice}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-6xl sm:text-7xl font-black text-gray-900 tracking-tighter"
                                            >
                                                €{activePlan.totalPrice}
                                            </motion.span>
                                            
                                            {activePlan.savings > 0 && (
                                                <div className="flex flex-col justify-center">
                                                    <span className="text-[12px] font-bold text-gray-300 line-through mb-1">
                                                        €{activePlan.totalPrice + activePlan.savings}
                                                    </span>
                                                    <div className="inline-flex items-center px-2 py-1 rounded-md bg-[#C4956A] shadow-[0_4px_12px_rgba(196,149,106,0.2)]">
                                                        <span className="text-[9px] font-black uppercase text-white tracking-widest whitespace-nowrap">
                                                            Bespaar €{activePlan.savings}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-[11px] sm:text-[13px] font-black text-gray-900 uppercase tracking-[0.15em] leading-none">
                                            €{activePlan.perMonth} per maand
                                        </p>
                                        <p className="text-[9px] sm:text-[11px] font-medium text-gray-400 uppercase tracking-[0.2em]">
                                            voor {activePlan.months} {activePlan.months === 1 ? 'maand' : 'maanden'} behandeling
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Benefits & Action */}
                                <div className="w-full md:w-[320px] shrink-0 space-y-8">
                                    <div className="space-y-4">
                                        {activePlan.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3 text-[#C4956A]" strokeWidth={4} />
                                                </div>
                                                <span className="text-sm font-bold text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/checkout" className="block outline-none group">
                                        <button className={`w-full py-5 rounded-2xl font-black text-[11px] tracking-[0.25em] uppercase transition-all duration-300 relative overflow-hidden ${
                                            activePlan.featured
                                            ? 'bg-gray-900 text-white hover:bg-black shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-95'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95'
                                        }`}>
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                {activePlan.cta}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </Link>
                                    
                                    <div className="flex items-center justify-center gap-3 opacity-30 group cursor-default">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] font-black tracking-[0.3em] uppercase text-gray-900">
                                            Direct leverbaar
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Micro-Trust Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-12 border-t border-gray-100"
                >
                    <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-[#C4956A] transition-colors uppercase tracking-[0.2em]">
                        <Truck className="w-4 h-4" strokeWidth={1.5} />
                        Gratis verzending
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-[#C4956A] transition-colors uppercase tracking-[0.2em]">
                        <Shield className="w-4 h-4" strokeWidth={1.5} />
                        180 dgn garantie
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-[#C4956A] transition-colors uppercase tracking-[0.2em]">
                        <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                        Klinische studies
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
