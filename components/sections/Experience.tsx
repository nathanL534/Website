"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Reveal } from "../magicui/reveal";

export default function Experience() {
  return (
    <Reveal>
    <section id="experience" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience
          </h2>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-zinc-300 dark:before:bg-zinc-700">
          <div className="space-y-8">
            {experience.map((e, idx) => (
              <motion.div
                key={e.company + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 mt-2 w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 ring-4 ring-white dark:ring-zinc-900 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white dark:bg-zinc-900 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-8">
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm p-5 md:p-6">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">{e.role}</h3>
                          <p className="text-base font-semibold text-zinc-600 dark:text-zinc-400">{e.company}</p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {e.period}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 pt-2">
                        {e.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mt-1.5"></div>
                            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{h}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2">Let&apos;s Work Together</h3>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 max-w-md mx-auto">
              Ready to bring your next project to life? I&apos;d love to hear about your ideas and how we can collaborate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-300 text-white dark:text-zinc-900 px-6 py-2.5 rounded-md font-medium transition-colors text-sm"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
