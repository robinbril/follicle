"use client"

import { Check, X } from 'lucide-react'

const treatments = [
    {
        name: "REVIVE",
        price: "€29/mnd",
        result: "+35% dichtheid",
        subtext: "Binnen 90 dagen",
        highlight: true,
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        result: "+20% dichtheid",
        subtext: "Stop = verlies",
        highlight: false,
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        result: "+15% dichtheid",
        subtext: "Hormoonverstoorder",
        highlight: false,
    },
    {
        name: "Transplant",
        price: "€5.000+",
        result: "Eenmalig",
        subtext: "Chirurgisch",
        highlight: false,
    },
    {
        name: "Niets doen",
        price: "€0",
        result: "-10% per jaar",
        subtext: "Progressief verlies",
        highlight: false,
    },
]

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Result Hook */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Wat bereik je met REVIVE?
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Klinisch gemeten resultaten na 90 dagen gebruik.
                    </p>
                </div>

                {/* Treatment Spectrum */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mb-8 md:mb-12">
                    {treatments.map((t, i) => (
                        <div
                            key={i}
                            className={`relative p-4 md:p-6 rounded-xl border transition-all flex flex-col justify-between ${t.highlight
                                ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/20 border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/20'
                                : 'bg-white/5 border-white/10 opacity-80 hover:opacity-100'
                                }`}
                        >
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                    Aanbevolen
                                </div>
                            )}
                            <div className="mb-3">
                                <h3 className={`text-base md:text-lg font-bold mb-1 ${t.highlight ? 'text-emerald-400' : 'text-white/90'}`}>
                                    {t.name}
                                </h3>
                                <p className="text-white/50 text-xs md:text-sm">{t.price}</p>
                            </div>
                            <div className="mt-auto">
                                <p className={`text-lg md:text-xl font-bold mb-1 ${t.highlight ? 'text-emerald-400' : 'text-white/70'}`}>
                                    {t.result}
                                </p>
                                <p className={`text-xs md:text-sm font-medium ${t.highlight ? 'text-emerald-400/70' : 'text-white/40'}`}>
                                    {t.subtext}
                                </p>
                            </div>
                        </div>))}
                </div>



                {/* Scepticism acknowledgment */}
                <div className="mt-8 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">

                    <p className="text-amber-100/90 text-center leading-relaxed">
                        <span className="text-amber-50 font-medium">"Klinisch bewezen" — je hebt het 400x gehoord.</span>
                        <br className="hidden sm:block" />
                        Daarom hebben we geen marketingclaims. Alleen{' '}
                        <span className="text-amber-300 font-semibold">peer-reviewed studies</span>.
                        24 in totaal. Klik. Lees. Oordeel zelf.
                    </p>
                </div>
            </div>
        </section>
    )
}
