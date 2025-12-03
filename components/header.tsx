"use client"

import { useState, useEffect } from 'react'
import { Timer, Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [timeLeft, setTimeLeft] = useState("")

    // Countdown timer
    useEffect(() => {
        const savedEnd = localStorage.getItem('countdown-end')
        let endTime: number

        if (savedEnd) {
            endTime = parseInt(savedEnd)
        } else {
            endTime = Date.now() + (12 * 60 * 60 * 1000)
            localStorage.setItem('countdown-end', endTime.toString())
        }

        const update = () => {
            const remaining = endTime - Date.now()

            if (remaining <= 0) {
                const newEndTime = Date.now() + (12 * 60 * 60 * 1000)
                localStorage.setItem('countdown-end', newEndTime.toString())
                return
            }

            const h = Math.floor(remaining / (60 * 60 * 1000)).toString().padStart(2, '0')
            const m = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0')
            const s = Math.floor((remaining % (60 * 1000)) / 1000).toString().padStart(2, '0')
            setTimeLeft(`${h}:${m}:${s}`)
        }

        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setMobileMenu(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
                    {/* Logo + urgency + social proof */}
                    <div className="flex flex-col lg:flex-row items-center gap-6 text-white">
                        <h1 className="text-2xl sm:text-3xl font-black tracking-tighter">FOLLICLE</h1>

                        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Timer className="w-4 h-4 animate-pulse" />
                                Speciale introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span>
                            </div>
                            <span className="text-emerald-100">•</span>
                            <span className="font-bold">2.847 mannen gingen je voor</span>
                        </div>
                    </div>

                    {/* Nav + CTA – perfect uitgelijnd */}
                    <nav className="flex items-center gap-8">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-white/90 hover:text-white font-medium transition hidden lg:block"
                            >
                                {item}
                            </button>
                        ))}

                        {/* CTA button – wit op emerald voor max contrast */}
                        <button
                            onClick={() => scrollToSection('prijzen')}
                            className="bg-white text-emerald-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 whitespace-nowrap cursor-pointer"
                        >
                            Bestel Nu →
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden text-white"
                        >
                            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </nav>
                </div>

                {/* Mobile urgency – alleen zichtbaar op mobile */}
                <div className="lg:hidden text-center text-white/90 text-sm pb-2">
                    <Timer className="inline w-4 h-4 mr-1 animate-pulse" />
                    Introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {mobileMenu && (
                <div className="lg:hidden bg-emerald-700 border-t border-emerald-500">
                    <div className="px-6 py-6 space-y-4">
                        <button onClick={() => scrollToSection('ingredienten')} className="block w-full text-left text-lg font-medium text-white">
                            Ingrediënten
                        </button>
                        <button onClick={() => scrollToSection('wetenschap')} className="block w-full text-left text-lg font-medium text-white">
                            Wetenschap
                        </button>
                        <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-lg font-medium text-white">
                            Reviews
                        </button>
                        <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-lg font-medium text-white">
                            FAQ
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
