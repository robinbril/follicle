"use client"

import { useEffect, useState } from 'react'
import { BarChart3 } from 'lucide-react'

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
        <section id="clinical-proof" className="py-20 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <span className="inline-block text-sm font-mono text-emerald-600 uppercase tracking-widest">
                        DE WETENSCHAP
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
                    Bewezen effectiever
                    <br />
                    <span className="text-[#D4A574]">dan Minoxidil.</span>
                </h2>

                <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                    Zonder de bijwerkingen.
                </p>

                {/* Main Study Card */}
                <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-12 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-[#D4A574]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">KLINISCHE STUDIE: RCP VS. MINOXIDIL 5%</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Fotografische evaluatie na 24 weken
                            </p>
                        </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold text-gray-900">RCP Combinatie</span>
                                <span className="text-2xl font-bold text-[#D4A574] font-mono">88.9%</span>
                            </div>
                            <div className="h-12 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gradient-to-r from-[#D4A574] to-[#C89563] rounded-full flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
                                    style={{ width: isVisible ? '88.9%' : '0%', transitionDelay: '0.2s' }}
                                >
                                    89%
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-semibold text-gray-900">Minoxidil 5%</span>
                                <span className="text-2xl font-bold text-gray-500 font-mono">60.0%</span>
                            </div>
                            <div className="h-12 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full bg-gray-400 rounded-full flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
                                    style={{ width: isVisible ? '60%' : '0%', transitionDelay: '0.4s' }}
                                >
                                    60%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Citation */}
                    <div className="text-sm text-gray-500 border-t border-gray-200 pt-6">
                        <p className="font-medium">Bron: Dermatologic Therapy, Vol. 32, Issue 6, 2019</p>
                        <p className="mt-1">Independent clinical study comparing combined RCP formula vs. standard Minoxidil 5%</p>
                    </div>
                </div>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="text-4xl font-bold text-[#D4A574] mb-2">88.9%</div>
                        <p className="text-gray-700 font-medium">Verbeterde haardichtheid</p>
                        <p className="text-sm text-gray-500 mt-1">Na 24 weken gebruik</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="text-4xl font-bold text-[#D4A574] mb-2">90+</div>
                        <p className="text-gray-700 font-medium">Dagen tot zichtbaar resultaat</p>
                        <p className="text-sm text-gray-500 mt-1">Gemiddelde gebruikersfeedback</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="text-4xl font-bold text-[#D4A574] mb-2">0%</div>
                        <p className="text-gray-700 font-medium">Gerapporteerde bijwerkingen</p>
                        <p className="text-sm text-gray-500 mt-1">In klinische trials</p>
                    </div>
                </div>
            </div>
        </section>
    )

    return (
        <section id="clinical-proof" className="py-20 sm:py-32 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <p className="inline-block text-sm font-mono text-primary-600 bg-primary-50 px-4 py-2 rounded-full border border-primary-200">
                        DE WETENSCHAP
                    </p>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4">
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
