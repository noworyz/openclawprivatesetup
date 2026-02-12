import { NavBar, Footer } from '@/components'
import { Hero, Benefits, Process, WhoItsFor, FAQ, FinalCTA } from '@/sections'

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content" role="main">
        <Hero />
        <Benefits />
        <Process />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
