'use client'

import { X, Check } from 'lucide-react'

const diyItems = [
  '5-10 hours of setup and configuration',
  'Security hardening research',
  'Integration debugging',
  'Ongoing maintenance headaches',
  'No one to call when things break',
]

const setupItems = [
  'Live in under 24 hours',
  'Security hardened from day one',
  'Integrations configured and tested',
  '15 days of white-glove support',
  'One dedicated expert — not a ticket queue',
  'In-person setup available (Dallas area)',
]

export function WhyUs() {
  return (
    <section
      className="bg-deep-navy py-16 md:py-24"
      aria-labelledby="why-us-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <h2
          id="why-us-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-white text-center mb-12 md:mb-16"
        >
          Why Not Just Do It Yourself?
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DIY Column */}
          <div className="bg-charcoal/50 rounded-2xl p-8 border border-white/10">
            <h3 className="font-heading font-semibold text-xl text-muted-gray mb-6">
              DIY OpenClaw
            </h3>
            <ul className="space-y-4">
              {diyItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-muted-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Setup Column */}
          <div className="bg-gradient-to-br from-warm-gold/10 to-warm-gold/5 rounded-2xl p-8 border border-warm-gold/30">
            <h3 className="font-heading font-semibold text-xl text-warm-gold mb-6">
              OpenClaw Private Setup
            </h3>
            <ul className="space-y-4">
              {setupItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-warm-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-warm-gold" />
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="mt-12 text-center text-body-large text-muted-gray italic">
          Your time is worth more than debugging YAML files.
        </p>
      </div>
    </section>
  )
}
