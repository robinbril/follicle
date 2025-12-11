"use client"

import { Check, X, ArrowRight, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TargetAudience() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-stone-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Is REVIVE voor jou?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-3">
                        We zijn transparant: REVIVE past niet bij iedereen.
                        Hier de feiten om te checken of het bij jouw situatie past.
                    </p>
                    <Link
                        href="#wetenschap"
                        className="text-sm text-[#D4A574] hover:text-[#B38559] font-medium inline-flex items-center gap-1"
                    >
                        Gebaseerd op 24 peer-reviewed studies →
                    </Link>
                </motion.div>

                {/* Asymmetric grid - YES card larger */}
                <div className="grid lg:grid-cols-5 gap-6">
                    {/* YES Column - Takes 3/5 of space, warm styling */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-gradient-to-br from-[#fffbf8] to-[#fef7f0] rounded-2xl p-6 sm:p-8 border-l-4 border-[#D4A574] shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#D4A574]/10 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-[#D4A574]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">REVIVE kan voor jou werken als:</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                { text: "Je beginnend haarverlies hebt", note: "voor velen effectief" },
                                { text: "Je haar dunner wordt (niet volledig kaal)", note: "hergroei mogelijk" },
                                { text: "Je bereid bent 90+ dagen te wachten", note: "resultaten variëren" },
                                { text: "Je voorkeur hebt voor hormoonvrij", note: "combineren kan ook" },
                                { text: "Je een natuurlijk serum zoekt", note: "standalone of als boost" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">
                                        {item.text}
                                        <span className="text-gray-400 text-sm"> ({item.note})</span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA in the YES card */}
                        <Button
                            asChild
                            className="w-full sm:w-auto bg-[#C4956A] hover:bg-[#B38559] text-white font-bold py-6 px-8 text-base"
                        >
                            <Link href="#prijzen" className="flex items-center justify-center gap-2">
                                Bekijk opties
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* NO Column - Subtle, faded */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white/80 rounded-2xl p-5 sm:p-6 border border-gray-100 h-fit"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="w-3.5 h-3.5 text-gray-400" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-500">Niet voor jou als:</h3>
                        </div>

                        <ul className="space-y-2.5 text-xs text-gray-500">
                            {[
                                { text: "Je al 5+ jaar volledig kaal bent", note: "hergroei beperkt" },
                                { text: "Je haarverlies een medische oorzaak heeft", note: "raadpleeg arts" },
                                { text: "Je onmiddellijk resultaat verwacht", note: "geduld nodig" },
                                { text: "Je al tevreden bent met huidige routine", note: "geen reden te switchen" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <X className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
                                    <span>
                                        {item.text}
                                        <span className="text-gray-400"> ({item.note})</span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 text-[10px] text-gray-400 bg-gray-50 rounded-lg p-2 flex items-start gap-2">
                            <Info className="w-3 h-3 flex-shrink-0 mt-0.5" />
                            <span>Twijfel je? Raadpleeg je huisarts. Resultaten variëren per persoon.</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
