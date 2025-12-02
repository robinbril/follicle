"use client"

import { Button } from '@/components/ui/button'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    const plans = [
        {
            name: "PROBEER",
            price: "€59",
            period: "",
            description: "1x Serum",
            size: "30ml",
            savings: null,
            features: [
                "Eenmalige aankoop",
                "Gratis verzending",
                "90 dagen garantie",
            ],
            popular: false,
        },
        {
            name: "ABONNEMENT",
            price: "€39",
            period: "/maand",
            description: "Maandelijks",
            size: "30ml",
            savings: "Bespaar 34%",
            features: [
                "Gratis verzending",
                "Annuleer wanneer je wilt",
                "90 dagen garantie",
                "Nooit meer op",
            ],
            popular: true,
        },
        {
            name: "VOORRAAD",
            price: "€129",
            period: "",
            description: "3x Serum",
            size: "90ml totaal",
            savings: "Bespaar 27%",
            features: [
                "Eenmalige aankoop",
                "Gratis verzending",
                "90 dagen garantie",
                "Ideaal om te delen",
            ],
            popular: false,
        },
    ]

    return (
        <section id="prijzen" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-sub uppercase tracking-wider">
                        Kies Je Plan
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-black">
                    Begin vandaag. Resultaat in weken.
                </h2>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative border border-neutral-border bg-white p-8 ${plan.popular ? 'border-2 border-[rgb(var(--accent-purple))]' : ''
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="bg-[rgb(var(--accent-purple))] text-white px-4 py-1.5 text-sm font-bold flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-white" />
                                        POPULAIR
                                    </div>
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold mb-4 text-center text-black">
                                {plan.name}
                            </h3>

                            {/* Description */}
                            <div className="text-center mb-2">
                                <p className="text-neutral-sub">{plan.description}</p>
                                <p className="text-sm text-neutral-sub">{plan.size}</p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-4">
                                <span className="text-4xl font-bold text-black">
                                    {plan.price}
                                </span>
                                <span className="text-neutral-sub">{plan.period}</span>
                            </div>

                            {/* Savings */}
                            {plan.savings && (
                                <div className="text-center mb-6">
                                    <span className="text-[rgb(var(--accent-purple))] font-medium text-sm">
                                        {plan.savings}
                                    </span>
                                </div>
                            )}

                            {/* CTA Button */}
                            <Link
                                href="/product/haar-serum-18"
                                className={`block w-full mb-6 text-center py-3 font-semibold transition-colors ${plan.popular
                                    ? 'bg-[rgb(var(--accent-purple))] hover:bg-[rgb(var(--accent-purple-hover))] text-white'
                                    : 'bg-black hover:bg-gray-800 text-white'
                                    }`}
                            >
                                {plan.popular ? 'START NU' : 'BESTEL NU'}
                            </Link>

                            {/* Features */}
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className="w-5 h-5 text-[rgb(var(--accent-purple))] shrink-0 mt-0.5" />
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Trust Elements */}
                <div className="border border-neutral-border bg-white p-6 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="text-2xl">🔒</span>
                            <span className="text-sm text-black">
                                Veilig betalen met iDEAL, creditcard of PayPal
                            </span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="text-2xl">📦</span>
                            <span className="text-sm text-black">
                                Discrete verpakking - niemand ziet wat erin zit
                            </span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="text-2xl">↩️</span>
                            <span className="text-sm text-black">
                                Niet tevreden? 90 dagen geld-terug-garantie
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
