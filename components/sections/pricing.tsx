"use client"

import { Button } from '@/components/ui/button'
import { Star, Package, Truck, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(2) // Pre-select 6 maanden

    const plans = [
        {
            months: 1,
            label: "1 MAAND",
            price: 49,
            priceLabel: "€49",
            discount: null,
            popular: false
        },
        {
            months: 3,
            label: "3 MAANDEN",
            price: 39,
            priceLabel: "€39/mnd",
            discount: "-20%",
            popular: false
        },
        {
            months: 6,
            label: "6 MAANDEN",
            price: 29,
            priceLabel: "€29/mnd",
            discount: "-41%",
            popular: true
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
                        <span className="text-gray-500">(2.847 Reviews)</span>
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

                {/* Kuur Lengte Selector */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                        Kuur Lengte
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        {plans.map((plan, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-center ${selectedPlan === index
                                    ? 'border-[#D4A574] bg-[#D4A574]/5 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 bg-white'
                                    }`}
                            >
                                {plan.popular && selectedPlan === index && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A574] text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                        MEEST GEKOZEN
                                    </div>
                                )}

                                <div className="font-bold text-gray-900 mb-2 text-sm">
                                    {plan.label}
                                </div>
                                <div className={`text-2xl font-bold mb-1 ${selectedPlan === index ? 'text-[#D4A574]' : 'text-gray-900'
                                    }`}>
                                    {plan.priceLabel}
                                </div>
                                {plan.discount && (
                                    <div className="text-[#D4A574] text-sm font-semibold">
                                        {plan.discount}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Display */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Totaalprijs</span>
                        <span className="text-3xl font-bold text-gray-900">€{totalPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{selectedPlanData.months} {selectedPlanData.months === 1 ? 'maand' : 'maanden'} voorraad</span>
                        {selectedPlanData.discount && (
                            <span className="text-emerald-600 font-semibold">
                                Je bespaart €{(49 * selectedPlanData.months) - totalPrice}
                            </span>
                        )}
                    </div>
                </div>

                {/* Golden Gradient CTA Button */}
                <Button
                    className="w-full py-7 text-lg font-bold bg-gradient-to-r from-[#D4A574] via-[#E8C89A] to-[#D4A574] hover:from-[#C69563] hover:via-[#D4AF37] hover:to-[#C69563] text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 mb-6"
                >
                    <Package className="w-5 h-5 mr-2" />
                    VOEG TOE AAN WINKELWAGEN
                </Button>

                {/* Trust & Payment Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    {/* Left: Trust Badges */}
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="font-medium">Op voorraad</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Truck className="w-4 h-4 text-gray-600" />
                            <span>Voor 23:59 besteld = morgen in huis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-gray-600" />
                            <span>180 dagen garantie</span>
                        </div>
                    </div>

                    {/* Right: Payment Methods */}
                    <div className="flex flex-col justify-center">
                        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
                            Veilig betalen met
                        </p>
                        <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <img src="/images/payment/ideal.png" alt="iDEAL" className="h-5 object-contain" />
                            <img src="/images/payment/klarna.png" alt="Klarna" className="h-4 object-contain" />
                            <img src="/images/payment/apple-pay.png" alt="Apple Pay" className="h-6 object-contain" />
                            <img src="/images/payment/google-pay.png" alt="Google Pay" className="h-4 object-contain" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
