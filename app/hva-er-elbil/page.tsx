import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconBolt } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hva er en elbil? Enkel forklaring og fakta',
  description: 'Lær hva en elbil er, hvordan den fungerer, og hvorfor stadig flere nordmenn velger elektrisk. Enkel og oversiktlig guide.',
  alternates: { canonical: 'https://elbil.io/hva-er-elbil' },
}

export default function HvaErElbil() {
  return (
    <PillarHub
      breadcrumbName="Hva er elbil"
      h1="Hva er en elbil?"
      directAnswer="En elbil er en bil som drives av en elektrisk motor og får energi fra et oppladbart batteri. I motsetning til fossilbiler har elbiler ingen forbrenningsmotor, intet eksosanlegg og vesentlig færre bevegelige deler. Norge er verdens ledende elbilnasjon med over 80 % elektrisk nybilsalg."
      updatedAt="20. mars 2026"
      icon={<IconBolt size={22} />}
      coreArticles={[
        { title: 'Beste elbil 2026', href: '/beste-elbil', desc: 'Oversikt over de beste modellene' },
        { title: 'Elbil kostnader', href: '/elbil-kostnader', desc: 'Hva koster det å eie elbil?' },
        { title: 'Elbil lading', href: '/elbil-lading', desc: 'Slik lader du elbilen din' },
        { title: 'Elbil rekkevidde', href: '/elbil-rekkevidde', desc: 'Hvor langt kjører en elbil?' },
      ]}
      moreArticles={[
        { title: 'Elbilmotor: Slik fungerer den', href: '/artikler/elbil-motor-forklart' },
        { title: 'Regenerativ bremsing forklart', href: '/artikler/elbil-regenerering' },
        { title: 'Batteriteknologi: LFP, NMC og fremtiden', href: '/artikler/elbil-batteriteknologi' },
        { title: 'Elbil og miljø: Hvor miljøvennlig er det?', href: '/artikler/elbil-miljo-fordeler' },
        { title: 'Elbil statistikk og trender', href: '/artikler/elbil-norge-statistikk' },
        { title: 'Elbil ordbok: Alle begreper forklart', href: '/artikler/elbil-ordbok' },
      ]}
    />
  )
}
