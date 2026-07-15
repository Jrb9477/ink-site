import Link from "next/link"
import { externalLinks } from "@/lib/external-links"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Previous Projects", href: "/work" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-white.png"
                alt="Inconceivable Ink"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Delivering the Unbelievable. Creative consulting for theme parks and entertainment experiences.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-primary">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {externalLinks.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-primary">External Sites</h3>
              <nav className="flex flex-col gap-2">
                {externalLinks.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/go/${link.slug}`}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <div className="text-sm text-secondary-foreground/70">
              <p>Kraig Blythe</p>
              <a 
                href="mailto:Kraig@Inconceivable.Ink"
                className="transition-colors hover:text-primary"
              >
                Kraig@Inconceivable.Ink
              </a>
              <p className="mt-2">Los Angeles, California</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Inconceivable Ink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
