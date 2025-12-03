"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Dna, ShieldBan, Anchor, Sprout, Infinity, CheckCircle2, FlaskConical, Heart, Atom, Info } from 'lucide-react'
import IngredientInfoModal from '@/components/ingredient-info-modal'

export default function Solution() {
    const [selectedIngredient, setSelectedIngredient] = useState<number | null>(null)

    const ingredientsData = [
        {
            name: "REDENSYL",
            percentage: "3%",
            description: "Activeert follikel stamcellen",
            icon: Dna,
            scientificData: {
                name: "REDENSYL",
                category: "Stamcelactivator",
                howItWorks: "Activeert de stamcellen in de haarbulge (ORSc) die verantwoordelijk zijn voor het starten van nieuwe haargroei. Bevat DHQG en EGCG2 — gepatenteerde polyfenolen die de anagene (groei)fase initiëren.",
                clinicalResults: [
                    "+17% meer haar na 84 dagen",
                    "+10.000 nieuwe haren gemiddeld",
                    "+9% toename in groeiende haren",
                    "85% van deelnemers zag zichtbare verbetering"
                ],
                source: {
                    study: "Givaudan Clinical Trial, 2014",
                    details: "26 mannen met alopecia graad 3-4, 84 dagen",
                    link: "https://pubmed.ncbi.nlm.nih.gov/32473084/"
                }
            }
        },
        {
            name: "CAPIXYL",
            percentage: "5%",
            description: "Remt DHT, versterkt verankering",
            icon: ShieldBan,
            scientificData: {
                name: "CAPIXYL",
                category: "DHT-Blokker + Follikelversterker",
                howItWorks: "Capixyl combineert Acetyl Tetrapeptide-3 met rode klaver extract (Biochanin A). Het remt DHT-productie met 93% (in-vitro), versterkt de verankering van haarfollikels door ECM-eiwitten te stimuleren, en vermindert ontstekingen rond de follikel.",
                clinicalResults: [
                    "+46% verbetering anagen/telogen ratio (4 maanden)",
                    "93% DHT-reductie via Biochanin A (in-vitro)",
                    "88.9% zag verbetering vs 60% met Minoxidil (RCP combinatie)",
                    "Vergelijkbare effectiviteit met Minoxidil, zonder bijwerkingen"
                ],
                source: {
                    study: "J. Clinical & Aesthetic Dermatology, 2020 + 4 ondersteunende studies",
                    details: "n=32, 24 weken, triple-blind RCT (hoofdstudie)",
                    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7840088/"
                }
            }
        },
        {
            name: "PROCAPIL",
            percentage: "3%",
            description: "Verbetert bloedtoevoer",
            icon: Anchor,
            scientificData: {
                name: "PROCAPIL",
                category: "Verankering + Circulatie",
                howItWorks: "Procapil bestaat uit drie actieve stoffen: Biotinyl-GHK (verankering), Apigenin (vaatverwijding), en Oleanolzuur (DHT-remming). Het verbetert de bloedtoevoer naar follikels en voorkomt follikelveroudering.",
                clinicalResults: [
                    "67% significante verbetering in 4 maanden",
                    "58% reductie in haaruitval",
                    "+12.8% anagen/telogen ratio in 12 weken",
                    "+31.6% haargroei in 60 dagen (combinatiestudie)"
                ],
                source: {
                    study: "Sederma Labs + J. Cosmetic Dermatology, 2024 + 4 studies",
                    details: "n=35, 4 maanden, placebo-controlled (hoofdstudie)",
                    link: "https://pubmed.ncbi.nlm.nih.gov/37990760/"
                }
            }
        },
        {
            name: "ANAGAIN",
            percentage: "3%",
            description: "Verlengt groeifase",
            icon: Sprout,
            scientificData: {
                name: "ANAGAIN",
                category: "Groeifactor Stimulator",
                howItWorks: "Anagain is een extract van biologische erwtenspruiten dat specifieke signaalmoleculen in de dermale papilla activeert. Het verhoogt FGF-7 en Noggin expressie, essentieel voor het starten van nieuwe haargroeicycli.",
                clinicalResults: [
                    "+56% FGF-7 expressie (groeifactor)",
                    "+85% Noggin expressie (anagen activator)",
                    "+78% verbetering A/T ratio in 3 maanden (van 4.0 naar 7.2)",
                    "Significante reductie haaruitval na 28 dagen (p<0.002)"
                ],
                source: {
                    study: "Phytotherapy Research, 2020 + Mibelle Technical Data",
                    details: "n=31 deelnemers (gecombineerd), peer-reviewed",
                    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8246764/"
                }
            }
        },
        {
            name: "BAICAPIL",
            percentage: "4%",
            description: "Beschermt tegen veroudering",
            icon: Infinity,
            scientificData: {
                name: "BAICAPIL",
                category: "Groeifase Verlenger",
                howItWorks: "Baicapil combineert Scutellaria baicalensis (antioxidant), soja- en tarwespruiten (energie voor follikels). Het activeert stamcellen, induceert TERT (telomerase), en beschermt tegen oxidatieve stress voor een langere anagenfase.",
                clinicalResults: [
                    "+12.7% anagen haren vs 2% placebo",
                    "+68.6% verbetering A/T ratio in 6 maanden",
                    "60.6% minder haaruitval na 3 maanden",
                    "Activeert Wnt/β-catenin pathway (haargroei signaal)"
                ],
                source: {
                    study: "Provital RCT + Molecular Medicine Reports, 2018 + 4 studies",
                    details: "n=61, 6 maanden, placebo-controlled (hoofdstudie)",
                    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12251978/"
                }
            }
        },
        {
            name: "GHK-Cu",
            percentage: "2.5%",
            description: "33% sneller dan Minoxidil*",
            icon: Atom,
            isNew: true,
            scientificData: {
                name: "GHK-Cu",
                category: "Koperpeptide Regeneratie",
                howItWorks: "Natuurlijk koperpeptide (Glycyl-L-Histidyl-L-Lysine) dat de Wnt/β-catenin signaalroute activeert — dezelfde route die farmaceutische behandelingen gebruiken. Stimuleert VEGF voor betere bloedtoevoer naar follikels.",
                clinicalResults: [
                    "Haargroei start in 6 dagen (vs. 9 dagen Minoxidil)",
                    "33% snellere initiatie van groeifase",
                    "Verbeterde haardichtheid en diameter",
                    "Minimale bijwerkingen vs. Minoxidil/Finasteride"
                ],
                source: {
                    study: "International Journal of Pharmaceutics, 2023",
                    details: "Muismodel, ionic liquid microemulsion delivery",
                    link: "https://doi.org/10.1016/j.bioactmat.2023.09.015"
                }
            }
        },
    ]

    return (
        <section id="solution" className="pt-16 pb-8 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white relative">
            {/* Subtle grain texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-600 font-medium tracking-widest text-xs uppercase">
                        De Oplossing
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 leading-tight text-gray-900">
                    <span className="text-gray-900">6 gepatenteerde technologieën.</span>
                    <br />
                    <span className="text-emerald-600">1 krachtige formule.</span>
                </h2>

                {/* Transition Text */}
                <div className="text-center mb-8">
                    <p className="text-xl font-medium text-gray-900 italic">
                        "Mooi verhaal. Maar werkt het ook?"
                    </p>
                </div>

                {/* Product Hero - Compact */}
                <div className="relative flex justify-center mb-8">
                    <div className="relative">
                        {/* Radial Glow */}
                        <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 via-emerald-500/5 to-transparent rounded-full blur-2xl scale-125" />

                        {/* Product Video - Smaller */}
                        <div className="relative w-64 h-[380px]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain drop-shadow-xl"
                                poster="/images/revive-hero-bottle.jpg"
                            >
                                <source src="/videos/revive-product-loop.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Reflection */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-40 h-6 bg-gradient-to-b from-gray-300/40 to-transparent blur-sm rounded-full" />
                    </div>
                </div>

                {/* Formula Container - Unified */}
                <div className="max-w-[850px] mx-auto bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 mb-16">
                    {/* Ingredient Cards - Compact 2x3 Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {ingredientsData.map((ingredient, index) => {
                            const Icon = ingredient.icon
                            const isNew = ingredient.isNew

                            return (
                                <div
                                    key={index}
                                    className={`group relative rounded-xl p-6 flex flex-col transition-all duration-300 cursor-pointer ${isNew
                                        ? 'bg-gradient-to-br from-white via-amber-50/30 to-white border-2 border-[#D4A574]/60 shadow-md hover:shadow-lg hover:border-[#D4A574]'
                                        : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                                        }`}
                                >
                                    {/* Info Button */}
                                    <button
                                        onClick={() => setSelectedIngredient(index)}
                                        className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all shadow-sm z-20"
                                        aria-label={`Info over ${ingredient.name}`}
                                    >
                                        <Info className="w-4 h-4" />
                                    </button>

                                    {/* NEW Badge */}
                                    {isNew && (
                                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-white text-[10px] font-extrabold px-2 py-1 rounded-full shadow-md z-20">
                                            NIEUW
                                        </div>
                                    )}

                                    {/* Percentage */}
                                    <p className={`text-sm font-bold mb-2 ${isNew ? 'text-[#D4A574]' : 'text-emerald-600'}`}>
                                        {ingredient.percentage}
                                    </p>

                                    {/* Name */}
                                    <h3 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide leading-tight">
                                        {ingredient.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        {ingredient.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Trust Strip - Centered Single Line */}
                    <div className="pt-6 border-t border-white/10">
                        <p className="text-center text-sm font-semibold text-gray-900">
                            20.5% actief · 6 technologieën · Hormoonvrij
                        </p>
                    </div>
                </div>
            </div>

            {/* Info Modal */}
            {selectedIngredient !== null && (
                <IngredientInfoModal
                    isOpen={selectedIngredient !== null}
                    onClose={() => setSelectedIngredient(null)}
                    ingredient={ingredientsData[selectedIngredient].scientificData}
                />
            )}
        </section>
    )
}
