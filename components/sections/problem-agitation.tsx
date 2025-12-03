"use client"

import { HeartCrack, RotateCcw, Zap } from 'lucide-react'

export default function ProblemAgitation() {
    return (
        <section className="py-24 bg-[#091412] text-white relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        HET HUIDIGE LANDSCHAP
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white">
                    De "gouden standaard" <br />
                    <span className="text-gray-400">heeft een donkere kant.</span>
                </h2>

                <p className="text-center text-lg text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
                    Minoxidil en Finasteride zijn effectief, maar komen vaak met een prijs die veel mannen liever niet betalen.
                </p>

                {/* 3 Pain cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                        <div className="w-12 h-12 mb-6 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                            <HeartCrack className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Seksuele Bijwerkingen</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Een klein maar significant percentage gebruikers ervaart <span className="text-white font-medium">libidoverlies</span> en andere ongewenste effecten.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                        <div className="w-12 h-12 mb-6 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                            <RotateCcw className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Levenslange Afhankelijkheid</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Stop je met de behandeling? Dan verlies je vaak <span className="text-white font-medium">binnen enkele maanden</span> al je geboekte resultaat.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-colors group">
                        <div className="w-12 h-12 mb-6 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                            <Zap className="w-6 h-6 text-emerald-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Fysiek Ongemak</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Van hoofdpijn tot huidirritatie. Veel mannen stoppen voortijdig vanwege <span className="text-white font-medium">dagelijkse ongemakken</span>.
                        </p>
                    </div>
                </div>

                {/* Transition line */}
                <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-medium text-white">
                        Wij geloven dat je niet hoeft te kiezen tussen <br />
                        <span className="text-emerald-500">je haar</span> en <span className="text-emerald-500">je gezondheid</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
