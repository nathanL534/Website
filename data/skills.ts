export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C", "Go", "Java", "TypeScript"],
  },
  {
    label: "AI / ML",
    items: ["RAG", "MCP", "LoRA Fine-Tuning", "PyTorch", "NumPy"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["AWS", "Docker", "Terraform", "Linux", "Git", "PostgreSQL"],
  },
];
