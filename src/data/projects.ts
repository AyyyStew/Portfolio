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
    title: "Finding the Finger",
    summary: "A semantic-search experiment built around perennial philosophy.",
    why: "I wanted to see whether similarities across religious and philosophical texts could be explored computationally rather than discussed only in vibes.",
    learned:
      "Embeddings, data pipelines, web scraping, semantic search, and the difficulty of turning philosophy into a data model.",
    tags: ["Search", "Embeddings", "Data pipelines"],
    projectUrl: "https://findingthefinger.ayyystew.com",
    githubUrl: "https://github.com/AyyyStew/FindingTheFinger_2",
  },
  {
    title: "CandidateChess.com",
    summary: "A chess-training tool focused on identifying candidate moves.",
    why: "I built it because I’m bad at middlegames and wanted something more targeted than solving random tactical puzzles.",
    learned:
      "Distributed processing, chess-engine analysis, queue systems, and how expensive it is to analyze a lot of positions.",
    tags: ["Chess", "Distributed systems", "Analysis"],
    projectUrl: "https://candidatechess.com",
    githubUrl: "https://github.com/AyyyStew/candidate-chess",
  },
  {
    title: "Homelab",
    summary:
      "A self-hosted infrastructure for experimenting with systems, networking, and automation.",
    why: "I built it because I wanted a place to experiment freely without worrying about breaking production systems—or paying cloud bills.",
    learned:
      "Infrastructure as Code, Kubernetes, virtualization, self-hosting, and that operating systems is a skill you only really learn by running them.",
    tags: ["Proxmox", "Kubernetes", "Infrastructure"],
    githubUrl: "https://github.com/AyyyStew/Homelab-Cluster",
  },
  {
    title: "Azure Honeypot",
    summary:
      "A cloud-hosted honeypot that collects and visualizes intrusion attempts.",
    why: "I built it because I wanted to see what actually happens when an exposed system is left on the internet instead of just reading about it.",
    learned:
      "Azure, Microsoft Sentinel, KQL, log analysis, and how noisy the internet really is.",
    tags: ["Azure", "Cybersecurity", "Threat Intelligence"],
    githubUrl: "https://github.com/AyyyStew/AzureHoneyPotLab",
  },
  {
    title: "Rejection Simulator",
    summary:
      "A deliberately soulless web toy that generates fake rejection emails.",
    why: "Built partly to understand how RimWorld assembles procedural descriptions, and partly as a questionable form of exposure therapy.",
    learned:
      "Procedural text generation, browser interfaces, and algorithmic comedy.",
    tags: ["Web", "Text generation", "Fun"],
    githubUrl: "https://github.com/AyyyStew/RejectionSimulator",
    projectUrl: "https://ayyystew.github.io/RejectionSimulator/",
  },
  {
    title: "DungeonMasterAssistant.com",
    summary: "A lightweight web app for running tabletop RPG sessions.",
    why: "I built it because the tools I was using were either bloated, slow, or tried to do everything except the few things I actually needed.",
    learned:
      "Building focused user interfaces, optimizing for simplicity, and that small tools can be more valuable than feature-rich ones.",
    tags: ["Next.js", "Web", "TTRPG"],
    githubUrl: "https://github.com/AyyyStew/DungeonMasterAssistant",
    projectUrl: "https://dungeonmasterassistant.com",
  },
];
