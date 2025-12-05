"use client"

import { Check, X } from 'lucide-react'

const treatments = [
    {
        name: "REVIVE",
        price: "€29/mnd",
        highlight: true,
        features: ["6 ingrediënten", "Hormoonvrij", "Geen bijwerkingen"]
    },
    {
        name: "Minoxidil",
        price: "€45/mnd",
        highlight: false,
        features: ["Stop = uitval", "2x per dag", "Hoofdhuid irritatie"]
    },
    {
        name: "Finasteride",
        price: "€30/mnd",
        highlight: false,
        features: ["Hormoonblokker", "Bijwerkingen libido", "Dagelijks pillen"]
    },
    {
        name: "Transplant",
        price: "€5.000+",
        highlight: false,
        features: ["Chirurgisch", "Herstelperiode", "Eenmalig"]
    },
]

export default function ProblemAgitation() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-[#091412] to-[#0D1F17] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Honest Hook */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        6 ingrediënten. 24 studies. 0 hormonen.
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Elke keuze heeft voor- en nadelen. Hier is wat REVIVE anders maakt.
                    </p>
                </div>

                {/* Treatment Comparison */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {treatments.map((t, i) => (
                        <div
                            key={i}
                            className={`relative p-5 md:p-6 rounded-xl border transition-all ${t.highlight
                                ? 'bg-gradient-to-b from-emerald-900/40 to-emerald-900/20 border-emerald-500/50 shadow-lg shadow-emerald-500/20'
                                : 'bg-white/5 border-white/10 opacity-90 hover:opacity-100'
                                }`}
                        >
                            {t.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Aanbevolen
                                </div>
                            )}
                            <div className="mb-4">
                                <h3 className={`text-lg md:text-xl font-bold mb-1 ${t.highlight ? 'text-emerald-400' : 'text-white/90'}`}>
                                    {t.name}
                                </h3>
                                <p className="text-white/50 text-sm">{t.price}</p>
                            </div>
                            <ul className="space-y-2">
                                {t.features.map((feature, idx) => (
                                    <li key={idx} className={`text-xs md:text-sm ${t.highlight ? 'text-white/80' : 'text-white/60'}`}>
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
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
