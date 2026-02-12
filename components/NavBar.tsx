'use client'

import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import { Button } from './Button'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 ease-out',
        isScrolled ? 'nav-blur shadow-md' : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="container-wide h-[72px] flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="/"
          className="font-heading text-2xl text-white hover:text-warm-gold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy rounded"
          aria-label="OpenClaw - Home"
        >
          OpenClaw
        </a>

        {/* CTA Button */}
        <Button href="https://cal.com/tavleen-singh-gem3fe/introductory-discovery-call" variant="secondary" size="small">
          Get Started
        </Button>
      </nav>
    </header>
  )
}
