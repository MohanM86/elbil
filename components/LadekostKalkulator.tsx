'use client'

import { useState, useMemo } from 'react'

const popularCars = [
  { name: 'Tesla Model Y Long Range', battery: 75, consumption: 1.7 },
  { name: 'Volkswagen ID.4 Pro', battery: 77, consumption: 1.8 },
  { name: 'Volvo EX30 Single Motor', battery: 51, consumption: 1.5 },
  { name: 'Hyundai IONIQ 5 Long Range', battery: 77.4, consumption: 1.8 },
  { name: 'Skoda Enyaq iV 80', battery: 77, consumption: 1.7 },
  { name: 'Kia EV6 Long Range', battery: 77.4, consumption: 1.8 },
  { name: 'BYD Atto 3', battery: 60.5, consumption: 1.7 },
  { name: 'Tesla Model 3 Long Range', battery: 75, consumption: 1.5 },
  { name: 'BMW iX3', battery: 74, consumption: 1.9 },
  { name: 'Mercedes EQB 250+', battery: 70.5, consumption: 2.0 },
  { name: 'Audi Q4 e-tron 50', battery: 77, consumption: 1.9 },
  { name: 'Polestar 2 Long Range', battery: 79, consumption: 1.7 },
  { name: 'Egendefinert', battery: 60, consumption: 1.8 },
]

