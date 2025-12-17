"use client"

import { Shield } from 'lucide-react'
import { motion } from 'framer-motion'

interface PaymentTrustProps {
    variant?: 'light' | 'dark'
}

export function PaymentTrust({ variant = 'light' }: PaymentTrustProps) {
    const isDark = variant === 'dark'
    
    return (
        <div className="flex flex-col items-center gap-6 mt-8">
            {/* Logos Bar */}
            <div className={`flex items-center gap-6 md:gap-10 grayscale ${isDark ? 'opacity-30 invert' : 'opacity-40'}`}>
                {/* iDEAL */}
                <div className="flex items-center">
                    <span className={`text-[20px] font-black italic tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>iDEAL</span>
                </div>

                {/* Klarna */}
                <div className="flex items-center">
                    <span className={`text-[18px] font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>Klarna.</span>
                </div>

                {/* CC Text style as per screenshot */}
                <div className="hidden sm:flex flex-col items-start leading-[1.1]">
                    <span className={`text-[8px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Veilig betalen met</span>
                    <span className={`text-[11px] font-black uppercase tracking-[0.05em] italic ${isDark ? 'text-white' : 'text-gray-900'}`}>Mastercard Visa</span>
                </div>
                
                {/* Mobile CC Text */}
                <span className={`sm:hidden text-[10px] font-black uppercase tracking-[0.05em] italic ${isDark ? 'text-white' : 'text-gray-900'}`}>Mastercard Visa</span>
            </div>

            {/* SSL Badge */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}
            >
                <Shield className="w-3 h-3 text-[#C4956A]" />
                <span className={`text-[9px] font-bold uppercase tracking-[0.15em] ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                    256-bit SSL beveiligde verbinding
                </span>
            </motion.div>
        </div>
    )
}
