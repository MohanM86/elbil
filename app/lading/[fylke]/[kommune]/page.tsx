import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllKommuneSlugs, getKommuneBySlug } from '@/lib/data/norway'
import { IconPlug, IconBolt, IconArrowRight, IconWallet } from '@/components/Icons'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllKommuneSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ fylke: string; kommune: string }> }) {
  const { fylke: fylkeSlug, kommune: kommuneSlug } = await params
  const result = getKommuneBySlug(fylkeSlug, kommuneSlug)
  if (!result) return {}
  const { fylke, kommune } = result
  return {
    title: `Elbillading i ${kommune.name} | Ladestasjoner og hurtigladere`,
    description: `Finn ladestasjoner for elbil i ${kommune.name}, ${fylke.name}. Oversikt over hurtigladere, normalladere, ladepriser og tips for hjemmelading.`,
    alternates: { canonical: `https://elbil.io/lading/${fylke.slug}/${kommune.slug}` },
  }
}

export default async function KommuneLadingPage({ params }: { params: Promise<{ fylke: string; kommune: string }> }) {
  const { fylke: fylkeSlug, kommune: kommuneSlug } = await params
  const result = getKommuneBySlug(fylkeSlug, kommuneSlug)
  if (!result) notFound()
  const { fylke, kommune } = result

  return (
    <>
      <div className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-12">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Hjem</Link></li>
              <li>/</li>
              <li><Link href="/lading" className="hover:text-white">Lading</Link></li>
              <li>/</li>
              <li><Link href={`/lading/${fylke.slug}`} className="hover:text-white">{fylke.name}</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{kommune.name}</li>
            </ol>
          </nav>
          <h1 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Elbillading i {kommune.name}</h1>
          <p className="text-gray-300 mt-3">Ladestasjoner, hurtigladere og ladepriser i {kommune.name}, {fylke.name}</p>
        </div>
      </div>

      <article className="max-w-article mx-auto px-6 py-10">
        <div className="direct-answer">
          <p className="font-medium">
            {kommune.name} har {kommune.ladestasjoner || 'flere'} offentlige ladestasjoner, inkludert {kommune.hurtigladere || 'flere'} hurtigladere.
            Her finner du alt du trenger å vite om elbillading i {kommune.name}.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="border border-gray-100 rounded-2xl p-5 text-center">
            <IconPlug size={24} className="text-brand-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{kommune.ladestasjoner || '—'}</p>
            <p className="text-sm text-gray-500 mt-1">Ladestasjoner</p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 text-center">
            <IconBolt size={24} className="text-brand-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{kommune.hurtigladere || '—'}</p>
            <p className="text-sm text-gray-500 mt-1">Hurtigladere</p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-5 text-center">
            <IconWallet size={24} className="text-brand-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{kommune.population?.toLocaleString('nb-NO') || '—'}</p>
            <p className="text-sm text-gray-500 mt-1">Innbyggere</p>
          </div>
        </div>

        <div className="article-content">
          <h2>Ladestasjoner i {kommune.name}</h2>
          <p>
            {kommune.name} kommune i {fylke.name} har et voksende nettverk av ladestasjoner for elbil.
            Kommunen har {kommune.population?.toLocaleString('nb-NO')} innbyggere og elbiltettheten
            øker stadig.
          </p>

          <h2>Hurtiglading i {kommune.name}</h2>
          <p>
            Hurtigladere i {kommune.name} leverer typisk mellom 50 kW og 350 kW, noe som betyr at du kan lade
            fra 20 til 80 prosent på 15 til 45 minutter avhengig av bilens kapasitet.
          </p>

          <h2>Hjemmelading i {kommune.name}</h2>
          <p>
            De fleste elbileiere i {kommune.name} lader hjemme med en dedikert ladeboks. En typisk
            installasjon koster mellom 15 000 og 35 000 kroner, og Enova gir inntil 7 500 kr i støtte.
          </p>

          <h2>Ladepriser i {kommune.name}</h2>
          <p>
            Strømprisene i {fylke.name} varierer gjennom året. Hjemmelading koster typisk 1,5 til 3 kr per kWh,
            mens hurtiglading koster mellom 4 og 8 kr per kWh avhengig av operatør og tidspunkt.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">Andre kommuner i {fylke.name}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {fylke.kommuner.filter(k => k.slug !== kommune.slug).slice(0, 6).map(k => (
              <Link key={k.slug} href={`/lading/${fylke.slug}/${k.slug}`}
                className="border border-gray-100 rounded-xl p-3 hover:border-brand-300 transition-colors group">
                <p className="font-medium text-gray-900 group-hover:text-brand-700 text-sm">{k.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">En tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold">IT-Firma.no</a></p>
        </div>
      </article>
    </>
  )
}
