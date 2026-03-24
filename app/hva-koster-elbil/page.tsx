import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconWallet } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hva koster en elbil i Norge? Full oversikt',
  description: 'Komplett prisoversikt for elbiler i Norge. Fra budsjettmodeller under 300 000 kr til premium over 700 000 kr.',
  alternates: { canonical: 'https://elbil.io/hva-koster-elbil' },
}

export default function HvaKosterElbil() {
  return (
    <PillarHub
      breadcrumbName="Hva koster elbil"
      h1="Hva koster en elbil?"
      directAnswer="Nye elbiler i Norge koster fra under 250 000 kr for de rimeligste modellene til over 1 million kr for premium. Det mest populære segmentet ligger mellom 350 000 og 550 000 kr, med modeller som Tesla Model Y, Volkswagen ID.4 og Volvo EX30. Brukte elbiler fås fra rundt 150 000 kr."
      updatedAt="20. mars 2026"
      icon={<IconWallet size={22} />}
      coreArticles={[
        { title: 'Hvor mye sparer man?', href: '/hvor-mye-sparer-man-pa-elbil', desc: 'Totalkostnad elbil vs fossilbil' },
        { title: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator', desc: 'Regn ut din besparelse' },
      ]}
      moreArticles={[
        { title: 'Billigste elbil i Norge', href: '/artikler/billigste-elbil-norge' },
        { title: 'Elbiler under 300 000 kr', href: '/artikler/elbil-under-300000' },
        { title: 'Elbiler under 400 000 kr', href: '/artikler/elbil-under-400000' },
        { title: 'Elbiler under 500 000 kr', href: '/artikler/elbil-under-500000' },
        { title: 'Brukt elbil: Priser', href: '/artikler/elbil-bruktbil-pris' },
        { title: 'Leasing vs kjøp', href: '/artikler/elbil-leasing-vs-kjop' },
        { title: 'Elbil verditap', href: '/artikler/elbil-verditap' },
        { title: 'Elbil finansiering', href: '/artikler/elbil-finansiering' },
      ]}
    />
  )
}
