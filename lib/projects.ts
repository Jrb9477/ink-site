/**
 * PROJECTS DATA
 *
 * To add a new project, copy the template below, uncomment it,
 * fill in the fields, and add it to the `projects` array.
 *
 * ============================================================
 * PROJECT TEMPLATE (copy and uncomment to add a project):
 * ============================================================
 *
 * {
 *   id: "unique-project-id",          // Unique slug, no spaces (required)
 *   title: "Project Title",            // Display name of the project (required)
 *   client: "Client or Company Name",  // Who it was for (required)
 *   category: "Theme Park",            // See ProjectCategory type below (required)
 *   year: "2024",                      // Year completed, or "2022–2024" for a range (required)
 *   description: "A short paragraph describing what the project was and what was accomplished.", // (required)
 *   highlights: [                      // Key bullet points — remove this block if not needed
 *     "Key accomplishment or detail",
 *     "Another highlight",
 *   ],
 *   featured: true,                    // Set to true to mark as a featured project (optional)
 * },
 *
 * ============================================================
 */

export type ProjectCategory =
  | "Theme Park"
  | "Live Entertainment"
  | "Show Design"
  | "Production"
  | "Creative Direction"
  | "Executive Leadership"

export interface Project {
  id: string
  title: string
  client: string
  category: ProjectCategory
  year: string
  description: string
  highlights?: string[]
  featured?: boolean
}

// ============================================================
// ADD YOUR PROJECTS HERE
// ============================================================

export const projects: Project[] = [
  // Projects will appear here once added.
  // See the template at the top of this file for instructions.
]
{
    id: unique-project-id,          // Unique slug, no spaces (required)
    title: Project Title,            // Display name of the project (required)
    client: Client or Company Name,  // Who it was for (required)
    category: Theme Park,            // See ProjectCategory type below (required)
    year: 2024,                      // Year completed, or "2022–2024" for a range (required)
    description: A short paragraph describing what the project was and what was accomplished., // (required)
    highlights: [                      // Key bullet points — remove this block if not needed
      Key accomplishment or detail,
      Another highlight,
    ],
    featured: true,                    // Set to true to mark as a featured project (optional)
  },


// ============================================================
// HELPER FUNCTIONS — no need to edit below this line
// ============================================================

export function getCategories(): ProjectCategory[] {
  const categories = new Set(projects.map((p) => p.category))
  return Array.from(categories)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
