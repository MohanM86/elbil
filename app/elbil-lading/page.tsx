import type { Metadata } from 'next'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Elbil lading — Komplett guide til lading i Norge',
  slug: 'elbil-lading',
  description: 'Alt om elbillading: hjemmelading, hurtiglading, ladekort, priser og tips. Lær hvordan du lader smart og billig.',
  publishedAt: '2026-01-10',
  updatedAt: '2026-03-20',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const ladingArticles = [
  { title: 'Hvordan lade elbil', href: '/hvordan-lade-elbil', desc: 'Komplett guide til alle lademetoder' },
  { title: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme', desc: 'Steg for steg: Installer lader hjemme' },
  { title: 'Hurtiglading', href: '/hurtiglading-elbil', desc: 'Slik fungerer hurtiglading' },
  { title: 'Ladepris', href: '/ladepris-elbil', desc: 'Hva koster det å lade elbil i 2026?' },
]

const moreArticles = [
  { title: 'Ladekabel guide', href: '/artikler/ladekabel-elbil-guide' },
  { title: 'Type 2-lading forklart', href: '/artikler/type-2-lading' },
  { title: 'CCS hurtiglading', href: '/artikler/ccs-hurtiglading' },
  { title: 'Lade i borettslag', href: '/artikler/lade-elbil-i-borettslag' },
  { title: 'Lade på hytta', href: '/artikler/lade-elbil-pa-hytta' },
  { title: 'Beste hjemmelader 2026', href: '/artikler/beste-hjemmelader-elbil' },
  { title: 'Enova-støtte til lader', href: '/artikler/enova-stotte-elbillader' },
  { title: 'Ladeoperatører i Norge', href: '/artikler/ladeoperatorer-norge' },
  { title: 'Ladekort oversikt', href: '/artikler/ladekort-elbil' },
  { title: 'Smartlading', href: '/artikler/smartlading-elbil' },
  { title: 'Lading i kulde', href: '/artikler/lade-elbil-i-kulde' },
  { title: 'Lading om vinteren', href: '/artikler/lading-elbil-vinter' },
  { title: 'Solcellelading', href: '/artikler/solcelle-lading-elbil' },
  { title: 'Ladetid oversikt', href: '/artikler/ladetid-elbil' },
  { title: 'kWh forbruk ved lading', href: '/artikler/hvor-mange-kwh-lade-elbil' },
  { title: 'Lade elbil i Europa', href: '/artikler/lade-elbil-i-europa' },
]

export default function ElbilLading() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(meta)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Hjem', slug: '' },
              { name: 'Lading', slug: 'elbil-lading' },
            ])
          ),
        }}
      />

      <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Brødsmuler" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-surface-400">
            <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
            <li className="flex items-center gap-1.5"><span>/</span><span>Lading</span></li>
          </ol>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">
          Elbil lading
        </h1>
        <p className="text-sm text-surface-400 mb-6">Sist oppdatert: 20. mars 2026</p>

        <div className="direct-answer">
          <p className="font-medium">
            De fleste elbileiere lader hjemme med en dedikert ladeboks. Hjemmelading koster 1,5 til 3 kr per mil og dekker det daglige behovet. For langtur bruker du hurtiglading, som gir 200+ km rekkevidde på 20 til 30 minutter.
          </p>
        </div>

        <div className="article-content">
          <h2>Kjerneartikler om lading</h2>
          <p>Start her for å forstå det viktigste om elbillading i Norge:</p>
        </div>

        {/* Core articles grid */}
        <div className="grid sm:grid-cols-2 gap-4 my-8">
          {ladingArticles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group p-5 rounded-xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-md transition-all"
            >
              <h3 className="font-display text-lg mb-1 group-hover:text-primary-700 transition-colors">
                {a.title}
              </h3>
              <p className="text-sm text-surface-500">{a.desc}</p>
            </Link>
          ))}
        </div>

        <div className="article-content">
          <h2>Alle artikler om lading</h2>
          <p>Dykk dypere inn i spesifikke temaer:</p>
        </div>

        <div className="grid gap-2 my-6">
          {moreArticles.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-surface-100 transition-colors text-surface-700 hover:text-primary-700"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {a.title}
            </Link>
          ))}
        </div>
      </article>
    </>
  )
}
