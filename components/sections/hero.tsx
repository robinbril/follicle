"use client"

import { Check, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT - Clinical Copy */}
                    <div className="max-w-2xl">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            <span>Klinisch bewezen formule</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6 text-balance"
                        >
                            Stop haarverlies. <br />
                            <span className="text-emerald-600">Start hergroei.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
                        >
                            Wetenschappelijk onderbouwde behandeling met 18% actieve ingrediënten.
                            Geen bijwerkingen, alleen resultaat.
                        </motion.p>

                        {/* Clinical USPs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-3 mb-10"
                        >
                            {[
                                "88.9% effectiever dan standaard Minoxidil",
                                "Zichtbaar resultaat in 90 dagen",
                                "Ontwikkeld door dermatologen"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="#prijzen" className="btn-primary group">
                                Start Je Behandeling
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#wetenschap" className="btn-secondary">
                                Hoe Het Werkt
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex items-center gap-4 text-sm text-gray-500"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                                        {/* Placeholder avatars would go here */}
                                        <div className="w-full h-full bg-gray-300"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span className="font-medium text-gray-900">4.8/5</span>
                                <span>(2.847+ reviews)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT - Product Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative lg:h-[600px] flex items-center justify-center bg-gray-50 rounded-3xl p-8 lg:p-0"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            {/* Main Product Image */}
                            <Image
                                src="/images/revive-bottle.png"
                                alt="Follicle Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-xl"
                                priority
                            />

                            {/* Floating Result Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Klinisch Bewezen</p>
                                    <p className="text-sm text-gray-500">Dikkere haargroei in 3 maanden</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
