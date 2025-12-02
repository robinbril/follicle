"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function ClinicalProof() {
    const stats = [
        {
            value: "64.7%",
            label: "onderzoeker-score RCP",
            subtext: "vs 25.5% minoxidil",
        },
        {
            value: "+9%",
            label: "nieuwe haren in 90 dagen",
            subtext: "Redensyl klinische test",
        },
        {
            value: "-17%",
            label: "haaruitval reductie",
            subtext: "Redensyl klinische test",
        },
    ]

    return (
        <section id="wetenschap" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-sub uppercase tracking-wider">
                        De Wetenschap
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-black">
                    Bewezen effectiever dan Minoxidil.
                    <br />
                    <span className="text-[rgb(var(--accent-purple))]">Zonder de bijwerkingen.</span>
                </h2>

                {/* Featured Study Card */}
                <div className="border border-neutral-border rounded p-8 md:p-12 mb-12 bg-gray-50">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-mono text-[rgb(var(--accent-purple))]">
                                📊 KLINISCHE STUDIE
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-black">
                            RCP Combinatie vs. Minoxidil 5%
                        </h3>

                        {/* Bar Chart */}
                        <div className="space-y-6 mb-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-black font-medium">
                                        RCP Combinatie
                                    </span>
                                    <span className="text-[rgb(var(--accent-purple))] font-mono font-bold">
                                        88.9%
                                    </span>
                                </div>
                                <div className="h-4 bg-neutral-border overflow-hidden">
                                    <div
                                        className="h-full bg-[rgb(var(--accent-purple))]"
                                        style={{ width: '88.9%' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-black font-medium">
                                        Minoxidil 5%
                                    </span>
                                    <span className="text-neutral-sub font-mono">60.0%</span>
                                </div>
                                <div className="h-4 bg-neutral-border overflow-hidden">
                                    <div
                                        className="h-full bg-gray-400"
                                        style={{ width: '60%' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-neutral-sub mb-4">
                            Fotografische evaluatie na 24 weken
                        </p>

                        <div className="border-t border-neutral-border pt-4">
                            <p className="text-xs text-neutral-sub mb-3">
                                Bron: Karaca N, Akpolat ND (2019). J Cosmo Trichol.
                                <br />
                                106 mannelijke deelnemers, 24 weken, gerandomiseerd.
                            </p>
                            <Link
                                href="https://www.longdom.org/open-access/comparison-of-the-efficacy-of-topical-redensylcapixylprocapil-complex-and-topical-minoxidil-5-for-the-treatment-of-androgenetic-a-46938.html"
                                target="_blank"
                                className="inline-flex items-center text-[rgb(var(--accent-purple))] hover:text-[rgb(var(--accent-purple-hover))] underline text-sm font-semibold"
                            >
                                BEKIJK DE VOLLEDIGE STUDIE
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Three Stat Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="border border-neutral-border bg-gray-50 p-8 text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-[rgb(var(--accent-purple))] font-mono mb-3">
                                {stat.value}
                            </div>
                            <div className="text-lg text-black mb-2">{stat.label}</div>
                            <div className="text-sm text-neutral-sub">{stat.subtext}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
