"use client"

import { ArrowRight, Check, Star, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative pt-24 pb-12 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* LEFT - High Conversion Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-medium mb-6"
                        >
                            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Bestel voor 23:59 → morgen in huis</span>
                        </motion.div>

                        <motion.h1
                            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance"
                        >
                            Klinisch bewezen haarserum <br className="hidden sm:block" />
                            <span className="text-emerald-600">zonder Finasteride of Minoxidil</span>
                        </motion.h1>

                        {/* Mobile Product Visual - Video Loop (Warm/Premium) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative w-full max-w-[240px] mx-auto aspect-[4/5] mb-8 lg:hidden rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/images/revive-hero-bottle.jpg"
                            >
                                <source src="/videos/revive-product-loop.mp4" type="video/mp4" />
                            </video>
                        </motion.div>

                        {/* Trust Block - Clean & Aligned */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm mb-8 sm:mb-0 text-center sm:text-left">
                            <motion.p
                                className="text-base sm:text-lg text-gray-800 mb-6 leading-snug font-medium"
                            >
                                <span className="font-extrabold text-emerald-600 text-2xl sm:text-3xl">88.9%</span> zag duidelijke hergroei.
                                <span className="block mt-1 text-gray-500 text-sm sm:text-base font-normal">Bewezen effectiever dan Minoxidil (60%).</span>
                            </motion.p>

                            {/* Benefits - Vertical list, centered as a block but aligned left internally */}
                            <div className="flex justify-center sm:justify-start mb-6">
                                <motion.div
                                    className="flex flex-col gap-3 text-sm sm:text-base text-gray-700 font-medium text-left"
                                >
                                    <span className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                        </div>
                                        Geen seksuele bijwerkingen
                                    </span>
                                    <span className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                        </div>
                                        Geen jeuk of irritatie
                                    </span>
                                    <span className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                        </div>
                                        Geen levenslange afhankelijkheid
                                    </span>
                                </motion.div>
                            </div>

                            {/* Offer Text */}
                            <motion.div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-semibold text-gray-500 border-t border-gray-100 pt-4">
                                <ShieldCheck className="w-4 h-4 text-[#D4A574]" />
                                <span>180 dagen garantie · Vanaf €39/maand</span>
                            </motion.div>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg font-bold bg-gradient-to-r from-[#D4A574] via-[#E8C89A] to-[#D4A574] hover:from-[#C69563] hover:via-[#D4AF37] hover:to-[#C69563] text-gray-900 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                asChild
                            >
                                <Link href="#prijzen">
                                    BESTEL NU <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex items-center gap-4"
                        >
                            <div className="flex -space-x-3">
                                {[
                                    { initials: 'TJ', bg: 'bg-emerald-100', text: 'text-emerald-700' },
                                    { initials: 'MV', bg: 'bg-amber-100', text: 'text-amber-700' },
                                    { initials: 'RL', bg: 'bg-blue-100', text: 'text-blue-700' },
                                    { initials: 'SK', bg: 'bg-purple-100', text: 'text-purple-700' },
                                ].map((avatar, i) => (
                                    <div
                                        key={i}
                                        className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-white flex items-center justify-center shadow-sm`}
                                    >
                                        <span className={`text-xs font-semibold ${avatar.text}`}>
                                            {avatar.initials}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-gray-900">4.8/5</span>
                                <span className="text-xs text-gray-500">(2.847+)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual - Desktop Only */}
                    <motion.div
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center bg-gray-50 rounded-3xl p-8 lg:p-0 mt-10 lg:mt-0"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="Follicle Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />

                            {/* Floating Result Card - Desktop Only */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="hidden lg:block absolute bottom-12 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Check className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">6 actieve</p>
                                        <p className="font-bold text-gray-900 text-sm">technologieën</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    20.5% werkzame concentratie
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
