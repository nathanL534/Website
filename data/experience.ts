export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Naive (YC X25, $28.5M Series A)",
    role: "Early Engineering Hire",
    period: "March 2026 – Present",
    highlights: [
      "Shipped the production container runtime for all customer AI agents (30K users at launch), securely isolating each customer's agents and credentials, with live identity reloads that update permissions without a restart.",
      "Cut billed virtual machine time over 90% per agent session by routing an average of 83% of agent commands into an in-process isolate and creating VMs only on demand.",
      "Cut per-customer infrastructure cost 67% by packing three isolated customer containers onto each VM instead of running one VM per customer.",
      "Shipped a video-clipping pipeline at 3× lower cost per job than a third-party vendor by writing an MP4 byte-range parser that cut per-job bandwidth 75–85%, running on a lease-based job queue with database-enforced tenant concurrency."
    ]
  },
  {
    company: "Computer Science Instructional Laboratory (CSIL)",
    role: "Software Engineer Intern",
    period: "June 2025 – Present",
    highlights: [
      "Built an AI documentation platform (Python, FastAPI, Slack/Trello APIs) that assembles a task's documentation from tickets and docs scattered across tools, adopted by 7 teams and 50 active users.",
      "Cut Trello card verification time 40% by integrating gpt-4o-mini (migrated from self-hosted LLaMA 3 on Ollama) with a React/Next.js frontend.",
      "Cut follow-up questions 75% by building a hybrid retrieval layer over related documents, combining vector ranking with 2-hop graph traversal."
    ]
  },
  {
    company: "UChicago APEX Labs",
    role: "Research Assistant",
    period: "December 2025 – March 2026",
    highlights: [
      "Built an automated two-pass OCR correction pipeline for a scanned-document archive, replacing page-by-page manual proofreading; 96% of 1,410 pages reached ≥0.99 similarity to the human reference.",
      "Designed a confidence-scoring pass that flags uncertain pages for human review, validated at 84% agreement between independent reviewers across 46K flagged errors."
    ]
  },
  {
    company: "Renest Horizon",
    role: "Software Engineer Intern",
    period: "July 2025 – September 2025",
    highlights: [
      "Designed and deployed a Reddit finance intelligence agent using FastAPI, PRAW, and LLaMA models, analyzing 2,500+ posts monthly.",
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
