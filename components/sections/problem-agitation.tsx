"use client"

import { Check, X, Star, Leaf, Shield, AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        name: "Prijs",
        revive: { text: "€0,66/dag", sub: "€20/mnd" },
        minoxidil: "€45/mnd",
        finasteride: "€30/mnd",
        transplant: "€3.000+"
    },
    {
        name: "Hormoonvrij",
        revive: { icon: "leaf", text: "100% Natuurlijk" },
        minoxidil: true,
        finasteride: false,
        transplant: true
    },
    {
        name: "Risico's",
        revive: { safe: true, text: "Geen bijwerkingen" },
        minoxidil: { warn: true, text: "Vettig haar & Irritatie" },
        finasteride: { danger: true, text: "Libido verlies" },
        transplant: { warn: true, text: "Littekens & Pijn" }
    },
    {
        name: "Garantie",
        revive: { icon: "shield", text: "180 dagen geld terug" },
        minoxidil: false,
        finasteride: false,
        transplant: false
    },
    {
        name: "Effectiviteit",
        revive: "96%",
        minoxidil: "60%",
        finasteride: "55%",
        transplant: { text: "Permanent", sub: "(Invasief)" }
    },
]

const verdict = {
    revive: { stars: 5, label: "Slimste Keuze" },
    minoxidil: { stars: 3, label: "Gedoe" },
    finasteride: { stars: 2, label: "Risicovol" },
    transplant: { stars: 4, label: "Duur" }
}

export default function ProblemAgitation() {
    const renderCell = (value: any, isRevive: boolean = false) => {
        // Complex object
        if (typeof value === 'object' && value !== null) {
            if (value.icon === 'leaf') {
                return (
                    <div className="flex flex-col items-center gap-1">
                        <Leaf className="w-5 h-5 text-green-500" />
                        <span className="text-xs text-green-600">{value.text}</span>
                    </div>
                )
            }
            if (value.icon === 'shield') {
                return (
                    <div className="flex flex-col items-center gap-1">
                        <Shield className="w-5 h-5 text-[#C4956A]" />
                        <span className="text-xs text-[#C4956A]">{value.text}</span>
                    </div>
                )
            }
            if (value.safe) {
                return (
                    <div className="flex flex-col items-center gap-1">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-xs text-green-600">{value.text}</span>
                    </div>
                )
            }
            if (value.danger) {
                return (
                    <div className="flex flex-col items-center gap-1">
                        <X className="w-5 h-5 text-red-500" />
                        <span className="text-xs text-red-400">{value.text}</span>
                    </div>
                )
            }
            if (value.warn) {
                return (
                    <div className="flex flex-col items-center gap-1">
                        <AlertTriangle className="w-4 h-4 text-orange-400" />
                        <span className="text-xs text-orange-400">{value.text}</span>
                    </div>
                )
            }
            if (value.sub) {
                return (
                    <div className="flex flex-col items-center">
                        <span className={`text-sm font-medium ${isRevive ? 'text-[#C4956A]' : 'text-[#666]'}`}>{value.text}</span>
                        <span className="text-xs text-[#999]">{value.sub}</span>
                    </div>
                )
            }
        }

        // Boolean
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-5 h-5 text-green-500 mx-auto" />
            ) : (
                <X className="w-5 h-5 text-red-400 mx-auto" />
            )
        }

        // String - check if it's a percentage for styling
        const isPercentage = typeof value === 'string' && value.includes('%')
        const isHighPercentage = isPercentage && parseInt(value) > 80

        return (
            <span className={`text-sm ${isRevive ? 'text-[#C4956A] font-medium' :
                    isHighPercentage ? 'text-[#666] font-medium' : 'text-[#999]'
                }`}>
                {value}
            </span>
        )
    }

    const renderStars = (count: number, highlight: boolean) => (
        <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-3 h-3 ${i < count
                            ? highlight ? 'fill-[#C4956A] text-[#C4956A]' : 'fill-[#ccc] text-[#ccc]'
                            : 'text-[#e8e8e8]'
                        }`}
                />
            ))}
        </div>
    )

    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-3">
                        De feiten
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-light text-[#1a1a1a] tracking-tight">
                        Vergelijk en kies slim
                    </h2>
                </motion.div>

                {/* Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <table className="w-full text-center">
                        <thead>
                            <tr className="border-b border-[#eee]">
                                <th className="py-4 px-3 text-left w-[140px]"></th>
                                <th className="py-4 px-3 bg-gradient-to-b from-[#FFFBF7] to-[#FFF8F2] rounded-t-xl">
                                    <span className="text-[#C4956A] font-semibold text-lg">REVIVE</span>
                                </th>
                                <th className="py-4 px-3 text-sm text-[#888] font-normal">Minoxidil</th>
                                <th className="py-4 px-3 text-sm text-[#888] font-normal">Finasteride</th>
                                <th className="py-4 px-3 text-sm text-[#888] font-normal hidden sm:table-cell">Transplant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feat, i) => (
                                <tr key={feat.name} className={i % 2 === 0 ? 'bg-[#FAFAFA]' : ''}>
                                    <td className="py-4 px-3 text-left text-sm text-[#555] font-medium">{feat.name}</td>
                                    <td className="py-4 px-3 bg-[#FFFBF7]">{renderCell(feat.revive, true)}</td>
                                    <td className="py-4 px-3">{renderCell(feat.minoxidil)}</td>
                                    <td className="py-4 px-3">{renderCell(feat.finasteride)}</td>
                                    <td className="py-4 px-3 hidden sm:table-cell">{renderCell(feat.transplant)}</td>
                                </tr>
                            ))}

                            {/* Verdict Row */}
                            <tr className="border-t-2 border-[#eee] bg-[#FAFAFA]">
                                <td className="py-5 px-3 text-left text-sm text-[#555] font-semibold">Oordeel</td>
                                <td className="py-5 px-3 bg-[#FFFBF7] rounded-b-xl">
                                    <div className="flex flex-col items-center gap-1">
                                        {renderStars(verdict.revive.stars, true)}
                                        <span className="text-xs font-semibold text-[#C4956A]">{verdict.revive.label}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3">
                                    <div className="flex flex-col items-center gap-1">
                                        {renderStars(verdict.minoxidil.stars, false)}
                                        <span className="text-xs text-[#999]">{verdict.minoxidil.label}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3">
                                    <div className="flex flex-col items-center gap-1">
                                        {renderStars(verdict.finasteride.stars, false)}
                                        <span className="text-xs text-[#999]">{verdict.finasteride.label}</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3 hidden sm:table-cell">
                                    <div className="flex flex-col items-center gap-1">
                                        {renderStars(verdict.transplant.stars, false)}
                                        <span className="text-xs text-[#999]">{verdict.transplant.label}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

            </div>
        </section>
    )
}
