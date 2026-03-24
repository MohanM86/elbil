'use client'

import { useState, useMemo } from 'react'

const seasons = [
  { label: 'Sommer (15–25°C)', factor: 0.95, id: 'summer' },
  { label: 'Vår/høst (5–15°C)', factor: 0.85, id: 'spring' },
  { label: 'Vinter (−5 til 5°C)', factor: 0.72, id: 'winter' },
  { label: 'Sterk kulde (under −10°C)', factor: 0.60, id: 'cold' },
]

const speeds = [
  { label: 'Bykjøring (30–50 km/t)', factor: 1.1, id: 'city' },
  { label: 'Landevei (60–80 km/t)', factor: 1.0, id: 'country' },
  { label: 'Motorvei (90 km/t)', factor: 0.88, id: 'highway90' },
  { label: 'Motorvei (110 km/t)', factor: 0.75, id: 'highway110' },
  { label: 'Motorvei (120 km/t)', factor: 0.68, id: 'highway120' },
]

const extras = [
  { label: 'Varmepumpe installert', factor: 1.08, id: 'heatpump' },
  { label: 'Takstativ/takboks', factor: 0.90, id: 'roof' },
  { label: 'Tilhenger', factor: 0.55, id: 'trailer' },
  { label: 'Klimaanlegg maks', factor: 0.93, id: 'ac' },
]

const carModels = [
  { name: 'Tesla Model Y LR', wltp: 542 },
  { name: 'Tesla Model 3 LR', wltp: 629 },
  { name: 'Volkswagen ID.4 Pro', wltp: 520 },
  { name: 'Volvo EX30 SM Extended', wltp: 480 },
  { name: 'Hyundai IONIQ 5 LR', wltp: 507 },
  { name: 'Skoda Enyaq 85', wltp: 545 },
  { name: 'Kia EV6 LR', wltp: 528 },
  { name: 'BYD Atto 3', wltp: 420 },
  { name: 'BMW iX3', wltp: 460 },
  { name: 'Mercedes EQA 250+', wltp: 528 },
  { name: 'Egendefinert', wltp: 400 },
]

export default function RekkeviddeKalkulator() {
  const [selectedCar, setSelectedCar] = useState(0)
  const [customWltp, setCustomWltp] = useState(400)
  const [selectedSeason, setSelectedSeason] = useState(0)
  const [selectedSpeed, setSelectedSpeed] = useState(1)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [batteryPercent, setBatteryPercent] = useState(100)

  const car = carModels[selectedCar]
  const isCustom = car.name === 'Egendefinert'
  const wltp = isCustom ? customWltp : car.wltp

  const results = useMemo(() => {
    const seasonFactor = seasons[selectedSeason].factor
    const speedFactor = speeds[selectedSpeed].factor

    let extraFactor = 1
    for (const ext of extras) {
      if (selectedExtras.includes(ext.id)) {
        extraFactor *= ext.factor
      }
    }

    const batteryFactor = batteryPercent / 100
    const realisticRange = wltp * seasonFactor * speedFactor * extraFactor * batteryFactor
    const percentOfWltp = (realisticRange / wltp) * 100

    return {
      wltp,
      realistic: Math.round(realisticRange),
      percentOfWltp: Math.round(percentOfWltp),
      seasonImpact: Math.round((1 - seasonFactor) * 100),
      speedImpact: Math.round((1 - speedFactor) * 100),
    }
  }, [selectedCar, customWltp, selectedSeason, selectedSpeed, selectedExtras, batteryPercent, wltp])

  return (
    <div className="space-y-8">
      {/* Car */}
      <div>
        <label className="block text-sm font-medium text-surface-700 mb-2">Velg elbil</label>
        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {carModels.map((c, i) => (
            <option key={i} value={i}>{c.name} {c.name !== 'Egendefinert' ? `(${c.wltp} km WLTP)` : ''}</option>
          ))}
        </select>
      </div>

      {isCustom && (
        <div>
          <label className="block text-sm font-medium text-surface-700 mb-2">WLTP-rekkevidde (km)</label>
          <input type="number" value={customWltp} onChange={(e) => setCustomWltp(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
      )}

      {/* Battery level */}
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-surface-700">Batterinivå ved start</span>
          <span className="font-semibold text-surface-900">{batteryPercent} %</span>
        </div>
        <input type="range" min={10} max={100} step={5} value={batteryPercent}
          onChange={(e) => setBatteryPercent(Number(e.target.value))} className="w-full accent-primary-600" />
      </div>

      {/* Season */}
      <div>
        <label className="block text-sm font-medium text-surface-700 mb-3">Sesong / temperatur</label>
        <div className="grid grid-cols-2 gap-2">
          {seasons.map((s, i) => (
            <button key={s.id} onClick={() => setSelectedSeason(i)}
              className={`px-4 py-3 rounded-xl text-sm text-left transition-all ${
                selectedSeason === i
                  ? 'bg-primary-600 text-white font-medium'
                  : 'bg-white border border-surface-200 text-surface-700 hover:border-primary-300'
              }`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Speed */}
      <div>
        <label className="block text-sm font-medium text-surface-700 mb-3">Kjørehastighet</label>
        <div className="grid grid-cols-1 gap-2">
          {speeds.map((s, i) => (
            <button key={s.id} onClick={() => setSelectedSpeed(i)}
              className={`px-4 py-3 rounded-xl text-sm text-left transition-all ${
                selectedSpeed === i
                  ? 'bg-primary-600 text-white font-medium'
                  : 'bg-white border border-surface-200 text-surface-700 hover:border-primary-300'
              }`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Extras */}
      <div>
        <label className="block text-sm font-medium text-surface-700 mb-3">Tilleggsfaktorer</label>
        <div className="grid grid-cols-2 gap-2">
          {extras.map((ext) => {
            const active = selectedExtras.includes(ext.id)
            return (
              <button key={ext.id}
                onClick={() => setSelectedExtras(
                  active ? selectedExtras.filter(e => e !== ext.id) : [...selectedExtras, ext.id]
                )}
                className={`px-4 py-3 rounded-xl text-sm text-left transition-all ${
                  active
                    ? 'bg-primary-100 border-2 border-primary-400 text-primary-800 font-medium'
                    : 'bg-white border border-surface-200 text-surface-700 hover:border-primary-300'
                }`}>
                {ext.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 space-y-5">
        <h3 className="font-display text-xl text-surface-900">Estimert rekkevidde</h3>

        <div className="bg-white rounded-xl p-5 border-2 border-primary-300 text-center">
          <p className="text-5xl font-bold text-primary-700">{results.realistic} km</p>
          <p className="text-sm text-surface-500 mt-2">
            {results.percentOfWltp} % av WLTP ({results.wltp} km)
          </p>
        </div>

        {/* Visual bar */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between text-xs text-surface-500 mb-2">
            <span>0 km</span>
            <span>WLTP: {results.wltp} km</span>
          </div>
          <div className="h-4 bg-surface-100 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(results.percentOfWltp, 100)}%` }}
            />
          </div>
          <div className="flex gap-4 mt-3 text-xs text-surface-500">
            <span>Sesong: −{results.seasonImpact}%</span>
            <span>Hastighet: {results.speedImpact > 0 ? `−${results.speedImpact}` : `+${Math.abs(results.speedImpact)}`}%</span>
          </div>
        </div>

        <p className="text-xs text-surface-400">
          Estimatene er basert på gjennomsnittlige erfaringstall fra norske elbileiere og NAFs testdata.
          Reell rekkevidde kan variere med kjørestil, topografi og bilens tilstand.
        </p>
      </div>
    </div>
  )
}
