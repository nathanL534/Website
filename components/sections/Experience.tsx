import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-3xl px-6 sm:px-8 py-16 sm:py-20"
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
        Experience
      </h2>

      <div>
        {experience.map((item) => (
          <article
            key={item.company + item.period}
            className="py-8 border-t border-zinc-200 dark:border-zinc-800 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <div className="mb-3 sm:mb-0">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {item.company}
              </h3>
              <p className="mt-1.5 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {item.period}
              </p>
            </div>

            <div>
              <p className="text-[0.9375rem] font-medium text-zinc-900 dark:text-zinc-100">
                {item.role}
              </p>
              <ul className="mt-3 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <span
                      aria-hidden="true"
                      className="select-none text-orange-700 dark:text-orange-400"
                    >
                      –
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
