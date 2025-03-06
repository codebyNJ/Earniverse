"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Check, X, Award } from "lucide-react"
import { SpinningWheel } from "@/components/spinning-wheel"
import { CongratulationsPopup } from "@/components/congratulations-popup"

export default function GoodDeedsPage() {
  const [deeds, setDeeds] = useState<string[]>([])
  const [currentDeed, setCurrentDeed] = useState("")
  const [isSpinning, setIsSpinning] = useState(false)
  const [showCongrats, setShowCongrats] = useState(false)
  const [prize, setPrize] = useState("")
  const [error, setError] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddDeed = () => {
    if (!currentDeed.trim()) {
      setError("Please enter a good deed!")
      return
    }

    if (deeds.length >= 3) {
      setError("You've already added 3 good deeds!")
      return
    }

    setDeeds([...deeds, currentDeed])
    setCurrentDeed("")
    setError("")

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddDeed()
    }
  }

  const handleRemoveDeed = (index: number) => {
    const newDeeds = [...deeds]
    newDeeds.splice(index, 1)
    setDeeds(newDeeds)
  }

  const handleSpin = () => {
    if (deeds.length < 3) {
      setError("Please add 3 good deeds before spinning!")
      return
    }

    setIsSpinning(true)

    // Simulate wheel spinning and stopping
    setTimeout(() => {
      setIsSpinning(false)

      // Select a random prize
      const prizes = [
        "50 Bonus Points",
        "Achievement Badge",
        "Virtual High Five",
        "Digital Certificate",
        "Motivational Quote",
        "Study Tip",
        "Free E-book",
      ]

      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)]
      setPrize(randomPrize)
      setShowCongrats(true)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-pastel-beige grid-pattern py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-black hover:text-pastel-blue-dark transition-colors font-fredoka"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 font-cabin text-center">
              Share Your Good Deeds
            </h1>
            <p className="text-lg text-black mb-8 font-fredoka text-center">
              Tell us about 3 good things you did today and spin the wheel for a reward!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="text-xl font-bold mb-4 font-cabin">Enter Your Good Deeds</h2>

              <div className="mb-6">
                <div className="flex">
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentDeed}
                    onChange={(e) => setCurrentDeed(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="I helped someone with..."
                    className="flex-1 px-4 py-2 rounded-l-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-pastel-yellow font-fredoka"
                    maxLength={100}
                  />
                  <button
                    onClick={handleAddDeed}
                    className="bg-pastel-green px-4 py-2 rounded-r-lg border-2 border-l-0 border-black hover:bg-pastel-green-dark transition-colors"
                  >
                    <Check className="h-5 w-5" />
                  </button>
                </div>
                {error && <p className="text-red-500 mt-2 text-sm font-fredoka">{error}</p>}
              </div>

              <div className="space-y-3">
                <p className="font-cabin font-bold">Your Good Deeds ({deeds.length}/3):</p>
                {deeds.length === 0 ? (
                  <p className="text-gray-500 italic font-fredoka">No deeds added yet</p>
                ) : (
                  deeds.map((deed, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between bg-pastel-yellow-light p-3 rounded-lg border border-black"
                    >
                      <p className="font-fredoka">{deed}</p>
                      <button
                        onClick={() => handleRemoveDeed(index)}
                        className="text-black hover:text-red-500 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-bold mb-4 font-cabin text-center">Spin The Wheel</h2>

              <div className="relative w-full max-w-xs mx-auto">
                <SpinningWheel isSpinning={isSpinning} />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSpin}
                disabled={isSpinning}
                className={`mt-6 px-8 py-3 rounded-full font-bold border-2 border-black font-fredoka flex items-center gap-2 ${
                  isSpinning
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-pastel-blue text-black hover:bg-pastel-blue-dark"
                }`}
              >
                {isSpinning ? "Spinning..." : "Spin The Wheel"}
                <Award className={`h-5 w-5 ${isSpinning ? "animate-spin" : ""}`} />
              </motion.button>

              <p className="mt-4 text-sm text-center font-fredoka">Complete all 3 good deeds to spin the wheel!</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-black font-fredoka mb-4">
              Every good deed counts! Keep up the great work and inspire others.
            </p>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-pastel-yellow text-black rounded-full font-bold border-2 border-black transition-colors font-fredoka hover:bg-pastel-yellow-dark"
              >
                Return Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showCongrats && <CongratulationsPopup prize={prize} onClose={() => setShowCongrats(false)} />}
      </AnimatePresence>
    </main>
  )
}

