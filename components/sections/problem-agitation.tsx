export default function ProblemAgitation() {
    return (
        <section className="py-20 sm:py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <p className="text-sm font-mono text-green-400 bg-green-950 px-4 py-2 rounded-full border border-green-800 inline-block uppercase tracking-widest">
                        HET PROBLEEM
                    </p>
                </div>

                {/* Headline - HARDER */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-4 leading-tight">
                    Minoxidil werkt…
                    <br />
                    <span className="text-red-400">tot je libido, hart of portemonnee het opgeeft.</span>
                </h2>

                <p className="text-xl text-center text-neutral-300 max-w-3xl mx-auto mb-16">
                    Duizenden mannen gebruiken het dagelijks. Maar tegen welke prijs?
                </p>

                {/* Pain Point Cards - RED THEME */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Libido Problems */}
                    <div className="bg-red-950/30 backdrop-blur-sm border border-red-900/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                        <div className="text-6xl mb-4">❤️‍🩹</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-300">Libidoproblemen</h3>
                        <p className="text-lg text-neutral-200">
                            <strong className="text-red-400 text-2xl">2-4%</strong> van de gebruikers krijgt erectiestoornissen — <strong>soms permanent</strong>.
                        </p>
                    </div>

                    {/* Dependency */}
                    <div className="bg-red-950/30 backdrop-blur-sm border border-red-900/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                        <div className="text-6xl mb-4">🔄</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-300">Levenslang afhankelijk</h3>
                        <p className="text-lg text-neutral-200">
                            Stop je? Dan verlies je <strong className="text-red-400">binnen 3 maanden</strong> alles weer.
                        </p>
                    </div>

                    {/* Side Effects */}
                    <div className="bg-red-950/30 backdrop-blur-sm border border-red-900/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                        <div className="text-6xl mb-4">⚡</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-300">Hoofdpijn & hartkloppingen</h3>
                        <p className="text-lg text-neutral-200">
                            Duizenden mannen ervaren <strong className="text-red-400">elke dag</strong> ongewenste bijwerkingen.
                        </p>
                    </div>
                </div>

                {/* Transition - STRONGER */}
                <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-black text-green-400">
                        Wij dachten: dat <span className="underline decoration-green-500 decoration-4">móet</span> anders.
                    </p>
                </div>
            </div>
        </section>
    )
}
