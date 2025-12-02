import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOLLICLE - Hair Growth Serum 18% | Klinisch Bewezen Haargroei",
  description:
    "Voller haar zonder bijwerkingen. 18% actieve ingrediënten, 5 gepatenteerde technologieën. Resultaat in 8-12 weken. Geen recept nodig. Wetenschappelijk bewezen effectiever dan Minoxidil.",
  keywords:
    "haargroei serum, haarverlies, Redensyl, Capixyl, Procapil, AnaGain, Baicapil, minoxidil alternatief, haarverlies behandeling, haarverdikking",
  openGraph: {
    title: "FOLLICLE - Hair Growth Serum 18%",
    description:
      "Voller haar zonder bijwerkingen. Wetenschappelijk bewezen haargroei serum.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
