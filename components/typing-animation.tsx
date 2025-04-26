"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  text: string
  className?: string
  typingSpeed?: number
  cursorBlinkSpeed?: number
  startDelay?: number
  showCursor?: boolean
}

export function TypingAnimation({
  text,
  className,
  typingSpeed = 150,
  cursorBlinkSpeed = 500,
  startDelay = 0,
  showCursor = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Delay before typing starts
  useEffect(() => {
    if (displayedText.length === 0 && startDelay > 0) {
      const delayTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, 1))
      }, startDelay)

      return () => clearTimeout(delayTimeout)
    }
  }, [displayedText, text, startDelay])

  // Typing effect
  useEffect(() => {
    if (displayedText.length === 0 && startDelay > 0) {
      // Don't start typing yet, handled by the delay effect
      return
    }

    if (displayedText.length < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(typingTimeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [displayedText, text, typingSpeed, startDelay])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, cursorBlinkSpeed)

    return () => clearInterval(cursorInterval)
  }, [cursorBlinkSpeed])

  return (
    <div className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && (
        <span
          className={cn(
            "inline-block w-[0.5em] h-[1.2em] ml-1 bg-[#22c55e] animate-pulse",
            cursorVisible ? "opacity-100" : "opacity-0",
          )}
          style={{
            animationDuration: `${cursorBlinkSpeed}ms`,
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </div>
  )
}
