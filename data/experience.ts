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
    company: "UChicago APEX Labs",
    role: "Research Assistant",
    period: "December 2025 – Present",
    highlights: [
      "Improved OCR extraction quality with an automated two-pass correction and confidence-scoring pipeline, reaching 96.0% of 1,410 pages at cosine similarity >= 0.99 and 83.53% agreement across 45,838 reviewed errors.",
      "Fine-tuned a style-transfer model from neutral-to-source text pairs, deployed Azure AI Search with semantic embeddings, and built grounded generation plus text-to-speech output for source-based responses."
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
  }
];
