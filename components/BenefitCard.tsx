'use client'

import { clsx } from 'clsx'
import { LucideIcon } from 'lucide-react'

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'dark' | 'light'
  className?: string
  animationDelay?: number
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
  variant = 'light',
  className,
  animationDelay = 0,
}: BenefitCardProps) {
  const cardStyles = clsx(
    'p-8 rounded-lg border transition-all duration-300 ease-out',
    'hover:shadow-glow',
    {
      'bg-charcoal border-slate hover:border-warm-gold/50': variant === 'dark',
      'bg-white border-light-gray hover:border-warm-gold/50 shadow-sm hover:shadow-lg': variant === 'light',
    },
    className
  )

  const iconContainerStyles = clsx(
    'w-12 h-12 flex items-center justify-center rounded-xl',
    'bg-gold-subtle'
  )

  const titleStyles = clsx(
    'font-body font-semibold mt-6',
    'text-xl md:text-h3',
    {
      'text-white': variant === 'dark',
      'text-deep-navy': variant === 'light',
    }
  )

  const descriptionStyles = clsx(
    'mt-3 text-body leading-relaxed',
    {
      'text-muted-gray': variant === 'dark',
      'text-slate': variant === 'light',
    }
  )

  return (
    <article
      className={cardStyles}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className={iconContainerStyles}>
        <Icon className="w-6 h-6 text-warm-gold" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className={titleStyles}>{title}</h3>
      <p className={descriptionStyles}>{description}</p>
    </article>
  )
}
