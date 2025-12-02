"use client"

import { Button } from '@/components/ui/button'
import { Star, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative bg-white py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Question-Driven Headline (Hormozi Style) */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
                        Wil je voller haar en stralende huid?
                    </h1>

                    {/* Supporting Subheadline */}
                    <h2 className="text-2xl sm:text-3xl text-neutral-sub mb-8 max-w-3xl mx-auto leading-relaxed">
                        Leer van de formule die 88.9% groei haalt (vs 60% Minoxidil) – zonder bijwerkingen.
                    </h2>

                    {/* Primary CTA - Purple Hormozi Button */}
                    <div className="mb-8">
                        <Link
                            href="#prijzen"
                            className="inline-block bg-[rgb(var(--accent-purple))] hover:bg-[rgb(var(--accent-purple-hover))] text-white text-xl sm:text-2xl px-8 py-4 font-semibold transition-colors"
                        >
                            BEGIN NU – €39/maand
                        </Link>
                    </div>

                    {/* Trust Bullets */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-sub mb-12">
                        <span className="flex items-center gap-1">
                            ✓ 90 dagen geld-terug garantie
                        </span>
                        <span className="flex items-center gap-1">
                            ✓ Gratis verzending
                        </span>
                        <span className="flex items-center gap-1">
                            ✓ Annuleer wanneer je wilt
                        </span>
                    </div>

                    {/* Stats Row (Hormozi Authority) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-neutral-border pt-8">
                        <div>
                            <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">+24%</div>
                            <div className="text-sm text-neutral-sub mt-1">Haardichtheid in 12 weken</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">88.9%</div>
                            <div className="text-sm text-neutral-sub mt-1">Effectiviteit vs Minoxidil</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">2,847</div>
                            <div className="text-sm text-neutral-sub mt-1">Tevreden klanten</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
