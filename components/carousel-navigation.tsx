import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "./language-provider"

interface CarouselNavigationProps {
  onPrev: () => void
  onNext: () => void
  canGoPrev: boolean
  canGoNext: boolean
  align?: "left" | "right" | "center"
}

export function CarouselNavigation({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: CarouselNavigationProps) {
  const { isRTL } = useLanguage()
  const alignmentClass = isRTL ? "flex-row-reverse justify-end" : ""

  return (
    <div className={`flex gap-3 mt-6 ${alignmentClass}`}>
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
