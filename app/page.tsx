import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { IconBolt, IconPlug, IconWallet, IconTrophy, IconRuler, IconCompass, IconGauge, IconCalculator, IconArrowRight, IconBattery, IconLeaf, IconMap, IconHelpCircle } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'elbil.io | Alt om elbil i Norge',
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
}

const pillars = [
  { title: 'Lading', desc: 'Hjemme, hurtig, priser og tips', href: '/elbil-lading', icon: <IconPlug size={18} /> },
  { title: 'Kostnader', desc: 'Drift, besparelser og avgifter', href: '/elbil-kostnader', icon: <IconWallet size={18} /> },
  { title: 'Beste elbil', desc: 'Sammenligning av toppmodeller', href: '/beste-elbil', icon: <IconTrophy size={18} /> },
  { title: 'Rekkevidde', desc: 'Reelle tall, vinter og motorvei', href: '/elbil-rekkevidde', icon: <IconRuler size={18} /> },
  { title: 'Batteri', desc: 'Teknologi, levetid og garanti', href: '/batteri-elbil', icon: <IconBattery size={18} /> },
  { title: 'Velg elbil', desc: 'Finn elbilen som passer deg', href: '/hvilken-elbil-skal-jeg-velge', icon: <IconCompass size={18} /> },
]

const tools = [
  { title: 'Ladekostnadskalkulator', desc: 'Beregn hva det koster a lade per ar', href: '/verktoy/ladekalkulator', icon: <IconPlug size={18} /> },
  { title: 'Besparelseskalkulator', desc: 'Elbil vs fossilbil over 1-10 ar', href: '/verktoy/besparelseskalkulator', icon: <IconCalculator size={18} /> },
  { title: 'Rekkeviddeberegner', desc: 'Reell rekkevidde for din bil', href: '/verktoy/rekkevidde', icon: <IconGauge size={18} /> },
]

