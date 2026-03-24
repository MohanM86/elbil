import type { Metadata } from 'next'
import Link from 'next/link'
import BesparelsesKalkulator from '@/components/BesparelsesKalkulator'
import { generateToolSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Elbil besparelseskalkulator — Elbil vs fossilbil',
  description: 'Regn ut hvor mye du sparer med elbil vs bensinbil. Inkluderer drivstoff, vedlikehold, bompenger, forsikring og firmabilfordel.',
  alternates: { canonical: 'https://elbil.io/verktoy/besparelseskalkulator' },
}

export default function BesparelseskalkulatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateToolSchema({
          name: 'Elbil besparelseskalkulator',
          description: 'Regn ut total besparelse med elbil vs fossilbil over 1 til 10 år.',
          slug: 'verktoy/besparelseskalkulator',
        })
      ) }} />
      <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Verktøy</span></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Besparelseskalkulator</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-4">
          Elbil vs fossilbil: Besparelseskalkulator
        </h1>
        <p className="text-lg text-surface-500 mb-8 max-w-lg">
          Regn ut den totale besparelsen med elbil sammenlignet med bensinbil. Inkluderer drivstoff, vedlikehold, bompenger, forsikring og firmabilfordel.
        </p>

        <BesparelsesKalkulator />

        <div className="article-content mt-12 pt-8 border-t border-surface-200">
          <h2>Om beregningene</h2>
          <p>
            Kalkulatoren sammenligner totale driftskostnader for elbil og bensinbil over den valgte perioden. Elbil-tallene baserer seg på gjennomsnittlig forbruk (1,7 kWh/mil), typiske servicekostnader og gjeldende bompengesatser for elbil. Bensinbil-tallene er basert på 0,7 liter/mil og SSBs gjennomsnittspriser.
          </p>
          <p>
            Merk at kjøpspris ikke er inkludert i denne beregningen, da den varierer sterkt mellom modeller. For mange elbiler i 300 000–500 000 kr-klassen er kjøpsprisen nå sammenlignbar med tilsvarende fossilbiler.
          </p>
        </div>

        <div className="grid gap-2 mt-6">
          {[
            { title: 'Hvor mye sparer man på elbil?', href: '/hvor-mye-sparer-man-pa-elbil' },
            { title: 'Elbil vs fossilbil: Full kostnadssammenligning', href: '/artikler/elbil-vs-fossilbil-kostnad' },
            { title: 'Elbil som firmabil', href: '/artikler/elbil-firmabil' },
            { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
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
