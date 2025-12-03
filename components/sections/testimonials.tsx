"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        name: "Thomas V.",
        location: "Amsterdam",
        duration: "4 maanden gebruik",
        quote: "Ik was sceptisch na jaren van teleurstelling met andere producten. Na 8 weken zag ik de eerste baby-haartjes. Nu, 4 maanden later, is mijn kruin weer bedekt. Ongelooflijk.",
        before: "/images/before-after.png",
        after: "/images/before-after.png"
    },
    {
        name: "Mark R.",
        location: "Rotterdam",
        duration: "3 maanden gebruik",
        quote: "Eindelijk iets dat WERKT. Geen bijwerkingen zoals bij Minoxidil. Na 12 weken zichtbaar dikker haar. Mijn kapper vroeg zelfs wat ik gebruik!",
        before: "/images/testimonial-1.png",
        after: "/images/testimonial-1.png"
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showAfter, setShowAfter] = useState(false)

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setShowAfter(false)
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setShowAfter(false)
    }

    const current = testimonials[currentIndex]

    return (
        <section className="py-20 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <span className="inline-block text-sm font-mono text-primary-600 bg-primary-50 px-4 py-2 rounded-full border border-primary-200">
                        RESULTATEN
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-4">
                    Echte mensen.
                    <br />
                    Echte resultaten.
                </h2>

                <p className="text-xl text-center text-neutral-600 mb-16 max-w-3xl mx-auto">
                    Geen PhotoShop. Geen trucjes. Alleen dagelijks gebruik.
                </p>

                {/* Before/After Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-8 sm:p-12 border border-neutral-200">
                        {/* Images */}
                        <div className="relative mb-8">
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div
                                    className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${!showAfter ? 'ring-4 ring-primary-500' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setShowAfter(false)}
                                >
                                    <Image
                                        src={current.before}
                                        alt="Before"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-neutral-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        VOOR
                                    </div>
                                </div>

                                <div
                                    className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all ${showAfter ? 'ring-4 ring-primary-500' : 'opacity-60 hover:opacity-100'}`}
                                    onClick={() => setShowAfter(true)}
                                >
                                    <Image
                                        src={current.after}
                                        alt="After"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        NA {current.duration.split(' ')[0].toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            {/* Toggle hint */}
                            <p className="text-center text-sm text-neutral-500 mb-6">
                                ← Klik op de foto's om te vergelijken →
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="text-center space-y-4">
                            <div className="text-2xl font-bold">
                                {current.name}
                            </div>
                            <div className="text-neutral-600">
                                {current.location} • {current.duration}
                            </div>
                            <blockquote className="text-lg text-neutral-700 italic max-w-2xl mx-auto">
                                "{current.quote}"
                            </blockquote>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
                                aria-label="Vorige"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-primary-600' : 'bg-neutral-300'
                                            }`}
                                        aria-label={`Ga naar testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
                                aria-label="Volgende"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-center text-neutral-500 mt-6">
                        * Resultaten kunnen per persoon verschillen. Foto's zijn van echte klanten met hun toestemming.
                        Niet onafhankelijk geverifieerd.
                    </p>
                </div>
            </div>
        </section>
    )
}
