import Hero from '@/components/sections/hero'
import ProblemAgitation from '@/components/sections/problem-agitation'
import Ingredients from '@/components/sections/ingredients'
import TargetAudience from '@/components/sections/target-audience'
import HowItWorks from '@/components/sections/how-it-works'
import Guarantee from '@/components/sections/guarantee'
import Pricing from '@/components/sections/pricing'

import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import SocialProofToast from '@/components/conversion/social-proof-toast'
import StickyMobileCTA from '@/components/conversion/sticky-mobile-cta'
import GDPRBanner from '@/components/gdpr-banner'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemAgitation />
      <Ingredients />
      <TargetAudience />
      <HowItWorks />
      <Guarantee />
      <Pricing />

      <Footer />
      <ExitIntentPopup />
      <SocialProofToast />
      <StickyMobileCTA />
      <GDPRBanner />
    </main>
  )
}
