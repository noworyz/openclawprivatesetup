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
          Your Time Is Worth $500-2,000/Hour. Why Spend 20 on Setup?
        </h2>
        <p className="text-body-large text-muted-gray text-center mb-8 max-w-3xl mx-auto">
          Most executives who try to "DIY this over the weekend" are still stuck 3 months later. 
          We deploy your private AI in under 24 hours—so you can delegate your first task tomorrow, not "someday."
        </p>

        {/* ROI Callout */}
        <div className="bg-warm-gold/5 border-2 border-warm-gold/20 rounded-lg p-6 md:p-8 mb-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-sm text-muted-gray mb-2">What 20 hours of your time is worth:</div>
              <div className="text-2xl font-bold text-warm-gold">$10K-40K</div>
              <div className="text-sm text-slate mt-1">in strategic work or billable hours</div>
            </div>
            <div>
              <div className="text-sm text-muted-gray mb-2">What our setup costs:</div>
              <div className="text-2xl font-bold text-deep-navy">$1,000</div>
              <div className="text-sm text-slate mt-1">Complete setup + 15 days support</div>
            </div>
          </div>
          <p className="text-center text-body text-slate mt-6 font-medium">
            Save 10-20 hours/week = 700+ hours/year reclaimed. That's $350K+ in time value annually.
          </p>
        </div>

        {/* Package header */}
        <h3 className="font-heading font-semibold text-xl md:text-2xl text-deep-navy text-center mb-8">
          Everything Included in Your $1,000 Package
        </h3>

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
