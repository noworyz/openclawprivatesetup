'use client'

import { Check } from 'lucide-react'
import { clsx } from 'clsx'

interface ChecklistItemProps {
  children: React.ReactNode
  className?: string
}

export function ChecklistItem({ children, className }: ChecklistItemProps) {
  return (
    <li className={clsx('flex items-start gap-3', className)}>
      <span
        className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center"
        aria-hidden="true"
      >
        <Check className="w-5 h-5 text-success" strokeWidth={2.5} />
      </span>
      <span className="text-slate text-lg leading-relaxed">{children}</span>
    </li>
  )
}

interface ChecklistProps {
  items: string[]
  className?: string
}

export function Checklist({ items, className }: ChecklistProps) {
  return (
    <ul className={clsx('space-y-5', className)} role="list">
      {items.map((item, index) => (
        <ChecklistItem key={index}>{item}</ChecklistItem>
      ))}
    </ul>
  )
}
