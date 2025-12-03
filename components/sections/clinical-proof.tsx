"use client"

import { useEffect, useState } from 'react'

export default function ClinicalProof() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        const section = document.getElementById('clinical-proof')
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="clinical-proof" className="py-20 sm:py-32 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <span className="inline-block text-sm font-mono text-primary-600 bg-primary-50 px-4 py-2 rounded-full border border-primary-200">
                        DE WETENSCHAP
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-4">
                    Bewezen effectiever
                    <br />
                    dan Minoxidil.
                </h2>

                <p className="text-xl text-center text-neutral-600 mb-16 max-w-3xl mx-auto">
                    Zonder de bijwerkingen.
                </p>

                {/* Main Study Card */}
                <div className="glass rounded-3xl p-8 sm:p-12 mb-12 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="text-3xl">📊</div>
                        <div>
                            <h3 className="text-2xl font-bold">KLINISCHE STUDIE: RCP VS. MINOXIDIL 5%</h3>
                            <p className="text-sm text-neutral-600 mt-1">
                                Fotografische evaluatie na 24 weken
                            </p>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold">RCP Combinatie</span>
                                <span className="text-2xl font-black text-primary-600 font-mono">88.9%</span>
                            </div>
                            <div className="h-12 bg-neutral-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-end pr-4 text-white font-bold ${isVisible ? 'chart-bar' : 'w-0'}`}
                                    style={{ width: isVisible ? '88.9%' : '0%', transitionDelay: '0.2s' }}
                                >
                                    89%
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold">Minoxidil 5%</span>
                                <span className="text-2xl font-black text-neutral-600 font-mono">60.0%</span>
                            </div>
                            <div className="h-12 bg-neutral-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full flex items-center justify-end pr-4 text-white font-bold ${isVisible ? 'chart-bar' : 'w-0'}`}
                                    style={{ width: isVisible ? '60%' : '0%', transitionDelay: '0.4s' }}
                                >
                                    60%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Source */}
                    <div className="border-t border-neutral-200 pt-6">
                        <p className="text-sm text-neutral-600 mb-2">
                            <strong>Bron:</strong> Karaca N, Akpolat ND (2019). J Cosmo Trichol.
                        </p>
                        <p className="text-sm text-neutral-600 mb-4">
                            106 mannelijke deelnemers, 24 weken, gerandomiseerd onderzoek.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 link-underline"
                        >
                            BEKIJK DE VOLLEDIGE STUDIE →
                        </a>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-2xl p-6 text-center card-lift border border-neutral-200">
                        <div className="text-5xl font-black text-primary-600 font-mono mb-2">64.7%</div>
                        <div className="text-sm font-semibold text-neutral-900 mb-1">
                            Onderzoekerscore RCP
                        </div>
                        <div className="text-xs text-neutral-600">
                            vs 25.5% minoxidil
                        </div>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center card-lift border border-neutral-200">
                        <div className="text-5xl font-black text-primary-600 font-mono mb-2">+9%</div>
                        <div className="text-sm font-semibold text-neutral-900 mb-1">
                            Nieuwe haren
                        </div>
                        <div className="text-xs text-neutral-600">
                            Redensyl klinische test in 90 dagen
                        </div>
                    </div>

                    <div className="glass rounded-2xl p-6 text-center card-lift border border-neutral-200">
                        <div className="text-5xl font-black text-primary-600 font-mono mb-2">-17%</div>
                        <div className="text-sm font-semibold text-neutral-900 mb-1">
                            Haaruitval reductie
                        </div>
                        <div className="text-xs text-neutral-600">
                            Redensyl klinische test
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
