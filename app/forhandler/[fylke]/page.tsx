import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllFylker, getFylkeBySlug } from '@/lib/data/norway'
import { IconArrowRight } from '@/components/Icons'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllFylker().map(f => ({ fylke: f.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ fylke: string }> }) {
  const { fylke: fylkeSlug } = await params
  const fylke = getFylkeBySlug(fylkeSlug)
  if (!fylke) return {}
  return {
    title: `Elbilforhandlere i ${fylke.name} | Alle kommuner`,
    description: `Finn elbilforhandlere i ${fylke.name}. Oversikt over autoriserte bilforhandlere med elbilsalg i alle ${fylke.kommuner.length} kommuner.`,
    alternates: { canonical: `https://elbil.io/forhandler/${fylke.slug}` },
  }
}

export default async function FylkeForhandlerPage({ params }: { params: Promise<{ fylke: string }> }) {
  const { fylke: fylkeSlug } = await params
  const fylke = getFylkeBySlug(fylkeSlug)
  if (!fylke) notFound()

  return (
    <>
      <div className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-12">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Hjem</Link></li>
              <li>/</li>
              <li><Link href="/forhandler" className="hover:text-white">Forhandlere</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{fylke.name}</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl lg:text-5xl font-medium tracking-tight">Elbilforhandlere i {fylke.name}</h1>
          <p className="text-gray-300 text-lg mt-4">Autoriserte elbilforhandlere i alle {fylke.kommuner.length} kommuner i {fylke.name}.</p>
        </div>
      </div>
      <div className="max-w-site mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {fylke.kommuner.map(k => (
            <Link key={k.slug} href={`/forhandler/${fylke.slug}/${k.slug}`}
              className="group border border-gray-100 rounded-2xl p-5 hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{k.name}</p>
              <p className="text-sm text-gray-500 mt-1">{k.population?.toLocaleString('nb-NO')} innbyggere</p>
              <p className="text-xs text-brand-600 font-semibold mt-3 flex items-center gap-1">Se forhandlere <IconArrowRight size={12} /></p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
