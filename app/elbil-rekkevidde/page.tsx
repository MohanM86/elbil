import type { Metadata } from 'next'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Elbil rekkevidde — Alt du bør vite (2026)',
  slug: 'elbil-rekkevidde',
  description: 'Hvor langt kjører en elbil? Oversikt over rekkevidde, faktorer som påvirker, vintertall og tips for å kjøre lengre.',
  publishedAt: '2026-01-10',
  updatedAt: '2026-03-20',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const coreArticles = [
  { title: 'Batteri elbil: Alt om teknologien', href: '/batteri-elbil', desc: 'Batterityper, kapasitet og fremtid' },
  { title: 'Hvor lenge varer en elbil?', href: '/hvor-lenge-varer-elbil', desc: 'Levetid, degradering og garanti' },
]

const moreArticles = [
  { title: 'Rekkevidde om vinteren', href: '/artikler/elbil-rekkevidde-vinter' },
  { title: 'Rekkevidde på motorvei', href: '/artikler/elbil-rekkevidde-motorvei' },
  { title: 'WLTP vs reell rekkevidde', href: '/artikler/wltp-vs-reell-rekkevidde' },
  { title: 'Batteriforringelse: Hva er normalt?', href: '/artikler/elbil-batteri-degradering' },
  { title: 'Batterigaranti oversikt', href: '/artikler/elbil-batteri-garanti' },
  { title: 'Energiforbruk: kWh per mil', href: '/artikler/elbil-energiforbruk-kwh-mil' },
  { title: 'Rekkeviddeangst: Slik takler du det', href: '/artikler/elbil-rekkeviddeangst' },
  { title: 'Prekondisjonering: Spar batteri', href: '/artikler/elbil-pre-conditioning' },
  { title: 'Aerodynamikk og elbil', href: '/artikler/elbil-aerodynamikk' },
  { title: 'Elbiler med lengst rekkevidde', href: '/artikler/beste-elbil-lang-rekkevidde' },
]

export default function ElbilRekkevidde() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(meta)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Rekkevidde', slug: 'elbil-rekkevidde' }])) }} />

      <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Rekkevidde</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">Elbil rekkevidde</h1>
        <p className="text-sm text-surface-400 mb-6">Sist oppdatert: 20. mars 2026</p>

        <div className="direct-answer">
          <p className="font-medium">
            Nye elbiler i 2026 har typisk 350 til 600 km WLTP-rekkevidde. Reell rekkevidde er 80 til 95 % av WLTP om sommeren og 60 til 80 % om vinteren. De viktigste faktorene er temperatur, hastighet og bruk av klimaanlegg.
          </p>
        </div>

        <div className="grid gap-4 my-8">
          {coreArticles.map((a) => (
            <Link key={a.href} href={a.href} className="group p-5 rounded-xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-md transition-all">
              <h3 className="font-display text-lg mb-1 group-hover:text-primary-700 transition-colors">{a.title}</h3>
              <p className="text-sm text-surface-500">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="article-content"><h2>Alle artikler om rekkevidde og teknikk</h2></div>

        <div className="grid gap-2 my-6">
          {moreArticles.map((a) => (
            <Link key={a.href} href={a.href} className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-surface-100 transition-colors text-surface-700 hover:text-primary-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              {a.title}
            </Link>
          ))}
        </div>
      </article>
    </>
  )
}
