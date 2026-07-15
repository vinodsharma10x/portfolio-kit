"use client";

import Link from "next/link";

const BRAND_NAME = "Alex Rivera";
// Monogram from the name, e.g. "Alex Rivera" -> "AR".
const INITIALS = BRAND_NAME.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

// Center nav. Externals open in a new tab; internal legal pages use Link.
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yourhandle" },
  { label: "GitHub", href: "https://github.com/yourhandle" },
  { label: "X", href: "https://x.com/yourhandle" },
];
const legal = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${BRAND_NAME} home`}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white text-xs font-bold">
            {INITIALS}
          </span>
          <span className="text-base font-extrabold tracking-tight text-gray-900">
            {BRAND_NAME}
          </span>
        </Link>

        {/* Center links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
          {socials.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          {legal.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-gray-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Copyright + backlink */}
        <p className="text-sm text-gray-400">
          &copy; {year} {BRAND_NAME} &middot; Built with{" "}
          <a
            href="https://careerleap.app"
            target="_blank"
            rel="noopener"
            className="text-gray-500 hover:text-brand-600 underline underline-offset-2 transition-colors"
          >
            Portfolio Kit
          </a>
        </p>
      </div>
    </footer>
  );
}
