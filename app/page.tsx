'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IconPlug, IconWallet, IconTrophy, IconRuler, IconBattery, IconCompass, IconGauge, IconCalculator, IconArrowRight, IconUsers, IconLeaf, IconMap, IconHelpCircle, IconBolt, IconClock } from '@/components/Icons'

/* ── Counter hook ── */
function useCounter(target: number, duration = 1400) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = Math.ceil(target / (duration / 16))
        const tick = () => { start = Math.min(start + step, target); setVal(start); if (start < target) requestAnimationFrame(tick) }
        tick()
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return { val, ref }
}

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ── Section wrapper ── */
function Section({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className={`${dark ? 'bg-[#0c1420] text-white' : 'bg-white text-gray-900'} ${className}`}
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'all .7s cubic-bezier(.16,1,.3,1)' }}>
      {children}
    </section>
  )
}

/* ── Data ── */
const categories = [
  { title: 'Lading', desc: 'Hjemme, hurtig, priser og ladekort', href: '/elbil-lading', icon: <IconPlug size={22} />, count: '34 artikler' },
  { title: 'Kostnader', desc: 'Drift, avgifter og besparelser', href: '/elbil-kostnader', icon: <IconWallet size={22} />, count: '32 artikler' },
  { title: 'Modeller', desc: 'Sammenlign alle elbiler i Norge', href: '/beste-elbil', icon: <IconTrophy size={22} />, count: '36 artikler' },
  { title: 'Rekkevidde', desc: 'Reelle tall for norske forhold', href: '/elbil-rekkevidde', icon: <IconRuler size={22} />, count: '30 artikler' },
  { title: 'Batteri', desc: 'Teknologi, levetid og garanti', href: '/batteri-elbil', icon: <IconBattery size={22} />, count: '30 artikler' },
  { title: 'Velg elbil', desc: 'Valgguide for ditt behov', href: '/hvilken-elbil-skal-jeg-velge', icon: <IconCompass size={22} />, count: '36 artikler' },
  { title: 'Familiebil', desc: 'Topp 10 for familier i 2026', href: '/elbil-familiebil', icon: <IconUsers size={22} />, count: '10 artikler' },
]

const guides = [
  { tag: 'GUIDE · LADING', title: 'Hvordan lade elbil hjemme', desc: 'Komplett steg for steg guide med utstyr, installasjon, kostnader og Enova støtte.', href: '/hvordan-lade-elbil-hjemme', icon: <IconPlug size={28} /> },
  { tag: 'GUIDE · KOSTNADER', title: 'Hvor mye sparer man på elbil?', desc: 'Vi regner ut drivstoff, vedlikehold, bompenger og totalkostnad over 5 år.', href: '/hvor-mye-sparer-man-pa-elbil', icon: <IconWallet size={28} /> },
  { tag: 'GUIDE · TEKNISK', title: 'Hvor lenge varer en elbil?', desc: 'Batterilevetid, degradering, garanti og tips for lengst mulig levetid.', href: '/hvor-lenge-varer-elbil', icon: <IconBattery size={28} /> },
]

const articles = [
  { tag: 'LADING', title: 'Hurtiglading forklart', time: '6 min', href: '/hurtiglading-elbil' },
  { tag: 'KOSTNADER', title: 'Ladepris 2026', time: '5 min', href: '/ladepris-elbil' },
  { tag: 'MODELLER', title: 'Beste elbil 2026', time: '8 min', href: '/beste-elbil-2026' },
  { tag: 'KOSTNADER', title: 'Hva koster en elbil?', time: '7 min', href: '/hva-koster-elbil' },
  { tag: 'LADING', title: 'Hva koster det å lade?', time: '5 min', href: '/hva-koster-lading' },
]

const trending = [
  { title: 'Hvordan lade elbil hjemme', cat: 'Lading', href: '/hvordan-lade-elbil-hjemme' },
  { title: 'Beste elbil 2026', cat: 'Modeller', href: '/beste-elbil-2026' },
  { title: 'Hvor mye sparer man?', cat: 'Kostnader', href: '/hvor-mye-sparer-man-pa-elbil' },
  { title: 'Hvilken elbil skal jeg velge?', cat: 'Valgguide', href: '/hvilken-elbil-skal-jeg-velge' },
]

