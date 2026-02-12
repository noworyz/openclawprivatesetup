'use client'

import { OPENCLAW_URL } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal py-8" role="contentinfo">
      <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          className="font-heading text-xl text-white hover:text-warm-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold rounded"
          aria-label="OpenClaw - Home"
        >
          OpenClaw
        </a>

        {/* Powered by */}
        <a
          href={OPENCLAW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-caption text-muted-gray hover:text-warm-gold transition-colors duration-200"
        >
          Powered by OpenClaw
        </a>

        {/* Copyright */}
        <p className="text-caption text-muted-gray">
          © {currentYear} OpenClaw Private Setup. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
