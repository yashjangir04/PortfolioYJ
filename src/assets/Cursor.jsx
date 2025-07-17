"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function GsapCursor() {
  const dotRef = useRef(null)
  const borderRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e

      // Smooth follow for border circle
      gsap.to(borderRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power3.out",
      })

      // Fast follow for center dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power1.out",
      })
    }

    const handleHover = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", moveCursor)

    const interactiveEls = document.querySelectorAll("a, button, img, input, textarea, select")
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHover)
      el.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* Center dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 bg-black dark:bg-white rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Border ring */}
      <div
        ref={borderRef}
        className="absolute top-0 left-0 border border-black dark:border-white rounded-full"
        style={{
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  )
}
