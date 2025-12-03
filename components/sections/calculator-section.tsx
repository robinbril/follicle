"use client"

import HairGrowthCalculator from '@/components/hair-growth-calculator'
import { Button } from '@/components/ui/button'

export default function CalculatorSection() {
    const handleScrollToPricing = () => {
        const pricingSection = document.querySelector('#prijzen')
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

            // Small delay to ensure scroll completes, then trigger 6-month selection
            setTimeout(() => {
                // Dispatch custom event that Pricing component can listen to
                window.dispatchEvent(new CustomEvent('selectPlan', { detail: { planIndex: 2 } }))
            }, 800)
        }
    }

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-600 font-medium tracking-widest text-xs uppercase">
                        Jouw Persoonlijke Prognose
                    </span>
                </div>

                {/* Calculator */}
                <HairGrowthCalculator />

                {/* Enhanced CTA */}
                <div className="text-center mt-12">
                    <Button
                        onClick={handleScrollToPricing}
                        className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-[#D4A574] via-[#E8C89A] to-[#D4A574] hover:from-[#C69563] hover:via-[#D4AF37] hover:to-[#C69563] text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                        BEKIJK DE 6 MAANDEN KUUR
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">
                        De 6 maanden kuur geeft je de beste kans op dit resultaat
                    </p>
                </div>
            </div>
        </section>
    )
}
