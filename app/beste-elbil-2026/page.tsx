import type { Metadata } from 'next'
import ArticleLayout from '@/components/ArticleLayout'
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'

const meta = { title: 'Beste elbil 2026 — Topp 10 elbiler i Norge', slug: 'beste-elbil-2026', description: 'Komplett oversikt over de beste elbilene i Norge i 2026. Vi sammenligner rekkevidde, pris, ladehasighet og utstyr for å finne riktig bil for deg.', publishedAt: '2026-01-05', updatedAt: '2026-03-22' }

export const metadata: Metadata = { title: meta.title, description: meta.description, alternates: { canonical: `https://elbil.io/${meta.slug}` } }

const faqs = [
  { question: 'Hvilken elbil er best i 2026?', answer: 'Det avhenger av dine behov. Tesla Model Y er bestselgeren med god rekkevidde og pris. Hyundai Ioniq 5 har den raskeste ladingen. Volvo EX30 er best for de som vil ha en rimelig premium-bil.' },
  { question: 'Hvilken elbil har lengst rekkevidde i 2026?', answer: 'Mercedes EQS har lengst rekkevidde med opptil 770 km WLTP. Tesla Model S har 650 km. Blant mer rimelige modeller har Hyundai Ioniq 6 opptil 614 km.' },
  { question: 'Hva er den billigste elbilen i Norge i 2026?', answer: 'Dacia Spring starter fra ca. 200 000 kr. Blant mer praktiske alternativer starter MG4 fra ca. 260 000 kr og Volvo EX30 fra ca. 320 000 kr.' },
  { question: 'Hvilken elbil er best for familie?', answer: 'Tesla Model Y, Skoda Enyaq og Volkswagen ID.4 er populære familiebiler med god plass og bagasjerom. For de som trenger 7 seter er Mercedes EQB og Volvo EX90 gode valg.' },
  { question: 'Hvilken elbil lader raskest?', answer: 'Hyundai Ioniq 5 og Kia EV6 lader raskest med opptil 240 kW. De kan gå fra 10 til 80 prosent på under 18 minutter under optimale forhold.' },
  { question: 'Bør jeg kjøpe ny eller brukt elbil?', answer: 'Brukte elbiler kan være gode kjøp, spesielt modeller som er 2 til 3 år gamle. Sjekk batteriets helsetilstand (SOH) og gjenværende garanti. Nye elbiler har nyeste teknologi og full garanti.' },
]

const toc = [
  { id: 'topp-10', text: 'Topp 10 elbiler i Norge 2026', level: 2 },
  { id: 'sammenligning', text: 'Sammenligning: Rekkevidde, pris og lading', level: 2 },
  { id: 'beste-for-familie', text: 'Beste elbil for familie', level: 2 },
  { id: 'beste-rekkevidde', text: 'Beste elbil for lang rekkevidde', level: 2 },
  { id: 'beste-pris', text: 'Beste elbil for prisen', level: 2 },
  { id: 'ofte-stilte-sporsmal', text: 'Ofte stilte spørsmål', level: 2 },
]

