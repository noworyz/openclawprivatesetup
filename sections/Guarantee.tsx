'use client'

import { Shield, Lock, FileText } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description: "Not thrilled within 7 days? Full refund. No questions asked."
  },
  {
    icon: Lock,
    title: "No Vendor Lock-In",
    description: "You own your setup. OpenClaw is open-source. We give you full docs and runbooks."
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "$1,000 flat fee. No hidden costs, no surprise charges, no ongoing subscriptions required."
  }
]

export function Guarantee() {
  return (
    <section
      className="bg-deep-navy py-16 md:py-24"
      aria-labelledby="guarantee-heading"
    >
      <div className="container-content">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="guarantee-heading"
            className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-white mb-4"
          >
            Zero-Risk Investment
          </h2>
          <p className="text-body-large text-muted-gray max-w-2xl mx-auto">
            We're confident you'll love your private AI assistant. But if you're not completely satisfied, we make it right.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <div
                key={index}
                className="bg-slate-navy/50 border border-slate-navy rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm-gold/10 border-2 border-warm-gold mb-6">
                  <Icon className="w-8 h-8 text-warm-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-muted-gray leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <p className="text-warm-gold font-medium text-lg">
            This isn't about saving $1,000. It's about what you'll build with 700+ hours reclaimed this year.
          </p>
        </div>
      </div>
    </section>
  )
}
