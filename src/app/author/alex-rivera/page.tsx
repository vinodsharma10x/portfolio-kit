import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Alex Rivera | Product Builder & Engineer",
  description: "Alex Rivera is a product builder and engineer who ships useful things with code and no-code. Read articles on building and shipping products.",
  alternates: { canonical: "/author/alex-rivera" },
  openGraph: {
    title: "Alex Rivera | Product Builder & Engineer",
    description: "Alex Rivera is a product builder and engineer who ships useful things with code and no-code. Read articles on building and shipping products.",
    url: `${SITE_URL}/author/alex-rivera`,
    images: [{ url: `${SITE_URL}/images/avatar.svg`, width: 400, height: 400, alt: "Alex Rivera, product builder & engineer" }],
  },
};

export default function AlexRiveraPage() {
  // Get all posts by Alex
  const allPosts = getAllPostsMeta();
  const authorPosts = allPosts.filter(
    (p) => p.author === "Alex Rivera"
  );

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Alex Rivera",
    url: `${SITE_URL}/author/alex-rivera`,
    image: `${SITE_URL}/images/avatar.svg`,
    jobTitle: "Product Builder & Engineer",
    description: "Product builder and engineer who ships useful things with code and no-code.",
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

      <section className="bg-gray-100 dark:bg-gray-900 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/images/avatar.svg"
              alt="Alex Rivera, product builder & engineer"
              width={120}
              height={120}
              className="w-28 h-28 rounded-full object-cover object-top shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                Alex Rivera
              </h1>
              <p className="text-brand-500 font-semibold mt-1">Product Builder &amp; Engineer</p>
              <a
                href="https://www.linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-950 py-12 sm:py-16">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I&apos;m a product builder and engineer. I take ideas from rough sketch to shipped product, working across design, code, and everything in between.
            </p>
            <p>
              I care about useful software, clear thinking, and shipping. I&apos;ve worked on products spanning web apps, internal tools, and automation.
            </p>
            <p>
              This is where I write about what I learn building and shipping. If something resonates, get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Articles by Alex ({authorPosts.length})
          </h2>
          <div className="space-y-4">
            {authorPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{post.date} · {post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
