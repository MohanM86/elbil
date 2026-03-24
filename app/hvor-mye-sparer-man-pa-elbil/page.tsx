import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = {
  title: 'Hvor mye sparer man på elbil? Tall og fakta',
  slug: 'hvor-mye-sparer-man-pa-elbil',
  description: 'Hvor mye sparer du egentlig på elbil vs fossilbil? Vi regner ut drivstoff, vedlikehold, avgifter og totalkostnad. Konkrete tall for norske forhold.',
  publishedAt: '2026-01-20',
  updatedAt: '2026-03-18',
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://elbil.io/${meta.slug}` },
}

const faqs = [
  {
    question: 'Hvor mye billigere er det å lade enn å fylle bensin?',
    answer: 'Lading hjemme koster typisk 15–25 kr per mil, mens bensin koster 60–80 kr per mil. Du sparer altså rundt 50–60 kr per mil, noe som utgjør 25 000–30 000 kr i året ved 15 000 km årlig kjøring.',
  },
  {
    question: 'Er elbil billigere totalt sett enn fossilbil?',
    answer: 'Ja, i de fleste tilfeller. Selv om kjøpsprisen kan være høyere, sparer du betydelig på drivstoff, vedlikehold, bompenger, parkering og forsikring. Over 5 år er besparelsen typisk 80 000 til 150 000 kroner.',
  },
  {
    question: 'Hvor mye sparer man på bompenger med elbil?',
    answer: 'Elbiler betaler reduserte bompenger. I mange bomringer er rabatten 50–70 % sammenlignet med fossilbil. For dagpendlere i Oslo-området kan dette utgjøre 10 000–25 000 kr i året.',
  },
  {
    question: 'Er vedlikehold billigere på elbil?',
    answer: 'Ja, vesentlig. En elbil har færre bevegelige deler, ingen olje å skifte, og bremsene slites mindre takket være regenerering. Årlig vedlikeholdskostnad er typisk 2 000–4 000 kr mot 6 000–12 000 kr for fossilbil.',
  },
  {
    question: 'Sparer man på forsikring med elbil?',
    answer: 'Det varierer. Noen elbiler har lavere forsikringspremie, men populære modeller med dyre deler kan ha høyere premie. Sjekk alltid pris på din spesifikke modell. Differansen er sjelden mer enn noen tusen kroner årlig.',
  },
  {
    question: 'Lønner det seg å bytte til elbil nå?',
    answer: 'For de aller fleste, ja. Jo mer du kjører, jo raskere tjener du inn eventuell merpris på kjøp. Med 15 000 km årlig kjøring er besparelsen typisk 30 000–50 000 kr i året på drift alene.',
  },
  {
    question: 'Hva med verditapet på elbil?',
    answer: 'Elbiler har generelt moderat verditap, omtrent på linje med fossilbiler i samme prisklasse. Tesla-modeller og populære modeller som Volkswagen ID.4 holder seg relativt godt i bruktmarkedet.',
  },
  {
    question: 'Mister elbil avgiftsfordelene snart?',
    answer: 'Norge har gradvis justert elbilfordelene. Moms ble innført på beløp over 500 000 kr, og bompenger har økt noe. Men elbil er fortsatt langt billigere i drift, og regjeringen har signalisert at fordelene skal bestå i en overgangsperiode.',
  },
]

