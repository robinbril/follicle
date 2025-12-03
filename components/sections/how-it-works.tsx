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
        <section className="py-24 bg-[#091412]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        Hoe Het Werkt
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
                    Simpel. <span className="text-[#D4A574]">Effectief.</span> Dagelijks.
                </h2>

                <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
                    Één keer per dag, 's avonds na het douchen. Geen gedoe.
                </p>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4A574]/30 to-transparent" />

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} className="relative">
                                    {/* Step Number Badge */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative z-10 w-16 h-16 rounded-full bg-[#D4A574] flex items-center justify-center shadow-lg shadow-[#D4A574]/20">
                                            <span className="text-2xl font-bold text-gray-900">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 hover:border-[#D4A574]/30 transition-all group">
                                        <div className="inline-flex p-4 rounded-xl bg-white/5 mb-4 group-hover:bg-[#D4A574]/10 transition-colors">
                                            <Icon className="w-8 h-8 text-white group-hover:text-[#D4A574] transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg text-[#D4A574] font-mono mb-2">
                                            {step.description}
                                        </p>
                                        <p className="text-sm text-gray-400">{step.detail}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Body Copy */}
                <div className="text-center mt-16 max-w-2xl mx-auto">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Geen plakkerig gevoel. Geen geur.
                        <br />
                        <span className="text-gray-400">
                            Gewoon een paar minuten voor je naar bed gaat.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

