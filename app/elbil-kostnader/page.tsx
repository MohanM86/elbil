import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconWallet } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hva koster en elbil? Pris, drift og besparelser',
  description: 'Komplett oversikt over elbilkostnader i Norge. Kjøpspris, forsikring, lading, vedlikehold og besparelser sammenlignet med fossilbil.',
  alternates: { canonical: 'https://elbil.io/elbil-kostnader' },
}

export default function ElbilKostnader() {
  return (
    <PillarHub
      breadcrumbName="Kostnader"
      h1="Elbil kostnader"
      directAnswer="En elbil koster typisk 300 000 til 600 000 kr å kjøpe, men er vesentlig billigere i drift enn fossilbil. Du sparer 30 000 til 50 000 kr årlig på drivstoff, vedlikehold og avgifter. Over 5 år er totalbesparelsen vanligvis 80 000 til 150 000 kroner."
      updatedAt="20. mars 2026"
      icon={<IconWallet size={22} />}
      coreArticles={[
        { title: 'Hva koster en elbil?', href: '/hva-koster-elbil', desc: 'Full prisoversikt alle segmenter' },
        { title: 'Hva koster det å lade?', href: '/hva-koster-lading', desc: 'Pris per kWh og per mil' },
        { title: 'Hvor mye sparer man?', href: '/hvor-mye-sparer-man-pa-elbil', desc: 'Elbil vs fossilbil i kroner og øre' },
      ]}
      moreArticles={[
        { title: 'Elbil vs fossilbil: Kostnad', href: '/artikler/elbil-vs-fossilbil-kostnad' },
        { title: 'Elbil forsikring: Priser', href: '/artikler/elbil-forsikring-pris' },
        { title: 'Avgifter og moms', href: '/artikler/elbil-avgifter-norge' },
        { title: 'Bompenger elbil', href: '/artikler/elbil-bompenger' },
        { title: 'Elbil som firmabil', href: '/artikler/elbil-firmabil' },
        { title: 'Vedlikeholdskostnader', href: '/artikler/elbil-vedlikehold-kostnad' },
        { title: 'Verditap elbil', href: '/artikler/elbil-verditap' },
        { title: 'Billigste elbil i Norge', href: '/artikler/billigste-elbil-norge' },
        { title: 'Brukt elbil: Priser', href: '/artikler/elbil-bruktbil-pris' },
        { title: 'Leasing vs kjøp', href: '/artikler/elbil-leasing-vs-kjop' },
        { title: 'Batteribytte kostnad', href: '/artikler/elbil-batteribytte-kostnad' },
        { title: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
      ]}
    />
  )
}
