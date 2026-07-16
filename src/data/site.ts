export const siteConfig = {
  name: "William Steward",
  email: "alexsteward98@gmail.com",
  github: "https://github.com/AyyyStew",
  linkedin: "https://www.linkedin.com/in/william-the-steward/",
  title: "William Steward | Portfolio",
  description: "A portfolio site for William Steward.",
  intro: {
    eyebrow: "William Steward",
    heading:
      "I build technical solutions to problems that annoy me or questions I cannot stop thinking about.",
    body: [
      "My background spans software, infrastructure, embedded systems, networking, cybersecurity, and research. Different problems demand different tools.",
      "Right now I’m especially interested in practical security, infrastructure, automation, and unusual technical problems.",
    ],
  },
  services: {
    heading: "Services",
    title: "Things I Can Help With",
    body: [
      "I enjoy solving technical problems, whether that's building something new, fixing something old, or figuring out why something refuses to work in the first place.",
      "From cloud infrastructure and automation to custom tools and everyday IT headaches, I prefer practical solutions over buzzwords. If the job is too small for a consulting firm, or you just need someone to finally fix the printer, I'd be happy to take a look.",
    ],
    items: [
      {
        title: "Automation & Custom Tools",
        description:
          "Small scripts, utilities, and applications that eliminate repetitive work and solve specific problems.",
      },
      {
        title: "Infrastructure & Systems",
        description:
          "Linux, Windows, networking, virtualization, cloud, self-hosting, and keeping systems running reliably.",
      },
      {
        title: "Technical Problem Solving",
        description:
          "Troubleshooting, research, and tackling the kinds of technical problems that don't come with a straightforward answer.",
      },
    ],
  },
  skills: {
    heading: "Skills",
    note: "My go to toolkit for solving problems.",
  },
  professionalProjects: {
    heading: "Professional Projects",
    note: "A few examples from professional work.",
    disclaimer:
      "Some details have been left out to respect the people and companies I worked with.",
    empty: "Professional project notes coming soon.",
  },
  projects: {
    heading: "Personal Projects",
    note: "A few things I’ve built.",
  },
  contact: {
    heading: "Contact",
    note: "The best way to reach me is by email.",
  },
} as const;
