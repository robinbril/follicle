"use client"

import { useState } from 'react'
import { ChevronDown, Check, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: "ghkcu",
        percentage: "2.5%",
        name: "GHK-Cu Peptide",
        tagline: "Het geheim van dermatologen",
        subheader: "Vergelijkbaar met Minoxidil — zonder bijwerkingen",
        compound: "COPPER TRIPEPTIDE-1",
        hero: true,
        benefits: [
            "Activeert 4.000+ huidherstel-genen in je hoofdhuid",
            "Stimuleert dermal papilla stamcellen voor nieuwe groei",
            "+70% collageen productie voor sterkere haarwortels"
        ],
        studies: [
            { name: "Pickart 2018", url: "#" },
            { name: "Lee 2016", url: "#" },
            { name: "Pickart 2008", url: "#" },
            { name: "Badenhorst 2016", url: "#" }
        ],
        funFact: "De blauwe kleur is geen kleurstof — het is puur koper-peptide. Dezelfde stof die ziekenhuizen gebruiken voor wondgenezing.",
        color: "#5B8A9A"
    },
    {
        id: "redensyl",
        percentage: "3%",
        name: "Redensyl",
        tagline: "Klinisch bewezen groeistimulator",
        subheader: "+17% meer haar in 84 dagen",
        compound: "DIHYDROQUERCETIN-GLUCOSIDE + EGCG2",
        hero: false,
        benefits: [
            "Activeert slapende haarfollikels tot nieuwe groei",
            "85% van gebruikers ziet zichtbaar resultaat",
            "Tot 10.000+ nieuwe haren gemeten in klinische trials"
        ],
        studies: [
            { name: "Givaudan 2014", url: "#" },
            { name: "Karaca 2019", url: "#" },
            { name: "Eslahi 2022", url: "#" }
        ],
        funFact: "De gouden kleur komt van DHQG — een natuurlijk flavonoïde uit larix bomen.",
        color: "#C4956A"
    },
    {
        id: "capixyl",
        percentage: "5%",
        name: "Capixyl",
        tagline: "Stopt haaruitval aan de bron",
        subheader: "-93% DHT-blokkade",
        compound: "ACETYL TETRAPEPTIDE-3 + RED CLOVER",
        hero: false,
        benefits: [
            "Blokkeert DHT zonder je hormonen te beïnvloeden",
            "+46% dikkere haargroei in de groeifase",
            "Verankert bestaand haar steviger in de follikel"
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
        tagline: "Verbetert doorbloeding naar de wortels",
        subheader: "+121% haargroei in 2 weken",
        compound: "BIOTINYL-GHK + APIGENIN + OLEANOLIC ACID",
        hero: false,
        benefits: [
            "Meer zuurstof en voedingsstoffen naar elke follikel",
            "-47% minder haaruitval na 4 maanden gebruik",
            "Versterkt het collageen rondom de haarwortel"
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
        tagline: "Verlengt de natuurlijke groeicyclus",
        subheader: "78% langere groeifase",
        compound: "PISUM SATIVUM EXTRACT (Organic Pea Sprouts)",
        hero: false,
        benefits: [
            "Houdt haar langer in de groeifase voordat het uitvalt",
            "+56% meer FGF-7 groeifactor productie",
            "Biologisch en hormoonvrij werkingsmechanisme"
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
        tagline: "Beschermt tegen dagelijkse haarbedreiging",
        subheader: "+59% haardichtheid",
        compound: "SCUTELLARIA BAICALENSIS + SOY + WHEAT SPROUTS",
        hero: false,
        benefits: [
            "-60% minder haaruitval door stress en milieufactoren",
            "Herstelt de balans tussen groei- en rustfase",
            "Antioxidante bescherming voor gezonde follikels"
        ],
        studies: [
            { name: "Provital 2015", url: "#" },
            { name: "Opast 2018", url: "#" }
        ],
        color: "#8BB8A8"
    }
]

export default function Ingredients() {
    const [expanded, setExpanded] = useState<string | null>("ghkcu") // GHK-Cu hero starts expanded

    const toggleCard = (id: string) => {
        setExpanded(expanded === id ? null : id)
    }

    return (
        <section id="ingredienten" className="py-20 sm:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header with Apple-style entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">
                        6 Actieve Technologieën
                    </h2>
                    <p className="text-lg text-[#6B6560] max-w-xl mx-auto">
                        Elke druppel bevat 20.5% werkzame ingrediënten.
                        <br className="hidden sm:block" />
                        <span className="text-[#2D2A26] font-medium">Klik voor de wetenschap.</span>
                    </p>
                </motion.div>

                {/* Concentration Bar with smooth animation */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-1.5 mb-14"
                >
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                            className="h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-110"
                            style={{
                                backgroundColor: ing.color,
                                width: `${parseFloat(ing.percentage) * 16}px`
                            }}
                            onClick={() => toggleCard(ing.id)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    ))}
                    <span className="ml-5 text-sm font-medium text-[#2D2A26] bg-[#F5F3F0] px-4 py-1.5 rounded-full">
                        20.5% actief
                    </span>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={ing.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: i * 0.08,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className={`rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${ing.hero
                                    ? 'md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white shadow-2xl'
                                    : 'bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#C4956A] hover:shadow-xl'
                                } ${expanded === ing.id ? 'ring-2 ring-[#C4956A]/30' : ''}`}
                            onClick={() => toggleCard(ing.id)}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Card Header */}
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span
                                                className="text-xl font-bold"
                                                style={{ color: ing.hero ? '#fff' : ing.color }}
                                            >
                                                {ing.percentage}
                                            </span>
                                            <span className={`text-xl font-semibold ${ing.hero ? 'text-white' : 'text-[#1a1a1a]'}`}>
                                                {ing.name}
                                            </span>
                                            {ing.hero && (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="text-[11px] font-bold tracking-wider px-3 py-1 rounded-full bg-[#5B8A9A] text-white"
                                                >
                                                    ★ HET VERSCHIL
                                                </motion.span>
                                            )}
                                        </div>
                                        <p className={`text-sm ${ing.hero ? 'text-white/70' : 'text-[#6B6560]'}`}>
                                            {ing.tagline}
                                        </p>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expanded === ing.id ? 180 : 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <ChevronDown className={`w-6 h-6 ${ing.hero ? 'text-white/60' : 'text-[#999]'}`} />
                                    </motion.div>
                                </div>

                                {/* Subheader with quantification - HIGH CONTRAST */}
                                <p
                                    className="text-lg font-semibold mt-3"
                                    style={{ color: ing.hero ? '#7AB5C4' : ing.color }}
                                >
                                    {ing.subheader}
                                </p>
                            </div>

                            {/* Expandable Content with Apple spring animation */}
                            <AnimatePresence>
                                {expanded === ing.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.16, 1, 0.3, 1],
                                            opacity: { duration: 0.3 }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className={`px-6 sm:px-8 pb-8 ${ing.hero ? 'border-t border-white/10' : 'border-t border-[#E5E5E5]'} pt-6`}>

                                            {/* Compound */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className={`text-[11px] tracking-[0.15em] mb-5 ${ing.hero ? 'text-white/40' : 'text-[#999]'
                                                    }`}
                                            >
                                                {ing.compound}
                                            </motion.p>

                                            {/* Benefits */}
                                            <ul className="space-y-3 mb-6">
                                                {ing.benefits.map((benefit, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.15 + idx * 0.1 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div
                                                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                            style={{ backgroundColor: `${ing.color}20` }}
                                                        >
                                                            <Check className="w-3 h-3" style={{ color: ing.color }} />
                                                        </div>
                                                        <span className={`text-[15px] leading-relaxed ${ing.hero ? 'text-white/90' : 'text-[#333]'}`}>
                                                            {benefit}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            {/* Studies */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="mb-5"
                                            >
                                                <p className={`text-[10px] font-medium tracking-[0.2em] mb-3 ${ing.hero ? 'text-white/40' : 'text-[#999]'}`}>
                                                    KLINISCHE STUDIES
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {ing.studies.map((study, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href={study.url}
                                                            onClick={(e) => e.stopPropagation()}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className={`inline-flex items-center gap-1.5 text-[13px] px-4 py-2 rounded-full transition-all duration-300 ${ing.hero
                                                                    ? 'bg-white/10 text-white/80 hover:bg-[#5B8A9A] hover:text-white'
                                                                    : 'bg-[#F0EDE8] text-[#555] hover:bg-[#C4956A] hover:text-white'
                                                                }`}
                                                        >
                                                            {study.name}
                                                            <ExternalLink className="w-3 h-3" />
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            {/* Fun Fact */}
                                            {ing.funFact && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className={`flex items-start gap-3 p-4 rounded-xl ${ing.hero ? 'bg-white/5' : 'bg-[#F5F3F0]'
                                                        }`}
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                        style={{ backgroundColor: ing.color }}
                                                    />
                                                    <p className={`text-[13px] leading-relaxed ${ing.hero ? 'text-white/60' : 'text-[#666]'}`}>
                                                        {ing.funFact}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mt-14"
                >
                    {["Zonder parfum", "Hormoonvrij", "Made in NL"].map((badge) => (
                        <span key={badge} className="text-sm text-[#555] bg-[#F5F3F0] px-5 py-2.5 rounded-full font-medium">
                            {badge}
                        </span>
                    ))}
                </motion.div>

                {/* Disclaimer */}
                <p className="text-center text-xs text-[#999] mt-8 max-w-lg mx-auto">
                    Alle claims zijn gebaseerd op gepubliceerde, peer-reviewed studies. Individuele resultaten kunnen variëren.
                </p>
            </div>
        </section>
    )
}
