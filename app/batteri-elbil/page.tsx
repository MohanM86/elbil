import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconBattery } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Elbil batteri — Teknologi, levetid og fakta',
  description: 'Alt om elbilbatterier. Batterityper (LFP, NMC), kapasitet, levetid, degradering, garanti og resirkulering forklart.',
  alternates: { canonical: 'https://elbil.io/batteri-elbil' },
}

export default function BatteriElbil() {
  return (
    <PillarHub
      breadcrumbName="Batteri"
      h1="Elbil batteri"
      directAnswer="Elbilbatterier er litium-ion-batterier med kapasitet fra 40 til 100+ kWh. De to vanligste typene er NMC (høy energitetthet) og LFP (lang levetid, billigere). Batteriet varer typisk 15 til 20 år, har 8 års garanti, og beholder over 80 % kapasitet etter 10 år."
      updatedAt="20. mars 2026"
      icon={<IconBattery size={22} />}
      coreArticles={[
        { title: 'Hvor lenge varer en elbil?', href: '/hvor-lenge-varer-elbil', desc: 'Levetid, degradering og garanti' },
        { title: 'Elbil rekkevidde', href: '/elbil-rekkevidde', desc: 'Alt om rekkevidde og faktorer' },
      ]}
      moreArticles={[
        { title: 'Batteriteknologi: LFP, NMC og fremtiden', href: '/artikler/elbil-batteriteknologi' },
        { title: 'Batterikapasitet (kWh) forklart', href: '/artikler/elbil-batterikapasitet-kwh' },
        { title: 'Batteriforringelse: Hva er normalt?', href: '/artikler/elbil-batteri-degradering' },
        { title: 'Batterigaranti: Alle merker', href: '/artikler/elbil-batteri-garanti' },
        { title: 'Batteribytte: Kostnad', href: '/artikler/elbil-batteribytte-kostnad' },
        { title: 'Batterikjøling: Hvorfor viktig', href: '/artikler/elbil-kjolingsystem' },
        { title: 'Solid state-batteri: Fremtiden', href: '/artikler/solid-state-batteri' },
        { title: 'Natrium-ion-batteri', href: '/artikler/natrium-ion-batteri-elbil' },
        { title: 'Batteriresirkulering', href: '/artikler/elbil-batteriresirkulering' },
        { title: 'Prekondisjonering: Spar batteri', href: '/artikler/elbil-pre-conditioning' },
      ]}
    />
  )
}
