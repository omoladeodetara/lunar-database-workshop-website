"use client"

import { Starfield } from "@/components/starfield"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-black overflow-hidden">
      {/* Animated starfield background */}
      <Starfield />

      {/* Centered text with typing animation */}
      <div className="z-10 text-center flex flex-col items-center">
        <TypingAnimation
          text="paused."
          className="font-mono text-4xl md:text-6xl text-[#22c55e] mb-4"
          typingSpeed={150}
        />
        <TypingAnimation
          text="lost in space"
          className="font-mono text-2xl md:text-4xl text-[#22c55e]"
          typingSpeed={150}
          startDelay={2000}
          showCursor={false}
        />
      </div>
    </main>
  )
}
