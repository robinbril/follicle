"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function OriginStory() {
    return (
        <section id="verhaal" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Section Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-semibold tracking-[3px] text-gray-400 uppercase mb-10"
                >
                    Waarom REVIVE bestaat
                </motion.p>

                {/* Story Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                >
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
                        {/* Founder Photo */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/robin-bril.png"
                                alt="Robin Bril, oprichter REVIVE"
                                width={140}
                                height={140}
                                className="rounded-xl object-cover w-28 h-28 sm:w-36 sm:h-36"
                            />
                        </div>

                        {/* Quote */}
                        <div className="text-center sm:text-left">
                            <blockquote className="text-base sm:text-lg leading-relaxed text-gray-700">
                                <p className="mb-3">
                                    "Ik had altijd dik haar. Tot ik 17 was.
                                </p>
                                <p className="mb-3">
                                    Binnen 3 jaar was de helft weg. Alles wat ik vond: medicatie
                                    met bijwerkingen, of serums met <span className="text-gray-400">0.3%</span> actieve
                                    stof en "klinisch bewezen" zonder bron.
                                </p>
                                <p>
                                    REVIVE heeft <span className="text-gray-900 font-semibold">20.5%</span> actieve stof.
                                    <span className="text-gray-900 font-semibold">24 studies</span>. Alles openbaar."
                                </p>
                            </blockquote>

                            <footer className="text-sm text-gray-500 mt-4">
                                — <span className="font-semibold text-gray-700">Robin Bril</span>, Oprichter
                            </footer>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
