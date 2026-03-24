import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconWallet } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hva koster det å lade elbil i 2026? Prisguide',
  description: 'Komplett prisguide for elbillading. Hjemmelading, hurtiglading, operatørpriser og tips for å spare. Oppdatert for 2026.',
  alternates: { canonical: 'https://elbil.io/ladepris-elbil' },
}

export default function LadeprisElbil() {
  return (
    <PillarHub
      breadcrumbName="Ladepris"
      h1="Hva koster det å lade elbil?"
      directAnswer="Hjemmelading koster typisk 1 til 2 kr per kWh inkludert nettleie, som gir 1,5 til 3 kr per mil. Hurtiglading koster 4 til 8 kr per kWh avhengig av operatør og hastighet, altså 7 til 15 kr per mil. Til sammenligning koster bensin 10 til 18 kr per mil."
      updatedAt="20. mars 2026"
      icon={<IconWallet size={22} />}
      coreArticles={[
        { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator', desc: 'Beregn din ladekostnad' },
        { title: 'Hvor mye sparer man?', href: '/hvor-mye-sparer-man-pa-elbil', desc: 'Elbil vs fossilbil i kroner' },
        { title: 'Smartlading', href: '/artikler/smartlading-elbil', desc: 'Spar penger med styrt lading' },
      ]}
      moreArticles={[
        { title: 'Ladepris per kWh: Sammenligning operatører', href: '/artikler/elbil-lading-pris-per-kwh' },
        { title: 'Gratis lading av elbil', href: '/artikler/gratis-lading-elbil' },
        { title: 'Beste strømavtale for elbileiere', href: '/artikler/elbil-stromavtale-tips' },
        { title: 'Strømforbruk elbil per mil', href: '/artikler/elbil-stromforbruk-per-mil' },
        { title: 'Ladeoperatører i Norge', href: '/artikler/ladeoperatorer-norge' },
        { title: 'Elbil forbruk på motorvei', href: '/artikler/elbil-forbruk-motorvei' },
      ]}
    />
  )
}
