"use client"

import { ArrowRight, Check, Star, ShieldCheck, Sparkles } from 'lucide-react'
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

                    {/* LEFT - High Conversion Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* INGREDIENT BADGE - Establishes credibility immediately */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A574]/10 border border-[#D4A574]/30 text-[#8B6914] text-xs font-bold mb-6 tracking-wide"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-[#D4A574]" />
                            Klinisch bewezen: 85% ziet resultaat binnen 90 dagen
                        </motion.div>

                        {/* HEADLINE - POSITIVE FRAMING */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance"
                        >
                            Voller, sterker haar <br className="hidden sm:block" />
                            <span className="text-[#D4A574]">in 90 dagen</span>
                        </motion.h1>

                        {/* SUBHEADLINE - Benefits secondary */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg"
                        >
                            Wetenschappelijk bewezen haargroei. Zonder de bijwerkingen van Finasteride of Minoxidil.
                        </motion.p>

                        {/* PRIMARY CTA - ABOVE THE FOLD, PROMINENT */}
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
                                    Start mijn haargroei
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            {/* URGENCY - Customer journey focused */}
                            <p className="text-sm text-gray-500 mt-3 font-medium">
                                <span className="text-[#D4A574] font-bold">→</span> Eerste resultaten binnen 4-6 weken
                            </p>
                        </motion.div>

                        {/* Mobile Product Visual */}
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

                        {/* STAT + BENEFITS BLOCK - Reframed positively */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200/80 shadow-sm mb-8 sm:mb-6 w-full max-w-md"
                        >
                            <motion.p className="text-base sm:text-lg text-gray-800 mb-5 leading-snug font-medium">
                                <span className="font-extrabold text-[#D4A574] text-2xl sm:text-3xl">88.9%</span> zag zichtbare haargroei
                                <span className="block mt-1 text-gray-500 text-sm font-normal">In onafhankelijk klinisch onderzoek na 90 dagen.</span>
                            </motion.p>

                            {/* Benefits - Positive framing */}
                            <div className="flex flex-col gap-2.5 text-sm text-gray-700 font-medium">
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                    </div>
                                    Veilig voor dagelijks gebruik
                                </span>
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                    </div>
                                    Zachte, natuurlijke ingrediënten
                                </span>
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
                                    </div>
                                    Stop wanneer je wilt
                                </span>
                            </div>
                        </motion.div>

                        {/* SOCIAL PROOF - Realistic numbers */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
                        >
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
                            <span className="text-xs text-gray-400 font-medium">
                                <ShieldCheck className="w-3.5 h-3.5 inline mr-1" />
                                180 dagen garantie
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex relative lg:h-[600px] items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-0 mt-10 lg:mt-0"
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
                                transition={{ delay: 0.7 }}
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

                            {/* NEW: Floating badge top right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="hidden lg:flex absolute top-8 -right-4 bg-[#D4A574] text-white px-4 py-2 rounded-xl shadow-lg items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-bold">#1 in NL</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
