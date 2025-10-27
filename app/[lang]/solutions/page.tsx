import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientSolutions } from "./ClientSolutions"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ClientSolutions />
      <Footer />
    </div>
  )
}

export const dynamic = "force-static"
