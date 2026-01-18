// src/types.ts

// Link types to control icons and styling
export type LinkType = 'github' | 'game' | 'live' | 'other';

// 2. Define the structure of a single link
export interface ProjectLink {
  url: string;
  type: LinkType;
  label?: string; // Optional: To override default text (e.g., "Visit V1")
}

export interface Project {
    id: number,
    tier: number; // used to order display (descendent). lower means less impressive, higher will display first.
    date: string; // Format: "2024-07" (year + month)
    featured: boolean, // display at the "ProjectsSection" on the Home page
    title: string;
    images: Array<string>;
    categories: Array<string>;
    summary: string, // short text for the card version description
    description: string; // larger text to display in the focused project view
    video?: string; // embeded youtube demo video link

    links: ProjectLink[]; // array of links with type and url
  }
  