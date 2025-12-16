"use client"

import { Check, X, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        name: "Prijs",
        revive: "€20/mnd",
        minoxidil: "€45/mnd",
        finasteride: "€30/mnd",
        transplant: "€3.000+"
    },
    {
        name: "Hormoonvrij",
        revive: true,
        minoxidil: true,
        finasteride: false,
        transplant: true
    },
    {
        name: "Bijwerkingen",
        revive: "Geen",
        minoxidil: "Hoofdpijn",
        finasteride: "DHT ↓",
        transplant: "Herstel"
    },
    {
        name: "Garantie",
        revive: true,
        minoxidil: false,
        finasteride: false,
        transplant: false
    },
]

export default function ProblemAgitation() {
    const renderCell = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-5 h-5 text-green-500 mx-auto" />
            ) : (
                <X className="w-5 h-5 text-red-400 mx-auto" />
            )
        }
        const isNegative = ['Hoofdpijn', 'DHT ↓', 'Herstel', '€45/mnd', '€30/mnd', '€3.000+'].includes(value)
        return (
            <span className={`text-sm ${isNegative ? 'text-[#999]' : 'text-[#C4956A] font-medium'}`}>
                {value}
            </span>
        )
    }

    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">

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
                    <h2 className="text-3xl sm:text-4xl font-light text-[#1a1a1a] tracking-tight mb-4">
                        Vergelijk en kies slim
                    </h2>
                </motion.div>

                {/* Clean Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <table className="w-full text-center border-collapse">
                        <thead>
                            <tr>
                                <th className="py-4 px-3 text-left text-sm text-[#999] font-normal"></th>
                                <th className="py-4 px-3">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[#C4956A] font-semibold">REVIVE</span>
                                        <div className="flex mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-2.5 h-2.5 fill-[#C4956A] text-[#C4956A]" />
                                            ))}
                                        </div>
                                    </div>
                                </th>
                                <th className="py-4 px-3 text-sm text-[#666] font-normal">Minoxidil</th>
                                <th className="py-4 px-3 text-sm text-[#666] font-normal">Finasteride</th>
                                <th className="py-4 px-3 text-sm text-[#666] font-normal hidden sm:table-cell">Transplant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feat, i) => (
                                <tr key={feat.name} className={i % 2 === 0 ? 'bg-[#FAFAFA]' : ''}>
                                    <td className="py-4 px-3 text-left text-sm text-[#444]">{feat.name}</td>
                                    <td className="py-4 px-3 bg-[#FFFBF7]">{renderCell(feat.revive)}</td>
                                    <td className="py-4 px-3">{renderCell(feat.minoxidil)}</td>
                                    <td className="py-4 px-3">{renderCell(feat.finasteride)}</td>
                                    <td className="py-4 px-3 hidden sm:table-cell">{renderCell(feat.transplant)}</td>
                                </tr>
                            ))}
                            {/* Satisfaction */}
                            <tr className="border-t border-[#eee]">
                                <td className="py-4 px-3 text-left text-sm text-[#444]">Effectiviteit</td>
                                <td className="py-4 px-3 bg-[#FFFBF7] text-[#C4956A] font-medium">96%</td>
                                <td className="py-4 px-3 text-[#999]">60%</td>
                                <td className="py-4 px-3 text-[#999]">55%</td>
                                <td className="py-4 px-3 hidden sm:table-cell text-[#666] font-medium">100%</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-[#888] mt-8"
                >
                    Transplantatie werkt, maar kost €3.000+. REVIVE biedt de beste <span className="text-[#C4956A]">prijs-kwaliteit</span>.
                </motion.p>

            </div>
        </section>
    )
}
