"use client"

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        id: 1,
        name: 'Thomas van der Berg',
        age: 34,
        location: 'Amsterdam',
        rating: 5,
        mainQuote: '"Na 8 weken zag ik al verschil in mijn kruin. Nu, na 4 maanden, is het resultaat echt ongelooflijk."',
        details: 'Gebruiksgemak was voor mij belangrijk - dit werkt perfect in mijn ochtendroutine. Geen plakkerig haar, droogt snel. Eerste kleine haartjes zag ik na 6 weken. Nu zie ik echt voller haar waar het dunner werd.',
        timeline: '4 maanden gebruik',
        verified: true,
    },
    {
        id: 2,
        name: 'Mark de Vries',
        age: 29,
        location: 'Rotterdam',
        rating: 5,
        mainQuote: '"Geen bijwerkingen zoals bij Minoxidil. Echt zo blij dat ik dit heb gevonden."',
        details: 'Ik had hoofdhuid irritatie van Minoxidil, dus was sceptisch. REVIVE voelt mild aan, geen jeuk. Na 10 weken begon ik dikkere haren te zien bij mijn inhammen. Super makkelijk te gebruiken, gewoon voor het slapen.',
        timeline: '12 weken gebruik',
        verified: true,
    },
    {
        id: 3,
        name: 'Jordy Peters',
        age: 41,
        location: 'Utrecht',
        rating: 5,
        mainQuote: '"Ik had niet verwacht dat het zo goed zou werken. Mijn vrouw merkte het al na 2 maanden op."',
        details: 'Begonnen met weinig verwachtingen na jaren uitval. Week 8-10 zag ik kleine babyhaartjes. Nu, maand 5, is mijn haarlijn zichtbaar verbeterd. Zou aanraden om geduldig te zijn - het werkt, maar langzaam en natuurlijk.',
        timeline: '5 maanden gebruik',
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
                        Lees hoe anderen hun haargroei ervaren, wanneer ze resultaat zagen, en hoe je het gebruikt
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
                                ))}
                            </div>

                            {/* Main Quote */}
                            <Quote className="w-8 h-8 text-[#D4A574]/20 mb-3" />
                            <p className="text-gray-900 font-medium text-base mb-4 leading-relaxed">
                                {testimonial.mainQuote}
                            </p>

                            {/* Detailed Experience */}
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {testimonial.details}
                            </p>

                            {/* Timeline Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full text-emerald-700 text-xs font-semibold mb-4">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                {testimonial.timeline}
                            </div>

                            {/* Author Info */}
                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">
                                            {testimonial.name}, {testimonial.age}
                                        </p>
                                        <p className="text-gray-500 text-xs">{testimonial.location}</p>
                                    </div>
                                    {testimonial.verified && (
                                        <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Geverifieerd
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
                        <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C69563] border-2 border-white flex items-center justify-center text-white font-bold text-xs"
                                >
                                    {String.fromCharCode(65 + i)}
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
                            <span className="text-sm text-gray-500">(847 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
