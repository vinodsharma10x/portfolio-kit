import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const postLinks = posts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`
    )
    .join("\n");

  const content = `# Alex Rivera

> Portfolio of Alex Rivera - a product builder and engineer shipping useful things with code and no-code. Selected work, writing, and how to get in touch.

## About

Alex Rivera is a product builder and engineer who takes ideas from rough sketch to shipped product, working across product, design, and engineering. The site showcases selected work, occasional writing, and a way to get in touch.

## What Alex does

- Product thinking - scoping the real problem and the smallest version worth building
- Engineering - full-stack web apps with modern tooling
- No-code & automation - shipping faster with the right tools
- Design sense - clear, accessible, pleasant interfaces
- Data & measurement - instrumenting what matters
- Collaboration - dependable delivery, solo or embedded in a team

## Website

${SITE_URL}

## Blog

${postLinks}

## Key Pages

- [Home](${SITE_URL}): Alex Rivera - product builder & engineer
- [About](${SITE_URL}/about): About Alex Rivera
- [Blog](${SITE_URL}/blog): Notes on building and shipping products
- [RSS Feed](${SITE_URL}/feed.xml): Full-text RSS feed of all blog posts
- [Privacy Policy](${SITE_URL}/privacy): Privacy policy
- [Terms of Service](${SITE_URL}/terms): Terms of service

## Full Content

For complete article text, see: ${SITE_URL}/llms-full.txt

## Contact

- Website: ${SITE_URL}
- Email: hello@example.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
