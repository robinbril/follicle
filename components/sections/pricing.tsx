"use client"

import { Check, Truck, Shield, Sparkles, ArrowRight, Zap, Package } from 'lucide-react'
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
        label: "Startpakket",
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
        label: "Resultaatpakket",
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
        cta: "BESTEL RESULTAATPAKKET"
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
        <section id="prijzen" className="py-20 sm:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden relative">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,149,106,0.06)_0%,transparent_60%)]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(196,149,106,0.04)_0%,transparent_60%)]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                
                {/* Premium Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-16 text-center"
                >
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-gray-900/[0.03] to-gray-900/[0.06] border border-gray-900/[0.06] mb-8 shadow-sm">
                        <Zap className="w-3.5 h-3.5 text-[#C4956A]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">Kies je transformatie</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                        Prijzen & Pakketten
                    </h2>
                </motion.div>

                {/* Ultra Premium Segmented Control */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center mb-16"
                >
                    <div className="relative flex p-2 bg-gradient-to-br from-gray-100/80 to-gray-50/60 backdrop-blur-xl rounded-2xl w-full max-w-2xl border border-gray-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]">
                        {plans.map((plan, i) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(i)}
                                className="relative z-10 flex-1 px-2 sm:px-6 py-4 sm:py-5 transition-all duration-500 group outline-none"
                            >
                                <span className={`relative z-20 text-[10px] sm:text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap block ${
                                    selectedPlan === i ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                                }`}>
                                    {plan.label}
                                </span>
                                
                                {selectedPlan === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] z-10 border border-gray-100"
                                        transition={{ type: "spring", bounce: 0.12, duration: 0.6 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-xl" />
                                    </motion.div>
                                )}

                                {plan.savings > 0 && (
                                    <motion.span 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className={`hidden sm:flex absolute -top-3 -right-3 px-2.5 py-1 rounded-full text-[8px] font-black items-center gap-1 z-30 shadow-lg ${
                                            selectedPlan === i 
                                            ? 'bg-gradient-to-r from-[#C4956A] to-[#B08559] text-white shadow-[#C4956A]/25' 
                                            : 'bg-gray-200 text-gray-500'
                                        }`}
                                    >
                                        <Sparkles className="w-2.5 h-2.5" />
                                        -{Math.round((plan.savings / plan.originalPrice) * 100)}%
                                    </motion.span>
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Ultra Premium Morphing Card */}
                <div className="relative mt-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedPlan}
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            id={activePlan.id === 'best' ? 'resultaatpakket' : undefined}
                            className={`relative bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-2xl border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-14 overflow-hidden transition-all duration-500 ${
                                activePlan.featured 
                                ? 'border-[#C4956A]/20 shadow-[0_50px_100px_-20px_rgba(196,149,106,0.15),0_30px_60px_-15px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)]' 
                                : 'border-gray-200/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08),0_20px_40px_-10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)]'
                            }`}
                        >
                            {/* Premium Glow Effects */}
                            {activePlan.featured && (
                                <>
                                    <motion.div 
                                        animate={{ opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute -top-32 -right-32 w-80 h-80 bg-[#C4956A]/8 blur-[120px] rounded-full pointer-events-none" 
                                    />
                                    <motion.div 
                                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                        className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#C4956A]/5 blur-[100px] rounded-full pointer-events-none" 
                                    />
                                </>
                            )}

                            {/* "Meest Gekozen" Floating Badge */}
                            {activePlan.featured && (
                                <motion.div 
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                                >
                                    <motion.div 
                                        animate={{ scale: [1, 1.03, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_12px_32px_-4px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]"
                                    >
                                        ⭐ Meest Gekozen
                                    </motion.div>
                                </motion.div>
                            )}

                            <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center relative z-10">
                                {/* Left: Premium Pricing Display */}
                                <div className="flex-grow w-full lg:w-auto">
                                    {/* Badge */}
                                    {!activePlan.featured && (
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 mb-8">
                                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                                {activePlan.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Price Section with Psychological Anchoring */}
                                    <div className="mb-8">
                                        {/* Original Price (Anchor) */}
                                        {activePlan.savings > 0 && (
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-sm font-medium text-gray-400">Was</span>
                                                <span className="text-xl font-bold text-gray-300 line-through">€{activePlan.originalPrice}</span>
                                            </div>
                                        )}

                                        {/* Main Price */}
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-gray-900 self-start mt-2">€</span>
                                            <motion.span 
                                                key={activePlan.totalPrice}
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ type: "spring", bounce: 0.3 }}
                                                className="text-7xl sm:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter leading-none"
                                                style={{ letterSpacing: '-0.04em' }}
                                            >
                                                {activePlan.totalPrice}
                                            </motion.span>
                                        </div>

                                        {/* Savings Pill */}
                                        {activePlan.savings > 0 && (
                                            <motion.div 
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="inline-flex items-center mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#C4956A] to-[#B08559] shadow-[0_8px_24px_-4px_rgba(196,149,106,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                                            >
                                                <span className="text-sm font-black text-white tracking-wide">
                                                    Bespaar €{activePlan.savings} ({Math.round((activePlan.savings / activePlan.originalPrice) * 100)}%)
                                                </span>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Monthly Breakdown */}
                                    <div className="flex flex-col gap-1 p-4 rounded-2xl bg-gray-50/50 border border-gray-100/80 inline-block">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-black text-gray-900">€{activePlan.perMonth}</span>
                                            <span className="text-sm font-bold text-gray-500">per maand</span>
                                        </div>
                                        <span className="text-xs font-medium text-gray-400">
                                            voor {activePlan.months} {activePlan.months === 1 ? 'maand' : 'maanden'} behandeling
                                        </span>
                                    </div>
                                </div>

                                {/* Right: Premium Features & CTA */}
                                <div className="w-full lg:w-[380px] shrink-0 space-y-8">
                                    {/* Premium Feature Items */}
                                    <div className="space-y-4">
                                        {activePlan.benefits.map((benefit, idx) => (
                                            <motion.div 
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + idx * 0.1 }}
                                                className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#C4956A]/[0.04] to-transparent border border-[#C4956A]/10 hover:border-[#C4956A]/20 hover:translate-x-1 transition-all duration-300"
                                            >
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C4956A] to-[#B08559] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(196,149,106,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                                </div>
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-[15px] font-bold text-gray-900">{benefit.title}</span>
                                                    <span className="text-[13px] font-medium text-gray-500">{benefit.subtitle}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Ultra Premium CTA Button */}
                                    <Link href="/checkout" className="block outline-none group">
                                        <motion.button 
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`relative w-full py-6 rounded-2xl font-black text-[12px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 ${
                                                activePlan.featured
                                                ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4),0_10px_20px_-5px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]'
                                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-lg'
                                            }`}
                                        >
                                            {/* Shine Animation */}
                                            {activePlan.featured && (
                                                <motion.div 
                                                    animate={{ x: ['-100%', '200%'] }}
                                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                                />
                                            )}
                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                {activePlan.cta}
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                                            </span>
                                        </motion.button>
                                    </Link>
                                    
                                    {/* Availability Badge */}
                                    <div className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[11px] font-bold text-gray-600 tracking-wide">
                                            Direct leverbaar
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Premium Trust Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16 pt-12 border-t border-gray-100"
                >
                    {[
                        { icon: Truck, label: "Gratis verzending" },
                        { icon: Shield, label: "180 dagen garantie" },
                        { icon: Package, label: "Direct leverbaar" },
                        { icon: Sparkles, label: "Klinisch bewezen" }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className="flex items-center gap-3 text-[11px] font-bold text-gray-500 hover:text-gray-900 transition-all duration-300 cursor-default"
                        >
                            <item.icon className="w-5 h-5 text-[#C4956A]" strokeWidth={1.5} />
                            <span className="uppercase tracking-[0.15em]">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
