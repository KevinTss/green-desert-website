import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientTeam } from "./ClientTeam"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  const title = isArabic ? "فريق العمل | الصحراء الخضراء" : "Team | Green Desert"
  const description = isArabic
    ? "تعرّف على الفريق الذي يقود الابتكار البيئي في الصحراء الخضراء ويعمل على حلول مستدامة تتماشى مع رؤية 2030."
    : "Meet the team driving environmental innovation at Green Desert with sustainable solutions aligned to Vision 2030."

  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/team`,
      languages: {
        "en-US": "https://greendesert.sa/en/team",
        "ar-SA": "https://greendesert.sa/ar-SA/team",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/team`,
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

export default async function TeamPage({}: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientTeam />
      <Footer />
    </div>
  )
}

export const dynamic = 'force-static'

