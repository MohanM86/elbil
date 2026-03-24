export const siteConfig = {
  name: 'elbil.io',
  title: 'elbil.io — Norges elbilguide',
  description: 'Alt om elbil i Norge. Lading, kostnader, rekkevidde, modeller og tips. Uavhengig og oppdatert informasjon.',
  url: 'https://elbil.io',
  locale: 'nb_NO',
  language: 'nb',
} as const

export interface ArticleMeta {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  directAnswer: string
  cluster: string
  pillar: string
  relatedSlugs: string[]
  publishedAt: string
  updatedAt: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TOCItem {
  id: string
  text: string
  level: number
}

// Pillar pages configuration
export const pillars = [
  {
    slug: 'elbil',
    title: 'Elbil i Norge',
    description: 'Alt du trenger å vite om elbil',
  },
  {
    slug: 'hva-er-elbil',
    title: 'Hva er en elbil?',
    description: 'Enkel forklaring og fakta om elbiler',
  },
  {
    slug: 'beste-elbil',
    title: 'Beste elbil',
    description: 'Sammenligning av de beste elbilene i Norge',
  },
  {
    slug: 'elbil-lading',
    title: 'Elbil lading',
    description: 'Komplett guide til lading av elbil',
  },
  {
    slug: 'elbil-kostnader',
    title: 'Elbil kostnader',
    description: 'Hva koster det å eie elbil?',
  },
  {
    slug: 'elbil-rekkevidde',
    title: 'Elbil rekkevidde',
    description: 'Alt om rekkevidde på elbiler',
  },
] as const

// Cluster definitions for internal linking
export const clusters = {
  lading: {
    pillar: 'elbil-lading',
    label: 'Lading',
    coreSlugs: [
      'hvordan-lade-elbil',
      'hvordan-lade-elbil-hjemme',
      'hurtiglading-elbil',
      'ladepris-elbil',
    ],
  },
  kostnader: {
    pillar: 'elbil-kostnader',
    label: 'Kostnader',
    coreSlugs: [
      'hva-koster-elbil',
      'hva-koster-lading',
      'hvor-mye-sparer-man-pa-elbil',
    ],
  },
  valg: {
    pillar: 'beste-elbil',
    label: 'Valg og sammenligning',
    coreSlugs: [
      'hvilken-elbil-skal-jeg-velge',
      'beste-elbil-2026',
      'elbil-familiebil',
    ],
  },
  teknisk: {
    pillar: 'elbil-rekkevidde',
    label: 'Teknisk',
    coreSlugs: [
      'elbil-rekkevidde',
      'batteri-elbil',
      'hvor-lenge-varer-elbil',
    ],
  },
} as const
