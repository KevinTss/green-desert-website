import { getAllEntries, getEntryBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ArticleDetail } from "@/components/article-detail";
import FooterWithNews from "@/components/footer-with-news";

interface NewsPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const en = await getAllEntries("news", "en");
  const ar = await getAllEntries("news", "ar");
  return [
    ...en.map((post) => ({ lang: "en", slug: post.slug })),
    ...ar.map((post) => ({ lang: "ar-SA", slug: post.slug })),
  ];
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const language = lang === "ar-SA" ? "ar" : "en";
  const post = await getEntryBySlug("news", slug, language);

  if (!post) {
    return { title: "News Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { lang, slug } = await params;
  const language = lang === "ar-SA" ? "ar" : "en";
  const post = await getEntryBySlug("news", slug, language);
  if (post?.url) {
    return notFound();
  }
  if (!post) {
    notFound();
  }

  const isArabic = language === "ar";
  const languageRoute = isArabic ? "ar-SA" : "en";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ArticleDetail post={post} languageRoute={languageRoute} root="news" />
      <FooterWithNews lang={lang} />
    </div>
  );
}

export const dynamic = "force-static";
