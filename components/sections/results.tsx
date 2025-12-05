"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const results = [
    {
        id: 1,
        name: 'Thomas',
        duration: 'Na 12 weken',
        badge: 'Haargroei',
        beforeImage: '/images/results/result-1-before.png',
        afterImage: '/images/results/result-1-after.png',
    },
    {
        id: 2,
        name: 'Mark',
        duration: 'Na 8 weken',
        badge: 'Versteviging',
        beforeImage: '/images/results/result-2-before.png',
        afterImage: '/images/results/result-2-after.png',
    },
    {
        id: 3,
        name: 'Jordy',
        duration: 'Na 16 weken',
        badge: 'Haargroei',
        beforeImage: '/images/results/result-3-before.png',
        afterImage: '/images/results/result-3-after.png',
    },
]

export default function Results() {
    const [activeSliders, setActiveSliders] = useState<Record<number, number>>({})

    const handleSliderChange = (id: number, value: number) => {
        setActiveSliders(prev => ({ ...prev, [id]: value }))
    }

    return (
        <section id="resultaten" className="py-16 sm:py-24 bg-[#111111]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-14">
                    <span className="text-[#C4956A] text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                        ECHTE RESULTATEN
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 sm:mt-4 mb-3">
                        <span className="text-[#C4956A]">847+</span> tevreden klanten
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
                        Bekijk de transformaties van echte REVIVE gebruikers
                    </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {results.map((result, index) => {
                        const sliderValue = activeSliders[result.id] ?? 50

                        return (
                            <motion.div
                                key={result.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#C4956A]/30 transition-colors"
                            >
                                {/* Image Container with Slider */}
                                <div className="relative aspect-[4/5] overflow-hidden cursor-ew-resize group">
                                    {/* After Image (background) */}
                                    <Image
                                        src={result.afterImage}
                                        alt={`${result.name} na`}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Before Image (clipped) */}
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: `${sliderValue}%` }}
                                    >
                                        <div className="relative h-full" style={{ width: `${10000 / sliderValue}%` }}>
                                            <Image
                                                src={result.beforeImage}
                                                alt={`${result.name} voor`}
                                                fill
                                                className="object-cover object-left"
                                            />
                                        </div>
                                    </div>

                                    {/* Slider Line */}
                                    <div
                                        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                                        style={{ left: `${sliderValue}%` }}
                                    >
                                        {/* Slider Handle */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Labels */}
                                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-bold uppercase tracking-wider">
                                        Voor
                                    </div>
                                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#C4956A] rounded text-white text-xs font-bold uppercase tracking-wider">
                                        Na
                                    </div>

                                    {/* Invisible Slider Input */}
                                    <input
                                        type="range"
                                        min="10"
                                        max="90"
                                        value={sliderValue}
                                        onChange={(e) => handleSliderChange(result.id, Number(e.target.value))}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-white font-bold text-lg">{result.name}</h3>
                                            <p className="text-gray-400 text-sm">{result.duration}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-[#C4956A]/20 text-[#C4956A] text-xs font-semibold rounded-full">
                                            {result.badge}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-gray-800">
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white">85%</div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">Ziet resultaat</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white">90</div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">Dagen gemiddeld</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white">4.8★</div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">Beoordeling</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white">0</div>
                        <div className="text-gray-400 text-xs sm:text-sm mt-1">Bijwerkingen</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
