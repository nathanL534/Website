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
      "Infrastructure for infrastructure: a personal-context MCP server that gives AI agents relevant personal context on demand, instead of re-feeding the same documents over and over. Vector recall with a 4-factor re-rank, running as a warm local daemon that synthesizes context independently. The code is public; the personal corpus stays private (gitignored) — it doesn't ship your data.",
    result: "$0 embedding cost — local bge-small-en-v1.5 with sqlite-vec",
    note: "Currently building",
    tech: ["MCP", "sqlite-vec", "bge-small-en-v1.5", "Vector search"],
    github: "https://github.com/nathanL534/librarian",
  },
  {
    slug: "miso",
    name: "Miso",
    summary:
      "Inference optimizer. Profiled the open-source TTS model MisoTTS end-to-end, traced the bottleneck to the decoder, and applied torch.compile with CUDA graphs. Caught a silent eval-failure bug along the way and independently re-verified the win against it.",
    result: "4.10x speedup on an A100 — RTF 4.04 → 0.985, under real-time",
    tech: ["PyTorch", "torch.compile", "CUDA graphs", "Profiling"],
  },
  {
    slug: "dojo",
    name: "Dojo",
    note: "GRPO post-training that proves the gain",
    summary:
      "A Modal-based GRPO teacher-trainer — a self-hosted Fireworks replacement for RL post-training. Runs the full train → adapter → held-out-eval loop, deterministic and reproducible end-to-end, so every reported gain is measured on data the model never saw.",
    result: "+0.014 held-out eval delta on Qwen3-4B (temp 1.1, G=8)",
    tech: ["Modal", "GRPO", "Adapters", "Qwen3-4B", "Evals"],
  },
  {
    slug: "slipstream",
    name: "Slipstream",
    summary:
      "Agent trace capture, scoring, and replay — inspect what an agent actually did, score it, and run it back.",
    note: "3rd place — YC Browser Use hackathon",
    tech: ["Agent traces", "Evals", "Replay"],
  },
];

export const earlierProjects: Project[] = [
  {
    slug: "nathan-brain",
    name: "Nathan Brain (ExtraContext)",
    summary:
      "Autonomous self-editing AI system where agent workers can modify, test, and improve the codebase, built on a production multi-tenant RAG platform with PDF ingestion, semantic search, and Google Calendar integration.",
    tech: ["FastAPI", "React", "ChromaDB", "Docker", "Node.js", "OAuth 2.0"],
    demo: "https://www.youtube.com/watch?v=e8HGR51ijFc&feature=youtu.be",
    github: "https://github.com/nathanL534/rag_system",
  },
  {
    slug: "neural-net-scratch",
    name: "Neural Net from Scratch",
    summary:
      "Java multi-layer perceptron with forward/backpropagation and gradient descent, no frameworks.",
    tech: ["Java", "Backpropagation", "Gradient descent"],
    github:
      "https://github.com/nathanL534/java_projects/tree/main/Multilayer%20Perceptron",
  },
  {
    slug: "nyt-letterboxed-solver",
    name: "NYT LetterBoxed Solver",
    summary:
      "BFS-based solver for the New York Times LetterBoxed puzzle with optimized word search.",
    tech: ["Java", "BFS"],
    github:
      "https://github.com/nathanL534/java_projects/tree/main/LetterBoxed%20copy",
  },
  {
    slug: "automated-trading",
    name: "Automated Trading & Notifications",
    summary:
      "Quantitative trading system with a FastAPI backend, Alpaca API integration, and Slack alerts.",
    tech: ["FastAPI", "Alpaca API", "Slack API"],
    github: "https://github.com/nathanL534/slack_bot",
  },
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    summary: "Personal portfolio with animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/nathanL534/Website",
  },
];
