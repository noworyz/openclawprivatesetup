'use client'

import { Accordion } from '@/components'

const faqItems = [
  {
    question: 'How is this different from ChatGPT or other AI assistants?',
    answer:
      'Those are generic tools trained on the internet. Your OpenClaw assistant is private, runs on your infrastructure, and is configured specifically for how you work. It knows your context, your preferences, and your business — out of the box.',
  },
  {
    question: 'Is this secure enough for my company?',
    answer:
      'Yes. We follow security best practices: your data stays on your hardware, we configure audit trails and access controls, and we can help you document it for your security team\'s review.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Just 15 minutes on a discovery call. We\'ll ask about your tools (calendar, email, etc.), your workflow, and what you want to delegate. We handle everything else.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Completely. Your AI runs on infrastructure you control. Your conversations, documents, and data never touch shared servers or train anyone else\'s models.',
  },
  {
    question: 'How long until I\'m up and running?',
    answer:
      'Most clients are live within 48 hours of the discovery call. Complex setups with many integrations may take slightly longer.',
  },
  {
    question: 'What if I need help after setup?',
    answer:
      'We include a hands-on onboarding session and 15 days of priority support. Extended support packages are available for clients who want ongoing optimization.',
  },
]

export function FAQ() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        {/* Section Header */}
        <h2
          id="faq-heading"
          className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-12 md:mb-16"
        >
          Questions We Get
        </h2>

        {/* FAQ Accordion */}
        <Accordion items={faqItems} defaultOpenIndex={0} />
      </div>
    </section>
  )
}
