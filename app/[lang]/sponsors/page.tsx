import type { Metadata } from "next"
import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"
import { ClientSponsors } from "./ClientSponsors"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  const title = isArabic ? "الرعاة والشركاء | الصحراء الخضراء" : "Sponsors & Partners | Green Desert"
  const description = isArabic
    ? "شراكات استراتيجية ورعاة يدعمون مهمتنا في الاستدامة والابتكار البيئي ضمن رؤية 2030."
    : "Strategic sponsors and partners supporting our mission for sustainability and environmental innovation aligned with Vision 2030."

  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/sponsors`,
      languages: {
        "en-US": "https://greendesert.sa/en/sponsors",
        "ar-SA": "https://greendesert.sa/ar-SA/sponsors",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/sponsors`,
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

export default async function SponsorsPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientSponsors />
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = 'force-static'
