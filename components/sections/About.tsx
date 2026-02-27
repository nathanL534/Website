import { TypingAnimation } from "@/components/ui/typing-animation";
import Image from "next/image";
import { Reveal } from "../magicui/reveal";

export default function About() {
  return (
    <Reveal className="min-h-full snap-start snap-always">
    <section id="about" className="container mx-auto scroll-mt-16 px-4 py-8 md:px-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About Me
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-sm p-6 md:p-8">
          <div className="space-y-6">
            {/* Greeting */}
            <div>
              <h3 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-2">
                Hi, I&apos;m
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Nathan
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
              <TypingAnimation
                words={[
                  "I build agentic systems and full-stack products",
                  "I turn messy workflows into reliable automation",
                  "I ship fast, iterate hard, and obsess over UX",
                  "I like code that feels clear and human"
                ]}
                className="font-medium"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] items-start">
              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                I&apos;m a Computer Science and Statistics student at UChicago who loves building practical AI systems.
                Lately I&apos;ve been especially interested in agentic workflows, like orchestrating autonomous workers,
                model-driven task routing, and end-to-end RAG pipelines that actually hold up in production. I still care
                deeply about strong frontend polish too, because the best technical systems should feel simple for real people.
                Outside of coding, I&apos;m into hiking, bouldering, surfing, swimming, hackathons, and the occasional
                food challenge win.
              </p>

              {/* Personality Photo */}
              <figure className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
                <Image
                  src="/food-challenge.jpeg"
                  alt="Nathan holding a food challenge winner shirt"
                  width={640}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400">
                  Occasional food challenge win.
                </figcaption>
              </figure>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">5+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Agentic Systems</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Current Obsession</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">10+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
