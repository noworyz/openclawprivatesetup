'use client'

import { Checklist } from '@/components'

const checklistItems = [
  'Run a company, fund, or portfolio and need to move faster',
  'Want AI assistance but won\'t spend weekends on setup',
  'Value privacy and don\'t want your data in someone else\'s model',
  'Already have an EA or chief of staff — and want to 10x them',
  'Make decisions that are too important for generic chatbots',
]

export function WhoItsFor() {
  return (
    <section
      className="section-light py-16 md:py-24"
      aria-labelledby="who-its-for-heading"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Header & Description */}
          <div>
            <h2
              id="who-its-for-heading"
              className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy"
            >
              Built for People Who Don't Have Time to Build It
            </h2>
            <p className="mt-6 text-body-large text-slate max-w-md leading-relaxed">
              OpenClaw Private Setup is for executives, founders, and high-net-worth individuals who want the leverage of AI without the learning curve.
            </p>
          </div>

          {/* Right Column - Checklist */}
          <div>
            <h3 className="sr-only">Ideal if you:</h3>
            <Checklist items={checklistItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
