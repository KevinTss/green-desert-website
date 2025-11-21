"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type StatItem = {
  id: string
  value: string
  label?: string
  description?: string
  href?: string
}

const parseValue = (rawValue: string) => {
  const trimmed = rawValue.trim()
  const match = trimmed.match(/^([\d.,]+)/)
  if (!match) return { numericValue: NaN, decimals: 0, suffix: trimmed }
  const numericPart = match[1]
  const normalized = numericPart.replace(/[,٬]/g, "").replace(/٫/g, ".")
  const decimals = normalized.includes(".") ? normalized.split(".")[1].length : 0
  const numericValue = parseFloat(normalized)
  const suffix = trimmed.slice(numericPart.length)
  return { numericValue, decimals, suffix }
}

const AnimatedNumber = ({ value, decimals, active }: { value: number; decimals: number; active: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!active) {
      setDisplayValue(0)
      return
    }
    let frame: number | null = null
    let start: number | null = null
    const duration = 2000

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(value * progress)
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [value, active])

  const formatter = useMemo(() => new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }), [decimals])

  return <>{formatter.format(displayValue)}</>
}

interface AnimatedStatCardsProps {
  items: StatItem[]
  className?: string
}

export function AnimatedStatCards({ items, className }: AnimatedStatCardsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || active) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [active])

  return (
    <div
      ref={sectionRef}
      className={cn("grid gap-4 sm:grid-cols-3", className)}
    >
      {items.map((item) => {
        const { numericValue, decimals, suffix } = parseValue(item.value)
        const hasNumber = Number.isFinite(numericValue)
        const suffixText = suffix.trim()
        const isLink = Boolean(item.href)
        return (
          <CardWrapper key={item.id} href={item.href}>
            <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-emerald-300/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-3">
              {item.label && (
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                  {item.label}
                </p>
              )}
              {isLink && <ArrowUpRight className="h-5 w-5 text-emerald-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
            </div>
            <div className="mt-3">
              <span className="block text-3xl font-semibold text-slate-900 sm:text-4xl">
                {hasNumber ? (
                  <AnimatedNumber value={numericValue} decimals={decimals} active={active} />
                ) : item.value}
              </span>
              {hasNumber && suffixText.length > 0 && (
                <span className="mt-1 inline-block text-sm font-medium text-slate-500">
                  {suffixText}
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            )}
          </CardWrapper>
        )
      })}
    </div>
  )
}

function CardWrapper({ href, children }: { href?: string; children: React.ReactNode }) {
  if (href) {
    return (
      <Link
        href={href}
        className="group relative h-full overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_25px_45px_-35px_rgba(16,185,129,0.35)]"
      >
        {children}
      </Link>
    )
  }
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_25px_45px_-35px_rgba(16,185,129,0.35)]">
      {children}
    </div>
  )
}
