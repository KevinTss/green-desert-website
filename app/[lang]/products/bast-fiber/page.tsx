import type { Metadata } from "next"
import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"
import { ClientProductBastFiber } from "./ClientProductBastFiber"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'
  const title = isArabic ? "ألياف اللحاء (Bast Fiber) | الصحراء الخضراء" : "Hemp Bast Fiber | Green Desert"
  const description = isArabic
    ? "ألياف قنب قوية وخفيفة الوزن للتطبيقات الصناعية والمواد الحيوية."
    : "Strong, lightweight hemp bast fiber for industrial and bio‑based applications."
  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/products/bast-fiber`,
      languages: {
        "en-US": "https://greendesert.sa/en/products/bast-fiber",
        "ar-SA": "https://greendesert.sa/ar-SA/products/bast-fiber",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/products/bast-fiber`,
      siteName: "Green Desert",
      title,
      description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
      locale: isArabic ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  }
}

export default async function BastFiberPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientProductBastFiber />
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = 'force-static'
