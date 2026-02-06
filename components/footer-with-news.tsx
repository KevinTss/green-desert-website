import { use } from "react";
import { Footer } from "./footer";
import { getAllEntries } from "@/lib/posts";
import { getAssetPath } from "@/lib/assets";

interface FooterWithNewsProps {
  lang: string;
}

async function loadLatestNews(lang: string) {
  const language = lang === "ar-SA" ? "ar" : "en";
  const posts = await getAllEntries("blog", language);

  return posts.slice(0, 3).map((post) => ({
    title: post.title,
    date: post.date,
    image: post.image ? getAssetPath(post.image) : getAssetPath("/placeholder.jpg"),
    href: post.url ? post.url : `/blog/${post.slug}`,
  }));
}

export default function FooterWithNews({ lang }: FooterWithNewsProps) {
  const latestPosts = use(loadLatestNews(lang));

  return <Footer latestNews={latestPosts} />;
}
