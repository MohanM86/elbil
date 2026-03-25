'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { IconPlug, IconWallet, IconTrophy, IconRuler, IconBattery, IconCompass, IconGauge, IconCalculator, IconArrowRight, IconUsers, IconBolt, IconLeaf, IconMap, IconHelpCircle } from './Icons'

const megaMenus: Record<string, { label: string; sections: { title: string; items: { title: string; desc: string; href: string; icon: React.ReactNode }[] }[] }> = {
  temaer: {
    label: 'Temaer',
    sections: [
      {
        title: 'Hovedtemaer',
        items: [
          { title: 'Lading', desc: 'Hjemme, hurtig og priser', href: '/elbil-lading', icon: <IconPlug size={18} /> },
          { title: 'Kostnader', desc: 'Drift, avgifter og besparelser', href: '/elbil-kostnader', icon: <IconWallet size={18} /> },
          { title: 'Beste elbil', desc: 'Sammenlign toppmodeller', href: '/beste-elbil', icon: <IconTrophy size={18} /> },
          { title: 'Rekkevidde', desc: 'Reelle tall, vinter og motorvei', href: '/elbil-rekkevidde', icon: <IconRuler size={18} /> },
        ],
      },
      {
        title: 'Flere temaer',
        items: [
          { title: 'Batteri', desc: 'Teknologi, levetid og garanti', href: '/batteri-elbil', icon: <IconBattery size={18} /> },
          { title: 'Velg elbil', desc: 'Finn elbilen som passer deg', href: '/hvilken-elbil-skal-jeg-velge', icon: <IconCompass size={18} /> },
          { title: 'Familiebil', desc: 'Topp 10 for familier i 2026', href: '/elbil-familiebil', icon: <IconUsers size={18} /> },
          { title: 'Hva er elbil?', desc: 'Grunnleggende innføring', href: '/hva-er-elbil', icon: <IconBolt size={18} /> },
        ],
      },
    ],
  },
  guider: {
    label: 'Guider',
    sections: [
      {
        title: 'Populære guider',
        items: [
          { title: 'Hjemmelading', desc: 'Steg for steg guide', href: '/hvordan-lade-elbil-hjemme', icon: <IconPlug size={18} /> },
          { title: 'Hurtiglading', desc: 'Alt du må vite', href: '/hurtiglading-elbil', icon: <IconBolt size={18} /> },
          { title: 'Besparelser', desc: 'Elbil vs fossilbil', href: '/hvor-mye-sparer-man-pa-elbil', icon: <IconWallet size={18} /> },
          { title: 'Levetid', desc: 'Hvor lenge varer elbilen?', href: '/hvor-lenge-varer-elbil', icon: <IconBattery size={18} /> },
        ],
      },
      {
        title: 'Mer',
        items: [
          { title: 'Ladepris 2026', desc: 'Oppdaterte priser', href: '/ladepris-elbil', icon: <IconWallet size={18} /> },
          { title: 'Hva koster elbil?', desc: 'Komplett prisguide', href: '/hva-koster-elbil', icon: <IconCalculator size={18} /> },
          { title: 'Beste elbil 2026', desc: 'Årets toppmodeller', href: '/beste-elbil-2026', icon: <IconTrophy size={18} /> },
          { title: 'Hva koster lading?', desc: 'Prisoversikt', href: '/hva-koster-lading', icon: <IconPlug size={18} /> },
        ],
      },
    ],
  },
  verktoy: {
    label: 'Verktøy',
    sections: [
      {
        title: 'Kalkulatorer',
        items: [
          { title: 'Ladekostnadskalkulator', desc: 'Beregn årlig ladekostnad', href: '/verktoy/ladekalkulator', icon: <IconPlug size={18} /> },
          { title: 'Besparelseskalkulator', desc: 'Elbil vs fossilbil over tid', href: '/verktoy/besparelseskalkulator', icon: <IconCalculator size={18} /> },
          { title: 'Rekkeviddeberegner', desc: 'Reell rekkevidde for din bil', href: '/verktoy/rekkevidde', icon: <IconGauge size={18} /> },
        ],
      },
    ],
  },
}

const directLinks = [
  { name: 'Om oss', href: '/om-oss' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(key)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200)
  }

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <header ref={menuRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-site mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">elbil<span className="text-brand-600">.io</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {Object.entries(megaMenus).map(([key, menu]) => (
            <div key={key} className="relative"
              onMouseEnter={() => handleEnter(key)}
              onMouseLeave={handleLeave}>
              <button
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors ${activeMenu === key ? 'text-brand-600 bg-brand-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                {menu.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </div>
          ))}
          {directLinks.map(l => (
            <Link key={l.href} href={l.href} className="px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium">
              {l.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/verktoy/ladekalkulator"
            className="inline-flex items-center gap-1.5 bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 transition-colors">
            <IconCalculator size={14} />
            Kalkulator
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 -mr-2" aria-label="Meny">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>}
          </svg>
        </button>
      </div>

      {/* ══ DESKTOP MEGAMENU DROPDOWN ══ */}
      {activeMenu && megaMenus[activeMenu] && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-white border-b border-gray-100 shadow-xl"
          onMouseEnter={() => handleEnter(activeMenu)}
          onMouseLeave={handleLeave}
          style={{ animation: 'megaSlide .25s cubic-bezier(.16,1,.3,1) both' }}>
          <div className="max-w-site mx-auto px-6 py-8">
            <div className="grid grid-cols-2 gap-12">
              {megaMenus[activeMenu].sections.map((section, si) => (
                <div key={si}>
                  <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">{section.title}</p>
                  <div className="space-y-1">
                    {section.items.map((item, ii) => (
                      <Link key={ii} href={item.href} onClick={() => setActiveMenu(null)}
                        className="mega-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group">
                        <div className="mega-icon w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[15px] text-gray-900 font-semibold group-hover:text-brand-700 transition-colors">{item.title}</p>
                          <p className="text-sm text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                        <IconArrowRight size={14} className="mega-arrow text-gray-200 shrink-0 mt-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom bar */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                250+ artikler om elbil i Norge
              </p>
              <Link href="/elbil" onClick={() => setActiveMenu(null)}
                className="text-sm text-brand-600 font-semibold flex items-center gap-1 hover:text-brand-700 transition-colors">
                Se alle artikler <IconArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ══ MOBILE MENU ══ */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          style={{ animation: 'megaSlide .3s cubic-bezier(.16,1,.3,1) both' }}>
          <div className="px-6 py-4">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div key={key} className="border-b border-gray-100">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                  className="w-full flex items-center justify-between py-4 text-lg font-semibold text-gray-900">
                  {menu.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round"
                    className={`transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === key ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                  {menu.sections.map((section, si) => (
                    <div key={si} className="mb-4">
                      <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase px-2">{section.title}</p>
                      {section.items.map((item, ii) => (
                        <Link key={ii} href={item.href} onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                          className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-[15px] text-gray-900 font-medium">{item.title}</p>
                            <p className="text-xs text-gray-400">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {directLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block py-4 text-lg font-semibold text-gray-900 border-b border-gray-100">
                {l.name}
              </Link>
            ))}
            <div className="mt-6">
              <Link href="/verktoy/ladekalkulator" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3.5 rounded-full text-base font-semibold">
                <IconCalculator size={16} /> Prøv kalkulatoren
              </Link>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">
              En tjeneste fra <span className="text-brand-600 font-semibold">IT-Firma.no</span>
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
