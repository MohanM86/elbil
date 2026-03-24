import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconTrophy } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Beste elbil 2026 — Topp modeller rangert',
  description: 'De beste elbilene i Norge i 2026. Rangert etter rekkevidde, pris, lading, plass og kjøreopplevelse.',
  alternates: { canonical: 'https://elbil.io/beste-elbil-2026' },
}

export default function BesteElbil2026() {
  return (
    <PillarHub
      breadcrumbName="Beste elbil 2026"
      h1="Beste elbil 2026"
      directAnswer="I 2026 er Tesla Model Y fortsatt bestselgeren i Norge, men møter sterk konkurranse fra Volkswagen ID.4, Volvo EX30, Hyundai IONIQ 5 og nykommere som Kia EV3. Valget avhenger av budsjett, familiebehov og kjøremønster."
      updatedAt="20. mars 2026"
      icon={<IconTrophy size={22} />}
      coreArticles={[
        { title: 'Hvilken elbil skal jeg velge?', href: '/hvilken-elbil-skal-jeg-velge', desc: 'Komplett valgguide for alle behov' },
        { title: 'Beste elbil for familier', href: '/elbil-familiebil', desc: 'Topp familiebiler rangert' },
      ]}
      moreArticles={[
        { title: 'Tesla Model Y: Test og vurdering', href: '/artikler/tesla-model-y-test' },
        { title: 'Volkswagen ID.4: Test', href: '/artikler/volkswagen-id4-test' },
        { title: 'Volvo EX30: Test', href: '/artikler/volvo-ex30-test' },
        { title: 'Hyundai IONIQ 5: Test', href: '/artikler/hyundai-ioniq5-test' },
        { title: 'Skoda Enyaq: Test', href: '/artikler/skoda-enyaq-test' },
        { title: 'Kia EV6: Test', href: '/artikler/kia-ev6-test' },
        { title: 'BYD Atto 3: Test', href: '/artikler/byd-atto3-test' },
        { title: 'Polestar 2: Test', href: '/artikler/polestar-2-test' },
        { title: 'Audi Q4 e-tron: Test', href: '/artikler/audi-q4-etron-test' },
        { title: 'Billigste elbil i Norge', href: '/artikler/billigste-elbil-norge' },
      ]}
    />
  )
}
