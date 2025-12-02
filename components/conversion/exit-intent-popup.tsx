"use client"

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        let hasShown = false

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }

        // Only show on desktop
        if (window.innerWidth >= 768) {
            document.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Track event
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'exit_intent_email_captured', {
                event_category: 'engagement',
                event_label: 'Exit Intent Popup',
            })
        }
        console.log('Email captured:', email)
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="glass rounded-3xl p-8 max-w-lg w-full relative animate-scale-in">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="text-2xl font-bold mb-2 font-display">
                        Wacht! Gratis Haarverlies Handboek
                    </h3>
                    <p className="text-neutral-400">
                        Krijg ons complete guide over haargroei, voeding en ingrediënten.
                        Geen spam, alleen waardevolle tips.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="jouw@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-primary-500 focus:outline-none"
                        required
                    />
                    <Button type="submit" className="w-full">
                        DOWNLOAD GRATIS
                    </Button>
                </form>

                <p className="text-xs text-neutral-500 text-center mt-4">
                    We respecteren je privacy. Uitschrijven kan altijd.
                </p>
            </div>
        </div>
    )
}
