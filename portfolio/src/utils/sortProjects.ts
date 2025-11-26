// Sort projects by 

import { type Project } from "../types/IProject";

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (b.tier !== a.tier) return b.tier - a.tier;

    const dateA = new Date(`${a.date}-01`);
    const dateB = new Date(`${b.date}-01`);
    return dateB.getTime() - dateA.getTime(); // Newest first

    // Flip line above for oldest first:
    // return dateA.getTime() - dateB.getTime(); // Oldest first
  });
}
