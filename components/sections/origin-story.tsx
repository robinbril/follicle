"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function OriginStory() {
    return (
        <section id="verhaal" className="py-28 sm:py-40 bg-white relative overflow-hidden">
            {/* Multi-layer radial glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(196,149,106,0.04)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(196,149,106,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Title - Brand Manifesto Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#C4956A] uppercase mb-6 block">
                        Onze Oorsprong
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-none">
                        Eerlijkheid boven alles.
                    </h2>
                </motion.div>

                {/* Story Card - Ultra Luxury Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    className="relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-2xl rounded-[3rem] p-10 sm:p-20 border border-white/50 shadow-[0_50px_100px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden"
                >
                    {/* Glass reflections */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4956A]/40 to-transparent" />
                    <div className="absolute bottom-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-gray-200/50 to-transparent" />

                    <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center lg:items-start relative z-10">
                        {/* Founder Photo - Floating */}
                        <div className="relative shrink-0">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative"
                            >
                                {/* Animated glow */}
                                <motion.div 
                                    animate={{ 
                                        scale: [1, 1.1, 1],
                                        opacity: [0.15, 0.25, 0.15]
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-[#C4956A] rounded-[2rem] blur-3xl"
                                />
                                
                                {/* Floating photo */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ 
                                        duration: 5, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative w-36 h-36 sm:w-52 sm:h-52"
                                >
                                    <Image
                                        src="/images/robin-bril.png"
                                        alt="Robin Bril, oprichter REVIVE"
                                        fill
                                        className="rounded-[2rem] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative z-10 border-2 border-white/50"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Quote */}
                        <div className="text-center lg:text-left flex-1">
                            <Quote className="w-12 h-12 text-[#C4956A]/15 mb-8 mx-auto lg:mx-0" strokeWidth={1.5} />
                            
                            <blockquote>
                                <p className="text-xl sm:text-3xl lg:text-4xl leading-[1.4] text-gray-900 font-medium tracking-tight mb-8 italic">
                                    "Ik had altijd dik haar. Tot ik 17 was.
                                    Binnen 3 jaar was de helft weg."
                                </p>
                                <p className="text-base sm:text-xl text-gray-500 not-italic leading-relaxed max-w-2xl">
                                    Ik zocht een oplossing zonder troep. Alles wat ik vond was medicatie met bijwerkingen of serums met <span className="text-[#C4956A] font-bold">0.3%</span> actieve stof. 
                                    REVIVE bevat <span className="text-gray-900 font-black">20.5%</span>. Geen compromissen.
                                </p>
                            </blockquote>

                            {/* Signature Footer */}
                            <footer className="mt-12 sm:mt-16 flex flex-col lg:flex-row items-center gap-5">
                                <div className="w-16 h-[2px] bg-gradient-to-r from-[#C4956A] to-transparent hidden lg:block" />
                                <div className="flex flex-col lg:items-start items-center">
                                    <span className="text-2xl font-black text-gray-900 tracking-tighter">Robin Bril</span>
                                    <span className="text-[11px] uppercase font-black tracking-[0.3em] text-[#C4956A] mt-1">Oprichter REVIVE</span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
