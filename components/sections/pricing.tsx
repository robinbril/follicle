"use client"

import { Button } from '@/components/ui/button'
import { Star, ArrowRight, Truck, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(0) // Pre-select 6 maanden (now index 0)

    const plans = [
        {
            months: 6,
            label: "6 MAANDEN",
            subLabel: "Beste resultaat",
            price: 29,
            priceLabel: "€29/mnd",
            discount: "-41%",
            popular: true
        },
        {
            months: 3,
            label: "3 MAANDEN",
            subLabel: null,
            price: 39,
            priceLabel: "€39/mnd",
            discount: "-20%",
            popular: false
        },
        {
            months: 1,
            label: "1 MAAND",
            subLabel: "Probeer eerst",
            price: 49,
            priceLabel: "€49",
            discount: null,
            popular: false
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

    const selectedPlanData = plans[selectedPlan]
    const totalPrice = selectedPlanData.price * selectedPlanData.months

    return (
        <section id="prijzen" className="pt-8 pb-16 bg-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* Reviews Badge */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 text-lg">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-[#D4A574] text-[#D4A574]" />
                            ))}
                        </div>
                        <span className="font-semibold text-gray-900">4.8/5</span>
                        <span className="text-gray-500">(847 Reviews)</span>
                    </div>
                </div>

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

                {/* Package Selector */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        Kies je behandeling
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {plans.map((plan, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 text-center ${selectedPlan === index
                                    ? 'border-[#D4A574] bg-[#D4A574]/10 shadow-lg ring-2 ring-[#D4A574]/20'
                                    : 'border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md bg-white cursor-pointer'
                                    }`}
                            >
                                {/* Show badge on selected popular plan */}
                                {plan.popular && selectedPlan === index && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A574] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-sm">
                                        MEEST GEKOZEN
                                    </div>
                                )}

                                <div className="font-bold text-gray-900 text-sm sm:text-base">
                                    {plan.label}
                                </div>
                                {plan.subLabel && (
                                    <div className="text-[10px] text-gray-500 mb-1 sm:mb-2 font-medium">
                                        {plan.subLabel}
                                    </div>
                                )}
                                <div className={`text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1 ${selectedPlan === index ? 'text-[#D4A574]' : 'text-gray-900'
                                    }`}>
                                    {plan.priceLabel}
                                </div>
                                {plan.discount && (
                                    <div className={`text-xs sm:text-sm font-semibold ${selectedPlan === index ? 'text-[#D4A574]' : 'text-gray-500'
                                        }`}>
                                        {plan.discount}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Display */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-1 sm:gap-0">
                        <span className="text-gray-600">Totaalprijs</span>
                        <span className="text-3xl font-bold text-gray-900">€{totalPrice}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-1 sm:gap-0 text-center sm:text-left">
                        <span>{selectedPlanData.months} {selectedPlanData.months === 1 ? 'maand' : 'maanden'} voorraad</span>
                        {selectedPlanData.discount && (
                            <span className="text-emerald-600 font-semibold">
                                Je bespaart €{(49 * selectedPlanData.months) - totalPrice}
                            </span>
                        )}
                    </div>
                </div>

                {/* Checkout Buttons - Responsive */}
                <div className="flex gap-3 mb-4 md:justify-center">
                    {/* Primary CTA - Full width on desktop, 60% on mobile */}
                    <Button
                        className="flex-[0_0_60%] md:flex-none md:w-full md:max-w-[600px] py-4 md:py-6 text-base md:text-xl font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span>Afrekenen · €{totalPrice}</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        </div>
                    </Button>

                    {/* Apple Pay Button - Mobile only (hidden on md+) */}
                    <button className="flex-[0_0_38%] md:hidden py-4 bg-black hover:bg-gray-900 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg"
                            alt="Apple Pay"
                            className="h-6 invert"
                        />
                    </button>
                </div>

                {/* Micro-copy - Trust */}
                <p className="text-center text-xs text-gray-500 mb-6">
                    🔒 Veilige betaling · Geen account nodig
                </p>

                {/* Trust & Payment - Compact */}
                <div className="flex flex-col items-center gap-4 mt-6">
                    {/* Payment logos - inline, subtle */}
                    <div className="flex items-center justify-center gap-5">
                        <img src="/images/payment/ideal.png" alt="iDEAL" className="h-5 opacity-60" />
                        <img src="/images/payment/klarna.png" alt="Klarna" className="h-4 opacity-60" />
                        <img src="/images/payment/apple-pay.png" alt="Apple Pay" className="h-5 opacity-60" />
                        <img src="/images/payment/google-pay.png" alt="Google Pay" className="h-4 opacity-60" />
                    </div>

                    {/* Trust Badges - Compact */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            Direct op voorraad
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Truck className="w-3.5 h-3.5" />
                            Morgen in huis
                        </span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            180 dagen garantie
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}
