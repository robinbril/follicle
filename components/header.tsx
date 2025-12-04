"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Timer, Star, Search, User, Droplet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [timeLeft, setTimeLeft] = useState('04:12:33')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* --- MOBILE HEADER (Floating Island) --- */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
                {/* Top Bar - Black with Stars */}
                <div className="bg-black text-white py-2 text-center text-[10px] font-medium tracking-wide">
                    <div className="flex items-center justify-center gap-1.5">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-[#D4A574] text-[#D4A574]" />
                            ))}
                        </div>
                        <span className="opacity-90">4,8 gebaseerd op 847 beoordelingen</span>
                    </div>
                </div>

                {/* Floating Island Container */}
                <div className="px-4 pt-3 pb-2">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Main Header Row - Simplified */}
                        <div className="flex items-center justify-between px-4 py-3">
                            {/* Left: Menu only */}
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                <Menu className="w-6 h-6 text-gray-900" />
                            </button>

                            {/* Center: Logo */}
                            <Link href="/" className="font-extrabold text-xl tracking-tight text-gray-900">
                                REVIVE<span className="text-[#D4A574]">.</span>
                            </Link>

                            {/* Right: Cart only */}
                            <button className="relative">
                                <ShoppingBag className="w-5 h-5 text-gray-900" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A574] rounded-full text-[8px] font-bold text-white flex items-center justify-center">1</span>
                            </button>
                        </div>

                        {/* Bottom Bar: Promo */}
                        <div className="bg-gray-100 py-2 text-center">
                            <span className="text-[10px] font-black text-gray-800 tracking-[0.2em] uppercase">
                                Bestel voor 23:59 → Morgen in huis
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                        {['Wetenschap', 'Resultaten', 'Reviews', 'FAQ'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50"
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className="w-full bg-[#D4A574] hover:bg-[#C69563] text-white font-bold py-6 mt-2">
                            <Link href="#prijzen" onClick={() => setIsMobileMenuOpen(false)}>
                                BESTEL NU
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

            {/* --- DESKTOP HEADER (Original) --- */}
            <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
                {/* Top Bar - Clinical Trust */}
                <div className="bg-emerald-600 text-white py-2 text-center text-sm font-medium tracking-wide">
                    <div className="flex items-center justify-center gap-2">
                        <Timer className="w-4 h-4" />
                        <span>Bestel voor 23:59 = Morgen in huis</span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="relative z-50">
                            <h1 className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                                REVIVE<span className="text-emerald-600">.</span>
                            </h1>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="flex items-center gap-8">
                            {['Wetenschap', 'Resultaten', 'Reviews', 'FAQ'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="flex items-center gap-4">
                            <Button asChild className={`font-bold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isScrolled ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}>
                                <Link href="#prijzen">
                                    BESTEL NU
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
