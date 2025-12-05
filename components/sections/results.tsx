"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const results = [
    {
        id: 1,
        name: 'Thomas',
        duration: '12 weken',
        category: 'Haargroei',
        image: '/images/results/result-1-combined.png',
    },
    {
        id: 2,
        name: 'Mark',
        duration: '8 weken',
        category: 'Haarlijn',
        image: '/images/results/result-2-combined.jpg',
    },
]

export default function Results() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showAfter, setShowAfter] = useState(false)

    const currentResult = results[currentIndex]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % results.length)
        setShowAfter(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
        setShowAfter(false)
    }

    return (
        <section id="resultaten" className="py-16 sm:py-20 bg-[#0A0A0A]">
            <div className="max-w-md mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <p className="text-xs tracking-[3px] text-[#C4956A] uppercase mb-4 font-medium">
                        Echte Resultaten
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
                        <span className="text-[#C4956A] font-medium">847+</span> tevreden klanten
                    </h2>
                    <p className="text-sm text-white/40 leading-relaxed max-w-lg mx-auto">
                        Alle beschadigde haarzakjes groeien terug. Ook al het nieuwe donshaar wat je de eerste weken ontwikkelt kan volledig sterk en normaal haar worden.
                    </p>
                </div>

                {/* Results Card - Smaller */}
                <div className="bg-gradient-to-b from-[#141414] to-[#0F0F0F] rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">

                    {/* Image Container with Flip */}
                    <div
                        className="relative w-full aspect-square cursor-pointer overflow-hidden"
                        onClick={() => setShowAfter(!showAfter)}
                    >
                        {/* Before Image (Left half of combined) */}
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-out overflow-hidden ${showAfter ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={currentResult.image}
                                    alt={`${currentResult.name} voor`}
                                    fill
                                    className="object-cover object-left"
                                    style={{ objectPosition: '0% center' }}
                                />
                            </div>
                        </div>

                        {/* After Image (Right half of combined) */}
                        <div
                            className={`absolute inset-0 transition-all duration-500 ease-out overflow-hidden ${showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                }`}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={currentResult.image}
                                    alt={`${currentResult.name} na`}
                                    fill
                                    className="object-cover scale-[1.3]"
                                    style={{ objectPosition: '95% center' }}
                                />
                            </div>
                        </div>

                        {/* Label */}
                        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${showAfter
                            ? 'bg-[#C4956A] text-white'
                            : 'bg-black/70 backdrop-blur-xl text-white'
                            }`}>
                            {showAfter ? 'Na' : 'Voor'} — Tik om te wisselen
                        </div>
                    </div>

                    {/* Info Bar */}
                    <div className="flex items-center justify-between px-5 py-4 border-t border-white/[0.06]">
                        {/* Left: User Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4956A] to-[#8B6B4A] flex items-center justify-center text-sm font-semibold text-white">
                                {currentResult.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">
                                    {currentResult.name}
                                </p>
                                <p className="text-xs text-white/40">
                                    Na {currentResult.duration}
                                </p>
                            </div>
                        </div>

                        {/* Right: Badge + Navigation */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block px-4 py-1.5 bg-[#C4956A]/10 border border-[#C4956A]/30 rounded-full text-xs font-medium text-[#C4956A]">
                                {currentResult.category}
                            </div>

                            <div className="flex gap-1.5">
                                <button
                                    onClick={prevSlide}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
                                >
                                    <ChevronLeft className="w-4 h-4 text-white/50" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"
                                >
                                    <ChevronRight className="w-4 h-4 text-white/50" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {results.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setCurrentIndex(i)
                                setShowAfter(false)
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                                ? 'w-6 bg-[#C4956A]'
                                : 'w-1.5 bg-white/20 hover:bg-white/30'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 pt-8 border-t border-white/10">
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-semibold text-white">85%</div>
                        <div className="text-white/40 text-xs mt-1">Ziet resultaat</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-semibold text-white">90</div>
                        <div className="text-white/40 text-xs mt-1">Dagen gemiddeld</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-semibold text-white">4.8★</div>
                        <div className="text-white/40 text-xs mt-1">Beoordeling</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-semibold text-white">&lt;5%</div>
                        <div className="text-white/40 text-xs mt-1">Bijwerkingen</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