const toc = [
  { id: 'kort-svar', text: 'Kort svar', level: 2 },
  { id: 'drivstoff-vs-strom', text: 'Drivstoff vs strøm: Regnestykket', level: 2 },
  { id: 'vedlikehold', text: 'Vedlikeholdskostnader', level: 2 },
  { id: 'avgifter-bompenger', text: 'Avgifter og bompenger', level: 2 },
  { id: 'forsikring', text: 'Forsikring', level: 2 },
  { id: 'totalkostnad-5-ar', text: 'Totalkostnad over 5 år', level: 2 },
  { id: 'hvem-sparer-mest', text: 'Hvem sparer mest?', level: 2 },
  { id: 'nar-lonner-det-seg', text: 'Når lønner det seg å bytte?', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

const relatedLinks = [
  { title: 'Elbil kostnader — Full oversikt', href: '/elbil-kostnader' },
  { title: 'Hva koster det å lade elbil?', href: '/hva-koster-lading' },
  { title: 'Elbil vs fossilbil: Kostnadssammenligning', href: '/artikler/elbil-vs-fossilbil-kostnad' },
  { title: 'Elbil avgifter i Norge', href: '/artikler/elbil-avgifter-norge' },
  { title: 'Elbil som firmabil: Skatt og fordeler', href: '/artikler/elbil-firmabil' },
  { title: 'Smartlading: Spar penger med styrt lading', href: '/artikler/smartlading-elbil' },
]

export default function HvorMyeSparerMan() {
  const breadcrumbs = [
    { name: 'Kostnader', href: '/elbil-kostnader' },
    { name: 'Besparelser', href: '/hvor-mye-sparer-man-pa-elbil' },
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
              { name: 'Kostnader', slug: 'elbil-kostnader' },
              { name: 'Besparelser', slug: 'hvor-mye-sparer-man-pa-elbil' },
            ])
          ),
        }}
      />
      <ArticleLayout
        h1="Hvor mye sparer man på elbil?"
        directAnswer="En gjennomsnittlig norsk billist sparer mellom 30 000 og 50 000 kroner årlig på drift ved å velge elbil fremfor fossilbil. Besparelsen kommer fra lavere drivstoffkostnader, billigere vedlikehold, reduserte bompenger og lavere avgifter. Over 5 år kan totalbesparelsen utgjøre 80 000 til 150 000 kroner."
        metaTitle={meta.title}
        breadcrumbs={breadcrumbs}
        toc={toc}
        faqs={faqs}
        relatedLinks={relatedLinks}
        updatedAt="18. mars 2026"
      >
        {/* Kort svar */}
        <h2 id="kort-svar">Kort svar</h2>
        <p>
          Elbil er billigere å eie og kjøre enn fossilbil i Norge. De største besparelsene kommer fra drivstoff (strøm er langt billigere enn bensin), vedlikehold (færre deler som slites) og avgifter (reduserte bompenger og fritak fra engangsavgift). For en typisk norsk billist som kjører 15 000 km i året, utgjør besparelsen 30 000 til 50 000 kroner årlig.
        </p>

        {/* Drivstoff vs strøm */}
        <h2 id="drivstoff-vs-strom">Drivstoff vs strøm: Regnestykket</h2>
        <p>
          Den mest merkbare besparelsen er drivstoffkostnaden. Strøm er dramatisk billigere enn bensin og diesel per kilometer.
        </p>
        <table>
          <thead>
            <tr>
              <th>Kostnad</th>
              <th>Elbil (hjemmelading)</th>
              <th>Bensinbil</th>
              <th>Dieselbil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forbruk per mil</td>
              <td>1,5–2,0 kWh</td>
              <td>0,6–0,8 liter</td>
              <td>0,5–0,7 liter</td>
            </tr>
            <tr>
              <td>Pris per enhet</td>
              <td>1,0–1,5 kr/kWh</td>
              <td>19–22 kr/liter</td>
              <td>18–21 kr/liter</td>
            </tr>
            <tr>
              <td>Kostnad per mil</td>
              <td>1,5–3,0 kr</td>
              <td>11–18 kr</td>
              <td>9–15 kr</td>
            </tr>
            <tr>
              <td>Årskostnad (15 000 km)</td>
              <td>2 250–4 500 kr</td>
              <td>16 500–27 000 kr</td>
              <td>13 500–22 500 kr</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Besparelse drivstoff: 12 000–24 000 kr per år.</strong>
        </p>
        <p>
          Disse tallene gjelder hjemmelading med gjennomsnittlige strømpriser. Lader du utelukkende på hurtigladere, blir kostnaden høyere (3–6 kr per mil), men fortsatt vesentlig lavere enn bensin.
        </p>
        <p>
          Med smartlading kan du redusere ladekostnaden ytterligere ved å lade når strømprisene er lavest, typisk om natten. Les mer om <a href="/artikler/smartlading-elbil">smartlading og hvordan du sparer på strømmen</a>.
        </p>

        {/* Vedlikehold */}
        <h2 id="vedlikehold">Vedlikeholdskostnader</h2>
        <p>
          En elbil har vesentlig færre bevegelige deler enn en fossilbil. Det betyr færre ting som kan gå i stykker og lavere servicekostnader.
        </p>
        <p>
          Ting du slipper med elbil:
        </p>
        <ul>
          <li>Oljeskift og oljefilter</li>
          <li>Registerreim/kjede</li>
          <li>Tennplugger og luftfilter</li>
          <li>Clutch og girkasse-service</li>
          <li>Eksosanlegg og katalysator</li>
        </ul>
        <p>
          Ting du fortsatt må vedlikeholde:
        </p>
        <ul>
          <li>Dekk (slites noe raskere på grunn av tyngde og dreiemoment)</li>
          <li>Bremser (men slites mye mindre takket være regenerativ bremsing)</li>
          <li>Vindusviskere og spylervæske</li>
          <li>Kupéfilter</li>
          <li>Bremsevæske (hvert 2.–4. år)</li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Elbil per år</th>
              <th>Fossilbil per år</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service/vedlikehold</td>
              <td>2 000–4 000 kr</td>
              <td>6 000–12 000 kr</td>
            </tr>
            <tr>
              <td>Dekk</td>
              <td>4 000–6 000 kr</td>
              <td>3 500–5 000 kr</td>
            </tr>
            <tr>
              <td>EU-kontroll</td>
              <td>~1 500 kr (etter 4 år)</td>
              <td>~1 500 kr (etter 4 år)</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Besparelse vedlikehold: 3 000–8 000 kr per år.</strong>
        </p>

        {/* Avgifter og bompenger */}
        <h2 id="avgifter-bompenger">Avgifter og bompenger</h2>
        <p>
          Norge har tradisjonelt gitt elbiler betydelige avgiftsfordeler. Selv om noen fordeler er blitt redusert de siste årene, er elbil fortsatt klart billigere:
        </p>
        <ul>
          <li><strong>Bompenger:</strong> Elbiler betaler redusert sats, typisk 50–70 % av fossilbiltakst. For dagpendlere i storbyområder kan dette utgjøre 10 000–25 000 kr årlig.</li>
          <li><strong>Parkering:</strong> Mange kommuner tilbyr redusert eller gratis parkering for elbiler, selv om dette er i ferd med å fases ut i de største byene.</li>
          <li><strong>Ferge:</strong> Elbiler får reduserte fergetakster, typisk rundt 50 % rabatt.</li>
          <li><strong>Årsavgift/trafikkforsikringsavgift:</strong> Litt lavere for elbiler.</li>
          <li><strong>Firmabil:</strong> Elbil som firmabil har lavere skattbar fordel enn fossilbil, noe som kan spare flere tusen kroner i skatt månedlig.</li>
        </ul>
        <p>
          <strong>Besparelse avgifter og bompenger: 5 000–25 000 kr per år</strong> (avhengig av kjøremønster og bosted).
        </p>

        {/* Forsikring */}
        <h2 id="forsikring">Forsikring</h2>
        <p>
          Forsikringskostnaden for elbil varierer mye mellom modeller. Generelt er populære volummodeller (Tesla Model Y, Volkswagen ID.4, Volvo EX30) rimelige å forsikre, mens premium-elbiler kan ha høyere premier på grunn av dyre deler.
        </p>
        <p>
          Forskjellen mellom elbil og fossilbil i forsikring er sjelden mer enn 2 000–5 000 kr årlig, og kan gå begge veier avhengig av modell. Les mer om <a href="/artikler/elbil-forsikring-pris">elbil forsikring og priser</a>.
        </p>

        {/* Totalkostnad */}
        <h2 id="totalkostnad-5-ar">Totalkostnad over 5 år</h2>
        <p>
          La oss sette opp et realistisk regnestykke for en typisk norsk billist som kjører 15 000 km årlig over 5 år:
        </p>
        <table>
          <thead>
            <tr>
              <th>Post (5 år)</th>
              <th>Elbil</th>
              <th>Fossilbil</th>
              <th>Differanse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Drivstoff/strøm</td>
              <td>17 500 kr</td>
              <td>112 500 kr</td>
              <td>–95 000 kr</td>
            </tr>
            <tr>
              <td>Vedlikehold</td>
              <td>15 000 kr</td>
              <td>45 000 kr</td>
              <td>–30 000 kr</td>
            </tr>
            <tr>
              <td>Bompenger (dagpendler)</td>
              <td>25 000 kr</td>
              <td>75 000 kr</td>
              <td>–50 000 kr</td>
            </tr>
            <tr>
              <td>Forsikring</td>
              <td>40 000 kr</td>
              <td>45 000 kr</td>
              <td>–5 000 kr</td>
            </tr>
            <tr>
              <td>Årsavgift</td>
              <td>12 500 kr</td>
              <td>15 000 kr</td>
              <td>–2 500 kr</td>
            </tr>
            <tr>
              <td><strong>Total drift</strong></td>
              <td><strong>110 000 kr</strong></td>
              <td><strong>292 500 kr</strong></td>
              <td><strong>–182 500 kr</strong></td>
            </tr>
          </tbody>
        </table>
        <p>
          Selv om du ikke pendler gjennom bomring og dermed sparer mindre der, er totalbesparelsen på drift typisk mellom 80 000 og 150 000 kroner over 5 år. Kjøpsprisen må selvsagt regnes inn, men mange elbiler er nå konkurransedyktige på pris med tilsvarende fossilbiler.
        </p>

        {/* Hvem sparer mest */}
        <h2 id="hvem-sparer-mest">Hvem sparer mest?</h2>
        <p>
          Ikke alle sparer like mye. Her er faktorene som påvirker besparelsen din:
        </p>
        <ul>
          <li><strong>Kjørelengde:</strong> Jo mer du kjører, jo mer sparer du. Ved 20 000 km/år er besparelsen vesentlig større enn ved 10 000 km/år.</li>
          <li><strong>Bompenger:</strong> Dagpendlere gjennom bomringer sparer mest. Bor du ruralt uten bompenger, faller denne posten bort.</li>
          <li><strong>Hjemmelading:</strong> De som kan lade hjemme sparer mest på drivstoff. Er du avhengig av kun hurtiglading, halveres drivstoffbesparelsen omtrent.</li>
          <li><strong>Strømavtale:</strong> Med spotpris og smartlading kan du holde ladekostnaden svært lav.</li>
          <li><strong>Firmabil:</strong> Elbil som firmabil gir store skattefordeler og er et av de sterkeste økonomiske argumentene.</li>
        </ul>

        {/* Når lønner det seg */}
        <h2 id="nar-lonner-det-seg">Når lønner det seg å bytte?</h2>
        <p>
          For de fleste lønner det seg allerede i dag. Elbiler i prisklassen 300 000–500 000 kr dekker behovene til de fleste familier, og de lavere driftskostnadene gjør at totalkostnaden ofte er lavere enn for en tilsvarende fossilbil etter allerede 2–3 år.
        </p>
        <p>
          Det lønner seg spesielt godt hvis du:
        </p>
        <ul>
          <li>Kjører mer enn 12 000 km per år</li>
          <li>Kan lade hjemme (egen bolig eller ladeplass i borettslag)</li>
          <li>Pendler gjennom bomring</li>
          <li>Vurderer firmabil</li>
          <li>Uansett skal bytte bil i nærmeste fremtid</li>
        </ul>
        <p>
          Bruktmarkedet for elbil er også blitt modent, med gode muligheter for å kjøpe elbil til en lavere inngangspris. Les mer om <a href="/artikler/elbil-bruktbil-pris">brukt elbil: priser og tips</a>.
        </p>

        {/* Oppsummering */}
        <h2 id="oppsummering">Oppsummering</h2>
        <p>
          Elbil er billigere å eie enn fossilbil i Norge. Den typiske norske billisten sparer 30 000 til 50 000 kroner årlig på drift, og over 5 år kan totalbesparelsen utgjøre over 100 000 kroner. De største innsparingene kommer fra drivstoff og bompenger. Med smartlading hjemme og daglig bruk gjennom bomring får du mest igjen for elbilvalget.
        </p>
      </ArticleLayout>
    </>
  )
}
