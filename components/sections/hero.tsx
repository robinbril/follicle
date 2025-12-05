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

            <div className="section-container relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* Mobile: Product Video FIRST */}
                    <div className="block lg:hidden w-full order-1">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="mx-auto drop-shadow-2xl max-w-[280px] sm:max-w-sm"
                        >
                            <source src="/videos/revive-product-mobile.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* LEFT - Copy (order-2 on mobile, order-1 on desktop) */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-start text-left order-2 lg:order-1">

                        {/* HEADLINE - Concise */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5"
                            style={{ wordBreak: 'keep-all', hyphens: 'none' }}
                        >
                            <span className="text-[#D4A574]">6 ingrediënten.</span>{' '}
                            0 hormonen.
                        </motion.h1>

                        {/* SUBHEADLINE - Concise */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed"
                            style={{ wordBreak: 'keep-all', hyphens: 'none' }}
                        >
                            Wetenschappelijk geformuleerd.{' '}
                            <span className="text-gray-900 font-medium">Zonder bijwerkingen.</span>
                        </motion.p>

                        {/* PRIMARY CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto mb-6"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-[#C4956A] hover:bg-[#B38559] text-white font-semibold px-10 py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <Link href="#pricing">
                                    BESTEL NU
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Guarantee Micro-copy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                            className="text-sm text-gray-500 mb-6 flex items-center gap-2"
                        >
                            <Check className="w-4 h-4 text-emerald-600" />
                            180 dagen niet tevreden? Geld terug.
                        </motion.p>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-2">
                                {['TJ', 'MV', 'RL', 'SK'].map((initials, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-white flex items-center justify-center"
                                    >
                                        <span className="text-[10px] font-bold text-emerald-800">{initials}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4A574] text-[#D4A574]" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-gray-900">4.8</span>
                                <span className="text-xs text-gray-500">(847 reviews)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop Product Image (order-1 on desktop, hidden on mobile) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center mt-10 lg:mt-0 order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-lg">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="REVIVE Hair Growth Serum"
                                width={500}
                                height={750}
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                                priority
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -bottom-4 left-4 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 max-w-[200px] z-10"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Check className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">180 dagen</p>
                                        <p className="font-bold text-gray-900 text-sm">geld terug</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Risico-vrij uitproberen
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
