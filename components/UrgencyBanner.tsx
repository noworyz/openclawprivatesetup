'use client'

import { X } from 'lucide-react'
import { BOOKING_URL } from '@/lib/constants'

interface UrgencyBannerProps {
  isVisible: boolean
  onClose: () => void
}

export function UrgencyBanner({ isVisible, onClose }: UrgencyBannerProps) {
  if (!isVisible) return null

  return (
    <div className="bg-warm-gold text-deep-navy urgency-banner">
      <div className="container-wide py-2.5 flex items-center justify-center gap-4 relative">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body font-medium text-sm md:text-base text-center hover:underline underline-offset-2"
        >
          🔒 Secure OpenClaw setup — bring your hardware or we'll deploy on a VPS. Limited spots this month!
        </a>
        <button
          onClick={onClose}
          className="absolute right-4 p-1 rounded-md hover:bg-deep-navy/10 transition-colors duration-fast"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
