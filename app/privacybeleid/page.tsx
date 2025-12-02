import Navigation from '@/components/sections/navigation'
import Footer from '@/components/sections/footer'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold font-display mb-8">Privacybeleid</h1>

                    <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
                        <p className="text-lg">
                            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">1. Inleiding</h2>
                            <p>
                                Follicle B.V. ("wij", "ons") respecteert uw privacy en zet zich in voor de bescherming van uw persoonsgegevens.
                                Dit privacybeleid informeert u over hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen wanneer
                                u onze website bezoekt of producten bij ons koopt.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">2. Welke gegevens verzamelen wij?</h2>
                            <p>Wij kunnen de volgende persoonsgegevens verzamelen:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Naam en contactgegevens (e-mail, telefoonnummer, adres)</li>
                                <li>Bestel- en betalingsgegevens</li>
                                <li>Gebruiksgegevens van onze website (cookies, IP-adres)</li>
                                <li>Correspondentie met klantenservice</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">3. Hoe gebruiken wij uw gegevens?</h2>
                            <p>Wij gebruiken uw persoonsgegevens voor:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Verwerking en levering van bestellingen</li>
                                <li>Klantenservice en communicatie</li>
                                <li>Verbetering van onze website en diensten</li>
                                <li>Marketing (alleen met uw toestemming)</li>
                                <li>Wettelijke verplichtingen</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">4. Cookies</h2>
                            <p>
                                Wij gebruiken cookies om uw ervaring te verbeteren. U kunt cookies beheren via uw browserinstellingen.
                                Zie ons <a href="/cookiebeleid" className="text-primary-400 hover:text-primary-300">cookiebeleid</a> voor meer informatie.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">5. Uw rechten</h2>
                            <p>Onder de AVG heeft u de volgende rechten:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Recht op inzage van uw gegevens</li>
                                <li>Recht op rectificatie van onjuiste gegevens</li>
                                <li>Recht op verwijdering ("recht om vergeten te worden")</li>
                                <li>Recht op beperking van verwerking</li>
                                <li>Recht op gegevensoverdracht</li>
                                <li>Recht van bezwaar</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">6. Beveiliging</h2>
                            <p>
                                Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen
                                tegen verlies, misbruik en ongeautoriseerde toegang.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">7. Contact</h2>
                            <p>
                                Voor vragen over dit privacybeleid of uw persoonsgegevens kunt u contact opnemen via:
                            </p>
                            <p className="mt-4">
                                Follicle B.V.<br />
                                E-mail: privacy@follicle.nl<br />
                                KvK: 12345678
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
