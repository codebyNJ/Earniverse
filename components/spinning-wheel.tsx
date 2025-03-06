"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface SpinningWheelProps {
  isSpinning: boolean
}

export function SpinningWheel({ isSpinning }: SpinningWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const segments = [
    { text: "50 Points", color: "#FFF176" },
    { text: "Badge", color: "#81D4FA" },
    { text: "High Five", color: "#C5E1A5" },
    { text: "Certificate", color: "#FFF176" },
    { text: "Quote", color: "#81D4FA" },
    { text: "Study Tip", color: "#C5E1A5" },
    { text: "E-book", color: "#FFF176" },
    { text: "Try Again", color: "#81D4FA" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw wheel segments
    const segmentAngle = (2 * Math.PI) / segments.length

    segments.forEach((segment, i) => {
      const startAngle = i * segmentAngle
      const endAngle = (i + 1) * segmentAngle

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()

      ctx.fillStyle = segment.color
      ctx.fill()
      ctx.lineWidth = 2
      ctx.strokeStyle = "#000"
      ctx.stroke()

      // Add text
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(startAngle + segmentAngle / 2)
      ctx.textAlign = "right"
      ctx.fillStyle = "#000"
      ctx.font = "bold 14px 'Fredoka'"
      ctx.fillText(segment.text, radius - 20, 5)
      ctx.restore()
    })

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI)
    ctx.fillStyle = "#FFF"
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = "#000"
    ctx.stroke()

    // Draw pointer
    ctx.beginPath()
    ctx.moveTo(centerX + radius + 10, centerY)
    ctx.lineTo(centerX + radius - 10, centerY - 15)
    ctx.lineTo(centerX + radius - 10, centerY + 15)
    ctx.closePath()
    ctx.fillStyle = "#000"
    ctx.fill()
  }, [segments])

  return (
    <div className="relative">
      <motion.div
        animate={{
          rotate: isSpinning ? 1440 : 0,
        }}
        transition={{
          duration: 3,
          ease: [0.2, 0.8, 0.6, 1],
        }}
        className="w-full aspect-square"
      >
        <canvas ref={canvasRef} width={300} height={300} className="w-full h-full" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-black z-10"></div>
    </div>
  )
}

