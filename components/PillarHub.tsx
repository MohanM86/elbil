import Link from 'next/link'
import { IconArrowRight } from './Icons'

interface CoreArticle { title: string; href: string; desc: string }
interface ArticleLink { title: string; href: string }

interface PillarHubProps {
  breadcrumbName: string
  h1: string
  directAnswer: string
  updatedAt: string
  icon: React.ReactNode
  coreArticles: CoreArticle[]
  moreArticles: ArticleLink[]
  children?: React.ReactNode
}

export default function PillarHub({
  breadcrumbName, h1, directAnswer, updatedAt, icon,
  coreArticles, moreArticles, children,
}: PillarHubProps) {
  return (
    <>
      {/* Dark header band */}
      <div className="bg-dark-900 border-b border-dark-700/50">
        <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <nav aria-label="Brodsmuler" className="mb-5">
            <ol className="flex items-center gap-1.5 text-[12px] text-light-600">
              <li><Link href="/" className="hover:text-light-300 transition-colors">Hjem</Link></li>
              <li className="flex items-center gap-1.5">
                <span className="text-dark-500">/</span>
                <span className="text-light-400">{breadcrumbName}</span>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-dark-700 text-pulse-500 flex items-center justify-center">
              {icon}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-white tracking-tight">{h1}</h1>
          </div>
          <p className="text-[12px] text-light-600">Sist oppdatert: {updatedAt}</p>
        </div>
      </div>

      {/* Light content */}
      <article className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="direct-answer">{directAnswer}</div>

        {children}

        {coreArticles.length > 0 && (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-light-400 font-medium mb-4">Hovedartikler</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {coreArticles.map((a) => (
                <Link key={a.href} href={a.href}
                  className="group p-4 rounded-xl border border-light-200 bg-white hover:border-pulse-300 hover:shadow-md transition-all">
                  <p className="text-[14px] font-medium text-light-900 group-hover:text-pulse-700 transition-colors">{a.title}</p>
                  <p className="text-[12px] text-light-400 mt-1">{a.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {moreArticles.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-light-400 font-medium mb-4">Alle artikler</p>
            <div className="border border-light-200 rounded-xl overflow-hidden divide-y divide-light-200">
              {moreArticles.map((a) => (
                <Link key={a.href} href={a.href}
                  className="flex items-center gap-2.5 px-4 py-3 hover:bg-pulse-50/30 transition-colors group">
                  <div className="pulse-dot" />
                  <span className="text-[13px] text-light-700 group-hover:text-light-900">{a.title}</span>
                  <IconArrowRight size={11} className="ml-auto text-light-300 group-hover:text-pulse-500 shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* IT-Firma tag */}
        <div className="mt-10 pt-6 border-t border-light-200 flex items-center gap-2">
          <p className="text-[11px] text-light-400">
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
