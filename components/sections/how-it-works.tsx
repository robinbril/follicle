"use client"

import { Droplet, Hand, Moon } from 'lucide-react'

export default function HowItWorks() {
    const steps = [
        {
            number: 1,
            icon: Droplet,
            title: "DRUPPEL",
            description: "6-8 druppels",
            detail: "Direct op hoofdhuid aanbrengen",
        },
        {
            number: 2,
            icon: Hand,
            title: "MASSEER",
            description: "2 min massage",
            detail: "Stimuleert bloedcirculatie",
        },
        {
            number: 3,
            icon: Moon,
            title: "SLAAP",
            description: "Niet uitspoelen",
            detail: "Laat het overnacht werken",
        },
    ]

    return (
        <section className="py-24 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Hoe Het Werkt
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-display">
                    Simpel. Effectief. Dagelijks.
                </h2>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600" />

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} className="relative">
                                    {/* Step Number Badge */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg glow-primary">
                                            <span className="text-2xl font-bold text-neutral-950">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="glass rounded-2xl p-8 text-center hover:bg-white/5 transition-all">
                                        <div className="inline-flex p-4 rounded-xl bg-primary-500/10 mb-4">
                                            <Icon className="w-8 h-8 text-primary-400" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 font-display">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-primary-400 font-mono mb-2">
                                            {step.description}
                                        </p>
                                        <p className="text-sm text-neutral-400">{step.detail}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Body Copy */}
                <div className="text-center mt-16 max-w-2xl mx-auto">
                    <p className="text-lg text-neutral-300 leading-relaxed">
                        Eén keer per dag, 's avonds na het douchen.
                        <br />
                        <span className="text-neutral-400">
                            Geen plakkerig gevoel. Geen geur. Geen gedoe.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
