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

//export const projects: Project[] = [
  //{
    //id: "unique-project-id",          // Wrapped in quotes
    //title: "Project Title",            // Wrapped in quotes
    //client: "Client or Company Name",  // Wrapped in quotes
    //category: "Theme Park",            // Wrapped in quotes
    //year: "2024",                      // Wrapped in quotes
    //description: "A short paragraph describing what the project was and what was accomplished.", // Wrapped in quotes
    //highlights: [
      //"Key accomplishment or detail,", // Wrapped in quotes
      //"Another highlight,"             // Wrapped in quotes
    //],
    //featured: true,                    // Boolean (no quotes)
  //},
//]; // The closing bracket must go at the very end

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