const faqs = [
  { q: 'Kan jeg lade elbil i vanlig stikkontakt?', a: 'Det er mulig som nødløsning, men ikke anbefalt for daglig bruk. En dedikert ladeboks gir raskere og tryggere lading.' },
  { q: 'Hva koster det å installere ladeboks hjemme?', a: 'Komplett installasjon koster vanligvis mellom 15 000 og 35 000 kroner. Enova gir inntil 7 500 kr i støtte.' },
  { q: 'Er elbil billigere enn bensinbil totalt sett?', a: 'Ja, i de fleste tilfeller. Du sparer 30 000 til 50 000 kr årlig på drift, og over 5 år er besparelsen typisk 80 000 til 150 000 kr.' },
  { q: 'Hvor langt kjører en elbil om vinteren?', a: 'Rekkevidden faller til 60 til 80 prosent av WLTP om vinteren, avhengig av temperatur og kjørestil.' },
  { q: 'Hvor lenge varer batteriet i en elbil?', a: 'Moderne elbilbatterier varer typisk 15 til 20 år og beholder over 80 prosent av kapasiteten etter 10 år.' },
  { q: 'Hvilken elbil har lengst rekkevidde?', a: 'I 2026 har flere modeller over 600 km WLTP rekkevidde. Mercedes EQS og Tesla Model S leder an.' },
]

const barData = [
  { year: '2020', pct: 54 }, { year: '2021', pct: 65 }, { year: '2022', pct: 79 },
  { year: '2023', pct: 82 }, { year: '2024', pct: 89 }, { year: '2025', pct: 93 },
]

