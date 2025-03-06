"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isAnimating, setIsAnimating] = useState(false)

  const triggerAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-pastel-beige grid-pattern">
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-20 left-10 w-16 h-16 bg-pastel-yellow rounded-full animate-bounce-slow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-40 right-20 w-12 h-12 bg-pastel-blue rounded-full animate-float"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-20 left-20 w-20 h-20 bg-pastel-green rounded-full animate-pulse-scale"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-40 right-10 w-14 h-14 bg-pastel-yellow-light rounded-full animate-wiggle"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-black mb-6 font-bungee"
              animate={{ scale: isAnimating ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              onClick={triggerAnimation}
            >
              earniverse
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-black mb-8 font-cabin"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              a space where every action leads to reward
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.span className="text-3xl" whileHover={{ scale: 1.3, rotate: 10 }}>
                ❤️
              </motion.span>
              <motion.span className="text-3xl" whileHover={{ scale: 1.3, rotate: -10 }}>
                ❤️
              </motion.span>
              <motion.span className="text-3xl" whileHover={{ scale: 1.3, rotate: 10 }}>
                ❤️
              </motion.span>
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <Link href="/good-deeds">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FFE082" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-pastel-yellow text-black rounded-full font-bold shadow-lg border-2 border-black transition-colors font-fredoka flex items-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:w-1/2"
            whileHover={{ rotate: 2, scale: 1.02 }}
          >
          
          </motion.div>
        </div>

        {/* Interactive Elements */}
        <motion.div
          className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-pastel-beige-light rounded-full border-2 border-black flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-full h-full flex items-center justify-center text-9xl font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {i % 3 === 0 ? "⭐" : i % 3 === 1 ? "😊" : "🎯"}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

