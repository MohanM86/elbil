import type { Metadata } from 'next'
import Link from 'next/link'
import PillarHub from '@/components/PillarHub'
import { IconBolt } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Elbil i Norge — Alt du trenger å vite (2026)',
  description: 'Komplett guide til elbil i Norge. Lading, kostnader, rekkevidde, beste modeller og tips. Oppdatert for 2026.',
  alternates: { canonical: 'https://elbil.io/elbil' },
}

export default function ElbilPage() {
  return (
    <PillarHub
      breadcrumbName="Elbil"
      h1="Elbil i Norge"
      directAnswer="Norge er verdensledende på elbil. Over 80 % av nye biler som selges er elektriske. Elbil er billigere i drift, enklere å vedlikeholde og gir lavere utslipp. Her finner du alt du trenger å vite."
      updatedAt="20. mars 2026"
      icon={<IconBolt size={22} />}
      coreArticles={[
        { title: 'Hva er en elbil?', href: '/hva-er-elbil', desc: 'Enkel forklaring på hvordan elbiler fungerer' },
        { title: 'Beste elbil 2026', href: '/beste-elbil', desc: 'Sammenligning av toppmodeller i Norge' },
        { title: 'Elbil lading', href: '/elbil-lading', desc: 'Komplett guide til lading hjemme og ute' },
        { title: 'Elbil kostnader', href: '/elbil-kostnader', desc: 'Hva koster det å eie og kjøre elbil?' },
        { title: 'Elbil rekkevidde', href: '/elbil-rekkevidde', desc: 'Reell rekkevidde i norske forhold' },
        { title: 'Hvilken elbil?', href: '/hvilken-elbil-skal-jeg-velge', desc: 'Hjelp til å velge riktig elbil' },
      ]}
      moreArticles={[
        { title: 'Elbil om vinteren: 15 tips', href: '/artikler/elbil-vinter-tips' },
        { title: 'Elbil i Oslo', href: '/artikler/elbil-oslo' },
        { title: 'Elbil FAQ: 50 spørsmål besvart', href: '/artikler/elbil-faq' },
        { title: 'Elbil statistikk Norge', href: '/artikler/elbil-norge-statistikk' },
        { title: 'Elbil myter: Hva stemmer?', href: '/artikler/elbil-myter' },
        { title: 'Første elbil? Alt du trenger å vite', href: '/artikler/elbil-forste-gang' },
        { title: 'Elbil ordbok', href: '/artikler/elbil-ordbok' },
      ]}
    />
  )
}
