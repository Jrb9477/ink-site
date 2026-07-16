/**
 * EXTERNAL LINKS CONFIGURATION
 * ============================
 * 
 * Add your external site redirects here.
 * Each entry creates a redirect page at /go/[slug] that redirects to the external URL.
 * 
 * Example: { slug: "linkedin", name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" }
 * This creates a redirect at /go/linkedin that goes to your LinkedIn profile.
 * 
 * TO ADD A NEW EXTERNAL LINK:
 * 1. Add a new object to the externalLinks array below
 * 2. Set the slug (used in the URL, e.g., "linkedin" for /go/linkedin)
 * 3. Set the name (display name shown in the footer)
 * 4. Set the url (the external URL to redirect to)
 * 
 * TO REMOVE A LINK:
 * Simply delete or comment out the object from the array
 */

export interface ExternalLink {
  slug: string
  name: string
  url: string
}

export const externalLinks: ExternalLink[] = [
  // ===========================================
  // ADD YOUR EXTERNAL LINKS BELOW
  // ===========================================
  
  {
    slug: "kraig-linkedin",
    name: "Kraig's LinkedIn",
    url: "https://www.linkedin.com/in/kraigblythe/",
  },
  
  // Example Twitter/X link:
   {
     slug: "company-linkedin",
     name: "Company's LinkedIn",
     url: "https://google.com",
   },
  
  // Example IMDb link:
  // {
  //   slug: "imdb",
  //   name: "IMDb",
  //   url: "https://imdb.com/name/your-id",
  // },

  // ===========================================
  // END OF EXTERNAL LINKS
  // ===========================================
]

/**
 * Get an external link by its slug
 */
export function getExternalLinkBySlug(slug: string): ExternalLink | undefined {
  return externalLinks.find((link) => link.slug === slug)
}
