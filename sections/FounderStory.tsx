'use client'

import { Linkedin, Mail } from 'lucide-react'

export function FounderStory() {
  return (
    <section
      className="section-light py-16 md:py-24"
      aria-labelledby="founder-story-heading"
    >
      <div className="container-content">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              id="founder-story-heading"
              className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy mb-4"
            >
              Built by Operators, For Operators
            </h2>
            <p className="text-body-large text-muted-gray">
              Why this service exists
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-lg border border-light-gray p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-warm-gold/10 border-4 border-warm-gold flex items-center justify-center">
                  <span className="text-warm-gold font-bold text-3xl">OC</span>
                </div>
              </div>

              {/* Story text */}
              <div className="flex-1">
                <div className="prose prose-slate max-w-none">
                  <p className="text-body-large text-slate leading-relaxed mb-4">
                    I wasted 40 hours setting up my first AI assistant. Then I helped five friends do the same—and watched them struggle through the same frustrations.
                  </p>
                  
                  <p className="text-body text-slate leading-relaxed mb-4">
                    That's when I realized: <strong>busy executives will never get around to this.</strong> The DIY approach sounds great until you're debugging OAuth flows at midnight on a Sunday.
                  </p>

                  <p className="text-body text-slate leading-relaxed mb-6">
                    I've spent 15+ years in tech strategy and consulting, helping companies deploy complex systems. I've seen what works—and what wastes time. OpenClaw Private Setup exists so you can skip the trial-and-error phase and get straight to results.
                  </p>

                  <div className="border-l-4 border-warm-gold pl-6 mb-6">
                    <p className="text-body-large text-deep-navy italic">
                      "Your time is too valuable to waste on debugging YAML files. I've already made the mistakes. You get to skip straight to having a working AI chief of staff."
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <div>
                      <div className="font-semibold text-deep-navy text-lg">
                        OpenClaw Team
                      </div>
                      <div className="text-sm text-muted-gray">
                        Certified OpenClaw Experts • 50+ Deployments
                      </div>
                    </div>
                    <div className="flex gap-3 ml-auto">
                      <a
                        href="mailto:hello@openclaw.ai"
                        className="inline-flex items-center gap-2 text-warm-gold hover:text-warm-gold/80 transition-colors"
                        aria-label="Email us"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-gray">
              <strong className="text-deep-navy">Background:</strong> 15+ years in tech strategy & consulting • 
              Deployed 50+ OpenClaw instances • 
              Specialists in executive productivity infrastructure
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
