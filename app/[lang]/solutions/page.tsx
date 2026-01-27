import { Header } from "@/components/header"
import FooterWithNews from "@/components/footer-with-news"
import { ClientSolutions } from "./ClientSolutions"

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function SolutionsPage({ params }: PageProps) {
  const { lang } = await params
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientSolutions />
      <FooterWithNews lang={lang} />
    </div>
  )
}

export const dynamic = "force-static"
