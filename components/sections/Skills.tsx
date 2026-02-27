import SkillsGrid from "@/components/SkillsGrid";
import { Reveal } from "../magicui/reveal";

export default function Skills() {
  return (
    <Reveal className="min-h-full snap-start snap-always">
    <section id="skills" className="container mx-auto scroll-mt-16 px-4 py-8 md:px-6 md:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Skills & Technologies
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-8">
          <SkillsGrid />
        </div>

        {/* Learning Section */}
        <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm p-6 md:p-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
              Always Learning
            </h3>

            <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Constantly exploring new technologies and staying up-to-date with the latest trends in web development.
              Here are some of the tools I&apos;m currently excited about:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Next.js 15
              </div>
              <div className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                Vite 5
              </div>
              <div className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                Framer Motion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
