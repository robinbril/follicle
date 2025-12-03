"use client"

import { Check, X } from 'lucide-react'

export default function ProblemAgitation() {
    return (
        <section className="py-16 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
                    Waarom niet gewoon Minoxidil of Finasteride?
                </h2>

                <p className="text-xl text-white/70 text-center mb-16 max-w-2xl mx-auto">
                    Ze werken. Maar ze komen met bagage.
                </p>

                {/* Comparison Table */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto pb-2">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-wide">
                                        {/* Empty header */}
                                    </th>
                                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-center text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wide">
                                        REVIVE
                                    </th>
                                    <th className="px-3 py-3 sm:px-6 sm:py-4 text-center text-xs sm:text-sm font-medium text-white/40 uppercase tracking-wide">
                                        Minoxidil
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Effectiviteit */}
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/80 font-medium text-sm sm:text-base">
                                        Effectiviteit
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center whitespace-nowrap">
                                        <span className="text-lg sm:text-2xl font-bold text-emerald-400">88.9%</span>
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center whitespace-nowrap">
                                        <span className="text-lg sm:text-2xl font-bold text-white/40">60%</span>
                                    </td>
                                </tr>

                                {/* Bijwerkingen */}
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/80 font-medium text-sm sm:text-base">
                                        Bijwerkingen
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <span className="text-lg sm:text-2xl font-bold text-emerald-400">&lt; 5%</span>
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <span className="text-lg sm:text-2xl font-bold text-white/40">11-18%</span>
                                    </td>
                                </tr>

                                {/* Afhankelijkheid */}
                                <tr className="border-b border-white/5">
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/80 font-medium text-sm sm:text-base">
                                        Afhankelijkheid
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <div className="flex justify-center">
                                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                                        </div>
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <div className="flex justify-center">
                                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                                        </div>
                                    </td>
                                </tr>

                                {/* Eerste resultaat */}
                                <tr>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-white/80 font-medium text-sm sm:text-base">
                                        Eerste resultaat
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <span className="text-base sm:text-lg font-semibold text-emerald-400">6 weken</span>
                                    </td>
                                    <td className="px-3 py-4 sm:px-6 sm:py-5 text-center">
                                        <span className="text-base sm:text-lg font-semibold text-white/40">8-12 weken</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Source */}
                <p className="text-xs text-white/40 text-center mt-6">
                    Bron: J. Cosmetology & Trichology, 2019 · 106 deelnemers
                </p>

                {/* Transition */}
                <div className="text-center mt-16">
                    <p className="text-2xl font-medium text-white italic">
                        "Daarom ontwikkelden we REVIVE."
                    </p>
                </div>
            </div>
        </section>
    )
}
