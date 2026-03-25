import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = { title: 'Hva koster en elbil? — Priser og totalkostnad 2026', slug: 'hva-koster-elbil', description: 'Komplett prisoversikt for elbiler i Norge i 2026. Se innkjøpspris, driftskostnader, avgifter og totalkostnad sammenlignet med fossilbil.', publishedAt: '2026-01-12', updatedAt: '2026-03-22' }

export const metadata: Metadata = { title: meta.title, description: meta.description, alternates: { canonical: `https://elbil.io/${meta.slug}` } }

const faqs = [
  { question: 'Hva koster den billigste elbilen i Norge?', answer: 'Dacia Spring starter fra ca. 200 000 kr. MG4 fra ca. 260 000 kr og BYD Atto 3 fra ca. 300 000 kr er mer praktiske alternativer.' },
  { question: 'Er elbil dyrere enn bensinbil?', answer: 'Innkjøpsprisen er ofte høyere, men totalkostnaden over 5 år er lavere. Du sparer 25 000 til 50 000 kr årlig på drivstoff, vedlikehold, bompenger og avgifter.' },
  { question: 'Hva koster det å eie elbil per måned?', answer: 'Typisk 4 000 til 7 000 kr per måned for lading, forsikring, dekk og vedlikehold ved 15 000 km årlig kjøring. Uten billån.' },
  { question: 'Hva koster elbil forsikring?', answer: 'Kasko på elbil koster typisk 10 000 til 15 000 kr per år, noe mer enn tilsvarende fossilbil. Elbiler har dyrere reservedeler som påvirker forsikringsprisen.' },
  { question: 'Er det moms på elbil i 2026?', answer: 'Elbiler under 500 000 kr er fritatt for moms. Over 500 000 kr betaler du 25 prosent moms på beløpet over grensen. Denne grensen kan bli justert i fremtidige statsbudsjett.' },
]

