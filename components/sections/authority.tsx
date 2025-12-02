"use client"

export default function Authority() {
    return (
        <section className="bg-white py-20 border-t border-neutral-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-black">
                    OVER ONZE EXPERTISE
                </h3>
                <div className="text-lg text-neutral-sub leading-relaxed space-y-4">
                    <p>
                        Gebouwd door een AI/data expert met EU-suppliers. In 2 jaar, portfolio gegroeid naar <strong className="text-black">88.9% effectiviteit</strong>.
                    </p>
                    <p>
                        Voorheen: GHK-Cu mixing en dropship automations. Nu: Clean beauty toegankelijk voor iedereen.
                    </p>
                    <p className="text-[rgb(var(--accent-purple))] font-semibold">
                        Missie: Bouw een cultuur van resultaat over risico.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-neutral-border">
                    <div>
                        <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">+24%</div>
                        <div className="text-sm text-neutral-sub mt-1">Haar dichtheid toename</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">2,847</div>
                        <div className="text-sm text-neutral-sub mt-1">Tevreden reviews</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-[rgb(var(--accent-purple))]">18%</div>
                        <div className="text-sm text-neutral-sub mt-1">Actieve ingrediënten</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
