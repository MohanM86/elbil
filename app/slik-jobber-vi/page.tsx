import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Slik jobber vi — Redaksjonell metodikk',
  description: 'Lær hvordan elbil.io produserer innhold. Vår metodikk for faktasjekk, kilder, oppdatering og kvalitetskontroll.',
  alternates: { canonical: 'https://elbil.io/slik-jobber-vi' },
}

export default function SlikJobberVi() {
  return (
    <article className="max-w-article mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <nav aria-label="Brødsmuler" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-surface-400">
          <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
          <li className="flex items-center gap-1.5"><span>/</span><span>Slik jobber vi</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">
        Slik jobber vi
      </h1>

      <div className="direct-answer">
        <p className="font-medium">
          Hver artikkel på elbil.io følger en fast prosess: research med primærkilder, faktasjekk, ekspertgjennomgang og regelmessig oppdatering. Vi prioriterer nøyaktighet og norsk relevans i alt vi publiserer.
        </p>
      </div>

      <div className="article-content">
        <h2 id="innholdsprosessen">Innholdsprosessen</h2>
        <p>
          Alle artikler på elbil.io følger en standardisert produksjonsprosess med fire steg:
        </p>

        <h3>1. Research og kildearbeid</h3>
        <p>
          Før vi skriver en artikkel, kartlegger vi de beste tilgjengelige kildene. Vi prioriterer primærkilder — det vil si originale datasett, offisielle forskrifter og produsentspesifikasjoner — fremfor sekundærkilder som nyhetsartikler eller blogginnlegg. For norske tall bruker vi SSB, OFV og Enova som hovedkilder. For tekniske spesifikasjoner bruker vi produsentenes offisielle data og NAFs testresultater.
        </p>

        <h3>2. Skriving med kildehenvisning</h3>
        <p>
          Artiklene skrives med tydelig kildehenvisning. Alle konkrete tall, priser og påstander følges av en kilde. Vi oppgir kilder fortløpende i teksten og samler de viktigste i en kildeliste nederst i artikkelen. Tall som endrer seg over tid (priser, avgifter, markedsandeler) merkes med dato.
        </p>

        <h3>3. Faktasjekk og kvalitetskontroll</h3>
        <p>
          Før publisering gjennomgår artikkelen en sjekkliste:
        </p>
        <ul>
          <li>Er alle tall verifisert mot primærkilde?</li>
          <li>Er priser og avgifter oppdatert for gjeldende år?</li>
          <li>Er regelhenvisninger korrekte og gjeldende?</li>
          <li>Er tekniske spesifikasjoner hentet fra produsent eller offisiell test?</li>
          <li>Er språket klart og forståelig for ikke-eksperter?</li>
          <li>Har artikkelen tilstrekkelig intern lenking til relatert innhold?</li>
        </ul>

        <h3>4. Oppdatering og vedlikehold</h3>
        <p>
          Elbilmarkedet endrer seg raskt. Priser justeres, regler endres og nye modeller lanseres. Vi har derfor en fast rutine for oppdatering:
        </p>
        <ul>
          <li><strong>Prisartikler:</strong> Gjennomgås kvartalsvis og ved kjente prisendringer</li>
          <li><strong>Regelverksartikler:</strong> Oppdateres ved lovendringer og budsjettvedtak</li>
          <li><strong>Modelltester:</strong> Oppdateres ved facelift eller nye programvareversjoner</li>
          <li><strong>Generelle guider:</strong> Gjennomgås halvårlig</li>
        </ul>
        <p>
          Alle artikler viser dato for siste oppdatering øverst.
        </p>

        <h2 id="kildehierarki">Kildehierarki</h2>
        <p>
          Vi bruker følgende kildehierarki, sortert etter pålitelighet:
        </p>
        <ul>
          <li><strong>Nivå 1 (primærkilder):</strong> Lovdata, EUR-Lex, SSB, OFV-registreringsdata, produsentspesifikasjoner, Enova</li>
          <li><strong>Nivå 2 (testskilder):</strong> NAF El Prix, Motor.no tester, Euro NCAP, ADAC</li>
          <li><strong>Nivå 3 (bransjekilder):</strong> Norsk elbilforening, NOBIL, IEA, Bloomberg NEF</li>
          <li><strong>Nivå 4 (sekundærkilder):</strong> Nyhetsmedier, bransjemedier — brukes kun som supplement</li>
        </ul>

        <h2 id="korrigeringspolicy">Korrigeringspolicy</h2>
        <p>
          Finner du en feil i vårt innhold? Vi ønsker å vite om det. Send en e-post til redaksjon@elbil.io med referanse til artikkelen og den konkrete feilen. Vi korrigerer feil så raskt som mulig og merker vesentlige korreksjoner i artikkelen.
        </p>

        <h2 id="ai-og-innhold">Om bruk av AI i innholdsproduksjon</h2>
        <p>
          Vi bruker AI-verktøy som hjelpemiddel i research og utkast, men alt innhold gjennomgås, faktasjekkes og redigeres av mennesker. AI brukes aldri som eneste kilde for fakta eller tall. Alle verifiserbare påstander sjekkes mot primærkilder uavhengig av om et AI-verktøy var involvert i utkastet.
        </p>

        <p>
          Les mer <Link href="/om-oss" className="text-primary-700 underline">om elbil.io og redaksjonen</Link>.
        </p>
      </div>
    </article>
  )
}
