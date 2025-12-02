"use client"

import Link from 'next/link'

export default function PromoUrgency() {
    return (
        <section className="bg-gray-50 py-16 border-y border-neutral-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold mb-4">
                    BRAND NEW
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-black">
                    CUSTOM HAARGROEI ROADMAP
                </h3>
                <p className="text-lg text-neutral-sub mb-8">
                    Krijg een gepersonaliseerd plan gebaseerd op jouw haartype en doelen
                </p>
                <Link
                    href="#prijzen"
                    className="inline-block bg-[rgb(var(--accent-purple))] hover:bg-[rgb(var(--accent-purple-hover))] text-white text-lg px-8 py-4 font-semibold transition-colors"
                >
                    Krijg Mijn Custom Roadmap
                </Link>
            </div>
        </section>
    )
}
