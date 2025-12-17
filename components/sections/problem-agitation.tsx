"use client"

import { Check, Minus } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-white overflow-hidden">
            <div className="max-w-2xl mx-auto px-4 sm:px-6">

                {/* Header - Clean */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] tracking-tight">
                        Waarom REVIVE?
                    </h2>
                </motion.div>

                {/* Clean Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-[#E8E4DF] rounded-2xl overflow-hidden"
                >
                    <table className="w-full text-center text-sm">
                        <thead>
                            <tr className="border-b border-[#E8E4DF]">
                                <th className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[9px] sm:text-xs uppercase tracking-wider w-[26%] sm:w-auto whitespace-nowrap"></th>
                                <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#C4956A] font-bold border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">REVIVE</th>
                                <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#888] font-medium text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">Minoxidil</th>
                                <th className="py-3 sm:py-4 px-2 sm:px-3 text-[#888] font-medium text-[11px] sm:text-sm w-[24.6%] sm:w-auto tracking-tight whitespace-nowrap">Finasteride</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#4A4540]">
                            {/* Prijs - Consistent format */}
                            <tr className="border-b border-[#F0EDE9]">
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap">Prijs</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-[#C4956A] font-semibold text-[11px] sm:text-sm whitespace-nowrap">€29/mnd</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-[11px] sm:text-sm whitespace-nowrap">€45/mnd</td>
                                <td className="py-4 px-2 sm:px-3 text-[11px] sm:text-sm whitespace-nowrap">€30/mnd</td>
                            </tr>

                            {/* Hormoonvrij */}
                            <tr className="border-b border-[#F0EDE9]">
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap tracking-tight">Hormoonvrij</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA]">
                                    <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C4956A] mx-auto" />
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3">
                                    <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C4956A] mx-auto" />
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3">
                                    <Minus className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4D0CC] mx-auto" />
                                </td>
                            </tr>

                            {/* Receptvrij */}
                            <tr className="border-b border-[#F0EDE9]">
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap tracking-tight">Receptvrij</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA]">
                                    <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C4956A] mx-auto" />
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3">
                                    <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C4956A] mx-auto" />
                                </td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3">
                                    <Minus className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#D4D0CC] mx-auto" />
                                </td>
                            </tr>

                            {/* Bijwerkingen */}
                            <tr className="border-b border-[#F0EDE9]">
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap tracking-tight">Bijwerkingen</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-green-600 font-medium text-[11px] sm:text-sm whitespace-nowrap">Geen</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-red-500 text-[11px] sm:text-sm whitespace-nowrap">Hoofdpijn</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-red-500 text-[11px] sm:text-sm whitespace-nowrap">Libido</td>
                            </tr>

                            {/* Garantie */}
                            <tr>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-left text-[#6B6560] font-medium text-[11px] sm:text-sm whitespace-nowrap tracking-tight">Garantie</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 border-l-[3px] border-l-[#C4956A] bg-[#FDFCFA] text-[#C4956A] font-semibold text-[11px] sm:text-sm whitespace-nowrap">180 dagen</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-[#D4D0CC] text-[11px] sm:text-sm whitespace-nowrap">—</td>
                                <td className="py-3 sm:py-4 px-2 sm:px-3 text-[#D4D0CC] text-[11px] sm:text-sm whitespace-nowrap">—</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs text-[#999] text-center mt-6"
                >
                    * Resultaten kunnen per persoon variëren
                </motion.p>

            </div>
        </section>
    )
}
