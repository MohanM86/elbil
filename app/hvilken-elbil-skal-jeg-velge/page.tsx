import type { Metadata } from 'next'
import PillarHub from '@/components/PillarHub'
import { IconCompass } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Hvilken elbil skal jeg velge? Komplett valgguide',
  description: 'Hjelp til å finne elbilen som passer deg. Vi guider deg gjennom rekkevidde, pris, plass, lading og kjøreopplevelse.',
  alternates: { canonical: 'https://elbil.io/hvilken-elbil-skal-jeg-velge' },
}

export default function HvilkenElbil() {
  return (
    <PillarHub
      breadcrumbName="Hvilken elbil"
      h1="Hvilken elbil skal jeg velge?"
      directAnswer="Valg av elbil avhenger av fire ting: budsjett, kjørebehov, familiestørrelse og lademuligheter. For de fleste norske familier er en mellomstor SUV med 400+ km rekkevidde og hjemmelader det beste valget. Start med budsjettet ditt, vurder daglig kjørelengde, og test minst 2 til 3 modeller."
      updatedAt="20. mars 2026"
      icon={<IconCompass size={22} />}
      coreArticles={[
        { title: 'Beste elbil 2026', href: '/beste-elbil-2026', desc: 'Topp modeller rangert' },
        { title: 'Beste elbil for familier', href: '/elbil-familiebil', desc: 'Plass, sikkerhet og pris' },
        { title: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde', desc: 'Finn reell rekkevidde for din bruk' },
        { title: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator', desc: 'Regn ut hva du sparer' },
      ]}
      moreArticles={[
        { title: 'Elbil for pendlere', href: '/artikler/elbil-for-pendlere' },
        { title: 'Elbil for langtur og ferie', href: '/artikler/elbil-for-langtur' },
        { title: 'Elbil for norsk vinter', href: '/artikler/elbil-for-vinter' },
        { title: 'Elbiler under 300 000 kr', href: '/artikler/elbil-under-300000' },
        { title: 'Elbiler under 500 000 kr', href: '/artikler/elbil-under-500000' },
        { title: 'Ny vs brukt elbil', href: '/artikler/elbil-nybil-vs-bruktbil' },
        { title: 'Sjekkliste for elbilkjøp', href: '/artikler/elbil-kjop-sjekkliste' },
        { title: 'Leasing vs kjøp', href: '/artikler/elbil-leasing-vs-kjop' },
      ]}
    />
  )
}
