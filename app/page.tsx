import { NavBar, Footer, UrgencyBanner } from '@/components'
import { Hero, TrustSection, Benefits, WhatsIncluded, Process, WhoItsFor, FAQ, FinalCTA } from '@/sections'

export default function Home() {
  return (
    <>
      <UrgencyBanner />
      <NavBar />
      <main id="main-content" role="main">
        <Hero />
        <TrustSection />
        <Benefits />
        <WhatsIncluded />
        <Process />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
