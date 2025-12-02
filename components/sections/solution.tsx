"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Solution() {
    const ingredients = [
        {
            name: "REDENSYL",
            percentage: "3%",
            description: "Stem cell activator",
        },
        {
            name: "CAPIXYL",
            percentage: "5%",
            description: "DHT blocker",
        },
        {
            name: "PROCAPIL",
            percentage: "3%",
            description: "Follicle anchoring",
        },
        {
            name: "ANAGAIN",
            percentage: "3%",
            description: "Growth signals",
        },
        {
            name: "BAICAPIL",
            percentage: "4%",
            description: "Anagen extender",
        },
    ]

    return (
        <section id="ingredienten" className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        De Oplossing
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 font-display">
                    5 gepatenteerde technologieën.
                    <br />
                    <span className="text-gradient-primary">1 krachtige formule.</span>
                </h2>

                {/* Product Hero */}
                <div className="flex justify-center mb-16">
                    <div className="relative w-64 h-80 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-2xl glow-primary flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">💧</div>
                            <p className="text-neutral-100 font-display font-bold text-xl">
                                FOLLICLE
                            </p>
                            <p className="text-neutral-300 text-sm mt-2">18% Active Formula</p>
                        </div>
                    </div>
                </div>

                {/* Ingredient Pills - Horizontal Scroll */}
                <div className="mb-12">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                        {ingredients.map((ingredient, index) => (
                            <div
                                key={index}
                                className="glass rounded-2xl p-6 min-w-[240px] snap-start hover:bg-white/10 transition-all group"
                            >
                                <div className="flex items-baseline gap-2 mb-2">
                                    <h3 className="text-lg font-bold text-primary-400">
                                        {ingredient.name}
                                    </h3>
                                    <span className="text-2xl font-mono font-bold text-neutral-200">
                                        {ingredient.percentage}
                                    </span>
                                </div>
                                <p className="text-sm text-neutral-400">{ingredient.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button asChild variant="outline" size="lg">
                        <Link href="/wetenschap">
                            BEKIJK ALLE INGREDIËNTEN →
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
