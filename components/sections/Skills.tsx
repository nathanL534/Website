import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 sm:px-8 py-16 sm:py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-6">
        Skills
      </h2>

      <dl className="border-t border-zinc-200 dark:border-zinc-800 pt-6 space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {group.label}
            </dt>
            <dd className="mt-0.5 sm:mt-0 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {group.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
