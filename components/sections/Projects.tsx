import Link from "next/link";
import { featuredProjects, earlierProjects, type Project } from "@/data/projects";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="py-10 border-t border-zinc-200 dark:border-zinc-800 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8">
      <div className="mb-3 sm:mb-0">
        <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.name}
        </h3>
        {project.note && (
          <p className="mt-1.5 font-mono text-xs text-orange-700 dark:text-orange-400">
            {project.note}
          </p>
        )}
      </div>

      <div>
        <p className="text-[0.9375rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.summary}
        </p>

        {project.result && (
          <p className="mt-3 font-mono text-sm text-zinc-900 dark:text-zinc-100">
            <span aria-hidden="true" className="text-orange-700 dark:text-orange-400">
              →{" "}
            </span>
            {project.result}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
            {project.tech.join(" · ")}
          </p>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
            >
              Code ↗
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
            >
              Demo ↗
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 sm:px-8 py-16 sm:py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
        Selected work
      </h2>

      <div>
        {featuredProjects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>

      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mt-16 mb-6">
        Earlier
      </h2>

      <ul className="space-y-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
        {earlierProjects.map((project) => (
          <li
            key={project.slug}
            className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h3>
            <p className="mt-0.5 sm:mt-0 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {project.summary}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
