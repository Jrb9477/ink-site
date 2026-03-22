import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Previous Work", href: "/work" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Inconceivable Ink"
              width={180}
              height={45}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/70 max-w-xs">
              Delivering the Unbelievable. Creative consulting with 20+ years of entertainment industry expertise.
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

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-primary">Contact</h3>
            <div className="text-sm text-secondary-foreground/70">
              <p>Kraig Blythe</p>
              <a 
                href="mailto:contact@Inconceivable.ink"
                className="transition-colors hover:text-primary"
              >
                contact@Inconceivable.ink
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
