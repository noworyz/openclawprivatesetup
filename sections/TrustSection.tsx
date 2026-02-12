'use client'

import { Quote } from 'lucide-react'

export function TrustSection() {
  return (
    <section
      className="bg-off-white py-16 md:py-20 border-y border-light-gray"
      aria-labelledby="trust-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <h2
          id="trust-heading"
          className="font-heading font-semibold text-h3 md:text-h2-mobile text-deep-navy text-center mb-12"
        >
          Trusted by executives who value their time
        </h2>

        {/* Featured In Logos */}
        <div className="mb-12">
          <p className="text-caption text-muted-gray text-center uppercase tracking-wider mb-6">
            Featured in
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {/* Placeholder logo boxes - replace with real logos later */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-10 md:w-32 md:h-12 bg-muted-gray/20 rounded-md flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-muted-gray/50 text-xs font-body">Logo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative">
            <Quote
              className="absolute -top-2 -left-4 w-8 h-8 text-warm-gold/30"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <blockquote className="font-heading text-xl md:text-2xl text-deep-navy italic leading-relaxed px-6">
              "This changed how I work."
            </blockquote>
          </div>
          <cite className="block mt-4 text-body text-slate not-italic">
            — <span className="font-medium">[Your Name]</span>, Founder
          </cite>
        </div>
      </div>
    </section>
  )
}
