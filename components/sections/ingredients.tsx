"use client"

import { motion } from 'framer-motion'

const ingredients = [
    {
        percentage: "5%",
        name: "GHK-Cu",
        subtitle: "Koperpeptide",
        benchmark: "Standaard serums: <1%",
        effect: "Stimuleert collageen & bloedvatvorming",
        result: "5× hogere dosis",
    },
    {
        percentage: "5%",
        name: "Capixyl™",
        subtitle: "DHT-Blokker",
        benchmark: "Klinisch bewezen",
        effect: "Verlaagt ontstekingen rond de haarwortel",
        result: "-93% DHT-schade",
    },
    {
        percentage: "3%",
        name: "Redensyl®",
        subtitle: "Stamcel-activator",
        benchmark: "Beter dan Minoxidil",
        effect: "Activeert slapende stamcellen in de haarwortel",
        result: "+17% haargroei",
    },
    {
        percentage: "4%",
        name: "Baicapil™",
        subtitle: "Dichtheid",
        benchmark: "84 dagen studie",
        effect: "Verlengt de groeifase van het haar",
        result: "+59% haardichtheid",
    },
    {
        percentage: "3%",
        name: "Procapil™",
        subtitle: "Verankering",
        benchmark: "Anti-haaruitval",
        effect: "Versterkt de follikel in de dermis",
        result: "+121% betere hechting",
    },
    {
        percentage: "0.5%",
        name: "AnaGain™",
        subtitle: "Reactivatie",
        benchmark: "Biologische erwtenscheuten",
        effect: "Brengt haren terug naar groeifase",
        result: "78% reactivatie",
    },
]

export default function Ingredients() {
    return (
        <section id="wetenschap" className="py-20 sm:py-24 bg-[#FAFAF9]">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-2">De wetenschap</p>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a1a] tracking-tight mb-4">
                        20.5% Actieve Concentratie
                    </h2>
                    <p className="text-[#666] max-w-lg mx-auto">
                        De meeste serums bevatten 2-5% actieve stoffen. Wij gebruiken klinische maximale doses.
                    </p>
                </motion.div>

                {/* Spec Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white border border-[#eee] rounded-xl p-5 hover:border-[#C4956A]/30 transition-colors"
                        >
                            {/* Percentage Hero */}
                            <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-3xl font-light text-[#C4956A]">{ing.percentage}</span>
                                <div>
                                    <p className="text-sm font-semibold text-[#1a1a1a]">{ing.name}</p>
                                    <p className="text-xs text-[#999]">{ing.subtitle}</p>
                                </div>
                            </div>

                            {/* Benchmark */}
                            <p className="text-xs text-[#888] mb-3 pb-3 border-b border-[#f0f0f0]">
                                {ing.benchmark}
                            </p>

                            {/* Effect */}
                            <p className="text-sm text-[#666] mb-2">{ing.effect}</p>

                            {/* Result Badge */}
                            <span className="inline-block text-xs font-semibold text-[#C4956A] bg-[#C4956A]/10 px-2 py-1 rounded">
                                {ing.result}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs text-[#999] mt-8"
                >
                    Alle claims zijn gebaseerd op peer-reviewed klinische studies van de ingrediënten.
                </motion.p>

            </div>
        </section>
    )
}
