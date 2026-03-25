import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = { title: 'Hvordan lade elbil — Komplett guide til alle lademetoder', slug: 'hvordan-lade-elbil', description: 'Lær alt om hvordan du lader elbil. Hjemmelading, hurtiglading, ladekort, kontakttyper og tips for effektiv lading i Norge.', publishedAt: '2026-01-03', updatedAt: '2026-03-22' }

export const metadata: Metadata = { title: meta.title, description: meta.description, alternates: { canonical: `https://elbil.io/${meta.slug}` } }

const faqs = [
  { question: 'Hvordan lader jeg elbil for første gang?', answer: 'Koble ladekabelen til bilen og laderen. Bilen begynner å lade automatisk. For hurtiglading trenger du ladebrikke eller betalingsapp. Hjemme bruker du den medfølgende ladekabelen eller en fast ladeboks.' },
  { question: 'Kan jeg lade elbil i regn?', answer: 'Ja, det er helt trygt. Alle elbiler og ladere er konstruert for å tåle regn, snø og andre værforhold. Kontaktene har innebygd sikkerhet mot vanninntrengning.' },
  { question: 'Trenger jeg ladebrikke eller app?', answer: 'For hjemmelading trenger du ingenting ekstra. For offentlig lading trenger du enten en ladebrikke, operatørens app, eller du kan betale med kontaktløst bankkort på mange nye ladere.' },
  { question: 'Skal jeg lade til 100 prosent?', answer: 'For daglig bruk er det best å lade til 80 til 90 prosent. Full lading til 100 prosent er greit for langtur, men daglig fulllading kan påvirke batteriets levetid over tid.' },
  { question: 'Hva er forskjellen på AC og DC lading?', answer: 'AC (vekselstrøm) brukes ved hjemmelading og normallading, opptil 22 kW. DC (likestrøm) brukes ved hurtiglading, opptil 350 kW. DC lading er mye raskere fordi strømmen går direkte til batteriet.' },
  { question: 'Kan jeg lade elbil med skjøteledning?', answer: 'Det anbefales ikke. Skjøteledninger kan overopphetes og utgjøre brannfare. Bruk alltid den medfølgende ladekabelen direkte i en godkjent stikkontakt, eller installer en dedikert ladeboks.' },
]

