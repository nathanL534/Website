import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 h-14 flex items-center justify-between">
        <Link
          href="#"
          className="font-medium tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Nathan Lee
        </Link>
        <div className="flex items-center gap-5 sm:gap-6">
          <nav className="flex items-center gap-4 sm:gap-6 font-mono text-xs sm:text-[0.8125rem] text-zinc-500 dark:text-zinc-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
