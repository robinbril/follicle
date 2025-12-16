"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(1) // Pre-select 6 maanden (index 1)

    const plans = [
        {
            id: "trial",
            label: "Probeer",
            sublabel: "1 maand",
            price: 49,
            perMonth: null,
            totalPrice: 49,
            featured: false,
            description: "Perfect om te testen of REVIVE bij je past",
            items: ["1× REVIVE Serum (30ml)"],
        },
        {
            id: "cure",
            label: "Volledige kuur",
            sublabel: "6 maanden",
            price: 29,
            perMonth: true,
            totalPrice: 174,
            featured: true,
            description: "Beste resultaten voor volledige behandeling",
            items: ["6× REVIVE Serum (180ml totaal)"],
            extraBenefit: "Meest gekozen door 847 klanten"
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

    const selectedBundle = plans[selectedPlan]

    return (
        <section id="prijzen" className="py-24 sm:py-32 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* Elegant Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-3xl sm:text-4xl font-light text-[#2D2A26] mb-4 tracking-wide"
                    >
                        Kies je behandeling
                    </h2>
                    <p className="text-[#8A8580] font-light">
                        Gratis verzending · 180 dagen garantie
                    </p>
                </motion.div>

                {/* Two-option layout with visual hierarchy */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">

                    {/* Trial - smaller (2 cols) */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedPlan(0)}
                        className={`md:col-span-2 relative p-8 rounded-2xl transition-all duration-300 text-left ${selectedPlan === 0
                            ? 'bg-white border-2 border-[#C4956A] shadow-lg'
                            : 'bg-white border border-[#E8E4DF] hover:border-[#C4956A]/50'
                            }`}
                    >
                        <p className="text-xs tracking-widest uppercase text-[#9A948E] mb-2">
                            {plans[0].label}
                        </p>
                        <h3 className="text-xl font-medium text-[#2D2A26] mb-4">
                            {plans[0].sublabel}
                        </h3>

                        <div className="mb-6">
                            <span className="text-3xl font-medium text-[#2D2A26]">€{plans[0].price}</span>
                        </div>

                        <p className="text-sm text-[#6B6560] mb-4 leading-relaxed">
                            {plans[0].description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-[#6B6560]">
                            <Check className="w-4 h-4 text-[#C4956A]" />
                            {plans[0].items[0]}
                        </div>
                    </motion.button>

                    {/* Cure - larger, featured (3 cols) */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        onClick={() => setSelectedPlan(1)}
                        className={`md:col-span-3 relative p-8 sm:p-10 rounded-2xl transition-all duration-300 text-left ${selectedPlan === 1
                            ? 'bg-white border-2 border-[#C4956A] shadow-[0_8px_30px_rgba(196,149,106,0.15)]'
                            : 'bg-white border border-[#E8E4DF] hover:border-[#C4956A]/50 hover:shadow-lg'
                            }`}
                    >
                        {/* Recommended indicator */}
                        <span className="absolute top-4 right-4 text-[#C4956A] text-sm">◆</span>

                        <p className="text-xs tracking-widest uppercase text-[#C4956A] mb-2">
                            Aanbevolen
                        </p>
                        <h3
                            className="text-2xl font-medium text-[#2D2A26] mb-4"
                        >
                            {plans[1].sublabel}
                        </h3>

                        <div className="mb-2">
                            <span className="text-4xl font-medium text-[#2D2A26]">€{plans[1].price}</span>
                            <span className="text-[#9A948E] text-lg">/maand</span>
                        </div>
                        <p className="text-sm text-[#9A948E] mb-6">€{plans[1].totalPrice} totaal</p>

                        <p className="text-sm text-[#6B6560] mb-4 leading-relaxed">
                            {plans[1].description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-[#6B6560] mb-4">
                            <Check className="w-4 h-4 text-[#C4956A]" />
                            {plans[1].items[0]}
                        </div>

                        {/* Social proof */}
                        <p className="text-xs text-[#C4956A] font-medium">
                            {plans[1].extraBenefit}
                        </p>
                    </motion.button>
                </div>

                {/* Checkout - Clean, Premium */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Total */}
                    <div className="mb-8">
                        <p className="text-[#9A948E] text-sm mb-2">Totaal</p>
                        <p
                            className="text-4xl font-medium text-[#2D2A26]"
                        >
                            €{selectedBundle.totalPrice}
                        </p>
                        <p className="text-[#9A948E] text-sm mt-1">
                            {selectedPlan === 1 ? "€0.97 per dag" : ""}
                        </p>
                    </div>

                    {/* Elegant CTA - Dark, not glossy */}
                    <Link href="/checkout">
                        <Button
                            className="bg-[#2D2A26] hover:bg-[#C4956A] text-white font-normal text-lg py-7 px-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                        >
                            Start behandeling
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>

                    {/* Subtle trust */}
                    <p className="text-[#9A948E] text-sm">
                        180 dagen garantie · Gratis verzending · Morgen in huis
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
