import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  tags: string[];
  category?: string;
  coverImage?: string;
  readingTime?: string;
  author?: string;
  featured?: boolean;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  lastModified?: string;
  tags: string[];
  category?: string;
  coverImage?: string;
  readingTime?: string;
  author?: string;
  featured?: boolean;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, "");
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);

  let filePath: string;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  const htmlContent = processedContent.toString();

  return {
    slug: data.slug || slug,
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    date: data.date || "",
    lastModified: data.lastModified || undefined,
    tags: data.tags || [],
    category: data.category || undefined,
    coverImage: data.coverImage || undefined,
    readingTime: data.readingTime || undefined,
    author: data.author || "Alex Rivera",
    featured: data.featured || false,
    content: htmlContent,
  };
}

export function getAllPostsMeta(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file));

  const posts: BlogPostMeta[] = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = data.slug || getSlugFromFilename(file);

    return {
      slug,
      title: data.title || "Untitled",
      excerpt: data.excerpt || "",
      date: data.date || "",
      lastModified: data.lastModified || undefined,
      tags: data.tags || [],
      category: data.category || undefined,
      coverImage: data.coverImage || undefined,
      readingTime: data.readingTime || undefined,
      author: data.author || "Alex Rivera",
      featured: data.featured || false,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPostsMeta();
  const categories = new Set<string>();
  posts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const posts = getAllPostsMeta();
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPostsMeta().filter(
    (post) =>
      post.category?.toLowerCase().replace(/\s+/g, "-") ===
      category.toLowerCase().replace(/\s+/g, "-")
  );
}

// The most recent posts by date (newest first). Used for the homepage
// "From the Blog" section. getAllPostsMeta already sorts by date desc.
export function getRecentPosts(limit = 6): BlogPostMeta[] {
  return getAllPostsMeta().slice(0, limit);
}
