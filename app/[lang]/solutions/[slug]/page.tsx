import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientSolutionDetail } from "./ClientSolutionDetail"
import { notFound } from "next/navigation"
import { SOLUTION_SLUGS } from "@/lib/solutions"

interface PageProps {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs: string[] = SOLUTION_SLUGS
  const languages = ["en", "ar-SA"]

  const params: { lang: string; slug: string }[] = languages.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug: String(slug),
    }))
  )

  return params
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const exists = SOLUTION_SLUGS.some((sectorSlug) => sectorSlug === slug)

  if (!exists) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientSolutionDetail slug={slug} />
      <Footer />
    </div>
  )
}

export const dynamic = "force-static"
