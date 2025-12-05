"use client"

export default function TopBar() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white py-3 relative overflow-hidden sticky top-0 z-50">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />

            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 text-center relative z-10">
                {/* Honest delivery info */}
                <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <span className="font-bold text-sm sm:text-lg">
                        Op werkdagen voor 17:00 besteld = morgen in huis
                    </span>
                </div>

                {/* Mini CTA */}
                <button
                    onClick={scrollToPricing}
                    className="hidden sm:inline-block bg-white text-emerald-600 px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition whitespace-nowrap cursor-pointer"
                >
                    Bestel nu →
                </button>
            </div>
        </div>
    )
}
