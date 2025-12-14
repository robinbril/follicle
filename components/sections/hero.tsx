"use client"

import { ArrowRight, Check, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative pt-40 pb-12 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/5 via-transparent to-transparent pointer-events-none" />

            {/* Nieuw op de markt badge - Top Right (sleek, higher position) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-16 right-4 lg:top-20 lg:right-8 bg-[#D4A574] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md z-20 backdrop-blur-sm"
            >
                Nieuw op de markt
            </motion.div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* LEFT - Emotional, Customer-Focused Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* TRUST - Social proof first (small, subtle) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6"
                        >
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4A574] text-[#D4A574]" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">4.8</span>
                            <span className="text-xs text-gray-500">uit 847 reviews</span>
                        </motion.div>

                        {/* HEADLINE - Result first */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-4"
                        >
                            Zichtbaar voller haar.<br className="hidden sm:block" />
                            <span className="text-[#D4A574]">Of je geld terug.</span>
                        </motion.h1>

                        {/* SUBHEADLINE - Mechanism comes after promise */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg text-gray-600 mb-6 max-w-md"
                        >
                            REVIVE bevat 6 klinisch onderbouwde ingrediënten in concentraties die daadwerkelijk werken — niet de symbolische doses van standaard serums.
                        </motion.p>

                        {/* PRIMARY CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto mb-6"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto px-10 py-7 text-lg font-bold bg-[#C4956A] hover:bg-[#B38559] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                                    asChild
                                >
                                    <Link href="#prijzen">
                                        START MET REVIVE
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Link
                                    href="#ingredienten"
                                    className="text-sm text-gray-500 hover:text-[#D4A574] font-medium transition-colors"
                                >
                                    Bekijk ingrediënten →
                                </Link>
                            </div>

                            {/* Guarantee - prominent */}
                            <p className="text-sm text-gray-500 mt-4 font-medium flex items-center justify-center lg:justify-start gap-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                180 dagen niet tevreden? Volledige terugbetaling.
                            </p>
                        </motion.div>

                        {/* Mobile Product Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full max-w-[240px] mx-auto aspect-[4/5] mb-8 lg:hidden rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="REVIVE Hair Growth Serum"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 0.6
                        }}
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center mt-10 lg:mt-0"
                    >
                        <div className="relative w-full max-w-lg aspect-[4/5]">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="REVIVE Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                                priority
                            />

                            {/* Floating Result Card - Positioned over image top */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-8 left-4 bg-gradient-to-r from-amber-500 to-amber-600 p-4 rounded-2xl shadow-[0_8px_30px_rgba(217,119,6,0.3)] border border-amber-400/20 max-w-[220px] z-10"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-sm text-white font-bold leading-tight">
                                        24 studies
                                        <span className="block text-xs font-normal opacity-90">Peer-reviewed</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
