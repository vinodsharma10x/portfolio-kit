"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Edit these to make the section yours. The stats are placeholders — swap in
// numbers that matter for you (years, projects, clients, a headline metric).
const about = {
  name: "Alex Rivera",
  role: "Product Builder & Engineer",
  image: "/images/avatar.svg",
  linkedin: "https://www.linkedin.com/in/yourhandle",
  bio: [
    "I'm a product builder and engineer. I take ideas from rough sketch to shipped product, working across design, code, and everything in between.",
    "I care about useful software, clear thinking, and shipping. I've worked on products spanning web apps, internal tools, and automation.",
  ],
  stats: [
    { value: "10+", label: "Products shipped" },
    { value: "Full-stack", label: "Design to deploy" },
    { value: "Open", label: "To new work" },
  ],
};

export function TeamSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] max-w-sm w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gray-100 shadow-sm"
          >
            <img
              src={about.image}
              alt={`${about.name}, ${about.role}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-4">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Hi, I&apos;m {about.name.split(" ")[0]}.
            </h2>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-brand-500">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Read my full story &rarr;
              </Link>
              {about.linkedin && (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                >
                  LinkedIn &rarr;
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
