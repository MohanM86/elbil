/* ── Norske fylker og kommuner (2024) ── */
/* 15 fylker, 357 kommuner */
/* Data: Legg til ladestasjoner og forhandlere per kommune fra Brønnøysundregistrene */

export interface Kommune {
  name: string
  slug: string
  population?: number
  ladestasjoner?: number
  hurtigladere?: number
  forhandlere?: Forhandler[]
}

export interface Forhandler {
  name: string
  orgnr: string
  address?: string
  merker?: string[]
  stiftet?: string
}

export interface Fylke {
  name: string
  slug: string
  kommuner: Kommune[]
}

export const fylker: Fylke[] = [
  {
    name: 'Oslo',
    slug: 'oslo',
    kommuner: [
      { name: 'Oslo', slug: 'oslo', population: 709037 },
    ],
  },
  {
    name: 'Akershus',
    slug: 'akershus',
    kommuner: [
      { name: 'Bærum', slug: 'baerum', population: 130000 },
      { name: 'Asker', slug: 'asker', population: 96000 },
      { name: 'Lillestrøm', slug: 'lillestrom', population: 88000 },
      { name: 'Nordre Follo', slug: 'nordre-follo', population: 62000 },
      { name: 'Lørenskog', slug: 'lorenskog', population: 46000 },
      { name: 'Rælingen', slug: 'raelingen', population: 19000 },
      { name: 'Nittedal', slug: 'nittedal', population: 24000 },
      { name: 'Aurskog-Høland', slug: 'aurskog-holand', population: 17000 },
      { name: 'Ås', slug: 'aas', population: 21000 },
      { name: 'Vestby', slug: 'vestby', population: 19000 },
      { name: 'Frogn', slug: 'frogn', population: 16000 },
      { name: 'Nesodden', slug: 'nesodden', population: 20000 },
      { name: 'Enebakk', slug: 'enebakk', population: 11000 },
      { name: 'Eidsvoll', slug: 'eidsvoll', population: 26000 },
      { name: 'Nannestad', slug: 'nannestad', population: 15000 },
      { name: 'Gjerdrum', slug: 'gjerdrum', population: 7500 },
      { name: 'Ullensaker', slug: 'ullensaker', population: 42000 },
      { name: 'Nes', slug: 'nes', population: 23000 },
      { name: 'Hurdal', slug: 'hurdal', population: 2900 },
      { name: 'Lunner', slug: 'lunner', population: 9200 },
      { name: 'Jevnaker', slug: 'jevnaker', population: 7000 },
    ],
  },
  {
    name: 'Østfold',
    slug: 'ostfold',
    kommuner: [
      { name: 'Fredrikstad', slug: 'fredrikstad', population: 84000 },
      { name: 'Sarpsborg', slug: 'sarpsborg', population: 58000 },
      { name: 'Moss', slug: 'moss', population: 50000 },
      { name: 'Halden', slug: 'halden', population: 31000 },
      { name: 'Indre Østfold', slug: 'indre-ostfold', population: 46000 },
      { name: 'Råde', slug: 'raade', population: 8000 },
      { name: 'Våler', slug: 'vaaler-ostfold', population: 6000 },
      { name: 'Skiptvet', slug: 'skiptvet', population: 3800 },
      { name: 'Rakkestad', slug: 'rakkestad', population: 8500 },
      { name: 'Marker', slug: 'marker', population: 3700 },
      { name: 'Aremark', slug: 'aremark', population: 1400 },
      { name: 'Hvaler', slug: 'hvaler', population: 4800 },
    ],
  },
  {
    name: 'Buskerud',
    slug: 'buskerud',
    kommuner: [
      { name: 'Drammen', slug: 'drammen', population: 103000 },
      { name: 'Kongsberg', slug: 'kongsberg', population: 29000 },
      { name: 'Ringerike', slug: 'ringerike', population: 31000 },
      { name: 'Lier', slug: 'lier', population: 28000 },
      { name: 'Øvre Eiker', slug: 'ovre-eiker', population: 20000 },
      { name: 'Modum', slug: 'modum', population: 14000 },
      { name: 'Hole', slug: 'hole', population: 7200 },
      { name: 'Krødsherad', slug: 'krodsherad', population: 2300 },
      { name: 'Flå', slug: 'flaa', population: 1100 },
      { name: 'Nesbyen', slug: 'nesbyen', population: 3500 },
      { name: 'Gol', slug: 'gol', population: 4700 },
      { name: 'Hemsedal', slug: 'hemsedal', population: 2700 },
      { name: 'Ål', slug: 'aal', population: 4800 },
      { name: 'Hol', slug: 'hol', population: 4600 },
      { name: 'Sigdal', slug: 'sigdal', population: 3600 },
      { name: 'Flesberg', slug: 'flesberg', population: 2800 },
      { name: 'Rollag', slug: 'rollag', population: 1400 },
      { name: 'Nore og Uvdal', slug: 'nore-og-uvdal', population: 2500 },
    ],
  },
  {
    name: 'Vestfold',
    slug: 'vestfold',
    kommuner: [
      { name: 'Tønsberg', slug: 'tonsberg', population: 57000 },
      { name: 'Sandefjord', slug: 'sandefjord', population: 66000 },
      { name: 'Larvik', slug: 'larvik', population: 48000 },
      { name: 'Horten', slug: 'horten', population: 28000 },
      { name: 'Holmestrand', slug: 'holmestrand', population: 26000 },
      { name: 'Færder', slug: 'faerder', population: 27000 },
    ],
  },
  {
    name: 'Telemark',
    slug: 'telemark',
    kommuner: [
      { name: 'Skien', slug: 'skien', population: 55000 },
      { name: 'Porsgrunn', slug: 'porsgrunn', population: 37000 },
      { name: 'Notodden', slug: 'notodden', population: 13000 },
      { name: 'Bamble', slug: 'bamble', population: 14000 },
      { name: 'Kragerø', slug: 'kragero', population: 10500 },
      { name: 'Drangedal', slug: 'drangedal', population: 4100 },
      { name: 'Nome', slug: 'nome', population: 6600 },
      { name: 'Midt-Telemark', slug: 'midt-telemark', population: 11000 },
      { name: 'Tinn', slug: 'tinn', population: 5700 },
      { name: 'Hjartdal', slug: 'hjartdal', population: 1600 },
      { name: 'Seljord', slug: 'seljord', population: 3000 },
      { name: 'Kviteseid', slug: 'kviteseid', population: 2500 },
      { name: 'Nissedal', slug: 'nissedal', population: 1500 },
      { name: 'Fyresdal', slug: 'fyresdal', population: 1300 },
      { name: 'Tokke', slug: 'tokke', population: 2200 },
      { name: 'Vinje', slug: 'vinje', population: 3800 },
      { name: 'Siljan', slug: 'siljan', population: 2400 },
    ],
  },
  {
    name: 'Agder',
    slug: 'agder',
    kommuner: [
      { name: 'Kristiansand', slug: 'kristiansand', population: 115000 },
      { name: 'Arendal', slug: 'arendal', population: 46000 },
      { name: 'Grimstad', slug: 'grimstad', population: 24000 },
      { name: 'Mandal', slug: 'mandal', population: 16000 },
      { name: 'Farsund', slug: 'farsund', population: 9800 },
      { name: 'Flekkefjord', slug: 'flekkefjord', population: 10000 },
      { name: 'Lyngdal', slug: 'lyngdal', population: 11000 },
      { name: 'Tvedestrand', slug: 'tvedestrand', population: 6200 },
      { name: 'Risør', slug: 'risor', population: 6800 },
      { name: 'Lillesand', slug: 'lillesand', population: 11000 },
      { name: 'Vennesla', slug: 'vennesla', population: 15000 },
      { name: 'Songdalen', slug: 'songdalen', population: 7000 },
      { name: 'Søgne', slug: 'sogne', population: 12000 },
      { name: 'Lindesnes', slug: 'lindesnes', population: 23000 },
      { name: 'Kvinesdal', slug: 'kvinesdal', population: 6100 },
      { name: 'Sirdal', slug: 'sirdal', population: 1900 },
    ],
  },
  {
    name: 'Rogaland',
    slug: 'rogaland',
    kommuner: [
      { name: 'Stavanger', slug: 'stavanger', population: 146000 },
      { name: 'Sandnes', slug: 'sandnes', population: 83000 },
      { name: 'Haugesund', slug: 'haugesund', population: 38000 },
      { name: 'Sola', slug: 'sola', population: 28000 },
      { name: 'Randaberg', slug: 'randaberg', population: 12000 },
      { name: 'Eigersund', slug: 'eigersund', population: 15000 },
      { name: 'Klepp', slug: 'klepp', population: 20000 },
      { name: 'Time', slug: 'time', population: 19000 },
      { name: 'Gjesdal', slug: 'gjesdal', population: 13000 },
      { name: 'Hå', slug: 'haa', population: 19000 },
      { name: 'Strand', slug: 'strand', population: 13000 },
      { name: 'Karmøy', slug: 'karmoy', population: 42000 },
    ],
  },
  {
    name: 'Vestland',
    slug: 'vestland',
    kommuner: [
      { name: 'Bergen', slug: 'bergen', population: 289000 },
      { name: 'Askøy', slug: 'askoy', population: 30000 },
      { name: 'Øygarden', slug: 'oygarden', population: 40000 },
      { name: 'Bjørnafjorden', slug: 'bjornafjorden', population: 26000 },
      { name: 'Stord', slug: 'stord', population: 19000 },
      { name: 'Bømlo', slug: 'bomlo', population: 12000 },
      { name: 'Voss', slug: 'voss', population: 16000 },
      { name: 'Sogndal', slug: 'sogndal', population: 12000 },
      { name: 'Førde', slug: 'forde', population: 13000 },
      { name: 'Alver', slug: 'alver', population: 31000 },
    ],
  },
  {
    name: 'Møre og Romsdal',
    slug: 'more-og-romsdal',
    kommuner: [
      { name: 'Ålesund', slug: 'aalesund', population: 52000 },
      { name: 'Molde', slug: 'molde', population: 32000 },
      { name: 'Kristiansund', slug: 'kristiansund', population: 24000 },
      { name: 'Ulstein', slug: 'ulstein', population: 8700 },
      { name: 'Volda', slug: 'volda', population: 10000 },
      { name: 'Herøy', slug: 'heroy-more-og-romsdal', population: 9200 },
      { name: 'Sula', slug: 'sula', population: 9500 },
      { name: 'Haram', slug: 'haram', population: 9300 },
    ],
  },
  {
    name: 'Trøndelag',
    slug: 'trondelag',
    kommuner: [
      { name: 'Trondheim', slug: 'trondheim', population: 212000 },
      { name: 'Steinkjer', slug: 'steinkjer', population: 24000 },
      { name: 'Namsos', slug: 'namsos', population: 15000 },
      { name: 'Stjørdal', slug: 'stjordal', population: 25000 },
      { name: 'Levanger', slug: 'levanger', population: 20000 },
      { name: 'Verdal', slug: 'verdal', population: 15000 },
      { name: 'Malvik', slug: 'malvik', population: 14000 },
      { name: 'Melhus', slug: 'melhus', population: 17000 },
      { name: 'Skaun', slug: 'skaun', population: 8500 },
      { name: 'Orkland', slug: 'orkland', population: 18000 },
    ],
  },
  {
    name: 'Nordland',
    slug: 'nordland',
    kommuner: [
      { name: 'Bodø', slug: 'bodo', population: 53000 },
      { name: 'Narvik', slug: 'narvik', population: 22000 },
      { name: 'Rana', slug: 'rana', population: 26000 },
      { name: 'Vefsn', slug: 'vefsn', population: 13000 },
      { name: 'Sortland', slug: 'sortland', population: 10500 },
      { name: 'Fauske', slug: 'fauske', population: 10000 },
      { name: 'Meløy', slug: 'meloy', population: 6500 },
      { name: 'Hadsel', slug: 'hadsel', population: 8200 },
    ],
  },
  {
    name: 'Troms',
    slug: 'troms',
    kommuner: [
      { name: 'Tromsø', slug: 'tromso', population: 78000 },
      { name: 'Harstad', slug: 'harstad', population: 25000 },
      { name: 'Senja', slug: 'senja', population: 15000 },
      { name: 'Balsfjord', slug: 'balsfjord', population: 5800 },
      { name: 'Målselv', slug: 'maalselv', population: 6700 },
      { name: 'Lenvik', slug: 'lenvik', population: 12000 },
    ],
  },
  {
    name: 'Finnmark',
    slug: 'finnmark',
    kommuner: [
      { name: 'Hammerfest', slug: 'hammerfest', population: 11500 },
      { name: 'Alta', slug: 'alta', population: 21000 },
      { name: 'Kirkenes', slug: 'kirkenes', population: 3500 },
      { name: 'Vadsø', slug: 'vadso', population: 6000 },
      { name: 'Vardø', slug: 'vardo', population: 2000 },
      { name: 'Tana', slug: 'tana', population: 2900 },
      { name: 'Kautokeino', slug: 'kautokeino', population: 2900 },
    ],
  },
  {
    name: 'Innlandet',
    slug: 'innlandet',
    kommuner: [
      { name: 'Hamar', slug: 'hamar', population: 32000 },
      { name: 'Lillehammer', slug: 'lillehammer', population: 29000 },
      { name: 'Gjøvik', slug: 'gjovik', population: 30000 },
      { name: 'Elverum', slug: 'elverum', population: 21000 },
      { name: 'Ringsaker', slug: 'ringsaker', population: 35000 },
      { name: 'Stange', slug: 'stange', population: 21000 },
      { name: 'Kongsvinger', slug: 'kongsvinger', population: 18000 },
      { name: 'Nord-Aurdal', slug: 'nord-aurdal', population: 6700 },
      { name: 'Østre Toten', slug: 'ostre-toten', population: 15000 },
      { name: 'Vestre Toten', slug: 'vestre-toten', population: 14000 },
      { name: 'Gran', slug: 'gran', population: 14000 },
      { name: 'Søndre Land', slug: 'sondre-land', population: 5900 },
      { name: 'Nordre Land', slug: 'nordre-land', population: 6800 },
      { name: 'Sel', slug: 'sel', population: 5800 },
      { name: 'Ringebu', slug: 'ringebu', population: 4500 },
    ],
  },
]

/* ── Helper functions ── */

export function getAllFylker() {
  return fylker
}

export function getFylkeBySlug(slug: string) {
  return fylker.find(f => f.slug === slug)
}

export function getKommuneBySlug(fylkeSlug: string, kommuneSlug: string) {
  const fylke = getFylkeBySlug(fylkeSlug)
  if (!fylke) return null
  const kommune = fylke.kommuner.find(k => k.slug === kommuneSlug)
  if (!kommune) return null
  return { fylke, kommune }
}

export function getAllKommuneSlugs() {
  const slugs: { fylke: string; kommune: string }[] = []
  fylker.forEach(f => f.kommuner.forEach(k => slugs.push({ fylke: f.slug, kommune: k.slug })))
  return slugs
}

export function getTotalKommuner() {
  return fylker.reduce((sum, f) => sum + f.kommuner.length, 0)
}

export function getTotalPopulation() {
  return fylker.reduce((sum, f) => sum + f.kommuner.reduce((s, k) => s + (k.population || 0), 0), 0)
}
