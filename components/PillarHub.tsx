import Link from 'next/link'
import { IconArrowRight } from './Icons'

interface CoreArticle { title: string; href: string; desc: string }
interface ArticleLink { title: string; href: string }

export default function PillarHub({ breadcrumbName, h1, directAnswer, updatedAt, icon, coreArticles, moreArticles, children }: {
  breadcrumbName: string; h1: string; directAnswer: string; updatedAt: string; icon: React.ReactNode;
  coreArticles: CoreArticle[]; moreArticles: ArticleLink[]; children?: React.ReactNode
}) {
  return (
    <>
      <div className="bg-[#0c1420] text-white">
        <div className="max-w-site mx-auto px-6 py-12">
          <nav className="mb-4"><ol className="flex items-center gap-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Hjem</Link></li>
            <li>/</li><li className="text-white font-medium">{breadcrumbName}</li>
          </ol></nav>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">{icon}</div>
            <h1 className="font-display text-4xl lg:text-5xl font-medium tracking-tight">{h1}</h1>
          </div>
          <p className="text-sm text-gray-400">Sist oppdatert: {updatedAt}</p>
        </div>
      </div>
      <article className="max-w-article mx-auto px-6 py-10">
        <div className="direct-answer">{directAnswer}</div>
        {children}
        {coreArticles.length > 0 && (
          <div className="mb-10">
            <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">Hovedartikler</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {coreArticles.map(a => (
                <Link key={a.href} href={a.href} className="group border border-gray-150 rounded-2xl p-5 hover:border-brand-300 hover:shadow-lg transition-all">
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-brand-700 mb-1">{a.title}</p>
                  <p className="text-sm text-gray-500">{a.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
        {moreArticles.length > 0 && (
          <div>
            <p className="text-xs tracking-widest text-brand-600 font-semibold mb-4 uppercase">Alle artikler</p>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              {moreArticles.map(a => (
                <Link key={a.href} href={a.href} className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
                  <span className="text-[15px] text-gray-700 group-hover:text-gray-900 font-medium">{a.title}</span>
                  <IconArrowRight size={13} className="ml-auto text-gray-300 group-hover:text-brand-500 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">En tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-semibold hover:text-brand-500">IT-Firma.no</a></p>
        </div>
      </article>
    </>
  )
}
