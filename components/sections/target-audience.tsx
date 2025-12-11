"use client"

import { Check, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TargetAudience() {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
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
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We zijn eerlijk: REVIVE werkt niet voor iedereen.
                        Hier is hoe je weet of het bij jouw situatie past.
                    </p>
                </motion.div>

                {/* Asymmetric grid - YES card larger */}
                <div className="grid lg:grid-cols-5 gap-6">
                    {/* YES Column - Takes 3/5 of space */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">REVIVE is voor jou als:</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700"><strong>Je beginnend haarverlies hebt</strong></span>
                            </li>
                            {[
                                "Je haar dunner wordt (niet volledig kaal)",
                                "Je bereid bent 90 dagen te wachten op resultaat",
                                "Je geen hormoonbehandelingen wilt",
                                "Je een veilig alternatief zoekt voor Minoxidil",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA in the YES card */}
                        <Button
                            asChild
                            className="w-full sm:w-auto bg-[#C4956A] hover:bg-[#B38559] text-white font-bold py-6 px-8 text-base"
                        >
                            <Link href="#prijzen" className="flex items-center justify-center gap-2">
                                Past bij mij → Bekijk opties
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* NO Column - Takes 2/5 of space, smaller */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm h-fit"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="w-4 h-4 text-gray-500" />
                            </div>
                            <h3 className="text-base font-bold text-gray-700">Niet voor jou als:</h3>
                        </div>

                        <ul className="space-y-3 text-sm">
                            {[
                                "Je al 5+ jaar volledig kaal bent",
                                "Je haarverlies een medische oorzaak heeft",
                                "Je onmiddellijk resultaat verwacht",
                                "Je al tevreden bent met Minoxidil",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-500">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-xs text-gray-400 bg-gray-50 rounded-lg p-2">
                            💡 Twijfel? Vraag je huisarts.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