export default function HomePage() {
  const c1 = useCounter(250, 1200)
  const c2 = useCounter(9, 600)
  const c3 = useCounter(3, 500)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="anim-up text-sm tracking-widest text-gray-400 font-medium mb-4 uppercase">Norges største elbilguide · 2026</p>
            <h1 className="anim-up d1 font-display text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white mb-6">
              Alt du trenger å vite<br />om elbil i Norge
            </h1>
            <p className="anim-up d2 text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
              Finn svar på spørsmålene dine om lading, kostnader, rekkevidde og modeller. Vi samler alt på ett sted, oppdatert og skrevet for norske forhold.
            </p>
            <div className="anim-up d3 flex flex-wrap gap-4">
              <Link href="/elbil" className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-full text-base font-semibold hover:bg-brand-50 transition-colors">
                Se alle temaer <IconArrowRight size={15} />
              </Link>
              <Link href="/verktoy/ladekalkulator" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full text-base font-medium hover:border-white/50 transition-colors">
                Les guider
              </Link>
            </div>
          </div>
          <div className="anim-up d3 space-y-4">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div ref={c1.ref} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <p className="text-3xl font-bold text-white">{c1.val}+</p>
                <p className="text-gray-400 text-sm mt-1">Artikler</p>
              </div>
              <div ref={c2.ref} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <p className="text-3xl font-bold text-white">{c2.val}</p>
                <p className="text-gray-400 text-sm mt-1">Temaklynger</p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm mt-1">Oppdatert 2026</p>
              </div>
              <div ref={c3.ref} className="bg-white/10 border border-white/15 rounded-2xl p-5">
                <p className="text-3xl font-bold text-white">{c3.val}</p>
                <p className="text-gray-400 text-sm mt-1">Kalkulatorer</p>
              </div>
            </div>
            {/* Trending */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
              <p className="text-xs tracking-widest text-gray-400 font-medium mb-3 uppercase">Mest lest nå</p>
              {trending.map((t, i) => (
                <Link key={i} href={t.href} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0 group">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-400 text-sm font-medium w-5">{i + 1}</span>
                    <div>
                      <p className="text-white text-[15px] font-medium group-hover:underline">{t.title}</p>
                      <p className="text-gray-400 text-xs">{t.cat}</p>
                    </div>
                  </div>
                  <IconArrowRight size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ TRUST BAR ══════ */}
      <div className="border-b border-gray-100">
        <div className="max-w-site mx-auto px-6 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {['250+ artikler', 'Oppdatert 2026', 'AI optimalisert', 'Norges mest komplette', '3 kalkulatorer'].map(t => (
            <div key={t} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span className="text-sm text-gray-600 font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════ CATEGORIES ══════ */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Populære temaer</p>
              <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Utforsk etter tema</h2>
            </div>
            <Link href="/elbil" className="hidden sm:flex items-center gap-1 text-brand-600 font-semibold text-sm hover:text-brand-700">
              Se alle 250+ <IconArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <Link key={i} href={c.href}
                className="group border border-gray-150 rounded-2xl p-5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-1">{c.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-xs text-brand-600 font-semibold uppercase tracking-wide">{c.count}</p>
              </Link>
            ))}
            <Link href="/elbil" className="border border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-brand-300 transition-colors group">
              <p className="text-brand-600 font-semibold mb-1 group-hover:text-brand-700">Se alle temaer</p>
              <p className="text-sm text-gray-400">250+ artikler</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* ══════ STATS WITH GRAPHS ══════ */}
      <Section dark className="py-16 lg:py-24">
        <div className="max-w-site mx-auto px-6">
          <p className="text-xs tracking-widest text-brand-400 font-semibold mb-2 uppercase">Elbil i Norge i tall</p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12">Markedet vokser hvert eneste år</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Bar chart */}
            <div className="bg-[#142030] rounded-2xl p-8">
              <p className="text-sm text-gray-400 tracking-wide mb-6 uppercase font-medium">Markedsandel nybilsalg</p>
              <div className="flex items-end gap-3 h-48">
                {barData.map((b, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-300 font-medium">{b.pct}%</span>
                    <div className="w-full rounded-t-md" style={{
                      height: `${(b.pct / 100) * 170}px`,
                      background: i === barData.length - 1 ? '#fff' : `rgba(255,255,255,${0.15 + i * 0.1})`,
                      animation: `barGrow 1s cubic-bezier(.16,1,.3,1) ${i * 0.1}s both`,
                    }} />
                    <span className={`text-xs ${i === barData.length - 1 ? 'text-white font-semibold' : 'text-gray-400'}`}>{b.year}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Cost comparison */}
            <div className="bg-[#142030] rounded-2xl p-8">
              <p className="text-sm text-gray-400 tracking-wide mb-8 uppercase font-medium">Kostnad per mil</p>
              {[
                { label: 'Elbil hjemmelading', val: '2 kr', pct: 14, color: '#fff' },
                { label: 'Elbil hurtiglading', val: '6 kr', pct: 43, color: '#94a3b8' },
                { label: 'Bensinbil', val: '14 kr', pct: 100, color: '#475569' },
              ].map((r, i) => (
                <div key={i} className="mb-7 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[15px] text-gray-200 font-medium">{r.label}</span>
                    <span className="text-xl font-semibold" style={{ color: r.color }}>{r.val}</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: `${r.pct}%`,
                      background: r.color,
                      animation: `fillWidth 1.2s cubic-bezier(.16,1,.3,1) ${i * 0.2}s both`,
                      ['--w' as string]: `${r.pct}%`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════ FEATURED GUIDES ══════ */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-site mx-auto px-6">
          <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Fremhevede guider</p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-10">Grundige gjennomganger</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Link key={i} href={g.href}
                className={`group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all ${i === 1 ? 'bg-brand-700 text-white border-brand-700' : 'bg-gray-50'}`}>
                <div className={`h-44 flex items-center justify-center ${i === 1 ? 'bg-brand-600/30' : 'bg-brand-50'}`}>
                  <div className={i === 1 ? 'text-white/60' : 'text-brand-300'}>{g.icon}</div>
                </div>
                <div className="p-6">
                  <p className={`text-xs tracking-wider font-semibold mb-2 uppercase ${i === 1 ? 'text-brand-200' : 'text-brand-600'}`}>{g.tag}</p>
                  <h3 className={`text-xl font-bold mb-2 group-hover:underline ${i === 1 ? 'text-white' : 'text-gray-900'}`}>{g.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 1 ? 'text-brand-100' : 'text-gray-500'}`}>{g.desc}</p>
                  <p className={`text-sm font-semibold mt-4 flex items-center gap-1 ${i === 1 ? 'text-white' : 'text-brand-600'}`}>
                    Les guiden <IconArrowRight size={13} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════ TOOLS ══════ */}
      <Section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-site mx-auto px-6">
          <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Interaktive verktøy</p>
          <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-10">Beregn kostnader og rekkevidde</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { title: 'Ladekostnadskalkulator', desc: 'Beregn hva det koster å lade elbilen din per år med din strømpris', href: '/verktoy/ladekalkulator', icon: <IconPlug size={24} /> },
              { title: 'Besparelseskalkulator', desc: 'Se hvor mye du sparer med elbil sammenlignet med fossilbil over tid', href: '/verktoy/besparelseskalkulator', icon: <IconCalculator size={24} /> },
              { title: 'Rekkeviddeberegner', desc: 'Finn reell rekkevidde basert på sesong, hastighet og tilleggsutstyr', href: '/verktoy/rekkevidde', icon: <IconGauge size={24} /> },
            ].map((t, i) => (
              <Link key={i} href={t.href} className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-brand-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">{t.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.desc}</p>
                <p className="text-sm font-semibold text-brand-600 flex items-center gap-1">Prøv nå <IconArrowRight size={13} /></p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ══════ ARTICLES + SIDEBAR ══════ */}
      <Section className="py-16 lg:py-24">
        <div className="max-w-site mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Siste guider og analyser</p>
                  <h2 className="font-display text-3xl font-medium tracking-tight">Nylig oppdatert</h2>
                </div>
                <Link href="/nytt" className="text-brand-600 font-semibold text-sm flex items-center gap-1">Se alle <IconArrowRight size={14} /></Link>
              </div>
              {articles.map((a, i) => (
                <Link key={i} href={a.href} className="flex items-center gap-5 py-5 border-b border-gray-100 group hover:bg-gray-50 -mx-3 px-3 rounded-xl transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <IconBolt size={20} className="text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">{a.tag}</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{a.title}</p>
                    <p className="text-sm text-gray-400 mt-0.5">{a.time} lesetid</p>
                  </div>
                  <IconArrowRight size={16} className="text-gray-300 group-hover:text-brand-500 shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-gray-100 rounded-2xl p-6">
                <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Mest lest</p>
                {trending.map((t, i) => (
                  <Link key={i} href={t.href} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 group">
                    <div>
                      <p className="text-xs text-brand-600 font-semibold uppercase">{t.cat}</p>
                      <p className="text-[15px] text-gray-800 font-medium group-hover:text-brand-700 transition-colors">{t.title}</p>
                    </div>
                    <IconArrowRight size={14} className="text-gray-300 shrink-0" />
                  </Link>
                ))}
              </div>
              <div className="bg-brand-700 rounded-2xl p-6 text-white">
                <p className="text-xs text-brand-200 font-semibold uppercase tracking-wide mb-2">Verktøy</p>
                <p className="text-xl font-bold mb-2">Beregn din ladekostnad</p>
                <p className="text-brand-100 text-sm mb-5">Finn ut hva det koster å lade din elbil per år, og sammenlign med bensin.</p>
                <Link href="/verktoy/ladekalkulator" className="inline-flex items-center gap-2 bg-white text-brand-700 px-5 py-2.5 rounded-full text-sm font-semibold">
                  Prøv kalkulatoren <IconArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ══════ FAQ ══════ */}
      <Section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-4">Vanlige spørsmål om elbil</h2>
            <p className="text-gray-500 text-lg mb-10">Her svarer vi på spørsmålene nordmenn oftest stiller</p>
            <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-gray-100 last:border-0">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4">
                    <span className="text-[17px] font-semibold text-gray-900">{f.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round"
                      className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </button>
                  {openFaq === i && <p className="px-6 pb-5 text-gray-600 leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ══════ CTA ══════ */}
      <Section dark className="py-20">
        <div className="max-w-site mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Utforsk hele guiden</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto">250+ artikler, 3 kalkulatorer og 9 temaklynger. Alt om elbil i Norge, samlet på ett sted.</p>
          <Link href="/elbil" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Se alle artikler <IconArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  )
}
