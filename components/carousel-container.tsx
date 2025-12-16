"use client"

import { useState, ReactNode } from "react"
import { useLanguage } from "@/components/language-provider"
import { CarouselNavigation } from "@/components/carousel-navigation"

interface CarouselContainerProps {
  children: ReactNode
  itemCount: number
  itemsPerView: number
  gap?: number
}

export function CarouselContainer({
  children,
  itemCount,
  itemsPerView,
  gap = 6,
}: CarouselContainerProps) {
  const { isRTL } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = itemCount - itemsPerView

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  // Calculate the percentage to move including the gap
  // Each card is (100 / itemsPerView)% wide
  // We need to account for the gap in pixels when translating
  const cardWidthPercent = 100 / itemsPerView
  const gapInRem = gap * 0.25

  const translateDirection = isRTL ? 1 : -1
  // Translate by card width percentage + gap converted to percentage
  const translateValue = currentIndex * cardWidthPercent * translateDirection

  return (
    <div className="relative">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(${translateValue}% + ${translateDirection * currentIndex * gap * 0.25}rem))`,
            gap: `${gapInRem}rem`,
          }}
        >
          {children}
        </div>
      </div>
      <CarouselNavigation
        onPrev={handlePrev}
        onNext={handleNext}
        canGoPrev={currentIndex > 0}
        canGoNext={currentIndex < maxIndex}
      />
    </div>
  )
}
