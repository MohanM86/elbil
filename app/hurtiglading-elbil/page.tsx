import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Hurtiglading av elbil — Alt du trenger å vite',
  slug: 'hurtiglading-elbil',
  description: 'Komplett guide til hurtiglading av elbil i Norge. Lær om CCS, CHAdeMO, ladehastighet, priser og de beste hurtigladestasjonene.',
  publishedAt: '2026-01-20',
  updatedAt: '2026-03-22',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const faqs = [
  { question: 'Hvor lang tid tar hurtiglading av elbil?', answer: 'De fleste moderne elbiler lader fra 10 til 80 prosent på 20 til 40 minutter med en 150 kW hurtiglader. Med 350 kW ultraraske ladere kan det gå enda raskere, ned til 15 til 20 minutter.' },
  { question: 'Hva koster hurtiglading per kWh i 2026?', answer: 'Prisene varierer mellom operatørene. Vanlig pris er 4 til 8 kr per kWh. Med abonnement hos operatører som Circle K eller Recharge kan du komme ned mot 3,5 til 5 kr per kWh.' },
  { question: 'Er hurtiglading dårlig for batteriet?', answer: 'Moderat hurtiglading er ikke skadelig. Men hyppig bruk av hurtiglading over tid kan føre til noe raskere degradering enn hjemmelading alene. De fleste produsenter anbefaler å holde hurtiglading under 80 prosent av ladesyklusene.' },
  { question: 'Hva er forskjellen på CCS og CHAdeMO?', answer: 'CCS (Combined Charging System) er den europeiske standarden og brukes av de fleste bilmerker. CHAdeMO er en japansk standard som primært brukes av Nissan Leaf og eldre Mitsubishi-modeller. CCS er i ferd med å bli enerådende i Norge.' },
  { question: 'Kan alle elbiler hurtiglade?', answer: 'De aller fleste nye elbiler støtter hurtiglading med CCS-kontakt. Noen eldre modeller og enkelte plug-in-hybrider støtter kun normallading. Sjekk bilens spesifikasjoner for maks ladeeffekt.' },
  { question: 'Trenger jeg ladebrikke for hurtiglading?', answer: 'De fleste hurtigladere aksepterer betaling med app, kontaktløst bankkort eller ladebrikke. Noen operatører tilbyr bedre priser med abonnement og ladebrikke. Tesla Supercharger åpnet for andre merker i 2024.' },
  { question: 'Hvor mange hurtigladere finnes i Norge?', answer: 'Norge har over 6 000 hurtigladepunkter fordelt på rundt 1 200 stasjoner. Tallet vokser raskt, med flere hundre nye punkter hvert år.' },
  { question: 'Hva betyr kW ved hurtiglading?', answer: 'kW (kilowatt) angir ladeeffekten. Jo høyere kW, jo raskere lading. En 50 kW lader er standard hurtiglading, 150 kW er rask hurtiglading, og 350 kW er ultraraskt. Bilen din aksepterer maks et bestemt antall kW uavhengig av laderens kapasitet.' },
]

