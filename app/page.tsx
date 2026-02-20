import { HeaderWrapper, Footer, ContactButton } from '@/components'
import { Hero, TrustSection, Testimonials, Benefits, WhyUs, WhatsIncluded, Guarantee, Process, WhoItsFor, FounderStory, FAQ, FinalCTA } from '@/sections'

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-warm-gold focus:text-deep-navy focus:px-4 focus:py-2 focus:rounded focus:font-medium"
      >
        Skip to main content
      </a>
      
      <HeaderWrapper />
      
      <main id="main-content" role="main">
        <Hero />
        <Testimonials />
        <TrustSection />
        <Benefits />
        <WhyUs />
        <WhatsIncluded />
        <Guarantee />
        <Process />
        <WhoItsFor />
        <FounderStory />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ContactButton />
    </>
  )
}
