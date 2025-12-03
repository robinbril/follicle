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
        <section className="py-10 sm:py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Hoe Het Werkt
                    </h2>
                    <p className="text-lg text-gray-500 font-medium">
                        Simpel. Effectief. Wetenschappelijk.
                    </p>
                </div>

                {/* 3 Step Cards - Dark Luxury & Compact */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-12">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={index} className="relative group overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A574]/10">
                                {/* Subtle Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="p-6 sm:p-8 relative z-10 flex flex-col items-center text-center h-full">
                                    {/* Step Number - Watermark style */}
                                    <div className="absolute top-2 right-4 text-5xl font-black text-white/5 group-hover:text-[#D4A574]/10 transition-colors duration-300 select-none">
                                        0{index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-12 h-12 mb-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D4A574] group-hover:text-black transition-all duration-300">
                                        <Icon className="w-6 h-6 text-[#D4A574] group-hover:text-black transition-colors duration-300" strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer Line - The "Green Pill" */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-full text-emerald-800 text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </div>
                        Droogt in 60 seconden · Geen vettig haar
                    </div>
                </div>
            </div>
        </section>
    )
}
