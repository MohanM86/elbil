import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconPlug } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hvordan lade elbil — Komplett guide',
  description: 'Alt om elbillading. Hjemmelading, hurtiglading, offentlig lading, ladekort og tips. Slik lader du elbilen din.',
  alternates: { canonical: 'https://elbil.io/hvordan-lade-elbil' },
}

export default function HvordanLadeElbil() {
  return (
    <PillarHub
      breadcrumbName="Hvordan lade elbil"
      h1="Hvordan lade elbil"
      directAnswer="Du lader elbil på tre måter: hjemme med ladeboks (billigst og mest praktisk), på offentlige normalladere med Type 2-kabel, eller på hurtigladere langs veien. De fleste elbileiere dekker 80 til 90 % av ladebehovet hjemme."
      updatedAt="20. mars 2026"
      icon={<IconPlug size={22} />}
      coreArticles={[
        { title: 'Hjemmelading steg for steg', href: '/hvordan-lade-elbil-hjemme', desc: 'Komplett guide til lading hjemme' },
        { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil', desc: 'Slik fungerer hurtiglading' },
        { title: 'Ladepris 2026', href: '/ladepris-elbil', desc: 'Hva koster det å lade?' },
        { title: 'Elbil lading — Hovedside', href: '/elbil-lading', desc: 'Alle ladingsartikler samlet' },
      ]}
      moreArticles={[
        { title: 'Ladekabel guide', href: '/artikler/ladekabel-elbil-guide' },
        { title: 'Type 2-lading forklart', href: '/artikler/type-2-lading' },
        { title: 'DC-lading vs AC-lading', href: '/artikler/dc-lading-vs-ac-lading' },
        { title: 'Stikkontaktlading: Er det trygt?', href: '/artikler/stikkontakt-lading-elbil' },
        { title: 'Lade elbil i borettslag', href: '/artikler/lade-elbil-i-borettslag' },
        { title: 'Ladeeffekt (kW) forklart', href: '/artikler/ladeeffekt-kw-forklart' },
      ]}
    />
  )
}
