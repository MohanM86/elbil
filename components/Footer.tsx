import Link from 'next/link'
import { IconBolt, IconArrowRight } from './Icons'

const cols = [
  { title: 'Alle temaer', links: [
    { name: 'Lading', href: '/elbil-lading' }, { name: 'Kostnader', href: '/elbil-kostnader' },
    { name: 'Modeller', href: '/beste-elbil' }, { name: 'Rekkevidde', href: '/elbil-rekkevidde' },
    { name: 'Batteri', href: '/batteri-elbil' }, { name: 'Velg elbil', href: '/hvilken-elbil-skal-jeg-velge' },
    { name: 'Familiebil', href: '/elbil-familiebil' }, { name: 'Hva er elbil?', href: '/hva-er-elbil' },
  ]},
  { title: 'Guider', links: [
    { name: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme' }, { name: 'Hurtiglading', href: '/hurtiglading-elbil' },
    { name: 'Ladepris 2026', href: '/ladepris-elbil' }, { name: 'Besparelser', href: '/hvor-mye-sparer-man-pa-elbil' },
    { name: 'Levetid', href: '/hvor-lenge-varer-elbil' }, { name: 'Beste elbil 2026', href: '/beste-elbil-2026' },
    { name: 'Hva koster elbil?', href: '/hva-koster-elbil' }, { name: 'Hva koster lading?', href: '/hva-koster-lading' },
    { name: 'Se alle guider', href: '/elbil', arrow: true },
  ]},
  { title: 'Verktøy', links: [
    { name: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
    { name: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
    { name: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde' },
  ]},
  { title: 'Informasjon', links: [
    { name: 'Om oss', href: '/om-oss' }, { name: 'Slik jobber vi', href: '/slik-jobber-vi' },
    { name: 'Nytt', href: '/nytt' },
  ]},
]

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer */}
      <div className="bg-[#0c1420]">
        <div className="max-w-site mx-auto px-6 py-14 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IconBolt size={20} className="text-brand-400" />
              <span className="text-xl font-bold text-white">elbil<span className="text-brand-400">.io</span></span>
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6 max-w-md">
              Norges mest komplette elbilguide. Finn svar på alt om lading, kostnader, rekkevidde og modeller, oppdatert for norske forhold.
            </p>
            <p className="text-gray-500 text-sm">
              En tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">IT-Firma.no</a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '250+ artikler', sub: 'Alt samlet på ett sted' },
              { label: 'Oppdatert 2026', sub: 'Norske priser og regler' },
              { label: 'AI optimalisert', sub: 'Klar for AI søk' },
              { label: '3 kalkulatorer', sub: 'Beregn selv' },
            ].map(b => (
              <div key={b.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" className="mb-2"><path d="M20 6L9 17l-5-5"/></svg>
                <p className="text-white font-semibold text-[15px]">{b.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="bg-[#0a1018] border-t border-white/5">
        <div className="max-w-site mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {cols.map(c => (
            <div key={c.title}>
              <p className="text-xs tracking-widest text-brand-400 font-bold mb-4 uppercase">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={`text-[14px] text-gray-400 hover:text-white transition-colors flex items-center gap-1 ${(l as {arrow?: boolean}).arrow ? 'text-brand-400 font-semibold mt-2' : ''}`}>
                      {l.name}
                      {(l as {arrow?: boolean}).arrow && <IconArrowRight size={12} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#080e16] border-t border-white/5">
        <div className="max-w-site mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2026 elbil.io. En tjeneste fra <span className="text-gray-400">IT-Firma.no</span>
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            {['250+ ARTIKLER', 'NORGES STØRSTE', 'AI OPTIMALISERT'].map(t => (
              <span key={t} className="border border-gray-700 rounded-full px-3 py-1">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
