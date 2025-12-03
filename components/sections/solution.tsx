"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Dna, Shield, Anchor, TrendingUp, Clock, CheckCircle2, FlaskConical, Heart } from 'lucide-react'

export default function Solution() {
    const ingredients = [
        {
            name: "REDENSYL",
            percentage: "3%",
            description: "Activeert slapende haarcellen",
            icon: Dna,
        },
        {
            name: "CAPIXYL",
            percentage: "5%",
            description: "Blokkeert DHT — de #1 oorzaak",
            icon: Shield,
        },
        {
            name: "PROCAPIL",
            percentage: "3%",
            description: "Verankert haar in hoofdhuid",
            icon: Anchor,
        },
        {
            name: "ANAGAIN",
            percentage: "3%",
            description: "Stimuleert nieuwe groei",
            icon: TrendingUp,
        },
        {
            name: "BAICAPIL",
            percentage: "4%",
            description: "Verlengt de groeifase",
            icon: Clock,
        },
    ]

    return (
        <section id="ingredienten" className="relative py-32 overflow-hidden" style={{
            background: 'radial-gradient(ellipse 800px 600px at center, #0D1612 0%, #050A08 100%)'
        }}>
            {/* Grain Texture */}
            <div className="absolute inset-0 opacity-[0.025]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }} />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4A574]/8 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        DE OPLOSSING
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-20 leading-tight">
                    <span className="text-[#F5F5F0]">5 gepatenteerde technologieën.</span>
                    <br />
                    <span className="text-[#D4A574]">1 krachtige formule.</span>
                </h2>

                {/* Product Hero */}
                <div className="relative flex justify-center mb-24">
                    <div className="relative">
                        {/* Amber Glow */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#D4A574]/30 via-[#D4A574]/10 to-transparent rounded-full blur-3xl scale-150" />

                        {/* Product */}
                        <div className="relative w-80 h-[480px]">
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="Revive Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-[0_20px_60px_rgba(212,165,116,0.3)]"
                                priority
                            />
                        </div>

                        {/* Reflection */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm rounded-full" />
                    </div>
                </div>

                {/* Ingredient Cards with Arc Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-20">
                    {ingredients.map((ingredient, index) => {
                        const Icon = ingredient.icon
                        const isMiddle = index === 2
                        return (
                            <div
                                key={index}
                                className={`group relative bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] hover:border-[#D4A574]/40 hover:-translate-y-3 transition-all duration-500 cursor-pointer ${isMiddle ? 'md:-translate-y-4' : ''}`}
                                style={{
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3), 0 20px 25px -5px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.05)'
                                }}
                            >
                                {/* Inner Glow */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* Icon */}
                                <div className="w-14 h-14 mb-5 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#D4A574]/50 group-hover:bg-[#D4A574]/10 group-hover:shadow-[0_0_20px_rgba(212,165,116,0.2)] transition-all duration-500">
                                    <Icon className="w-7 h-7 text-white/80 group-hover:text-[#D4A574] transition-colors duration-500" strokeWidth={1.5} />
                                </div>

                                {/* Name */}
                                <h3 className="text-sm font-bold text-white/90 mb-2 tracking-wide">
                                    {ingredient.name}
                                </h3>

                                {/* Percentage */}
                                <p className="text-3xl font-bold mb-4 relative" style={{
                                    background: 'linear-gradient(135deg, #D4A574 0%, #F5D6A8 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 0 30px rgba(212,165,116,0.3)'
                                }}>
                                    {ingredient.percentage}
                                </p>

                                {/* Description */}
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {ingredient.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-base">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                        <span className="text-gray-300">Klinisch getest</span>
                    </div>
                    <div className="w-px h-4 bg-white/20 hidden sm:block" />
                    <div className="flex items-center gap-3">
                        <FlaskConical className="w-5 h-5 text-white" />
                        <span className="text-gray-300">18% actieve ingrediënten</span>
                    </div>
                    <div className="w-px h-4 bg-white/20 hidden sm:block" />
                    <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-white" />
                        <span className="text-gray-300">Zonder bijwerkingen</span>
                    </div>
                </div>

                {/* Dual CTAs - SWAPPED */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" className="bg-[#D4A574] hover:bg-[#C89563] text-gray-900 font-bold px-10 py-7 text-base shadow-[0_8px_30px_rgba(212,165,116,0.25)] hover:shadow-[0_12px_40px_rgba(212,165,116,0.35)] transition-all duration-300">
                        <Link href="#prijzen">
                            START JE BEHANDELING →
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-semibold px-10 py-7 text-base backdrop-blur-sm transition-all duration-300">
                        <Link href="#wetenschap">
                            Bekijk de wetenschap
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
