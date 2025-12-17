"use client"

import { Droplet, Hand, Moon, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HowItWorks() {
    const steps = [
        {
            icon: Droplet,
            title: "DRUPPEL",
            description: "6-8 druppels op hoofdhuid",
        },
        {
            icon: Hand,
            title: "MASSEER",
            description: "2 minuten circulatie",
        },
        {
            icon: Moon,
            title: "SLAAP",
            description: "Laat intrekken overnacht",
        },
    ]

    return (
        <section className="py-10 sm:py-14 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Minimalist Dark Ribbon */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(196,149,106,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative flex items-center gap-5 p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[#C4956A]/30 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Watermark Number - The user's favorite element */}
                                    <div className="absolute -bottom-2 -right-2 text-6xl font-black text-white/[0.03] group-hover:text-[#C4956A]/5 transition-colors duration-500 select-none pointer-events-none">
                                        0{index + 1}
                                    </div>

                                    {/* Icon Box */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-[#C4956A] group-hover:scale-110 transition-all duration-500">
                                        <Icon className="w-5 h-5 text-[#C4956A] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-[12px] font-black text-white tracking-[0.2em] uppercase mb-0.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-[12px] text-gray-400 font-medium leading-tight group-hover:text-gray-300 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Refined Footer Pill - Ultra Compact */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-gray-100 rounded-full">
                        <div className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Droogt in 60s · Niet vettig
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
