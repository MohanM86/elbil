import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllKommuneSlugs, getKommuneBySlug } from '@/lib/data/norway'
import { IconTrophy, IconArrowRight } from '@/components/Icons'
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
    title: `Elbilforhandlere i ${kommune.name} | Kjøp elbil i ${fylke.name}`,
    description: `Finn elbilforhandlere i ${kommune.name}, ${fylke.name}. Oversikt over alle autoriserte bilforhandlere med elbilsalg, merker og kontaktinfo.`,
    alternates: { canonical: `https://elbil.io/forhandler/${fylke.slug}/${kommune.slug}` },
  }
}

export default async function KommuneForhandlerPage({ params }: { params: Promise<{ fylke: string; kommune: string }> }) {
  const { fylke: fylkeSlug, kommune: kommuneSlug } = await params
  const result = getKommuneBySlug(fylkeSlug, kommuneSlug)
  if (!result) notFound()
  const { fylke, kommune } = result
  const forhandlere = kommune.forhandlere || []

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
              <li><Link href={`/forhandler/${fylke.slug}`} className="hover:text-white">{fylke.name}</Link></li>
              <li>/</li>
              <li className="text-white font-medium">{kommune.name}</li>
            </ol>
          </nav>
          <h1 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Elbilforhandlere i {kommune.name}</h1>
          <p className="text-gray-300 mt-3">Autoriserte elbilforhandlere i {kommune.name}, {fylke.name}</p>
        </div>
      </div>

      <article className="max-w-article mx-auto px-6 py-10">
        <div className="direct-answer">
          <p className="font-medium">
            {kommune.name} har {forhandlere.length || 'flere'} registrerte elbilforhandlere.
            Her finner du oversikt over alle forhandlere med adresse, organisasjonsnummer og merker.
          </p>
        </div>

        {/* Forhandler list */}
        {forhandlere.length > 0 ? (
          <div className="space-y-4 mb-10">
            {forhandlere.map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-5 hover:border-brand-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{f.name}</p>
                    {f.address && <p className="text-sm text-gray-500 mt-1">{f.address}</p>}
                    <p className="text-xs text-gray-400 mt-1">Org.nr: {f.orgnr}</p>
                  </div>
                  <div className="text-right">
                    {f.stiftet && <p className="text-xs text-gray-400">Stiftet {f.stiftet}</p>}
                  </div>
                </div>
                {f.merker && f.merker.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {f.merker.map(m => (
                      <span key={m} className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">{m}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-2xl p-8 text-center mb-10">
            <IconTrophy size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Forhandlerdata for {kommune.name} legges inn snart</p>
            <p className="text-sm text-gray-400 mt-1">Data hentes fra Brønnøysundregistrene</p>
          </div>
        )}

        <div className="article-content">
          <h2>Kjøpe elbil i {kommune.name}</h2>
          <p>
            {kommune.name} kommune i {fylke.name} har {forhandlere.length || 'flere'} registrerte bilforhandlere
            som selger elbiler. Elbilsalget i Norge har økt kraftig de siste årene, og stadig flere forhandlere
            tilbyr et bredt utvalg av elektriske modeller.
          </p>

          <h2>Populære elbilmerker i {kommune.name}</h2>
          <p>
            De mest populære elbilmerkene i Norge er Tesla, Volkswagen, BMW, Volvo, Hyundai, Kia og Mercedes.
            De fleste forhandlere i {kommune.name} tilbyr prøvekjøring og rådgivning om lading og rekkevidde.
          </p>

          <h2>Tips ved kjøp av elbil</h2>
          <p>
            Når du kjøper elbil i {kommune.name}, bør du tenke på rekkevidde for din daglige kjøring,
            lademuligheter hjemme og på jobb, og om du trenger hengerfeste eller firehjulsdrift for
            norsk vinter.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">Andre kommuner i {fylke.name}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {fylke.kommuner.filter(k => k.slug !== kommune.slug).slice(0, 6).map(k => (
              <Link key={k.slug} href={`/forhandler/${fylke.slug}/${k.slug}`}
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
