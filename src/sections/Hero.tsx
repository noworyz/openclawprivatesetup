'use client'

import { Button } from '@/components'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle gold glow background accent */}
      <div
        className="absolute inset-0 bg-gold-glow pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-heading font-semibold text-h1-mobile md:text-h1-desktop text-white"
          >
            Your Own AI Chief of Staff.{' '}
            <span className="block md:inline">Set Up For You.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-2xl mx-auto text-body-large-mobile md:text-body-large text-muted-gray leading-relaxed">
            A private AI assistant that knows your business, manages your chaos, and never sleeps — deployed and configured by experts so you can skip the tech and get straight to results.
          </p>

          {/* CTA */}
          <div className="mt-12">
            <Button href="#contact" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Trust text */}
          <p className="mt-6 text-caption text-muted-gray">
            White-glove setup. Usually live within 48 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
