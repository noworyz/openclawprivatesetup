'use client'

import { ProcessStep, ProcessStepsContainer } from '@/components'

const steps = [
  {
    number: 1,
    title: 'Discovery Call',
    timeLabel: '15 minutes.',
    description:
      'We learn how you work — your tools, your style, your pain points. No prep needed.',
  },
  {
    number: 2,
    title: 'We Build It',
    timeLabel: '24-<24 hours.',
    description:
      'I personally deploy your private AI, configures your integrations, and trains it on your context.',
  },
  {
    number: 3,
    title: 'You Start Delegating',
    timeLabel: 'Day one.',
    description:
      'Your AI is ready. Handoff call included. Ongoing support if you need it.',
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
