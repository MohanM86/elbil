import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'elbil.io — Alt om elbil i Norge',
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

const pillars = [
  {
    title: 'Hva er en elbil?',
    desc: 'Enkel forklaring på hvordan elbiler fungerer, og hvorfor Norge leder an.',
    href: '/hva-er-elbil',
    icon: '⚡',
  },
  {
    title: 'Beste elbil 2026',
    desc: 'Oversikt og sammenligning av årets beste elbiler i Norge.',
    href: '/beste-elbil',
    icon: '🏆',
  },
  {
    title: 'Lading',
    desc: 'Alt om hjemmelading, hurtiglading, ladekort og priser.',
    href: '/elbil-lading',
    icon: '🔌',
  },
  {
    title: 'Kostnader',
    desc: 'Hva koster det egentlig å eie en elbil? Vi regner ut.',
    href: '/elbil-kostnader',
    icon: '💰',
  },
  {
    title: 'Rekkevidde',
    desc: 'Reell rekkevidde, vintertall og tips for lengre kjøring.',
    href: '/elbil-rekkevidde',
    icon: '📏',
  },
  {
    title: 'Hvilken elbil?',
    desc: 'Hjelp til å finne elbilen som passer deg og din hverdag.',
    href: '/hvilken-elbil-skal-jeg-velge',
    icon: '🤔',
  },
]

const popularArticles = [
  { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
  { title: 'Hva koster det å lade elbil?', href: '/ladepris-elbil' },
  { title: 'Hvor mye sparer man på elbil?', href: '/hvor-mye-sparer-man-pa-elbil' },
  { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil' },
  { title: 'Hvor lenge varer en elbil?', href: '/hvor-lenge-varer-elbil' },
  { title: 'Elbil om vinteren: 15 tips', href: '/artikler/elbil-vinter-tips' },
  { title: 'Elbil vs fossilbil: Kostnad', href: '/artikler/elbil-vs-fossilbil-kostnad' },
  { title: 'Elbilbatteri: Alt du bør vite', href: '/batteri-elbil' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-surface-950 to-surface-900" />
        <div className="relative max-w-wide mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <p className="text-primary-400 text-sm font-medium tracking-wide uppercase mb-4 animate-fade-up">
            Norges elbilguide
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] text-white mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Alt om elbil,{' '}
            <span className="text-primary-400">på ett sted</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-surface-300 max-w-xl leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Uavhengig informasjon om lading, kostnader, rekkevidde og modeller.
            Oppdatert og skrevet for norske forhold.
          </p>
          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="/elbil"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Utforsk guiden
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/hvilken-elbil-skal-jeg-velge"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Finn din elbil
            </Link>
          </div>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-4">
          Utforsk temaene
        </h2>
        <p className="text-center text-surface-500 mb-12 max-w-lg mx-auto">
          Dykk inn i de viktigste emnene rundt elbil i Norge
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group p-6 rounded-2xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all"
            >
              <span className="text-3xl mb-3 block">{p.icon}</span>
              <h3 className="font-display text-xl mb-2 group-hover:text-primary-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">
                {p.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular articles */}
      <section className="bg-surface-100 border-y border-surface-200">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="font-display text-3xl mb-8">Populære artikler</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {popularArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-surface-200 hover:border-primary-300 hover:shadow-sm transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-surface-700 group-hover:text-surface-900">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive tools */}
      <section className="max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-4">
          Gratis verktøy
        </h2>
        <p className="text-center text-surface-500 mb-10 max-w-lg mx-auto">
          Regn ut kostnader, besparelser og rekkevidde for din elbil
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Ladekostnadskalkulator',
              desc: 'Beregn hva det koster å lade elbilen din hjemme og på hurtiglader.',
              href: '/verktoy/ladekalkulator',
              icon: '🔌',
            },
            {
              title: 'Besparelseskalkulator',
              desc: 'Se hvor mye du sparer med elbil vs fossilbil over 1 til 10 år.',
              href: '/verktoy/besparelseskalkulator',
              icon: '💰',
            },
            {
              title: 'Rekkeviddeberegner',
              desc: 'Finn reell rekkevidde for din elbil basert på sesong og hastighet.',
              href: '/verktoy/rekkevidde',
              icon: '📏',
            },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-6 rounded-2xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all text-center"
            >
              <span className="text-4xl mb-3 block">{tool.icon}</span>
              <h3 className="font-display text-lg mb-2 group-hover:text-primary-700 transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-surface-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
