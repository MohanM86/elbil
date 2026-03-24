import Link from 'next/link'

const footerLinks = {
  'Om elbil': [
    { name: 'Hva er elbil?', href: '/hva-er-elbil' },
    { name: 'Beste elbil 2026', href: '/beste-elbil-2026' },
    { name: 'Elbil FAQ', href: '/artikler/elbil-faq' },
    { name: 'Elbil ordbok', href: '/artikler/elbil-ordbok' },
  ],
  Lading: [
    { name: 'Elbil lading', href: '/elbil-lading' },
    { name: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme' },
    { name: 'Hurtiglading', href: '/hurtiglading-elbil' },
    { name: 'Ladepris', href: '/ladepris-elbil' },
  ],
  'Verktøy': [
    { name: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
    { name: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
    { name: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde' },
  ],
  'Om oss': [
    { name: 'Om elbil.io', href: '/om-oss' },
    { name: 'Slik jobber vi', href: '/slik-jobber-vi' },
    { name: 'Kostnader', href: '/elbil-kostnader' },
    { name: 'Rekkevidde', href: '/elbil-rekkevidde' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-400">
      <div className="max-w-wide mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary-600 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-display text-white text-sm">elbil.io</span>
          </div>
          <p className="text-xs text-surface-500">
            © {new Date().getFullYear()} elbil.io — Uavhengig elbilguide for Norge. Del av IT-Firma.no.
          </p>
        </div>
      </div>
    </footer>
  )
}
