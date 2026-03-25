const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://elbil.io'
const now = new Date().toISOString()

const pillarPages = [
  '', 'elbil', 'hva-er-elbil', 'beste-elbil', 'elbil-lading',
  'elbil-kostnader', 'elbil-rekkevidde', 'om-oss', 'slik-jobber-vi',
  'nytt', 'verktoy/ladekalkulator', 'verktoy/besparelseskalkulator',
  'verktoy/rekkevidde',
]

const clusterPages = [
  'hvordan-lade-elbil', 'hvordan-lade-elbil-hjemme', 'hurtiglading-elbil',
  'ladepris-elbil', 'hva-koster-elbil', 'hva-koster-lading',
  'hvor-mye-sparer-man-pa-elbil', 'hvilken-elbil-skal-jeg-velge',
  'beste-elbil-2026', 'elbil-familiebil', 'batteri-elbil', 'hvor-lenge-varer-elbil',
]

const artikler = [
  'lade-elbil-i-kulde','ladekabel-elbil-guide','type-2-lading','ccs-hurtiglading',
  'chademo-lading','lade-elbil-pa-hytta','lade-elbil-i-borettslag','lade-elbil-pa-jobb',
  'ladestasjon-hjemme-pris','beste-hjemmelader-elbil','installere-lader-elbil',
  'enova-stotte-elbillader','ladeoperatorer-norge','ladekort-elbil','lade-elbil-i-europa',
  'ladenettverk-norge','ladeeffekt-kw-forklart','hvor-mange-kwh-lade-elbil','ladetid-elbil',
  'stikkontakt-lading-elbil','ladeplanlegger-elbil','lading-elbil-vinter','smartlading-elbil',
  'solcelle-lading-elbil','trefase-lading-elbil','lading-leilighet-elbil','elbil-lading-app',
  'gratis-lading-elbil','elbil-lading-pris-per-kwh','lade-elbil-tilhenger',
  'vehicle-to-grid-norge','dc-lading-vs-ac-lading','elbil-ladehastighet-tabell',
  'lade-elbil-regn','elbil-vs-fossilbil-kostnad','elbil-forsikring-pris',
  'elbil-avgifter-norge','elbil-moms-2026','elbil-bompenger','elbil-parkering-fordeler',
  'elbil-ferge-rabatt','elbil-firmabil','elbil-skatt-fordeler','elbil-drivstoffkostnad',
  'elbil-vedlikehold-kostnad','elbil-dekkbytte-pris','elbil-verditap',
  'billigste-elbil-norge','elbil-bruktbil-pris','elbil-leasing-vs-kjop',
  'elbil-finansiering','elbil-stromforbruk-per-mil','elbil-arsavgift','elbil-eu-kontroll',
  'elbil-service-intervall','elbil-batteribytte-kostnad','elbil-totalkostand-kalkulator',
  'elbil-veihjelp-priser','elbil-tilhengerloype-kostnad','elbil-piggdekk-priser',
  'elbil-forbruk-motorvei','elbil-stromavtale-tips','elbil-kost-nytte-analyse',
  'beste-elbil-suv','beste-liten-elbil','beste-elbil-lang-rekkevidde',
  'elbil-for-pendlere','elbil-for-langtur','elbil-for-vinter','elbil-for-fjellvei',
  'elbil-under-300000','elbil-under-400000','elbil-under-500000','elbil-stasjonsvogn',
  'elbil-7-seter','elbil-firehjulstrekk','elbil-tilhengervekt','elbil-bagasjeplass',
  'tesla-model-y-test','volkswagen-id4-test','volvo-ex30-test','skoda-enyaq-test',
  'byd-atto3-test','hyundai-ioniq5-test','kia-ev6-test','mercedes-eqb-test',
  'toyota-bz4x-test','nio-el8-test','polestar-2-test','bmw-ix3-test',
  'ford-mustang-mach-e-test','audi-q4-etron-test','elbil-kinesiske-merker',
  'elbil-sammenligning-verktoy','elbil-nybil-vs-bruktbil','elbil-for-eldre',
  'elbil-for-unge-forere','elbil-for-hytte','elbil-pickup-norge',
  'elbil-motor-forklart','elbil-regenerering','elbil-varmepumpe',
  'elbil-batteriteknologi','elbil-batterikapasitet-kwh','elbil-batteri-degradering',
  'elbil-batteri-garanti','elbil-rekkevidde-vinter','elbil-rekkevidde-motorvei',
  'wltp-vs-reell-rekkevidde','elbil-topphastighet','elbil-akselerasjon',
  'elbil-firehjulsdrift-teknikk','elbil-software-oppdatering','elbil-dekkslitasje',
  'elbil-bremser-vedlikehold','elbil-lydniva','elbil-sikkerhet-ncap','elbil-krocktest',
  'solid-state-batteri','elbil-intelligent-fartsholder','elbil-ota-oppdatering',
  'elbil-aerodynamikk','natrium-ion-batteri-elbil','elbil-kjolingsystem',
  'elbil-rekkeviddeangst','elbil-motortyper','elbil-energiforbruk-kwh-mil',
  'elbil-pre-conditioning','elbil-batteriresirkulering',
  'elbil-miljo-fordeler','elbil-co2-utslipp','elbil-vs-hydrogen',
  'elbil-produksjon-miljo','elbil-stromkilde-norge','elbil-gruvedrift-litium',
  'elbil-resirkulering','elbil-livssyklus','elbil-stoy-byliv',
  'elbil-lokal-luftkvalitet','elbil-klimaregnskap','elbil-norges-klimamal',
  'elbil-europa-utslipp','elbil-fornybar-energi','elbil-biodrivstoff-sammenligning',
  'elbil-micro-plast-dekk','elbil-energieffektivitet','batteripass-eu-elbil',
  'elbil-langtur-norge','elbil-langtur-europa','elbil-vinter-tips',
  'elbil-fjellovergang','elbil-nordnorge','elbil-hytteveien','elbil-camping',
  'elbil-takstativ-forbruk','elbil-tilhenger-rekkevidde','elbil-barnesete-plass',
  'elbil-hund','elbil-daglig-bruk','elbil-pendling','elbil-kjoretips',
  'elbil-vedlikeholdsguide','elbil-forsikring-tips','elbil-bruktbil-sjekkliste',
  'elbil-garanti-oversikt','elbil-veihjelp-tips','elbil-trafikkregler',
  'elbil-kjorestil','elbil-app-oversikt','elbil-bildeling','elbil-taxi',
  'elbil-varebil','elbil-bobil','elbil-mc','elbil-sparkesykkel-regler',
  'elbil-elsykkel-lading','elbil-for-funksjonshemmede',
  'elbil-norge-statistikk','elbil-markedsandel-norge','elbil-politikk-norge',
  'elbil-avgiftsfritak-historie','elbil-eu-regulering','elbil-forbud-fossilbil',
  'elbil-autonom-kjoring','elbil-v2g-fremtid','elbil-batteribytte-stasjon',
  'elbil-induksjonsladning','elbil-salg-norge-historikk','elbil-infrastruktur-utbygging',
  'elbil-stromnett-belastning','elbil-2030-prognose','elbil-land-sammenligning',
  'elbil-kina-utvikling','elbil-usa-marked','elbil-flygende-biler',
  'elbil-tungtransport','elbil-rettferdig-omstilling',
  'er-elbil-farlig','elbil-brann-risiko','elbil-myter','elbil-i-tunnel',
  'elbil-stromstopp','elbil-vann-kjoring','elbil-rust','elbil-batteribyttemyte',
  'elbil-helse-str\u00e5ling','elbil-barnevennlig','elbil-dyr-myte',
  'elbil-rekkevidde-myte','elbil-kjedelig-kjore','kan-elbil-taues',
  'elbil-lyd-fotgjengere','elbil-faq','elbil-kjop-sjekkliste','elbil-forste-gang',
  'elbil-overgang-fra-fossil','elbil-nybegynner','elbil-fellesskap-forum','elbil-ordbok',
  'elbil-oslo','elbil-bergen','elbil-trondheim','elbil-stavanger','elbil-tromso',
  'elbil-kristiansand','elbil-drammen','elbil-fredrikstad','elbil-bodo','elbil-alesund',
  'elbil-nordsjo-ruten','elbil-lofoten','elbil-nordkapp','elbil-hardangervidda',
  'elbil-atlanterhavsvegen','elbil-oslo-bergen','elbil-oslo-trondheim',
  'elbil-oslo-stavanger','elbil-sorlandet','elbil-vestlandet',
]

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Pillar pages
  for (const slug of pillarPages) {
    const url = slug ? `${BASE_URL}/${slug}` : BASE_URL
    const priority = slug === '' ? '1.0' : '0.9'
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`
  }

  // Cluster pages
  for (const slug of clusterPages) {
    xml += `  <url>\n    <loc>${BASE_URL}/${slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`
  }

  // Articles
  for (const slug of artikler) {
    xml += `  <url>\n    <loc>${BASE_URL}/artikler/${slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`
  }

  // Lading & Forhandler - fylke/kommune pages
  const norway = require('../lib/data/norway')
  const fylker = norway.fylker || []

  // Lading overview
  xml += `  <url>\n    <loc>${BASE_URL}/lading</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`
  // Forhandler overview
  xml += `  <url>\n    <loc>${BASE_URL}/forhandler</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`

  for (const f of fylker) {
    // Fylke pages
    xml += `  <url>\n    <loc>${BASE_URL}/lading/${f.slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`
    xml += `  <url>\n    <loc>${BASE_URL}/forhandler/${f.slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`
    // Kommune pages
    for (const k of f.kommuner) {
      xml += `  <url>\n    <loc>${BASE_URL}/lading/${f.slug}/${k.slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`
      xml += `  <url>\n    <loc>${BASE_URL}/forhandler/${f.slug}/${k.slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`
    }
  }

  xml += '</urlset>\n'
  return xml
}

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
fs.writeFileSync(outputPath, generateSitemap())
console.log(`Sitemap generated: ${outputPath}`)
