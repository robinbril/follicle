"use client"

import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Truck, ShieldCheck, Package, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Pre-select Ultimate Herstelkit

    const bundles = [
        {
            id: "starter",
            label: "Starter Kit",
            subLabel: "Probeer eerst",
            price: 49,
            pricePerMonth: null,
            popular: false,
            items: [
                "1x REVIVE Hair Serum (30ml)",
            ],
            value: null
        },
        {
            id: "complete",
            label: "Complete Routine",
            subLabel: "3 maanden",
            price: 147,
            pricePerMonth: 49,
            popular: true,
            items: [
                "3x REVIVE Hair Serum (90ml)",
                "1x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.5mm (€35 waarde)"
            ],
            value: 197
        },
        {
            id: "ultimate",
            label: "Ultimate Herstelkit",
            subLabel: "6 maanden · Early Adopter",
            price: 249,
            pricePerMonth: 41.50,
            popular: false,
            earlyAdopter: true,
            items: [
                "6x REVIVE Hair Serum (180ml)",
                "3x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.5mm (€35 waarde)",
                "Beperkte batch met 2,5% GHK-Cu"
            ],
            value: 349
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
        <section id="prijzen" className="pt-8 pb-16 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        De complete herstelkit<br />
                        <span className="text-[#D4A574]">vanaf €41.50/maand</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Curated routines voor maximaal resultaat
                    </p>
                </div>

                {/* Bundle Selector */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        Kies je routine
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {bundles.map((bundle, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-6 rounded-2xl border-2 transition-all duration-200 text-left ${selectedPlan === index
                                        ? 'border-[#D4A574] bg-[#D4A574]/5 shadow-xl ring-2 ring-[#D4A574]/30'
                                        : 'border-gray-200 hover:border-[#D4A574]/50 hover:shadow-lg bg-white cursor-pointer'
                                    }`}
                            >
                                {/* Badge */}
                                {bundle.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A574] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                                        POPULAIR
                                    </div>
                                )}
                                {bundle.earlyAdopter && (
                                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        EARLY ADOPTER
                                    </div>
                                )}

                                <div className="mb-4">
                                    <div className="font-bold text-gray-900 text-lg mb-1">
                                        {bundle.label}
                                    </div>
                                    <div className="text-xs text-gray-500 font-medium">
                                        {bundle.subLabel}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="text-3xl font-bold text-gray-900">
                                        €{bundle.price}
                                    </div>
                                    {bundle.pricePerMonth && (
                                        <div className="text-sm text-gray-600 mt-1">
                                            €{bundle.pricePerMonth}/maand
                                        </div>
                                    )}
                                    {bundle.value && (
                                        <div className="text-xs text-emerald-600 font-semibold mt-1">
                                            €{bundle.value} waarde · Bespaar €{bundle.value - bundle.price}
                                        </div>
                                    )}
                                </div>

                                {/* Items included */}
                                <div className="space-y-2">
                                    {bundle.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574] mt-1.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Checkout Section */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600 text-lg">Totaal</span>
                        <span className="text-4xl font-bold text-gray-900">€{selectedBundle.price}</span>
                    </div>

                    {/* One-Click Payment Buttons */}
                    <div className="space-y-3">
                        {/* Primary CTA */}
                        <Button className="w-full py-6 text-xl font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl">
                            <span>Voeg toe aan routine</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        {/* Express Checkout */}
                        <div className="grid grid-cols-3 gap-3">
                            <button className="py-4 bg-black hover:bg-gray-900 text-white rounded-xl transition-all flex items-center justify-center shadow">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                                    alt="Apple Pay"
                                    className="h-5 invert"
                                />
                            </button>
                            <button className="py-4 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-xl transition-all flex items-center justify-center shadow">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                                    alt="Google Pay"
                                    className="h-5"
                                />
                            </button>
                            <button className="py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl transition-all flex items-center justify-center shadow font-semibold text-sm">
                                4x Klarna
                            </button>
                        </div>
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        🔒 Veilige betaling · Geen verborgen kosten
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-emerald-600" />
                        Direct op voorraad
                    </span>
                    <span className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-emerald-600" />
                        Morgen in huis
                    </span>
                    <span className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        180 dagen garantie
                    </span>
                </div>

            </div>
        </section>
    )
}
