"use client"

import * as React from "react"
import { icons } from "lucide-react"
import type { LucideProps } from "lucide-react"

import { cn } from "@/lib/utils"

function normalizeName(name?: string) {
  if (!name) return ""
  return name
    .replace(/[-_\s]+(.)?/g, (_, ch) => (ch ? ch.toUpperCase() : ""))
    .replace(/^(.)/, (m) => m.toUpperCase())
}

type IconProps = LucideProps & {
  name?: string
  fallback?: React.ReactNode
}

export function Icon({ name, className, fallback = null, ...props }: IconProps) {
  const normalized = normalizeName(name)
  const IconComponent = icons[normalized as keyof typeof icons]

  if (!IconComponent) return fallback ? <>{fallback}</> : null
  return <IconComponent className={cn(className)} {...props} />
}
