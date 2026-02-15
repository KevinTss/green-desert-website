import { Text as TypographyText } from "@/components/typography"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <TypographyText className="text-gray-600">Page not found</TypographyText>
      </div>
    </div>
  )
}
