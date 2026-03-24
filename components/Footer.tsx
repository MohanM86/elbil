import Link from 'next/link'
import { IconBolt } from './Icons'

const footerColumns = [
  {
    title: 'Lading',
    links: [
      { name: 'Elbil lading', href: '/elbil-lading' },
      { name: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme' },
      { name: 'Hurtiglading', href: '/hurtiglading-elbil' },
      { name: 'Ladepris 2026', href: '/ladepris-elbil' },
      { name: 'Hvordan lade elbil', href: '/hvordan-lade-elbil' },
      { name: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
    ],
  },
  {
    title: 'Kostnader',
    links: [
      { name: 'Elbil kostnader', href: '/elbil-kostnader' },
      { name: 'Hva koster elbil?', href: '/hva-koster-elbil' },
      { name: 'Hva koster lading?', href: '/hva-koster-lading' },
      { name: 'Besparelser', href: '/hvor-mye-sparer-man-pa-elbil' },
      { name: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
    ],
  },
  {
    title: 'Modeller og valg',
    links: [
      { name: 'Beste elbil', href: '/beste-elbil' },
      { name: 'Beste elbil 2026', href: '/beste-elbil-2026' },
      { name: 'Hvilken elbil?', href: '/hvilken-elbil-skal-jeg-velge' },
      { name: 'Elbil for familier', href: '/elbil-familiebil' },
    ],
  },
  {
    title: 'Teknisk',
    links: [
      { name: 'Rekkevidde', href: '/elbil-rekkevidde' },
      { name: 'Batteri', href: '/batteri-elbil' },
      { name: 'Levetid', href: '/hvor-lenge-varer-elbil' },
      { name: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde' },
    ],
  },
  {
    title: 'Om elbil.io',
    links: [
      { name: 'Om oss', href: '/om-oss' },
      { name: 'Slik jobber vi', href: '/slik-jobber-vi' },
      { name: 'Nytt', href: '/nytt' },
      { name: 'Hva er elbil?', href: '/hva-er-elbil' },
      { name: 'Elbil oversikt', href: '/elbil' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-light-500">
      {/* Main footer grid */}
      <div className="max-w-wide mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] uppercase tracking-[0.15em] text-light-600 font-medium mb-3">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13px] text-light-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700/30">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-pulse-500 to-pulse-600 flex items-center justify-center">
              <IconBolt size={11} className="text-white" />
            </div>
            <div>
              <span className="text-[13px] text-white font-medium">elbil.io</span>
              <span className="text-[13px] text-light-600 mx-2">|</span>
              <span className="text-[12px] text-light-600">En tjeneste fra </span>
              <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-[12px] text-light-400 hover:text-pulse-400 transition-colors font-medium">
                IT-Firma.no
              </a>
            </div>
          </div>
          <p className="text-[11px] text-light-700">
            Uavhengig elbilguide for Norge. Ingen salg, ingen affiliate, kun informasjon.
          </p>
        </div>
      </div>
    </footer>
  )
}
