import Navigation from '@/components/sections/navigation'
import Hero from '@/components/sections/hero'
import FreeValue from '@/components/sections/free-value'
import Authority from '@/components/sections/authority'
import PromoUrgency from '@/components/sections/promo-urgency'
import ClinicalProof from '@/components/sections/clinical-proof'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'
import Pricing from '@/components/sections/pricing'
import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import SocialProofToast from '@/components/conversion/social-proof-toast'
import StickyMobileCTA from '@/components/conversion/sticky-mobile-cta'

export default function Home() {
  return (
    <main className="smooth-scroll">
      <Navigation />

      {/* Hormozi Flow: Question → Value → Authority → Urgency → Proof → FAQ → CTA */}
      <Hero />
      <FreeValue />
      <Authority />
      <PromoUrgency />
      <ClinicalProof />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />

      {/* Conversion Elements */}
      <ExitIntentPopup />
      <SocialProofToast />
      <StickyMobileCTA />
    </main>
  )
}
