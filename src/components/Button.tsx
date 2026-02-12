'use client'

import { clsx } from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  className?: string
  fullWidth?: boolean
  size?: 'default' | 'small'
  ariaLabel?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  fullWidth = false,
  size = 'default',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy',
    {
      'w-full': fullWidth,
      'min-w-[200px]': !fullWidth && size === 'default',
    }
  )

  const variants = {
    primary: clsx(
      'bg-warm-gold text-deep-navy',
      'hover:bg-gold-hover hover:-translate-y-0.5 hover:shadow-md',
      'active:translate-y-0 active:shadow-sm',
      size === 'default' ? 'px-8 py-4 rounded-md text-base' : 'px-6 py-3 rounded-md text-sm'
    ),
    secondary: clsx(
      'bg-transparent border border-slate text-white',
      'hover:border-warm-gold hover:text-warm-gold',
      'active:border-warm-gold/70',
      size === 'default' ? 'px-7 py-3.5 rounded-md text-base' : 'px-5 py-2.5 rounded-md text-sm'
    ),
  }

  const combinedStyles = clsx(baseStyles, variants[variant], className)

  const content = (
    <>
      <span>{children}</span>
      {variant === 'primary' && (
        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={clsx(combinedStyles, 'group')}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(combinedStyles, 'group')}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
