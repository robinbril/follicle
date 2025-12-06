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
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* LEFT - Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Mobile Product Visual - Above headline */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative w-full max-w-[280px] mx-auto lg:hidden aspect-[4/5] mb-6 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="REVIVE Hair Growth Serum"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* HEADLINE - Intentional two-line break */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-5"
                            style={{ hyphens: 'none', wordBreak: 'keep-all' }}
                        >
                            Stop <span className="text-[#D4A574] whitespace-nowrap">haarverlies.</span>
                            <br />
                            Start <span className="whitespace-nowrap">hergroei.</span>
                        </motion.h1>

                        {/* SUBHEADLINE - New info, no repetition */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg leading-relaxed"
                            style={{ hyphens: 'none' }}
                        >
                            <span className="text-gray-900 font-medium whitespace-nowrap">6 gepatenteerde ingrediënten.</span>{' '}
                            Zonder <span className="whitespace-nowrap">hormonen.</span>{' '}
                            Zonder <span className="whitespace-nowrap">bijwerkingen.</span>{' '}
                            <span className="whitespace-nowrap">Resultaat binnen 90 dagen.</span>
                        </motion.p>

                        {/* PRIMARY CTA - Specific + Price */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="w-full sm:w-auto mb-4 flex flex-col items-center lg:items-start"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-10 py-7 text-lg font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    PROBEER REVIVE
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            {/* Price visibility */}
                            <p className="text-center lg:text-left text-sm text-gray-600 mt-2 font-medium">
                                Vanaf <span className="text-gray-900 font-bold">€29/maand</span>
                            </p>
                        </motion.div>

                        {/* Guarantee */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm text-gray-500 mb-6 font-medium flex items-center gap-2 justify-center lg:justify-start"
                        >
                            <Check className="w-4 h-4 text-emerald-600" />
                            180 dagen niet tevreden? Volledige terugbetaling.
                        </motion.p>

                        {/* Social proof - ONE rating display */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                            className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-3">
                                {[
                                    { initials: 'RR', bg: 'bg-[#D4A574]/20', text: 'text-[#8B6914]' },
                                    { initials: 'DB', bg: 'bg-gray-100', text: 'text-gray-600' },
                                    { initials: 'TH', bg: 'bg-[#D4A574]/20', text: 'text-[#8B6914]' },
                                    { initials: 'AB', bg: 'bg-gray-100', text: 'text-gray-600' },
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
                                <span className="text-xs text-gray-500">(127 reviews)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-0"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="REVIVE Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
