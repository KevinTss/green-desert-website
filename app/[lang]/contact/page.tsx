import type { Metadata } from "next"
import { ClientContact } from "./ClientContact"
import FooterWithNews from "@/components/footer-with-news"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  const title = isArabic ? "اتصل بنا | الصحراء الخضراء" : "Contact us | Green Desert"
  const description = isArabic
    ? "راسل فريق الصحراء الخضراء لبدء التعاون أو طرح الأسئلة حول حلولنا."
    : "Reach the Green Desert team to start a collaboration or ask about our solutions."

  return {
    title,
    description,
    alternates: {
      canonical: `https://greendesert.sa/${lang}/contact`,
      languages: {
        "en-US": "https://greendesert.sa/en/contact",
        "ar-SA": "https://greendesert.sa/ar-SA/contact",
      },
    },
    openGraph: {
      type: "article",
      url: `https://greendesert.sa/${lang}/contact`,
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

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <>
      <ClientContact />
      <FooterWithNews lang={lang} />
    </>
  )
}

export const dynamic = 'force-static'
