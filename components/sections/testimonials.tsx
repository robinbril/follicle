"use client"

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        name: 'Ralph R.',
        initials: 'RR',
        rating: 5,
        quote: 'Na 8 weken zag ik al verschil bovenop mijn hoofd. Nu, na 4 maanden, is het echt zichtbaar.',
        duration: '4 maanden gebruik',
        verified: true,
    },
    {
        id: 2,
        name: 'Duncan B.',
        initials: 'DB',
        rating: 5,
        quote: 'Makkelijk in gebruik, past gewoon in mijn ochtendroutine. Geen plakkerig gevoel, droogt snel. Na 6 weken zag ik de eerste nieuwe haartjes.',
        duration: '3 maanden gebruik',
        verified: true,
    },
    {
        id: 3,
        name: 'Thomas H.',
        initials: 'TH',
        rating: 4,
        quote: 'Was eerst skeptisch, maar na 3 maanden moet ik toegeven: mijn haar voelt dikker en de kale plekken worden minder zichtbaar.',
        duration: '3 maanden gebruik',
        verified: true,
    },
    {
        id: 4,
        name: 'Anton B.',
        initials: 'AB',
        rating: 5,
        quote: 'Eindelijk iets zonder bijwerkingen. Bij minoxidil kreeg ik hartkloppingen, dit werkt zonder gedoe. Resultaat duurde langer maar het is er.',
        duration: '5 maanden gebruik',
        verified: true,
    },
    {
        id: 5,
        name: 'Adriaan',
        initials: 'AD',
        rating: 5,
        quote: 'Mijn vriendin zag het eerder dan ik. De dunne plek bovenop wordt langzaam voller. Blijf het gebruiken.',
        duration: '4 maanden gebruik',
        verified: true,
    },
]

export default function Testimonials() {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#D4A574] text-xs font-semibold tracking-[0.2em] uppercase">
                        WAT KLANTEN ZEGGEN
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-3">
                        Echte ervaringen met REVIVE
                    </h2>
                    <p className="text-gray-600 text-base max-w-xl mx-auto">
                        Wat gebruikers zeggen over hun resultaten
                    </p>
                </div>

                {/* Desktop Grid - First 3 reviews */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                {/* Avatar with initials */}
                                <div className="w-12 h-12 rounded-full bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#D4A574] font-bold text-sm">
                                        {testimonial.initials}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-900 text-sm">
                                        {testimonial.name}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                        <span className="flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                            {testimonial.duration}
                                        </span>
                                    </div>
                                    {testimonial.verified && (
                                        <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium mt-1">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Geverifieerde koper
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Horizontal Scroll - All 5 reviews */}
                <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                    <div className="flex gap-4 pb-4">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                            >
                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 text-base leading-relaxed mb-6">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar with initials */}
                                    <div className="w-12 h-12 rounded-full bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-[#D4A574] font-bold text-sm">
                                            {testimonial.initials}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 text-sm">
                                            {testimonial.name}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                            <span className="flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                                {testimonial.duration}
                                            </span>
                                        </div>
                                        {testimonial.verified && (
                                            <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium mt-1">
                                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                Geverifieerde koper
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
                        <div className="flex -space-x-2">
                            {testimonials.slice(0, 4).map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C69563] border-2 border-white flex items-center justify-center text-white font-bold text-xs"
                                >
                                    {testimonial.initials[0]}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">4.8</span>
                            <span className="text-sm text-gray-500">(127 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
