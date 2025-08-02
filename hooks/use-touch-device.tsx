"use client"

import { useState, useEffect } from "react"

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if running in a browser environment
    if (typeof window !== "undefined") {
      const onTouchStart = "ontouchstart" in window
      const onTouchPoints = navigator.maxTouchPoints > 0
      // @ts-ignore: msMaxTouchPoints is a vendor-prefixed property
      const onMsTouchPoints = navigator.msMaxTouchPoints > 0

      const isTouch = onTouchStart || onTouchPoints || onMsTouchPoints
      setIsTouchDevice(isTouch)
    }
  }, [])

  return isTouchDevice
}
