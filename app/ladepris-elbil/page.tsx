import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Ladepris elbil 2026 — Hva koster det å lade?',
  slug: 'ladepris-elbil',
  description: 'Oppdatert oversikt over ladepriser for elbil i Norge i 2026. Sammenlign priser for hjemmelading, hurtiglading og ladekort hos alle operatører.',
  publishedAt: '2026-01-10',
  updatedAt: '2026-03-22',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const faqs = [
  { question: 'Hva koster det å lade elbil hjemme per kWh?', answer: 'Hjemmelading koster det samme som strømprisen din, typisk 0,80 til 2,50 kr per kWh avhengig av strømavtale og tidspunkt. Med nettleie og avgifter ligger totalkostnaden på 1,20 til 3,00 kr per kWh.' },
  { question: 'Hva koster hurtiglading per kWh i 2026?', answer: 'Hurtiglading koster mellom 4 og 8 kr per kWh avhengig av operatør. Med abonnement kan du komme ned mot 3,50 til 5 kr per kWh.' },
  { question: 'Hva koster det å lade elbilen full?', answer: 'En elbil med 60 kWh batteri koster ca. 90 til 180 kr å lade full hjemme, eller 240 til 480 kr med hurtiglading. Rekkevidden per fulllading er typisk 300 til 450 km.' },
  { question: 'Er det billigere å lade om natten?', answer: 'Ja, strømprisene er ofte 30 til 50 prosent lavere om natten (kl. 22 til 06). Med en smartlader kan du programmere bilen til å lade automatisk i de billigste timene.' },
  { question: 'Hva koster det å lade elbil per mil?', answer: 'Hjemmelading koster typisk 1,5 til 3 kr per mil, mens hurtiglading koster 4 til 8 kr per mil. Til sammenligning koster bensin ca. 12 til 16 kr per mil.' },
  { question: 'Lønner det seg med ladeabonnement?', answer: 'Ja, hvis du hurtiglader mer enn 50 kWh per måned. Et abonnement til 79 til 149 kr per måned gir 1,5 til 2,5 kr billigere kWh-pris. Det betaler seg etter 1 til 2 hurtigladinger per måned.' },
]

