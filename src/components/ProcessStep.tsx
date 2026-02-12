'use client'

import { clsx } from 'clsx'

interface ProcessStepProps {
  number: number
  title: string
  timeLabel: string
  description: string
  isLast?: boolean
  className?: string
}

export function ProcessStep({
  number,
  title,
  timeLabel,
  description,
  isLast = false,
  className,
}: ProcessStepProps) {
  return (
    <div className={clsx('flex flex-col items-center md:items-center', className)}>
      {/* Number Circle */}
      <div className="relative">
        <div
          className={clsx(
            'w-12 h-12 rounded-full border-2 border-warm-gold',
            'flex items-center justify-center',
            'text-warm-gold font-semibold text-xl'
          )}
          aria-hidden="true"
        >
          {number}
        </div>
      </div>

      {/* Connecting Line - Vertical on mobile, hidden on desktop (horizontal handled by parent) */}
      {!isLast && (
        <div
          className="w-0.5 h-10 border-l-2 border-dashed border-slate md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="mt-6 md:mt-8 text-center md:text-center max-w-xs">
        <h3 className="text-white font-semibold text-lg md:text-xl">{title}</h3>
        <p className="mt-2 text-warm-gold text-caption font-medium">{timeLabel}</p>
        <p className="mt-3 text-muted-gray text-body">{description}</p>
      </div>
    </div>
  )
}

interface ProcessStepsContainerProps {
  children: React.ReactNode
}

export function ProcessStepsContainer({ children }: ProcessStepsContainerProps) {
  return (
    <div className="relative">
      {/* Horizontal connecting line for desktop */}
      <div
        className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-2/3 h-0.5 border-t-2 border-dashed border-slate"
        aria-hidden="true"
      />

      {/* Steps grid */}
      <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
        {children}
      </div>
    </div>
  )
}
