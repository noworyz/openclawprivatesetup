'use client'

export function TrustSection() {
  return (
    <section
      className="bg-off-white py-8 md:py-10 border-y border-light-gray"
      aria-labelledby="trust-heading"
    >
      <div className="container-wide">
        <div className="flex items-center justify-center gap-3">
          {/* OpenClaw badge */}
          <div className="flex items-center gap-2 text-deep-navy">
            <svg
              className="w-5 h-5 text-warm-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              id="trust-heading"
              className="font-body font-medium text-sm md:text-base"
            >
              Powered by{' '}
              <a
                href="https://openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-navy hover:text-warm-gold transition-colors underline underline-offset-2"
              >
                OpenClaw
              </a>
            </span>
          </div>
          <span className="text-muted-gray">•</span>
          <span className="text-sm text-muted-gray">
            Private AI infrastructure for professionals
          </span>
        </div>
      </div>
    </section>
  )
}
