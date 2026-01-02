import { TypingAnimation } from "@/components/ui/typing-animation";
import { Reveal } from "../magicui/reveal";

export default function About() {
  return (
    <Reveal>
    <section id="about" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
                  "I build things for the web",
                  "I love clean, efficient code",
                  "I create amazing user experiences",
                  "I'm passionate about modern web tech"
                ]}
                className="font-medium"
              />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m a software engineer with a background in Computer Science who specializes in building
              exceptional digital experiences. Currently focused on creating accessible, human-centered products
              using modern web technologies. When I&apos;m not coding, you&apos;ll find me exploring new frameworks
              or contributing to open source projects.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">5+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">24+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">8+</div>
                <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
