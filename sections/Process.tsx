'use client'

import { ProcessStep, ProcessStepsContainer } from '@/components'

const steps = [
  {
    number: 1,
    title: 'Discovery Call',
    timeLabel: '15 minutes.',
    description:
      'We learn how you work - your tools, your pain points, your style. No tech knowledge required. Just tell us what\'s drowning you.',
  },
  {
    number: 2,
    title: 'Your Setup Engineer Builds It Personally',
    timeLabel: '<24 hours.',
    description:
      'One dedicated expert (not a ticket queue) deploys your private AI, configures integrations, and trains it on your context. You\'ll know their name. They\'ll know your business.',
  },
  {
    number: 3,
    title: 'You Start Delegating',
    timeLabel: 'Day one.',
    description:
      'Handoff call included. Start with simple tasks, scale from there. 15 days of support means we don\'t disappear after launch.',
  },
]

export function Process() {
  return (
    <section
      className="section-dark py-16 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="container-content">
        {/* Section Header */}
        <h2
          id="process-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-white text-center mb-12 md:mb-16"
        >
          Three Steps. Then You're Live.
        </h2>

        {/* Process Steps */}
        <ProcessStepsContainer>
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              timeLabel={step.timeLabel}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </ProcessStepsContainer>
      </div>
    </section>
  )
}