export default function BesteElbil2026() {
  const schemas = [
    generateArticleSchema({ title: meta.title, slug: meta.slug, description: meta.description, publishedAt: meta.publishedAt, updatedAt: meta.updatedAt }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([{ name: 'Hjem', slug: '' }, { name: 'Modeller', slug: 'beste-elbil' }, { name: 'Beste elbil 2026', slug: meta.slug }]),
  ]
  return (<>
    {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}
    <ArticleLayout h1="Beste elbil 2026" metaTitle={meta.title}
      directAnswer="Tesla Model Y er den mest populære elbilen i Norge i 2026 med god rekkevidde, rask lading og konkurransedyktig pris. For raskest lading velg Hyundai Ioniq 5. For lengst rekkevidde velg Mercedes EQS. For best pris velg Volvo EX30."
      breadcrumbs={[{ name: 'Modeller', href: '/beste-elbil' }]} toc={toc} faqs={faqs}
      relatedLinks={[
        { title: 'Hvilken elbil skal jeg velge?', href: '/hvilken-elbil-skal-jeg-velge' },
        { title: 'Elbil familiebil', href: '/elbil-familiebil' },
        { title: 'Rekkeviddeberegner', href: '/verktoy/rekkevidde' },
        { title: 'Besparelseskalkulator', href: '/verktoy/besparelseskalkulator' },
      ]} updatedAt="22. mars 2026">

      <h2 id="topp-10">Topp 10 elbiler i Norge 2026</h2>
      <p>Vi har vurdert de mest populære elbilene i Norge basert på rekkevidde, pris, ladehastighet, plass og utstyrsnivå. Her er vår rangering for 2026:</p>
      <p><strong>1. Tesla Model Y Long Range:</strong> Bestselgeren i Norge. 533 km WLTP rekkevidde, 250 kW lading, romslig og allsidig. Pris fra ca. 430 000 kr.</p>
      <p><strong>2. Hyundai Ioniq 5:</strong> Raskest lading i klassen med 240 kW. 481 km rekkevidde, fantastisk interiør med flatt gulv og skyvedører. Pris fra ca. 400 000 kr.</p>
      <p><strong>3. Volvo EX30:</strong> Best i klassen for prisen. Kompakt premium med 476 km rekkevidde. Minimalistisk interiør med Google innebygd. Pris fra ca. 320 000 kr.</p>
      <p><strong>4. Volkswagen ID.4:</strong> Solid familiebil med 520 km rekkevidde. Stort bagasjerom, komfortabel og godt utstyrt. Pris fra ca. 420 000 kr.</p>
      <p><strong>5. Skoda Enyaq:</strong> Mest plass for pengene. 546 km rekkevidde, enormt bagasjerom og praktiske løsninger. Pris fra ca. 400 000 kr.</p>
      <p><strong>6. Kia EV6:</strong> Sportbil blant elbilene. 240 kW lading, 528 km rekkevidde, GT-versjon med 585 hk. Pris fra ca. 430 000 kr.</p>
      <p><strong>7. BMW iX3:</strong> Premium SUV med kjøreglede. 461 km rekkevidde, premium interiør og god kjørekomfort. Pris fra ca. 460 000 kr.</p>
      <p><strong>8. Mercedes EQA:</strong> Kompakt premium-SUV. 528 km rekkevidde, Mercedes-kvalitet og godt utstyr. Pris fra ca. 420 000 kr.</p>
      <p><strong>9. Toyota bZ4X:</strong> Pålitelig og trygg. 460 km rekkevidde, god bakkeklaring og firehjulsdrift tilgjengelig. Pris fra ca. 380 000 kr.</p>
      <p><strong>10. BYD Atto 3:</strong> Mye bil for pengene. 420 km rekkevidde, godt utstyrt og rimelig. Pris fra ca. 300 000 kr.</p>

      <h2 id="sammenligning">Sammenligning: Rekkevidde, pris og lading</h2>
      <table>
        <thead><tr><th>Modell</th><th>WLTP</th><th>Maks lading</th><th>10 til 80%</th><th>Pris fra</th></tr></thead>
        <tbody>
          <tr><td>Tesla Model Y LR</td><td>533 km</td><td>250 kW</td><td>27 min</td><td>430 000 kr</td></tr>
          <tr><td>Hyundai Ioniq 5</td><td>481 km</td><td>240 kW</td><td>18 min</td><td>400 000 kr</td></tr>
          <tr><td>Volvo EX30</td><td>476 km</td><td>153 kW</td><td>26 min</td><td>320 000 kr</td></tr>
          <tr><td>VW ID.4</td><td>520 km</td><td>175 kW</td><td>29 min</td><td>420 000 kr</td></tr>
          <tr><td>Skoda Enyaq</td><td>546 km</td><td>175 kW</td><td>29 min</td><td>400 000 kr</td></tr>
          <tr><td>Kia EV6</td><td>528 km</td><td>240 kW</td><td>18 min</td><td>430 000 kr</td></tr>
          <tr><td>BMW iX3</td><td>461 km</td><td>150 kW</td><td>31 min</td><td>460 000 kr</td></tr>
          <tr><td>Mercedes EQA</td><td>528 km</td><td>100 kW</td><td>32 min</td><td>420 000 kr</td></tr>
          <tr><td>Toyota bZ4X</td><td>460 km</td><td>150 kW</td><td>30 min</td><td>380 000 kr</td></tr>
          <tr><td>BYD Atto 3</td><td>420 km</td><td>88 kW</td><td>38 min</td><td>300 000 kr</td></tr>
        </tbody>
      </table>

      <h2 id="beste-for-familie">Beste elbil for familie</h2>
      <p>Familiebiler trenger plass, praktiske løsninger og sikkerhet. Skoda Enyaq har det største bagasjerommet med 585 liter. Tesla Model Y og Volkswagen ID.4 har begge flatt gulv bak og god takhøyde. For 7 seter er Mercedes EQB det beste valget, med tre rader og 2 ekstra seter i bagasjerommet.</p>
      <p>Alle modellene i topp 10 har 5 stjerner i Euro NCAP. For barnefamilier er ISOFIX-fester, god oversikt og automatisk nødbrems spesielt viktig. Tesla Model Y scorer høyest på aktive sikkerhetssystemer.</p>

      <h2 id="beste-rekkevidde">Beste elbil for lang rekkevidde</h2>
      <p>Hvis du kjører mye langtur eller pendler langt, er rekkevidde avgjørende. Skoda Enyaq med 546 km, Tesla Model Y med 533 km og Kia EV6 med 528 km gir deg alle over 500 km WLTP. I praksis kan du forvente 380 til 450 km reell rekkevidde om sommeren og 280 til 360 km om vinteren.</p>
      <p>Husk at ladehastighet er minst like viktig som rekkevidde for langtur. En bil med 480 km og 240 kW lading (Ioniq 5) kan ofte komme raskere frem enn en med 540 km og 100 kW lading, fordi ladestoppen er kortere.</p>

      <h2 id="beste-pris">Beste elbil for prisen</h2>
      <p>BYD Atto 3 fra ca. 300 000 kr og Volvo EX30 fra ca. 320 000 kr gir mest elbil for pengene i 2026. Begge har god rekkevidde, moderne teknologi og godt utstyr som standard. MG4 fra ca. 260 000 kr er enda rimeligere, men med noe mindre plass og utstyr.</p>
      <p>For de som vurderer brukt, er Volkswagen ID.3 2022 til 2023-modell et godt kjøp til rundt 250 000 til 300 000 kr med relativt lav kilometerstand og full batterigaranti.</p>
    </ArticleLayout>
  </>)
}
