import dynamic from 'next/dynamic'
import Hero from '@/components/sections/hero'
import ProblemAgitation from '@/components/sections/problem-agitation'
import Header from '@/components/header'

const Ingredients = dynamic(() => import('@/components/sections/ingredients'))
const TargetAudience = dynamic(() => import('@/components/sections/target-audience'))
const HowItWorks = dynamic(() => import('@/components/sections/how-it-works'))
const Guarantee = dynamic(() => import('@/components/sections/guarantee'))
const Pricing = dynamic(() => import('@/components/sections/pricing'))
const Footer = dynamic(() => import('@/components/sections/footer'))
const ExitIntentPopup = dynamic(() => import('@/components/conversion/exit-intent-popup'))
const SocialProofToast = dynamic(() => import('@/components/conversion/social-proof-toast'))
const StickyMobileCTA = dynamic(() => import('@/components/conversion/sticky-mobile-cta'))
const GDPRBanner = dynamic(() => import('@/components/gdpr-banner'))

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
