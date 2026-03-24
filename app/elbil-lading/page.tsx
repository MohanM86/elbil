import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconPlug } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Elbil lading — Komplett guide til lading i Norge',
  description: 'Alt om elbillading: hjemmelading, hurtiglading, ladekort, priser og tips. Lær hvordan du lader smart og billig.',
  alternates: { canonical: 'https://elbil.io/elbil-lading' },
}

export default function ElbilLading() {
  return (
    <PillarHub
      breadcrumbName="Lading"
      h1="Elbil lading"
      directAnswer="De fleste elbileiere lader hjemme med en dedikert ladeboks. Hjemmelading koster 1,5 til 3 kr per mil og dekker det daglige behovet. For langtur bruker du hurtiglading, som gir 200+ km rekkevidde på 20 til 30 minutter."
      updatedAt="20. mars 2026"
      icon={<IconPlug size={22} />}
      coreArticles={[
        { title: 'Hvordan lade elbil', href: '/hvordan-lade-elbil', desc: 'Komplett guide til alle lademetoder' },
        { title: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme', desc: 'Steg for steg: Installer lader hjemme' },
        { title: 'Hurtiglading', href: '/hurtiglading-elbil', desc: 'Slik fungerer hurtiglading' },
        { title: 'Ladepris', href: '/ladepris-elbil', desc: 'Hva koster det å lade elbil i 2026?' },
      ]}
      moreArticles={[
        { title: 'Ladekabel guide', href: '/artikler/ladekabel-elbil-guide' },
        { title: 'Type 2-lading forklart', href: '/artikler/type-2-lading' },
        { title: 'CCS hurtiglading', href: '/artikler/ccs-hurtiglading' },
        { title: 'Lade i borettslag', href: '/artikler/lade-elbil-i-borettslag' },
        { title: 'Lade på hytta', href: '/artikler/lade-elbil-pa-hytta' },
        { title: 'Beste hjemmelader 2026', href: '/artikler/beste-hjemmelader-elbil' },
        { title: 'Enova-støtte til lader', href: '/artikler/enova-stotte-elbillader' },
        { title: 'Ladeoperatører i Norge', href: '/artikler/ladeoperatorer-norge' },
        { title: 'Ladekort oversikt', href: '/artikler/ladekort-elbil' },
        { title: 'Smartlading', href: '/artikler/smartlading-elbil' },
        { title: 'Lading i kulde', href: '/artikler/lade-elbil-i-kulde' },
        { title: 'Solcellelading', href: '/artikler/solcelle-lading-elbil' },
        { title: 'Ladetid oversikt', href: '/artikler/ladetid-elbil' },
        { title: 'kWh forbruk ved lading', href: '/artikler/hvor-mange-kwh-lade-elbil' },
        { title: 'Lade elbil i Europa', href: '/artikler/lade-elbil-i-europa' },
        { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
      ]}
    />
  )
}
