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
    slug: "voice-interview-ai",
    name: "Voice Interview AI Chatbot",
    description: "AI-powered interview simulator with real-time voice feedback using OpenAI and ElevenLabs. Provides instant analysis of responses and coaching tips.",
    tech: ["Next.js", "OpenAI API", "ElevenLabs", "Supabase", "Real-time AI"],
    image: "/project-voice-ai.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/voice-interview-ai"
  },
  {
    slug: "neural-net-scratch",
    name: "Neural Net from Scratch",
    description: "Java-based Multi-Layer Perceptron implementation with forward/backpropagation, gradient descent, and custom training algorithms.",
    tech: ["Java", "Machine Learning", "Neural Networks", "Gradient Descent", "Backpropagation"],
    image: "/project-neural-net.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/neural-net-scratch"
  },
  {
    slug: "nyt-letterboxed-solver",
    name: "NYT LetterBoxed Solver",
    description: "Efficient puzzle solver for the New York Times LetterBoxed game using BFS algorithm and optimized word search strategies.",
    tech: ["Java", "BFS Algorithm", "Puzzle Solving", "Word Search", "Optimization"],
    image: "/project-letterboxed.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/letterboxed-solver"
  },
  {
    slug: "automated-trading",
    name: "Automated Stock Trading & Notification System",
    description: "Quantitative trading platform with FastAPI backend, Alpaca API integration, Slack notifications, and algorithmic trading models.",
    tech: ["FastAPI", "Alpaca API", "Slack API", "Trading Algorithms", "Quantitative Models"],
    image: "/project-trading.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/automated-trading"
  },
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    description: "Personal portfolio with animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/project-portfolio.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    slug: "saas",
    name: "SaaS Dashboard",
    description: "Interactive analytics dashboard with charts and auth.",
    tech: ["Next.js", "Prisma", "Postgres"],
    image: "/project-saas.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/portfolio"
  }
];


