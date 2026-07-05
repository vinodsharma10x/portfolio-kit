# The Portfolio Kit

A standalone **personal portfolio website** for a product builder / engineer (placeholder identity: "Alex Rivera"). It showcases selected work, an about page, and a file-based MDX blog. Public, no logins, no newsletter, no database.

Guided walkthrough with the prompts: **[careerleap.app/portfolio-kit](https://careerleap.app/portfolio-kit)**. Built by [Vinod Sharma](https://vinodsharma.ai), companion to [The Build Notes](https://vinodsharma.ai/newsletter) newsletter. MIT licensed.

- **Type:** Marketing/content site - public, no accounts
- **Primary CTA:** A single "Hire me" button (opens a `mailto:` link)

---

## Customize with AI

Copy the ready-to-run prompt in [`docs/CUSTOMIZE-WITH-AI.md`](./docs/CUSTOMIZE-WITH-AI.md), paste it into Claude Code, the Claude desktop app, Claude.ai, or Codex, and attach your resume (or your material). It asks a few follow-up questions, then rewrites this placeholder site into yours. Guided walkthrough: [careerleap.app/portfolio-kit](https://careerleap.app/portfolio-kit).

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (no UI library) |
| Animation | Framer Motion |
| Blog | File-based MDX (`gray-matter` + `remark`) |
| Analytics | Vercel Analytics (+ optional GTM / Ahrefs) |
| Hosting | Vercel |

No auth, no Redis, no newsletter - the site is intentionally backend-free apart from a single IndexNow ping route.

---

## Quick start

**Prerequisites:** [Node.js](https://nodejs.org) 20+ and [pnpm](https://pnpm.io) (`npm install -g pnpm`).

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server → http://localhost:3000
pnpm build        # production build
pnpm start        # run the production build locally
pnpm lint         # run ESLint
```

No environment variables are required to run locally.

---

## Customize it with your AI agent

You do not have to edit these files by hand. The Portfolio Kit is made for AI coding agents. Open this project in **Claude Code** or **Codex** (Cursor, Replit, and Lovable work too) and tell the agent what you want using the prompts below. Fill in the `[brackets]`.

> Want your own copy on your own GitHub first? Click **"Use this template"** on the repository page. Or skip ahead, step 5 has your agent create the repo for you.

### 1. Get the kit

Open your agent in a new, empty folder and paste:

```text
Clone https://github.com/vinodsharma10x/portfolio-kit and work inside the portfolio-kit
folder for everything that follows. First, read the README and the files in docs/ so you
understand how this project is structured, then tell me when you are ready.
```

### 2. Make the home page yours

This is the most important prompt. It gives the agent a role and sets the context for the whole session, so be specific:

```text
You are a career coach and personal brand strategist who has helped thousands of
developers and product builders get hired and win freelance clients. I am turning this
template into my own portfolio, and I want the copy to win me interviews and consulting
leads, not just swap in my name.

I am [your name], a [your role, for example "full-stack engineer" or "product designer"].
Here is more about me in my own words: [3 to 5 sentences, or paste your bio or LinkedIn
summary]. The people I want to reach are [your audience, for example "hiring managers at
early-stage startups"]. My tone should feel [for example clear and confident, or warm and
approachable].

Update the home page and about page with these details. Rewrite the hero, about, work, and
FAQ sections in my voice, and update the nav, footer, social links, and the "Hire me"
contact button to [your email]. Keep the existing layout and design. When you are done,
show me a summary of what changed and run pnpm dev so I can review it at
http://localhost:3000.
```

### 3. Recolor and rebrand

This edition ships in **purple and pink**. The colors live in the `@theme` block of [src/app/globals.css](src/app/globals.css). Paste:

```text
Change the site theme to a [describe your palette, for example "navy and warm gold"].
Update the brand and accent color tokens in src/app/globals.css, recolor the blog cover
images in public/images/blog/ to match, and keep good contrast in both light and dark
mode. Show me the result.
```

### 4. Write a blog post

Posts live in `content/blog/` as MDX files. The format and writing rules are in [docs/BLOG-INSTRUCTIONS.md](docs/BLOG-INSTRUCTIONS.md). Two ways:

**If you already have a draft:**

```text
Add a new blog post from my draft below. Match the frontmatter and format of the existing
posts in content/blog/, follow docs/BLOG-INSTRUCTIONS.md, optimize it for SEO and AI
search, and create a matching 1200x630 cover image in public/images/blog/. Here is my
draft: [paste it].
```

**If you are starting from an idea:**

```text
Write a new blog post titled "[your title]" about [topic, who it is for, and the key
points]. Match the frontmatter and format of the existing posts, follow
docs/BLOG-INSTRUCTIONS.md, make it genuinely useful and optimized for SEO and AI search,
around 1,200 words, and create a matching cover image.
```

### 5. Publish and deploy

Cloning gave you a copy of this template. To make it truly yours and put it online, have your agent create your own repository and deploy it. Paste:

```text
Create a new GitHub repository under my account, push this portfolio project to it, then
deploy it to Vercel. Set NEXT_PUBLIC_SITE_URL to my production domain, and walk me through
connecting my custom domain.
```

The manual checklist and optional analytics / IndexNow setup are in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

### Tips for working with your agent

- Make one change at a time and review it before moving on.
- If something looks off, describe what you see and ask the agent to fix it. You do not need to read the code.
- Ask it to keep the design and only change content, unless you actually want a redesign.
- Commit after each working change (or ask the agent to) so you can always roll back.

---

## Project structure

```
src/
├── app/                 # Pages & routes (Next.js App Router)
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Root layout (metadata, fonts, analytics)
│   ├── about/           # About page
│   ├── blog/            # Blog index + [slug] dynamic post pages
│   ├── author/          # Author page (alex-rivera)
│   ├── terms/, privacy/ # Legal pages
│   ├── api/indexnow/    # Single serverless route (IndexNow ping)
│   ├── sitemap.ts, robots.ts
│   ├── feed.xml/, llms.txt/, llms-full.txt/   # auto-generated SEO/LLM files
│   └── globals.css      # Tailwind import + brand color theme tokens
├── components/          # React components (Hero, Work, Footer, FAQ, blog, etc.)
└── lib/                 # Utilities (mdx loader, metadata, faq data, etc.)

content/blog/            # Blog posts as .mdx files (filename = URL slug)
public/images/blog/      # Blog cover images (1200×630 SVG, one per post)
public/images/avatar.svg # Profile avatar placeholder
docs/                    # Project documentation
```

There is **no config layer** - brand and content are hardcoded directly in components and pages. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how it all fits together.

---

## Environment variables

Optional - create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

`NEXT_PUBLIC_SITE_URL` is the single source of truth for the domain - it drives canonical URLs, sitemap, OG tags, and IndexNow. If omitted, it falls back to `https://example.com`.

---

## Writing blog posts

Posts are MDX files in `content/blog/`. Full instructions - frontmatter schema, the SEO/LLM writing rules, and the cover-image template - are in [docs/BLOG-INSTRUCTIONS.md](docs/BLOG-INSTRUCTIONS.md).

---

## Theming

The brand colors live in one place: the `@theme` block in [src/app/globals.css](src/app/globals.css).

- **Purple** (`--color-brand-*`) is the primary color - links, highlights, nav, blog covers.
- **Pink** (`--color-accent-*`) is the accent - used on the primary call-to-action button.

Change a color by editing its hex values. Full brand reference: [docs/BRANDING.md](docs/BRANDING.md).

---

## Make it yours

- [ ] Replace the name, email, and social links (placeholders: "Alex Rivera", `hello@example.com`, `yourhandle`) across `src/components/` and page JSON-LD
- [ ] Replace **`public/logo.png`**, **`public/og-default.png`**, and **`public/images/avatar.svg`**
- [ ] Add a real favicon (`src/app/icon.png`) and apple icon (`src/app/apple-icon.png`)
- [ ] Set **`NEXT_PUBLIC_SITE_URL`** to the production domain
- [ ] Update the `www → apex` redirect host in [next.config.ts](next.config.ts)
- [ ] (Optional) Add **GTM**, **Ahrefs**, **Bing**, and **IndexNow** IDs - see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)
- [ ] Deploy to Vercel and connect the domain

Step-by-step go-live guide: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - how the site is built
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - deploy + go-live checklist
- [docs/BRANDING.md](docs/BRANDING.md) - brand identity, colors, theming
- [docs/BLOG-INSTRUCTIONS.md](docs/BLOG-INSTRUCTIONS.md) - how to write & publish posts
