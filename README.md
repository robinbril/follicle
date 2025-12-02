# FOLLICLE - Hair Growth Serum E-commerce Website

High-converting, EU-compliant DTC webshop for **FOLLICLE**, a science-backed hair growth serum with 18% active ingredients (Redensyl + Capixyl + Procapil + AnaGain + Baicapil).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
follicle/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── product/
│   │   └── haar-serum-18/
│   │       └── page.tsx           # Product Detail Page
│   ├── layout.tsx                 # Root layout
│   └── globals.css                # Global styles
├── components/
│   ├── sections/
│   │   ├── navigation.tsx         # Sticky nav
│   │   ├── hero.tsx              # Hero section
│   │   ├── problem-agitation.tsx # Problem section
│   │   ├── solution.tsx          # Solution section
│   │   ├── clinical-proof.tsx    # Clinical studies
│   │   ├── how-it-works.tsx      # Usage guide
│   │   ├── testimonials.tsx      # Reviews carousel
│   │   ├── faq.tsx               # FAQ accordion
│   │   ├── pricing.tsx           # Pricing tiers
│   │   ├── final-cta.tsx         # Final CTA
│   │   └── footer.tsx            # Site footer
│   ├── conversion/
│   │   ├── exit-intent-popup.tsx # Exit intent
│   │   ├── social-proof-toast.tsx # Social proof
│   │   └── sticky-mobile-cta.tsx  # Mobile CTA
│   └── ui/
│       ├── button.tsx            # Button component
│       ├── accordion.tsx         # Accordion
│       └── tabs.tsx              # Tabs
├── lib/
│   └── utils.ts                  # Utilities
└── tailwind.config.ts            # Tailwind config
```

## 🎨 Design System

### Colors
- **Primary**: Deep Forest Green (#0D2818 → #52B788)
- **Neutrals**: Warm Grays (#0A0A0A → #FAFAFA)
- **Accent**: Clinical Gold (#B8860B → #E5B896)

### Typography
- **Display**: Plus Jakarta Sans (headings)
- **Body**: DM Sans (content)
- **Mono**: JetBrains Mono (stats, code)

### Effects
- Glassmorphism cards
- Grain texture overlay
- Glow effects on CTAs
- Smooth animations

## 📄 Pages

### Homepage `/`
11 sections optimized for conversion:
1. Sticky Navigation
2. Hero with floating stats
3. Problem Agitation
4. Solution (ingredient pills)
5. Clinical Proof (studies & charts)
6. How It Works (3-step guide)
7. Before/After + Testimonials
8. FAQ Accordion
9. Pricing Grid (3 tiers)
10. Final CTA
11. Footer

### Product Page `/product/haar-serum-18`
- Image gallery
- Variant selector (one-time / subscription)
- Tabs: Benefits, Ingredients, Usage, Reviews
- Trust badges
- Add to cart

## 🛍️ E-commerce Integration

### Shopify Setup (Next Steps)
1. Create Shopify store
2. Install Shopify Hydrogen
3. Set up products & variants
4. Configure payment gateways (iDEAL, credit card)
5. Add Recharge Subscriptions app
6. Connect to this frontend

### Environment Variables
Create `.env.local`:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

## 📊 Analytics & Tracking

### Google Analytics 4
Events tracked:
- `view_item`
- `add_to_cart`
- `begin_checkout`
- `purchase`
- `faq_expand`
- `exit_intent_triggered`

### Meta Pixel
Standard events for retargeting campaigns.

### Hotjar (Optional)
For heatmapping and session recordings.

## 🎯 Conversion Elements

1. **Exit-Intent Popup**: Free guide offer
2. **Social Proof**: Real-time purchase notifications
3. **Sticky Mobile CTA**: Appears after 500px scroll
4. **Urgency Copy**: "Elke dag wacht je, sterven follikels af"
5. **Risk Reversal**: 90-day money-back guarantee
6. **Scarcity**: Stock indicators (use carefully)

## ⚖️ Legal & Compliance

### EU Cosmetics Regulation 1223/2009
- ✅ No medical claims
- ✅ Cosmetic-grade ingredients only
- ✅ Proper disclaimers on all pages
- ⚠️ CPNP notification required before launch
- ⚠️ Safety Assessment needed
- ⚠️ Responsible Person designation

### GDPR
- Cookie consent banner (to implement)
- Privacy policy page (to create)
- Data processing agreements
- Right to deletion

### Required Pages (To Create)
- [ ] `/privacybeleid` - Privacy Policy
- [ ] `/algemene-voorwaarden` - Terms & Conditions
- [ ] `/cookiebeleid` - Cookie Policy
- [ ] `/retourneren` - Returns Policy

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Setup
1. Connect GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Configure domain
4. Enable Edge Functions

### Performance Targets
- Lighthouse Score: >95
- LCP: <1.5s
- FID: <50ms
- CLS: 0

## 📝 Content TODOs

1. **Images**:
   - Product photography (high-res)
   - Before/after photos (legal, verified)
   - Ingredient close-ups
   - Lifestyle imagery

2. **Videos**:
   - How-to-use tutorial
   - Ingredient breakdown
   - Customer testimonials

3. **Copy**:
   - Review all copy for legal compliance
   - Translate any English remnants
   - Get legal approval on claims

## 🧪 Testing Checklist

- [ ] Mobile responsive (320px - 1920px)
- [ ] Cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Checkout flow (10× manual test)
- [ ] Form submissions
- [ ] Analytics tracking
- [ ] Page speed (Lighthouse)
- [ ] Accessibility (WCAG 2.1 AA)

## 📈 Launch Checklist

- [ ] CPNP notification submitted
- [ ] Safety Assessment completed
- [ ] Responsible Person assigned
- [ ] Legal pages created
- [ ] Cookie banner implemented
- [ ] All copy in Dutch
- [ ] Payment gateway configured
- [ ] Shipping zones set
- [ ] Tax settings configured
- [ ] Analytics installed
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] 5+ seed reviews

## 🎓 Resources

- [EU Cosmetics Portal](https://ec.europa.eu/growth/sectors/cosmetics_en)
- [Shopify Hydrogen Docs](https://shopify.dev/custom-storefronts/hydrogen)
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📞 Support

For questions about this codebase, refer to the inline code comments or create an issue.

## ⚠️ Disclaimer

This product is a cosmetic product and not a medicine. Results may vary. Not intended to diagnose, treat, cure, or prevent any disease.

---

**Built with** ❤️ **for maximum conversion and compliance**
