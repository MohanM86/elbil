import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconGauge } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hurtiglading av elbil — Alt du må vite',
  description: 'Hurtiglading av elbil forklart. Hastighet, pris, CCS, CHAdeMO, tips for langtur og beste operatører i Norge.',
  alternates: { canonical: 'https://elbil.io/hurtiglading-elbil' },
}

export default function HurtigladingElbil() {
  return (
    <PillarHub
      breadcrumbName="Hurtiglading"
      h1="Hurtiglading av elbil"
      directAnswer="Hurtiglading (DC-lading) fyller elbilen fra 20 til 80 % på 20 til 40 minutter, avhengig av bil og laderstørrelse. Prisen er typisk 4 til 8 kr per kWh. De største operatørene i Norge er Mer, Circle K, Recharge og Kempower. CCS er standarden for alle nye elbiler."
      updatedAt="20. mars 2026"
      icon={<IconGauge size={22} />}
      coreArticles={[
        { title: 'Ladepris 2026', href: '/ladepris-elbil', desc: 'Prissammenligning alle operatører' },
        { title: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme', desc: 'Det billigere alternativet' },
      ]}
      moreArticles={[
        { title: 'CCS hurtiglading forklart', href: '/artikler/ccs-hurtiglading' },
        { title: 'CHAdeMO-lading', href: '/artikler/chademo-lading' },
        { title: 'DC-lading vs AC-lading', href: '/artikler/dc-lading-vs-ac-lading' },
        { title: 'Ladehastighet: Tabell alle modeller', href: '/artikler/elbil-ladehastighet-tabell' },
        { title: 'Ladeplanlegger for langtur', href: '/artikler/ladeplanlegger-elbil' },
        { title: 'Ladeoperatører i Norge', href: '/artikler/ladeoperatorer-norge' },
        { title: 'Ladekort for elbil', href: '/artikler/ladekort-elbil' },
        { title: 'Lade elbil i Europa', href: '/artikler/lade-elbil-i-europa' },
      ]}
    />
  )
}
