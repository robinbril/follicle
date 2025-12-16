"use client"

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const competitors = [
    { name: "Minoxidil", price: "€45/mnd", cons: ["2× daags", "Stop = uitval"] },
    { name: "Finasteride", price: "€30/mnd", cons: ["Hormonen", "Bijwerkingen"] },
    { name: "Transplant", price: "€5.000+", cons: ["Chirurgisch", "Herstel"] },
]

const reviveFeatures = [
    "6 gepatenteerde ingrediënten",
    "Hormoonvrij",
    "Geen bijwerkingen",
    "1× per dag",
    "180 dagen garantie",
]

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-[#FDFCFA] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                {/* Smaller, elegant header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#2D2A26] mb-3">
                        Waarom kiezen 847 klanten REVIVE?
                    </h2>
                </motion.div>

                {/* REVIVE FIRST - Hero Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 sm:p-10 border border-[#C4956A] shadow-[0_8px_30px_rgba(196,149,106,0.1)] mb-10"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-[#C4956A] mb-1">REVIVE</h3>
                            <p className="text-3xl font-medium text-[#2D2A26]">€29<span className="text-lg text-[#9A948E]">/maand</span></p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {reviveFeatures.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                                    <span className="text-sm text-[#4A4540]">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Competitors - Small, secondary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xs text-[#9A948E] uppercase tracking-widest mb-4">Andere opties</p>
                    <div className="grid grid-cols-3 gap-3">
                        {competitors.map((comp, i) => (
                            <div key={i} className="bg-white/50 border border-[#E8E4DF] rounded-xl p-4 text-center">
                                <p className="text-xs text-[#6B6560] font-medium mb-1">{comp.name}</p>
                                <p className="text-sm text-[#9A948E] mb-2">{comp.price}</p>
                                <div className="space-y-1">
                                    {comp.cons.map((con, idx) => (
                                        <p key={idx} className="text-xs text-[#9A948E]">{con}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
