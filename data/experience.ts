export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Computer Science Instructional Laboratory (CSIL)",
    role: "Software Engineer Intern",
    period: "June 2025 – Present",
    highlights: [
      "Built an AI-powered documentation review platform with Python, FastAPI, Trello, and Slack used across 7 teams and 50+ users.",
      "Integrated Ollama-hosted LLaMA models to generate actionable documentation feedback and reduce manual review cycles.",
      "Shipped a real-time Next.js interface for board/card selection and API-triggered reviews to streamline team workflows."
    ]
  },
  {
    company: "Renest Horizon",
    role: "Software Engineer Intern",
    period: "July 2025 – September 2025",
    highlights: [
      "Designed and deployed a Reddit finance intelligence agent using FastAPI, PRAW, and LLaMA models.",
      "Implemented BFS-style comment traversal with heuristic scoring to surface high-signal personal finance discussions.",
      "Rebuilt key parts of the company web app with Next.js and AWS services to improve UX and deployment scalability."
    ]
  },
  {
    company: "FoodFight",
    role: "Software Engineer Intern",
    period: "June 2023 – September 2023",
    highlights: [
      "Implemented federated search in React to unify restaurant and sports content into a single ranked results flow.",
      "Built reusable UI components for navigation, tabs, and settings pages using Sass/CSS with a strong focus on consistency.",
      "Collaborated with product and design to refine interaction details, improve discoverability, and reduce user friction."
    ]
  },
  {
    company: "University Research Lab",
    role: "Research Assistant",
    period: "2024 – 2025",
    highlights: [
      "Prototyped and evaluated data/ML workflows to support early-stage research experiments.",
      "Built scripts and reproducible analysis pipelines to speed up iteration and improve result reliability.",
      "Presented findings in weekly research discussions and translated technical outcomes into clear next steps."
    ]
  }
];

