export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 sm:px-8 py-16 sm:py-20">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-6">
        Contact
      </h2>

      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
          The fastest way to reach me is email — happy to share my resume, talk
          through any of the work above, or hear what you&apos;re building.
        </p>

        <a
          href="mailto:njlee007@gmail.com"
          className="mt-6 inline-block font-mono text-base text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-orange-700/40 dark:decoration-orange-400/40 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
        >
          njlee007@gmail.com
        </a>
      </div>

      <footer className="mt-20 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Nathan Lee
        </p>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href="https://github.com/nathanL534"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nathaniel-lee-443244327"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
