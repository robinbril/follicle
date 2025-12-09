"use client"

import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Truck, ShieldCheck, Package, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(0) // Pre-select 6 maanden

    const bundles = [
        {
            id: "ultimate",
            months: 6,
            label: "6 MAANDEN",
            subLabel: "Beste resultaat",
            price: 29,
            pricePerMonth: 29,
            totalPrice: 174,
            popular: true,
            earlyAdopter: true,
            discount: "-41%",
            items: [
                "6x REVIVE Hair Serum (180ml)",
                "3x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.5mm"
            ],
            savings: 120
        },
        {
            id: "complete",
            months: 3,
            label: "3 MAANDEN",
            subLabel: null,
            price: 39,
            pricePerMonth: 39,
            totalPrice: 117,
            popular: false,
            discount: "-20%",
            items: [
                "3x REVIVE Hair Serum (90ml)",
                "1x Kirkland Minoxidil 5%",
                "1x Dermaroller 0.5mm"
            ],
            savings: 30
        },
        {
            id: "starter",
            months: 1,
            label: "1 MAAND",
            subLabel: "Probeer eerst",
            price: 49,
            pricePerMonth: null,
            totalPrice: 49,
            popular: false,
            discount: null,
            items: [
                "1x REVIVE Hair Serum (30ml)",
            ],
            savings: null
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
                        Stop haarverlies.<br />
                        <span className="text-[#D4A574]">Start hergroei.</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Kies je kuurlengte en begin vandaag
                    </p>
                </div>

                {/* Bundle Selector */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        Kies je behandeling
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {bundles.map((bundle, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-6 rounded-2xl border-2 transition-all duration-200 text-center ${selectedPlan === index
                                        ? 'border-[#D4A574] bg-[#D4A574]/5 shadow-xl ring-2 ring-[#D4A574]/30'
                                        : 'border-gray-200 hover:border-[#D4A574]/50 hover:shadow-lg bg-white cursor-pointer'
                                    }`}
                            >
                                {/* Badges */}
                                {bundle.popular && selectedPlan === index && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A574] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                                        MEEST GEKOZEN
                                    </div>
                                )}
                                {bundle.earlyAdopter && (
                                    <div className="absolute -top-3 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        EARLY ADOPTER
                                    </div>
                                )}

                                <div className="mb-4">
                                    <div className="font-bold text-gray-900 text-base mb-1">
                                        {bundle.label}
                                    </div>
                                    {bundle.subLabel && (
                                        <div className="text-xs text-gray-500 font-medium">
                                            {bundle.subLabel}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <div className="text-2xl font-bold text-gray-900">
                                        {bundle.pricePerMonth ? `€${bundle.pricePerMonth}/mnd` : `€${bundle.price}`}
                                    </div>
                                    {bundle.discount && (
                                        <div className="text-sm text-[#D4A574] font-semibold mt-1">
                                            {bundle.discount}
                                        </div>
                                    )}
                                </div>

                                {/* Items included */}
                                <div className="space-y-2 text-left">
                                    {bundle.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
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
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Totaalprijs</span>
                        <span className="text-4xl font-bold text-gray-900">€{selectedBundle.totalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                        <span>{selectedBundle.months} {selectedBundle.months === 1 ? 'maand' : 'maanden'} voorraad</span>
                        {selectedBundle.savings && (
                            <span className="text-emerald-600 font-semibold">
                                Je bespaart €{selectedBundle.savings}
                            </span>
                        )}
                    </div>

                    {/* Primary CTA Only */}
                    <Button className="w-full py-6 text-xl font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl">
                        <span>Voeg toe aan routine</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        🔒 Veilige betaling · Geen verborgen kosten
                    </p>
                </div>

                {/* Payment & Trust Badges */}
                <div className="space-y-4">
                    {/* Payment logos */}
                    <div className="flex items-center justify-center gap-5">
                        <img src="/images/payment/ideal.png" alt="iDEAL" className="h-5 opacity-60" />
                        <img src="/images/payment/klarna.png" alt="Klarna" className="h-4 opacity-60" />
                        <img src="/images/payment/apple-pay.png" alt="Apple Pay" className="h-[18px] opacity-60" />
                        <img src="/images/payment/google-pay.png" alt="Google Pay" className="h-4 opacity-60" />
                    </div>

                    {/* Trust badges */}
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

            </div>
        </section>
    )
}
