import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Om elbil.io — Uavhengig elbilguide for Norge',
  description: 'elbil.io er Norges uavhengige elbilguide. Lær om redaksjonen, metodikken vår og hvorfor vi lager innhold om elbil.',
  alternates: { canonical: 'https://elbil.io/om-oss' },
}

export default function OmOss() {
  return (
    <article className="max-w-article mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <nav aria-label="Brødsmuler" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-surface-400">
          <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
          <li className="flex items-center gap-1.5"><span>/</span><span>Om oss</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">
        Om elbil.io
      </h1>

      <div className="direct-answer">
        <p className="font-medium">
          elbil.io er en uavhengig informasjonsplattform om elbil i Norge. Vi selger ingenting, har ingen affiliatelenker og tar ikke betalt for omtale. Vårt eneste mål er å gi deg pålitelig, oppdatert og forståelig informasjon.
        </p>
      </div>

      <div className="article-content">
        <h2 id="vart-oppdrag">Vårt oppdrag</h2>
        <p>
          Norge leder verden i elbilovergang. Likevel er det overraskende vanskelig å finne samlet, uavhengig og oppdatert informasjon om elbil på norsk. Informasjonen er spredt mellom bilprodusenter, ladeoperatører, interesseorganisasjoner og nyhetsmedier — alle med sine egne agendaer.
        </p>
        <p>
          elbil.io ble startet for å løse dette. Vi samler og systematiserer kunnskap om elbil, lading, kostnader, rekkevidde og teknologi — skrevet for norske forhold, med norske priser, norske regler og norsk klima som utgangspunkt.
        </p>

        <h2 id="redaksjonelle-prinsipper">Redaksjonelle prinsipper</h2>
        <p>
          Alt innhold på elbil.io følger disse prinsippene:
        </p>
        <ul>
          <li><strong>Uavhengighet.</strong> Vi mottar ingen betaling fra bilprodusenter, ladeoperatører eller andre aktører for omtale. Ingen artikler er sponset.</li>
          <li><strong>Faktagrunnlag.</strong> Alle tall og påstander er basert på verifiserbare kilder. Vi oppgir alltid hvor informasjonen kommer fra.</li>
          <li><strong>Oppdatering.</strong> Artiklene våre merkes med dato for siste oppdatering. Vi gjennomgår og oppdaterer innholdet jevnlig, spesielt ved regelendringer og prisendringer.</li>
          <li><strong>Klarhet.</strong> Vi skriver for alle — ikke bare bilentusiaster. Tekniske begreper forklares, og vi prioriterer forståelighet fremfor fagsjargong.</li>
          <li><strong>Norsk perspektiv.</strong> Alt vi skriver tar utgangspunkt i norske forhold: norske strømpriser, norske avgiftsregler, norsk klima og norsk ladeinfrastruktur.</li>
        </ul>

        <h2 id="vare-kilder">Våre kilder</h2>
        <p>
          Vi baserer innholdet vårt på offentlig tilgjengelige data og anerkjente kilder:
        </p>
        <ul>
          <li><strong>Opplysningsrådet for veitrafikken (OFV)</strong> — registreringsstatistikk og markedsdata</li>
          <li><strong>Statistisk sentralbyrå (SSB)</strong> — strømpriser, forbruksdata og befolkningsstatistikk</li>
          <li><strong>Direktoratet for samfunnssikkerhet og beredskap (DSB)</strong> — sikkerhetskrav og forskrifter</li>
          <li><strong>Enova</strong> — støtteordninger for ladeinfrastruktur</li>
          <li><strong>NOBIL</strong> — ladeinfrastrukturdata for Norge</li>
          <li><strong>Norsk elbilforening</strong> — medlemsundersøkelser og statistikk</li>
          <li><strong>NAF / Motor</strong> — testresultater og El Prix-data</li>
          <li><strong>Produsentenes offisielle spesifikasjoner</strong> — tekniske data og WLTP-rekkevidde</li>
          <li><strong>EUR-Lex og Lovdata</strong> — EU-regulering og norsk lovgivning</li>
        </ul>

        <h2 id="redaksjonen">Redaksjonen</h2>
        <p>
          elbil.io drives av IT-Firma.no, en norsk organisasjon som utvikler digitale kunnskapsplattformer. Redaksjonen består av skribenter med bakgrunn innen teknologi, forbrukerøkonomi og den norske elbilbransjen.
        </p>
        <p>
          Alle artikler gjennomgår en kvalitetskontroll som inkluderer faktasjekk mot primærkilder, verifisering av tall og priser, og gjennomlesing for språk og klarhet.
        </p>

        <h2 id="forretningsmodell">Forretningsmodell</h2>
        <p>
          elbil.io drives som en ren informasjonsplattform. Vi har per i dag ingen annonseinntekter, affiliatelenker eller betalte samarbeid. Nettsiden eksisterer for å bygge Norges mest komplette elbilressurs.
        </p>

        <h2 id="kontakt">Kontakt</h2>
        <p>
          Har du spørsmål, rettelser eller tilbakemeldinger? Vi setter pris på å høre fra deg.
        </p>
        <ul>
          <li>E-post: redaksjon@elbil.io</li>
          <li>Organisasjon: IT-Firma.no</li>
        </ul>
        <p>
          Les mer om <Link href="/slik-jobber-vi" className="text-primary-700 underline">hvordan vi jobber med innhold</Link>.
        </p>
      </div>
    </article>
  )
}
