import { use } from "react";
import { Footer } from "./footer";
import { getAllEntries } from "@/lib/posts";

interface FooterWithNewsProps {
  lang: string;
}

async function loadLatestNews(lang: string) {
  const language = lang === "ar-SA" ? "ar" : "en";
  const posts = await getAllEntries("news", language);

  return posts.slice(0, 3).map((post) => ({
    title: post.title,
    date: post.date,
    image: post.image,
    href: post.url ? post.url : `/news/${post.slug}`,
  }));
}

export default function FooterWithNews({ lang }: FooterWithNewsProps) {
  const latestNews = use(loadLatestNews(lang));

  return <Footer latestNews={latestNews} />;
}
