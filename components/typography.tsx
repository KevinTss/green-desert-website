import { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"

// ============================================================================
// BADGE COMPONENT - Uppercase labels with letter-spacing
// ============================================================================
const BADGE_SIZES = {
  xs: "text-[10px] tracking-[0.35em]",
  sm: "text-[11px] tracking-[0.25em]",
  md: "text-xs tracking-[0.3em]",
  lg: "text-sm tracking-[0.25em]",
} as const

const BADGE_VARIANTS = {
  default: "text-gray-500",
  emerald: "text-emerald-500",
  "emerald-light": "text-emerald-300",
  "emerald-dark": "text-emerald-600",
  white: "text-white/90",
} as const

type BadgeProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof BADGE_SIZES
  variant?: keyof typeof BADGE_VARIANTS
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Badge<T extends ElementType = "p">({
  as,
  size = "xs",
  variant = "default",
  className,
  ...props
}: BadgeProps<T>) {
  const Tag = (as ?? "p") as ElementType
  return (
    <Tag
      {...props}
      className={cn(
        "font-semibold uppercase",
        BADGE_SIZES[size],
        BADGE_VARIANTS[variant],
        className
      )}
    />
  )
}

// ============================================================================
// SECTION LABEL COMPONENT - H1 labels above section titles
// ============================================================================
type SectionLabelProps<T extends ElementType> = {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function SectionLabel<T extends ElementType = "h1">({
  as,
  className,
  ...props
}: SectionLabelProps<T>) {
  const Tag = (as ?? "h1") as ElementType
  return (
    <Tag
      {...props}
      className={cn(
        "text-[25px] tracking-[2.5px] text-black font-semibold uppercase",
        className
      )}
    />
  )
}

// ============================================================================
// HEADING COMPONENT - Semantic headings with consistent sizing
// ============================================================================
const HEADING_SIZES = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-xl sm:text-2xl",
  xl: "text-2xl sm:text-3xl",
  "2xl": "text-3xl sm:text-4xl",
  "3xl": "text-2xl sm:text-3xl lg:text-4xl", // Hero headings
} as const

const HEADING_VARIANTS = {
  default: "text-slate-900",
  white: "text-white",
  gray: "text-gray-800",
} as const

type HeadingProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof HEADING_SIZES
  variant?: keyof typeof HEADING_VARIANTS
  align?: "left" | "center" | "right"
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Heading<T extends ElementType = "h2">({
  as,
  size = "xl",
  variant = "default",
  align = "left",
  className,
  ...props
}: HeadingProps<T>) {
  const Tag = (as ?? "h2") as ElementType
  return (
    <Tag
      {...props}
      className={cn(
        "font-semibold leading-snug",
        HEADING_SIZES[size],
        HEADING_VARIANTS[variant],
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    />
  )
}

// ============================================================================
// TEXT COMPONENT - Body text with consistent styling
// ============================================================================
const TEXT_SIZES = {
  xs: "text-xs",
  sm: "text-[13px]",
  base: "text-base",
  lg: "text-base",
} as const

const TEXT_VARIANTS = {
  default: "text-slate-600",
  muted: "text-slate-500",
  white: "text-white/85",
  "white-muted": "text-white/80",
  gray: "text-gray-600",
} as const

type TextProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof TEXT_SIZES
  variant?: keyof typeof TEXT_VARIANTS
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Text<T extends ElementType = "p">({
  as,
  size = "base",
  variant = "default",
  className,
  ...props
}: TextProps<T>) {
  const Tag = (as ?? "p") as ElementType
  return (
    <Tag
      {...props}
      className={cn("leading-normal", TEXT_SIZES[size], TEXT_VARIANTS[variant], className)}
    />
  )
}

// ============================================================================
// STAT COMPONENT - Large numbers for KPIs and metrics
// ============================================================================
const STAT_SIZES = {
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl",
} as const

type StatProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof STAT_SIZES
  variant?: "default" | "green"
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Stat<T extends ElementType = "span">({
  as,
  size = "md",
  variant = "default",
  className,
  ...props
}: StatProps<T>) {
  const Tag = (as ?? "span") as ElementType
  return (
    <Tag
      {...props}
      className={cn(
        "block font-semibold",
        STAT_SIZES[size],
        variant === "green" ? "text-green-600" : "text-slate-900",
        className
      )}
    />
  )
}

// ============================================================================
// LABEL COMPONENT - Small supplementary text (descriptions, captions)
// ============================================================================
type LabelProps<T extends ElementType> = {
  as?: T
  variant?: "default" | "muted" | "success"
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Label<T extends ElementType = "span">({
  as,
  variant = "default",
  className,
  ...props
}: LabelProps<T>) {
  const Tag = (as ?? "span") as ElementType
  const colorClass =
    variant === "success" ? "text-emerald-600" :
      variant === "muted" ? "text-slate-400" :
        "text-slate-500"

  return (
    <Tag
      {...props}
      className={cn("inline-block text-sm font-medium", colorClass, className)}
    />
  )
}
