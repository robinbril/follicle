"use client"

import { Check, X, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-sm text-[#C4956A] font-medium mb-2">De feiten</p>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#1a1a1a] tracking-tight">
                        Vergelijk en kies slim
                    </h2>
                </motion.div>

                {/* Compact Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto"
                >
                    <table className="w-full text-center text-sm">
                        <thead>
                            <tr className="border-b border-[#eee]">
                                <th className="py-3 px-2 text-left text-[#999] font-normal w-[120px]"></th>
                                <th className="py-3 px-2 bg-[#FFFBF7] text-[#C4956A] font-semibold rounded-t-lg">REVIVE</th>
                                <th className="py-3 px-2 text-[#888] font-normal">Minoxidil</th>
                                <th className="py-3 px-2 text-[#888] font-normal">Finasteride</th>
                                <th className="py-3 px-2 text-[#888] font-normal hidden sm:table-cell">Transplant</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#666]">
                            {/* Prijs */}
                            <tr className="border-b border-[#f5f5f5]">
                                <td className="py-3 px-2 text-left text-[#555]">Prijs</td>
                                <td className="py-3 px-2 bg-[#FFFBF7] text-[#C4956A] font-semibold">€0,66/dag</td>
                                <td className="py-3 px-2">€45/mnd</td>
                                <td className="py-3 px-2">€30/mnd</td>
                                <td className="py-3 px-2 hidden sm:table-cell">€3.000+</td>
                            </tr>

                            {/* Hormoonvrij */}
                            <tr className="border-b border-[#f5f5f5] bg-[#FAFAFA]">
                                <td className="py-3 px-2 text-left text-[#555]">Hormoonvrij</td>
                                <td className="py-3 px-2 bg-[#FFFBF7]"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                <td className="py-3 px-2"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                                <td className="py-3 px-2"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                                <td className="py-3 px-2 hidden sm:table-cell"><Check className="w-4 h-4 text-green-500 mx-auto" /></td>
                            </tr>

                            {/* Bijwerkingen */}
                            <tr className="border-b border-[#f5f5f5]">
                                <td className="py-3 px-2 text-left text-[#555]">Bijwerkingen</td>
                                <td className="py-3 px-2 bg-[#FFFBF7] text-green-600 font-medium">Geen</td>
                                <td className="py-3 px-2 text-orange-500">Vettig haar</td>
                                <td className="py-3 px-2 text-red-500">Libido verlies</td>
                                <td className="py-3 px-2 hidden sm:table-cell text-orange-500">Pijn & Herstel</td>
                            </tr>

                            {/* Garantie */}
                            <tr className="border-b border-[#f5f5f5] bg-[#FAFAFA]">
                                <td className="py-3 px-2 text-left text-[#555]">Garantie</td>
                                <td className="py-3 px-2 bg-[#FFFBF7] text-[#C4956A] font-medium">180 dagen</td>
                                <td className="py-3 px-2"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                                <td className="py-3 px-2"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                                <td className="py-3 px-2 hidden sm:table-cell"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                            </tr>

                            {/* Score */}
                            <tr>
                                <td className="py-3 px-2 text-left text-[#555]">Score</td>
                                <td className="py-3 px-2 bg-[#FFFBF7] rounded-b-lg">
                                    <div className="flex justify-center gap-0.5">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#C4956A] text-[#C4956A]" />)}
                                    </div>
                                </td>
                                <td className="py-3 px-2">
                                    <div className="flex justify-center gap-0.5">
                                        {[...Array(3)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#ccc] text-[#ccc]" />)}
                                    </div>
                                </td>
                                <td className="py-3 px-2">
                                    <div className="flex justify-center gap-0.5">
                                        {[...Array(2)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#ccc] text-[#ccc]" />)}
                                    </div>
                                </td>
                                <td className="py-3 px-2 hidden sm:table-cell">
                                    <div className="flex justify-center gap-0.5">
                                        {[...Array(3)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#ccc] text-[#ccc]" />)}
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
