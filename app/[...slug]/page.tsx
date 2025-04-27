"use client"
import { useRouter } from "next/navigation"
import { Starfield } from "@/components/starfield"
import { TypingAnimation } from "@/components/typing-animation"

export default function CatchAllPage() {
  const router = useRouter()

  // Optional: Redirect to home page after a delay
  // Uncomment this if you want to redirect instead of showing the animation directly
  /*
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, 5000) // Redirect after 5 seconds
    
    return () => clearTimeout(redirectTimer)
  }, [router])
  */

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-black overflow-hidden">
      {/* Animated starfield background */}
      <Starfield />

      <div className="z-10 text-center flex flex-col items-center space-y-6">
        <TypingAnimation
          text="404 - lost in space"
          className="font-mono text-4xl md:text-6xl text-[#22c55e]"
          typingSpeed={150}
          showCursor={true}
        />

        <div className="opacity-0 animate-fade-in mt-8">
          <button
            onClick={() => router.push("/")}
            className="text-[#22c55e] border border-[#22c55e] px-4 py-2 rounded hover:bg-[#22c55e]/10 transition-colors"
          >
            Return to Earth
          </button>
        </div>
      </div>
    </main>
  )
}
