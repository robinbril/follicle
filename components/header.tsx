"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Star, ChevronRight, CheckCircle2, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
    { name: 'De Formule', label: 'Ingrediënten & Werking', href: '#ingrediënten' },
    { name: 'Wetenschap', label: 'Klinische Studies', href: '#wetenschap' },
    { name: 'Resultaten', label: 'Echte Verhalen', href: '#reviews' },
    { name: 'Klantenservice', label: 'FAQ & Contact', href: '#faq' }
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [showDeliveryBar, setShowDeliveryBar] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY
            const windowHeight = window.innerHeight
            const totalHeight = document.body.scrollHeight
            
            // Show delivery bar after 1/3 of the page scroll
            setIsScrolled(scrollPos > 10)
            setShowDeliveryBar(scrollPos > (totalHeight / 3))
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* --- MOBILE HEADER (Premium Island) --- */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[60]">
                <div className="px-4 pt-4">
                    <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className={`bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}
                    >
                        <div className="flex items-center justify-between px-5 py-2">
                            {/* Left: Menu Trigger */}
                            <button 
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="w-10 h-10 flex items-center justify-center -ml-2"
                            >
                                <div className="space-y-1.5">
                                    <div className="w-5 h-[2px] bg-gray-900 rounded-full" />
                                    <div className="w-3 h-[2px] bg-gray-900 rounded-full" />
                                </div>
                            </button>

                            {/* Center: Logo */}
                            <Link href="#hero" className="font-black text-xl tracking-tighter text-gray-900">
                                REVIVE<span className="text-[#C4956A]">.</span>
                            </Link>

                            {/* Right: Cart */}
                            <button className="relative w-10 h-10 flex items-center justify-center -mr-2">
                                <ShoppingBag className="w-5 h-5 text-gray-900" />
                                <span className="absolute top-2 right-2 w-4 h-4 bg-[#C4956A] rounded-full text-[8px] font-bold text-white flex items-center justify-center border-2 border-white">1</span>
                            </button>
                        </div>

                        {/* Animated Delivery Bar - Visible after 1/3 scroll */}
                        <AnimatePresence>
                            {showDeliveryBar && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="bg-[#fcfcfc] border-t border-gray-50 py-2 text-center overflow-hidden"
                                >
                                    <motion.span 
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="text-[10px] font-black text-gray-400 tracking-[0.15em] uppercase"
                                    >
                                        Bestel voor 23:59 → Morgen in huis
                                    </motion.span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* --- FULLSCREEN MOBILE MENU (The WOW Factor) --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-[100] p-6 pt-16 flex flex-col"
                    >
                        {/* Close Button */}
                        <motion.button 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        {/* Menu Links */}
                        <nav className="flex flex-col gap-6 mt-10">
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link 
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="group block"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#C4956A] mb-1 block">
                                                    0{i + 1}
                                                </span>
                                                <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-none group-active:text-[#C4956A] transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-400 mt-1 font-medium italic">
                                                    {item.label}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-[#C4956A] transition-colors" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Conversion Footer inside Menu */}
                        <div className="mt-auto space-y-6">
                            {/* Trust Badge */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-[#F9F9F9] rounded-2xl p-5"
                            >
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">4.8 / 5 Trustpilot</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                                        <CheckCircle2 className="w-4 h-4 text-[#C4956A]" />
                                        180 DAGEN GARANTIE
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                                        <Truck className="w-4 h-4 text-[#C4956A]" />
                                        GRATIS VERZENDING VANAF €50
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main CTA */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button asChild className="w-full bg-[#C4956A] hover:bg-[#B38559] text-white font-black py-7 rounded-2xl text-lg shadow-xl">
                                    <Link href="#prijzen" onClick={() => setIsMobileMenuOpen(false)}>
                                        START BEHANDELING
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- DESKTOP HEADER (Premium & Minimal) --- */}
            <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                {/* Delivery Bar - Visible after 1/3 scroll */}
                <AnimatePresence>
                    {showDeliveryBar && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-[#111] text-white/90 py-2 text-center text-[10px] font-black tracking-[0.25em] uppercase"
                        >
                            Bestel voor 23:59 → Morgen in huis
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className={`bg-white transition-all duration-500 ${isScrolled ? 'py-3 shadow-xl' : 'py-5'}`}>
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link href="#hero" className="relative z-50">
                                <h1 className="text-2xl font-black tracking-tighter text-gray-900 border-b-4 border-[#C4956A]">
                                    REVIVE<span className="text-[#C4956A]">.</span>
                                </h1>
                            </Link>

                            {/* Nav Links */}
                            <nav className="flex items-center gap-10">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#C4956A] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Actions */}
                            <div className="flex items-center gap-6">
                                <Link href="#reviews" className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-black text-gray-900">4.8 RATING</span>
                                </Link>
                                <Button asChild className="bg-[#111] hover:bg-gray-800 text-white font-black px-8 py-6 rounded-full text-xs tracking-widest uppercase">
                                    <Link href="#prijzen">BESTEL NU</Link>
                                </Button>
                                <button className="relative">
                                    <ShoppingBag className="w-6 h-6 text-gray-900" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C4956A] rounded-full text-[8px] font-bold text-white flex items-center justify-center">1</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
