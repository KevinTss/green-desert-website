import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: ReactNode
  subtitle?: ReactNode
  actionHref?: string
  actionText?: string
  isRTL?: boolean
  className?: string
}

// Server-compatible section header (no hooks) that lays out:
// - Left: Title + small subtitle
// - Right: Action link (mirrors to left if RTL)
export function SectionHeader({
  title,
  subtitle,
  actionHref,
  actionText,
  isRTL = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 flex items-end justify-between", className)}>
      <div className={cn(isRTL ? "text-right" : "text-left")}
      >
        <h2 className="text-3xl lg:text-4xl text-gray-800">
          {title}
        </h2>
        {subtitle && (
          <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
        )}
      </div>

      {actionHref && actionText && (
        <Link
          href={actionHref}
          className={cn(
            "inline-flex items-center text-green-600 hover:text-green-700 font-medium",
            isRTL ? "flex-row-reverse space-x-reverse space-x-2" : "space-x-2"
          )}
        >
          <span>{actionText}</span>
          <ArrowRight className={cn("w-4 h-4", isRTL ? "rotate-180" : undefined)} />
        </Link>
      )}
    </div>
  )
}

