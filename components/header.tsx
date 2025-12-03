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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            {/* Urgency bar - emerald */}
            <div className="bg-[#059669] text-white py-2.5 text-center text-sm font-medium">
                <div className="flex items-center justify-center gap-2">
                    <Timer className="w-4 h-4 animate-pulse" />
                    Speciale introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span>
                    <span className="hidden md:inline">• 2.847 mannen gingen je voor vandaag</span>
                </div>
            </div>

            {/* Main nav - wit met grijze onderlijn */}
            <div className="px-6 py-5 border-b border-[#e2e8f0]">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo - altijd zwart */}
                    <h1 className="text-2xl sm:text-3xl font-black tracking-tighter text-black">
                        FOLLICLE
                    </h1>

                    {/* Desktop menu - zwarte tekst, geen borders */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-black font-medium hover:text-[#059669] transition"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Bestel Nu - Solid Emerald voor max leesbaarheid */}
                    <button
                        onClick={() => scrollToSection('prijzen')}
                        className="bg-[#059669] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                    >
                        Bestel Nu →
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden text-black"
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileMenu && (
                <div className="lg:hidden bg-white border-t border-[#e2e8f0] shadow-lg">
                    <div className="px-6 py-6 space-y-4">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block w-full text-left text-lg font-medium text-black hover:text-[#059669] transition"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('prijzen')}
                            className="block bg-[#059669] text-white text-center py-4 rounded-xl font-bold text-lg w-full"
                        >
                            Bestel Nu
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
