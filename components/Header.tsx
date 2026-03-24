'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IconBolt, IconPlug, IconWallet, IconTrophy, IconRuler, IconBattery, IconCompass, IconGauge, IconCalculator, IconUsers, IconLeaf, IconMap, IconHelpCircle, IconClock, IconArrowRight } from './Icons'

const megaMenuSections = [
  {
    label: 'Lading',
    items: [
      { title: 'Elbil lading', desc: 'Komplett guide', href: '/elbil-lading', icon: <IconPlug size={16} /> },
      { title: 'Hjemmelading', desc: 'Steg for steg', href: '/hvordan-lade-elbil-hjemme', icon: <IconPlug size={16} /> },
      { title: 'Hurtiglading', desc: 'Slik fungerer det', href: '/hurtiglading-elbil', icon: <IconGauge size={16} /> },
      { title: 'Ladepris 2026', desc: 'Prissammenligning', href: '/ladepris-elbil', icon: <IconWallet size={16} /> },
    ],
  },
  {
    label: 'Kostnader',
    items: [
      { title: 'Elbil kostnader', desc: 'Full oversikt', href: '/elbil-kostnader', icon: <IconWallet size={16} /> },
      { title: 'Hva koster elbil?', desc: 'Kjøpspris og drift', href: '/hva-koster-elbil', icon: <IconWallet size={16} /> },
      { title: 'Besparelser', desc: 'Elbil vs fossilbil', href: '/hvor-mye-sparer-man-pa-elbil', icon: <IconCalculator size={16} /> },
      { title: 'Hva koster lading?', desc: 'Strømpris per mil', href: '/hva-koster-lading', icon: <IconPlug size={16} /> },
    ],
  },
  {
    label: 'Modeller',
    items: [
      { title: 'Beste elbil', desc: 'Sammenligning', href: '/beste-elbil', icon: <IconTrophy size={16} /> },
      { title: 'Beste elbil 2026', desc: 'Topp modeller', href: '/beste-elbil-2026', icon: <IconTrophy size={16} /> },
      { title: 'Velg elbil', desc: 'Valgguide', href: '/hvilken-elbil-skal-jeg-velge', icon: <IconCompass size={16} /> },
      { title: 'Familiebil', desc: 'Topp 10 for familier', href: '/elbil-familiebil', icon: <IconUsers size={16} /> },
    ],
  },
  {
    label: 'Teknisk',
    items: [
      { title: 'Rekkevidde', desc: 'Reelle tall', href: '/elbil-rekkevidde', icon: <IconRuler size={16} /> },
      { title: 'Batteri', desc: 'Teknologi og levetid', href: '/batteri-elbil', icon: <IconBattery size={16} /> },
      { title: 'Levetid', desc: 'Hvor lenge varer elbil?', href: '/hvor-lenge-varer-elbil', icon: <IconClock size={16} /> },
    ],
  },
  {
    label: 'Verktøy',
    items: [
      { title: 'Ladekalkulator', desc: 'Beregn ladekostnad', href: '/verktoy/ladekalkulator', icon: <IconPlug size={16} /> },
      { title: 'Besparelseskalkulator', desc: 'Elbil vs fossilbil', href: '/verktoy/besparelseskalkulator', icon: <IconCalculator size={16} /> },
      { title: 'Rekkeviddeberegner', desc: 'Sesong og hastighet', href: '/verktoy/rekkevidde', icon: <IconGauge size={16} /> },
    ],
  },
]

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Main bar */}
      <div className="bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50">
        <div className="max-w-wide mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pulse-500 to-pulse-600 flex items-center justify-center">
                <IconBolt size={14} className="text-white" />
              </div>
              <span className="text-[17px] font-medium text-white tracking-tight">elbil.io</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {['Lading', 'Kostnader', 'Modeller', 'Teknisk', 'Verktøy'].map((label) => (
                <button
                  key={label}
                  onMouseEnter={() => setMegaOpen(true)}
                  onClick={() => setMegaOpen(!megaOpen)}
                  className="px-3 py-1.5 text-[17px] text-light-400 hover:text-white rounded-md transition-colors"
                >
                  {label}
                </button>
              ))}
              <Link href="/om-oss" className="px-3 py-1.5 text-[17px] text-light-500 hover:text-white rounded-md transition-colors">
                Om oss
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-light-400" aria-label="Meny">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                ) : (
                  <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Megamenu */}
      {megaOpen && (
        <div
          className="hidden lg:block absolute top-14 inset-x-0 bg-dark-900/98 backdrop-blur-xl border-b border-dark-700/50 z-50"
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="max-w-wide mx-auto px-6 py-6">
            <div className="grid grid-cols-5 gap-6">
              {megaMenuSections.map((section) => (
                <div key={section.label}>
                  <p className="text-[16px] uppercase tracking-[0.15em] text-light-500 mb-3 font-medium">
                    {section.label}
                  </p>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMegaOpen(false)}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-dark-700/50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-md bg-dark-700/80 text-pulse-500 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-pulse-600 group-hover:text-white transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[17px] text-light-200 font-medium leading-tight">{item.title}</p>
                          <p className="text-[17px] text-light-500 mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* IT-Firma badge */}
            <div className="mt-5 pt-4 border-t border-dark-700/30 flex items-center justify-between">
              <p className="text-[17px] text-light-600">
                En tjeneste fra <span className="text-light-400 font-medium">IT-Firma.no</span>
              </p>
              <Link href="/nytt" className="text-[17px] text-pulse-500 hover:text-pulse-400 flex items-center gap-1">
                Siste oppdateringer <IconArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-900 border-b border-dark-700/50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4">
            {megaMenuSections.map((section) => (
              <div key={section.label} className="mb-4">
                <p className="text-[16px] uppercase tracking-[0.15em] text-light-500 mb-2 px-2 font-medium">{section.label}</p>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-dark-700/50 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-dark-700/80 text-pulse-500 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[17px] text-light-200">{item.title}</p>
                      <p className="text-[17px] text-light-500">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
            <div className="border-t border-dark-700/30 pt-3 mt-2">
              <Link href="/om-oss" onClick={() => setMobileOpen(false)} className="block px-2 py-2 text-[17px] text-light-400">Om oss</Link>
              <Link href="/slik-jobber-vi" onClick={() => setMobileOpen(false)} className="block px-2 py-2 text-[17px] text-light-400">Slik jobber vi</Link>
              <p className="px-2 pt-2 text-[17px] text-light-600">En tjeneste fra IT-Firma.no</p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
