import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllFylker, getTotalKommuner } from '@/lib/data/norway'
import { IconPlug, IconArrowRight, IconBolt } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Elbillading i hele Norge | Ladestasjoner i alle kommuner',
  description: 'Finn ladestasjoner for elbil i alle norske kommuner. Oversikt over hurtigladere, normalladere og ladepriser i ditt område.',
  alternates: { canonical: 'https://elbil.io/lading' },
}

export default function LadingPage() {
  const fylker = getAllFylker()
  const totalKommuner = getTotalKommuner()

  return (
    <>
      <div className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-12 lg:py-16">
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Hjem</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Elbillading i Norge</li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <IconPlug size={24} className="text-brand-400" />
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-medium tracking-tight">Elbillading i hele Norge</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mt-4">
            Finn ladestasjoner, hurtigladere og ladepriser i din kommune. Vi dekker alle {totalKommuner} kommuner fordelt på {fylker.length} fylker.
          </p>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 py-12 lg:py-16">
        {fylker.map(fylke => (
          <div key={fylke.slug} className="mb-12">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h2 className="font-display text-2xl font-medium tracking-tight">{fylke.name}</h2>
                <p className="text-sm text-gray-500">{fylke.kommuner.length} kommuner</p>
              </div>
              <Link href={`/lading/${fylke.slug}`} className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:text-brand-700">
                Se fylkesside <IconArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {fylke.kommuner.map(kommune => (
                <Link key={kommune.slug} href={`/lading/${fylke.slug}/${kommune.slug}`}
                  className="group border border-gray-100 rounded-xl p-4 hover:border-brand-300 hover:shadow-md transition-all">
                  <p className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{kommune.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{kommune.ladestasjoner || '—'} ladestasjoner</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
