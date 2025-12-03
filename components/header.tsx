"use client"

import { useState, useEffect } from 'react'
import { Timer, Menu, X } from 'lucide-react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [timeLeft, setTimeLeft] = useState("")

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
            {/* Urgency bar – emerald groen */}
            <div className="bg-emerald-600 text-white py-2.5 text-center text-sm font-medium">
                <Timer className="inline w-4 h-4 mr-2 animate-pulse" />
                Speciale introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span>
                {' → '}
                <span className="underline decoration-white/70 font-bold">2.847 mannen gingen je voor</span>
            </div>

            {/* Main nav – wit bij scroll, transparant bovenaan */}
            <div className={`transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur'}`}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    {/* Logo – vet zwart */}
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-900">
                        FOLLICLE
                    </h1>

                    {/* Desktop menu – strak */}
                    <nav className="hidden lg:flex items-center gap-10">
                        <button onClick={() => scrollToSection('ingredienten')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
                            Ingrediënten
                        </button>
                        <button onClick={() => scrollToSection('wetenschap')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
                            Wetenschap
                        </button>
                        <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
                            Reviews
                        </button>
                        <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-emerald-600 font-medium transition">
                            FAQ
                        </button>
                    </nav>

                    {/* CTA button – emerald groen */}
                    <button
                        onClick={() => scrollToSection('prijzen')}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                    >
                        Bestel Nu
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden text-gray-700"
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {mobileMenu && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <div className="px-6 py-6 space-y-4">
                        <button onClick={() => scrollToSection('ingredienten')} className="block w-full text-left text-lg font-medium text-gray-800">
                            Ingrediënten
                        </button>
                        <button onClick={() => scrollToSection('wetenschap')} className="block w-full text-left text-lg font-medium text-gray-800">
                            Wetenschap
                        </button>
                        <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-lg font-medium text-gray-800">
                            Reviews
                        </button>
                        <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-lg font-medium text-gray-800">
                            FAQ
                        </button>
                        <button onClick={() => scrollToSection('prijzen')} className="block bg-emerald-600 text-white text-center py-4 rounded-xl font-bold text-lg w-full">
                            Bestel Nu
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
