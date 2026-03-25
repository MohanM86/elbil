'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IconPlug, IconWallet, IconTrophy, IconRuler, IconBattery, IconCompass, IconGauge, IconCalculator, IconArrowRight, IconUsers, IconBolt } from '@/components/Icons'
import StatsSection from '@/components/StatsSection'

function useCounter(target: number, duration = 1400) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { let s = 0; const step = Math.ceil(target / (duration / 16)); const t = () => { s = Math.min(s + step, target); setVal(s); if (s < target) requestAnimationFrame(t) }; t(); obs.disconnect() }
    }, { threshold: 0.3 }); obs.observe(el); return () => obs.disconnect()
  }, [target, duration]); return { val, ref }
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null); const [visible, setVisible] = useState(false)
  useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 }); obs.observe(el); return () => obs.disconnect() }, []); return { ref, visible }
}

function useStagger(count: number, delayMs = 80) {
  const ref = useRef<HTMLDivElement>(null)
  const [vi, setVi] = useState<boolean[]>(Array(count).fill(false))
  useEffect(() => { const el = ref.current; if (!el) return; const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { for (let i = 0; i < count; i++) setTimeout(() => setVi(p => { const n = [...p]; n[i] = true; return n }), i * delayMs); obs.disconnect() } }, { threshold: 0.1 }); obs.observe(el); return () => obs.disconnect() }, [count, delayMs]); return { ref, vi }
}

function Section({ children, className = '', dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  const { ref, visible } = useReveal()
  return (<section ref={ref} className={`${dark ? 'bg-[#0c1420] text-white' : 'bg-white text-gray-900'} ${className}`} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'all .7s cubic-bezier(.16,1,.3,1)' }}>{children}</section>)
}

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
const vsRows = [
  { label: 'Drivstoff per år', ev: 8000, fossil: 24000, unit: 'kr' },
  { label: 'Vedlikehold per år', ev: 3000, fossil: 8000, unit: 'kr' },
  { label: 'Bompenger per år', ev: 4800, fossil: 9600, unit: 'kr' },
  { label: 'Forsikring per år', ev: 12000, fossil: 10000, unit: 'kr' },
  { label: 'Verditap per år', ev: 40000, fossil: 45000, unit: 'kr' },
]

