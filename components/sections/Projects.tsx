"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { Reveal } from "../magicui/reveal";

export default function Projects() {
  return (
    <Reveal>
    <section id="projects" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.slug}
              className={`bg-white dark:bg-zinc-800 border rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 ${
                p.slug === "nathan-brain"
                  ? "border-emerald-400 dark:border-emerald-500"
                  : "border-zinc-200 dark:border-zinc-700"
              }`}
            >
              {p.slug === "nathan-brain" && (
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                    Currently Working On
                  </span>
                </div>
              )}
              {/* Project Placeholder */}
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500">Project Preview</p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">{p.name}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md px-2 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  {p.demo && (
                    <Link
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
                      target="_blank"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                  {p.github && (
                    <Link
                      href={p.github}
                      className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      target="_blank"
                    >
                      <span>View Code</span>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}
