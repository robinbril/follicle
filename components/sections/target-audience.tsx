"use client"

import { Check, Minus, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TargetAudience() {
    const positiveItems = [
        "Beginnend haarverlies",
        "Dunner wordend haar",
        "90 dagen geduld",
        "Hormoonvrij gewenst",
    ]

    const negativeItems = [
        "5+ jaar volledig kaal",
        "Medische oorzaak",
    ]

    return (
        <section className="py-10 sm:py-14 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Suitability Matrix Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                    {/* Background Copper Glow (Targeting the 'Yes' side) */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,149,106,0.08)_0%,transparent_60%)] pointer-events-none" />

                    <div className="relative z-10 p-8 sm:p-12">
                        {/* Header */}
                        <div className="flex flex-col items-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight text-center">
                                Is REVIVE de match voor jou?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 sm:gap-20">
                            {/* Positive Left Side */}
                            <div>
                                <h3 className="text-[11px] font-black text-[#C4956A] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Perfect voor jou als
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
                                    {positiveItems.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.05 }}
                                            className="flex items-center gap-3 text-gray-700 text-[13px] font-bold"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-[#C4956A]/10 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-[#C4956A]" strokeWidth={3} />
                                            </div>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Negative Right Side */}
                            <div className="md:border-l md:border-gray-50 md:pl-12 lg:pl-16">
                                <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                                    Minder geschikt als
                                </h3>
                                <ul className="space-y-4">
                                    {negativeItems.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + i * 0.05 }}
                                            className="flex items-center gap-3 text-gray-400 text-[13px] font-medium"
                                        >
                                            <Minus className="w-4 h-4 text-gray-200" strokeWidth={3} />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Integrated Conversion Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <p className="text-[13px] font-bold text-gray-900 leading-none mb-1">
                                    Twijfel je nog?
                                </p>
                                <p className="text-[11px] text-gray-400 font-medium italic">
                                    Onze experts staan 24/7 voor je klaar
                                </p>
                            </div>
                            <Button
                                asChild
                                className="w-full sm:w-auto bg-[#111] hover:bg-[#222] text-white font-black py-6 px-10 text-[13px] tracking-widest uppercase rounded-full shadow-lg"
                            >
                                <Link href="#prijzen" className="flex items-center gap-2">
                                    Start je kuur
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
