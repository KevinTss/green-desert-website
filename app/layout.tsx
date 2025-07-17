import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
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

export const metadata: Metadata = {
  title: "Green Desert - Accelerating Saudi Arabia's Transformation Towards A Greener Future",
  description:
    "Green Desert is a biotechnology Saudi Arabian Start Up Company leading ecological impact in Saudi Arabia and the Gulf Countries. Sustainable solutions for environmental challenges.",
  keywords:
    "Green Desert, Saudi Arabia, biotechnology, environmental solutions, sustainability, Vision 2030, hemp products, biomass composting",
  authors: [{ name: "Green Desert" }],
  creator: "Green Desert",
  publisher: "Green Desert",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://greendesert.sa",
    siteName: "Green Desert",
    title: "Green Desert - Environmental Solutions for Saudi Arabia",
    description:
      "Leading biotechnology company providing sustainable environmental solutions in Saudi Arabia and the Gulf region.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Desert - Environmental Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Desert - Environmental Solutions",
    description: "Sustainable biotechnology solutions for Saudi Arabia's environmental challenges.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://greendesert.sa",
    languages: {
      "en-US": "https://greendesert.sa/en",
      "ar-SA": "https://greendesert.sa/ar",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plusJakartaSans.variable} ${notoSansArabic.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
