import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google"
import "../globals.css"
import { LanguageProvider } from "@/components/language-provider"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
})

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    lang: string
  }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  return {
    title: isArabic
      ? "الصحراء الخضراء - تسريع تحول المملكة العربية السعودية نحو مستقبل أخضر"
      : "Green Desert - Accelerating Saudi Arabia's Transformation Towards A Greener Future",
    description: isArabic
      ? "الصحراء الخضراء هي شركة سعودية ناشئة في مجال التكنولوجيا الحيوية تقود التأثير البيئي في المملكة العربية السعودية ودول الخليج. حلول مستدامة للتحديات البيئية."
      : "Green Desert is a biotechnology Saudi Arabian Start Up Company leading ecological impact in Saudi Arabia and the Gulf Countries. Sustainable solutions for environmental challenges.",
    keywords: isArabic
      ? "الصحراء الخضراء، المملكة العربية السعودية، التكنولوجيا الحيوية، الحلول البيئية، الاستدامة، رؤية 2030، منتجات القنب، تحويل الكتلة الحيوية"
      : "Green Desert, Saudi Arabia, biotechnology, environmental solutions, sustainability, Vision 2030, hemp products, biomass composting",
    authors: [{ name: "Green Desert" }],
    creator: "Green Desert",
    publisher: "Green Desert",
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_SA" : "en_US",
      alternateLocale: isArabic ? "en_US" : "ar_SA",
      url: `https://greendesert.sa/${lang}`,
      siteName: "Green Desert",
      title: isArabic
        ? "الصحراء الخضراء - الحلول البيئية للمملكة العربية السعودية"
        : "Green Desert - Environmental Solutions for Saudi Arabia",
      description: isArabic
        ? "شركة رائدة في التكنولوجيا الحيوية تقدم حلول بيئية مستدامة في المملكة العربية السعودية ومنطقة الخليج."
        : "Leading biotechnology company providing sustainable environmental solutions in Saudi Arabia and the Gulf region.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isArabic ? "الصحراء الخضراء - الحلول البيئية" : "Green Desert - Environmental Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic ? "الصحراء الخضراء - الحلول البيئية" : "Green Desert - Environmental Solutions",
      description: isArabic
        ? "حلول التكنولوجيا الحيوية المستدامة للتحديات البيئية في المملكة العربية السعودية."
        : "Sustainable biotechnology solutions for Saudi Arabia's environmental challenges.",
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://greendesert.sa/${lang}`,
      languages: {
        "en-US": "https://greendesert.sa/en",
        "ar-SA": "https://greendesert.sa/ar-SA",
      },
    },
  }
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  const isArabic = lang === 'ar-SA'

  return (
    <html lang={isArabic ? "ar" : "en"} dir={isArabic ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plusJakartaSans.variable} ${notoSansArabic.variable} font-sans`}>
        <LanguageProvider initialLang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  )
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar-SA' },
  ]
}
