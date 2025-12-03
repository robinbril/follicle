"use client"

import { Button } from '@/components/ui/button'
import { Star, Shield, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Proof Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                            <Star className="w-4 h-4 text-green-600 fill-green-600" />
                            <span className="text-sm font-semibold text-green-900">
                                2.847 MANNEN MET VOLLER HAAR
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight hero-headline">
                            Stop Je
                            <br />
                            Haaruitval
                            <br />
                            <span className="text-primary-600">Binnen 90 Dagen</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl sm:text-2xl text-neutral-700 font-medium">
                            Elke dag wachten = 100 follikels voor altijd weg.
                            <br />
                            Start nu of betaal later €10.000 voor transplants.
                        </p>

                        {/* Value bullets */}
                        <div className="space-y-3 text-lg">
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 font-bold text-2xl">✓</span>
                                <span className="text-neutral-800"><strong>88.9% meer haargroei</strong> dan Minoxidil (klinisch bewezen)</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 font-bold text-2xl">✓</span>
                                <span className="text-neutral-800"><strong>0% bijwerkingen</strong> – géén libidoproblemen of hoofdpijn</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-600 font-bold text-2xl">✓</span>
                                <span className="text-neutral-800"><strong>Bewezen in dubbelblinde studie</strong> met 106 mannen</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="space-y-4 pt-4">
                            <Button
                                onClick={scrollToPricing}
                                size="lg"
                                className="w-full sm:w-auto text-lg px-12 py-6 h-auto bg-primary-600 hover:bg-primary-700 cursor-pointer"
                            >
                                START NU – €39/maand (90 dagen garantie) →
                            </Button>

                            {/* Payment Methods */}
                            <div className="flex flex-col gap-2">
                                <p className="text-xs text-neutral-500 font-medium">Betaal met:</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md">
                                        <span className="text-xs font-bold text-pink-600">iDEAL</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-black rounded-md">
                                        <span className="text-xs font-semibold text-white"> Pay</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md">
                                        <span className="text-xs font-semibold">G Pay</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-pink-100 border border-pink-200 rounded-md">
                                        <span className="text-xs font-bold text-pink-600">Klarna</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-blue-600 rounded-md">
                                        <span className="text-xs font-bold text-white">PayPal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Micro-copy */}
                            <p className="text-sm text-neutral-500">
                                ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 pt-6 border-t border-neutral-200">
                            <div className="flex items-center gap-2 text-neutral-600">
                                <TrendingUp className="w-5 h-5 text-primary-600" />
                                <span className="text-sm font-medium">Klinisch Getest</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-600">
                                <Shield className="w-5 h-5 text-primary-600" />
                                <span className="text-sm font-medium">EU Gecertificeerd</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-600">
                                <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
                                <span className="text-sm font-medium">4.8/5 (2.847 reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Product Stickers */}
                            <div className="absolute -top-4 -left-4 bg-primary-600 text-white px-4 py-2 rounded-full font-black text-sm shadow-lg z-10 rotate-[-12deg]">
                                ⭐ 2.847× VERKOCHT
                            </div>
                            <div className="absolute top-12 -right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10 rotate-[8deg]">
                                88.9% ZAG RESULTAAT
                            </div>
                            <div className="absolute bottom-8 -left-4 bg-neutral-900 text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-lg z-10">
                                90 DAGEN GARANTIE
                            </div>

                            <Image
                                src="/images/product-hero.png"
                                alt="FOLLICLE Hair Growth Serum - 18% actieve ingrediënten voor bewezen haargroei"
                                width={500}
                                height={600}
                                className="w-full h-auto drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
