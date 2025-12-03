import Hero from '@/components/sections/hero'
import ProblemAgitation from '@/components/sections/problem-agitation'
import Solution from '@/components/sections/solution'
import HowItWorks from '@/components/sections/how-it-works'
import Pricing from '@/components/sections/pricing'

import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import SocialProofToast from '@/components/conversion/social-proof-toast'
import StickyMobileCTA from '@/components/conversion/sticky-mobile-cta'
import GDPRBanner from '@/components/gdpr-banner'
import Header from '@/components/header'
import FloatingCTA from '@/components/conversion/floating-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemAgitation />
      <Solution />
      <HowItWorks />
      <Pricing />

      <Footer />
      <ExitIntentPopup />
      <SocialProofToast />
      <SocialProofToast />
      <FloatingCTA />
      <GDPRBanner />
    </main>
  )
}
