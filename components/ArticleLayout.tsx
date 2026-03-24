import Link from 'next/link'
import type { FAQItem, TOCItem } from '@/lib/config'
import FAQ from './FAQ'
import { IconArrowRight } from './Icons'

export default function ArticleLayout({ h1, directAnswer, metaTitle, breadcrumbs, toc, children, faqs, relatedLinks, updatedAt }: {
  h1: string; directAnswer: string; metaTitle: string; breadcrumbs: { name: string; href: string }[];
  toc: TOCItem[]; children: React.ReactNode; faqs: FAQItem[]; relatedLinks: { title: string; href: string }[]; updatedAt: string
}) {
  return (
    <>
      <div className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-10">
          <nav className="mb-4"><ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Hjem</Link></li>
            {breadcrumbs.map(c => <li key={c.href} className="flex items-center gap-2"><span>/</span><Link href={c.href} className="hover:text-white">{c.name}</Link></li>)}
          </ol></nav>
          <h1 className="font-display text-3xl lg:text-4xl font-medium tracking-tight mb-2">{h1}</h1>
          <p className="text-sm text-gray-400">Sist oppdatert: {updatedAt}</p>
        </div>
      </div>
      <article className="max-w-article mx-auto px-6 py-10">
        <div className="direct-answer"><p className="font-medium">{directAnswer}</p></div>
        {toc.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <p className="text-xs tracking-widest text-brand-600 font-semibold mb-3 uppercase">Innhold</p>
            <nav className="toc">{toc.map(t => <a key={t.id} href={`#${t.id}`} className={`block ${t.level === 3 ? 'pl-4' : ''}`}>{t.text}</a>)}</nav>
          </div>
        )}
        <div className="article-content">{children}</div>
        {faqs.length > 0 && (
          <section className="mt-10">
            <h2 id="ofte-stilte-sporsmal" className="font-display text-2xl mb-5">Ofte stilte spørsmål</h2>
            <FAQ items={faqs} />
          </section>
        )}
        {relatedLinks.length > 0 && (
          <section className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">Les også</p>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              {relatedLinks.map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
                  <span className="text-[15px] text-gray-700 group-hover:text-gray-900 font-medium">{l.title}</span>
                  <IconArrowRight size={13} className="ml-auto text-gray-300 group-hover:text-brand-500 shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        )}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">En tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:text-brand-500">IT-Firma.no</a></p>
        </div>
      </article>
    </>
  )
}
