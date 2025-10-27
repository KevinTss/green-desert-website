import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientSolutionDetail } from "./ClientSolutionDetail"
import { notFound } from "next/navigation"
import { SOLUTION_SECTORS } from "@/lib/solutions"

interface PageProps {
  params: Promise<{ lang: string; slug: string }>
}

export async function generateStaticParams() {
  const slugs = SOLUTION_SECTORS.map((sector) => sector.slug)
  const languages = ["en", "ar-SA"]

  return languages.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  )
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const exists = SOLUTION_SECTORS.some((sector) => sector.slug === slug)

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
