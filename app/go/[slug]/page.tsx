import { redirect, notFound } from "next/navigation"
import { getExternalLinkBySlug, externalLinks } from "@/lib/external-links"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return externalLinks.map((link) => ({
    slug: link.slug,
  }))
}

export default async function ExternalRedirectPage({ params }: PageProps) {
  const { slug } = await params
  const link = getExternalLinkBySlug(slug)

  if (!link) {
    notFound()
  }

  redirect(link.url)
}
