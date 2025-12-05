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

        // Time-based trigger (18 seconds)
        timeoutId = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }, 18000)

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
                <div className="p-8 md:p-12 flex flex-col h-full bg-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

                    {/* Header */}
                    <div className="mb-8 relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#D4A574]/10 text-[#D4A574] text-xs font-bold tracking-wider uppercase mb-6">
                            Exclusief Aanbod
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Wacht! Vergeet je <span className="text-emerald-600">20% voordeel</span> niet.
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            Sluit je aan bij de Revive community. Ontvang direct je kortingscode en ons wetenschappelijk <span className="font-semibold text-gray-900">Haargroei Handboek</span>.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8 relative z-10">
                        <div>
                            <input
                                type="email"
                                placeholder="Jouw e-mailadres"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-6 py-4 text-base bg-gray-50 border border-gray-200 rounded-lg focus:border-[#D4A574] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg font-bold bg-[#D4A574] hover:bg-[#C69563] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            CLAIM 20% KORTING
                        </Button>
                        <p className="text-xs text-center text-gray-400 mt-3">
                            *Code wordt direct naar je inbox verstuurd
                        </p>
                    </form>

                    {/* Benefits */}
                    <div className="space-y-4 mb-8 relative z-10">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-600">
                                <Gift className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Direct resultaat</p>
                                <p className="text-xs text-gray-500">Code is 48 uur geldig</p>
                            </div>
                        </div>
                    </div>

                    {/* Close button - positioned right after content */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="mt-8 text-xs text-gray-400 hover:text-gray-600 transition-colors text-center font-medium tracking-wide uppercase hover:underline"
                    >
                        Nee bedankt, ik betaal de volle prijs
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