export default function LadekostKalkulator() {
  const [selectedCar, setSelectedCar] = useState(0)
  const [electricityPrice, setElectricityPrice] = useState(1.5)
  const [fastChargePrice, setFastChargePrice] = useState(5.5)
  const [kmPerYear, setKmPerYear] = useState(15000)
  const [homeChargePercent, setHomeChargePercent] = useState(80)
  const [customBattery, setCustomBattery] = useState(60)
  const [customConsumption, setCustomConsumption] = useState(1.8)

  const car = popularCars[selectedCar]
  const isCustom = car.name === 'Egendefinert'
  const battery = isCustom ? customBattery : car.battery
  const consumption = isCustom ? customConsumption : car.consumption

  const results = useMemo(() => {
    const totalKwhYear = (kmPerYear / 10) * consumption
    const homeKwh = totalKwhYear * (homeChargePercent / 100)
    const fastKwh = totalKwhYear * ((100 - homeChargePercent) / 100)

    const homeCost = homeKwh * electricityPrice
    const fastCost = fastKwh * fastChargePrice
    const totalCost = homeCost + fastCost

    const costPerKm = totalCost / kmPerYear
    const costPerMil = costPerKm * 10

    // Comparison with petrol
    const petrolLiterPerMil = 0.7
    const petrolPricePerLiter = 20
    const petrolCostYear = (kmPerYear / 10) * petrolLiterPerMil * petrolPricePerLiter
    const saving = petrolCostYear - totalCost

    return {
      totalKwhYear: Math.round(totalKwhYear),
      homeCost: Math.round(homeCost),
      fastCost: Math.round(fastCost),
      totalCost: Math.round(totalCost),
      costPerMil: costPerMil.toFixed(1),
      petrolCostYear: Math.round(petrolCostYear),
      saving: Math.round(saving),
      savingPercent: Math.round((saving / petrolCostYear) * 100),
    }
  }, [selectedCar, electricityPrice, fastChargePrice, kmPerYear, homeChargePercent, customBattery, customConsumption, battery, consumption])

  return (
    <div className="space-y-8">
      {/* Car selection */}
      <div>
        <label className="block text-sm font-medium text-surface-700 mb-2">
          Velg elbil
        </label>
        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white text-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {popularCars.map((c, i) => (
            <option key={i} value={i}>{c.name} {c.name !== 'Egendefinert' ? `(${c.battery} kWh)` : ''}</option>
          ))}
        </select>
      </div>

      {isCustom && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">
              Batterikapasitet (kWh)
            </label>
            <input
              type="number"
              value={customBattery}
              onChange={(e) => setCustomBattery(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-2">
              Forbruk (kWh/mil)
            </label>
            <input
              type="number"
              step="0.1"
              value={customConsumption}
              onChange={(e) => setCustomConsumption(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-surface-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      )}

      {/* Sliders */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-surface-700">Kjørelengde per år</span>
            <span className="font-semibold text-surface-900">{kmPerYear.toLocaleString('nb-NO')} km</span>
          </div>
          <input
            type="range"
            min={5000}
            max={40000}
            step={1000}
            value={kmPerYear}
            onChange={(e) => setKmPerYear(Number(e.target.value))}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-surface-400 mt-1">
            <span>5 000</span><span>40 000</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-surface-700">Strømpris hjemme (kr/kWh)</span>
            <span className="font-semibold text-surface-900">{electricityPrice.toFixed(2)} kr</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={4.0}
            step={0.1}
            value={electricityPrice}
            onChange={(e) => setElectricityPrice(Number(e.target.value))}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-surface-400 mt-1">
            <span>0,50 kr</span><span>4,00 kr</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-surface-700">Hurtigladepris (kr/kWh)</span>
            <span className="font-semibold text-surface-900">{fastChargePrice.toFixed(2)} kr</span>
          </div>
          <input
            type="range"
            min={3.0}
            max={10.0}
            step={0.5}
            value={fastChargePrice}
            onChange={(e) => setFastChargePrice(Number(e.target.value))}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-surface-400 mt-1">
            <span>3,00 kr</span><span>10,00 kr</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-surface-700">Andel hjemmelading</span>
            <span className="font-semibold text-surface-900">{homeChargePercent} %</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={homeChargePercent}
            onChange={(e) => setHomeChargePercent(Number(e.target.value))}
            className="w-full accent-primary-600"
          />
          <div className="flex justify-between text-xs text-surface-400 mt-1">
            <span>0 % (kun hurtig)</span><span>100 % (kun hjemme)</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 space-y-4">
        <h3 className="font-display text-xl text-surface-900">Ditt resultat</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs text-surface-500 uppercase tracking-wide mb-1">Total ladekostnad/år</p>
            <p className="text-2xl font-semibold text-surface-900">
              {results.totalCost.toLocaleString('nb-NO')} <span className="text-sm font-normal">kr</span>
            </p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs text-surface-500 uppercase tracking-wide mb-1">Kostnad per mil</p>
            <p className="text-2xl font-semibold text-surface-900">
              {results.costPerMil} <span className="text-sm font-normal">kr</span>
            </p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs text-surface-500 uppercase tracking-wide mb-1">Hjemmelading</p>
            <p className="text-lg font-semibold text-surface-900">
              {results.homeCost.toLocaleString('nb-NO')} kr
            </p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <p className="text-xs text-surface-500 uppercase tracking-wide mb-1">Hurtiglading</p>
            <p className="text-lg font-semibold text-surface-900">
              {results.fastCost.toLocaleString('nb-NO')} kr
            </p>
          </div>
        </div>

        {/* Savings comparison */}
        <div className="bg-white rounded-xl p-4 border-2 border-primary-300">
          <p className="text-xs text-surface-500 uppercase tracking-wide mb-2">Besparelse vs bensinbil</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-primary-700">
              {results.saving.toLocaleString('nb-NO')} kr
            </p>
            <p className="text-sm text-primary-600 mb-1">per år ({results.savingPercent} % billigere)</p>
          </div>
          <div className="mt-3 flex gap-3 text-xs text-surface-500">
            <span>Elbil: {results.totalCost.toLocaleString('nb-NO')} kr/år</span>
            <span>•</span>
            <span>Bensin: {results.petrolCostYear.toLocaleString('nb-NO')} kr/år</span>
          </div>
          <p className="text-xs text-surface-400 mt-2">
            Bensinberegning: 0,7 l/mil, 20 kr/liter. Kilde: SSB gjennomsnittspriser.
          </p>
        </div>
      </div>
    </div>
  )
}
