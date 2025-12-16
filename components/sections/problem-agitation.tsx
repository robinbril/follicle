"use client"

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

const competitors = [
    { name: "Minoxidil", price: "€45", cons: ["2× daags aanbrengen", "Stop = direct uitval"] },
    { name: "Finasteride", price: "€30", cons: ["Hormoonverstorend", "Bekende bijwerkingen"] },
    { name: "Transplant", price: "€5.000+", cons: ["Chirurgische ingreep", "Maanden herstel"] },
]

const reviveFeatures = [
    "6 gepatenteerde technologieën",
    "Zonder hormonen",
    "Geen bijwerkingen",
    "1× per dag, 30 sec",
    "180 dagen garantie",
]

export default function ProblemAgitation() {
    return (
        <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-[#FAFAF9]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-14"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-3">
                        De slimme keuze
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-light text-[#1a1a1a] tracking-tight">
                        Waarom 847+ klanten kozen voor REVIVE
                    </h2>
                </motion.div>

                {/* REVIVE Card - Premium */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="bg-[#1a1a1a] rounded-3xl p-8 sm:p-10 mb-6 shadow-2xl"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-medium text-white">REVIVE</h3>
                                <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#C4956A] text-white font-medium">
                                    Aanbevolen
                                </span>
                            </div>
                            <p className="flex items-baseline gap-1">
                                <span className="text-4xl font-light text-[#C4956A]">€29</span>
                                <span className="text-white/50">/maand</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
                            {reviveFeatures.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-5 h-5 rounded-full bg-[#C4956A]/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-[#C4956A]" />
                                    </div>
                                    <span className="text-sm text-white/80">{feat}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Competitors - Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-[10px] text-[#999] uppercase tracking-[0.2em] mb-4 text-center">
                        Alternatieven
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                        {competitors.map((comp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                className="bg-white border border-[#eee] rounded-2xl p-5 text-center hover:border-[#ddd] transition-colors"
                            >
                                <p className="text-sm font-medium text-[#1a1a1a] mb-1">{comp.name}</p>
                                <p className="text-lg text-[#999] mb-3">{comp.price}<span className="text-xs">/mnd</span></p>
                                <div className="space-y-1.5">
                                    {comp.cons.map((con, idx) => (
                                        <div key={idx} className="flex items-center justify-center gap-1.5 text-xs text-[#999]">
                                            <X className="w-3 h-3 text-[#ddd]" />
                                            {con}
                                        </div>
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
