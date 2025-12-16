"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Truck, ShieldCheck, Package } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(0) // Pre-select 6 maanden

    const bundles = [
        {
            id: "ultimate",
            months: 6,
            label: "6 maanden",
            price: 29,
            totalPrice: 174,
            recommended: true,
            items: [
                "6x REVIVE Hair Serum (180ml)",
                "3x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.25mm"
            ],
        },
        {
            id: "complete",
            months: 3,
            label: "3 maanden",
            price: 39,
            totalPrice: 117,
            recommended: false,
            items: [
                "3x REVIVE Hair Serum (90ml)",
                "1x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.25mm"
            ],
        },
        {
            id: "starter",
            months: 1,
            label: "1 maand",
            price: 49,
            totalPrice: 49,
            recommended: false,
            items: [
                "1x REVIVE Hair Serum (30ml)",
            ],
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

    const selectedBundle = bundles[selectedPlan]

    return (
        <section id="prijzen" className="py-20 sm:py-28 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* Elegant Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-normal text-[#2D2A26] mb-4 tracking-tight">
                        Kies je behandeling
                    </h2>
                    <p className="text-[#6B6560] max-w-md mx-auto">
                        Alle bundels inclusief gratis verzending en 180 dagen garantie
                    </p>
                </motion.div>

                {/* Premium Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {bundles.map((bundle, index) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedPlan(index)}
                            className={`relative p-8 rounded-2xl transition-all duration-300 text-left ${selectedPlan === index
                                ? 'bg-white border-2 border-[#C4956A] shadow-[0_8px_30px_rgba(196,149,106,0.15)]'
                                : 'bg-white border border-[#E8E4DF] hover:border-[#C4956A]/50 hover:shadow-lg'
                                }`}
                        >
                            {/* Subtle diamond for recommended */}
                            {bundle.recommended && (
                                <span className="absolute top-4 right-4 text-[#C4956A] text-sm">◆</span>
                            )}

                            {/* Duration */}
                            <div className="mb-6">
                                <p className="text-[11px] tracking-widest uppercase text-[#9A948E] mb-2">
                                    {bundle.recommended ? 'Aanbevolen' : 'Behandeling'}
                                </p>
                                <h3 className="text-xl font-medium text-[#2D2A26]">
                                    {bundle.label}
                                </h3>
                            </div>

                            {/* Price - clean, no discount messaging */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-medium text-[#2D2A26]">€{bundle.price}</span>
                                    {bundle.months > 1 && (
                                        <span className="text-[#9A948E] text-sm">/maand</span>
                                    )}
                                </div>
                                {bundle.months > 1 && (
                                    <p className="text-[#9A948E] text-sm mt-1">€{bundle.totalPrice} totaal</p>
                                )}
                            </div>

                            {/* Items - subtle, elegant */}
                            <div className="space-y-2 border-t border-[#E8E4DF] pt-6">
                                {bundle.items.map((item, i) => (
                                    <p key={i} className="text-sm text-[#6B6560] leading-relaxed">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Checkout - Clean, Premium */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Total */}
                    <div className="mb-6">
                        <p className="text-[#9A948E] text-sm mb-2">Totaal</p>
                        <p className="text-4xl font-medium text-[#2D2A26]">€{selectedBundle.totalPrice}</p>
                    </div>

                    {/* Elegant CTA - Dark, not glossy gold */}
                    <Button
                        className="bg-[#2D2A26] hover:bg-[#C4956A] text-white font-normal text-lg py-7 px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
                    >
                        Start behandeling
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    {/* Subtle trust signals */}
                    <p className="text-[#9A948E] text-sm mb-8">
                        180 dagen garantie · Gratis verzending · Morgen in huis
                    </p>

                    {/* Payment logos - very subtle */}
                    <div className="flex items-center justify-center gap-6 opacity-40">
                        <img src="/images/payment/ideal.png" alt="iDEAL" className="h-4" />
                        <img src="/images/payment/apple-pay.png" alt="Apple Pay" className="h-4" />
                        <img src="/images/payment/google-pay.png" alt="Google Pay" className="h-4" />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