const toc = [
  { id: 'innkjopspris', text: 'Innkjøpspris: Hva koster ulike elbiler?', level: 2 },
  { id: 'driftskostnader', text: 'Årlige driftskostnader', level: 2 },
  { id: 'totalkostnad', text: 'Totalkostnad over 5 år: Elbil vs fossilbil', level: 2 },
  { id: 'avgifter', text: 'Avgifter og fordeler i 2026', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function HvaKosterElbil() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs), generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Kostnader', slug: 'elbil-kostnader' }, { name: 'Hva koster elbil?', slug: meta.slug }]),
  ]
  return (<>
    {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
    <ArticleLayout h1="Hva koster en elbil?" metaTitle={meta.title}
      directAnswer="En ny elbil koster fra 200 000 til 600 000 kr i Norge i 2026. De mest populære modellene ligger mellom 350 000 og 450 000 kr. Totalkostnaden over 5 år er typisk 80 000 til 150 000 kr lavere enn en tilsvarende fossilbil."
      breadcrumbs={[{ name: 'Kostnader', href: '/elbil-kostnader' }]} toc={toc} faqs={faqs}
      relatedLinks={[
        { title: 'Hvor mye sparer man på elbil?', href: '/hvor-mye-sparer-man-pa-elbil' },
        { title: 'Ladepris 2026', href: '/ladepris-elbil' },
        { title: 'Beste elbil 2026', href: '/beste-elbil-2026' },
        { title: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
      ]} updatedAt="22. mars 2026">

      <h2 id="innkjopspris">Innkjøpspris: Hva koster ulike elbiler?</h2>
      <p>Prisene på elbiler i Norge har falt betydelig de siste årene, og i 2026 finnes det gode alternativer i alle prisklasser:</p>
      <table>
        <thead><tr><th>Prisklasse</th><th>Modeller</th><th>WLTP rekkevidde</th></tr></thead>
        <tbody>
          <tr><td>Under 300 000 kr</td><td>Dacia Spring, MG4, BYD Dolphin</td><td>230 til 450 km</td></tr>
          <tr><td>300 000 til 400 000 kr</td><td>Volvo EX30, BYD Atto 3, Toyota bZ4X</td><td>420 til 480 km</td></tr>
          <tr><td>400 000 til 500 000 kr</td><td>Tesla Model Y, Hyundai Ioniq 5, VW ID.4, Kia EV6</td><td>480 til 540 km</td></tr>
          <tr><td>Over 500 000 kr</td><td>BMW iX, Mercedes EQE, Volvo EX90, Porsche Taycan</td><td>500 til 770 km</td></tr>
        </tbody>
      </table>
      <p>Husk at elbiler under 500 000 kr er fritatt for merverdiavgift (moms) i Norge. Det betyr at en elbil til 400 000 kr ville kostet 500 000 kr med moms, en besparelse på 100 000 kr sammenlignet med en fossilbil i samme prisklasse.</p>

      <h2 id="driftskostnader">Årlige driftskostnader</h2>
      <p>Driftskostnadene er der elbilen virkelig skinner sammenlignet med fossilbil. Her er en realistisk oversikt for 15 000 km årlig kjøring:</p>
      <table>
        <thead><tr><th>Kostnad</th><th>Elbil</th><th>Bensinbil</th><th>Besparelse</th></tr></thead>
        <tbody>
          <tr><td>Drivstoff / lading</td><td>8 000 kr</td><td>24 000 kr</td><td>16 000 kr</td></tr>
          <tr><td>Vedlikehold og service</td><td>3 000 kr</td><td>8 000 kr</td><td>5 000 kr</td></tr>
          <tr><td>Forsikring</td><td>12 000 kr</td><td>10 000 kr</td><td>−2 000 kr</td></tr>
          <tr><td>Bompenger</td><td>4 800 kr</td><td>9 600 kr</td><td>4 800 kr</td></tr>
          <tr><td>Årsavgift</td><td>455 kr</td><td>2 820 kr</td><td>2 365 kr</td></tr>
          <tr><td>Dekk</td><td>5 000 kr</td><td>4 000 kr</td><td>−1 000 kr</td></tr>
          <tr><td><strong>Totalt per år</strong></td><td><strong>33 255 kr</strong></td><td><strong>58 420 kr</strong></td><td><strong>25 165 kr</strong></td></tr>
        </tbody>
      </table>
      <p>Elbilens forsikring og dekk er noe dyrere, men besparelsen på drivstoff, vedlikehold og bompenger gjør at du kommer ut ca. 25 000 kr billigere per år. Over 5 år er det over 125 000 kr spart.</p>

      <h2 id="totalkostnad">Totalkostnad over 5 år: Elbil vs fossilbil</h2>
      <p>Når vi regner inn både innkjøpspris og drift over 5 år, ser bildet slik ut for to typiske biler i samme klasse:</p>
      <table>
        <thead><tr><th></th><th>Tesla Model Y (430 000 kr)</th><th>Toyota RAV4 (490 000 kr)</th></tr></thead>
        <tbody>
          <tr><td>Innkjøpspris</td><td>430 000 kr</td><td>490 000 kr</td></tr>
          <tr><td>Drift 5 år</td><td>166 275 kr</td><td>292 100 kr</td></tr>
          <tr><td>Verditap 5 år</td><td>190 000 kr</td><td>215 000 kr</td></tr>
          <tr><td><strong>Totalkostnad</strong></td><td><strong>786 275 kr</strong></td><td><strong>997 100 kr</strong></td></tr>
          <tr><td><strong>Besparelse</strong></td><td colSpan={2}><strong>210 825 kr billigere med elbil</strong></td></tr>
        </tbody>
      </table>

      <h2 id="avgifter">Avgifter og fordeler i 2026</h2>
      <p><strong>Momsfritak:</strong> Elbiler under 500 000 kr er fritatt for 25 prosent moms. Over 500 000 kr betales moms kun på beløpet over grensen.</p>
      <p><strong>Engangsavgift:</strong> Elbiler er fritatt for engangsavgift som fossilbiler betaler basert på vekt, CO2 og NOx-utslipp.</p>
      <p><strong>Årsavgift:</strong> Elbiler betaler redusert trafikkforsikringsavgift, ca. 455 kr mot 2 820 kr for fossilbiler.</p>
      <p><strong>Bompenger:</strong> Elbiler betaler redusert takst i bomringer, typisk 50 prosent av fossilbilens takst. Merk at dette varierer mellom bomselskap og kan endres.</p>
      <p><strong>Parkering:</strong> Mange kommuner tilbyr gratis eller redusert parkering for elbiler på kommunale plasser. Sjekk reglene i din kommune.</p>
      <p><strong>Ferge:</strong> Elbiler betaler redusert fergetakst på riksveiferger, typisk 50 prosent rabatt.</p>
    </ArticleLayout>
  </>)
}
