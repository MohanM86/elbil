'use client'

import { useState } from 'react'
import type { FAQItem } from '@/lib/config'

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border border-surface-200 rounded-xl overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="faq-item px-5">
          <button
            className="faq-question w-full text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="faq-answer pb-2">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
