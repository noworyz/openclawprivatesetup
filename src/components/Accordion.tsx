'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { clsx } from 'clsx'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: string
}

function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  const contentId = `accordion-content-${id}`
  const triggerId = `accordion-trigger-${id}`

  return (
    <div className="border-b border-light-gray last:border-b-0">
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={clsx(
          'w-full flex items-center justify-between py-6 text-left',
          'transition-colors duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-inset',
          'hover:text-warm-gold'
        )}
      >
        <span className="text-deep-navy font-medium text-lg pr-4">{question}</span>
        <span
          className={clsx(
            'flex-shrink-0 w-6 h-6 flex items-center justify-center text-muted-gray',
            'transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        >
          {isOpen ? (
            <Minus className="w-5 h-5" strokeWidth={2} />
          ) : (
            <Plus className="w-5 h-5" strokeWidth={2} />
          )}
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <p className="pb-6 pl-0 pr-8 text-slate text-body leading-relaxed max-w-[90%]">
          {answer}
        </p>
      </div>
    </div>
  )
}

interface FAQItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: FAQItem[]
  allowMultiple?: boolean
  defaultOpenIndex?: number
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndex,
  className,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    defaultOpenIndex !== undefined ? new Set([defaultOpenIndex]) : new Set()
  )

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className={clsx('divide-y divide-light-gray', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`faq-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndices.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
