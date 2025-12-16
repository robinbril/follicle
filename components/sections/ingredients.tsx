"use client"

import { useState } from 'react'
import { ChevronDown, Check, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        subheader: "+17% meer haar in 84 dagen",
        compound: "DIHYDROQUERCETIN-GLUCOSIDE + EGCG2",
        hero: true,
        benefits: [
            "Activeert bulge stamcellen in de haarfollikel",
            "Stimuleert dermal papilla cellen (+32%)",
            "85% van gebruikers ziet significante groei"
        ],
        studies: [
            { name: "Givaudan 2014", url: "#" },
            { name: "Karaca 2019", url: "#" },
            { name: "Eslahi 2022", url: "#" }
        ],
        funFact: "De gouden kleur komt van DHQG — een natuurlijk flavonoïde.",
        color: "#C4956A"
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        subheader: "-93% DHT-blokkade",
        compound: "ACETYL TETRAPEPTIDE-3 + RED CLOVER",
        hero: false,
        benefits: [
            "Remt 5-alpha reductase (DHT-productie)",
            "+46% anageen haardichtheid",
            "Versterkt verankering in de follikel"
        ],
        studies: [
            { name: "Lucas Meyer 2024", url: "#" },
            { name: "Thai Study 2020", url: "#" }
        ],
        color: "#D4A574"
    },
    {
        id: "procapil",
        percentage: "3%",
        name: "Procapil",
        subheader: "+121% haargroei in 2 weken",
        compound: "BIOTINYL-GHK + APIGENIN + OLEANOLIC ACID",
        hero: false,
        benefits: [
            "Verbetert bloedcirculatie naar de follikel",
            "-47% haaruitval na 4 maanden",
            "Versterkt collageen rondom de wortel"
        ],
        studies: [
            { name: "Sederma 2005", url: "#" },
            { name: "PMC Review 2024", url: "#" }
        ],
        color: "#E8C9A0"
    },
    {
        id: "anagain",
        percentage: "3%",
        name: "Anagain",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM EXTRACT (Organic Pea Sprouts)",
        hero: false,
        benefits: [
            "+56% FGF-7 expressie (groeifactor)",
            "+85% Noggin expressie (follikel activator)",
            "Vertraagt overgang naar uitvalfase"
        ],
        studies: [
            { name: "Mibelle 2014", url: "#" },
            { name: "Grothe 2016", url: "#" }
        ],
        color: "#A8D5BA"
    },
    {
        id: "baicapil",
        percentage: "4%",
        name: "Baicapil",
        subheader: "+59% haardichtheid",
        compound: "SCUTELLARIA BAICALENSIS + SOY + WHEAT SPROUTS",
        hero: false,
        benefits: [
            "-60% haaruitval na 6 maanden",
            "+68% anageen/telogeen verhouding",
            "Beschermt tegen oxidatieve stress"
        ],
        studies: [
            { name: "Provital 2015", url: "#" },
            { name: "Opast 2018", url: "#" }
        ],
        color: "#8BB8A8"
    },
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu Peptide",
        subheader: "Vergelijkbaar met Minoxidil*",
        compound: "COPPER TRIPEPTIDE-1",
        hero: false,
        benefits: [
            "Activeert 4.000+ huidherstel-genen",
            "Stimuleert dermal papilla stamcellen",
            "+70% collageen productie na 12 weken"
        ],
        studies: [
            { name: "Pickart 2018", url: "#" },
            { name: "Lee 2016", url: "#" },
            { name: "Pickart 2008", url: "#" },
            { name: "Badenhorst 2016", url: "#" }
        ],
        funFact: "*Zonder bijwerkingen. De blauwe kleur is geen kleurstof — het is puur koper-peptide.",
        color: "#5B8A9A"
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>("redensyl") // Hero starts expanded

    const toggleCard = (id: string) => {
        setExpanded(expanded === id ? null : id)
    }

    return (
        <section id="ingredienten" className="py-16 sm:py-20 bg-[#FDFCFA]">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#2D2A26] mb-3">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-[#8A8580]">
                        Elke druppel bevat 20.5% werkzame ingrediënten. Klik voor de wetenschap.
                    </p>
                </motion.div>

                {/* Concentration Bar */}
                <div className="flex items-center justify-center gap-1 mb-10">
                    {ingredients.map((ing) => (
                        <motion.div
                            key={ing.id}
                            className="h-2 rounded-full cursor-pointer transition-transform hover:scale-y-150"
                            style={{
                                backgroundColor: ing.color,
                                width: `${parseFloat(ing.percentage) * 12}px`
                            }}
                            onClick={() => toggleCard(ing.id)}
                            whileHover={{ scaleY: 1.5 }}
                        />
                    ))}
                    <span className="ml-4 text-xs text-[#6B6560] bg-[#F5F3F0] px-3 py-1 rounded-full">
                        20.5% actief
                    </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${ing.hero
                                    ? 'md:col-span-2 bg-[#2D2A26] text-white'
                                    : 'bg-white border border-[#E8E4DF] hover:border-[#C4956A]'
                                } ${expanded === ing.id ? 'shadow-lg' : 'hover:shadow-md'}`}
                            onClick={() => toggleCard(ing.id)}
                        >
                            {/* Card Header */}
                            <div className="p-5 sm:p-6">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-lg font-semibold" style={{ color: ing.color }}>
                                            {ing.percentage}
                                        </span>
                                        <span className={`text-lg font-medium ${ing.hero ? 'text-white' : 'text-[#2D2A26]'}`}>
                                            {ing.name}
                                        </span>
                                        {ing.hero && (
                                            <span className="text-[10px] font-semibold tracking-wider px-2 py-1 rounded" style={{ backgroundColor: 'rgba(196,149,106,0.2)', color: '#C4956A' }}>
                                                ★ STERKSTE BEWIJS
                                            </span>
                                        )}
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${ing.hero ? 'text-white/60' : 'text-[#8A8580]'
                                            } ${expanded === ing.id ? 'rotate-180' : ''}`}
                                    />
                                </div>

                                {/* Subheader with quantification */}
                                <p className="mt-1 text-sm font-medium" style={{ color: ing.color }}>
                                    {ing.subheader}
                                </p>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`px-5 sm:px-6 pb-6 ${ing.hero ? 'border-t border-white/10' : 'border-t border-[#E8E4DF]'} pt-4`}>

                                            {/* Compound */}
                                            <p className={`text-[10px] tracking-widest mb-4 pb-3 border-b ${ing.hero ? 'text-white/50 border-white/10' : 'text-[#8A8580] border-[#E8E4DF]'
                                                }`}>
                                                {ing.compound}
                                            </p>

                                            {/* Benefits */}
                                            <ul className="space-y-2 mb-4">
                                                {ing.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ing.color }} />
                                                        <span className={`text-sm ${ing.hero ? 'text-white/90' : 'text-[#4A4540]'}`}>
                                                            {benefit}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Studies */}
                                            <div className="mb-4">
                                                <p className={`text-[10px] tracking-widest mb-2 ${ing.hero ? 'text-white/40' : 'text-[#8A8580]'}`}>
                                                    KLINISCHE STUDIES
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {ing.studies.map((study, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={study.url}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-colors ${ing.hero
                                                                    ? 'bg-white/10 text-white/80 hover:bg-[#C4956A] hover:text-white'
                                                                    : 'bg-[#F5F3F0] text-[#6B6560] hover:bg-[#C4956A] hover:text-white'
                                                                }`}
                                                        >
                                                            {study.name}
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Fun Fact */}
                                            {ing.funFact && (
                                                <div className="flex items-start gap-2">
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                                                        style={{ backgroundColor: ing.color }}
                                                    />
                                                    <p className={`text-xs italic ${ing.hero ? 'text-white/60' : 'text-[#8A8580]'}`}>
                                                        {ing.funFact}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    <span className="text-xs text-[#6B6560] bg-[#F5F3F0] px-4 py-2 rounded-full">Zonder parfum</span>
                    <span className="text-xs text-[#6B6560] bg-[#F5F3F0] px-4 py-2 rounded-full">Hormoonvrij</span>
                    <span className="text-xs text-[#6B6560] bg-[#F5F3F0] px-4 py-2 rounded-full">Made in NL</span>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-xs text-[#9A948E] mt-6">
                    Alle claims zijn gebaseerd op gepubliceerde, peer-reviewed studies. Individuele resultaten kunnen variëren.
                </p>
            </div>
        </section>
    )
}
