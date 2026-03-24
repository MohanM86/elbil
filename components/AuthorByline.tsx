import Link from 'next/link'

export interface AuthorInfo {
  name: string
  role: string
  slug: string
}

interface AuthorBylineProps {
  author: AuthorInfo
  reviewer?: AuthorInfo
  publishedAt: string
  updatedAt: string
}

export default function AuthorByline({
  author,
  reviewer,
  publishedAt,
  updatedAt,
}: AuthorBylineProps) {
  return (
    <div className="flex flex-col gap-3 py-4 mb-6 border-b border-surface-200">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className="text-surface-600">
            Skrevet av{' '}
            <span className="font-medium text-surface-800">{author.name}</span>
            <span className="text-surface-400">, {author.role}</span>
          </span>
        </div>
        {reviewer && (
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span className="text-surface-600">
              Fagsjekket av{' '}
              <span className="font-medium text-surface-800">{reviewer.name}</span>
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-surface-400">
        <span>Publisert: {publishedAt}</span>
        <span>Sist oppdatert: {updatedAt}</span>
        <Link href="/slik-jobber-vi" className="hover:text-primary-700 transition-colors underline">
          Slik jobber vi
        </Link>
      </div>
    </div>
  )
}
