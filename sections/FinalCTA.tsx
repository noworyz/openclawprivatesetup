'use client'

import { Button } from '@/components'
import { BOOKING_URL } from '@/lib/constants'

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative section-dark py-20 md:py-32 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle gold glow background */}
      <div
        className="absolute inset-0 bg-gold-glow pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container-narrow text-center">
        {/* Headline */}
        <h2
          id="final-cta-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-white"
        >
          Ready to Reclaim 10-20 Hours Per Week?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-body-large text-muted-gray max-w-2xl mx-auto">
          Book your setup call today. Live in 24 hours. Start delegating tomorrow.
        </p>
        
        {/* Value prop */}
        <p className="mt-4 text-warm-gold font-medium">
          Every week you wait is 20 hours you don't get back.
        </p>

        {/* Pricing */}
        <p className="mt-8 text-caption text-white">
          <span className="font-semibold text-lg text-warm-gold">$1,000</span>
          <span className="block mt-1 text-muted-gray">
            Complete private setup + 15 days of white-glove support
          </span>
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button href={BOOKING_URL} variant="primary">
            Book Your Setup Call
          </Button>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-caption text-muted-gray">
          No commitment required. 100% satisfaction guarantee. 7-day full refund if you're not thrilled.
        </p>
      </div>
    </section>
  )
}
