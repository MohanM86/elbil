import type { Metadata } from 'next'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Hva koster en elbil? Pris, drift og besparelser',
  slug: 'elbil-kostnader',
  description: 'Komplett oversikt over elbilkostnader i Norge. Kjøpspris, forsikring, lading, vedlikehold og besparelser sammenlignet med fossilbil.',
  publishedAt: '2026-01-10',
  updatedAt: '2026-03-20',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const coreArticles = [
  { title: 'Hva koster en elbil?', href: '/hva-koster-elbil', desc: 'Full prisoversikt alle segmenter' },
  { title: 'Hva koster det å lade?', href: '/hva-koster-lading', desc: 'Pris per kWh og per mil' },
  { title: 'Hvor mye sparer man?', href: '/hvor-mye-sparer-man-pa-elbil', desc: 'Elbil vs fossilbil i kroner og øre' },
]

const moreArticles = [
  { title: 'Elbil vs fossilbil: Kostnad', href: '/artikler/elbil-vs-fossilbil-kostnad' },
  { title: 'Elbil forsikring: Priser', href: '/artikler/elbil-forsikring-pris' },
  { title: 'Avgifter og moms', href: '/artikler/elbil-avgifter-norge' },
  { title: 'Bompenger elbil', href: '/artikler/elbil-bompenger' },
  { title: 'Elbil som firmabil', href: '/artikler/elbil-firmabil' },
  { title: 'Vedlikeholdskostnader', href: '/artikler/elbil-vedlikehold-kostnad' },
  { title: 'Verditap elbil', href: '/artikler/elbil-verditap' },
  { title: 'Billigste elbil i Norge', href: '/artikler/billigste-elbil-norge' },
  { title: 'Brukt elbil: Priser', href: '/artikler/elbil-bruktbil-pris' },
  { title: 'Leasing vs kjøp', href: '/artikler/elbil-leasing-vs-kjop' },
  { title: 'Strømforbruk per mil', href: '/artikler/elbil-stromforbruk-per-mil' },
  { title: 'Batteribytte kostnad', href: '/artikler/elbil-batteribytte-kostnad' },
]

export default function ElbilKostnader() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(meta)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Kostnader', slug: 'elbil-kostnader' }])) }} />

      <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Kostnader</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">Elbil kostnader</h1>
        <p className="text-sm text-surface-400 mb-6">Sist oppdatert: 20. mars 2026</p>

        <div className="direct-answer">
          <p className="font-medium">
            En elbil koster typisk 300 000 til 600 000 kr å kjøpe, men er vesentlig billigere i drift enn fossilbil. Du sparer 30 000 til 50 000 kr årlig på drivstoff, vedlikehold og avgifter. Over 5 år er totalbesparelsen vanligvis 80 000 til 150 000 kroner.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-4 my-8">
          {coreArticles.map((a) => (
            <Link key={a.href} href={a.href} className="group p-5 rounded-xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-md transition-all">
              <h3 className="font-display text-lg mb-1 group-hover:text-primary-700 transition-colors">{a.title}</h3>
              <p className="text-sm text-surface-500">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="article-content">
          <h2>Alle artikler om kostnader</h2>
        </div>

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
