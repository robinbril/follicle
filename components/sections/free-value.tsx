"use client"

import Link from 'next/link'

export default function FreeValue() {
    const freeOffers = [
        {
            badge: "New Release",
            title: "HAARGROEI HANDBOEK",
            description: "Complete gids voor maximale haargroei",
            cta: "Download Gratis"
        },
        {
            badge: "It's Free",
            title: "RCP INGREDIËNTEN GUIDE",
            description: "Wetenschappelijke breakdown van actieve stoffen",
            cta: "Neem Deze Guide"
        },
        {
            badge: "It's Free",
            title: "HUID BOOST PROTOCOL",
            description: "Combinatie tips voor haar én stralende huid",
            cta: "Krijg Direct Toegang"
        },
        {
            badge: "It's Free",
            title: "LIVE DEMO WORKSHOP",
            description: "Leer hoe je het serum correct toepast",
            cta: "Reserveer Plek"
        }
    ]

    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-black">
                    GRATIS WETENSCHAPPELIJKE GUIDES
                </h3>
                <p className="text-center text-lg text-neutral-sub mb-12 max-w-3xl mx-auto">
                    Videos, eBooks, Guides, en meer om je haar en huid te boosten:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {freeOffers.map((offer, index) => (
                        <div key={index} className="text-center bg-white border border-neutral-border p-6">
                            <span className={`inline-block px-3 py-1 mb-4 text-sm font-semibold ${offer.badge === "New Release"
                                    ? "bg-black text-white"
                                    : "bg-[rgb(var(--success))] text-white"
                                }`}>
                                {offer.badge}
                            </span>
                            <h4 className="text-xl font-bold mb-2 text-black">{offer.title}</h4>
                            <p className="text-sm text-neutral-sub mb-4">{offer.description}</p>
                            <Link
                                href="#gratis-guides"
                                className="inline-block text-[rgb(var(--accent-purple))] font-semibold underline hover:no-underline transition-all"
                            >
                                {offer.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