const toc = [
  { id: 'hva-er-hurtiglading', text: 'Hva er hurtiglading?', level: 2 },
  { id: 'ladestandarder', text: 'Ladestandarder: CCS, CHAdeMO og Tesla', level: 2 },
  { id: 'ladehastighet', text: 'Ladehastighet: Hva påvirker den?', level: 2 },
  { id: 'priser', text: 'Hurtigladingspriser i 2026', level: 2 },
  { id: 'operatorer', text: 'Ladeoperatører i Norge', level: 2 },
  { id: 'tips', text: 'Tips for effektiv hurtiglading', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function HurtigladingElbil() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: 'Lading', slug: 'elbil-lading' }, { name: 'Hurtiglading', slug: meta.slug }]),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <ArticleLayout
        h1="Hurtiglading av elbil"
        metaTitle={meta.title}
        directAnswer="Hurtiglading lar deg lade elbilen fra 10 til 80 prosent på 20 til 40 minutter. Norge har over 6 000 hurtigladepunkter, og prisene ligger typisk mellom 4 og 8 kr per kWh avhengig av operatør og tidspunkt."
        breadcrumbs={[{ name: "Lading", href: "/elbil-lading" }]}
        toc={toc}
        faqs={faqs}
        relatedLinks={[
          { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
          { title: 'Ladepris 2026', href: '/ladepris-elbil' },
          { title: 'Hva koster det å lade elbil?', href: '/hva-koster-lading' },
          { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
        ]}
        updatedAt="22. mars 2026"
      >
        <h2 id="hva-er-hurtiglading">Hva er hurtiglading?</h2>
        <p>
          Hurtiglading er lading med likestrøm (DC) som leverer strøm direkte til bilens batteri, uten å gå via bilens ombordlader. Det gjør at strømmen kan leveres mye raskere enn ved normallading hjemme.
        </p>
        <p>
          Mens hjemmelading typisk gir 7 til 22 kW, leverer hurtigladere mellom 50 og 350 kW. Det betyr at du kan gå fra nesten tomt batteri til 80 prosent på en kaffepaue.
        </p>
        <p>
          De fleste bruker hurtiglading på langtur eller som supplement til hjemmelading. For daglig bruk er hjemmelading billigere og mer praktisk, men hurtiglading gjør elbilen like fleksibel som en fossilbil for lengre reiser.
        </p>

        <h2 id="ladestandarder">Ladestandarder: CCS, CHAdeMO og Tesla</h2>
        <p>
          Det finnes tre hurtigladestandarder i Norge:
        </p>
        <table>
          <thead>
            <tr><th>Standard</th><th>Maks effekt</th><th>Brukes av</th><th>Status i Norge</th></tr>
          </thead>
          <tbody>
            <tr><td>CCS (Combo 2)</td><td>350 kW</td><td>De fleste europeiske og koreanske merker, Tesla (fra 2024)</td><td>Dominerende standard</td></tr>
            <tr><td>CHAdeMO</td><td>100 kW</td><td>Nissan Leaf, eldre Mitsubishi</td><td>Utfases gradvis</td></tr>
            <tr><td>Tesla Supercharger</td><td>250 kW</td><td>Tesla (åpnet for andre merker 2024)</td><td>Voksende, nå åpent</td></tr>
          </tbody>
        </table>
        <p>
          CCS er den klare vinneren i Norge og Europa. Alle nye elbiler som selges i Norge i 2026 bruker CCS. Tesla byttet fra sin proprietære kontakt til CCS i Europa allerede i 2019, og Supercharger-nettverket er nå åpent for alle elbiler med CCS.
        </p>

        <h2 id="ladehastighet">Ladehastighet: Hva påvirker den?</h2>
        <p>
          Selv om en hurtiglader kan levere 350 kW, er det sjelden bilen tar imot full effekt gjennom hele ladeøkten. Flere faktorer påvirker ladehastigheten:
        </p>
        <p>
          <strong>Bilens maks ladeeffekt:</strong> Hver bil har en grense for hvor mye strøm den kan ta imot. En Hyundai Ioniq 5 kan ta 240 kW, mens en Volkswagen ID.4 maks tar 135 kW. Sjekk spesifikasjonene for din bilmodell.
        </p>
        <p>
          <strong>Batteriets ladenivå:</strong> Lading er raskest mellom 10 og 60 prosent. Over 80 prosent bremser ladehastigheten kraftig. Derfor anbefales det å lade til 80 prosent ved hurtiglading.
        </p>
        <p>
          <strong>Temperatur:</strong> Kaldt batteri lader saktere. Mange nyere elbiler har batteriforvarming som aktiveres automatisk når du navigerer til en hurtiglader. Om vinteren kan det ta 15 til 20 prosent lenger tid å hurtiglade sammenlignet med sommer.
        </p>
        <p>
          <strong>Laderens kapasitet:</strong> En 50 kW lader gir maks 50 kW uansett hva bilen klarer. For raskest lading bør du velge ladere med høyere effekt enn bilens maks.
        </p>

        <h2 id="priser">Hurtigladingspriser i 2026</h2>
        <p>
          Prisene for hurtiglading i Norge varierer mellom operatørene. Her er en oversikt over de vanligste prisene i mars 2026:
        </p>
        <table>
          <thead>
            <tr><th>Operatør</th><th>Pris per kWh</th><th>Abonnement</th><th>Med abo</th></tr>
          </thead>
          <tbody>
            <tr><td>Circle K</td><td>6,49 kr</td><td>99 kr/mnd</td><td>4,49 kr</td></tr>
            <tr><td>Recharge</td><td>5,99 kr</td><td>79 kr/mnd</td><td>3,99 kr</td></tr>
            <tr><td>Mer (Statkraft)</td><td>5,49 kr</td><td>Ingen</td><td>—</td></tr>
            <tr><td>Ionity</td><td>7,49 kr</td><td>149 kr/mnd</td><td>4,99 kr</td></tr>
            <tr><td>Tesla Supercharger</td><td>4,99 kr</td><td>Ingen (Tesla-eiere)</td><td>3,99 kr</td></tr>
            <tr><td>Kople</td><td>5,99 kr</td><td>Ingen</td><td>—</td></tr>
          </tbody>
        </table>
        <p>
          Prisene oppdateres jevnlig. Merk at noen operatører også har minutt-prising i tillegg til kWh-pris, og flere har dynamisk prising som følger strømprisen. Sjekk alltid aktuell pris i operatørens app før du lader.
        </p>
        <p>
          For deg som hurtiglader ofte, lønner det seg nesten alltid å ha abonnement hos én eller to operatører. Med et abonnement til 99 kr i måneden sparer du typisk 1,5 til 2 kr per kWh, som betyr at abonnementet betaler seg etter ca. 50 til 70 kWh lading per måned.
        </p>

        <h2 id="operatorer">Ladeoperatører i Norge</h2>
        <p>
          Norge har et godt utbygd hurtigladenettverk med flere store operatører. De viktigste er:
        </p>
        <p>
          <strong>Recharge:</strong> Norges største ladeoperatør med over 1 000 hurtigladepunkter. Tilbyr både 50 kW, 150 kW og 300 kW ladere. Finnes på de fleste større veier og handelssentre.
        </p>
        <p>
          <strong>Circle K:</strong> Har bygget ut et stort nettverk av hurtigladere ved sine bensinstasjoner. Praktisk for mange siden stasjonene allerede er kjente rasteplasser. Tilbyr 150 til 350 kW ladere.
        </p>
        <p>
          <strong>Mer (Statkraft):</strong> Statlig eid gjennom Statkraft. Voksende nettverk med fokus på 150+ kW ladere. Ingen abonnementsmodell, kun direkte betaling per kWh.
        </p>
        <p>
          <strong>Tesla Supercharger:</strong> Teslas eget nettverk er åpnet for alle elbiler med CCS fra 2024. Kjent for rask og pålitelig lading, typisk 150 til 250 kW. Betaling via Tesla-appen.
        </p>
        <p>
          <strong>Ionity:</strong> Europeisk samarbeid med fokus på 350 kW ultraraskt lading langs motorveier. Dyrest uten abonnement, men blant de raskeste laderne i Norge.
        </p>

        <h2 id="tips">Tips for effektiv hurtiglading</h2>
        <p>
          <strong>Lad til 80 prosent, ikke 100:</strong> Ladehastigheten faller drastisk over 80 prosent. Ved å stoppe på 80 prosent sparer du tid og skåner batteriet.
        </p>
        <p>
          <strong>Bruk forvarmingsfunksjonen om vinteren:</strong> Mange elbiler kan forvarme batteriet automatisk når du setter en hurtiglader som destinasjon i navigasjonen. Et varmt batteri lader mye raskere.
        </p>
        <p>
          <strong>Planlegg ladestopp med appen:</strong> De fleste ladeoperatører har apper som viser ledige ladere, priser og effekt. A Better Route Planner (ABRP) er et populært verktøy for å planlegge ladestoppene langs ruten.
        </p>
        <p>
          <strong>Velg riktig lader for din bil:</strong> Det er ingen vits i å stå ved en 350 kW lader hvis bilen din maks tar 50 kW. Du betaler det samme per kWh uansett, men du kan blokkere laderen for noen som faktisk trenger den raske hastigheten.
        </p>
        <p>
          <strong>Unngå rushtid ved populære ladere:</strong> Fredag ettermiddag og helligdager kan det bli kø. Sjekk ladeoperatørens app for sanntidsstatus på tilgjengelighet, og ha en alternativ ladestasjon i bakhodet.
        </p>
      </ArticleLayout>
    </>
  )
}
