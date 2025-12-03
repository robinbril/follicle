"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Youtube, ShieldCheck, Lock, CreditCard } from 'lucide-react'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 font-light">
                            Wetenschappelijk geformuleerd.
                            <br />
                            Klinisch bewezen.
                            <br />
                            Compromisloos.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-emerald-600 hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-emerald-600 hover:text-white transition-all duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-[#F8F5F0] font-bold text-xs tracking-[0.15em] mb-6 uppercase">Product</h4>
                        <ul className="space-y-4 text-sm text-[#94A3B8] font-light">
                            <li><Link href="/product/haar-serum-18" className="hover:text-emerald-500 transition-colors">Hair Serum</Link></li>
                            <li><Link href="/bundels" className="hover:text-emerald-500 transition-colors">Kuren & Bundels</Link></li>
                            <li><Link href="/garantie" className="hover:text-emerald-500 transition-colors">180 Dagen Garantie</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#F8F5F0] font-bold text-xs tracking-[0.15em] mb-6 uppercase">Wetenschap</h4>
                        <ul className="space-y-4 text-sm text-[#94A3B8] font-light">
                            <li><Link href="/wetenschap" className="hover:text-emerald-500 transition-colors">Ingrediënten</Link></li>
                            <li><Link href="/studies" className="hover:text-emerald-500 transition-colors">Klinische Studies</Link></li>
                            <li><Link href="/experts" className="hover:text-emerald-500 transition-colors">Dermatologen</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-[#F8F5F0] font-bold text-xs tracking-[0.15em] mb-6 uppercase">Blijf op de hoogte</h4>
                        <p className="text-[#94A3B8] text-xs mb-4 font-light">Ontvang exclusieve updates en wetenschappelijke inzichten.</p>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="email"
                                placeholder="E-mailadres"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F8F5F0] placeholder:text-[#525252] focus:outline-none focus:border-emerald-500 flex-1 transition-colors"
                            />
                            <button type="submit" className="bg-emerald-600 text-white px-4 py-3 rounded-sm font-bold text-sm hover:bg-emerald-500 transition-colors">
                                →
                            </button>
                        </form>
                    </div>
                </div>

                {/* Trust & Legal */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6 text-xs text-[#525252] font-light">
                        <Link href="/algemene-voorwaarden" className="hover:text-emerald-500 transition-colors">Algemene Voorwaarden</Link>
                        <Link href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-emerald-500 transition-colors">Cookies</Link>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-[10px] text-[#525252] max-w-2xl mx-auto leading-relaxed font-light">
                        © 2025 Revive Clinical. Alle rechten voorbehouden. *Resultaten kunnen variëren per individu. De informatie op deze website is niet bedoeld als vervanging voor professioneel medisch advies.
                    </p>
                </div>
            </div>
        </footer>
    )
}
