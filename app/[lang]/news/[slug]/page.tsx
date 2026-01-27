import { getAllEntries, getEntryBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import Link from "next/link";

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

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
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
  const isArabic = language === "ar";
  const languageRoute = isArabic ? "ar-SA" : "en";

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className={`mb-8 ${isArabic ? "text-right" : "text-left"}`}>
          <Link
            href={`/${languageRoute}/news`}
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <svg
              className={`w-4 h-4 ${isArabic ? "ml-1" : "mr-1 rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isArabic ? "العودة إلى الأخبار" : "Back to news"}
          </Link>
        </div>

        <header className={`mb-10 ${isArabic ? "text-right" : "text-left"}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-sm text-gray-600">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.author ? (
              <span className={`ml-3 ${isArabic ? "mr-3 ml-0" : ""}`}>
                {isArabic ? "بقلم" : "By"} {post.author}
              </span>
            ) : null}
          </div>
          {post.image && (
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )}
        </header>

        <article className="prose prose-lg max-w-4xl mx-auto prose-headings:text-gray-900 prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className={`mt-16 pt-8 border-t border-gray-200 ${isArabic ? "text-right" : "text-left"}`}>
          <Link
            href={`/${languageRoute}/news`}
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            <svg
              className={`w-4 h-4 ${isArabic ? "ml-1" : "mr-1 rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isArabic ? "العودة إلى الأخبار" : "Back to news"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";