const popularArticles = [
  { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
  { title: 'Hva koster det a lade elbil?', href: '/ladepris-elbil' },
  { title: 'Hvor mye sparer man pa elbil?', href: '/hvor-mye-sparer-man-pa-elbil' },
  { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil' },
  { title: 'Hvor lenge varer en elbil?', href: '/hvor-lenge-varer-elbil' },
  { title: 'Beste elbil 2026', href: '/beste-elbil-2026' },
]

const clusters = [
  { title: 'Miljo og barekraft', desc: '18 artikler', href: '/artikler/elbil-miljo-fordeler', icon: <IconLeaf size={16} /> },
  { title: 'Byguider', desc: '20 byguider', href: '/artikler/elbil-oslo', icon: <IconMap size={16} /> },
  { title: 'Myter og FAQ', desc: '22 artikler', href: '/artikler/elbil-myter', icon: <IconHelpCircle size={16} /> },
]

export default function HomePage() {
  return (
    <>
      {/* === DARK HERO === */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        {/* Subtle pulse glow top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pulse-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-wide mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          {/* Badge */}
          <div className="anim-up inline-flex items-center gap-2 bg-pulse-500/10 border border-pulse-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-pulse-500" />
            <span className="text-[13px] text-pulse-400 tracking-wide font-medium">Norges elbilguide — 2026</span>
          </div>

          <h1 className="anim-up anim-delay-1 font-display text-[clamp(3rem,7vw,5.5rem)] text-white leading-[1.05] tracking-tight mb-6 max-w-3xl">
            Elbil forklart. <br />
            <span className="text-pulse-400">Enkelt og uavhengig.</span>
          </h1>

          <p className="anim-up anim-delay-2 text-lg sm:text-xl text-light-500 max-w-xl leading-relaxed mb-10">
            250+ artikler. 3 interaktive kalkulatorer. Null salg, null affiliate.
            Kun informasjon du kan stole pa.
          </p>

          <div className="anim-up anim-delay-3 flex flex-wrap gap-3">
            <Link
              href="/elbil"
              className="inline-flex items-center gap-2 bg-pulse-500 hover:bg-pulse-400 text-dark-900 px-7 py-3.5 rounded-xl text-base font-semibold transition-colors"
            >
              Utforsk guiden <IconArrowRight size={13} />
            </Link>
            <Link
              href="/verktoy/ladekalkulator"
              className="inline-flex items-center gap-2 border border-dark-500 hover:border-light-500 text-light-300 hover:text-white px-7 py-3.5 rounded-xl text-base font-medium transition-colors"
            >
              Kalkulatorer
            </Link>
          </div>

          {/* Stats */}
          <div className="anim-up anim-delay-4 flex gap-8 mt-14 pt-8 border-t border-dark-700/40">
            {[
              { value: '250+', label: 'Artikler' },
              { value: '3', label: 'Kalkulatorer' },
              { value: '100%', label: 'Uavhengig' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-semibold text-pulse-400 tracking-tight">{s.value}</p>
                <p className="text-[17px] text-light-600 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LIGHT: TOPIC GRID === */}
      <section className="bg-light-50">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-[16px] uppercase tracking-[0.2em] text-light-400 font-medium mb-3">Utforsk</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-10">Hovedtemaer</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex items-start gap-3.5 p-4 rounded-xl border border-light-200 bg-white hover:border-pulse-300 hover:shadow-lg hover:shadow-pulse-500/5 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-light-100 text-pulse-600 flex items-center justify-center shrink-0 group-hover:bg-pulse-500 group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <div>
                  <p className="text-[17px] font-medium text-light-900 group-hover:text-pulse-700 transition-colors">{p.title}</p>
                  <p className="text-[16px] text-light-400 mt-0.5">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === DARK: TOOLS === */}
      <section className="bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-[16px] uppercase tracking-[0.2em] text-pulse-500 font-medium mb-3">Gratis verktoy</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-tight mb-10">Interaktive kalkulatorer</h2>

          <div className="grid sm:grid-cols-3 gap-3">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group p-5 rounded-xl border border-dark-600 bg-dark-800/50 hover:border-pulse-600/40 hover:bg-dark-800 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-dark-700 text-pulse-500 flex items-center justify-center mb-3 group-hover:bg-pulse-600 group-hover:text-white transition-colors">
                  {t.icon}
                </div>
                <p className="text-[17px] font-medium text-light-200 mb-1">{t.title}</p>
                <p className="text-[16px] text-light-500">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === LIGHT: POPULAR ARTICLES === */}
      <section className="bg-white border-t border-light-200">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-[16px] uppercase tracking-[0.2em] text-light-400 font-medium mb-3">Populaert</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">Mest leste artikler</h2>

          <div className="grid sm:grid-cols-2 gap-2">
            {popularArticles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-light-200 hover:border-pulse-300 hover:bg-pulse-50/30 transition-all group"
              >
                <div className="pulse-dot" />
                <span className="text-[17px] text-light-700 group-hover:text-light-900 font-medium">{a.title}</span>
                <IconArrowRight size={12} className="ml-auto text-light-300 group-hover:text-pulse-500 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === MORE CLUSTERS === */}
      <section className="bg-light-100 border-t border-light-200">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid sm:grid-cols-3 gap-3">
            {clusters.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-light-200 hover:border-pulse-300 transition-all"
              >
                <div className="w-8 h-8 rounded-md bg-light-100 text-pulse-600 flex items-center justify-center shrink-0 group-hover:bg-pulse-500 group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[17px] font-medium text-light-800">{c.title}</p>
                  <p className="text-[17px] text-light-400">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === IT-Firma.no banner === */}
      <section className="bg-dark-950 border-t border-dark-700/30">
        <div className="max-w-wide mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-pulse-500 to-pulse-600 flex items-center justify-center">
              <IconBolt size={10} className="text-white" />
            </div>
            <p className="text-[17px] text-light-500">
              <span className="text-white font-medium">elbil.io</span> er utviklet av{' '}
              <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-pulse-400 hover:text-pulse-300 font-medium transition-colors">
                IT-Firma.no
              </a>
            </p>
          </div>
          <p className="text-[17px] text-light-700">Uavhengig informasjon for norske elbileiere</p>
        </div>
      </section>
    </>
  )
}
