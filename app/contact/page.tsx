import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Contact | Inconceivable Ink",
  description: "Get in touch with Kraig Blythe at Inconceivable Ink. Let's discuss how we can help bring your creative vision to life.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Let&apos;s Create Something Unbelievable
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                Ready to discuss your next project? Reach out to start a conversation 
                about how Inconceivable Ink can help deliver your vision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Kraig Blythe */}
                  <div className="p-8 bg-card border border-border rounded-lg">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Kraig Blythe</h3>
                    <p className="text-muted-foreground mb-6">President, Inconceivable Ink</p>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:Kraig@Inconceivable.Ink"
                        className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">Kraig@Inconceivable.Ink</p>
                        </div>
                      </a>
                      
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium text-foreground">Los Angeles, California</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-8 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Ready to Start?</h3>
                    <p className="text-muted-foreground mb-6">
                      Send an email to begin the conversation. We typically respond 
                      within 24-48 hours.
                    </p>
                    <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <a href="mailto:Kraig@Inconceivable.Ink">
                        Send Email
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">What to Expect</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Initial Conversation</h3>
                      <p className="text-muted-foreground">
                        We&apos;ll schedule a call to discuss your project, goals, and how 
                        Inconceivable Ink can help bring your vision to life.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Project Assessment</h3>
                      <p className="text-muted-foreground">
                        Together we&apos;ll evaluate your needs, timeline, and resources to 
                        develop a tailored approach for your project.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Proposal & Engagement</h3>
                      <p className="text-muted-foreground">
                        We&apos;ll provide a clear proposal outlining scope, deliverables, 
                        and how we&apos;ll work together to achieve your goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Delivering the Unbelievable</h3>
                      <p className="text-muted-foreground">
                        With over 30 years experience in the industry, we bring proven expertise 
                        to help you create extraordinary results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Services Quick Reference */}
                <div className="mt-12 p-6 bg-secondary/5 border border-border rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Services Include:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Creative Direction",
                      "Production Management",
                      "Show Design",
                      "Executive Consulting",
                      "Project Leadership",
                      "Strategic Planning",
                    ].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Questions? Let&apos;s Talk.
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              No project is too complex. Reach out today.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="mailto:Kraig@Inconceivable.Ink">
                Email Kraig Blythe
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
