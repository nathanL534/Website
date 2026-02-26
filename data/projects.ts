export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "nathan-brain",
    name: "Nathan Brain (ExtraContext)",
    description: "Autonomous self-editing AI system where agent workers can modify, test, and improve the codebase, built on top of a production multi-tenant RAG platform with PDF ingestion, semantic search, and Google Calendar integration.",
    tech: ["FastAPI", "React", "ChromaDB", "Docker", "Node.js", "OAuth 2.0"],
    image: "/project-saas.jpg",
    demo: "https://www.youtube.com/watch?v=e8HGR51ijFc&feature=youtu.be",
    github: "https://github.com/nathanL534/rag_system"
  },
  {
    slug: "neural-net-scratch",
    name: "Neural Net from Scratch",
    description: "Java-based Multi-Layer Perceptron implementation with forward/backpropagation, gradient descent, and custom training algorithms.",
    tech: ["Java", "Machine Learning", "Neural Networks", "Gradient Descent", "Backpropagation"],
    image: "/project-neural-net.jpg",
    github: "https://github.com/nathanL534/java_projects/tree/main/Multilayer%20Perceptron"
  },
  {
    slug: "nyt-letterboxed-solver",
    name: "NYT LetterBoxed Solver",
    description: "Efficient puzzle solver for the New York Times LetterBoxed game using BFS algorithm and optimized word search strategies.",
    tech: ["Java", "BFS Algorithm", "Puzzle Solving", "Word Search", "Optimization"],
    image: "/project-letterboxed.jpg",
    github: "https://github.com/nathanL534/java_projects/tree/main/LetterBoxed%20copy"
  },
  {
    slug: "automated-trading",
    name: "Automated Stock Trading & Notification System",
    description: "Quantitative trading platform with FastAPI backend, Alpaca API integration, Slack notifications, and algorithmic trading models.",
    tech: ["FastAPI", "Alpaca API", "Slack API", "Trading Algorithms", "Quantitative Models"],
    image: "/project-trading.jpg",
    github: "https://github.com/nathanL534/slack_bot"
  },
  {
    slug: "voice-interview-ai",
    name: "Voice Interview AI Chatbot",
    description: "AI-powered interview simulator with real-time voice feedback using OpenAI and ElevenLabs. Provides instant analysis of responses and coaching tips.",
    tech: ["Next.js", "OpenAI API", "ElevenLabs", "Supabase", "Real-time AI"],
    image: "/project-voice-ai.jpg",
    github: "https://github.com/nathanL534/superprep"
  },
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    description: "Personal portfolio with animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/project-portfolio.jpg",
    github: "https://github.com/nathanL534/Website"
  },
];
