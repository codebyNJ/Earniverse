"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Lightbulb, Brain, GraduationCap, Sparkles } from "lucide-react"

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCard, setActiveCard] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Interactive elements for each card
  const cardInteractives = [
    // Card 1 - Lightbulb that turns on
    ({ isActive }: { isActive: boolean }) => (
      <motion.div
        className={`absolute top-4 right-4 p-2 rounded-full ${isActive ? "bg-pastel-yellow" : "bg-pastel-yellow-light"}`}
        animate={{ scale: isActive ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Lightbulb className={`h-6 w-6 ${isActive ? "text-black" : "text-gray-500"}`} />
      </motion.div>
    ),

    // Card 2 - Brain that pulses
    ({ isActive }: { isActive: boolean }) => (
      <motion.div
        className="absolute top-4 right-4 p-2 rounded-full bg-pastel-blue-light"
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
          rotate: isActive ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          duration: 1,
          repeat: isActive ? Number.POSITIVE_INFINITY : 0,
          repeatType: "loop",
        }}
      >
        <Brain className="h-6 w-6 text-black" />
      </motion.div>
    ),

    // Card 3 - Graduation cap that flips
    ({ isActive }: { isActive: boolean }) => (
      <motion.div
        className="absolute top-4 right-4 p-2 rounded-full bg-pastel-green-light"
        animate={{
          rotateY: isActive ? 360 : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isActive ? Number.POSITIVE_INFINITY : 0,
          repeatType: "loop",
        }}
      >
        <GraduationCap className="h-6 w-6 text-black" />
      </motion.div>
    ),
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-pastel-beige-light relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-pastel-blue-light rounded-br-full opacity-70"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-pastel-green-light rounded-tl-full opacity-70"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-cabin">what we do</h2>
          <p className="text-lg text-black max-w-2xl mx-auto font-fredoka">
            We help students reach their full potential through motivation and guidance
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 - Yellow */}
          <motion.div
            variants={item}
            className="bg-pastel-yellow rounded-3xl p-8 shadow-lg border-2 border-black relative overflow-hidden group transition-all duration-300 card-hover-1"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{ y: -10, rotate: 2 }}
          >
            {cardInteractives[0]({ isActive: activeCard === 0 })}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-4 font-cabin">motivate students</h3>
              <p className="text-black font-fredoka">
                We provide the encouragement and support students need to stay motivated throughout their academic
                journey.
              </p>

              {/* Interactive element */}
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="px-4 py-2 bg-white rounded-full border-2 border-black font-bold text-sm"
                  whileHover={{ scale: 1.1, backgroundColor: "#FFE082" }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Motivated!
                </motion.button>
              </motion.div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pastel-yellow-dark rounded-full"></div>
          </motion.div>

          {/* Card 2 - Blue */}
          <motion.div
            variants={item}
            className="bg-pastel-blue rounded-3xl p-8 shadow-lg border-2 border-black relative overflow-hidden group transition-all duration-300 card-hover-2"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{ scale: 1.05 }}
          >
            {cardInteractives[1]({ isActive: activeCard === 1 })}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-4 font-cabin">become better version of yourself</h3>
              <p className="text-black font-fredoka">
                Our platform helps you discover your potential and develop the skills needed to become your best self.
              </p>

              {/* Interactive element - Draggable star */}
              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="relative w-12 h-12 cursor-grab"
                  drag
                  dragConstraints={{ left: -50, right: 50, top: -30, bottom: 30 }}
                  whileDrag={{ scale: 1.2 }}
                >
                  <Sparkles className="w-full h-full text-yellow-500" />
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative zigzag */}
            <svg
              className="absolute bottom-0 right-0 w-24 h-24 text-pastel-blue-dark"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 80 L20 60 L40 80 L60 60 L80 80 L100 60" stroke="currentColor" strokeWidth="5" />
            </svg>
          </motion.div>

          {/* Card 3 - Green */}
          <motion.div
            variants={item}
            className="bg-pastel-green rounded-3xl p-8 shadow-lg border-2 border-black relative overflow-hidden group transition-all duration-300 card-hover-3"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{ y: -5, x: 5, boxShadow: "-10px 10px 0px rgba(0, 0, 0, 0.2)" }}
          >
            {cardInteractives[2]({ isActive: activeCard === 2 })}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-black mb-4 font-cabin">excel in all that you do academically</h3>
              <p className="text-black font-fredoka">
                We provide resources and strategies to help you achieve academic excellence and reach your educational
                goals.
              </p>

              {/* Interactive element - Flipping cards */}
              <motion.div
                className="mt-6 flex justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {["A", "B", "C"].map((letter, i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 bg-white border-2 border-black rounded flex items-center justify-center font-bold"
                    whileHover={{
                      rotateY: 180,
                      backgroundColor: i === 0 ? "#FFF176" : i === 1 ? "#81D4FA" : "#C5E1A5",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {letter}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-2 -right-2 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-black"></div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

