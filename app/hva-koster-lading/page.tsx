import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = { title: 'Hva koster det å lade elbil? — Komplett prisoversikt', slug: 'hva-koster-lading', description: 'Alt om ladekostnader for elbil i Norge. Sammenlign hjemmelading, hurtiglading og betal-per-bruk priser. Beregn din årlige ladekostnad.', publishedAt: '2026-01-08', updatedAt: '2026-03-22' }

export const metadata: Metadata = { title: meta.title, description: meta.description, alternates: { canonical: `https://elbil.io/${meta.slug}` } }

const faqs = [
  { question: 'Hva koster det å lade elbil for 100 km?', answer: 'Med hjemmelading koster 100 km ca. 20 til 35 kr. Med hurtiglading ca. 60 til 100 kr. Til sammenligning koster 100 km med bensin ca. 130 til 160 kr.' },
  { question: 'Hvor mye strøm bruker en elbil per mil?', answer: 'En gjennomsnittlig elbil bruker 1,5 til 2,2 kWh per mil. Små biler bruker minst, SUVer bruker mest. Vinter øker forbruket med 20 til 40 prosent.' },
  { question: 'Koster det å lade elbil på kjøpesenter?', answer: 'Noen kjøpesentre tilbyr gratis normallading mens du handler. Hurtiglading koster det samme som andre steder. Sjekk med det lokale senteret.' },
  { question: 'Hva koster det å lade elbil per måned?', answer: 'Med 15 000 km årlig kjøring og mest hjemmelading koster lading ca. 500 til 900 kr per måned. Med kun hurtiglading ca. 1 200 til 2 000 kr per måned.' },
]

const toc = [
  { id: 'oversikt', text: 'Oversikt: Alle lademetoder og priser', level: 2 },
  { id: 'hjemmelading', text: 'Hjemmelading: Den billigste metoden', level: 2 },
  { id: 'hurtiglading', text: 'Hurtiglading: Priser per operatør', level: 2 },
  { id: 'arlig-kostnad', text: 'Hva koster lading per år?', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function HvaKosterLading() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs), generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Lading', slug: 'elbil-lading' }, { name: 'Hva koster lading?', slug: meta.slug }]),
  ]
  return (<>
    {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
    <ArticleLayout h1="Hva koster det å lade elbil?" metaTitle={meta.title}
      directAnswer="Hjemmelading koster 1,5 til 3 kr per mil, hurtiglading 4 til 8 kr per mil. Ved 15 000 km årlig kjøring og mest hjemmelading koster lading ca. 7 000 til 10 000 kr per år. Det er 15 000 til 20 000 kr billigere enn bensin."
      breadcrumbs={[{ name: 'Lading', href: '/elbil-lading' }]} toc={toc} faqs={faqs}
      relatedLinks={[
        { title: 'Ladepris 2026', href: '/ladepris-elbil' },
        { title: 'Hurtiglading forklart', href: '/hurtiglading-elbil' },
        { title: 'Hvordan lade elbil hjemme', href: '/hvordan-lade-elbil-hjemme' },
        { title: 'Ladekostnadskalkulator', href: '/verktoy/ladekalkulator' },
      ]} updatedAt="22. mars 2026">

      <h2 id="oversikt">Oversikt: Alle lademetoder og priser</h2>
      <p>Det finnes tre hovedmetoder for å lade elbil, med svært ulike priser:</p>
      <table>
        <thead><tr><th>Metode</th><th>Effekt</th><th>Pris per kWh</th><th>Kostnad per mil</th><th>Tid for 300 km</th></tr></thead>
        <tbody>
          <tr><td>Hjemmelading (natt)</td><td>3,6 til 22 kW</td><td>1,0 til 1,8 kr</td><td>1,5 til 3 kr</td><td>4 til 12 timer</td></tr>
          <tr><td>Hjemmelading (dag)</td><td>3,6 til 22 kW</td><td>1,5 til 2,8 kr</td><td>2,5 til 5 kr</td><td>4 til 12 timer</td></tr>
          <tr><td>Normallading offentlig</td><td>7 til 22 kW</td><td>3 til 5 kr</td><td>5 til 9 kr</td><td>4 til 8 timer</td></tr>
          <tr><td>Hurtiglading</td><td>50 til 350 kW</td><td>4 til 8 kr</td><td>7 til 14 kr</td><td>25 til 50 min</td></tr>
          <tr><td>Bensin (ref.)</td><td>—</td><td>19,50 kr/liter</td><td>12 til 16 kr</td><td>5 min (tanking)</td></tr>
        </tbody>
      </table>

      <h2 id="hjemmelading">Hjemmelading: Den billigste metoden</h2>
      <p>Over 90 prosent av all elbillading i Norge skjer hjemme. Med en ladeboks på veggen betaler du kun strømprisen pluss nettleie. I 2026 ser de typiske kostnadene slik ut:</p>
      <p>Med en spotpris-avtale varierer strømprisen gjennom døgnet. Om natten (kl. 22 til 06) er prisen ofte 0,50 til 1,00 kr per kWh, mens den på dagtid kan være 1,50 til 2,50 kr per kWh. Med nettleie og avgifter lagt på toppen, lander du typisk på 1,00 til 3,00 kr per kWh totalt.</p>
      <p>For en gjennomsnittlig elbil som bruker 1,7 kWh per mil, betyr dette at hjemmelading koster mellom 1,70 og 5,10 kr per mil. Ved 15 000 km årlig kjøring er den totale ladekostnaden hjemme mellom 5 100 og 15 300 kr per år, med et realistisk gjennomsnitt på rundt 8 000 kr.</p>

      <h2 id="hurtiglading">Hurtiglading: Priser per operatør</h2>
      <p>Hurtiglading er dyrere, men nødvendig for langtur. De største operatørene i Norge har følgende priser per mars 2026:</p>
      <p>Recharge er rimeligst med abonnement (3,99 kr/kWh for 79 kr/mnd). Mer (Statkraft) har enkel prising uten abonnement (5,49 kr/kWh). Circle K tilbyr 4,49 kr/kWh med abo til 99 kr/mnd. Tesla Supercharger ligger på 4,99 kr/kWh for ikke-Tesla-eiere.</p>
      <p>For en typisk hurtiglading fra 10 til 80 prosent på et 60 kWh-batteri (ca. 42 kWh levert), koster det mellom 168 kr (Recharge med abo) og 315 kr (Ionity uten abo).</p>

      <h2 id="arlig-kostnad">Hva koster lading per år?</h2>
      <p>Den årlige ladekostnaden avhenger av hvor mye du kjører og fordelingen mellom hjemme- og hurtiglading. Her er tre typiske scenarier:</p>
      <table>
        <thead><tr><th>Scenario</th><th>Årlig kjøring</th><th>Hjemme/hurtig</th><th>Årlig kostnad</th></tr></thead>
        <tbody>
          <tr><td>Hjemmelader, kort pendling</td><td>10 000 km</td><td>95/5%</td><td>5 500 kr</td></tr>
          <tr><td>Blandet bruk</td><td>15 000 km</td><td>80/20%</td><td>9 500 kr</td></tr>
          <tr><td>Mye langkjøring</td><td>20 000 km</td><td>60/40%</td><td>16 000 kr</td></tr>
          <tr><td>Bensinbil (ref.)</td><td>15 000 km</td><td>—</td><td>24 000 kr</td></tr>
        </tbody>
      </table>
      <p>Selv i det dyreste scenariet med mye hurtiglading sparer du penger sammenlignet med bensin. Med mest hjemmelading er besparelsen enorm.</p>
    </ArticleLayout>
  </>)
}
