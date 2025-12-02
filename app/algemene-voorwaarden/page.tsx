import Navigation from '@/components/sections/navigation'
import Footer from '@/components/sections/footer'

export default function TermsConditions() {
    return (
        <div className="min-h-screen">
            <Navigation />

            <main className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold font-display mb-8">Algemene Voorwaarden</h1>

                    <div className="prose prose-invert max-w-none space-y-6 text-neutral-300">
                        <p className="text-lg">
                            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">1. Definities</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Follicle</strong>: Follicle B.V., gevestigd te Nederland, KvK: 12345678</li>
                                <li><strong>Klant</strong>: De natuurlijke persoon die een overeenkomst aangaat met Follicle</li>
                                <li><strong>Product</strong>: Hair Growth Serum en andere cosmetische producten verkocht door Follicle</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">2. Toepasselijkheid</h2>
                            <p>
                                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, bestellingen en overeenkomsten
                                tussen Follicle en de Klant.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">3. Aanbod en Prijs</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Alle prijzen zijn in euro's en inclusief BTW</li>
                                <li>Aanbiedingen zijn geldig zolang de voorraad strekt</li>
                                <li>Follicle behoudt zich het recht voor prijzen te wijzigen</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">4. Bestelling en Levering</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Bestellingen worden verwerkt na ontvangst van betaling</li>
                                <li>Levering vindt plaats binnen 2-5 werkdagen</li>
                                <li>Verzendkosten zijn gratis voor bestellingen in Nederland</li>
                                <li>Risico gaat over bij levering</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">5. Herroepingsrecht (14 dagen)</h2>
                            <p>
                                U heeft het recht om binnen 14 dagen na ontvangst van het product de overeenkomst
                                te herroepen zonder opgave van redenen. Het product moet ongeopend en in de originele
                                verpakking worden geretourneerd.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">6. 90 Dagen Geld-Terug Garantie</h2>
                            <p>
                                Naast het wettelijke herroepingsrecht bieden wij een verlengde 90 dagen geld-terug garantie.
                                Als u niet tevreden bent met de resultaten, kunt u het product (ook geopend) binnen 90 dagen
                                retourneren voor een volledige terugbetaling.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">7. Abonnementen</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Abonnementen worden maandelijks automatisch verlengd</li>
                                <li>U kunt op elk moment opzeggen zonder opzegtermijn</li>
                                <li>Opzegging moet schriftelijk (e-mail) gebeuren</li>
                                <li>Na opzegging ontvangt u geen nieuwe zendingen</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">8. Disclaimer Medische Claims</h2>
                            <div className="glass rounded-xl p-6 border border-neutral-700">
                                <p className="font-bold mb-2">BELANGRIJK:</p>
                                <p>
                                    Dit product is een cosmetisch product en geen geneesmiddel. Het is niet bedoeld om
                                    ziektes te diagnosticeren, behandelen, genezen of voorkomen. Resultaten kunnen per
                                    persoon variëren. Raadpleeg bij twijfel uw huisarts.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">9. Aansprakelijkheid</h2>
                            <p>
                                Follicle is niet aansprakelijk voor schade als gevolg van onjuist gebruik van het product.
                                Lees altijd de gebruiksaanwijzing. Bij huid irritatie, stop het gebruik en raadpleeg een arts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">10. Toepasselijk Recht</h2>
                            <p>
                                Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd
                                aan de bevoegde rechter in Nederland.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4">11. Contact</h2>
                            <p>
                                Follicle B.V.<br />
                                E-mail: info@follicle.nl<br />
                                KvK: 12345678<br />
                                BTW: NL123456789B01
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
