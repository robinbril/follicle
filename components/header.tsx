"use client"

import { useState, useEffect } from 'react'
import { Timer, Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [timeLeft, setTimeLeft] = useState("")

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] border-b border-[#D4AF37]/20">
            {/* Urgency bar - Bordeaux */}
            <div className="bg-[#4A0E2A] text-white py-2.5 text-center text-sm font-medium tracking-wide">
                <div className="flex items-center justify-center gap-2">
                    <Timer className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[#F8F5F0]">Exclusieve aanbieding eindigt over:</span>
                    <span className="font-bold text-[#D4AF37] font-mono">{timeLeft}</span>
                </div>
            </div>

            {/* Main nav - Black */}
            <div className="px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo - Gold Serif */}
                    <h1 className="text-3xl font-serif tracking-widest text-[#D4AF37]">
                        REVIVE
                    </h1>

                    {/* Desktop menu - White with Gold hover */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-[#F8F5F0] font-light tracking-wide hover:text-[#D4AF37] transition border-b border-transparent hover:border-[#D4AF37] pb-1"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* CTA - Bordeaux/Gold */}
                    <button
                        onClick={() => scrollToSection('prijzen')}
                        className="bg-[#4A0E2A] text-[#D4AF37] border border-[#D4AF37] px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-[#D4AF37] hover:text-[#4A0E2A] transition-all duration-300"
                    >
                        Reserveer
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden text-[#D4AF37]"
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileMenu && (
                <div className="lg:hidden bg-[#0F0F0F] border-t border-[#D4AF37]/20 shadow-2xl">
                    <div className="px-6 py-8 space-y-6">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block w-full text-left text-lg font-light text-[#F8F5F0] hover:text-[#D4AF37] transition"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('prijzen')}
                            className="block bg-[#4A0E2A] text-[#D4AF37] border border-[#D4AF37] text-center py-4 rounded-sm uppercase tracking-widest font-bold text-sm w-full hover:bg-[#D4AF37] hover:text-[#4A0E2A] transition"
                        >
                            Reserveer Nu
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
