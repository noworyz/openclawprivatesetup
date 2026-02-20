'use client'

import { Shield, Brain, Clock, Wand2 } from 'lucide-react'
import { BenefitCard } from '@/components'

const benefits = [
  {
    icon: Shield,
    title: 'Your Private AI, Your Rules',
    description:
      'Runs on infrastructure you control. Your data stays yours — no shared models, no compromises.',
  },
  {
    icon: Brain,
    title: 'Trained on Your Context',
    description:
      'Configured with your calendar, contacts, and business context. It doesn\'t just answer — it understands.',
  },
  {
    icon: Clock,
    title: 'Always On, Always Ready',
    description:
      'Email triage at 2 AM. Meeting prep before you wake up. Works your hours and everyone else\'s.',
  },
  {
    icon: Wand2,
    title: 'Expert Setup, Zero Friction',
    description:
      'No APIs. No documentation. No weekend projects. You show up and start delegating.',
  },
]

export function Benefits() {
  return (
    <section
      className="section-light py-16 md:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <h2
          id="benefits-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-12 md:mb-16"
        >
          Everything Handled. Nothing to Configure.
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant="light"
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
