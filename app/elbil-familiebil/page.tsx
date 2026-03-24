import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconUsers } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Beste elbil for familier — Topp 10 valg (2026)',
  description: 'Beste elbiler for familier i Norge. Plass, sikkerhet, bagasjerom, barneseter og rekkevidde. Topp 10 modeller sammenlignet.',
  alternates: { canonical: 'https://elbil.io/elbil-familiebil' },
}

export default function ElbilFamiliebil() {
  return (
    <PillarHub
      breadcrumbName="Familiebil"
      h1="Beste elbil for familier"
      directAnswer="De beste familieelbilene i 2026 kombinerer godt bakseteplass, stort bagasjerom, høy sikkerhetsscore og lang rekkevidde. Skoda Enyaq, Volkswagen ID.4, Tesla Model Y og Hyundai IONIQ 5 er blant toppvalgene for norske familier."
      updatedAt="20. mars 2026"
      icon={<IconUsers size={22} />}
      coreArticles={[
        { title: 'Beste elbil 2026', href: '/beste-elbil-2026', desc: 'Komplett rangering alle modeller' },
        { title: 'Hvilken elbil skal jeg velge?', href: '/hvilken-elbil-skal-jeg-velge', desc: 'Valgguide for alle behov' },
      ]}
      moreArticles={[
        { title: 'Elbil med 7 seter', href: '/artikler/elbil-7-seter' },
        { title: 'Elbil stasjonsvogn', href: '/artikler/elbil-stasjonsvogn' },
        { title: 'Elbil med størst bagasjeplass', href: '/artikler/elbil-bagasjeplass' },
        { title: 'Elbil med barneseter: Plassoversikt', href: '/artikler/elbil-barnesete-plass' },
        { title: 'Elbil med høy tilhengervekt', href: '/artikler/elbil-tilhengervekt' },
        { title: 'Elbil for hytteturer', href: '/artikler/elbil-for-hytte' },
        { title: 'Elbil sikkerhet: NCAP-resultater', href: '/artikler/elbil-sikkerhet-ncap' },
      ]}
    />
  )
}
