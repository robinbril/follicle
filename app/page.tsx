import Hero from '@/components/sections/hero'
import ProblemAgitation from '@/components/sections/problem-agitation'
import Ingredients from '@/components/sections/ingredients'
import Results from '@/components/sections/results'
import HowItWorks from '@/components/sections/how-it-works'
import Pricing from '@/components/sections/pricing'

import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import SocialProofToast from '@/components/conversion/social-proof-toast'
import GDPRBanner from '@/components/gdpr-banner'
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemAgitation />
      <Ingredients />
      <Results />
      <HowItWorks />
      <Pricing />

      <Footer />
      <ExitIntentPopup />
      <SocialProofToast />
      <GDPRBanner />
    </main>
  )
}
