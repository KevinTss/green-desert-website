import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl lg:text-4xl text-gray-800 mb-24 text-center", className)}>
      {children}
    </h2>
  )
}
