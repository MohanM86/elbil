'use client'

import { useState, useMemo } from 'react'

export default function BesparelsesKalkulator() {
  const [kmPerYear, setKmPerYear] = useState(15000)
  const [electricityPrice, setElectricityPrice] = useState(1.5)
  const [petrolPrice, setPetrolPrice] = useState(20)
  const [bomPerMonth, setBomPerMonth] = useState(1500)
  const [years, setYears] = useState(5)
  const [hasFirmabil, setHasFirmabil] = useState(false)

  const results = useMemo(() => {
    // Elbil costs
    const evFuelYear = (kmPerYear / 10) * 1.7 * electricityPrice
    const evServiceYear = 3000
    const evInsuranceYear = 8000
    const evBomYear = bomPerMonth * 12 * 0.4 // 60% rabatt
    const evArsavgift = 2750
    const evYearlyCost = evFuelYear + evServiceYear + evInsuranceYear + evBomYear + evArsavgift

    // Fossilbil costs
    const fossilFuelYear = (kmPerYear / 10) * 0.7 * petrolPrice
    const fossilServiceYear = 8000
    const fossilInsuranceYear = 9000
    const fossilBomYear = bomPerMonth * 12
    const fossilArsavgift = 3200
    const fossilYearlyCost = fossilFuelYear + fossilServiceYear + fossilInsuranceYear + fossilBomYear + fossilArsavgift

    const yearlyDiff = fossilYearlyCost - evYearlyCost
    const totalDiff = yearlyDiff * years

    // Firmabil bonus
    const firmabilSavingYear = hasFirmabil ? 18000 : 0
    const totalWithFirmabil = totalDiff + (firmabilSavingYear * years)

    // Category breakdowns
    const fuelSaving = (fossilFuelYear - evFuelYear) * years
    const serviceSaving = (fossilServiceYear - evServiceYear) * years
    const bomSaving = (fossilBomYear - evBomYear) * years
    const insuranceSaving = (fossilInsuranceYear - evInsuranceYear) * years

    return {
      evYearlyCost: Math.round(evYearlyCost),
      fossilYearlyCost: Math.round(fossilYearlyCost),
      yearlyDiff: Math.round(yearlyDiff),
      totalDiff: Math.round(totalDiff),
      totalWithFirmabil: Math.round(totalWithFirmabil),
      fuelSaving: Math.round(fuelSaving),
      serviceSaving: Math.round(serviceSaving),
      bomSaving: Math.round(bomSaving),
      insuranceSaving: Math.round(insuranceSaving),
      firmabilSavingTotal: Math.round(firmabilSavingYear * years),
    }
  }, [kmPerYear, electricityPrice, petrolPrice, bomPerMonth, years, hasFirmabil])

  const formatKr = (n: number) => n.toLocaleString('nb-NO')

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-base mb-2">
            <span className="font-medium text-surface-700">Kjørelengde per år</span>
            <span className="font-semibold text-surface-900">{formatKr(kmPerYear)} km</span>
          </div>
          <input type="range" min={5000} max={40000} step={1000} value={kmPerYear}
            onChange={(e) => setKmPerYear(Number(e.target.value))} className="w-full accent-primary-600" />
        </div>

        <div>
          <div className="flex justify-between text-base mb-2">
            <span className="font-medium text-surface-700">Strømpris (kr/kWh)</span>
            <span className="font-semibold text-surface-900">{electricityPrice.toFixed(2)} kr</span>
          </div>
          <input type="range" min={0.5} max={4} step={0.1} value={electricityPrice}
            onChange={(e) => setElectricityPrice(Number(e.target.value))} className="w-full accent-primary-600" />
        </div>

        <div>
          <div className="flex justify-between text-base mb-2">
            <span className="font-medium text-surface-700">Bensinpris (kr/liter)</span>
            <span className="font-semibold text-surface-900">{petrolPrice.toFixed(0)} kr</span>
          </div>
          <input type="range" min={15} max={28} step={0.5} value={petrolPrice}
            onChange={(e) => setPetrolPrice(Number(e.target.value))} className="w-full accent-primary-600" />
        </div>

        <div>
          <div className="flex justify-between text-base mb-2">
            <span className="font-medium text-surface-700">Bompenger per måned (fossilbil)</span>
            <span className="font-semibold text-surface-900">{formatKr(bomPerMonth)} kr</span>
          </div>
          <input type="range" min={0} max={5000} step={100} value={bomPerMonth}
            onChange={(e) => setBomPerMonth(Number(e.target.value))} className="w-full accent-primary-600" />
          <p className="text-sm text-surface-400 mt-1">Sett til 0 om du ikke kjører gjennom bomring</p>
        </div>

        <div>
          <div className="flex justify-between text-base mb-2">
            <span className="font-medium text-surface-700">Beregningsperiode</span>
            <span className="font-semibold text-surface-900">{years} år</span>
          </div>
          <input type="range" min={1} max={10} step={1} value={years}
            onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-primary-600" />
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={hasFirmabil}
            onChange={(e) => setHasFirmabil(e.target.checked)}
            className="w-5 h-5 rounded border-surface-300 text-primary-600 focus:ring-primary-500" />
          <span className="text-base font-medium text-surface-700">Firmabil (inkluder skattefordel)</span>
        </label>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 space-y-5">
        <h3 className="font-display text-xl text-surface-900">Besparelse over {years} år</h3>

        <div className="bg-white rounded-xl p-5 border-2 border-primary-300 text-center">
          <p className="text-sm text-surface-500 uppercase tracking-wide mb-1">Total besparelse med elbil</p>
          <p className="text-5xl font-bold text-primary-700">
            {formatKr(hasFirmabil ? results.totalWithFirmabil : results.totalDiff)} kr
          </p>
          <p className="text-base text-surface-500 mt-1">
            {formatKr(results.yearlyDiff + (hasFirmabil ? 18000 : 0))} kr per år
          </p>
        </div>

        {/* Breakdown */}
        <div className="space-y-2">
          <p className="text-sm text-surface-500 uppercase tracking-wide">Fordelt på kategorier</p>
          {[
            { label: 'Drivstoff', value: results.fuelSaving, color: 'bg-primary-500' },
            { label: 'Bompenger', value: results.bomSaving, color: 'bg-primary-400' },
            { label: 'Vedlikehold', value: results.serviceSaving, color: 'bg-primary-300' },
            { label: 'Forsikring', value: results.insuranceSaving, color: 'bg-primary-200' },
            ...(hasFirmabil ? [{ label: 'Skattefordel firmabil', value: results.firmabilSavingTotal, color: 'bg-primary-600' }] : []),
          ].map((item) => {
            const total = hasFirmabil ? results.totalWithFirmabil : results.totalDiff
            const pct = total > 0 ? Math.round((item.value / total) * 100) : 0
            return (
              <div key={item.label} className="bg-white rounded-lg p-3">
                <div className="flex justify-between text-base mb-1.5">
                  <span className="text-surface-600">{item.label}</span>
                  <span className="font-semibold">{formatKr(item.value)} kr</span>
                </div>
                <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-sm text-surface-500 uppercase tracking-wide mb-1">Elbil/år</p>
            <p className="text-xl font-semibold text-primary-700">{formatKr(results.evYearlyCost)} kr</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-sm text-surface-500 uppercase tracking-wide mb-1">Bensinbil/år</p>
            <p className="text-xl font-semibold text-red-600">{formatKr(results.fossilYearlyCost)} kr</p>
          </div>
        </div>

        <p className="text-sm text-surface-400">
          Beregningene er estimater basert på gjennomsnittlig forbruk (1,7 kWh/mil elbil, 0,7 l/mil bensin),
          typiske vedlikeholdskostnader og gjeldende bompengesatser. Kilde: SSB, OFV, Statens vegvesen.
        </p>
      </div>
    </div>
  )
}
