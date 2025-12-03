"use client"

import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fff9] to-white mt-28">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT - Rust & Kracht */}
                <div className="space-y-12">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-[#0f172a]">
                        Stop Je
                        <br />
                        <span className="text-[#059669]">Haaruitval</span>
                        <br />
                        Binnen 90 Dagen
                    </h1>

                    <p className="text-xl md:text-2xl text-[#475569] leading-relaxed">
                        Elke dag wachten = 100 follikels voor altijd weg.
                        <br />
                        Start nu of betaal later €10.000 voor transplants.
                    </p>

                    {/* Alleen 3 USPs */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            88.9% meer haargroei dan Minoxidil
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            0% bijwerkingen — géén libidoproblemen
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            90 dagen geld-terug-garantie
                        </motion.p>
                    </div>

                    {/* Grote emerald CTA */}
                    <button
                        onClick={scrollToPricing}
                        className="group bg-[#059669] hover:bg-[#047857] text-white font-black text-xl md:text-2xl px-16 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
                    >
                        START NU — €39/maand
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                    </button>

                    {/* Tighter spacing for guarantee text */}
                    <p className="text-sm text-[#475569] mt-6 mb-2 font-medium">
                        ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                    </p>

                    {/* Payment logos - Real SVGs, narrow & clean */}
                    <div className="flex items-center gap-3 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* iDEAL */}
                        <div className="h-8 w-12 relative flex items-center justify-center">
                            <svg viewBox="0 0 48 40" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H48V40H0V0Z" fill="white" />
                                <path d="M22.5 29.5C22.5 29.5 20.5 31.5 16.5 31.5C12.5 31.5 10.5 28.5 10.5 24.5C10.5 20.5 12.5 17.5 16.5 17.5C20.5 17.5 22.5 19.5 22.5 19.5" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M22.5 14V35" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M29.5 14V35" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M36.5 14V35" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M36.5 14H42.5" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M36.5 24.5H42.5" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M36.5 35H42.5" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                                <path d="M4 14C4 14 6 12 10 12C14 12 16 14 16 14" stroke="#CC0066" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </div>
                        {/* Apple Pay */}
                        <div className="h-6 w-10 relative flex items-center justify-center">
                            <svg viewBox="0 0 38 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 10.5C5.5 10.5 6.5 10.5 7 11.5C7.5 12.5 7 13.5 6.5 14C6 14.5 5 14.5 5 14.5C5 14.5 4 14.5 3.5 13.5C3 12.5 3.5 11.5 4 11C4.5 10.5 5.5 10.5 5.5 10.5Z" fill="black" />
                                <path d="M16.5 10.5H19V17.5H16.5V10.5Z" fill="black" />
                                <path d="M21.5 10.5H24V17.5H21.5V10.5Z" fill="black" />
                                <path d="M26.5 10.5H29V17.5H26.5V10.5Z" fill="black" />
                                <path d="M31.5 10.5H34V17.5H31.5V10.5Z" fill="black" />
                                <rect x="1" y="4" width="36" height="16" rx="2" stroke="black" strokeWidth="2" />
                            </svg>
                        </div>
                        {/* Google Pay */}
                        <div className="h-6 w-10 relative flex items-center justify-center">
                            <svg viewBox="0 0 40 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 12H12.5M10.5 10V14" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16.5 10H19.5V14H16.5V10Z" fill="#4285F4" />
                                <path d="M22.5 10H25.5V14H22.5V10Z" fill="#EA4335" />
                                <path d="M28.5 10H31.5V14H28.5V10Z" fill="#FBBC05" />
                                <rect x="1" y="4" width="38" height="16" rx="2" stroke="#5F6368" strokeWidth="2" />
                            </svg>
                        </div>
                        {/* Klarna */}
                        <div className="h-6 w-10 relative flex items-center justify-center">
                            <svg viewBox="0 0 40 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="24" rx="2" fill="#FFB3C7" />
                                <path d="M8 8H12V16H8V8Z" fill="black" />
                                <path d="M16 8H20V16H16V8Z" fill="black" />
                                <circle cx="28" cy="12" r="3" fill="black" />
                            </svg>
                        </div>
                        {/* PayPal */}
                        <div className="h-6 w-10 relative flex items-center justify-center">
                            <svg viewBox="0 0 40 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="24" rx="2" fill="#003087" />
                                <path d="M10 8H16L14 16H8L10 8Z" fill="white" />
                                <path d="M20 8H26L24 16H18L20 8Z" fill="#009CDE" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* RIGHT - Product + 2 badges + before/after */}
                <div className="relative">
                    {/* Product foto */}
                    <div className="relative w-full max-w-lg mx-auto">
                        <Image
                            src="/images/product-hero.png"
                            alt="FOLLICLE Hair Growth Serum"
                            width={500}
                            height={600}
                            className="w-full h-auto"
                            style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))' }}
                            priority
                        />

                        {/* Smaller, centered badges */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl animate-pulse rotate-[-2deg] whitespace-nowrap z-10">
                            2.847× VERKOCHT VANDAAG
                        </div>

                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black px-8 py-3 rounded-full font-black text-lg shadow-xl whitespace-nowrap z-10">
                            90 DAGEN GELD TERUG
                        </div>
                    </div>

                    {/* Grote before/after onder product */}
                    <div className="mt-16 grid grid-cols-2 gap-6 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                                <Image
                                    src="/images/hair-before.jpg"
                                    alt="Voor behandeling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-3 font-bold text-[#475569] text-sm">Voor</p>
                        </div>
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#059669] bg-gray-100">
                                <Image
                                    src="/images/hair-after.jpg"
                                    alt="Na 12 weken FOLLICLE"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-3 font-bold text-[#059669] text-sm">Na 12 weken</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
