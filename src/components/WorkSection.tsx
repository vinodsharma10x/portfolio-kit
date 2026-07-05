"use client";

import { motion } from "framer-motion";

const work = [
  { title: "Project One", description: "What it is, your role, the stack, and the outcome. Add a link to a live demo or case study.", tag: "Web App", href: "#" },
  { title: "Project Two", description: "A second project showing a different skill - e.g., an internal tool or automation.", tag: "Tooling", href: "#" },
  { title: "Project Three", description: "A no-code build or experiment. Variety shows range.", tag: "No-code", href: "#" },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Selected work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-16"
        >
          A few projects I&apos;m proud of.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="block rounded-2xl bg-white border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              {item.tag && (
                <span className="text-xs font-semibold tracking-wide uppercase text-brand-500">
                  {item.tag}
                </span>
              )}
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
