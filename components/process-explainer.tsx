"use client"

import type { ComponentType, CSSProperties } from "react"
import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sprout, Scissors, Factory, Workflow, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Text as TypographyText } from "@/components/typography"

const iconMap: Record<string, ComponentType<{ className?: string, style?: CSSProperties }>> = {
  sprout: Sprout,
  scissors: Scissors,
  factory: Factory,
  workflow: Workflow,
  building: Building2,
}

interface ProcessContent {
  title?: string
  subtitle?: string
  loopLabel?: string
  cta?: { label?: string; href?: string }
  steps?: Array<{
    id: string
    title?: string
    description?: string
    accent?: string
    icon?: string
  }>
}

interface ProcessExplainerProps {
  process?: ProcessContent
}

export const ProcessExplainer = ({ process }: ProcessExplainerProps) => {
  const content = process ?? {}
  const steps = useMemo(() => {
    const source = Array.isArray(content.steps) ? content.steps : []
    if (!source.length) return []
    return source.map((step, idx) => {
      const accent = step.accent || "#059669"
      const iconKey = step.icon || "sprout"
      const IconComponent = iconMap[iconKey] || Sprout
      return {
        ...step,
        accent,
        icon: iconKey,
        gradient: `linear-gradient(135deg, ${accent}, ${accent})`,
        IconComponent,
      }
    })
  }, [content.steps])

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSteps = steps.length
  const orbitRadius = 116

  if (!steps.length) return null

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, totalSteps])

  const activeStep = steps[activeIndex]
  const ActiveIcon = iconMap[activeStep.icon || "sprout"] || Sprout

  return (
    <div
      className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] items-stretch"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex h-full min-h-[320px] overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e33,transparent_65%)]" />
        <div className="absolute inset-0 opacity-60" aria-hidden="true">
          <div className="absolute -inset-[40%] rounded-full bg-emerald-500/25 blur-3xl animate-[drift_12s_linear_infinite]" />
          <div className="absolute -inset-[55%] rounded-full bg-sky-500/15 blur-3xl animate-[drift_18s_linear_infinite_reverse]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-56 w-56">
            <div className="absolute inset-0 rounded-full border border-white/20" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite]" aria-hidden="true">
              {steps.map((step, index) => {
                const angle = (360 / totalSteps) * index
                const Icon = step.IconComponent || Sprout
                const isActive = index === activeIndex
                return (
                  <div
                    key={`${step.id}-${index}`}
                    className="absolute left-1/2 top-1/2 flex items-center justify-center"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbitRadius}px)`,
                    }}
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition duration-300",
                        isActive ? "scale-110 border-white/70 bg-white text-emerald-600 shadow-lg" : "text-white/80"
                      )}
                      style={{ transform: `rotate(-${angle}deg)` }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="absolute inset-[28%] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-[13px] font-semibold text-emerald-200">
              {content.loopLabel}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-2xl bg-black/60 px-5 py-4 backdrop-blur">
            <div className="flex items-start gap-3 text-left">
              <div
                className="rounded-full p-[2px] transition"
                style={{ background: activeStep.gradient || `linear-gradient(135deg, ${activeStep.accent}, ${activeStep.accent})` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
                  <ActiveIcon className="h-5 w-5" style={{ color: activeStep.accent }} />
                </div>
              </div>
              <div>
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: activeStep.accent }}
                >
                  {activeStep.title}
                </p>
                <TypographyText variant="white-muted" className="text-sm">
                  {activeStep.description}
                </TypographyText>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col space-y-6">
        <ul className="flex-1 space-y-3">
          {steps.map((step, index) => {
            const Icon = step.IconComponent || Sprout
            const isActive = index === activeIndex
            const gradientBorderStyle: CSSProperties | undefined = isActive
              ? {
                background: step.accent
                  ? `linear-gradient(135deg, ${step.accent}, ${step.accent})`
                  : "linear-gradient(135deg, #34d399, #059669)",
                padding: "2px",
                borderRadius: "1.5rem",
              }
              : {
                padding: "2px",
              }
            return (
              <li key={`${step.id}-item`}>
                <div
                  style={gradientBorderStyle}
                  className={cn(
                    "rounded-[1.5rem] transition-shadow",
                    isActive ? "shadow-lg" : ""
                  )}
                >
                  <button
                    type="button"
                    className={cn(
                      "w-full rounded-[1.4rem] bg-white/80 px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      isActive
                        ? "bg-white shadow-md focus-visible:ring-emerald-500"
                        : "hover:bg-white focus-visible:ring-emerald-400"
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-1 rounded-full bg-white transition"
                        style={
                          isActive
                            ? {
                              boxShadow: `0 0 0 2px ${step.accent}33`,
                              color: step.accent,
                            }
                            : undefined
                        }
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full">
                          <Icon className={cn("h-4 w-4", isActive ? "" : "text-emerald-500")} />
                        </div>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold text-slate-900"
                          style={isActive ? { color: step.accent } : undefined}
                        >
                          {step.title}
                        </p>
                        <TypographyText
                          variant="muted"
                          className="text-sm"
                          style={isActive ? { color: `${step.accent}cc` } : undefined}
                        >
                          {step.description}
                        </TypographyText>
                      </div>
                    </div>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

        {content.cta?.label && content.cta?.href && (
          <Button asChild variant="ghost" className="group gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 w-fit">
            <Link href={content.cta.href}>
              {content.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>

      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translate3d(-10%, -10%, 0) scale(1);
          }
          50% {
            transform: translate3d(10%, 10%, 0) scale(1.1);
          }
          100% {
            transform: translate3d(-10%, -10%, 0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
