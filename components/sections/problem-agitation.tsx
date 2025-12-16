"use client"

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

const competitors = [
    { name: "Minoxidil", price: "€45", period: "/mnd", cons: ["2× daags", "Stop = uitval"] },
    { name: "Finasteride", price: "€30", period: "/mnd", cons: ["Hormonen", "Bijwerkingen"] },
    { name: "Transplant", price: "€5.000+", period: "", cons: ["Chirurgisch", "Herstel"] },
]

const reviveFeatures = [
    "6 technologieën",
    "Hormoonvrij",
    "Geen bijwerkingen",
    "1× per dag",
    "180 dagen garantie",
]

export default function ProblemAgitation() {
    return (
        <section className="py-20 sm:py-24 bg-[#FAFAF9]">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a1a] tracking-tight">
                        Waarom kiezen klanten REVIVE?
                    </h2>
                </motion.div>

                {/* REVIVE Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#C4956A] shadow-lg mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-medium text-[#C4956A]">REVIVE</h3>
                            <p className="text-2xl font-light text-[#1a1a1a] mt-1">
                                €29<span className="text-sm text-[#999]">/maand</span>
                            </p>
                        </div>
                        <span className="text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full bg-[#C4956A] text-white font-medium">
                            Aanbevolen
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {reviveFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 bg-[#FAFAF9] px-3 py-2 rounded-lg">
                                <Check className="w-4 h-4 text-[#C4956A]" />
                                <span className="text-sm text-[#444]">{feat}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Competitors */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-[10px] text-[#999] uppercase tracking-[0.2em] mb-4 text-center">
                        Alternatieven
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {competitors.map((comp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                                className="bg-white border border-[#eee] rounded-xl p-4 text-center"
                            >
                                <p className="text-sm font-medium text-[#1a1a1a]">{comp.name}</p>
                                <p className="text-base text-[#999] mt-1">{comp.price}<span className="text-xs">{comp.period}</span></p>
                                <div className="mt-3 space-y-1">
                                    {comp.cons.map((con, idx) => (
                                        <p key={idx} className="text-xs text-[#bbb]">{con}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
