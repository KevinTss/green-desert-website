'use client'

import { useEffect, useMemo, useRef, useState } from "react"

import { useLanguage } from "@/components/language-provider"

const kpis = [
  {
    key: "co2",
    valueKey: "kpi.co2.value",
    labelKey: "kpi.co2.label",
    descriptionKey: "kpi.co2.description",
  },
  {
    key: "footprint",
    valueKey: "kpi.footprint.value",
    labelKey: "kpi.footprint.label",
    descriptionKey: "kpi.footprint.description",
  },
  {
    key: "pilots",
    valueKey: "kpi.pilots.value",
    labelKey: "kpi.pilots.label",
    descriptionKey: "kpi.pilots.description",
  },
]

const parseKpiValue = (rawValue: string) => {
  const trimmed = rawValue.trim()
  const match = trimmed.match(/^([\d.,]+)/)
  if (!match) {
    return { numericValue: NaN, decimals: 0, suffix: trimmed }
  }
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
    const duration = 2500

    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setDisplayValue(value * progress)
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
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

export const Section3KpiStrip = () => {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="kpis" ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-24 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              {t("kpi.goalTagline")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              {t("kpi.heading")}
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              {t("kpi.subheading")}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => {
            const rawValue = t(kpi.valueKey)
            const { numericValue, decimals, suffix } = parseKpiValue(rawValue)
            const hasNumber = Number.isFinite(numericValue)
            const suffixText = suffix.trim()
            return (
              <div
                key={kpi.key}
                className="group relative overflow-hidden rounded-2xl border border-green-100 bg-white p-6 shadow-[0_25px_45px_-35px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_30px_50px_-35px_rgba(16,185,129,0.4)]"
              >
                <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-green-300/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                  {t(kpi.labelKey)}
                </p>
                <div className="mt-4">
                  <span className="block text-4xl font-semibold text-slate-900 sm:text-5xl">
                    {hasNumber ? (
                      <AnimatedNumber
                        value={numericValue}
                        decimals={decimals}
                        active={hasAnimated}
                      />
                    ) : rawValue}
                  </span>
                </div>
                <div className="mt-2">
                  {hasNumber && suffixText.length > 0 && (
                    <span className="mt-2 mr-2 inline-block text-base font-medium text-slate-500">
                      {suffixText}
                    </span>
                  )}
                  <span className="text-sm text-slate-500">
                    {t(kpi.descriptionKey)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
