import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

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
      <section className="bg-gray-100 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            About <span className="text-brand-500">Alex Rivera</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            Product builder shipping useful things with code and no-code.
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m Alex
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
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
      </section>

      {/* Section 3: Profile */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src="/images/avatar.svg"
                  alt="Alex Rivera, Product Builder & Engineer"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Alex Rivera</h3>
              <p className="text-sm text-brand-500 font-medium mb-3">
                Product Builder &amp; Engineer
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 min-h-[80px]">
                Building products with code and no-code - from idea to launch.
              </p>
              <a
                href="https://www.linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-500 hover:text-brand-600 font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What I do */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            What I do
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed text-left">
            <p>
              I help take products from idea to shipped - product thinking,
              full-stack engineering, no-code and automation, and the design sense
              to make it all clear and usable.
            </p>
            <p>
              I work solo or embedded in a team, with clear communication and
              dependable delivery.
            </p>
            <p>
              The best way to start a conversation is to{" "}
              <a href="mailto:hello@example.com" className="text-brand-500 hover:text-brand-600">
                send me an email
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
