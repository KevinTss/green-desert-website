import type { Metadata } from "next"
import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"
import { ClientProductSeeds } from "./ClientProductSeeds"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'
  const title = isArabic ? "بذور القنب | الصحراء الخضراء" : "Hemp Seeds | Green Desert"
  const description = isArabic
    ? "بذور قنب منخفضة الـ THC للتغذية البشرية والحيوانية والزراعة المستدامة."
    : "Low‑THC hemp seeds for human and animal nutrition and sustainable cultivation."
  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/products/seeds`,
      languages: {
        "en-US": "https://greendesert.sa/en/products/seeds",
        "ar-SA": "https://greendesert.sa/ar-SA/products/seeds",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/products/seeds`,
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

export default async function SeedsPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientProductSeeds />
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = 'force-static'
