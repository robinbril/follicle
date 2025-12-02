"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
    const faqs = [
        {
            question: "Hoe lang duurt het voordat ik resultaat zie?",
            answer:
                "De meeste gebruikers zien vermindering van haaruitval binnen 4-6 weken. Nieuwe haargroei is zichtbaar na 8-12 weken. Optimale resultaten na 5-6 maanden. Het is belangrijk om consistent te blijven en dagelijks te gebruiken.",
        },
        {
            question: "Zijn er bijwerkingen?",
            answer:
                "Geen bekende bijwerkingen. Onze formule bevat alleen plantaardige en peptide-gebaseerde ingrediënten die dermatologisch getest zijn. Geen systemische effecten zoals bij Minoxidil of Finasteride. Bij twijfel adviseren we contact op te nemen met je huisarts.",
        },
        {
            question: "Werkt dit ook bij gevorderd haarverlies?",
            answer:
                "Het beste resultaat bij beginnend tot matig haarverlies. Bij kale plekken waar de follikels al dood zijn, is hergroei niet mogelijk. Hoe eerder je begint, hoe beter. De ingrediënten stimuleren bestaande follikels en activeren inactieve follikels, maar kunnen geen nieuwe follikels creëren.",
        },
        {
            question: "Hoe verschilt dit van Minoxidil?",
            answer:
                "Minoxidil is een medicijn (oorspronkelijk voor hoge bloeddruk) met bekende bijwerkingen. Onze RCP-formule gebruikt peptides en plantextracten die de haarzakjes stimuleren zonder systemische effecten. Klinisch bewezen effectiever in directe vergelijkingsstudies (88.9% vs 60% effectiviteit).",
        },
        {
            question: "Kan ik dit combineren met andere producten?",
            answer:
                "Ja. Onze serum is compatibel met andere haarproducten. Wel adviseren we om het 's avonds als laatste stap te gebruiken voor optimale absorptie. Vermijd wel het combineren met andere haargroei serums om overbelasting te voorkomen.",
        },
        {
            question: "Wat gebeurt er als ik stop met gebruiken?",
            answer:
                "Anders dan bij Minoxidil, is er geen rebound effect waarbij je haar meteen weer uitvalt. De resultaten blijven behouden zolang je blijft gebruiken. Bij stoppen zal je haar geleidelijk terugkeren naar de natuurlijke staat, maar niet slechter dan voordat je begon.",
        },
    ]

    return (
        <section id="faq" className="py-24 bg-neutral-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-12">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        Veelgestelde Vragen
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 font-display">
                    Alles wat je wilt weten.
                </h2>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Link to more questions */}
                <div className="text-center mt-12">
                    <a
                        href="/faq"
                        className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-2"
                    >
                        MEER VRAGEN? BEKIJK ONZE KENNISBANK →
                    </a>
                </div>
            </div>
        </section>
    )
}
