/**
 * VERSION & CHANGELOG DATA
 *
 * Edit the current version and add changelog entries here.
 *
 * To bump the version: update `currentVersion` below.
 *
 * To add a changelog entry: copy the template, fill in the fields,
 * and add it to the TOP of the `changelog` array (newest first).
 *
 * ============================================================
 * CHANGELOG ENTRY TEMPLATE (copy into the array, newest first):
 * ============================================================
 *
 * {
 *   version: "1.1.0",          // Version this entry describes (required)
 *   date: "2026-07-16",        // Release date, YYYY-MM-DD (required)
 *   changes: [                 // List of changes in this release (required)
 *     "Added a new feature",
 *     "Fixed a bug",
 *   ],
 * },
 *
 * ============================================================
 */

// The current version shown at the top of the page.
export const currentVersion = "1.0.0"

export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
}

// ============================================================
// CHANGELOG — add new entries to the TOP (newest first)
// ============================================================
export const changelog: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "2026-07-16",
    changes: [
      "Initial launch of the Inconceivable Ink website.",
      "Added Home, Previous Projects, and Contact pages.",
      "Added custom 404 page and external site redirects.",
    ],
  },
]
