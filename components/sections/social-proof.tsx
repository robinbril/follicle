"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos = [
    {
        id: 1,
        title: "GHK-Cu: De wetenschap",
        creator: "@dermatologyexpert",
        thumbnail: "/images/social/ghk-cu-1.jpg",
        category: "ghk-cu",
        embedUrl: "https://www.tiktok.com/embed/v2/1234567" // Replace with actual TikTok embed URL
    },
    {
        id: 2,
        title: "Redensyl vs Minoxidil",
        creator: "@hairscience",
        thumbnail: "/images/social/redensyl-1.jpg",
        category: "redensyl",
        embedUrl: "https://www.tiktok.com/embed/v2/2345678"
    },
    {
        id: 3,
        title: "24 Studies Review",
        creator: "@sciencehaircare",
        thumbnail: "/images/social/review-1.jpg",
        category: "all",
        embedUrl: "https://www.tiktok.com/embed/v2/3456789"
    },
    {
        id: 4,
        title: "Capixyl DHT Remming",
        creator: "@follicletech",
        thumbnail: "/images/social/capixyl-1.jpg",
        category: "capixyl",
        embedUrl: "https://www.tiktok.com/embed/v2/4567890"
    }
]

const filters = [
    { id: 'all', label: 'Alle' },
    { id: 'ghk-cu', label: 'GHK-Cu' },
    { id: 'redensyl', label: 'Redensyl' },
    { id: 'reviews', label: 'Reviews' }
]

export default function SocialProof() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

    const filteredVideos = activeFilter === 'all'
        ? videos
        : videos.filter(v => v.category === activeFilter)

    return (
        <section className="py-16 sm:py-20 bg-[#1a1a1a] relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#C4956A]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        De wetenschap achter REVIVE
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg italic">
                        Bekijk de research. Oordeel zelf.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-[#C4956A] text-white'
                                    : 'bg-transparent border border-[#333] text-gray-400 hover:border-[#C4956A] hover:text-white'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-[#262626] cursor-pointer"
                            onClick={() => setSelectedVideo(video.id)}
                        >
                            {/* Placeholder for video thumbnail */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#C4956A]/20 to-[#262626] flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all">
                                    <Play className="w-6 h-6 text-white ml-1" />
                                </div>
                            </div>

                            {/* Video Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 mb-1">
                                    {video.title}
                                </p>
                                <p className="text-gray-400 text-[10px] sm:text-xs">
                                    {video.creator}
                                </p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C4956A] transition-all rounded-xl" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 sm:mt-12"
                >
                    <p className="text-gray-400 text-sm sm:text-base">
                        Alle bronnen en studies zijn{' '}
                        <a href="#ingredienten" className="text-[#C4956A] hover:underline">
                            openbaar beschikbaar
                        </a>
                    </p>
                </motion.div>
            </div>

            {/* Video Modal (simplified - replace with actual TikTok embed) */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div className="relative max-w-md w-full aspect-[9/16] bg-[#262626] rounded-xl">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-10 right-0 text-white hover:text-[#C4956A] transition-colors"
                        >
                            Sluiten
                        </button>
                        {/* Replace this with actual TikTok embed iframe */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            TikTok embed komt hier (video ID: {selectedVideo})
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
