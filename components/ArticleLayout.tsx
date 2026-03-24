import Link from 'next/link'
import type { FAQItem, TOCItem } from '@/lib/config'
import FAQ from './FAQ'

interface ArticleLayoutProps {
  h1: string
  directAnswer: string
  metaTitle: string
  breadcrumbs: { name: string; href: string }[]
  toc: TOCItem[]
  children: React.ReactNode
  faqs: FAQItem[]
  relatedLinks: { title: string; href: string }[]
  updatedAt: string
}

export default function ArticleLayout({
  h1,
  directAnswer,
  breadcrumbs,
  toc,
  children,
  faqs,
  relatedLinks,
  updatedAt,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Brødsmuler" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-surface-400">
          <li>
            <Link href="/" className="hover:text-surface-700">
              Hjem
            </Link>
          </li>
          {breadcrumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-1.5">
              <span>/</span>
              <Link href={crumb.href} className="hover:text-surface-700">
                {crumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* H1 */}
      <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-6">
        {h1}
      </h1>

      {/* Updated date */}
      <p className="text-sm text-surface-400 mb-6">
        Sist oppdatert: {updatedAt}
      </p>

      {/* Direct answer box */}
      <div className="direct-answer">
        <p className="font-medium">{directAnswer}</p>
      </div>

      {/* Table of contents */}
      {toc.length > 0 && (
        <div className="bg-surface-100 rounded-xl p-5 mb-10">
          <p className="font-medium text-sm text-surface-500 uppercase tracking-wide mb-3">
            Innhold
          </p>
          <nav className="toc">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block ${item.level === 3 ? 'pl-4' : ''}`}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Article body */}
      <div className="article-content">{children}</div>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mt-12">
          <h2
            id="ofte-stilte-sporsmal"
            className="font-display text-2xl mb-6"
          >
            Ofte stilte spørsmål
          </h2>
          <FAQ items={faqs} />
        </section>
      )}

      {/* Related articles */}
      {relatedLinks.length > 0 && (
        <section className="mt-12 pt-8 border-t border-surface-200">
          <h2 className="font-display text-xl mb-4">Les også</h2>
          <div className="grid gap-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-surface-100 transition-colors text-surface-700 hover:text-primary-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
