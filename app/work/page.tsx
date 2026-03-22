import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectGrid } from "@/components/project-grid"
import { projects, getCategories } from "@/lib/projects"

export const metadata = {
  title: "Previous Work | Inconceivable Ink",
  description: "Explore the portfolio of projects delivered by Kraig Blythe across 20+ years in the entertainment industry at Disney and beyond.",
}

export default function WorkPage() {
  const categories = getCategories()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Previous Work
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                Over two decades of delivering extraordinary entertainment experiences 
                across Walt Disney Parks, Imagineering, and Creative Entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-12 bg-muted border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-background text-foreground text-sm rounded-full border border-border"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ProjectGrid projects={projects} />
          </div>
        </section>

        {/* Note about editing */}
        <section className="py-16 bg-muted">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              A Career of Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These projects represent highlights from a distinguished career at 
              The Walt Disney Company, spanning live entertainment, show design, 
              production management, and executive leadership across multiple divisions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
