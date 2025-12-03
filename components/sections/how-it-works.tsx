"use client"

import { Droplet, Hand, Moon } from 'lucide-react'

export default function HowItWorks() {
    const steps = [
        {
            icon: Droplet,
            title: "DRUPPEL",
            description: "6-8 druppels op hoofdhuid",
        },
        {
            icon: Hand,
            title: "MASSEER",
            description: "2 minuten circulatie",
        },
        {
            icon: Moon,
            title: "SLAAP",
            description: "Laat intrekken overnacht",
        },
    ]

    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
                    Hoe Het Werkt
                </h2>

                <p className="text-center text-gray-600 text-lg mb-16">
                    Één keer per dag, 's avonds. Klaar.
                </p>

                {/* 3 Step Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-amber-200 hover:shadow-md transition-all duration-300">
                                <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-full flex items-center justify-center shadow-sm border border-amber-100">
                                    <Icon className="w-7 h-7 text-[#D4A574]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Footer Line */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        Geen plakkerig gevoel · Geen geur · Droogt in 60 seconden
                    </p>
                </div>
            </div>
        </section>
    )
}
