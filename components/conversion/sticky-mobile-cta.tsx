"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Star, Shield } from 'lucide-react'

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (about 600px)
            setIsVisible(window.scrollY > 600)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            {/* Trust micro-banner */}
            <div className="bg-[#0A0A0A] py-1.5 px-4 flex items-center justify-center gap-3 text-[10px] text-white/80">
                <span className="flex items-center gap-1">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-[#D4A574] text-[#D4A574]" />
                        ))}
                    </div>
                    <span className="font-semibold">4.8</span>
                </span>
                <span className="w-px h-3 bg-white/20" />
                <span className="flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5" />
                    180 dagen garantie
                </span>
            </div>

            {/* CTA Section */}
            <div className="px-4 py-3 flex items-center justify-between gap-3">
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wide font-medium">REVIVE Serum</p>
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-gray-900">€29</span>
                        <span className="text-xs text-gray-500">/maand</span>
                        <span className="text-[10px] text-emerald-600 font-semibold">-41%</span>
                    </div>
                </div>
                <Button
                    asChild
                    className="bg-[#D4A574] hover:bg-[#C69563] text-white font-bold px-6 py-5 rounded-xl shadow-lg"
                >
                    <Link href="#prijzen" className="flex items-center gap-2">
                        BESTEL NU
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
