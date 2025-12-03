"use client"

import { useEffect, useState } from 'react'
import { Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [scrollDepth, setScrollDepth] = useState(0)

    useEffect(() => {
        let hasShown = false
        let timeoutId: NodeJS.Timeout

        // Exit-intent detection
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown && window.innerWidth >= 768) {
                setIsVisible(true)
                hasShown = true
            }
        }

        // Scroll depth tracking
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            const depth = (scrollTop / (documentHeight - windowHeight)) * 100

            setScrollDepth(depth)

            // Trigger at 75% scroll (less aggressive)
            if (depth >= 75 && !hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }

        // Time-based trigger (12 seconds)
        timeoutId = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }, 12000)

        // Only activate on desktop
        if (window.innerWidth >= 768) {
            document.addEventListener('mouseleave', handleMouseLeave)
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave)
            window.removeEventListener('scroll', handleScroll)
            clearTimeout(timeoutId)
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'discount_popup_email_captured', {
                event_category: 'conversion',
                event_label: 'Exit Intent 20% Discount',
            })
        }

        // TODO: Send email with handbook PDF containing REVIVE20 code on page 11
        console.log('Email captured:', email)

        // Show success message or redirect
        setIsVisible(false)
        alert('Check je inbox! Je ontvangt binnen 2 minuten het handboek met je exclusieve 20% kortingscode.')
    }

    if (!isVisible) return null

    return (
        <>
            {/* Dimmed overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
                onClick={() => setIsVisible(false)}
            />

            {/* Slide-in panel from right */}
            <div className="fixed top-0 right-0 h-full w-full md:w-[40%] bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out animate-slide-in-right overflow-y-auto">
                <div className="p-8 md:p-12 flex flex-col h-full">
                    {/* Emoji + Headline */}
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-full mb-6">
                            <Gift className="w-8 h-8 text-[#D4AF37]" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            💰 20% korting op je eerste bestelling
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Download ons <span className="font-semibold text-gray-900">Haargroei Handboek</span> en ontvang een
                            exclusieve kortingscode — alleen via deze popup.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                        <input
                            type="email"
                            placeholder="jouw@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-4 text-lg rounded-lg border-2 border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                            required
                        />

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#D4AF37] via-[#E8C89A] to-[#D4AF37] hover:from-[#C69563] hover:via-[#D4AF37] hover:to-[#C69563] text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            JA, STUUR MIJ DE KORTING
                        </Button>
                    </form>

                    {/* Social Proof */}
                    <div className="mb-8 py-6 border-y border-gray-200">
                        <p className="text-sm text-gray-600 text-center">
                            <span className="font-bold text-gray-900">2.847 mannen</span> gingen je voor
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-12">
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-600 text-xs">✓</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">48 uur geldig</span> — gebruik je code binnen 2 dagen
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-600 text-xs">✓</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">Gratis handboek</span> met wetenschappelijke uitleg
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-600 text-xs">✓</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">Geen spam</span> — uitschrijven kan altijd
                            </p>
                        </div>
                    </div>

                    {/* Spacer to push close button to bottom */}
                    <div className="flex-grow" />

                    {/* Close button - psychological trigger */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-sm text-gray-400 hover:text-gray-600 transition-colors text-center underline"
                    >
                        Nee, ik betaal liever volle prijs
                    </button>
                </div>
            </div>

            {/* Custom animation */}
            <style jsx>{`
                @keyframes slide-in-right {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.5s ease-out;
                }
            `}</style>
        </>
    )
}
