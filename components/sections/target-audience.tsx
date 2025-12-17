"use client"

import { Check, Minus, ArrowRight } from 'lucide-react'
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
        <section className="py-14 sm:py-18 bg-[#FDFCFA]">
            <div className="max-w-md mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-xl sm:text-2xl font-light text-[#1a1a1a] tracking-tight">
                        Past REVIVE bij jou?
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white border border-[#E8E4DF] rounded-2xl p-6 sm:p-8"
                >
                    {/* Positive items */}
                    <ul className="space-y-3 mb-5">
                        {positiveItems.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.05 }}
                                className="flex items-center gap-3 text-[#2D2A26] text-sm"
                            >
                                <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <div className="h-px bg-[#E8E4DF] my-5" />

                    {/* Negative items */}
                    <ul className="space-y-3">
                        {negativeItems.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.05 }}
                                className="flex items-center gap-3 text-[#9A948E] text-sm"
                            >
                                <Minus className="w-4 h-4 text-[#C4C0BA] flex-shrink-0" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8"
                >
                    <Button
                        asChild
                        className="bg-[#C4956A] hover:bg-[#B38559] text-white font-medium py-6 px-8 text-base rounded-full"
                    >
                        <Link href="#prijzen" className="flex items-center gap-2">
                            Start je behandeling
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>

                    <p className="text-sm text-[#9A948E] mt-6">
                        Twijfel je? Raadpleeg je huisarts.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
