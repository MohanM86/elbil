import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema, generateHowToSchema } from '@/lib/schema'

const meta = {
  title: 'Hvordan lade elbil hjemme — Steg for steg',
  slug: 'hvordan-lade-elbil-hjemme',
  description: 'Komplett guide til hjemmelading av elbil. Lær om utstyr, installasjon, kostnader og sikkerhet. Alt du trenger for å lade trygt og effektivt hjemme.',
  publishedAt: '2026-01-15',
  updatedAt: '2026-03-20',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const faqs = [
  {
    question: 'Kan jeg lade elbil i vanlig stikkontakt?',
    answer: 'Ja, men det er langsomt og anbefales kun som nødløsning. En vanlig stikkontakt gir rundt 2,3 kW, noe som betyr at en full lading kan ta over 24 timer. For daglig bruk bør du installere en dedikert ladeboks.',
  },
  {
    question: 'Hva koster det å installere ladeboks hjemme?',
    answer: 'En komplett installasjon med ladeboks koster vanligvis mellom 15 000 og 35 000 kroner. Selve ladeboksen koster 5 000 til 15 000 kroner, og elektriker-arbeidet utgjør resten. Enova gir inntil 7 500 kr i støtte.',
  },
  {
    question: 'Trenger jeg trefase for å lade elbil hjemme?',
    answer: 'Nei, men trefase gir raskere lading. Med enfase lader du på opptil 7,4 kW (32A), mens trefase gir opptil 22 kW (32A). De fleste elbiler har ombordlader på 11 kW, som krever trefase for å utnyttes fullt.',
  },
  {
    question: 'Hvor lang tid tar det å lade elbil hjemme?',
    answer: 'Med en 7,4 kW ladeboks tar det typisk 8 til 10 timer å lade fra 20 % til 80 % på et 60 kWh-batteri. Med 11 kW trefase tar det 4 til 6 timer for samme lading.',
  },
  {
    question: 'Er det trygt å lade elbil hjemme om natten?',
    answer: 'Ja, det er helt trygt. Moderne ladebokser har innebygd feilstrømsbryter, temperaturovervåking og overbelastningsvern. Nattlading er faktisk smart fordi strømprisene ofte er lavere.',
  },
  {
    question: 'Kan jeg lade elbil hjemme uten ladeboks?',
    answer: 'Du kan bruke en mobil lader (ICCB) i en vanlig stikkontakt, men ladehastigheten er svært lav og det anbefales ikke som fast løsning. En dedikert ladeboks er tryggere og mye raskere.',
  },
  {
    question: 'Hva er smartlading?',
    answer: 'Smartlading betyr at ladeboksen styrer ladingen automatisk, for eksempel ved å lade når strømprisene er lavest, eller ved å fordele kapasiteten mellom flere biler. Mange ladebokser støtter dette via en app.',
  },
  {
    question: 'Må jeg ha godkjenning for å installere ladeboks?',
    answer: 'Installasjonen må utføres av en autorisert elektriker som melder inn arbeidet til nettselskapet. I borettslag og sameier trenger du vanligvis styregodkjenning, men du har lovfestet rett til å etablere ladepunkt.',
  },
]

const toc = [
  { id: 'kort-svar', text: 'Kort svar', level: 2 },
  { id: 'utstyr-du-trenger', text: 'Utstyr du trenger', level: 2 },
  { id: 'ladeboks-vs-stikkontakt', text: 'Ladeboks vs stikkontakt', level: 2 },
  { id: 'slik-installerer-du', text: 'Slik installerer du ladeboks', level: 2 },
  { id: 'kostnader-og-stotte', text: 'Kostnader og Enova-støtte', level: 2 },
  { id: 'ladetid-hjemme', text: 'Ladetid hjemme', level: 2 },
  { id: 'smartlading-spar-penger', text: 'Smartlading: Spar penger', level: 2 },
  { id: 'borettslag-og-sameie', text: 'Lading i borettslag og sameie', level: 2 },
  { id: 'sikkerhet', text: 'Sikkerhet ved hjemmelading', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

const relatedLinks = [
  { title: 'Elbil lading — Komplett guide', href: '/elbil-lading' },
  { title: 'Ladepris elbil 2026', href: '/ladepris-elbil' },
  { title: 'Beste hjemmelader til elbil', href: '/artikler/beste-hjemmelader-elbil' },
  { title: 'Installere lader: Krav og kostnader', href: '/artikler/installere-lader-elbil' },
  { title: 'Smartlading: Spar penger', href: '/artikler/smartlading-elbil' },
  { title: 'Lade elbil i borettslag', href: '/artikler/lade-elbil-i-borettslag' },
]

export default function HvordanLadeElbilHjemme() {
  const breadcrumbs = [
    { name: 'Lading', href: '/elbil-lading' },
    { name: 'Hjemmelading', href: '/hvordan-lade-elbil-hjemme' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(meta)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Hjem', slug: '' },
              { name: 'Lading', slug: 'elbil-lading' },
              { name: 'Hjemmelading', slug: 'hvordan-lade-elbil-hjemme' },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateHowToSchema({
              name: 'Hvordan lade elbil hjemme',
              description: 'Steg-for-steg guide til å installere ladeboks og starte hjemmelading av elbil.',
              totalTime: 'PT4H',
              estimatedCost: { value: '15000-35000', currency: 'NOK' },
              steps: [
                { name: 'Velg ladeboks', text: 'Bestem effektnivå (7,4 kW enfase eller 11-22 kW trefase) og funksjoner. De fleste velger en 7,4 kW-boks med app-styring.' },
                { name: 'Kontakt autorisert elektriker', text: 'Få tilbud fra minst to installatører. Mange tilbyr pakker med ladeboks og installasjon.' },
                { name: 'Befaring', text: 'Elektrikeren sjekker sikringsskapet, kapasiteten og kabelveien. Du får et endelig pristilbud.' },
                { name: 'Installasjon', text: 'Elektrikeren legger kabel, monterer ladeboksen og kobler alt sammen. Jobben meldes inn til nettselskapet.' },
                { name: 'Testing og oppsett', text: 'Ladeboksen testes, og du setter opp appen for styring og oversikt.' },
              ],
              slug: 'hvordan-lade-elbil-hjemme',
            })
          ),
        }}
      />
      <ArticleLayout
        h1="Hvordan lade elbil hjemme"
        directAnswer="For å lade elbil hjemme trenger du en dedikert ladeboks installert av autorisert elektriker. En typisk hjemmelader gir 7,4 til 22 kW og fyller batteriet over natten. Komplett installasjon koster mellom 15 000 og 35 000 kroner, og Enova gir inntil 7 500 kr i støtte."
        metaTitle={meta.title}
        breadcrumbs={breadcrumbs}
        toc={toc}
        faqs={faqs}
        relatedLinks={relatedLinks}
        updatedAt="20. mars 2026"
      >
        {/* Kort svar */}
        <h2 id="kort-svar">Kort svar</h2>
        <p>
          De aller fleste elbileiere i Norge lader hjemme. Det er den billigste, enkleste og mest praktiske måten å holde bilen ladet på. Du trenger en ladeboks (også kalt hjemmelader eller wallbox) som installeres av en autorisert elektriker.
        </p>
        <p>
          Med en standard ladeboks på 7,4 kW kan du lade opptil 50 km rekkevidde per time. Setter du bilen til lading om kvelden, er den full til morgenen. De fleste nordmenn kjører under 50 km daglig, så selv en delvis lading over natten er mer enn nok.
        </p>

        {/* Utstyr */}
        <h2 id="utstyr-du-trenger">Utstyr du trenger</h2>
        <p>
          For å lade elbil hjemme trenger du tre ting: en ladeboks, riktig kabling fra sikringsskapet, og en autorisert elektriker som gjør jobben.
        </p>
        <h3>Ladeboks (wallbox)</h3>
        <p>
          En ladeboks er en kompakt enhet som monteres på veggen i garasjen, carport eller utendørs. Den kommuniserer med bilen for sikker lading og gir langt høyere effekt enn en vanlig stikkontakt. Populære modeller i Norge inkluderer Easee, Zaptec, Wallbox og Garo.
        </p>
        <h3>Kabling og sikring</h3>
        <p>
          Elektrikeren legger en dedikert kurs fra sikringsskapet til ladeboksen. Kabeldimensjonen avhenger av effekten du ønsker. For 7,4 kW (enfase, 32A) trengs minimum 6 mm² kabel. For 11 kW (trefase, 16A) eller 22 kW (trefase, 32A) kan det kreves tykkere kabel og eventuelt oppgradering av hovedsikring.
        </p>
        <h3>Type 2-kontakt</h3>
        <p>
          Alle ladebokser i Norge bruker Type 2-kontakten, som er europeisk standard. Bilen leveres med ladekabel som kobles mellom ladeboksen og bilen. Noen ladebokser har fast montert kabel, andre har stikkontakt der du plugger inn din egen kabel.
        </p>

        {/* Ladeboks vs stikkontakt */}
        <h2 id="ladeboks-vs-stikkontakt">Ladeboks vs stikkontakt</h2>
        <p>
          Det er teknisk mulig å lade i en vanlig stikkontakt med en mobil lader (ICCB-kabel), men det er en dårlig langtidsløsning.
        </p>
        <table>
          <thead>
            <tr>
              <th>Egenskap</th>
              <th>Stikkontakt (Schuko)</th>
              <th>Ladeboks 7,4 kW</th>
              <th>Ladeboks 22 kW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Effekt</td>
              <td>2,3 kW</td>
              <td>7,4 kW</td>
              <td>22 kW</td>
            </tr>
            <tr>
              <td>Rekkevidde per time</td>
              <td>~10 km</td>
              <td>~50 km</td>
              <td>~130 km</td>
            </tr>
            <tr>
              <td>Tid 20–80 % (60 kWh)</td>
              <td>~16 timer</td>
              <td>~5 timer</td>
              <td>~2 timer</td>
            </tr>
            <tr>
              <td>Sikkerhet</td>
              <td>Lav (overbelastningsrisiko)</td>
              <td>Høy (dedikert kurs)</td>
              <td>Høy (dedikert kurs)</td>
            </tr>
            <tr>
              <td>Smartlading</td>
              <td>Nei</td>
              <td>Ja (de fleste)</td>
              <td>Ja</td>
            </tr>
            <tr>
              <td>Pris installert</td>
              <td>0 kr (eksisterer)</td>
              <td>15 000–25 000 kr</td>
              <td>25 000–35 000 kr</td>
            </tr>
          </tbody>
        </table>
        <p>
          Vanlige stikkontakter er ikke laget for konstant høy belastning over mange timer. Det kan føre til overoppheting og i verste fall brann. En dedikert ladeboks med egen kurs og jordfeilbryter er den trygge løsningen.
        </p>

        {/* Installasjon */}
        <h2 id="slik-installerer-du">Slik installerer du ladeboks</h2>
        <p>
          Installasjonen er enkel og tar vanligvis en halv til en hel arbeidsdag. Slik går du frem:
        </p>
        <ul>
          <li><strong>Velg ladeboks.</strong> Bestem effektnivå og funksjoner. De fleste velger en 7,4 kW-boks med app-styring, som dekker behovet til de aller fleste.</li>
          <li><strong>Kontakt autorisert elektriker.</strong> Få tilbud fra minst to installatører. Mange elektriker-firmaer tilbyr pakker med ladeboks og installasjon.</li>
          <li><strong>Befaring.</strong> Elektrikeren sjekker sikringsskapet, kapasiteten og kabelveien. Basert på dette får du et endelig pristilbud.</li>
          <li><strong>Installasjon.</strong> Elektrikeren legger kabel, monterer ladeboksen og kobler alt sammen. Jobben meldes inn til nettselskapet.</li>
          <li><strong>Testing og oppsett.</strong> Ladeboksen testes, og du setter opp appen for styring og oversikt.</li>
        </ul>

        {/* Kostnader */}
        <h2 id="kostnader-og-stotte">Kostnader og Enova-støtte</h2>
        <p>
          Totalkostnaden for hjemmelading avhenger av ladebokstype, kabelavstand og eventuelt behov for oppgradering av sikringsskap.
        </p>
        <table>
          <thead>
            <tr>
              <th>Komponent</th>
              <th>Typisk pris</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ladeboks (7,4 kW)</td>
              <td>5 000–10 000 kr</td>
            </tr>
            <tr>
              <td>Ladeboks (11–22 kW)</td>
              <td>8 000–15 000 kr</td>
            </tr>
            <tr>
              <td>Elektriker (installasjon)</td>
              <td>8 000–20 000 kr</td>
            </tr>
            <tr>
              <td>Eventuell oppgradering sikringsskap</td>
              <td>5 000–15 000 kr</td>
            </tr>
            <tr>
              <td><strong>Total typisk</strong></td>
              <td><strong>15 000–35 000 kr</strong></td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Enova-støtte:</strong> Enova tilbyr inntil 7 500 kroner i støtte til installasjon av ladepunkt i bolig. Støtten gis som et fast beløp og krever at arbeidet utføres av en registrert installatør. Du søker etter at installasjonen er ferdig, via Enovas nettside.
        </p>

        {/* Ladetid */}
        <h2 id="ladetid-hjemme">Ladetid hjemme</h2>
        <p>
          Ladetiden avhenger av tre ting: ladeboksens effekt, bilens ombordlader, og batteristørrelsen. Det er alltid den laveste av ladeboksens og bilens effekt som bestemmer hastigheten.
        </p>
        <p>
          Et praktisk eksempel: Har du en elbil med 64 kWh batteri og 7,4 kW hjemmelader, tar det rundt 9 timer fra 20 % til 100 %. Men i praksis lader de fleste bare det de trenger til neste dag. Kjører du 40 km daglig (gjennomsnittlig norsk kjøredistanse), trenger du bare 2–3 timers lading per natt.
        </p>

        {/* Smartlading */}
        <h2 id="smartlading-spar-penger">Smartlading: Spar penger</h2>
        <p>
          Smartlading betyr at ladeboksen automatisk styrer når bilen lades, basert på strømprisene. Du setter en frist for når bilen skal være klar (for eksempel kl. 07:00), og boksen lader i timene med lavest pris gjennom natten.
        </p>
        <p>
          Med dagens spotpriser kan smartlading spare deg 30–50 % på ladekostnadene sammenlignet med å lade ukritisk. De fleste moderne ladebokser fra Easee, Zaptec og andre støtter dette via sin app, ofte med direkte integrasjon mot Tibber, Fjordkraft eller andre strømleverandører.
        </p>

        {/* Borettslag */}
        <h2 id="borettslag-og-sameie">Lading i borettslag og sameie</h2>
        <p>
          Bor du i borettslag eller sameie har du lovfestet rett til å etablere ladepunkt, så lenge det ikke er urimelig for fellesskapet. Lovendringen fra 2021 gjør det enklere, men du må fortsatt søke styret.
        </p>
        <p>
          Mange borettslag velger fellesløsninger med lastbalansering, der tilgjengelig strømkapasitet fordeles automatisk mellom alle som lader samtidig. Dette unngår kostbar oppgradering av strømtilførselen til bygget. Leverandører som Easee og Zaptec er spesielt populære i borettslag fordi de håndterer lastbalansering godt.
        </p>

        {/* Sikkerhet */}
        <h2 id="sikkerhet">Sikkerhet ved hjemmelading</h2>
        <p>
          Hjemmelading med godkjent utstyr og profesjonell installasjon er svært trygt. Alle ladebokser som selges i Norge må oppfylle europeiske sikkerhetskrav. I tillegg har moderne ladebokser:
        </p>
        <ul>
          <li>Innebygd jordfeilbryter (Type A eller Type B)</li>
          <li>Temperaturovervåking som reduserer effekten ved overoppheting</li>
          <li>Overbelastningsvern</li>
          <li>Kommunikasjon med bilen for kontrollert lading</li>
        </ul>
        <p>
          Det eneste du bør unngå er langvarig lading i vanlig stikkontakt uten dedikert kurs. Med en installert ladeboks kan du trygt lade hver natt uten bekymring.
        </p>

        {/* Konklusjon */}
        <h2 id="oppsummering">Oppsummering</h2>
        <p>
          Hjemmelading er den mest praktiske og rimelige måten å lade elbil på. Investeringen i ladeboks og installasjon tjener du raskt inn gjennom lave ladekostnader, smartlading og daglig bekvemmelighet. Start med å innhente tilbud fra en lokal elektriker, sjekk Enova-støtten, og velg en ladeboks med app-styring for best mulig kontroll.
        </p>
      </ArticleLayout>
    </>
  )
}
