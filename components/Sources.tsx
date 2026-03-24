export interface SourceItem {
  name: string
  url?: string
  description: string
}

export default function Sources({ items }: { items: SourceItem[] }) {
  return (
    <section className="mt-12 pt-8 border-t border-surface-200">
      <h2 className="font-display text-xl mb-4" id="kilder">Kilder</h2>
      <div className="grid gap-3">
        {items.map((source, i) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <span className="shrink-0 w-5 h-5 rounded bg-surface-100 flex items-center justify-center text-xs font-medium text-surface-500 mt-0.5">
              {i + 1}
            </span>
            <div>
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary-700 hover:text-primary-800 underline"
                >
                  {source.name}
                </a>
              ) : (
                <span className="font-medium text-surface-800">{source.name}</span>
              )}
              <span className="text-surface-500"> — {source.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
