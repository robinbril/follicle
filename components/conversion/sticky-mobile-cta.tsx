"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-neutral-800 p-4 backdrop-blur-xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm text-neutral-400">Hair Growth Serum</p>
                    <p className="text-lg font-bold">€39<span className="text-sm text-neutral-400">/maand</span></p>
                </div>
                <Button asChild>
                    <Link href="#prijzen">BESTEL NU</Link>
                </Button>
            </div>
        </div>
    )
}
