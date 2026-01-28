import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { getAssetPath } from "./assets";

export type EntryKind = "blog" | "news";

export interface ContentEntry {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  image?: string;
  tags?: string[];
  url?: string;
  language: "en" | "ar";
}

const BASE_DIR: Record<EntryKind, string> = {
  blog: path.join(process.cwd(), "content/blog"),
  news: path.join(process.cwd(), "content/news"),
};

function getSlugs(kind: EntryKind, language: "en" | "ar"): string[] {
  const dir = path.join(BASE_DIR[kind], language);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

export async function getEntryBySlug(
  kind: EntryKind,
  slug: string,
  language: "en" | "ar",
): Promise<ContentEntry | null> {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(BASE_DIR[kind], language, `${realSlug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content);

    const dateValue =
      data.date instanceof Date
        ? data.date.toISOString()
        : data.date || new Date().toISOString();
    const contentHtml = String(processedContent).replace(
      /<img\s+[^>]*src="([^"]+)"[^>]*>/g,
      (match, src) => {
        if (src.startsWith("http") || src.startsWith("data:")) return match;
        const resolved = getAssetPath(src);
        return match.replace(src, resolved);
      },
    );

    return {
      slug: realSlug,
      title: data.title || realSlug,
      date: dateValue,
      excerpt: data.excerpt || content.substring(0, 200) + "...",
      content: contentHtml,
      author: data.author,
      image: data.image,
      tags: data.tags || [],
      url: data.url,
      language,
    };
  } catch (error) {
    console.error(`Error reading ${kind} ${slug}:`, error);
    return null;
  }
}

export async function getAllEntries(
  kind: EntryKind,
  language: "en" | "ar",
): Promise<ContentEntry[]> {
  const slugs = getSlugs(kind, language);
  const posts = await Promise.all(
    slugs.map((slug) => getEntryBySlug(kind, slug, language)),
  );
  return posts
    .filter((p): p is ContentEntry => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
