import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Lightbulb, Target } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Strategic creative vision for theme parks, live shows, and immersive entertainment experiences.",
  },
  {
    icon: Users,
    title: "Production Management",
    description: "End-to-end production oversight from concept development through execution and delivery.",
  },
  {
    icon: Lightbulb,
    title: "Show Design",
    description: "Innovative show design and theatrical systems expertise for world-class entertainment venues.",
  },
  {
    icon: Target,
    title: "Executive Consulting",
    description: "Strategic problem-solving and leadership consulting for entertainment organizations of any scale.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground pt-20">
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo.png"
                alt="Inconceivable Ink"
                width={400}
                height={100}
                className="h-20 md:h-28 w-auto brightness-0 invert"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance">
              Creative Consulting for
              <span className="text-primary block mt-2">Extraordinary Experiences</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-secondary-foreground/80 mb-12 leading-relaxed">
              Inconceivable Ink brings decades of hands-on expertise to help you deliver the unthinkable, from start to end or somewhere inbetween.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/work">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
           <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-secondary-foreground/30 text-black hover:bg-secondary-foreground/10"
              > 
              <Link href="/contact">Get in Touch</Link> 
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive consulting services built on decades of hands-on experience
                in the entertainment industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Led by Kraig Blythe
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A seasoned executive and creative leader with an extraordinary career
                  in entertainment. Kraig has directed and produced large-scale theme park
                  experiences, live shows, and immersive attractions from the ground up.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  His expertise spans show design, production management, and executive leadership —
                  combining creative vision with technical precision and operational mastery
                  to deliver experiences that truly captivate audiences.
                </p>
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact">
                    Work With Kraig
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Areas of Expertise</h3>
                <div className="space-y-4">
                  {[
                    "Executive Leadership",
                    "Strategic Planning & Business Development",
                    "Large-Scale Program & Project Management",
                    "Theme Park & Entertainment Development",
                    "Global Team & Stakeholder Leadership",
                    "Contract Negotiation & Strategic Procurement",
                    "Technical Design & Systems Integration",
                    "Organizational Development & Process Improvement",
                    "Budget, Capital Planning & Financial Management",
                    "Government Relations & Regulatory Compliance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something <span className="text-primary">Unbelievable</span>?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              {"Let's discuss how Inconceivable Ink can help bring your vision to life."}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