export default function HomePage() {
  const c1 = useCounter(250, 1200), c2 = useCounter(9, 600), c3 = useCounter(3, 500)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const cs = useStagger(8, 80), gs = useStagger(3, 150), ts = useStagger(3, 120), as2 = useStagger(5, 100), vs = useStagger(5, 200)

  return (<>
    {/* ══ #1 HERO + GRID + GLOW ══ */}
    <section className="bg-[#0c1420] text-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(22,163,74,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.04) 1px,transparent 1px)', backgroundSize:'48px 48px' }}/>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] rounded-full" style={{ background:'radial-gradient(ellipse,rgba(22,163,74,0.08),transparent 70%)' }}/>
      <div className="relative max-w-site mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="anim-up text-sm tracking-widest text-gray-400 font-medium mb-4 uppercase">Norges største elbilguide · 2026</p>
          <h1 className="anim-up d1 font-display text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white mb-6">Alt du trenger å vite<br/>om elbil i Norge</h1>
          <p className="anim-up d2 text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">Finn svar på spørsmålene dine om lading, kostnader, rekkevidde og modeller. Vi samler alt på ett sted, oppdatert og skrevet for norske forhold.</p>
          <div className="anim-up d3 flex flex-wrap gap-4">
            <Link href="/elbil" className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-full text-base font-semibold hover:bg-brand-50 transition-colors">Se alle temaer <IconArrowRight size={15}/></Link>
            <Link href="/verktoy/ladekalkulator" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-full text-base font-medium hover:border-white/50 transition-colors">Les guider</Link>
          </div>
        </div>
        <div className="anim-up d3 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {[{ r:c1.ref,v:`${c1.val}+`,l:'Artikler' },{ r:c2.ref,v:c2.val,l:'Temaklynger' },{ r:null,v:'100%',l:'Oppdatert 2026' },{ r:c3.ref,v:c3.val,l:'Kalkulatorer' }].map((s,i)=>(
              <div key={i} ref={s.r} className="bg-white/[0.07] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.12] transition-colors">
                <p className="text-3xl font-bold text-white">{s.v}</p><p className="text-gray-400 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/[0.07] border border-white/10 rounded-2xl p-5">
            <p className="text-xs tracking-widest text-gray-400 font-medium mb-3 uppercase">Mest lest nå</p>
            {trending.map((t,i)=>(<Link key={i} href={t.href} className="flex items-center justify-between py-2.5 border-b border-white/10 last:border-0 group"><div className="flex items-center gap-3"><span className="text-brand-400 text-sm font-medium w-5">{i+1}</span><div><p className="text-white text-[15px] font-medium group-hover:underline">{t.title}</p><p className="text-gray-400 text-xs">{t.cat}</p></div></div><IconArrowRight size={14} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"/></Link>))}
          </div>
        </div>
      </div>
    </section>

    {/* ══ TRUST BAR ══ */}
    <div className="border-b border-gray-100"><div className="max-w-site mx-auto px-6 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2">
      {['250+ artikler','Oppdatert 2026','AI optimalisert','Norges mest komplette','3 kalkulatorer'].map(t=>(<div key={t} className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg><span className="text-sm text-gray-600 font-medium">{t}</span></div>))}
    </div></div>

    {/* ══ #2 CATEGORIES STAGGER ══ */}
    <Section className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6">
      <div className="flex items-end justify-between mb-10"><div><p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Populære temaer</p><h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight">Utforsk etter tema</h2></div><Link href="/elbil" className="hidden sm:flex items-center gap-1 text-brand-600 font-semibold text-sm hover:text-brand-700">Se alle 250+ <IconArrowRight size={14}/></Link></div>
      <div ref={cs.ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((c,i)=>(<Link key={i} href={c.href} className="group border border-gray-150 rounded-2xl p-5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/30 hover:-translate-y-1 transition-all duration-300" style={{ opacity:cs.vi[i]?1:0, transform:cs.vi[i]?'translateY(0)':'translateY(20px)', transition:'opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1),border-color .2s,box-shadow .2s' }}>
          <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">{c.icon}</div>
          <p className="text-lg font-semibold text-gray-900 mb-1">{c.title}</p><p className="text-sm text-gray-500 leading-relaxed mb-3">{c.desc}</p><p className="text-xs text-brand-600 font-semibold uppercase tracking-wide">{c.count}</p>
        </Link>))}
        <Link href="/elbil" className="border border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-brand-300 transition-colors group" style={{ opacity:cs.vi[7]?1:0, transform:cs.vi[7]?'translateY(0)':'translateY(20px)', transition:'opacity .5s,transform .5s' }}>
          <p className="text-brand-600 font-semibold mb-1 group-hover:text-brand-700">Se alle temaer</p><p className="text-sm text-gray-400">250+ artikler</p>
        </Link>
      </div>
    </div></Section>

    {/* ══ STATS ══ */}
    <Section dark className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6">
      <p className="text-xs tracking-widest text-brand-400 font-semibold mb-2 uppercase">Elbil i Norge i tall</p>
      <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12">Markedet vokser hvert eneste år</h2>
      <StatsSection/>
    </div></Section>

    {/* ══ #7 ELBIL VS FOSSIL ══ */}
    <Section dark className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6">
      <p className="text-xs tracking-widest text-brand-400 font-semibold mb-2 uppercase">Sammenligning</p>
      <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Elbil vs fossilbil</h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">Se de reelle forskjellene i årlige driftskostnader. Basert på 15 000 km per år med norske priser i 2026.</p>
      <div ref={vs.ref}>
        {/* Two column header */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 bg-brand-600/10 border border-brand-500/20 rounded-2xl px-6 py-4">
            <IconBolt size={24} className="text-brand-400" />
            <div><p className="text-white font-bold text-lg">Elbil</p><p className="text-gray-400 text-sm">Gjennomsnittlig ny elbil 2026</p></div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            <div><p className="text-gray-300 font-bold text-lg">Fossilbil</p><p className="text-gray-500 text-sm">Gjennomsnittlig bensinbil</p></div>
          </div>
        </div>
        {/* Rows with bars */}
        <div className="space-y-6">
          {vsRows.map((r, i) => {
            const max = Math.max(r.ev, r.fossil)
            const evPct = (r.ev / max) * 100
            const foPct = (r.fossil / max) * 100
            const diff = r.fossil - r.ev
            return (
              <div key={i} className="bg-[#142030] rounded-2xl p-6 border border-white/5"
                style={{ opacity: vs.vi[i] ? 1 : 0, transform: vs.vi[i] ? 'translateY(0)' : 'translateY(16px)', transition: `all .6s cubic-bezier(.16,1,.3,1)` }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-semibold text-[16px]">{r.label}</p>
                  {diff > 0 && <span className="text-brand-400 text-sm font-bold">Du sparer {diff.toLocaleString('nb-NO')} kr</span>}
                  {diff < 0 && <span className="text-gray-500 text-sm font-medium">Elbil {Math.abs(diff).toLocaleString('nb-NO')} kr dyrere</span>}
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-400">Elbil</span>
                      <span className="text-lg font-bold text-brand-400">{r.ev.toLocaleString('nb-NO')} {r.unit}</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{
                        width: vs.vi[i] ? `${evPct}%` : '0%',
                        background: 'linear-gradient(to right, #16a34a, #4ade80)',
                        transition: 'width 1.2s cubic-bezier(.16,1,.3,1)',
                      }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-400">Fossilbil</span>
                      <span className="text-lg font-medium text-gray-400">{r.fossil.toLocaleString('nb-NO')} {r.unit}</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{
                        width: vs.vi[i] ? `${foPct}%` : '0%',
                        background: 'rgba(100,116,139,0.5)',
                        transition: 'width 1.2s cubic-bezier(.16,1,.3,1) 0.2s',
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* Total */}
        <div className="mt-8 bg-brand-600/10 border border-brand-500/20 rounded-2xl p-8 text-center"
          style={{ opacity: vs.vi[4] ? 1 : 0, transform: vs.vi[4] ? 'scale(1)' : 'scale(0.95)', transition: 'all .8s cubic-bezier(.16,1,.3,1)' }}>
          <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-3">Total årlig besparelse med elbil</p>
          <p className="text-5xl font-bold text-brand-400 font-display tracking-tight">~28 800 kr</p>
          <p className="text-gray-400 text-sm mt-3">basert på 15 000 km per år med norske 2026 priser</p>
        </div>
      </div>
    </div></Section>

    {/* ══ #3 GUIDES HOVER LIFT ══ */}
    <Section className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6">
      <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Fremhevede guider</p>
      <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-10">Grundige gjennomganger</h2>
      <div ref={gs.ref} className="grid lg:grid-cols-3 gap-6">
        {guides.map((g,i)=>(<Link key={i} href={g.href} className={`group rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${i===1?'bg-[#0c1420] text-white border-[#0c1420]':'bg-gray-50 border-gray-100'}`} style={{ opacity:gs.vi[i]?1:0, transform:gs.vi[i]?'translateY(0)':'translateY(24px)', transition:'opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1),box-shadow .3s' }}>
          <div className={`h-44 flex items-center justify-center ${i===1?'bg-[#142030]':'bg-brand-50'}`}>
            <div className={`group-hover:scale-125 transition-transform duration-500 ${i===1?'text-white/60':'text-brand-300'}`}>{g.icon}</div>
          </div>
          <div className="p-6">
            <p className={`text-xs tracking-wider font-semibold mb-2 uppercase ${i===1?'text-gray-400':'text-brand-600'}`}>{g.tag}</p>
            <h3 className={`text-xl font-bold mb-2 group-hover:underline ${i===1?'text-white':'text-gray-900'}`}>{g.title}</h3>
            <p className={`text-sm leading-relaxed ${i===1?'text-gray-300':'text-gray-500'}`}>{g.desc}</p>
            <p className={`text-sm font-semibold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all ${i===1?'text-white':'text-brand-600'}`}>Les guiden <IconArrowRight size={13}/></p>
          </div>
        </Link>))}
      </div>
    </div></Section>

    {/* ══ #4 TOOLS PULSE ══ */}
    <Section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100"><div className="max-w-site mx-auto px-6">
      <p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Interaktive verktøy</p>
      <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-10">Beregn kostnader og rekkevidde</h2>
      <div ref={ts.ref} className="grid lg:grid-cols-3 gap-6">
        {[
          { title:'Ladekostnadskalkulator', desc:'Beregn hva det koster å lade elbilen din per år med din strømpris', href:'/verktoy/ladekalkulator', icon:<IconPlug size={24}/> },
          { title:'Besparelseskalkulator', desc:'Se hvor mye du sparer med elbil sammenlignet med fossilbil over tid', href:'/verktoy/besparelseskalkulator', icon:<IconCalculator size={24}/> },
          { title:'Rekkeviddeberegner', desc:'Finn reell rekkevidde basert på sesong, hastighet og tilleggsutstyr', href:'/verktoy/rekkevidde', icon:<IconGauge size={24}/> },
        ].map((t,i)=>(<Link key={i} href={t.href} className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ opacity:ts.vi[i]?1:0, transform:ts.vi[i]?'translateY(0)':'translateY(20px)', transition:'opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1),border-color .2s,box-shadow .2s' }}>
          <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">{t.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3><p className="text-sm text-gray-500 leading-relaxed mb-4">{t.desc}</p>
          <p className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all">Prøv nå <IconArrowRight size={13}/></p>
        </Link>))}
      </div>
    </div></Section>

    {/* ══ #6 ARTICLES NUMBERED + SLIDE ══ */}
    <Section className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6"><div className="grid lg:grid-cols-[1fr_360px] gap-12">
      <div>
        <div className="flex items-end justify-between mb-8"><div><p className="text-xs tracking-widest text-brand-600 font-semibold mb-2 uppercase">Siste guider og analyser</p><h2 className="font-display text-3xl font-medium tracking-tight">Nylig oppdatert</h2></div><Link href="/nytt" className="text-brand-600 font-semibold text-sm flex items-center gap-1">Se alle <IconArrowRight size={14}/></Link></div>
        <div ref={as2.ref}>
          {articles.map((a,i)=>(<Link key={i} href={a.href} className="flex items-center gap-5 py-5 border-b border-gray-100 group hover:pl-2 -mx-3 px-3 rounded-xl transition-all duration-300" style={{ opacity:as2.vi[i]?1:0, transform:as2.vi[i]?'translateX(0)':'translateX(-16px)', transition:'opacity .5s cubic-bezier(.16,1,.3,1),transform .5s cubic-bezier(.16,1,.3,1),padding .2s' }}>
            <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">{i+1}</div>
            <div className="flex-1 min-w-0"><p className="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">{a.tag}</p><p className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">{a.title}</p><p className="text-sm text-gray-400 mt-0.5">{a.time} lesetid</p></div>
            <IconArrowRight size={16} className="text-gray-300 group-hover:text-brand-500 group-hover:translate-x-1 shrink-0 transition-all duration-300"/>
          </Link>))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="border border-gray-100 rounded-2xl p-6">
          <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Mest lest</p>
          {trending.map((t,i)=>(<Link key={i} href={t.href} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 group"><div><p className="text-xs text-brand-600 font-semibold uppercase">{t.cat}</p><p className="text-[15px] text-gray-800 font-medium group-hover:text-brand-700 transition-colors">{t.title}</p></div><IconArrowRight size={14} className="text-gray-300 shrink-0"/></Link>))}
        </div>
        <div className="bg-[#0c1420] rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(22,163,74,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.06) 1px,transparent 1px)', backgroundSize:'32px 32px' }}/>
          <div className="relative"><p className="text-xs text-brand-400 font-semibold uppercase tracking-wide mb-2">Verktøy</p><p className="text-xl font-bold mb-2">Beregn din ladekostnad</p><p className="text-gray-400 text-sm mb-5">Finn ut hva det koster å lade din elbil per år, og sammenlign med bensin.</p><Link href="/verktoy/ladekalkulator" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-50 transition-colors">Prøv kalkulatoren <IconArrowRight size={13}/></Link></div>
        </div>
      </div>
    </div></div></Section>

    {/* ══ FAQ ══ */}
    <Section dark className="py-16 lg:py-24"><div className="max-w-site mx-auto px-6"><div className="max-w-3xl">
      <p className="text-xs tracking-widest text-brand-400 font-semibold mb-2 uppercase">Ofte stilte spørsmål</p>
      <h2 className="font-display text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12">Det nordmenn lurer på om elbil</h2>
      <div className="rounded-2xl border border-white/10 overflow-hidden">
        {faqs.map((f,i)=>{ const isO=openFaq===i; return (
          <div key={i} className={`transition-colors duration-300 ${isO?'bg-[#f8faf5]':'bg-transparent'} ${i<faqs.length-1?'border-b border-white/10':''}`}>
            <button onClick={()=>setOpenFaq(isO?null:i)} className="w-full text-left px-6 py-5 flex items-center gap-4">
              <span className={`text-sm font-bold min-w-[28px] transition-colors duration-300 ${isO?'text-brand-600':'text-brand-400'}`}>{String(i+1).padStart(2,'0')}</span>
              <span className={`text-[17px] font-semibold flex-1 transition-colors duration-300 ${isO?'text-gray-900':'text-white'}`}>{f.q}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isO?'#16a34a':'#4ade80'} strokeWidth="2" strokeLinecap="round" className={`shrink-0 transition-transform duration-300 ${isO?'rotate-180':''}`}><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isO?'max-h-40 opacity-100':'max-h-0 opacity-0'}`}><p className="px-6 pb-5 pl-[66px] text-gray-600 leading-relaxed text-[15px]">{f.a}</p></div>
          </div>
        )})}
      </div>
    </div></div></Section>

    {/* ══ #5 CTA GLOW + PULSE RING ══ */}
    <section className="bg-[#0c1420] py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage:'linear-gradient(rgba(22,163,74,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.04) 1px,transparent 1px)', backgroundSize:'48px 48px' }}/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full" style={{ background:'radial-gradient(ellipse,rgba(22,163,74,0.1),transparent 70%)' }}/>
      <div className="relative max-w-site mx-auto px-6 text-center">
        <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Utforsk hele guiden</h2>
        <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto">250+ artikler, 3 kalkulatorer og 9 temaklynger. Alt om elbil i Norge, samlet på ett sted.</p>
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDuration:'2s' }}/>
          <Link href="/elbil" className="relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-50 transition-colors">Se alle artikler <IconArrowRight size={16}/></Link>
        </div>
      </div>
    </section>
  </>)
}
