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
                        className="flex-[0_0_60%] md:flex-none md:w-full md:max-w-[600px] py-5 md:py-6 text-lg md:text-xl font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <span>Afrekenen · €{totalPrice}</span>
                            <ArrowRight className="w-5 h-5 flex-shrink-0" />
                        </div>
                    </Button>

                    {/* Apple Pay Button - Mobile only (hidden on md+) */}
                    <button className="flex-[0_0_35%] md:hidden py-5 bg-black hover:bg-gray-900 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg">
                        <svg viewBox="0 0 165 40" className="h-6" fill="white">
                            <path d="M150.734 0H14.266C6.398 0 0 6.398 0 14.266v11.468C0 33.602 6.398 40 14.266 40h136.468C158.602 40 165 33.602 165 25.734V14.266C165 6.398 158.602 0 150.734 0zm0 1.5c7.035 0 12.766 5.731 12.766 12.766v11.468c0 7.035-5.731 12.766-12.766 12.766H14.266C7.231 38.5 1.5 32.769 1.5 25.734V14.266C1.5 7.231 7.231 1.5 14.266 1.5h136.468z" />
                            <path d="M43.508 13.775c1.313-1.648 2.196-3.925 1.955-6.201-1.889.077-4.194 1.266-5.551 2.848-1.203 1.394-2.274 3.67-1.989 5.837 2.11.163 4.272-1.067 5.585-2.484zm1.928 2.596c-3.089-.183-5.716 1.755-7.184 1.755-1.49 0-3.754-1.666-6.197-1.621-3.198.044-6.153 1.864-7.797 4.724-3.352 5.799-.87 14.39 2.373 19.114 1.6 2.318 3.484 4.899 5.973 4.81 2.377-.088 3.288-1.535 6.175-1.535 2.865 0 3.711 1.535 6.22 1.49 2.576-.044 4.196-2.34 5.773-4.68 1.818-2.661 2.554-5.236 2.598-5.369-.067-.022-4.978-1.909-5.022-7.577-.044-4.724 3.866-6.985 4.043-7.117-2.202-3.264-5.639-3.627-6.866-3.715l-.089-.079zm27.103-5.504v28.933h4.482v-9.899h6.197c5.662 0 9.638-3.89 9.638-9.539 0-5.65-3.91-9.495-9.506-9.495h-10.811zm4.482 3.746h5.156c3.889 0 6.11 2.078 6.11 5.727 0 3.648-2.221 5.749-6.132 5.749h-5.134V14.613zm24.454 25.429c2.818 0 5.441-1.426 6.623-3.682h.088v3.44h4.152V24.209c0-4.174-3.353-6.866-8.511-6.866-4.81 0-8.358 2.736-8.49 6.492h4.02c.33-1.777 1.995-2.95 4.372-2.95 2.818 0 4.416 1.315 4.416 3.748v1.645l-5.793.352c-5.375.33-8.291 2.516-8.291 6.339 0 3.868 3.024 6.449 7.414 6.449v.044zm1.18-3.44c-2.467 0-4.043-1.183-4.043-2.994 0-1.888 1.51-2.983 4.416-3.159l5.156-.33v1.688c0 2.818-2.4 4.795-5.529 4.795zm16.337 11.314c4.372 0 6.438-1.666 8.225-6.734l7.897-22.22h-4.592l-5.287 17.183h-.088l-5.287-17.183h-4.724l7.612 21.076-.418 1.293c-.704 2.253-1.843 3.12-3.89 3.12-.352 0-1.05-.044-1.336-.088v3.44c.264.066 1.38.11 1.888.11v.003z" />
                        </svg>
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
