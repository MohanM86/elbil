import { siteConfig, type FAQItem } from './config'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: '2026',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'redaksjon@elbil.io',
      contactType: 'editorial',
      availableLanguage: 'Norwegian',
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'nb',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
  authorName?: string
  reviewerName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      name: article.authorName || 'Redaksjonen',
      url: `${siteConfig.url}/om-oss`,
    },
    ...(article.reviewerName && {
      reviewer: { '@type': 'Person', name: article.reviewerName },
    }),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/${article.slug}`,
    },
    inLanguage: 'nb',
    isAccessibleForFree: true,
  }
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; slug: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}/${item.slug}`,
    })),
  }
}

export interface HowToStep {
  name: string
  text: string
}

export function generateHowToSchema(howto: {
  name: string
  description: string
  totalTime?: string
  estimatedCost?: { value: string; currency: string }
  steps: HowToStep[]
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    ...(howto.totalTime && { totalTime: howto.totalTime }),
    ...(howto.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        value: howto.estimatedCost.value,
        currency: howto.estimatedCost.currency,
      },
    }),
    step: howto.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function generateProductReviewSchema(review: {
  name: string
  description: string
  brand: string
  category: string
  ratingValue?: number
  pros?: string[]
  cons?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: review.name,
    description: review.description,
    brand: { '@type': 'Brand', name: review.brand },
    category: review.category,
    ...(review.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: review.ratingValue,
        bestRating: 10,
        worstRating: 1,
        ratingCount: 1,
      },
    }),
    ...(review.pros && {
      review: {
        '@type': 'Review',
        author: { '@type': 'Organization', name: siteConfig.name },
        positiveNotes: {
          '@type': 'ItemList',
          itemListElement: review.pros.map((p, i) => ({
            '@type': 'ListItem', position: i + 1, name: p,
          })),
        },
        ...(review.cons && {
          negativeNotes: {
            '@type': 'ItemList',
            itemListElement: review.cons.map((c, i) => ({
              '@type': 'ListItem', position: i + 1, name: c,
            })),
          },
        }),
      },
    }),
  }
}

export function generateToolSchema(tool: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    description: tool.description,
    url: `${siteConfig.url}/${tool.slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'NOK' },
    inLanguage: 'nb',
  }
}

export function generateItemListSchema(list: {
  name: string
  description: string
  items: { name: string; url: string; position: number }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: list.name,
    description: list.description,
    numberOfItems: list.items.length,
    itemListElement: list.items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url,
    })),
  }
}
