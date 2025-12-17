"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Gift, ShieldCheck, ArrowRight } from 'lucide-react'

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        setIsMounted(true)
        let hasShown = false
        const timeoutId = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true)
                hasShown = true
            }
        }, 20000) // Hard 20 seconds

        return () => clearTimeout(timeoutId)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'discount_popup_email_captured', {
                event_category: 'conversion',
                event_label: 'Exit Intent 20% Discount',
            })
        }
        setIsVisible(false)
        alert('Check je inbox! Je ontvangt binnen 2 minuten het handboek met je exclusieve 20% kortingscode.')
    }

    if (!isMounted) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Glassy backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/40 backdrop-blur-sm z-[100]"
                        onClick={() => setIsVisible(false)}
                    />

                    {/* Centered Luxury Glass Box */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-6 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-lg bg-white/80 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.1)] border border-white/50 relative pointer-events-auto"
                        >
                            {/* Animated Liquid Accent (Inherited from ingredients) */}
                            <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
                                <motion.div 
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full bg-[linear-gradient(90deg,#C4956A_0%,#3B82F6_25%,#10B981_50%,#EC4899_75%,#C4956A_100%)] opacity-80"
                                />
                            </div>

                            {/* Internal Light Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#C4956A]/5 blur-[60px] rounded-full pointer-events-none" />

                            <div className="p-8 sm:p-14 relative z-10 text-center">
                                {/* Close button */}
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C4956A]/5 border border-[#C4956A]/10 mb-8">
                                    <Sparkles className="w-3.5 h-3.5 text-[#C4956A]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C4956A]">Cadeau voor jou</span>
                                </div>
                                
                                <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none mb-4">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4956A] to-[#8C6A4C]">20% Korting.</span>
                                </h2>
                                
                                <p className="text-gray-500 text-[13px] font-medium mb-8 max-w-[260px] mx-auto leading-relaxed">
                                    Ontvang je kortingscode, gratis Derma Roller én het Haargroei Handboek.
                                </p>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            placeholder="Jouw e-mailadres"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-8 py-5 bg-white border border-gray-100 rounded-[24px] text-gray-900 placeholder:text-gray-300 shadow-sm focus:outline-none transition-all text-center"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full py-6.5 text-sm font-black bg-[#C4956A] hover:bg-[#B38559] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-[24px] group"
                                    >
                                        <span className="flex items-center justify-center gap-3">
                                            ONTGRENDEL KORTING <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Button>
                                </form>

                                {/* Decline Button */}
                                <div className="mt-8">
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-gray-900 transition-colors"
                                    >
                                        Nee bedankt
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

