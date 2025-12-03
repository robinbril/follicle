"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function FloatingCTA() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 800)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        // Confetti celebration
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.8 }
        })

        // Scroll to pricing
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    if (!show) return null

    return (
        <div className="hidden md:block fixed bottom-6 right-6 z-50 animate-slide-up">
            <Button
                onClick={handleClick}
                size="lg"
                className="rounded-full shadow-2xl hover:scale-110 transition-transform bg-primary-600 hover:bg-primary-700 px-8 py-6 text-lg font-bold"
            >
                <ShoppingBag className="w-5 h-5 mr-2" />
                BESTEL NU
            </Button>
        </div>
    )
}
