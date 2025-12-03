"use client"

import { Check, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT - High Conversion Copy */}
                    <div className="max-w-2xl">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>Bestel voor 23:59 → morgen in huis</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6 text-balance"
                        >
                            Klinisch bewezen haarserum <br className="hidden sm:block" />
                            <span className="text-emerald-600">zonder Finasteride of Minoxidil</span>
                        </motion.h1>

                        <motion.p
                            className="text-lg text-gray-600 mb-6 leading-relaxed max-w-lg font-medium"
                        >
                            88.9% zag duidelijke hergroei in een onafhankelijke studie (vs 60% met Minoxidil alleen).
                        </motion.p>

                        {/* Benefits - Horizontal on desktop, vertical on mobile */}
                        <motion.div
                            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 mb-8 text-sm sm:text-base text-gray-700 font-medium"
                        >
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-emerald-500" /> Geen seksuele bijwerkingen
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-emerald-500" /> Geen jeuk
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-emerald-500" /> Geen levenslange afhankelijkheid
                            </span>
                        </motion.div>

                        {/* Offer Text */}
                        <motion.p className="text-sm font-medium text-gray-500 mb-6">
                            Vanaf €39/maand · Annuleer wanneer je wilt · 180 dagen garantie
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="#prijzen" className="btn-primary group text-lg px-10 py-4 shadow-emerald-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                START NU
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
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

                    {/* RIGHT - Product Visual */}
                    <motion.div
                        className="relative lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-3xl p-8 lg:p-0 mt-10 lg:mt-0"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="Follicle Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-xl"
                                priority
                            />

                            {/* Floating Result Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">6 actieve technologieën</p>
                                    <p className="text-sm text-gray-500">20.5% werkzame concentratie</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
