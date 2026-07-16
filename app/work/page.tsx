import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/lib/projects"
import { ProjectGrid } from "@/components/project-grid"

export const metadata = {
  title: "Previous Projects | Inconceivable Ink",
  description: "Projects delivered by Inconceivable Ink across the entertainment industry.",
}

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Previous Projects
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                A record of extraordinary entertainment experiences delivered across
                theme parks, live shows, and immersive productions.
              </p>
            </div>
          </div>
        </section>

        {/* Projects or Empty State */}
        <section className="py-24 bg-background min-h-64">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {projects.length > 0 ? (
              <ProjectGrid projects={projects} />
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No public projects available at this time.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
