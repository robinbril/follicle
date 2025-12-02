"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-white">
                            FOLLICLE
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#ingredienten"
                            className="text-white hover:text-[rgb(var(--accent-purple))] transition-colors font-medium"
                        >
                            Ingrediënten
                        </Link>
                        <Link
                            href="#wetenschap"
                            className="text-white hover:text-[rgb(var(--accent-purple))] transition-colors font-medium"
                        >
                            Wetenschap
                        </Link>
                        <Link
                            href="#reviews"
                            className="text-white hover:text-[rgb(var(--accent-purple))] transition-colors font-medium"
                        >
                            Reviews
                        </Link>
                        <Link
                            href="#faq"
                            className="text-white hover:text-[rgb(var(--accent-purple))] transition-colors font-medium"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#prijzen"
                            className="bg-[rgb(var(--accent-purple))] hover:bg-[rgb(var(--accent-purple-hover))] text-white px-6 py-2 font-semibold transition-colors"
                        >
                            Bestel Nu
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-neutral-800">
                    <div className="px-4 pt-2 pb-6 space-y-3">
                        <Link
                            href="#ingredienten"
                            className="block px-3 py-2 text-white hover:text-[rgb(var(--accent-purple))] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ingrediënten
                        </Link>
                        <Link
                            href="#wetenschap"
                            className="block px-3 py-2 text-white hover:text-[rgb(var(--accent-purple))] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Wetenschap
                        </Link>
                        <Link
                            href="#reviews"
                            className="block px-3 py-2 text-white hover:text-[rgb(var(--accent-purple))] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Reviews
                        </Link>
                        <Link
                            href="#faq"
                            className="block px-3 py-2 text-white hover:text-[rgb(var(--accent-purple))] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#prijzen"
                            className="block w-full bg-[rgb(var(--accent-purple))] hover:bg-[rgb(var(--accent-purple-hover))] text-white px-6 py-3 font-semibold transition-colors text-center mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Bestel Nu
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
