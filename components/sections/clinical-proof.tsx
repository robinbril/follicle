"use client"

import { useEffect, useState } from 'react'
import { TrendingUp, ShieldCheck, ArrowRight, ExternalLink, FileText, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

export default function ClinicalProof() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        const element = document.querySelector('#hero-stat')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <section id="clinical-proof" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-600 font-medium tracking-widest text-xs uppercase">
                        DE WETENSCHAP
                    </span>
                </div>

                {/* Hero Stat - 88.9% */}
                <div id="hero-stat" className="text-center mb-12">
                    <div className="text-[120px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-[#E9C89B] mb-4">
                        {isVisible && <CountUp end={88.9} decimals={1} suffix="%" duration={2} />}
                    </div>
                    <p className="text-2xl text-gray-700 font-medium mb-2">
                        zag meetbare verbetering
                    </p>
                    <p className="text-lg text-gray-500">
                        vs 60% met alleen Minoxidil
                    </p>

                    {/* Source */}
                    <div className="mt-6">
                        <a
                            href="https://doi.org/10.4172/2471-9323.1000140"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors text-sm font-medium border-b border-transparent hover:border-emerald-600 pb-0.5"
                        >
                            <FileText className="w-3 h-3" />
                            <span>Journal of Cosmetology & Trichology, 2019</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                {/* Comparison Bars */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 border border-gray-200 shadow-sm max-w-3xl mx-auto mb-16">
                    <div className="space-y-10">
                        {/* RCP Bar */}
                        <div>
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-sm font-medium text-gray-700 tracking-wide">RCP Combinatie</span>
                                <span className="text-3xl font-bold text-[#D4A574] font-mono">88.9%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '88.9%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    className="h-full rounded-full"
                                    style={{
                                        background: 'linear-gradient(90deg, #D4A574, #E9C89B)',
                                        boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Minoxidil Bar */}
                        <div>
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-sm font-medium text-gray-500 tracking-wide">Minoxidil 5%</span>
                                <span className="text-3xl font-bold text-gray-400 font-mono">60.0%</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '60%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                    className="h-full bg-white/20 rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-8 font-medium tracking-wide">
                        *Percentage patiënten met ≥1 graad verbetering op globale fotografische schaal.
                    </p>
                </div>

                {/* Compact 2-Column Cards: Side Effects + Growth Speed */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* Side Effects Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">BIJWERKINGEN</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-700">RCP</span>
                                    <span className="text-lg font-bold text-emerald-600">&lt; 5%</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`w-4 h-4 rounded ${i < 1 ? 'bg-emerald-500' : 'bg-gray-200'}`} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">Minoxidil</span>
                                    <span className="text-lg font-bold text-gray-400">15%</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className={`w-4 h-4 rounded ${i < 3 ? 'bg-gray-400' : 'bg-gray-200'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-emerald-600 font-medium mt-6">
                            3x minder irritatie
                        </p>
                    </div>

                    {/* Growth Speed Card */}
                    <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-xl p-8 border border-[#D4A574]/20 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-[#D4A574]/10 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-[#D4A574]" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">GROEISNELHEID</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-700">GHK-Cu</span>
                                    <span className="text-lg font-bold text-[#D4A574]">6 dagen</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full w-[60%] bg-gradient-to-r from-[#D4A574] to-[#E9C89B] rounded-full" />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">Minoxidil</span>
                                    <span className="text-lg font-bold text-gray-400">9 dagen</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-gray-400 rounded-full" />
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-[#D4A574] font-medium mt-6">
                            33% sneller zichtbaar
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="#prijzen" className="group inline-flex items-center gap-2 bg-emerald-600 text-white px-10 py-4 rounded-lg font-bold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                        Start Je Behandeling
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
