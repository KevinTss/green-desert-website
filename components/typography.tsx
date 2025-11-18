import { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/utils"

const BADGE_SIZES = {
  xs: "text-xs tracking-[0.35em]",
  sm: "text-sm tracking-[0.25em]",
} as const

type BadgeProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof BADGE_SIZES
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Badge<T extends ElementType = "p">({
  as,
  size = "xs",
  className,
  ...props
}: BadgeProps<T>) {
  const Tag = (as ?? "p") as ElementType
  return (
    <Tag
      {...props}
      className={cn("font-semibold uppercase text-gray-500", BADGE_SIZES[size], className)}
    />
  )
}

const HEADING_SIZES = {
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-4xl",
  "2xl": "text-4xl sm:text-5xl",
} as const

type HeadingProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof HEADING_SIZES
  align?: "left" | "center" | "right"
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Heading<T extends ElementType = "h2">({
  as,
  size = "xl",
  align = "left",
  className,
  ...props
}: HeadingProps<T>) {
  const Tag = (as ?? "h2") as ElementType
  return (
    <Tag
      {...props}
      className={cn(
        "font-semibold text-slate-900",
        HEADING_SIZES[size],
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    />
  )
}

const TEXT_SIZES = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
} as const

type TextProps<T extends ElementType> = {
  as?: T
  size?: keyof typeof TEXT_SIZES
} & Omit<ComponentPropsWithoutRef<T>, "as">

export function Text<T extends ElementType = "p">({
  as,
  size = "base",
  className,
  ...props
}: TextProps<T>) {
  const Tag = (as ?? "p") as ElementType
  return (
    <Tag
      {...props}
      className={cn("leading-relaxed text-slate-600", TEXT_SIZES[size], className)}
    />
  )
}
