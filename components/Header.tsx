'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Elbil', href: '/elbil' },
  { name: 'Lading', href: '/elbil-lading' },
  { name: 'Kostnader', href: '/elbil-kostnader' },
  { name: 'Beste elbil', href: '/beste-elbil' },
  { name: 'Rekkevidde', href: '/elbil-rekkevidde' },
]

const tools = [
  { name: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
  { name: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
  { name: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-200">
      <div className="max-w-wide mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-display text-xl tracking-tight">elbil.io</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}
                className="px-3.5 py-2 text-sm text-surface-600 hover:text-surface-900 hover:bg-surface-100 rounded-lg transition-colors">
                {item.name}
              </Link>
            ))}
            {/* Tools dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                onBlur={() => setTimeout(() => setToolsOpen(false), 200)}
                className="px-3.5 py-2 text-sm text-surface-600 hover:text-surface-900 hover:bg-surface-100 rounded-lg transition-colors flex items-center gap-1"
              >
                Verktøy
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {toolsOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-lg border border-surface-200 p-1.5 z-50">
                  {tools.map((tool) => (
                    <Link key={tool.href} href={tool.href}
                      className="block px-3 py-2.5 text-sm text-surface-700 hover:bg-surface-100 rounded-lg">
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-surface-600" aria-label="Meny">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              ) : (
                <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-surface-200 pt-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-surface-700 hover:bg-surface-100 rounded-lg">{item.name}</Link>
            ))}
            <p className="px-3 pt-3 pb-1 text-xs font-medium text-surface-400 uppercase tracking-wide">Verktøy</p>
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-surface-700 hover:bg-surface-100 rounded-lg">{tool.name}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
