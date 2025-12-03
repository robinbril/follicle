"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Timer } from 'lucide-react'
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
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
                    <nav className="hidden lg:flex items-center gap-8">
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
                    <div className="hidden lg:flex items-center gap-4">
                        <Button asChild className={`font-bold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${isScrolled ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}>
                            <Link href="#prijzen">
                                BESTEL NU
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden z-50 transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 pt-32 px-6 lg:hidden">
                    <nav className="flex flex-col gap-6">
                        {['Wetenschap', 'Resultaten', 'Reviews', 'FAQ'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-medium text-gray-900 border-b border-gray-100 pb-4"
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg mt-4 font-bold shadow-lg">
                            <Link href="#prijzen" onClick={() => setIsMobileMenuOpen(false)}>
                                BESTEL NU
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
