"use client"

import { ArrowRight, Check, Star, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PaymentTrust } from '@/components/ui/payment-trust'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4A574]/5 via-transparent to-transparent pointer-events-none" />



            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">

                    {/* LEFT - Emotional, Customer-Focused Copy */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* TRUSTPILOT BADGE - Compact pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#E8E4DF] mb-6 mt-4 md:mt-0 lg:mb-8"
                        >
                            <div className="flex items-center gap-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                </svg>
                                <span className="text-xs font-semibold text-[#1a1a1a]">Trustpilot</span>
                            </div>
                            <div className="w-px h-3 bg-[#E8E4DF]" />
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-[#1a1a1a]">4.8</span>
                        </motion.div>

                        {/* MOBILE: Product Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="relative w-44 h-auto mx-auto mb-6 lg:hidden"
                        >
                            <Image
                                src="/images/revive-hero-bottle.png"
                                alt="REVIVE Hair Growth Serum"
                                width={176}
                                height={220}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </motion.div>

                        {/* HEADLINE - Proper hierarchy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-3"
                        >
                            <h1 
                                className="text-[2rem] sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]"
                                style={{ hyphens: 'none', wordBreak: 'keep-all' }}
                            >
                                Stop haaruitval in 90 dagen.
                            </h1>
                            <p className="text-[1.625rem] sm:text-3xl lg:text-4xl font-medium text-[#C4956A] mt-1 tracking-tight">
                                Of je geld terug.
                            </p>
                        </motion.div>

                        {/* SUBHEADLINE - Larger, darker */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mb-8"
                        >
                            {/* Desktop: long */}
                            <p className="hidden md:block text-lg text-[#4A4540] max-w-md leading-relaxed mb-6">
                                REVIVE bevat 6 klinisch onderbouwde ingrediënten in concentraties die daadwerkelijk werken.
                            </p>
                            {/* Mobile: short, more subtle */}
                            <p className="md:hidden text-[1rem] text-[#4A4540]/60 font-medium tracking-tight">
                                6 klinische ingrediënten. Gebaseerd op 24 studies.
                            </p>
                        </motion.div>

                        {/* PRIMARY CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-12 px-10 text-base font-semibold bg-[#C4956A] hover:bg-[#B38559] text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 rounded-2xl group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Start je behandeling
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Mobile product image is now after Trustpilot */}
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
