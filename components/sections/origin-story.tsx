"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function OriginStory() {
    return (
        <section id="verhaal" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-semibold tracking-[3px] text-gray-500 uppercase mb-12"
                >
                    Waarom REVIVE bestaat
                </motion.p>

                {/* Story Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                >
                    <div className="md:flex md:gap-10">
                        {/* Founder Photo */}
                        <div className="flex-shrink-0 mb-6 md:mb-0">
                            <div className="w-32 h-32 md:w-36 md:h-36 mx-auto md:mx-0 rounded-xl bg-gradient-to-br from-[#D4A574]/20 to-[#D4A574]/5 flex items-center justify-center overflow-hidden">
                                {/* Placeholder - replace with actual photo */}
                                <div className="text-center text-gray-400">
                                    <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs">Foto Robin</span>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="flex-1">
                            <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700">
                                <p className="mb-4">
                                    "Ik had altijd dik haar. Tot ik 17 was.
                                </p>
                                <p className="mb-4">
                                    Binnen 3 jaar was de helft weg. Alles wat ik vond: medicatie met bijwerkingen,
                                    of serums met <span className="text-gray-900 font-medium">0.3% actieve stof</span> en
                                    "klinisch bewezen" zonder bron.
                                </p>
                                <p className="mb-6">
                                    REVIVE heeft <span className="text-gray-900 font-medium">20.5% actieve stof</span>.
                                    <span className="text-gray-900 font-medium">24 studies</span>. Alles openbaar."
                                </p>
                            </blockquote>

                            <footer className="text-sm text-gray-500">
                                — <span className="font-semibold text-gray-700">Robin Bril</span>, Oprichter
                            </footer>
                        </div>
                    </div>
                </motion.div>

                {/* Optional: Mission Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-gray-500 text-sm mt-8 max-w-xl mx-auto"
                >
                    Geen wonderpil. Geen lege beloftes. Gewoon eerlijke ingrediënten,
                    openbare studies, en een product dat werkt.
                </motion.p>
            </div>
        </section>
    )
}
