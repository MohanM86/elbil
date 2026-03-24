import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nytt om elbil — Siste oppdateringer',
  description: 'Siste nyheter og oppdateringer om elbil i Norge. Regelendringer, nye modeller, prisendringer og ladeinfrastruktur.',
  alternates: { canonical: 'https://elbil.io/nytt' },
}

// This page serves as a freshness signal index
// In production, these would be pulled from a CMS or markdown files
const updates = [
  {
    date: '20. mars 2026',
    title: 'Oppdatert: Ladepris-oversikt for alle store operatører',
    description: 'Vi har oppdatert prissammenligningen for hurtiglading med nye priser fra Mer, Circle K og Recharge.',
    href: '/ladepris-elbil',
    tag: 'Prisoppdatering',
  },
  {
    date: '18. mars 2026',
    title: 'Ny artikkel: Elbil besparelseskalkulator',
    description: 'Regn ut nøyaktig hvor mye du sparer med elbil vs fossilbil. Inkluderer drivstoff, bompenger, vedlikehold og firmabilfordel.',
    href: '/verktoy/besparelseskalkulator',
    tag: 'Nytt verktøy',
  },
  {
    date: '15. mars 2026',
    title: 'Oppdatert: Elbil batterigaranti — Alle merker',
    description: 'Ny oversikt over batterigarantier for 2026, inkludert oppdaterte vilkår fra BYD og NIO.',
    href: '/artikler/elbil-batteri-garanti',
    tag: 'Oppdatering',
  },
  {
    date: '10. mars 2026',
    title: 'Ny artikkel: Rekkeviddeberegner lansert',
    description: 'Beregn reell rekkevidde for din elbil basert på sesong, hastighet og tilhenger. Med norske vinterdata.',
    href: '/verktoy/rekkevidde',
    tag: 'Nytt verktøy',
  },
  {
    date: '5. mars 2026',
    title: 'Oppdatert: Elbil avgifter i Norge 2026',
    description: 'Komplett oversikt over gjeldende avgiftsregler for elbil, inkludert momsendringer og bompenger.',
    href: '/artikler/elbil-avgifter-norge',
    tag: 'Regelendring',
  },
  {
    date: '1. mars 2026',
    title: 'Oppdatert: Beste elbil 2026 — Ny modellrangering',
    description: 'Oppdatert rangering med Mercedes CLA Electric og Kia EV3 inkludert.',
    href: '/beste-elbil-2026',
    tag: 'Oppdatering',
  },
]

const tagColors: Record<string, string> = {
  'Prisoppdatering': 'bg-amber-100 text-amber-800',
  'Nytt verktøy': 'bg-primary-100 text-primary-800',
  'Oppdatering': 'bg-blue-100 text-blue-800',
  'Regelendring': 'bg-red-100 text-red-800',
  'Ny artikkel': 'bg-purple-100 text-purple-800',
}

export default function NyttPage() {
  return (
    <div className="max-w-article mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <nav aria-label="Brødsmuler" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-surface-400">
          <li><Link href="/" className="hover:text-surface-700">Hjem</Link></li>
          <li className="flex items-center gap-1.5"><span>/</span><span>Nytt</span></li>
        </ol>
      </nav>

      <h1 className="font-display text-4xl sm:text-5xl text-surface-900 mb-4">
        Nytt på elbil.io
      </h1>
      <p className="text-lg text-surface-500 mb-10">
        Siste oppdateringer, nye artikler og verktøy. Vi holder innholdet oppdatert for norske elbileiere.
      </p>

      <div className="space-y-4">
        {updates.map((update, i) => (
          <Link
            key={i}
            href={update.href}
            className="block p-5 rounded-xl border border-surface-200 bg-white hover:border-primary-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-surface-400">{update.date}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[update.tag] || 'bg-surface-100 text-surface-600'}`}>
                {update.tag}
              </span>
            </div>
            <h2 className="font-display text-lg text-surface-900 group-hover:text-primary-700 transition-colors mb-1">
              {update.title}
            </h2>
            <p className="text-sm text-surface-500">{update.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
