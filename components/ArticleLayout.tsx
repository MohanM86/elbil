import Link from 'next/link'
import type { FAQItem, TOCItem } from '@/lib/config'
import FAQ from './FAQ'
import { IconArrowRight } from './Icons'

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
  h1, directAnswer, breadcrumbs, toc, children, faqs, relatedLinks, updatedAt,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Dark header */}
      <div className="bg-dark-900 border-b border-dark-700/50">
        <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <nav aria-label="Brødsmuler" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[16px] text-light-600">
              <li><Link href="/" className="hover:text-light-300 transition-colors">Hjem</Link></li>
              {breadcrumbs.map((c) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <span className="text-dark-500">/</span>
                  <Link href={c.href} className="hover:text-light-300 transition-colors">{c.name}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-tight mb-2">{h1}</h1>
          <p className="text-[16px] text-light-600">Sist oppdatert: {updatedAt}</p>
        </div>
      </div>

      {/* Light article */}
      <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="direct-answer">
          <p className="font-medium">{directAnswer}</p>
        </div>

        {toc.length > 0 && (
          <div className="bg-light-100 rounded-xl p-5 mb-8 border border-light-200">
            <p className="text-[16px] uppercase tracking-[0.2em] text-light-400 font-medium mb-3">Innhold</p>
            <nav className="toc">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block ${item.level === 3 ? 'pl-4' : ''}`}>
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        )}

        <div className="article-content">{children}</div>

        {faqs.length > 0 && (
          <section className="mt-10">
            <h2 id="ofte-stilte-sporsmal" className="font-display text-xl mb-4">Ofte stilte spørsmål</h2>
            <FAQ items={faqs} />
          </section>
        )}

        {relatedLinks.length > 0 && (
          <section className="mt-10 pt-6 border-t border-light-200">
            <p className="text-[16px] uppercase tracking-[0.2em] text-light-400 font-medium mb-4">Les også</p>
            <div className="border border-light-200 rounded-xl overflow-hidden divide-y divide-light-200">
              {relatedLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="flex items-center gap-2.5 px-4 py-3 hover:bg-pulse-50/30 transition-colors group">
                  <div className="pulse-dot" />
                  <span className="text-[17px] text-light-700 group-hover:text-light-900">{link.title}</span>
                  <IconArrowRight size={11} className="ml-auto text-light-300 group-hover:text-pulse-500 shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* IT-Firma tag */}
        <div className="mt-8 pt-6 border-t border-light-200 flex items-center gap-2">
          <p className="text-[17px] text-light-400">
            En tjeneste fra{' '}
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-pulse-600 hover:text-pulse-500 font-medium">
              IT-Firma.no
            </a>
          </p>
        </div>
      </article>
    </>
  )
}
