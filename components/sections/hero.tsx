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
        <section className="py-24 md:py-32 bg-[#0F0F0F] mt-28 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

                {/* LEFT - Luxury Copy */}
                <div className="space-y-12 text-center md:text-left">
                    <div>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#D4AF37] leading-none mb-4">
                            REVIVE
                        </h1>
                        <p className="text-2xl md:text-3xl font-light text-[#F8F5F0] tracking-wide">
                            Hair Revival Elixir
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-[#94A3B8] font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                        De laatste stap vóór een transplantatie – of het einde ervan.
                        <br />
                        Een klinisch meesterwerk voor de man die geen compromissen sluit.
                    </p>

                    {/* Luxury USPs */}
                    <div className="space-y-4 max-w-md mx-auto md:mx-0">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 text-lg font-light text-[#F8F5F0]"
                        >
                            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                            88.9% effectiever dan Minoxidil
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-4 text-lg font-light text-[#F8F5F0]"
                        >
                            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                            Geen bijwerkingen, puur resultaat
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 text-lg font-light text-[#F8F5F0]"
                        >
                            <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                            180 dagen tevredenheidsgarantie
                        </motion.p>
                    </div>

                    {/* Luxury CTA */}
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <button
                            onClick={scrollToPricing}
                            className="group bg-[#4A0E2A] text-[#D4AF37] border border-[#D4AF37] px-12 py-5 rounded-sm uppercase tracking-[0.15em] font-bold text-sm hover:bg-[#D4AF37] hover:text-[#4A0E2A] transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                        >
                            Reserveer Mijn Fles
                        </button>
                        <p className="text-xs text-[#94A3B8] tracking-widest uppercase">
                            Beperkte oplage: Batch #04 bijna uitverkocht
                        </p>
                    </div>
                </div>

                {/* RIGHT - Product + Luxury Badges */}
                <div className="relative">
                    {/* Product Card */}
                    <div className="relative w-full max-w-md mx-auto bg-[#F8F5F0] p-12 rounded-sm shadow-2xl border border-[#D4AF37]/30">
                        <Image
                            src="/images/revive-bottle.png"
                            alt="REVIVE Luxury Hair Serum"
                            width={500}
                            height={600}
                            className="w-full h-auto mix-blend-multiply"
                            priority
                        />

                        {/* Luxury Badges */}
                        <div className="absolute -top-5 -right-5 bg-[#4A0E2A] text-[#D4AF37] border border-[#D4AF37] px-6 py-3 rounded-sm font-serif italic text-lg shadow-xl">
                            2.847× Verkocht
                        </div>

                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#4A0E2A] px-8 py-3 rounded-sm font-bold tracking-widest text-xs uppercase shadow-xl whitespace-nowrap border border-[#4A0E2A]">
                            180 Dagen Garantie
                        </div>
                    </div>

                    {/* Elegant Before/After */}
                    <div className="mt-16 grid grid-cols-2 gap-6 max-w-md mx-auto">
                        <div className="text-center group">
                            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D4AF37]/20 grayscale group-hover:grayscale-0 transition duration-700">
                                <Image
                                    src="/images/hair-before.jpg"
                                    alt="Voor behandeling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 font-serif italic text-[#94A3B8]">Voor</p>
                        </div>
                        <div className="text-center group">
                            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                <Image
                                    src="/images/hair-after.jpg"
                                    alt="Na 12 weken REVIVE"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 font-serif italic text-[#D4AF37]">Na 12 weken</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
