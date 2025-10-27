"use client"

import type { ComponentType, CSSProperties } from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Sprout, Scissors, Factory, Workflow, Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

interface StepConfig {
  id: string
  gradient: string
  accent: string
  icon: ComponentType<{ className?: string, style?: CSSProperties }>
  titleKey: string
  descriptionKey: string
}

const steps: StepConfig[] = [
  {
    id: "growing",
    gradient: "linear-gradient(135deg, #34d399, #059669)",
    accent: "#059669",
    icon: Sprout,
    titleKey: "about.process.steps.growing.title",
    descriptionKey: "about.process.steps.growing.description",
  },
  {
    id: "harvesting",
    gradient: "linear-gradient(135deg, #fbbf24, #f97316)",
    accent: "#f97316",
    icon: Scissors,
    titleKey: "about.process.steps.harvesting.title",
    descriptionKey: "about.process.steps.harvesting.description",
  },
  {
    id: "decorticating",
    gradient: "linear-gradient(135deg, #38bdf8, #0284c7)",
    accent: "#0284c7",
    icon: Factory,
    titleKey: "about.process.steps.decorticating.title",
    descriptionKey: "about.process.steps.decorticating.description",
  },
  {
    id: "transforming",
    gradient: "linear-gradient(135deg, #c084fc, #7c3aed)",
    accent: "#7c3aed",
    icon: Workflow,
    titleKey: "about.process.steps.transforming.title",
    descriptionKey: "about.process.steps.transforming.description",
  },
  {
    id: "building",
    gradient: "linear-gradient(135deg, #bef264, #22c55e)",
    accent: "#22c55e",
    icon: Building2,
    titleKey: "about.process.steps.building.title",
    descriptionKey: "about.process.steps.building.description",
  },
]

export const ProcessExplainer = () => {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const totalSteps = steps.length
  const orbitRadius = 116

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSteps)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused, totalSteps])

  const activeStep = steps[activeIndex]
  const ActiveIcon = activeStep.icon

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
                const Icon = step.icon
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
            <div className="absolute inset-[28%] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-sm font-semibold text-emerald-200">
              {t("about.process.loopLabel")}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-2xl bg-black/60 px-5 py-4 backdrop-blur">
            <div className="flex items-start gap-3 text-left">
              <div
                className="rounded-full p-[2px] transition"
                style={{ background: activeStep.gradient }}
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
                  {t(activeStep.titleKey)}
                </p>
                <p className="text-sm text-white/80">
                  {t(activeStep.descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col space-y-6">
        <ul className="flex-1 space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index === activeIndex
            const gradientBorderStyle: CSSProperties | undefined = isActive
              ? {
                background: step.gradient,
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
                          {t(step.titleKey)}
                        </p>
                        <p
                          className="text-sm text-slate-600"
                          style={isActive ? { color: `${step.accent}cc` } : undefined}
                        >
                          {t(step.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>

        <Button asChild variant="ghost" className="group gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 w-fit">
          <Link href="/solutions">
            {t("about.process.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
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
