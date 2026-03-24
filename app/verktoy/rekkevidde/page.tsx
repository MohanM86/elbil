import type { Metadata } from 'next'
import Link from 'next/link'
import RekkeviddeKalkulator from '@/components/RekkeviddeKalkulator'
import { generateToolSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Rekkeviddeberegner — Reell elbilrekkevidde',
  description: 'Beregn reell rekkevidde for din elbil basert på sesong, hastighet og kjøreforhold. Med norske vinterdata.',
  alternates: { canonical: 'https://elbil.io/verktoy/rekkevidde' },
}

export default function RekkeviddePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        generateToolSchema({
          name: 'Elbil rekkeviddeberegner',
          description: 'Beregn reell rekkevidde for din elbil i norske forhold. Sesong, hastighet og tilleggsutstyr.',
          slug: 'verktoy/rekkevidde',
        })
      ) }} />
      <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Verktøy</span></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Rekkeviddeberegner</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-4">
          Elbil rekkeviddeberegner
        </h1>
        <p className="text-lg text-surface-500 mb-8 max-w-lg">
          Finn reell rekkevidde for din elbil. Velg sesong, hastighet og kjøreforhold for et realistisk estimat tilpasset norske forhold.
        </p>

        <RekkeviddeKalkulator />

        <div className="article-content mt-12 pt-8 border-t border-surface-200">
          <h2>Slik beregnes rekkevidden</h2>
          <p>
            WLTP-rekkevidden er målt under ideelle laboratorieforhold. I virkeligheten påvirkes rekkevidden av temperatur, hastighet, topografi og tilleggsutstyr. Vår beregner bruker erfaringsbaserte faktorer fra norske elbileiere og NAFs El Prix-tester for å gi deg et realistisk estimat.
          </p>
          <p>
            Vinteren er den største faktoren i Norge. Ved −10°C kan rekkevidden falle til 60 % av WLTP, hovedsakelig på grunn av oppvarming av kupé og batteri. Elbiler med varmepumpe klarer seg typisk 8–10 % bedre i kulde.
          </p>
        </div>

        <div className="grid gap-2 mt-6">
          {[
            { title: 'Elbil rekkevidde: Alt du bør vite', href: '/elbil-rekkevidde' },
            { title: 'Rekkevidde om vinteren', href: '/artikler/elbil-rekkevidde-vinter' },
            { title: 'WLTP vs reell rekkevidde', href: '/artikler/wltp-vs-reell-rekkevidde' },
            { title: 'Elbiler med lengst rekkevidde', href: '/artikler/beste-elbil-lang-rekkevidde' },
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
