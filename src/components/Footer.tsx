"use client";

import Link from "next/link";

const BRAND_NAME = "Alex Rivera";
const links = [
  { label: "X", href: "https://x.com/yourhandle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourhandle" },
  { label: "GitHub", href: "https://github.com/yourhandle" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${BRAND_NAME} home`}
          className="text-base font-extrabold tracking-tight text-gray-900"
        >
          {BRAND_NAME}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-gray-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
