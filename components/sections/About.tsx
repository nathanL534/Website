import Image from "next/image";

const links = [
  { href: "https://github.com/nathanL534", label: "GitHub", external: true },
  {
    href: "https://www.linkedin.com/in/nathaniel-lee-443244327",
    label: "LinkedIn",
    external: true,
  },
  { href: "mailto:njlee007@gmail.com", label: "njlee007@gmail.com", external: false },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-6 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-6">
        CS &amp; Statistics @ UChicago — systems &amp; verification
      </p>

      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Nathan Lee
      </h1>

      <div className="mt-6 sm:grid sm:grid-cols-[1fr_11rem] sm:gap-10 items-start">
        <div>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            I build practical AI systems — inference performance, agent
            infrastructure, and training pipelines. The through-line is
            verification: I don&apos;t trust a result until the ways it could
            be lying have been ruled out. Profilers over vibes, held-out evals
            over demos, and re-checking the win after finding the bug that
            could have faked it.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Away from a terminal: hiking, bouldering, surfing, swimming, and
            hackathons.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:text-orange-700 dark:hover:text-orange-400 hover:decoration-current transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <figure className="mt-10 sm:mt-1 max-w-[11rem]">
          <Image
            src="/food-challenge.jpeg"
            alt="Nathan after winning a food challenge"
            width={531}
            height={733}
            sizes="176px"
            className="w-full h-auto rounded-md border border-zinc-200 dark:border-zinc-800"
          />
          <figcaption className="mt-2 font-mono text-xs text-zinc-400 dark:text-zinc-500">
            Occasional food-challenge winner.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
