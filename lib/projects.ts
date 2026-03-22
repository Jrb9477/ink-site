/**
 * PROJECTS DATA
 * 
 * This file contains all project data for the Previous Work page.
 * To add, edit, or remove projects, simply modify the array below.
 * 
 * Each project should have:
 * - id: Unique identifier (string)
 * - title: Project name
 * - client: Client or company name
 * - category: One of the predefined categories
 * - year: Year the project was completed
 * - description: Brief description of the project
 * - highlights: Array of key accomplishments (optional)
 * - featured: Set to true to highlight on the main page (optional)
 */

export type ProjectCategory = 
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

// ============================================
// EDIT YOUR PROJECTS BELOW
// ============================================

export const projects: Project[] = [
  {
    id: "managing-program-director",
    title: "Managing Program Director",
    client: "Walt Disney Parks Live Entertainment",
    category: "Executive Leadership",
    year: "2015-2020",
    description: "Led program management for live entertainment across Disney Parks, overseeing multiple shows, events, and entertainment experiences with teams of creative and technical professionals.",
    highlights: [
      "Managed portfolio of live entertainment programs",
      "Coordinated cross-functional teams across multiple projects",
      "Delivered entertainment experiences for millions of guests",
    ],
    featured: true,
  },
  {
    id: "portfolio-executive-producer",
    title: "Portfolio Executive Producer",
    client: "Walt Disney Imagineering - Creative Entertainment",
    category: "Creative Direction",
    year: "2011-2015",
    description: "Served as Executive Producer managing a portfolio of creative entertainment projects, from concept development through implementation at Disney parks worldwide.",
    highlights: [
      "Executive oversight of multiple creative entertainment projects",
      "Collaborated with Imagineering creative and technical teams",
      "Delivered world-class entertainment experiences",
    ],
    featured: true,
  },
  {
    id: "director-show-design",
    title: "Director of Show Design and Production",
    client: "Walt Disney Imagineering",
    category: "Show Design",
    year: "2007-2011",
    description: "Directed show design and production teams, leading the creative and technical development of theatrical experiences and attractions for Disney parks.",
    highlights: [
      "Led show design teams across multiple projects",
      "Integrated theatrical systems with themed environments",
      "Pioneered innovative production methodologies",
    ],
    featured: true,
  },
  {
    id: "producer-creative-entertainment",
    title: "Producer",
    client: "Walt Disney Creative Entertainment",
    category: "Production",
    year: "2004-2007",
    description: "Produced major entertainment productions, managing all aspects of show development from creative conception through opening and ongoing operation.",
    highlights: [
      "Produced large-scale entertainment productions",
      "Managed creative teams and production budgets",
      "Delivered shows on schedule and within budget",
    ],
  },
  {
    id: "production-manager",
    title: "Production Manager",
    client: "Walt Disney Creative Entertainment",
    category: "Production",
    year: "2002-2004",
    description: "Managed production operations for live entertainment shows, coordinating technical elements, schedules, and production teams.",
    highlights: [
      "Coordinated production schedules and resources",
      "Managed technical production teams",
      "Ensured seamless show operations",
    ],
  },
  {
    id: "theatrical-systems-designer",
    title: "Senior Theatrical Systems Designer",
    client: "Walt Disney Imagineering",
    category: "Show Design",
    year: "2002",
    description: "Designed theatrical systems for Disney attractions and entertainment venues, integrating cutting-edge technology with immersive storytelling.",
    highlights: [
      "Designed innovative theatrical systems",
      "Integrated technology with creative vision",
      "Collaborated with Imagineering design teams",
    ],
  },
  {
    id: "technical-director",
    title: "Technical Director",
    client: "Walt Disney Creative Entertainment",
    category: "Live Entertainment",
    year: "2000-2001",
    description: "Served as Technical Director for live entertainment productions, managing all technical aspects of show development and operation.",
    highlights: [
      "Directed technical operations for live shows",
      "Managed lighting, sound, and scenic systems",
      "Led technical rehearsals and show openings",
    ],
  },
]

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all unique categories from projects
 */
export function getCategories(): ProjectCategory[] {
  const categories = new Set(projects.map((p) => p.category))
  return Array.from(categories)
}

/**
 * Get featured projects only
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
