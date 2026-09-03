export type Project = {
  slug: string;
  name: string;
  summary: string;
  /** Verified, measurable outcome. Keep numbers exact. */
  result?: string;
  /** Short annotation, e.g. a placing or context. */
  note?: string;
  tech: string[];
  demo?: string;
  github?: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "librarian",
    name: "librarian",
    summary:
      "MCP server that gives AI agents personal context on demand. Vector recall with a 4-factor re-rank, running as a warm local daemon so lookups stay fast enough for blocking hooks.",
    result: "$0 embedding cost — local bge-small-en-v1.5 with sqlite-vec",
    note: "Currently building",
    tech: ["MCP", "sqlite-vec", "bge-small-en-v1.5", "Vector search"],
    github: "https://github.com/nathanL534/librarian",
  },
  {
    slug: "miso",
    name: "Miso",
    summary:
      "Profiled MisoTTS end-to-end, traced the bottleneck to the decoder, and applied torch.compile with CUDA graphs. Found a silent eval bug that could have faked the speedup — re-verified after fixing it.",
    result: "4.10x speedup on an A100 — RTF 4.04 → 0.985, real-time streaming speed",
    tech: ["PyTorch", "torch.compile", "CUDA graphs", "Profiling"],
  },
  {
    slug: "dojo",
    name: "Dojo",
    note: "GRPO post-training",
    summary:
      "GRPO teacher-trainer on Modal. Runs train → adapter → held-out eval end-to-end; gains are measured on data the model never trained on. Diagnosed a curriculum-collapse reward hack that survived GRPO normalization.",
    result: "+0.014 held-out eval delta on Qwen3-4B (temp 1.1, G=8)",
    tech: ["Modal", "GRPO", "Adapters", "Qwen3-4B", "Evals"],
  },
  {
    slug: "slipstream",
    name: "Slipstream",
    summary:
      "Shared memory for browser agents — stores scored action traces so one agent's solution can be reused by the next. Only the best path per task is kept.",
    result: "Cut average task time 49% and steps up to 44% on repeat runs",
    note: "3rd place + Best Use of Real-Time Data, YC Browser Use hackathon",
    tech: ["Python", "Vector search", "Agent traces"],
  },
];

export const earlierProjects: Project[] = [
  {
    slug: "nathan-brain",
    name: "Nathan Brain (ExtraContext)",
    summary:
      "Multi-tenant RAG platform with PDF ingestion, semantic search, and Google Calendar integration. Agent workers can modify and test the codebase autonomously.",
    tech: ["FastAPI", "React", "ChromaDB", "Docker", "Node.js", "OAuth 2.0"],
    demo: "https://www.youtube.com/watch?v=e8HGR51ijFc&feature=youtu.be",
    github: "https://github.com/nathanL534/rag_system",
  },
  {
    slug: "neural-net-scratch",
    name: "Neural Net from Scratch",
    summary:
      "Multi-layer perceptron in Java — forward prop, backprop, gradient descent, no frameworks.",
    tech: ["Java", "Backpropagation", "Gradient descent"],
    github:
      "https://github.com/nathanL534/java_projects/tree/main/Multilayer%20Perceptron",
  },
  {
    slug: "nyt-letterboxed-solver",
    name: "NYT LetterBoxed Solver",
    summary:
      "BFS solver for the NYT LetterBoxed puzzle with optimized word search.",
    tech: ["Java", "BFS"],
    github:
      "https://github.com/nathanL534/java_projects/tree/main/LetterBoxed%20copy",
  },
  {
    slug: "automated-trading",
    name: "Automated Trading & Notifications",
    summary:
      "Trading bot with FastAPI, Alpaca API, and Slack alerts.",
    tech: ["FastAPI", "Alpaca API", "Slack API"],
    github: "https://github.com/nathanL534/slack_bot",
  },
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    summary: "This site. Next.js, TypeScript, Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/nathanL534/Website",
  },
];
