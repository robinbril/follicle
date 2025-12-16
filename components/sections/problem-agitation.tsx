"use client"

import { Check, X, Star, TrendingUp, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        name: "Prijs",
        revive: "€20/mnd",
        minoxidil: "€45/mnd",
        finasteride: "€30/mnd",
        transplant: "€3.000+",
        reviveWin: true
    },
    {
        name: "Hormoonvrij",
        revive: true,
        minoxidil: true,
        finasteride: false,
        transplant: true,
        reviveWin: true
    },
    {
        name: "Geen bijwerkingen",
        revive: true,
        minoxidil: false,
        finasteride: false,
        transplant: false,
        reviveWin: true
    },
    {
        name: "Gebruiksgemak",
        revive: "1× daags",
        minoxidil: "2× daags",
        finasteride: "1× daags",
        transplant: "Eenmalig",
        reviveWin: true
    },
    {
        name: "Geld-terug garantie",
        revive: true,
        minoxidil: false,
        finasteride: false,
        transplant: "partial",
        reviveWin: true
    },
]

const satisfaction = {
    revive: 96,
    minoxidil: 60,
    finasteride: 55,
    transplant: 92
}

export default function ProblemAgitation() {
    const renderCell = (value: boolean | string, isRevive: boolean = false) => {
        if (typeof value === 'string') {
            if (value === 'partial') {
                return <HelpCircle className="w-5 h-5 text-[#999]" />
            }
            return (
                <span className={`text-sm font-medium ${isRevive ? 'text-[#C4956A]' : 'text-[#666]'}`}>
                    {value}
                </span>
            )
        }
        return value ? (
            <Check className={`w-5 h-5 ${isRevive ? 'text-green-500' : 'text-green-400'}`} />
        ) : (
            <X className="w-5 h-5 text-red-400" />
        )
    }

    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-3">
                        De feiten
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a1a] tracking-tight mb-4">
                        Vergelijk en kies slim
                    </h2>
                    <p className="text-[#666] max-w-md mx-auto">
                        Wij verkopen geen valse hoop. Hier zijn de eerlijke alternatieven.
                    </p>
                </motion.div>

                {/* Comparison Matrix Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="overflow-x-auto"
                >
                    <table className="w-full">
                        {/* Header Row */}
                        <thead>
                            <tr className="border-b border-[#eee]">
                                <th className="text-left py-4 px-3 text-sm font-medium text-[#999]">
                                    Feature
                                </th>
                                <th className="py-4 px-3 text-center bg-[#FFFAF5] rounded-t-lg">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[#C4956A] font-bold text-lg">REVIVE</span>
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 fill-[#C4956A] text-[#C4956A]" />
                                            ))}
                                        </div>
                                    </div>
                                </th>
                                <th className="py-4 px-3 text-center text-sm font-medium text-[#666]">
                                    Minoxidil
                                </th>
                                <th className="py-4 px-3 text-center text-sm font-medium text-[#666]">
                                    Finasteride
                                </th>
                                <th className="py-4 px-3 text-center text-sm font-medium text-[#666] hidden sm:table-cell">
                                    Transplant
                                </th>
                            </tr>
                        </thead>

                        {/* Body Rows */}
                        <tbody>
                            {features.map((feat, i) => (
                                <motion.tr
                                    key={feat.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className={`border-b border-[#f5f5f5] hover:bg-[#FAFAF9] transition-colors ${i % 2 === 1 ? 'bg-[#FAFAFA]' : ''
                                        }`}
                                >
                                    <td className="py-4 px-3 text-sm text-[#444] font-medium">
                                        {feat.name}
                                    </td>
                                    <td className="py-4 px-3 bg-[#FFFAF5]">
                                        <div className="flex justify-center">
                                            {renderCell(feat.revive, true)}
                                        </div>
                                    </td>
                                    <td className="py-4 px-3 text-center">
                                        {renderCell(feat.minoxidil)}
                                    </td>
                                    <td className="py-4 px-3 text-center">
                                        {renderCell(feat.finasteride)}
                                    </td>
                                    <td className="py-4 px-3 text-center hidden sm:table-cell">
                                        {renderCell(feat.transplant)}
                                    </td>
                                </motion.tr>
                            ))}

                            {/* Satisfaction Row */}
                            <motion.tr
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="bg-[#FAFAF9]"
                            >
                                <td className="py-5 px-3 text-sm text-[#444] font-medium flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-[#C4956A]" />
                                    Tevredenheid
                                </td>
                                <td className="py-5 px-3 bg-[#FFFAF5] rounded-b-lg">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-full bg-[#e8e8e8] rounded-full h-2 max-w-[80px]">
                                            <div
                                                className="bg-gradient-to-r from-[#C4956A] to-[#d4a57a] h-2 rounded-full"
                                                style={{ width: `${satisfaction.revive}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-[#C4956A]">{satisfaction.revive}%</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3 text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-full bg-[#e8e8e8] rounded-full h-2 max-w-[80px]">
                                            <div
                                                className="bg-[#bbb] h-2 rounded-full"
                                                style={{ width: `${satisfaction.minoxidil}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-[#999]">{satisfaction.minoxidil}%</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3 text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-full bg-[#e8e8e8] rounded-full h-2 max-w-[80px]">
                                            <div
                                                className="bg-[#bbb] h-2 rounded-full"
                                                style={{ width: `${satisfaction.finasteride}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-[#999]">{satisfaction.finasteride}%</span>
                                    </div>
                                </td>
                                <td className="py-5 px-3 text-center hidden sm:table-cell">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-full bg-[#e8e8e8] rounded-full h-2 max-w-[80px]">
                                            <div
                                                className="bg-[#bbb] h-2 rounded-full"
                                                style={{ width: `${satisfaction.transplant}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-[#999]">{satisfaction.transplant}%</span>
                                    </div>
                                </td>
                            </motion.tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-[#888]">
                        Transplantatie is effectief maar duur. REVIVE biedt de beste <span className="text-[#C4956A] font-medium">prijs-kwaliteit</span> verhouding.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}
