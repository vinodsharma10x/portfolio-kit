"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="block text-sm font-semibold tracking-widest text-brand-500 uppercase mb-6">
            Product Builder &amp; Engineer
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            I design and build
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-500 leading-[1.15] tracking-tight">
            products that ship.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          From idea to launch - web apps, tools, and automations, built with code
          and no-code. Here&apos;s a selection of my work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center px-7 py-3.5 text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 transition-colors rounded-full"
          >
            Hire me
          </a>
          <a
            href="/#work"
            className="inline-flex items-center px-7 py-3.5 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"
          >
            View work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
