"use client"

import { Check, X } from 'lucide-react'

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Headline */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Waarom niet gewoon Minoxidil?
                    </h2>
                    <p className="text-lg text-white/60">
                        Ze werken. Maar ze komen met bagage.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-white/60" />
                                    <th className="px-6 py-4 text-center text-sm font-bold text-emerald-400 uppercase tracking-wide">
                                        REVIVE
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-medium text-white/40 uppercase tracking-wide">
                                        MINOXIDIL
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5">
                                    <td className="px-6 py-5 text-white/80 font-medium">Effectiviteit</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-2xl font-bold text-emerald-400">88.9%</span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-2xl font-bold text-white/40">60%</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-6 py-5 text-white/80 font-medium">Bijwerkingen</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-xl font-bold text-emerald-400">&lt; 5%</span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-xl font-bold text-white/40">11-18%</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-6 py-5 text-white/80 font-medium">Afhankelijkheid</td>
                                    <td className="px-6 py-5 text-center">
                                        <X className="w-6 h-6 text-emerald-400 mx-auto" />
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <Check className="w-6 h-6 text-white/40 mx-auto" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 text-white/80 font-medium">Eerste resultaat</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-lg font-bold text-emerald-400">6 weken</span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-lg font-bold text-white/40">8-12 weken</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Source */}
                <p className="text-center text-white/40 text-sm mt-6">
                    Bron: J. Cosmetology & Trichology, 2019 · 106 deelnemers
                </p>

                {/* Quote */}
                <div className="mt-12 text-center">
                    <p className="text-2xl sm:text-3xl font-serif italic text-white/90">
                        "Daarom ontwikkelden we REVIVE."
                    </p>
                </div>
            </div>
        </section>
    )
}
