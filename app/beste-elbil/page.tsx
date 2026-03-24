import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconTrophy } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Beste elbil i 2026 — Oversikt og sammenligning',
  description: 'Vi sammenligner de beste elbilene i Norge. Rekkevidde, pris, plass og utstyr. Finn elbilen som passer deg.',
  alternates: { canonical: 'https://elbil.io/beste-elbil' },
}

export default function BesteElbil() {
  return (
    <PillarHub
      breadcrumbName="Beste elbil"
      h1="Beste elbil"
      directAnswer="De beste elbilene i Norge i 2026 kombinerer lang rekkevidde, rask lading og god plass til en konkurransedyktig pris. Tesla Model Y, Volkswagen ID.4, Volvo EX30 og Hyundai IONIQ 5 er blant de mest populære. Valget avhenger av dine behov: familieplass, rekkevidde, pris eller kjøreegenskaper."
      updatedAt="20. mars 2026"
      icon={<IconTrophy size={22} />}
      coreArticles={[
        { title: 'Beste elbil 2026', href: '/beste-elbil-2026', desc: 'Årets toppmodeller rangert' },
        { title: 'Hvilken elbil skal jeg velge?', href: '/hvilken-elbil-skal-jeg-velge', desc: 'Komplett valgguide' },
        { title: 'Beste elbil for familier', href: '/elbil-familiebil', desc: 'Topp 10 familiebiler' },
      ]}
      moreArticles={[
        { title: 'Beste elbil SUV', href: '/artikler/beste-elbil-suv' },
        { title: 'Beste liten elbil', href: '/artikler/beste-liten-elbil' },
        { title: 'Elbiler med lengst rekkevidde', href: '/artikler/beste-elbil-lang-rekkevidde' },
        { title: 'Elbil for pendlere', href: '/artikler/elbil-for-pendlere' },
        { title: 'Elbil for langtur', href: '/artikler/elbil-for-langtur' },
        { title: 'Elbil for norsk vinter', href: '/artikler/elbil-for-vinter' },
        { title: 'Elbiler under 300 000 kr', href: '/artikler/elbil-under-300000' },
        { title: 'Elbiler under 400 000 kr', href: '/artikler/elbil-under-400000' },
        { title: 'Elbil med 7 seter', href: '/artikler/elbil-7-seter' },
        { title: 'Elbil med firehjulstrekk', href: '/artikler/elbil-firehjulstrekk' },
        { title: 'Kinesiske elbiler i Norge', href: '/artikler/elbil-kinesiske-merker' },
      ]}
    />
  )
}
