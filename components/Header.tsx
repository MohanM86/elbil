'use client'

import Link from 'next/link'
import { useState } from 'react'

const nav = [
  { name: 'Temaer', href: '/elbil' },
  { name: 'Guider', href: '/elbil-lading' },
  { name: 'Modeller', href: '/beste-elbil' },
  { name: 'Verktøy', href: '/verktoy/ladekalkulator' },
  { name: 'Om oss', href: '/om-oss' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-site mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">elbil<span className="text-brand-600">.io</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-[15px] text-gray-600 hover:text-gray-900 transition-colors font-medium">{n.name}</Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/verktoy/ladekalkulator" className="text-[15px] text-brand-600 font-semibold hover:text-brand-700 transition-colors flex items-center gap-1">
            Kalkulator
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Meny">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
          {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-gray-700 font-medium">{n.name}</Link>)}
        </div>
      )}
    </header>
  )
}
