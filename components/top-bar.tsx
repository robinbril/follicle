"use client"

import { useEffect, useState } from 'react'
import { Timer } from 'lucide-react'

export default function TopBar() {
    const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 58, seconds: 24 })

    useEffect(() => {
        // Check localStorage for saved end time
        const savedEnd = localStorage.getItem('countdown-end')
        let endTime: number

        if (savedEnd) {
            endTime = parseInt(savedEnd)
        } else {
            endTime = Date.now() + (12 * 60 * 60 * 1000)
            localStorage.setItem('countdown-end', endTime.toString())
        }

        const timer = setInterval(() => {
            const remaining = endTime - Date.now()

            if (remaining <= 0) {
                const newEndTime = Date.now() + (12 * 60 * 60 * 1000)
                localStorage.setItem('countdown-end', newEndTime.toString())
                return
            }

            const hours = Math.floor(remaining / (60 * 60 * 1000))
            const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000))
            const seconds = Math.floor((remaining % (60 * 1000)) / 1000)

            setTimeLeft({ hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const format = (n: number) => n.toString().padStart(2, '0')

    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white py-3 relative overflow-hidden sticky top-0 z-50">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />

            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 text-center relative z-10">
                {/* Main hook */}
                <div className="flex items-center gap-3">
                    <Timer className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                    <span className="font-bold text-sm sm:text-lg">
                        Bestel voor 23:59 → Morgen in huis
                    </span>
                </div>

                {/* Mini CTA */}
                <button
                    onClick={scrollToPricing}
                    className="hidden sm:inline-block bg-white text-emerald-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition whitespace-nowrap cursor-pointer"
                >
                    Nu claimen →
                </button>
            </div>
        </div>
    )
}
