import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconPlug } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hva koster det å lade elbil? Detaljert prisguide',
  description: 'Detaljert oversikt over ladekostnader for elbil. Hjemmelading, hurtiglading, operatørpriser og tips for å spare.',
  alternates: { canonical: 'https://elbil.io/hva-koster-lading' },
}

export default function HvaKosterLading() {
  return (
    <PillarHub
      breadcrumbName="Hva koster lading"
      h1="Hva koster det å lade elbil?"
      directAnswer="Hjemmelading koster 1 til 2 kr per kWh, hurtiglading 4 til 8 kr per kWh. For en typisk elbil med 1,7 kWh/mil forbruk betyr det 1,5 til 3 kr per mil hjemme og 7 til 15 kr per mil på hurtiglader. Til sammenligning koster bensin 10 til 18 kr per mil."
      updatedAt="20. mars 2026"
      icon={<IconPlug size={22} />}
      coreArticles={[
        { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator', desc: 'Beregn eksakt ladekostnad for din bil' },
        { title: 'Ladepris oversikt', href: '/ladepris-elbil', desc: 'Sammenligning av alle operatører' },
      ]}
      moreArticles={[
        { title: 'Smartlading: Spar penger', href: '/artikler/smartlading-elbil' },
        { title: 'Beste strømavtale for elbileiere', href: '/artikler/elbil-stromavtale-tips' },
        { title: 'Ladepris per kWh: Operatørsammenligning', href: '/artikler/elbil-lading-pris-per-kwh' },
        { title: 'Gratis lading: Hvor finnes det?', href: '/artikler/gratis-lading-elbil' },
        { title: 'Installere lader hjemme: Kostnad', href: '/artikler/installere-lader-elbil' },
        { title: 'Enova-støtte til lader', href: '/artikler/enova-stotte-elbillader' },
      ]}
    />
  )
}
