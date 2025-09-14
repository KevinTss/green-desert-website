import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientProductHurds } from "./ClientProductHurds"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'
  const title = isArabic ? "قشور القنب (HURDS) | الصحراء الخضراء" : "Hemp Hurds | Green Desert"
  const description = isArabic
    ? "مادة قنب متعددة الاستخدامات للتطبيقات البيئية والإنشائية والزراعية."
    : "Versatile hemp hurds for environmental, construction, and agricultural applications."
  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/products/hurds`,
      languages: {
        "en-US": "https://greendesert.sa/en/products/hurds",
        "ar-SA": "https://greendesert.sa/ar-SA/products/hurds",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/products/hurds`,
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

export default async function HurdsPage({}: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientProductHurds />
      <Footer />
    </div>
  )
}

export const dynamic = 'force-static'

