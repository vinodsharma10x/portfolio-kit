import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

// Your résumé — edit these three arrays to make the About page yours.
const EXPERIENCE = [
  {
    role: "Senior Product Engineer",
    company: "Independent",
    period: "2022 — Present",
    blurb: "Building web apps and internal tools for startups, from first sketch to production.",
  },
  {
    role: "Full-Stack Developer",
    company: "Acme Labs",
    period: "2019 — 2022",
    blurb: "Shipped customer-facing features across the stack and mentored two junior engineers.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Co.",
    period: "2017 — 2019",
    blurb: "Built the design system and rebuilt the marketing site, cutting load time by 40%.",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { label: "Tools", items: ["Git", "Figma", "Vercel", "Postgres"] },
];

const EDUCATION = [
  { degree: "B.S. Computer Science", school: "State University", period: "2013 — 2017" },
];

export const metadata: Metadata = {
  title: "About | Alex Rivera",
  description:
    "About Alex Rivera - a product builder and engineer shipping useful things with code and no-code.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Alex Rivera",
    description:
      "About Alex Rivera - a product builder and engineer shipping useful things with code and no-code.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: "About Alex Rivera" }],
  },
};

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Alex Rivera",
    url: `${SITE_URL}/about`,
    jobTitle: "Product Builder & Engineer",
    description:
      "Product builder shipping useful things with code and no-code. Alex takes ideas from rough sketch to shipped product, working across design, code, and everything in between.",
    image: `${SITE_URL}/images/avatar.svg`,
    sameAs: [
      "https://github.com/yourhandle",
      "https://www.linkedin.com/in/yourhandle",
      "https://x.com/yourhandle",
    ],
    knowsAbout: [
      "Product design",
      "Web development",
      "TypeScript",
      "React",
      "Next.js",
      "No-code tools",
      "Automation",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* Section 1: Hero */}
      <section className="bg-gray-100 dark:bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            About <span className="text-brand-500">Alex Rivera</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
            Product builder shipping useful things with code and no-code.
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-white dark:bg-gray-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-center">
            {/* Photo (same one as the homepage) */}
            <div className="relative aspect-[4/5] max-w-sm w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-sm">
              <img
                src="/images/avatar.svg"
                alt="Alex Rivera, Product Builder & Engineer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Story */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Hi, I&apos;m Alex
              </h2>
              <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a product builder and engineer. I take ideas from rough
                  sketch to shipped product, working across design, code, and
                  everything in between.
                </p>
                <p>
                  I care about useful software, clear thinking, and shipping. I&apos;ve
                  worked on products spanning web apps, internal tools, and
                  automation.
                </p>
                <p>
                  This is where I keep my work and occasional writing. If something
                  resonates, get in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Résumé — Experience, Skills, Education */}
      <section className="bg-gray-50 dark:bg-gray-950 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Experience */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {EXPERIENCE.map((job) => (
              <div
                key={`${job.role}-${job.company}`}
                className="border-l-2 border-brand-100 dark:border-gray-800 pl-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.role}</h3>
                  <span className="text-sm text-gray-400 dark:text-gray-500">{job.period}</span>
                </div>
                <p className="text-sm font-semibold text-brand-500 mb-1">
                  {job.company}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {job.blurb}
                </p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-8">
            Skills
          </h2>
          <div className="space-y-5">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                <span className="w-28 shrink-0 text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-14 mb-8">
            Education
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-wrap items-baseline justify-between gap-x-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-brand-500">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Contact line */}
          <p className="mt-14 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            The best way to start a conversation is to{" "}
            <a href="mailto:hello@example.com" className="text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium">
              send me an email
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
