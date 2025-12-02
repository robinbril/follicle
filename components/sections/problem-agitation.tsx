"use client"

import { HeartCrack, RotateCcw, AlertTriangle } from 'lucide-react'

export default function ProblemAgitation() {
    const problems = [
        {
            icon: HeartCrack,
            title: "Libido-problemen",
            description: "Gemeld door 2-4% van de gebruikers.",
        },
        {
            icon: RotateCcw,
            title: "Levenslang afhankelijk",
            description: "Stop je ermee? Je verliest alles weer.",
        },
        {
            icon: AlertTriangle,
            title: "Hoofdpijn, duizeligheid",
            description: "Veel gebruikers ervaren ongewenste effecten.",
        },
    ]

    return (
        <section className="py-24 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Het Probleem
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-display">
                    Minoxidil werkt. Maar tegen welke prijs?
                </h2>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon
                        return (
                            <div
                                key={index}
                                className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-error/10 group-hover:bg-error/20 transition-colors">
                                    <Icon className="w-8 h-8 text-error" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Transition Copy */}
                <div className="text-center">
                    <p className="text-2xl text-neutral-300 font-display italic">
                        Wij dachten: dat kan anders.
                    </p>
                </div>
            </div>
        </section>
    )
}
