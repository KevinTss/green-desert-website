import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  disablePadding?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, disablePadding = false, ...props },
  ref
) {
  return (
    <section
      ref={ref}
      {...props}
      className={cn(!disablePadding && "py-16 lg:py-20", className)}
    />
  )
})
