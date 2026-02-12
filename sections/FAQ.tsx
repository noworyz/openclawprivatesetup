'use client'

import { Accordion } from '@/components'

const faqItems = [
  {
    question: 'What is OpenClaw?',
    answer:
      'OpenClaw is an open-source AI assistant that runs on your own hardware. It manages email, calendar, messaging, and automates workflows — operating 24/7 like a dedicated chief of staff. While the software is free, professional deployment requires technical expertise. OpenClaw Private Setup handles all the complexity so you can start using it immediately. Learn more at openclaw.ai',
  },
  {
    question: 'How much does OpenClaw Private Setup cost?',
    answer:
      'OpenClaw Private Setup costs $1,000 flat fee. This includes complete deployment on your infrastructure, security hardening, integration with your existing tools, a hands-on training session, and 15 days of priority support. No hidden fees, no recurring charges for the setup itself.',
  },
  {
    question: 'How long until I\'m up and running?',
    answer:
      'Most clients are live within 24 hours of the discovery call. The discovery call itself takes only 15 minutes. Complex setups with multiple integrations may take 24-48 hours. Compare this to DIY setup, which typically takes 10-20+ hours of technical work.',
  },
  {
    question: 'How is this different from ChatGPT or other AI assistants?',
    answer:
      'ChatGPT and similar tools are generic AI trained on the internet. OpenClaw is a private AI assistant that runs on infrastructure you control, knows your specific business context, preferences, and workflows. It can take real actions — send emails, manage your calendar, coordinate across messaging apps — rather than just answering questions.',
  },
  {
    question: 'Is my data private and secure?',
    answer:
      'Yes, 100% private. Your AI runs on infrastructure you control. Your conversations, documents, and data never touch shared servers or train anyone else\'s models. We configure audit trails, access controls, and security hardening. Everything stays under your control.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'Just 15 minutes on a discovery call. We\'ll ask about your tools (calendar, email, Slack, etc.), your workflow patterns, and what tasks you want to delegate. You don\'t need any technical knowledge — we handle everything else.',
  },
  {
    question: 'What support is included?',
    answer:
      'The $1,000 setup includes a hands-on training session to get you productive immediately, plus 15 days of priority support. During this period, we help optimize workflows, add integrations, and resolve any issues. Extended support packages are available for ongoing assistance.',
  },
  {
    question: 'Who is OpenClaw Private Setup for?',
    answer:
      'Executives and founders who value time over tinkering. Professionals scaling faster than their team. Anyone who wants a private AI assistant without spending hours on technical setup. If you\'ve ever thought "I want AI that actually knows my business" — this is for you.',
  },
  {
    question: 'Can I set up OpenClaw myself instead?',
    answer:
      'Yes, OpenClaw is open-source. DIY setup typically takes 10-20+ hours and requires experience with server administration, security configuration, and API integrations. Many people start DIY, hit roadblocks, and then contact us. Our $1,000 service saves you time, ensures proper security, and includes ongoing support.',
  },
  {
    question: 'Do you offer in-person setup?',
    answer:
      'Yes. Remote setup is available worldwide. In-person setup and training is available in the Dallas, Texas area. Contact us at hello@openclaw.ai to discuss your preferred approach.',
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
        
        {/* Last Updated - for GEO freshness signals */}
        <p className="text-center text-muted-gray text-sm mt-8">
          Last updated: February 2026
        </p>
      </div>
    </section>
  )
}
