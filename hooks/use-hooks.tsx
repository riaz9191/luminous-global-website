"use client"

import { useEffect, useState } from "react"

// Smooth Counter Hook
export function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return { count, setIsVisible }
}

// Fixed Intersection Observer Hook - No Glitch
export function useInView(threshold = 0.3) {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when entering view
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Trigger earlier
      },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold, isInView])

  return [setRef, isInView] as const
}

// Typewriter Effect Hook
export function useTypewriter(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}
