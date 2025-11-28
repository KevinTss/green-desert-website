"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Phrase {
  text: string
  color: string
}

interface AnimatedHeadlineProps {
  prefix: string
  phrases: Phrase[]
  intervalMs?: number
  onPhraseChange?: (index: number) => void
}

export const AnimatedHeadline = ({ prefix, phrases, intervalMs = 3000, onPhraseChange }: AnimatedHeadlineProps) => {
  const [index, setIndex] = useState(0)
  const current = phrases[index]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % phrases.length
        return next
      })
    }, intervalMs)
    return () => clearInterval(interval)
  }, [phrases.length, intervalMs])

  useEffect(() => {
    onPhraseChange?.(index)
  }, [index, onPhraseChange])

  return (
    <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
      <span>
        {prefix}{" "}
      </span>
      <br />
      <span
        className="inline-block min-w-[15ch] whitespace-nowrap"
        style={{ display: "inline-block" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className={`${current.color} inline-block`}
          >
            {current.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  )
}
