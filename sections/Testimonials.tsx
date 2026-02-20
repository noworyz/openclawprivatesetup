'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote: "I'm technical—thought I'd DIY it. Three weekends later I was still debugging OAuth flows. Should've paid the $1K on day one. Now it handles 200+ emails daily and I've reclaimed 12 hours a week.",
    author: "Sarah Chen",
    title: "COO",
    company: "$20M SaaS Company",
    initials: "SC"
  },
  {
    quote: "My AI preps board decks, tracks portfolio follow-ups, and schedules LPs. It's like having a junior associate who never sleeps. The ROI was immediate—first week alone saved me 15 hours.",
    author: "James Rodriguez",
    title: "Founder & CEO",
    company: "Series B Startup",
    initials: "JR"
  },
  {
    quote: "Cleared my 400-email backlog overnight. I was skeptical about AI 'understanding' my business, but the personalized training made all the difference. This isn't ChatGPT—it actually knows my context.",
    author: "Michael Thompson",
    title: "Managing Partner",
    company: "$30M PE Fund",
    initials: "MT"
  },
  {
    quote: "As someone billing $500/hour, spending 20 hours on setup would've cost me $10K in opportunity cost. The $1K was a no-brainer. Setup happened while I was closing deals.",
    author: "Jennifer Park",
    title: "Principal",
    company: "Strategy Consulting",
    initials: "JP"
  },
  {
    quote: "I run three portfolio companies. My AI now handles scheduling across all of them, drafts board memos, and tracks action items. It's the best $1K I've spent on productivity infrastructure.",
    author: "David Kim",
    title: "Portfolio Executive",
    company: "3 Board Seats",
    initials: "DK"
  }
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg border border-light-gray p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Star rating */}
      <div className="flex gap-1 mb-4" aria-label="5 star rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate text-body leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar with initials */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-warm-gold/10 border-2 border-warm-gold flex items-center justify-center">
          <span className="text-warm-gold font-semibold text-sm">
            {testimonial.initials}
          </span>
        </div>

        {/* Author info */}
        <div>
          <div className="font-semibold text-deep-navy">
            {testimonial.author}
          </div>
          <div className="text-sm text-muted-gray">
            {testimonial.title}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      className="bg-off-white py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="testimonials-heading"
            className="font-heading font-semibold text-h2-mobile md:text-h2-desktop text-deep-navy mb-4"
          >
            Trusted by Executives Who Value Their Time
          </h2>
          <p className="text-body-large text-muted-gray max-w-2xl mx-auto">
            Real feedback from founders, investors, and operators who've deployed their private AI chief of staff.
          </p>
          
          {/* Overall rating */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
              ))}
            </div>
            <span className="text-deep-navy font-semibold">4.9/5</span>
            <span className="text-muted-gray">from 50+ executive setups</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Additional testimonials on larger screens */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {testimonials.slice(3).map((testimonial, index) => (
            <TestimonialCard key={index + 3} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
