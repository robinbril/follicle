"use client"

import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative pt-40 pb-12 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/5 via-transparent to-transparent pointer-events-none" />

            {/* Nieuw op de markt badge - Top Right */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-24 right-4 lg:right-8 bg-gradient-to-r from-[#D4A574] to-[#C69563] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
            >
                Nieuw op de markt
            </motion.div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* LEFT - Emotional, Customer-Focused Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">



                        {/* HEADLINE - Clear problem + solution */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5"
                        >
                            Stop haaruitval.{' '}
                            <span className="text-[#D4A574]">Start hergroei.</span>
                        </motion.h1>

                        {/* SUBHEADLINE - Why it's better */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed"
                        >
                            6 geteste ingrediënten.{' '}
                            <span className="text-gray-900 font-medium whitespace-nowrap">Zonder hormonen.</span>{' '}
                            <span className="text-gray-900 font-medium whitespace-nowrap">Zonder bijwerkingen.</span>
                        </motion.p>

                        {/* PRIMARY CTA - Test + Guarantee framing */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto mb-6"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-10 py-7 text-lg font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    BESTEL NU
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            {/* Guarantee in micro-copy */}
                            <p className="text-sm text-gray-500 mt-3 font-medium flex items-center justify-center lg:justify-start gap-2">
                                ✓ 180 dagen niet tevreden? Volledige terugbetaling.
                            </p>

                            {/* Social proof - avatar stack + rating */}
                            <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start mt-6">
                                <div className="flex -space-x-3">
                                    {[
                                        { initials: 'TJ', bg: 'bg-[#D4A574]/20', text: 'text-[#8B6914]' },
                                        { initials: 'MV', bg: 'bg-gray-100', text: 'text-gray-600' },
                                        { initials: 'RL', bg: 'bg-[#D4A574]/20', text: 'text-[#8B6914]' },
                                        { initials: 'SK', bg: 'bg-gray-100', text: 'text-gray-600' },
                                    ].map((avatar, i) => (
                                        <div
                                            key={i}
                                            className={`w-9 h-9 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center shadow-sm`}
                                        >
                                            <span className={`text-xs font-semibold ${avatar.text}`}>
                                                {avatar.initials}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#D4A574] text-[#D4A574]" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">4.8</span>
                                    <span className="text-xs text-gray-500">(847 reviews)</span>
                                </div>
                            </div>
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

                            {/* Floating Result Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -bottom-4 left-4 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 max-w-[200px] z-10"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Check className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <p className="text-sm text-gray-700 font-medium">
                                        Door 24 studies onderbouwd
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
