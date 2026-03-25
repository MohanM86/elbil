'use client'

import { useEffect, useRef, useState } from 'react'

const barData = [
  { year: '2020', pct: 54 },
  { year: '2021', pct: 65 },
  { year: '2022', pct: 79 },
  { year: '2023', pct: 82 },
  { year: '2024', pct: 89 },
  { year: '2025', pct: 93 },
]

const costData = [
  { label: 'Elbil hjemmelading', val: 2, suffix: ' kr', pct: 14, bright: true },
  { label: 'Elbil hurtiglading', val: 6, suffix: ' kr', pct: 43, bright: false },
  { label: 'Bensinbil', val: 14, suffix: ' kr', pct: 100, bright: false },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [barHeights, setBarHeights] = useState(barData.map(() => 0))
  const [progWidths, setProgWidths] = useState(costData.map(() => 0))
  const [countVals, setCountVals] = useState(costData.map(() => 0))
  const [savVal, setSavVal] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true)
        obs.disconnect()

        // Stagger bar heights
        barData.forEach((b, i) => {
          setTimeout(() => {
            setBarHeights(prev => { const next = [...prev]; next[i] = (b.pct / 100) * 220; return next })
          }, 200 + i * 120)
        })

        // Stagger progress bars
        costData.forEach((c, i) => {
          setTimeout(() => {
            setProgWidths(prev => { const next = [...prev]; next[i] = c.pct; return next })
          }, 400 + i * 250)
        })

        // Count up cost values
        costData.forEach((c, i) => {
          setTimeout(() => {
            let current = 0
            const step = Math.max(1, Math.ceil(c.val / 20))
            const tick = () => {
              current = Math.min(current + step, c.val)
              setCountVals(prev => { const next = [...prev]; next[i] = current; return next })
              if (current < c.val) requestAnimationFrame(tick)
            }
            tick()
          }, 500 + i * 250)
        })

        // Count up savings
        let s = 0
        const sStep = Math.ceil(38000 / 60)
        const sTick = () => {
          s = Math.min(s + sStep, 38000)
          setSavVal(s)
          if (s < 38000) requestAnimationFrame(sTick)
        }
        setTimeout(sTick, 600)
      }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bar chart */}
        <div className="bg-[#142030] rounded-2xl p-8 border border-white/5">
          <p className="text-sm text-gray-300 tracking-wider mb-8 uppercase font-semibold">Markedsandel nybilsalg</p>
          <div className="flex items-end gap-4" style={{ height: '260px' }}>
            {barData.map((b, i) => {
              const isLast = i === barData.length - 1
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span className={`text-sm font-semibold ${isLast ? 'text-white' : 'text-gray-300'}`} style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    transition: `all .5s cubic-bezier(.16,1,.3,1) ${0.3 + i * 0.12}s`,
                  }}>
                    {b.pct}%
                  </span>
                  <div className="w-full relative" style={{ height: `${barHeights[i]}px`, transition: `height 1s cubic-bezier(.16,1,.3,1)` }}>
                    <div className="absolute inset-0 rounded-t-lg" style={{
                      background: isLast ? 'linear-gradient(to top, #16a34a, #4ade80)' : `rgba(255,255,255,${0.15 + i * 0.10})`,
                    }} />
                  </div>
                  <span className={`text-sm ${isLast ? 'text-white font-bold' : 'text-gray-400'}`}>{b.year}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Cost per mil */}
        <div className="bg-[#142030] rounded-2xl p-8 border border-white/5">
          <p className="text-sm text-gray-300 tracking-wider mb-8 uppercase font-semibold">Kostnad per mil</p>
          <div className="space-y-8">
            {costData.map((c, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[17px] text-white font-medium">{c.label}</span>
                  <span className={`text-2xl font-bold tracking-tight ${i === 0 ? 'text-brand-400' : 'text-gray-400'}`} style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(8px)',
                    transition: `all .5s cubic-bezier(.16,1,.3,1) ${0.5 + i * 0.25}s`,
                  }}>
                    {countVals[i]}{c.suffix}
                  </span>
                </div>
                <div className="h-5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full rounded-full" style={{
                    width: `${progWidths[i]}%`,
                    background: i === 0 ? 'linear-gradient(to right, #16a34a, #4ade80)' : `rgba(148,163,184,${0.9 - i * 0.2})`,
                    transition: 'width 1.2s cubic-bezier(.16,1,.3,1)',
                    boxShadow: i === 0 ? '0 0 16px rgba(74,222,128,0.3)' : 'none',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Besparelse counter */}
        <div className="bg-[#142030] rounded-2xl p-8 border border-white/5 flex flex-col justify-center items-center text-center">
          <p className="text-sm text-gray-300 tracking-wider mb-6 uppercase font-semibold">Årlig besparelse med elbil</p>
          <p className="text-7xl font-bold text-brand-400 tracking-tight font-display" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
            transition: 'all .8s cubic-bezier(.16,1,.3,1) .6s',
          }}>
            {savVal.toLocaleString('nb-NO')}
          </p>
          <p className="text-lg text-gray-300 mt-3">kroner spart i gjennomsnitt</p>
          <p className="text-sm text-gray-500 mt-2">sammenlignet med fossilbil ved 15 000 km</p>
        </div>

        {/* Rekkevidde growth */}
        <div className="bg-[#142030] rounded-2xl p-8 border border-white/5">
          <p className="text-sm text-gray-300 tracking-wider mb-6 uppercase font-semibold">Gjennomsnittlig rekkevidde</p>
          <div className="space-y-5">
            {[
              { year: '2018', km: 200, pct: 40 },
              { year: '2020', km: 320, pct: 64 },
              { year: '2022', km: 400, pct: 80 },
              { year: '2024', km: 450, pct: 90 },
              { year: '2025', km: 480, pct: 96 },
            ].map((r, i) => {
              const isLast = i === 4
              return (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className={`text-sm ${isLast ? 'text-white font-semibold' : 'text-gray-400'}`}>{r.year}</span>
                    <span className={`text-lg font-bold ${isLast ? 'text-white' : 'text-gray-300'}`} style={{
                      opacity: visible ? 1 : 0,
                      transition: `opacity .5s ${0.5 + i * 0.15}s`,
                    }}>
                      {r.km} km
                    </span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: visible ? `${r.pct}%` : '0%',
                      background: isLast ? 'linear-gradient(to right, #16a34a, #4ade80)' : `rgba(255,255,255,${0.12 + i * 0.10})`,
                      transition: `width 1s cubic-bezier(.16,1,.3,1) ${0.4 + i * 0.15}s`,
                    }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
