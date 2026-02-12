'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-50 bg-warm-gold text-deep-navy">
      <div className="container-wide py-2.5 flex items-center justify-center gap-4 relative">
        <Link
          href="https://cal.com/tavleen-singh-gem3fe/introductory-discovery-call"
          className="font-body font-medium text-sm md:text-base text-center hover:underline underline-offset-2"
        >
          🔥 Limited spots available this month — Book your discovery call now
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 rounded-md hover:bg-deep-navy/10 transition-colors duration-fast"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
