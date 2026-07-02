export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "Java", "SQL"],
  },
  {
    label: "ML & inference",
    items: [
      "PyTorch",
      "torch.compile",
      "CUDA graphs",
      "GRPO fine-tuning",
      "Embeddings & vector search",
    ],
  },
  {
    label: "Web",
    items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    label: "Infra & tools",
    items: ["Modal", "Docker", "PostgreSQL", "SQLite", "Git", "Vercel"],
  },
];
