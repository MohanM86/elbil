import type { Metadata } from 'next'
import Link from 'next/link'
import LadekostKalkulator from '@/components/LadekostKalkulator'
import { generateToolSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ladekostnadskalkulator — Regn ut hva det koster å lade',
  description: 'Beregn hva det koster å lade elbilen din hjemme og på hurtiglader. Sammenlign med bensin. Gratis kalkulator med norske priser.',
  alternates: { canonical: 'https://elbil.io/verktoy/ladekalkulator' },
}

export default function LadekalkulatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateToolSchema({
          name: 'Ladekostnadskalkulator',
          description: 'Beregn hva det koster å lade elbilen din per år, og sammenlign med bensin.',
          slug: 'verktoy/ladekalkulator',
        })
      ) }} />
      <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Verktøy</span></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Ladekalkulator</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-4">
          Ladekostnadskalkulator
        </h1>
        <p className="text-lg text-surface-500 mb-8 max-w-lg">
          Beregn hva det koster å lade elbilen din per år. Velg bil, juster strømpris og se hvor mye du sparer sammenlignet med bensin.
        </p>

        <LadekostKalkulator />

        <div className="article-content mt-12 pt-8 border-t border-surface-200">
          <h2>Slik bruker du kalkulatoren</h2>
          <p>
            Velg bilmodell fra listen, eller bruk «Egendefinert» for å taste inn egne tall. Juster strømpris, hurtigladepris og andel hjemmelading for å få et realistisk estimat. Besparelsen beregnes mot en gjennomsnittlig bensinbil.
          </p>
          <h2>Relaterte artikler</h2>
        </div>

        <div className="grid gap-2 mt-4">
          {[
            { title: 'Hva koster det å lade elbil?', href: '/ladepris-elbil' },
            { title: 'Hvor mye sparer man på elbil?', href: '/hvor-mye-sparer-man-pa-elbil' },
            { title: 'Smartlading: Spar penger', href: '/artikler/smartlading-elbil' },
            { title: 'Beste strømavtale for elbileiere', href: '/artikler/elbil-stromavtale-tips' },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-surface-100 transition-colors text-surface-700 hover:text-primary-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
