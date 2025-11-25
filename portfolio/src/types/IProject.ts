// src/types.ts
export interface Project {
    id: number,
    tier: number; // used to order display (descendent). lower means less impressive, higher will display first.
    date: string; // Format: "2024-07" (year + month)
    featured: boolean, // display at the "ProjectsSection" on the Home page
    title: string;
    images: Array<string>;
    categories: Array<string>;
    summary: string, // short text for the card version descriptio
    description: string; // larger text to display in the focused project view
    video: string; // embeded youtube video link
    link: string; // link to the git-hub repo with the source code 
    play: string; // link to try videogame online
  }
  