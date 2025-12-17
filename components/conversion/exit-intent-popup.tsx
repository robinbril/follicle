"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [scrollDepth, setScrollDepth] = useState(0)

    useEffect(() => {
        let hasShown = false
        let timeoutId: NodeJS.Timeout

        // ONLY time-based trigger - exactly 20 seconds, no exceptions
        timeoutId = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }, 20000) // Hard 20 seconds

        return () => {
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
                    {/* Close X button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Sluiten"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Header - Clean, no manipulation */}
                    <div className="mb-8 relative z-10 mt-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 leading-tight">
                            Nog 20% korting meenemen?
                        </h2>

                        <p className="text-gray-600 text-base">
                            + Gratis Haargroei Handboek
                        </p>
                    </div>

                    {/* Form - Simple */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-6 relative z-10">
                        <div>
                            <input
                                type="email"
                                placeholder="Jouw e-mailadres"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 text-base bg-gray-50 border border-[#E8E4DF] rounded-xl focus:border-[#C4956A] focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg font-semibold bg-[#C4956A] hover:bg-[#B38559] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                        >
                            Stuur mijn korting →
                        </Button>
                    </form>

                    {/* Decline - Respectful */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-sm text-gray-400 hover:text-gray-600 transition-colors text-center underline"
                    >
                        Nee, bedankt
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
