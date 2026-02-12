import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OpenClaw Private Setup vs DIY: Full Comparison | OpenClaw',
  description: 'Compare OpenClaw Private Setup ($1,000, under 24 hours) vs DIY self-installation (10-20+ hours). See the full breakdown of time, cost, security, and support.',
  keywords: [
    'OpenClaw setup comparison',
    'OpenClaw DIY vs professional',
    'OpenClaw installation cost',
    'AI assistant setup service',
    'OpenClaw deployment options',
  ],
  alternates: {
    canonical: 'https://privatesetup.openclaw.ai/compare',
  },
  openGraph: {
    title: 'OpenClaw Private Setup vs DIY: Full Comparison',
    description: 'Compare professional OpenClaw deployment ($1,000, under 24 hours) vs DIY self-installation (10-20+ hours).',
    type: 'website',
    url: 'https://privatesetup.openclaw.ai/compare',
  },
}

// FAQ Schema for the comparison page
const comparisonFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should I set up OpenClaw myself or use OpenClaw Private Setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you value your time at over $50/hour, OpenClaw Private Setup is more cost-effective. DIY setup takes 10-20+ hours of technical work, while Private Setup delivers a working system in under 24 hours for $1,000. Private Setup also includes security hardening and 15 days of support that DIY does not provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much time does DIY OpenClaw setup take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY OpenClaw setup typically takes 10-20+ hours depending on technical experience. This includes server setup, security configuration, API integrations, and troubleshooting. OpenClaw Private Setup completes the same work in under 24 hours with no effort required from you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What technical skills are needed for DIY OpenClaw setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY setup requires experience with server administration, Docker/containers, SSL certificates, API configuration, and security best practices. OpenClaw Private Setup requires no technical knowledge — just a 15-minute discovery call.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is OpenClaw Private Setup worth $1,000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most professionals, yes. The $1,000 fee covers expert deployment, security hardening, tool integrations, training, and 15 days of support. If your time is worth more than $50-100/hour, the 10-20+ hours saved makes Private Setup the better investment.',
      },
    },
  ],
}

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(comparisonFaqSchema),
        }}
      />
      
      <main className="min-h-screen bg-soft-cream">
        {/* Header */}
        <header className="bg-deep-navy text-white py-4">
          <div className="container-default">
            <Link href="/" className="text-warm-gold hover:text-white transition-colors font-medium">
              ← Back to OpenClaw Private Setup
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-deep-navy text-white py-16 md:py-24">
          <div className="container-narrow text-center">
            <h1 className="font-heading font-semibold text-h1-mobile md:text-h1-desktop mb-6">
              OpenClaw Private Setup vs DIY: Full Comparison
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Wondering whether to set up OpenClaw yourself or use our white-glove service? 
              Here&apos;s the complete breakdown to help you decide.
            </p>
            <p className="text-sm text-white/60 mt-4">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Summary Box */}
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-warm-gold">
              <h2 className="font-heading font-semibold text-xl text-deep-navy mb-4">
                Quick Summary
              </h2>
              <p className="text-charcoal text-lg leading-relaxed">
                <strong>OpenClaw Private Setup</strong> costs <strong>$1,000</strong> and delivers a working AI assistant in <strong>under 24 hours</strong> with security hardening, integrations, training, and 15 days of support.{' '}
                <strong>DIY setup</strong> is free but typically takes <strong>10-20+ hours</strong> of technical work with no included support.{' '}
                If your time is worth more than $50-100/hour, Private Setup is the better investment.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-narrow">
            <h2 className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-12">
              Side-by-Side Comparison
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-deep-navy text-white">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-center p-4 font-semibold bg-warm-gold text-deep-navy">Private Setup</th>
                    <th className="text-center p-4 font-semibold">DIY Setup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Cost</td>
                    <td className="p-4 text-center bg-warm-gold/10">$1,000 flat fee</td>
                    <td className="p-4 text-center">$0 (software is free)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Time to Deploy</td>
                    <td className="p-4 text-center bg-warm-gold/10">&lt;24 hours</td>
                    <td className="p-4 text-center">10-20+ hours</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Your Time Required</td>
                    <td className="p-4 text-center bg-warm-gold/10">15-minute call</td>
                    <td className="p-4 text-center">10-20+ hours hands-on</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Technical Skills Needed</td>
                    <td className="p-4 text-center bg-warm-gold/10">None</td>
                    <td className="p-4 text-center">Server admin, Docker, APIs, security</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Security Hardening</td>
                    <td className="p-4 text-center bg-warm-gold/10">✓ Included</td>
                    <td className="p-4 text-center">DIY (requires expertise)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Tool Integrations</td>
                    <td className="p-4 text-center bg-warm-gold/10">✓ Configured for you</td>
                    <td className="p-4 text-center">Self-configured</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Personalized Training</td>
                    <td className="p-4 text-center bg-warm-gold/10">✓ Hands-on session</td>
                    <td className="p-4 text-center">✗ Documentation only</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Support</td>
                    <td className="p-4 text-center bg-warm-gold/10">15 days priority support</td>
                    <td className="p-4 text-center">Community forums</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Risk of Misconfiguration</td>
                    <td className="p-4 text-center bg-warm-gold/10">Low (expert setup)</td>
                    <td className="p-4 text-center">High (learning curve)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-deep-navy">Best For</td>
                    <td className="p-4 text-center bg-warm-gold/10">Busy professionals, executives</td>
                    <td className="p-4 text-center">Technical hobbyists, developers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Time Value Analysis */}
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-8">
              The Time Value Calculation
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-charcoal text-lg mb-6">
                DIY setup typically takes <strong>10-20 hours</strong>. Here&apos;s how the math works:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-soft-cream rounded-lg p-6 text-center">
                  <p className="text-muted-gray mb-2">If your time is worth</p>
                  <p className="text-3xl font-bold text-deep-navy">$50/hr</p>
                  <p className="text-muted-gray mt-2">DIY costs ~$500-1,000</p>
                  <p className="text-sm text-charcoal mt-1">Break-even with Private Setup</p>
                </div>
                <div className="bg-soft-cream rounded-lg p-6 text-center">
                  <p className="text-muted-gray mb-2">If your time is worth</p>
                  <p className="text-3xl font-bold text-deep-navy">$100/hr</p>
                  <p className="text-muted-gray mt-2">DIY costs ~$1,000-2,000</p>
                  <p className="text-sm text-warm-gold font-medium mt-1">Private Setup saves $0-1,000</p>
                </div>
                <div className="bg-soft-cream rounded-lg p-6 text-center">
                  <p className="text-muted-gray mb-2">If your time is worth</p>
                  <p className="text-3xl font-bold text-deep-navy">$200/hr</p>
                  <p className="text-muted-gray mt-2">DIY costs ~$2,000-4,000</p>
                  <p className="text-sm text-warm-gold font-medium mt-1">Private Setup saves $1,000-3,000</p>
                </div>
              </div>
              
              <p className="text-charcoal">
                <strong>Plus:</strong> DIY doesn&apos;t include security hardening, optimized configuration, personalized training, or support. 
                These add significant value that isn&apos;t reflected in the time calculation alone.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included Detail */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-narrow">
            <h2 className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-12">
              What&apos;s Included in Private Setup
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Custom Deployment</h3>
                    <p className="text-charcoal">Full OpenClaw installation on your hardware or cloud infrastructure, configured for your specific environment.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Security Hardening</h3>
                    <p className="text-charcoal">Audit trails, access controls, encryption, and security best practices to keep your data protected.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Tool Integrations</h3>
                    <p className="text-charcoal">Connected to your email, calendar, Slack, and other tools — ready to work from day one.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Personalized Configuration</h3>
                    <p className="text-charcoal">AI tuned to your workflow, preferences, and communication style based on our discovery call.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">Hands-On Training</h3>
                    <p className="text-charcoal">Live session to show you how to get the most from your AI assistant immediately.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-warm-gold rounded-full flex items-center justify-center text-deep-navy font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-deep-navy mb-1">15 Days Priority Support</h3>
                    <p className="text-charcoal">Direct access to our team for questions, optimizations, and troubleshooting as you get started.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container-narrow">
            <h2 className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy text-center mb-12">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-deep-navy mb-2">Should I set up OpenClaw myself or use Private Setup?</h3>
                <p className="text-charcoal">If you value your time at over $50/hour, OpenClaw Private Setup is more cost-effective. DIY setup takes 10-20+ hours of technical work, while Private Setup delivers a working system in under 24 hours for $1,000. Private Setup also includes security hardening and 15 days of support that DIY does not provide.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-deep-navy mb-2">How much time does DIY OpenClaw setup take?</h3>
                <p className="text-charcoal">DIY OpenClaw setup typically takes 10-20+ hours depending on technical experience. This includes server setup, security configuration, API integrations, and troubleshooting. OpenClaw Private Setup completes the same work in under 24 hours with no effort required from you.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-deep-navy mb-2">What technical skills are needed for DIY setup?</h3>
                <p className="text-charcoal">DIY setup requires experience with server administration, Docker/containers, SSL certificates, API configuration, and security best practices. OpenClaw Private Setup requires no technical knowledge — just a 15-minute discovery call.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-deep-navy mb-2">Is $1,000 worth it for OpenClaw Private Setup?</h3>
                <p className="text-charcoal">For most professionals, yes. The $1,000 fee covers expert deployment, security hardening, tool integrations, training, and 15 days of support. If your time is worth more than $50-100/hour, the 10-20+ hours saved makes Private Setup the better investment.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-deep-navy mb-2">Can I start DIY and switch to Private Setup later?</h3>
                <p className="text-charcoal">Yes, many clients do exactly this. If you start DIY and hit roadblocks or decide your time is better spent elsewhere, we can take over and complete the setup. The $1,000 fee is the same whether we start fresh or finish what you began.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-deep-navy text-white">
          <div className="container-narrow text-center">
            <h2 className="font-heading font-semibold text-h2-mobile md:text-h2-desktop mb-6">
              Ready to Skip the Technical Hassle?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get your private AI assistant running in under 24 hours. 
              One flat fee, no technical knowledge required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact" 
                className="btn-primary inline-block px-8 py-4 bg-warm-gold text-deep-navy font-semibold rounded-lg hover:bg-warm-gold/90 transition-colors"
              >
                Get Started — $1,000
              </Link>
              <Link 
                href="/" 
                className="btn-secondary inline-block px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal text-white/60 py-8">
          <div className="container-default text-center">
            <p>&copy; 2026 OpenClaw. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {' · '}
              <a href="https://openclaw.ai" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">OpenClaw.ai</a>
              {' · '}
              <a href="mailto:hello@openclaw.ai" className="hover:text-white transition-colors">Contact</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
