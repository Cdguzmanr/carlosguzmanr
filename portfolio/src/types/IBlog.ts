// src/types.ts
export interface Blog {
    id: number,
    display: boolean, // display or not at the About page. This could be helpfull when I' in the process of creating a new story and dont want to publish it yet.
    title: string; // Main title of the story
    short: string; // Short version of the title. Usefull to display in a more packt space. I expect to use this if I implement a smart scroller to navigate faster trough the stories
    images: Array<string>; // List of images' urls to display with the story 
    body: string; // Main content of the story. It could be very large paragraphs, incluing markup
    links: BlogLink[]; // links to articles or media related to the story. This should be "dictionary" instead of a Array of string, so we can store the title of the link plus the link itself.
  }
  
  export interface BlogLink {
    title: string;  // Title of the attachment
    url: string;    // URL of the article/media
    image?: string; // Optional image URL to display alongside the title
  }