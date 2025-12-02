"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FinalCTA() {
    return (
        <section className="py-24 gradient-hero relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-display">
                    Elke dag dat je wacht,
                    <br />
                    verlies je meer haar.
                </h2>

                {/* Body */}
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Haarfollikels die te lang inactief zijn, sterven af.
                    <br />
                    Begin vandaag. Je toekomstige zelf zal je dankbaar zijn.
                </p>

                {/* CTA Button */}
                <Button asChild size="lg" className="mb-4">
                    <Link href="#prijzen">
                        START MIJN BEHANDELING — €39/MAAND
                    </Link>
                </Button>

                {/* Micro-copy */}
                <p className="text-sm text-neutral-400">
                    Gratis verzending • Annuleer wanneer je wilt • 90 dagen garantie
                </p>
            </div>
        </section>
    )
}
