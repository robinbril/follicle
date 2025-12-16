"use client"

import { TrendingUp, Shield, Layers, TrendingDown, RefreshCw, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const results = [
    {
        icon: TrendingUp,
        number: "+17%",
        label: "meer haar",
        description: "Na 84 dagen dagelijks gebruik",
        source: "Givaudan 2014",
        link: "#"
    },
    {
        icon: Shield,
        number: "-93%",
        label: "DHT-blokkade",
        description: "Remt hormoon-gerelateerde uitval",
        source: "Lucas Meyer",
        link: "#"
    },
    {
        icon: Layers,
        number: "+59%",
        label: "haardichtheid",
        description: "Zichtbaar voller haar",
        source: "Provital 2015",
        link: "#"
    },
    {
        icon: TrendingDown,
        number: "-60%",
        label: "haaruitval",
        description: "Significante vermindering",
        source: "Baicapil study",
        link: "#"
    },
    {
        icon: RefreshCw,
        number: "+88%",
        label: "groeifase",
        description: "Anageen/telogeen verhouding",
        source: "Capixyl 2024",
        link: "#"
    },
    {
        icon: Sparkles,
        number: "10.000+",
        label: "nieuwe haren",
        description: "In 84 dagen gemeten",
        source: "Redensyl trial",
        link: "#"
    },
]

export default function Results() {
    return (
        <section className="py-16 sm:py-20 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#2D2A26] mb-3">
                        Wat de wetenschap laat zien
                    </h2>
                    <p className="text-[#8A8580]">
                        Gebaseerd op peer-reviewed studies naar onze ingrediënten
                    </p>
                </motion.div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
                    {results.map((result, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white border border-[#E8E4DF] rounded-2xl p-5 sm:p-6 text-center hover:shadow-[0_8px_30px_rgba(196,149,106,0.1)] hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FBF7F2] rounded-xl flex items-center justify-center mx-auto mb-4">
                                <result.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C4956A]" />
                            </div>

                            {/* Number */}
                            <p className="text-2xl sm:text-3xl font-medium text-[#C4956A] mb-1">
                                {result.number}
                            </p>

                            {/* Label */}
                            <p className="text-sm sm:text-base font-medium text-[#2D2A26] mb-2">
                                {result.label}
                            </p>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-[#8A8580] mb-3 leading-relaxed">
                                {result.description}
                            </p>

                            {/* Source */}
                            <span className="inline-block text-xs text-[#6B6560] px-3 py-1.5 bg-[#F8F6F3] rounded-full">
                                {result.source} ↗
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#6B6560]">
                    <span>20.5% actieve concentratie</span>
                    <span className="text-[#E8E4DF]">·</span>
                    <span>6 technologieën</span>
                    <span className="text-[#E8E4DF]">·</span>
                    <span>Hormoonvrij</span>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-xs text-[#9A948E] mt-8 max-w-lg mx-auto">
                    *Resultaten gebaseerd op klinische studies van individuele ingrediënten.
                    Individuele resultaten kunnen variëren. REVIVE is geen medicijn.
                </p>
            </div>
        </section>
    )
}
