"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const BRAND_NAME = "Alex Rivera";
const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-950">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${BRAND_NAME} home`}
          className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100"
        >
          {BRAND_NAME}
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