const toc = [
  { id: 'hjemmelading-pris', text: 'Hjemmelading: Pris per kWh', level: 2 },
  { id: 'hurtiglading-pris', text: 'Hurtiglading: Priser i 2026', level: 2 },
  { id: 'kostnad-per-mil', text: 'Kostnad per mil: Elbil vs bensin', level: 2 },
  { id: 'spar-penger', text: 'Slik sparer du penger på lading', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function LadeprisElbil() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: 'Lading', slug: "elbil-lading" }, { name: 'Ladepris', slug: meta.slug }]),
  ]

  return (
    <>
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
      <ArticleLayout
        h1="Ladepris elbil 2026"
        metaTitle={meta.title}
        directAnswer="Hjemmelading koster 1,5 til 3 kr per mil. Hurtiglading koster 4 til 8 kr per mil. Til sammenligning koster bensin 12 til 16 kr per mil. Med smartlading og riktig strømavtale kan du spare ytterligere 20 til 40 prosent."
        breadcrumbs={[{ name: "Lading", href: "/elbil-lading" }]}
        toc={toc}
        faqs={faqs}
        relatedLinks={[
          { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil' },
          { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
          { title: 'Hva koster det å lade elbil?', href: '/hva-koster-lading' },
          { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
        ]}
        updatedAt="22. mars 2026"
      >
        <h2 id="hjemmelading-pris">Hjemmelading: Pris per kWh</h2>
        <p>
          Hjemmelading er den billigste måten å lade elbilen på. Du betaler kun strømprisen din pluss nettleie og avgifter. I 2026 ser de typiske kostnadene slik ut:
        </p>
        <table>
          <thead>
            <tr><th>Komponent</th><th>Pris per kWh</th><th>Merknad</th></tr>
          </thead>
          <tbody>
            <tr><td>Spotpris strøm</td><td>0,50 til 2,00 kr</td><td>Varierer med tidspunkt og sesong</td></tr>
            <tr><td>Nettleie</td><td>0,30 til 0,60 kr</td><td>Fastpris fra nettselskapet</td></tr>
            <tr><td>Elavgift</td><td>0,17 kr</td><td>Statlig avgift</td></tr>
            <tr><td><strong>Totalt</strong></td><td><strong>1,00 til 2,80 kr</strong></td><td>Gjennomsnitt 2026</td></tr>
          </tbody>
        </table>
        <p>
          Med et typisk forbruk på 1,5 til 2 kWh per mil, betyr dette at hjemmelading koster deg mellom 1,50 og 5,60 kr per mil. Til sammenligning koster bensin rundt 12 til 16 kr per mil.
        </p>
        <p>
          Nattlading er spesielt gunstig. Mellom kl. 22 og 06 er strømprisene ofte 30 til 50 prosent lavere enn på dagtid. Med en smartlader eller tidsstyring i bilens app kan du automatisk lade i de billigste timene.
        </p>

        <h2 id="hurtiglading-pris">Hurtiglading: Priser i 2026</h2>
        <p>
          Hurtiglading er betydelig dyrere enn hjemmelading, men fortsatt mye billigere enn bensin. Her er prisene hos de største operatørene i Norge per mars 2026:
        </p>
        <table>
          <thead>
            <tr><th>Operatør</th><th>Uten abo</th><th>Med abo</th><th>Abo-pris</th></tr>
          </thead>
          <tbody>
            <tr><td>Circle K</td><td>6,49 kr/kWh</td><td>4,49 kr/kWh</td><td>99 kr/mnd</td></tr>
            <tr><td>Recharge</td><td>5,99 kr/kWh</td><td>3,99 kr/kWh</td><td>79 kr/mnd</td></tr>
            <tr><td>Mer (Statkraft)</td><td>5,49 kr/kWh</td><td>—</td><td>Ingen</td></tr>
            <tr><td>Ionity</td><td>7,49 kr/kWh</td><td>4,99 kr/kWh</td><td>149 kr/mnd</td></tr>
            <tr><td>Tesla Supercharger</td><td>4,99 kr/kWh</td><td>3,99 kr/kWh</td><td>Inkl. for Tesla</td></tr>
            <tr><td>Kople</td><td>5,99 kr/kWh</td><td>—</td><td>Ingen</td></tr>
          </tbody>
        </table>
        <p>
          Med hurtiglading og et gjennomsnittlig forbruk på 2 kWh per mil, koster kjøringen 8 til 15 kr per mil. Det er fortsatt billigere enn bensin, men dobbelt så dyrt som hjemmelading.
        </p>

        <h2 id="kostnad-per-mil">Kostnad per mil: Elbil vs bensin</h2>
        <p>
          Her er en direkte sammenligning av driftskostnaden per mil for de tre vanligste lademetodene og bensin:
        </p>
        <table>
          <thead>
            <tr><th>Metode</th><th>Pris per kWh / liter</th><th>Forbruk per mil</th><th>Kostnad per mil</th></tr>
          </thead>
          <tbody>
            <tr><td>Hjemmelading (natt)</td><td>1,20 kr/kWh</td><td>1,7 kWh</td><td><strong>2,04 kr</strong></td></tr>
            <tr><td>Hjemmelading (dag)</td><td>2,20 kr/kWh</td><td>1,7 kWh</td><td><strong>3,74 kr</strong></td></tr>
            <tr><td>Hurtiglading (abo)</td><td>4,50 kr/kWh</td><td>1,8 kWh</td><td><strong>8,10 kr</strong></td></tr>
            <tr><td>Hurtiglading (spot)</td><td>6,50 kr/kWh</td><td>1,8 kWh</td><td><strong>11,70 kr</strong></td></tr>
            <tr><td>Bensin</td><td>19,50 kr/liter</td><td>0,70 liter</td><td><strong>13,65 kr</strong></td></tr>
          </tbody>
        </table>
        <p>
          Selv med den dyreste hurtigladingen er elbilen billigere per mil enn bensin. Med hjemmelading er besparelsen 70 til 85 prosent sammenlignet med fossilbil.
        </p>

        <h2 id="spar-penger">Slik sparer du penger på lading</h2>
        <p>
          <strong>Lad hjemme når du kan:</strong> Hjemmelading er alltid billigst. Selv med den dyreste strømavtalen er hjemmelading halvparten av hva hurtiglading koster. Installer en ladeboks hvis du har mulighet.
        </p>
        <p>
          <strong>Bruk smartlading:</strong> De fleste ladebokser og elbiler kan tidsstyres til å lade i de billigste timene. Med en spotpris-avtale og smartlading kan du spare 500 til 1 500 kr per måned sammenlignet med å lade når strømmen er dyrest.
        </p>
        <p>
          <strong>Få ladeabonnement:</strong> Hvis du hurtiglader regelmessig, lønner et abonnement seg nesten alltid. Recharge sitt abonnement til 79 kr per måned sparer deg 2 kr per kWh, som tilsvarer 140 kr etter bare 70 kWh lading.
        </p>
        <p>
          <strong>Lad til 80 prosent ved hurtiglading:</strong> Ladehastigheten faller kraftig over 80 prosent. Du bruker like mye tid og penger på de siste 20 prosentene som på de første 60. Stopp på 80 prosent og spar tid og penger.
        </p>
        <p>
          <strong>Følg med på strømprisen:</strong> Apper som Tibber, Fjordkraft og Gudbrandsdal Energi viser sanntids strømpriser og lar deg sette opp automatisk lading i de billigste timene.
        </p>
      </ArticleLayout>
    </>
  )
}
