'use client'

import { Check } from 'lucide-react'

const leftColumnItems = [
  'Full OpenClaw deployment on your hardware',
  'Email & calendar integration',
  'Up to 3 custom workflows configured',
  'Security hardening (audit trails, access controls)',
]

const rightColumnItems = [
  'Personalized AI training on your context',
  'Hands-on onboarding session',
  '15 days of priority support',
  'Documentation & runbooks',
]

function IncludedItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="flex-shrink-0 w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-success/15"
        aria-hidden="true"
      >
        <Check className="w-4 h-4 text-success" strokeWidth={2.5} />
      </span>
      <span className="text-slate text-body md:text-lg leading-relaxed">{children}</span>
    </li>
  )
}

export function WhatsIncluded() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="whats-included-heading"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <h2
          id="whats-included-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-4"
        >
          Everything in Your $1,000 Package
        </h2>
        <p className="text-body-large text-muted-gray text-center mb-12 md:mb-16 max-w-xl mx-auto">
          A complete, white-glove setup with nothing left out.
        </p>

        {/* Two-Column Checklist */}
        <div className="bg-off-white rounded-lg border border-light-gray p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <ul className="space-y-5" role="list">
              {leftColumnItems.map((item, index) => (
                <IncludedItem key={index}>{item}</IncludedItem>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-5" role="list">
              {rightColumnItems.map((item, index) => (
                <IncludedItem key={index}>{item}</IncludedItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
