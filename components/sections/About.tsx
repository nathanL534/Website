export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-6">
        Software engineer — systems &amp; verification
      </p>

      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Nathan Lee
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
        I work on inference performance, agent infrastructure, and training
        pipelines. The through-line is verification: I don&apos;t trust a
        result until the ways it could be lying have been ruled out — profilers
        over vibes, held-out evals over demos, and re-checking the win after
        finding the bug that could have faked it.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
        <a
          href="https://github.com/nathanL534"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nathaniel-lee-443244327"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:njlee007@gmail.com"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
        >
          njlee007@gmail.com
        </a>
      </div>
    </section>
  );
}
