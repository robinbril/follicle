"use client"

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TargetAudience() {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

                <div className="grid md:grid-cols-2 gap-6">
                    {/* YES Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <Check className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">REVIVE is voor jou als:</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Je beginnend tot matig haarverlies hebt",
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
                    </motion.div>

                    {/* NO Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <X className="w-5 h-5 text-gray-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">REVIVE is NIET voor jou als:</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Je al 5+ jaar volledig kaal bent",
                                "Je haarverlies een medische oorzaak heeft",
                                "Je onmiddellijk resultaat verwacht",
                                "Je niet consequent kunt toepassen",
                                "Je al tevreden bent met Minoxidil",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
                            💡 Twijfel je? Vraag je huisarts om advies over de oorzaak van je haarverlies.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm mt-8"
                >
                    Dit bouwt meer vertrouwen dan "werkt voor iedereen." We zijn eerlijk over wat we kunnen en niet kunnen.
                </motion.p>
            </div>
        </section>
    )
}
