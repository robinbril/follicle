import Hero from '@/components/sections/hero'
import Ingredients from '@/components/sections/ingredients'
import HowItWorks from '@/components/sections/how-it-works'
import ProblemAgitation from '@/components/sections/problem-agitation'
import TargetAudience from '@/components/sections/target-audience'
import Guarantee from '@/components/sections/guarantee'
import Pricing from '@/components/sections/pricing'
import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import StickyMobileCTA from '@/components/conversion/sticky-mobile-cta'
import GDPRBanner from '@/components/gdpr-banner'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* 1. What is REVIVE - ingredients with scientific claims */}
      <Ingredients />

      {/* 2. How it works - simple steps */}
      <HowItWorks />

      {/* 4. Compare - NOW they understand what REVIVE is */}
      <ProblemAgitation />

      {/* 5. Is it for you? */}
      <TargetAudience />

      {/* 6. Guarantee */}
      <Guarantee />

      {/* 7. Pricing */}
      <Pricing />

      <Footer />
      <ExitIntentPopup />
      <StickyMobileCTA />
      <GDPRBanner />
    </main>
  )
}
