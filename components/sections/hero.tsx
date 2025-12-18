"use client"

import { ArrowRight, Check, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="hero" className="relative pt-20 pb-12 lg:pt-28 lg:pb-24 bg-gradient-to-b from-[#fafafa] to-white overflow-hidden mx-3 sm:mx-6 lg:mx-8 mt-3 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-gray-100/80 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)]">
            
            {/* Premium Background with Subtle Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]">
                {/* Copper radial gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,149,106,0.08)_0%,transparent_60%)]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(196,149,106,0.05)_0%,transparent_60%)]" />
                
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(196,149,106,0.15) 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* LEFT - Copy Section */}
                    <div className="max-w-2xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* TRUSTPILOT BADGE - Premium Pill */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            whileHover={{ y: -2, scale: 1.02 }}
                            className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_16px_48px_rgba(0,0,0,0.04)] mb-6 lg:mb-10 cursor-default transition-all duration-300"
                        >
                            <div className="flex items-center gap-1.5">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                </svg>
                                <span className="text-sm font-bold text-[#1a1a1a]">Trustpilot</span>
                            </div>
                            <div className="w-px h-5 bg-gray-200" />
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#00B67A" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-lg font-black text-[#1a1a1a]">4.8</span>
                        </motion.div>

                        {/* MOBILE PRODUCT - Premium Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="relative w-full max-w-xs mx-auto mb-8 lg:hidden"
                        >
                            {/* Premium Product Container */}
                            <div className="relative rounded-[2rem] bg-gradient-to-br from-white via-white to-[#f9f6f3] p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset,0_20px_60px_-10px_rgba(0,0,0,0.08),0_40px_80px_-20px_rgba(199,145,86,0.12)]">
                                
                                {/* Animated Copper Glow */}
                                <motion.div 
                                    animate={{ 
                                        opacity: [0.4, 0.6, 0.4],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 rounded-[2rem] shadow-[0_0_60px_rgba(199,145,86,0.15),0_0_120px_rgba(199,145,86,0.08)]"
                                />
                                
                                {/* Subtle inner gradient */}
                                <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(199,145,86,0.03)_100%)] pointer-events-none" />
                                
                                {/* Floating Product */}
                                <motion.div
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{ 
                                        duration: 6, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10"
                                >
                                    <Image
                                        src="/images/revive-hero-bottle.png"
                                        alt="REVIVE Hair Growth Serum"
                                        width={240}
                                        height={300}
                                        className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)] mx-auto"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* HEADLINE - Ultra Impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mb-6"
                        >
                            <h1 className="text-[2.75rem] sm:text-5xl lg:text-7xl font-black text-[#1a1a1a] tracking-[-0.02em] leading-[1.05]">
                                Stop haaruitval<br className="sm:hidden" /> in{' '}
                                <span className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#C4956A] bg-clip-text text-transparent">
                                    90 dagen.
                                </span>
                            </h1>
                        </motion.div>

                        {/* GUARANTEE BADGE - Premium Style */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C4956A] to-[#b8834d] text-white px-6 py-3 rounded-full text-lg font-bold shadow-[0_8px_24px_rgba(199,145,86,0.3),0_0_0_1px_rgba(255,255,255,0.2)_inset] relative overflow-hidden">
                                {/* Shimmer effect */}
                                <motion.div 
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                />
                                <Check className="w-5 h-5 relative z-10" strokeWidth={3} />
                                <span className="relative z-10">Of je geld terug</span>
                            </div>
                        </motion.div>

                        {/* PRIMARY CTA - Ultra Premium */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="w-full sm:w-auto mb-8"
                        >
                            <Link href="#prijzen" className="block group">
                                <motion.button
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#C4956A] to-[#b8834d] text-white rounded-2xl font-black text-base tracking-wide uppercase overflow-hidden shadow-[0_12px_32px_rgba(199,145,86,0.35),0_0_0_1px_rgba(255,255,255,0.2)_inset,0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300"
                                >
                                    {/* Lightning Icon */}
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                                        <Zap className="w-5 h-5 text-[#C4956A]" fill="#C4956A" />
                                    </div>
                                    
                                    {/* Hover shine */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    
                                    <span className="relative z-10 flex items-center justify-center gap-3 pl-8">
                                        Start je behandeling
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* SUBHEADLINE - Elegant */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="hidden md:block text-lg text-[#4A4540] max-w-md leading-relaxed">
                                REVIVE bevat 6 klinisch onderbouwde ingrediënten in concentraties die daadwerkelijk werken.
                            </p>
                            <p className="md:hidden text-sm text-[#4A4540]/80 font-semibold tracking-tight">
                                6 klinische ingrediënten · 24 studies · Made in NL
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop Product Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex relative lg:h-[550px] items-center justify-center"
                    >
                        {/* Premium Product Container */}
                        <div className="relative w-full max-w-md rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#f9f6f3] p-12 shadow-[0_0_0_1px_rgba(0,0,0,0.04)_inset,0_20px_60px_-10px_rgba(0,0,0,0.08),0_40px_80px_-20px_rgba(199,145,86,0.12)]">
                            
                            {/* Animated Copper Glow */}
                            <motion.div 
                                animate={{ 
                                    opacity: [0.3, 0.5, 0.3],
                                    scale: [1, 1.03, 1]
                                }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_60px_rgba(199,145,86,0.15),0_0_120px_rgba(199,145,86,0.08)]"
                            />
                            
                            {/* Inner gradient overlay */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(199,145,86,0.03)_100%)] pointer-events-none" />
                            
                            {/* Floating Product */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ 
                                    duration: 6, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/images/revive-hero-bottle.png"
                                    alt="REVIVE Hair Growth Serum"
                                    width={320}
                                    height={400}
                                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)] mx-auto"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