const toc = [
  { id: 'tre-metoder', text: 'Tre metoder for å lade elbil', level: 2 },
  { id: 'hjemmelading', text: 'Hjemmelading: Slik kommer du i gang', level: 2 },
  { id: 'offentlig-lading', text: 'Offentlig normallading', level: 2 },
  { id: 'hurtiglading', text: 'Hurtiglading: For langtur og hastverk', level: 2 },
  { id: 'kontakttyper', text: 'Kontakttyper og kabler', level: 2 },
  { id: 'ladetips', text: 'Tips for smart lading', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function HvordanLadeElbil() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs), generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Lading', slug: 'elbil-lading' }, { name: 'Hvordan lade', slug: meta.slug }]),
  ]
  return (<>
    {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
    <ArticleLayout h1="Hvordan lade elbil" metaTitle={meta.title}
      directAnswer="Du lader elbil på tre måter: hjemme med ladeboks (billigst, dekker 90% av behovet), offentlig normallading (parkering, jobb) eller hurtiglading (langtur). De fleste trenger kun hjemmelading og sporadisk hurtiglading."
      breadcrumbs={[{ name: 'Lading', href: '/elbil-lading' }]} toc={toc} faqs={faqs}
      relatedLinks={[
        { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
        { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil' },
        { title: 'Ladepris 2026', href: '/ladepris-elbil' },
        { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
      ]} updatedAt="22. mars 2026">

      <h2 id="tre-metoder">Tre metoder for å lade elbil</h2>
      <p>Elbillading kan virke komplisert i starten, men i praksis er det enklere enn å fylle bensin. Det finnes tre hovedmetoder, og de fleste bruker en kombinasjon:</p>
      <table>
        <thead><tr><th>Metode</th><th>Effekt</th><th>Typisk bruk</th><th>Kostnad per mil</th></tr></thead>
        <tbody>
          <tr><td>Hjemmelading</td><td>3,6 til 22 kW</td><td>Daglig lading over natten</td><td>1,5 til 3 kr</td></tr>
          <tr><td>Offentlig normallading</td><td>7 til 22 kW</td><td>Parkering, jobb, handel</td><td>4 til 7 kr</td></tr>
          <tr><td>Hurtiglading</td><td>50 til 350 kW</td><td>Langtur, hastverk</td><td>7 til 14 kr</td></tr>
        </tbody>
      </table>

      <h2 id="hjemmelading">Hjemmelading: Slik kommer du i gang</h2>
      <p>Over 90 prosent av all elbillading i Norge skjer hjemme. Det er billigst, enklest og mest praktisk. Du kobler bilen til laderen om kvelden og våkner med full bil om morgenen.</p>
      <p><strong>Steg 1: Velg ladeboks.</strong> En dedikert ladeboks (også kalt wallbox) gir 7,4 til 22 kW lading. De mest populære merkene i Norge er Easee, Zaptec og Garo. Pris: 5 000 til 15 000 kr for selve boksen.</p>
      <p><strong>Steg 2: Få elektriker til å installere.</strong> Ladeboksen må installeres av en autorisert elektriker. Installasjonskostnaden er typisk 8 000 til 20 000 kr avhengig av avstand til sikringsskap og om du trenger oppgradering.</p>
      <p><strong>Steg 3: Søk Enova-støtte.</strong> Enova gir inntil 7 500 kr i støtte til installasjon av ladeboks i bolig. Søknaden gjøres etter installasjon via enova.no.</p>
      <p><strong>Steg 4: Koble til og lad.</strong> Når ladeboksen er installert, kobler du bare kabelen til bilen. De fleste ladebokser har app der du kan sette ladetider, følge med på forbruk og styre smartlading.</p>

      <h2 id="offentlig-lading">Offentlig normallading</h2>
      <p>Offentlige normalladere finnes på kjøpesentre, parkeringsplasser, hoteller og arbeidsplasser. De gir 7 til 22 kW og er perfekte når bilen står parkert i noen timer.</p>
      <p>Mange kjøpesentre tilbyr gratis lading mens du handler. Arbeidsplasser har i økende grad ladeplasser for ansatte. Betaling skjer vanligvis via app eller ladebrikke.</p>

      <h2 id="hurtiglading">Hurtiglading: For langtur og hastverk</h2>
      <p>Hurtiglading leverer 50 til 350 kW og lar deg lade fra 10 til 80 prosent på 15 til 40 minutter. Det er den metoden som ligner mest på å fylle bensin, og den du bruker på langtur.</p>
      <p>Norge har over 6 000 hurtigladepunkter fordelt på rundt 1 200 stasjoner. De fleste ligger langs hovedveiene og ved handlesentre. Recharge, Circle K, Mer og Tesla er de største operatørene.</p>

      <h2 id="kontakttyper">Kontakttyper og kabler</h2>
      <table>
        <thead><tr><th>Kontakttype</th><th>Brukes til</th><th>Vanlig effekt</th></tr></thead>
        <tbody>
          <tr><td>Type 2</td><td>Hjemmelading og normallading (AC)</td><td>3,6 til 22 kW</td></tr>
          <tr><td>CCS (Combo 2)</td><td>Hurtiglading (DC)</td><td>50 til 350 kW</td></tr>
          <tr><td>CHAdeMO</td><td>Hurtiglading (DC), eldre biler</td><td>50 til 100 kW</td></tr>
          <tr><td>Schuko (vanlig stikk)</td><td>Nødlading i stikkontakt</td><td>2,3 kW</td></tr>
        </tbody>
      </table>
      <p>Alle nye elbiler i Norge har Type 2-kontakt for normallading og CCS for hurtiglading. Du trenger ikke tenke på dette med mindre du har en eldre Nissan Leaf (som bruker CHAdeMO).</p>

      <h2 id="ladetips">Tips for smart lading</h2>
      <p><strong>Lad til 80 prosent daglig:</strong> For batteri-helse og effektivitet er det best å holde ladenivået mellom 20 og 80 prosent til daglig. Lad til 100 prosent kun før langtur.</p>
      <p><strong>Bruk smartlading:</strong> Sett opp lading til de billigste timene, typisk mellom kl. 22 og 06. De fleste ladebokser og elbiler har innebygd tidsstyring.</p>
      <p><strong>Forvarm batteriet før hurtiglading:</strong> Om vinteren gir batteriforvarming mye raskere hurtiglading. Sett hurtigladeren som destinasjon i navigasjonen, så varmer bilen opp batteriet automatisk.</p>
      <p><strong>Ha en plan for langtur:</strong> Bruk A Better Route Planner (ABRP) eller bilens innebygde navigasjon for å planlegge ladestoppene. Ikke kjør til batteriet er tomt før du lader.</p>
      <p><strong>Sjekk tilgjengelighet:</strong> Bruk operatørenes apper eller elbil.no for å se om det er ledige ladere langs ruten din, spesielt i høytider og helger.</p>
    </ArticleLayout>
  </>)
}
