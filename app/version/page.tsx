import { currentVersion, changelog } from "@/lib/version"

// Keep this page out of search engines and unlinked from the site.
export const metadata = {
  title: "Version",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function VersionPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24 lg:px-8">
        {/* Current version */}
        <div className="mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Version</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            v{currentVersion}
          </h1>
        </div>

        {/* Changelog */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-6 border-b border-border pb-3">
            Changelog
          </h2>

          <ol className="flex flex-col gap-10">
            {changelog.map((entry) => (
              <li key={entry.version}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xl font-bold text-foreground">v{entry.version}</span>
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {entry.changes.map((change, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  )
}
