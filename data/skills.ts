export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
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
    label: "Web & backend",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    label: "Infra & tools",
    items: ["Modal", "Docker", "AWS", "MongoDB", "SQLite", "Git", "Vercel"],
  },
];
