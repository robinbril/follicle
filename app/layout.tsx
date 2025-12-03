import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "REVIVE — Klinisch Bewezen Haarserum",
  description:
    "Wetenschappelijk bewezen haargroei serum. 20.5% actieve ingrediënten, 6 gepatenteerde technologieën. 88.9% resultaat in 6-8 weken. Geen hormonen, geen bijwerkingen.",
  keywords:
    "haargroei serum, haarverlies, Redensyl, Capixyl, Procapil, AnaGain, Baicapil, GHK-Cu, minoxidil alternatief, haarverlies behandeling, REVIVE",
  openGraph: {
    title: "REVIVE — Klinisch Bewezen Haarserum",
    description:
      "88.9% resultaat. 6 gepatenteerde technologieën. Wetenschappelijk bewezen.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
