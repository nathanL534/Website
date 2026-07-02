import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathan-lee-534.vercel.app"),
  title: {
    default: "Nathan Lee — Software Engineer",
    template: "%s — Nathan Lee",
  },
  description:
    "Systems and verification: inference optimization, agent infrastructure, and training pipelines that prove their own results.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Nathan Lee — Software Engineer",
    description:
      "Systems and verification: inference optimization, agent infrastructure, and training pipelines that prove their own results.",
  },
  twitter: {
    card: "summary",
    title: "Nathan Lee — Software Engineer",
    description:
      "Systems and verification: inference optimization, agent infrastructure, and training pipelines that prove their own results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
