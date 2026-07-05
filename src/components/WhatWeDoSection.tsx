"use client";

import { motion } from "framer-motion";

const features = [
  { icon: "🧩", title: "Product thinking", body: "Scope the real problem, define the smallest version worth building, and sequence the work." },
  { icon: "💻", title: "Engineering", body: "Full-stack web apps with modern tooling - clean, maintainable, and fast." },
  { icon: "⚡", title: "No-code & automation", body: "Ship faster with the right no-code tools and glue automations where they fit." },
  { icon: "🎨", title: "Design sense", body: "Interfaces that are clear, accessible, and pleasant to use." },
  { icon: "📊", title: "Data & measurement", body: "Instrument what matters so decisions are based on evidence, not vibes." },
  { icon: "🤝", title: "Collaboration", body: "Clear communication and dependable delivery, solo or embedded in a team." },
];

export function WhatWeDoSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-brand-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          What I do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-16"
        >
          How I help take products from idea to shipped.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
