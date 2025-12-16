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

            {/* Nieuw op de markt badge - Top Right (sleek pill) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-20 right-4 lg:top-24 lg:right-8 bg-[#D4A574]/90 text-white px-2.5 py-1 rounded-full text-[10px] font-medium shadow-sm z-20"
            >
                ✦ Nieuw
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
                            className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-6"
                        >
                            {/* Trustpilot Logo */}
                            <svg className="h-5" viewBox="0 0 126 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.3 12.8h-4.1V6.1h-2.4v16.6h2.4v-7.5h4.1v7.5h2.4V6.1h-2.4v6.7zm-11.9-6.7h-2.4v12.4c0 1.4.4 2.5 1.2 3.3.8.8 1.9 1.2 3.3 1.2 1.4 0 2.5-.4 3.3-1.2.8-.8 1.2-1.9 1.2-3.3V6.1h-2.4v12.2c0 .8-.2 1.4-.6 1.8-.4.4-.9.6-1.6.6-.6 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.8V6.1h.2zm-9.8 0h-2.4v16.6h2.4V6.1zm-7.4 6.7c-.4-.3-.9-.5-1.5-.7-.6-.2-1.2-.3-1.8-.4-.6-.1-1.2-.2-1.7-.4-.5-.1-.9-.3-1.2-.6-.3-.2-.5-.6-.5-1 0-.5.2-.9.6-1.2.4-.3 1-.4 1.7-.4.8 0 1.4.2 1.9.5.5.3.8.8.9 1.5h2.4c-.1-1.3-.6-2.3-1.5-3-.9-.7-2.1-1.1-3.6-1.1-1 0-1.8.1-2.6.4-.7.3-1.3.7-1.7 1.2-.4.5-.6 1.2-.6 2 0 .7.2 1.3.5 1.8.3.5.8.8 1.3 1.1.5.3 1.1.5 1.7.6.6.1 1.2.3 1.8.4.6.1 1.1.3 1.6.5.5.2.8.4 1.1.7.3.3.4.7.4 1.2 0 .6-.2 1-.7 1.4-.5.3-1.1.5-1.9.5-.9 0-1.6-.2-2.1-.6-.5-.4-.8-1-.9-1.8H.5c.1 1.4.6 2.5 1.6 3.2 1 .7 2.3 1.1 4 1.1 1 0 1.9-.1 2.7-.4.8-.3 1.4-.7 1.8-1.3.4-.6.7-1.3.7-2.1 0-.7-.2-1.3-.5-1.8-.3-.4-.8-.8-1.4-1.1zm20.7-6.7v16.6h2.4v-5.8l1.5-1.6 4.3 7.4h3l-5.5-9.3 5.1-5.3h-3l-5.4 5.8V6.1h-2.4zm17.5 0l-5.1 16.6h2.5l1.1-3.8h5.3l1.1 3.8h2.5l-5.1-16.6h-2.3zm-.9 10.5l2-6.9 2 6.9h-4zm12.2-10.5h-2.4v16.6h2.4v-5.8l1.5-1.6 4.3 7.4h3l-5.5-9.3 5.1-5.3h-3l-5.4 5.8V6.1zM93.8 6.1h-2.5v16.6h8.5v-2.3h-6.1V6.1h.1zm11.5 14.3c-.7 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.8v-6h3.3V9.7h-3.3V6.1h-2.4v3.6h-2v2.3h2v6.2c0 1.4.4 2.5 1.2 3.3.8.8 1.9 1.2 3.3 1.2.5 0 1-.1 1.4-.2.4-.1.8-.2 1.1-.4v-2.3c-.2.1-.5.2-.8.3-.3.1-.5.3-.6.3zm6.1-14v2.8h2.4V6.4h-2.4zm0 3.3v13h2.4v-13h-2.4z" fill="#191919" />
                                <path d="M115.7 6.1l3.4 10.4 3.4-10.4h2.5l-5.1 16.6h-1.6l-5.1-16.6h2.5z" fill="#191919" />
                            </svg>
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">4.8</span>
                        </motion.div>

                        {/* HEADLINE - Result first */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-4"
                        >
                            Stop haaruitval in 90 dagen.
                            <br className="hidden sm:block" />
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
                            </div>

                            {/* Guarantee - prominent */}
                            <p className="text-sm text-gray-500 mt-4 font-medium flex items-center justify-center lg:justify-start gap-2">
                                <Check className="w-4 h-4 text-[#D4A574]" />
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
                                src="/images/revive-hero-bottle.png"
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
                                src="/images/revive-hero-bottle.png"
                                alt="REVIVE Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
