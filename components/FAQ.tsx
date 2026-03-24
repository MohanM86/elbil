'use client'
import { useState } from 'react'
import type { FAQItem } from '@/lib/config'

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      {items.map((item, i) => (
        <div key={i} className="border-b border-gray-100 last:border-0">
          <button className="faq-question w-full text-left px-6 py-5" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{item.question}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {open === i && <div className="faq-answer px-6 pb-5">{item.answer}</div>}
        </div>
      ))}
    </div>
  )
}
