export type Project = {
  title: string;
  summary: string;
  why: string;
  learned: string;
  tags?: string[];
  projectUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "CandidateChess.com",
    summary: "A chess-training tool focused on identifying candidate moves.",
    why: "I built it because I’m bad at middlegames and wanted something more targeted than solving random tactical puzzles.",
    learned:
      "Distributed processing, chess-engine analysis, queue systems, and how expensive it is to analyze a lot of positions.",
    tags: ["Chess", "Distributed systems", "Analysis"],
  },
  {
    title: "Finding the Finger",
    summary: "A semantic-search experiment built around perennial philosophy.",
    why: "I wanted to see whether similarities across religious and philosophical texts could be explored computationally rather than discussed only in vibes.",
    learned:
      "Embeddings, data pipelines, web scraping, semantic search, and the difficulty of turning philosophy into a data model.",
    tags: ["Search", "Embeddings", "Data pipelines"],
  },
  {
    title: "Rejection Simulator",
    summary:
      "A deliberately soulless web toy that generates fake rejection emails.",
    why: "Built partly to understand how RimWorld assembles procedural descriptions, and partly as a questionable form of exposure therapy.",
    learned:
      "Procedural text generation, browser interfaces, and algorithmic comedy.",
    tags: ["Web", "Text generation", "Fun"],
  },
];
