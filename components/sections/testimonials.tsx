"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            name: "Thomas",
            age: 34,
            location: "Amsterdam",
            duration: "4 maanden gebruik",
            quote:
                "Ik was sceptisch na jaren van teleurstelling met andere producten. Na 8 weken zag ik de eerste baby-haartjes. Nu, 4 maanden later, is mijn kruin weer bedekt. Ongelooflijk.",
            beforeAfter: "before-after-1",
        },
        {
            name: "Mark",
            age: 29,
            location: "Rotterdam",
            duration: "3 maanden gebruik",
            quote:
                "Minoxidil gaf me hoofdpijn en een droge hoofdhuid. Dit serum voelt zoveel beter aan en werkt ook nog eens beter. Mijn haarlijn is duidelijk voller geworden.",
            beforeAfter: "before-after-2",
        },
        {
            name: "Jeroen",
            age: 41,
            location: "Utrecht",
            duration: "6 maanden gebruik",
            quote:
                "Na 6 maanden gebruik kan ik bevestigen: dit werkt echt. Mijn kapper merkte het op voordat ik er iets over zei. Dat zegt genoeg.",
            beforeAfter: "before-after-3",
        },
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    const current = testimonials[currentIndex]

    return (
        <section id="reviews" className="py-24 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Resultaten
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-display">
                    Echte mensen. Echte resultaten.
                </h2>

                {/* Before/After Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12">
                        {/* Before/After Images Placeholder */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="aspect-square bg-neutral-800 rounded-2xl flex items-center justify-center border-2 border-neutral-700">
                                <div className="text-center p-8">
                                    <p className="text-sm font-mono text-neutral-500 mb-2">
                                        BEFORE
                                    </p>
                                    <p className="text-neutral-600 text-sm">
                                        Before photo placeholder
                                    </p>
                                </div>
                            </div>
                            <div className="aspect-square bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl flex items-center justify-center border-2 border-primary-600">
                                <div className="text-center p-8">
                                    <p className="text-sm font-mono text-primary-400 mb-2">
                                        AFTER
                                    </p>
                                    <p className="text-neutral-300 text-sm">
                                        After photo placeholder
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="border-t border-neutral-800 pt-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-primary-400 fill-primary-400"
                                    />
                                ))}
                            </div>

                            <p className="text-xl text-neutral-200 leading-relaxed mb-6 italic">
                                "{current.quote}"
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-neutral-100">
                                        {current.name.toUpperCase()}, {current.age} | {current.location.toUpperCase()} | {current.duration.toUpperCase()}
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={prevTestimonial}
                                        className="rounded-full"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={nextTestimonial}
                                        className="rounded-full"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-neutral-500 text-center mt-6">
                        * Resultaten kunnen per persoon verschillen. Foto's zijn van echte
                        klanten. Niet onafhankelijk geverifieerd.
                    </p>
                </div>
            </div>
        </section>
    )
}
