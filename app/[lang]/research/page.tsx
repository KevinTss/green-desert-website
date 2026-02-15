import type { Metadata } from "next"
import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === "ar-SA"

  const title = isArabic ? "البحوث | الصحراء الخضراء" : "Research | Green Desert"
  const description = isArabic
    ? "تابع آخر المستجدات البحثية لدى الصحراء الخضراء."
    : "Follow Green Desert research updates and insights."

  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/research`,
      languages: {
        "en-US": "https://greendesert.sa/en/research",
        "ar-SA": "https://greendesert.sa/ar-SA/research",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/research`,
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

export default async function ResearchPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="flex min-h-[45vh] items-center justify-center">
          <p className="text-lg font-medium text-gray-600">Coming soon</p>
        </div>
      </main>
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = "force-static"
