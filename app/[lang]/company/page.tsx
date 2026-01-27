import type { Metadata } from "next"
import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"
import { ClientCompany } from "./ClientCompany"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  const title = isArabic
    ? "عن الشركة | الصحراء الخضراء"
    : "Company | Green Desert"

  const description = isArabic
    ? "الصحراء الخضراء شركة سعودية ناشئة في التكنولوجيا الحيوية تأسست في يناير 2020، تعالج تحديات المملكة البيئية عبر حلول مستدامة تعتمد على القنب الصناعي بما يتماشى مع رؤية 2030."
    : "Green Desert is a Saudi biotechnology startup founded in January 2020, addressing the Kingdom’s environmental challenges with sustainable, industrial hemp-based solutions aligned with Vision 2030."

  const keywords = isArabic
    ? "الصحراء الخضراء, السعودية, التكنولوجيا الحيوية, الاستدامة, القنب الصناعي, رؤية 2030, الاقتصاد الدائري, حلول بيئية, التصحر, إدارة المياه"
    : "Green Desert, Saudi Arabia, biotechnology, sustainability, industrial hemp, Vision 2030, circular economy, environmental solutions, desertification, water management"

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/company`,
      languages: {
        "en-US": "https://greendesert.sa/en/company",
        "ar-SA": "https://greendesert.sa/ar-SA/company",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/company`,
      siteName: "Green Desert",
      title,
      description,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isArabic ? "عن الشركة" : "Company",
        },
      ],
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

export default async function CompanyPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientCompany />
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = 'force-static'
