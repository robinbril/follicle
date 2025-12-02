"use client"

import { useState } from 'react'
import Navigation from '@/components/sections/navigation'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, Check, Shield, Truck, RotateCcw, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function ProductPage() {
    const [selectedVariant, setSelectedVariant] = useState<'onetime' | 'subscription'>('subscription')
    const [quantity, setQuantity] = useState(1)

    const ingredients = [
        {
            name: "REDENSYL®",
            percentage: "3%",
            description: "Gepatenteerd complex van Givaudan (Zwitserland)",
            details:
                "Bevat: DHQG (dihydroquercetin-glucoside) + EGCG2. Werking: Activeert haarzakje-stamcellen en dermale papilla fibroblasten. Stimuleert de overgang van telogeen (rust) naar anageen (groei) fase. Klinisch bewijs: +9% nieuwe haargroei, -17% haaruitval in 90 dagen. 85% van proefpersonen zag verbetering.",
        },
        {
            name: "CAPIXYL™",
            percentage: "5%",
            description: "Biomimetisch peptide van Lucas Meyer (Canada)",
            details:
                "Bevat: Acetyl Tetrapeptide-3 + Rode Klaver Extract. Werking: Blokkeert 5-alpha-reductase (het enzym dat testosteron omzet naar DHT). Vermindert ontsteking rond haarzakjes en verbetert de extracellulaire matrix. Klinisch bewijs: Tot 60% reductie in haaruitval bij consistent gebruik.",
        },
        {
            name: "PROCAPIL™",
            percentage: "3%",
            description: "Peptide complex voor follikel verankering",
            details:
                "Versterkt de verankering van haren in de follikel en verbetert de bloedcirculatie naar de hoofdhuid. Remt het enzym dat DHT produceert.",
        },
        {
            name: "ANAGAIN™",
            percentage: "3%",
            description: "Biologisch erwtenspruit extract",
            details:
                "Stimuleert specifieke signaal-moleculen in de dermale papillacellen. Verlengt de anageen (groei) fase van de haarcyclus.",
        },
        {
            name: "BAICAPIL™",
            percentage: "4%",
            description: "Plantaardig peptide complex",
            details:
                "Combinatie van Scutellaria baicalensis, soja en tarwe-kiemen. Verlengt de groeifase van het haar en verbetert de haardichtheid.",
        },
    ]

    const benefits = [
        {
            icon: Shield,
            title: "Blokkeert DHT",
            description:
                "Procapil remt het enzym dat DHT produceert - de hoofdoorzaak van haarverlies.",
        },
        {
            icon: Shield,
            title: "Activeert Stamcellen",
            description:
                "Redensyl stimuleert de stamcellen in haarzakjes voor nieuwe groei.",
        },
        {
            icon: Shield,
            title: "Versterkt Verankering",
            description:
                "Capixyl versterkt de verankering van haren in de follikel.",
        },
        {
            icon: Shield,
            title: "Verlengt Groeifase",
            description:
                "Baicapil verlengt de anageen (groei) fase van de haarcyclus.",
        },
    ]

    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="mb-8 text-sm text-neutral-400">
                        <Link href="/" className="hover:text-primary-400">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/producten" className="hover:text-primary-400">
                            Producten
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-neutral-200">Hair Growth Serum 18%</span>
                    </div>

                    {/* Product Section */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        {/* Product Image Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-2xl glow-primary flex items-center justify-center">
                                <div className="text-center p-12">
                                    <div className="text-8xl mb-6">💧</div>
                                    <p className="text-neutral-100 font-display font-bold text-3xl mb-2">
                                        FOLLICLE
                                    </p>
                                    <p className="text-neutral-300">Hair Growth Serum 18%</p>
                                    <p className="text-neutral-400 text-sm mt-4">30ml</p>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Reviews */}
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-primary-400 fill-primary-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-neutral-300">4.8 (2.847 reviews)</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl font-bold font-display">
                                HAIR GROWTH SERUM 18%
                            </h1>

                            {/* Description */}
                            <p className="text-lg text-neutral-300">
                                5 gepatenteerde actieve ingrediënten in één formule
                            </p>

                            {/* Size */}
                            <div className="glass rounded-xl p-4 inline-block">
                                <p className="text-sm text-neutral-400">GROOTTE</p>
                                <p className="text-lg font-bold">30ml (1 maand)</p>
                            </div>

                            {/* Pricing */}
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-4">
                                    {selectedVariant === 'subscription' ? (
                                        <>
                                            <span className="text-4xl font-bold">€39</span>
                                            <span className="text-neutral-400">/maand</span>
                                            <span className="text-primary-400 text-sm">
                                                Bespaar 34%
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-4xl font-bold">€59</span>
                                    )}
                                </div>

                                {/* Variant Selector */}
                                <div className="space-y-3">
                                    <button
                                        onClick={() => setSelectedVariant('subscription')}
                                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selectedVariant === 'subscription'
                                                ? 'border-primary-500 bg-primary-500/10'
                                                : 'border-neutral-700 hover:border-neutral-600'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-bold">Abonnement</p>
                                                <p className="text-sm text-neutral-400">
                                                    €39/maand - Annuleer wanneer je wilt
                                                </p>
                                            </div>
                                            <div
                                                className={`w-5 h-5 rounded-full border-2 ${selectedVariant === 'subscription'
                                                        ? 'border-primary-500 bg-primary-500'
                                                        : 'border-neutral-600'
                                                    }`}
                                            />
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setSelectedVariant('onetime')}
                                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selectedVariant === 'onetime'
                                                ? 'border-primary-500 bg-primary-500/10'
                                                : 'border-neutral-700 hover:border-neutral-600'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-bold">Eenmalig</p>
                                                <p className="text-sm text-neutral-400">
                                                    €59 - Eenmalige aankoop
                                                </p>
                                            </div>
                                            <div
                                                className={`w-5 h-5 rounded-full border-2 ${selectedVariant === 'onetime'
                                                        ? 'border-primary-500 bg-primary-500'
                                                        : 'border-neutral-600'
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <Button size="lg" className="w-full text-lg">
                                TOEVOEGEN AAN WINKELWAGEN
                            </Button>

                            {/* Trust Badges */}
                            <div className="space-y-2 text-sm pt-4 border-t border-neutral-800">
                                <div className="flex items-center gap-2 text-neutral-300">
                                    <Check className="w-5 h-5 text-primary-400" />
                                    <span>Op voorraad - Verzonden binnen 24 uur</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-300">
                                    <Truck className="w-5 h-5 text-primary-400" />
                                    <span>Gratis verzending</span>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-300">
                                    <RotateCcw className="w-5 h-5 text-primary-400" />
                                    <span>90 dagen geld-terug garantie</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <Tabs defaultValue="benefits" className="w-full">
                        <TabsList className="w-full justify-start overflow-x-auto">
                            <TabsTrigger value="benefits">VOORDELEN</TabsTrigger>
                            <TabsTrigger value="ingredients">INGREDIËNTEN</TabsTrigger>
                            <TabsTrigger value="usage">HOE TE GEBRUIKEN</TabsTrigger>
                            <TabsTrigger value="reviews">REVIEWS</TabsTrigger>
                        </TabsList>

                        {/* Benefits Tab */}
                        <TabsContent value="benefits">
                            <div className="grid md:grid-cols-2 gap-6">
                                {benefits.map((benefit, i) => {
                                    const Icon = benefit.icon
                                    return (
                                        <div key={i} className="glass rounded-2xl p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-xl bg-primary-500/10">
                                                    <Icon className="w-6 h-6 text-primary-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg mb-2">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-neutral-400">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </TabsContent>

                        {/* Ingredients Tab */}
                        <TabsContent value="ingredients">
                            <div className="space-y-4">
                                {ingredients.map((ingredient, i) => (
                                    <details key={i} className="glass rounded-2xl p-6 group">
                                        <summary className="flex items-center justify-between cursor-pointer list-none">
                                            <div className="flex items-baseline gap-3">
                                                <h3 className="text-xl font-bold text-primary-400">
                                                    {ingredient.name}
                                                </h3>
                                                <span className="text-2xl font-mono font-bold">
                                                    {ingredient.percentage}
                                                </span>
                                            </div>
                                            <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="mt-4 pt-4 border-t border-neutral-800">
                                            <p className="text-neutral-400 mb-4">
                                                {ingredient.description}
                                            </p>
                                            <p className="text-neutral-300 leading-relaxed">
                                                {ingredient.details}
                                            </p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Usage Tab */}
                        <TabsContent value="usage">
                            <div className="space-y-8">
                                <div className="aspect-video bg-neutral-800 rounded-2xl flex items-center justify-center">
                                    <p className="text-neutral-500">Video: Hoe gebruik je de serum?</p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            step: 1,
                                            title: "Schone, droge hoofdhuid",
                                            description:
                                                "Was je haar en laat het drogen. De serum werkt het best op een schone hoofdhuid zonder product-residu.",
                                        },
                                        {
                                            step: 2,
                                            title: "Druppel op probleemgebieden",
                                            description:
                                                "Gebruik de pipet om 6-8 druppels direct op je hoofdhuid aan te brengen. Focus op gebieden met dunner haar.",
                                        },
                                        {
                                            step: 3,
                                            title: "Masseer in",
                                            description:
                                                "Masseer de serum 2-3 minuten in je hoofdhuid met je vingertoppen. Dit verbetert de bloedcirculatie en absorptie.",
                                        },
                                        {
                                            step: 4,
                                            title: "Niet uitspoelen",
                                            description:
                                                "Laat de serum overnacht inwerken. 's Ochtends kun je je haar wassen zoals normaal.",
                                        },
                                    ].map((item) => (
                                        <div key={item.step} className="flex gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center font-bold text-neutral-950">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                                <p className="text-neutral-400">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="glass rounded-2xl p-6">
                                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                                        <div>
                                            <p className="text-neutral-500 mb-1">⏰ WANNEER</p>
                                            <p className="text-neutral-200">
                                                Eén keer per dag, 's avonds voor het slapen
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 mb-1">📅 HOE LANG</p>
                                            <p className="text-neutral-200">
                                                Gebruik minimaal 90 dagen voor beste resultaat
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-500 mb-1">⚠️ LET OP</p>
                                            <p className="text-neutral-200">
                                                Vermijd contact met ogen. Bij irritatie, stop gebruik
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* Reviews Tab */}
                        <TabsContent value="reviews">
                            <div className="space-y-6">
                                {/* Review Summary */}
                                <div className="glass rounded-2xl p-8">
                                    <div className="flex items-center gap-8 mb-6">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold mb-2">4.8</div>
                                            <div className="flex mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 text-primary-400 fill-primary-400"
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-sm text-neutral-400">
                                                2.847 reviews
                                            </p>
                                        </div>

                                        <div className="flex-1 space-y-2">
                                            {[5, 4, 3, 2, 1].map((rating) => (
                                                <div key={rating} className="flex items-center gap-3">
                                                    <span className="text-sm w-8">{rating} ★</span>
                                                    <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary-500"
                                                            style={{
                                                                width:
                                                                    rating === 5
                                                                        ? '78%'
                                                                        : rating === 4
                                                                            ? '15%'
                                                                            : rating === 3
                                                                                ? '5%'
                                                                                : '1%',
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-neutral-400 w-12">
                                                        {rating === 5
                                                            ? '78%'
                                                            : rating === 4
                                                                ? '15%'
                                                                : rating === 3
                                                                    ? '5%'
                                                                    : '1%'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Individual Reviews */}
                                <div className="space-y-4">
                                    {[
                                        {
                                            name: "Thomas V.",
                                            location: "Amsterdam",
                                            duration: "4 maanden gebruik",
                                            title: "Eindelijk iets dat WERKT",
                                            review:
                                                "Na jaren van Minoxidil met wisselend succes (en vervelende bijwerkingen), besloot ik dit te proberen. Week 4: Minder haren in de douche. Week 8: Eerste babyhaarjes zichtbaar. Week 16: Duidelijk vollere kruin. Geen bijwerkingen, niet plakkerig, geen geur. Dit is nu een vast onderdeel van mijn routine.",
                                            helpful: 142,
                                        },
                                    ].map((review, i) => (
                                        <div key={i} className="glass rounded-2xl p-6">
                                            <div className="flex items-center gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 text-primary-400 fill-primary-400"
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm text-neutral-500">
                                                    Geverifieerde aankoop
                                                </span>
                                            </div>

                                            <div className="mb-3">
                                                <p className="font-bold">
                                                    {review.name} | {review.location} | {review.duration}
                                                </p>
                                            </div>

                                            <h4 className="font-bold text-lg mb-3">"{review.title}"</h4>

                                            <p className="text-neutral-300 leading-relaxed mb-4">
                                                {review.review}
                                            </p>

                                            <p className="text-sm text-neutral-500">
                                                👍 {review.helpful} mensen vonden dit nuttig
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>

            <Footer />
        </div>
    )
}
