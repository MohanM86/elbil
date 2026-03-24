import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconRuler } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Elbil rekkevidde — Alt du bør vite (2026)',
  description: 'Hvor langt kjører en elbil? Oversikt over rekkevidde, faktorer som påvirker, vintertall og tips for å kjøre lengre.',
  alternates: { canonical: 'https://elbil.io/elbil-rekkevidde' },
}

export default function ElbilRekkevidde() {
  return (
    <PillarHub
      breadcrumbName="Rekkevidde"
      h1="Elbil rekkevidde"
      directAnswer="Nye elbiler i 2026 har typisk 350 til 600 km WLTP-rekkevidde. Reell rekkevidde er 80 til 95 % av WLTP om sommeren og 60 til 80 % om vinteren. De viktigste faktorene er temperatur, hastighet og bruk av klimaanlegg."
      updatedAt="20. mars 2026"
      icon={<IconRuler size={22} />}
      coreArticles={[
        { title: 'Batteri elbil: Alt om teknologien', href: '/batteri-elbil', desc: 'Batterityper, kapasitet og fremtid' },
        { title: 'Hvor lenge varer en elbil?', href: '/hvor-lenge-varer-elbil', desc: 'Levetid, degradering og garanti' },
        { title: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde', desc: 'Beregn reell rekkevidde for din bil' },
      ]}
      moreArticles={[
        { title: 'Rekkevidde om vinteren', href: '/artikler/elbil-rekkevidde-vinter' },
        { title: 'Rekkevidde på motorvei', href: '/artikler/elbil-rekkevidde-motorvei' },
        { title: 'WLTP vs reell rekkevidde', href: '/artikler/wltp-vs-reell-rekkevidde' },
        { title: 'Batteriforringelse: Hva er normalt?', href: '/artikler/elbil-batteri-degradering' },
        { title: 'Batterigaranti oversikt', href: '/artikler/elbil-batteri-garanti' },
        { title: 'Energiforbruk: kWh per mil', href: '/artikler/elbil-energiforbruk-kwh-mil' },
        { title: 'Rekkeviddeangst: Slik takler du det', href: '/artikler/elbil-rekkeviddeangst' },
        { title: 'Prekondisjonering: Spar batteri', href: '/artikler/elbil-pre-conditioning' },
        { title: 'Aerodynamikk og elbil', href: '/artikler/elbil-aerodynamikk' },
        { title: 'Elbiler med lengst rekkevidde', href: '/artikler/beste-elbil-lang-rekkevidde' },
      ]}
    />
  )
}
