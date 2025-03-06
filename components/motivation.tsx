"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Motivation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null)

  // Add an array of image sources for the circles
  const bubbleImages = [
    "/merlin.jpg", // Replace with your actual image paths
    "/JoeAnn.jpg",
    "/aliza.jpg",
    "/zohra.jpg",
    "/princeton.jpg",
    "/ken.jpg",
  ]

  // Fun facts to display on hover
  const funFacts = [
    "Regular study breaks improve retention!",
    "Learning with others increases motivation!",
    "Setting specific goals boosts productivity!",
    "Teaching others helps you learn better!",
    "Music can improve focus while studying!",
    "Exercise enhances cognitive function!",
  ]

  return (
    <section id="motivation" className="py-16 md:py-24 bg-pastel-beige grid-pattern relative">
      {/* Decorative elements - hidden on mobile */}
      <div className="absolute hidden md:block md:left-10 md:top-40 md:h-32">
        <Image
          src="/1-preview.jpg"
          alt="Decorative plant"
          width={500}
          height={400}
          className="opacity-80 drop-shadow-md"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -50, rotate: -5 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
            whileHover={{ rotate: 2, scale: 1.02 }}
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-cabin">
              BUCKLE UP TO MEET THE BEST VERSION OF YOURSELF!!
            </h2>
            <p className="text-lg text-black mb-8 font-fredoka">
              Our platform is designed to help you unlock your full potential and achieve your academic goals. With
              personalized guidance and motivation, you&apos;ll be on your way to becoming the best version of yourself.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  onHoverStart={() => setHoveredBubble(i)}
                  onHoverEnd={() => setHoveredBubble(null)}
                  className="bg-pastel-blue-light rounded-full p-2 aspect-square flex items-center justify-center cursor-pointer border-2 border-black overflow-hidden"
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* Image inside the circle */}
                    <Image
                      src={bubbleImages[i]}
                      alt={`Motivation image ${i+1}`}
                      fill
                      className="object-cover"
                    />

                    {/* Pop-up message on hover */}
                    {hoveredBubble === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg border-2 border-black whitespace-nowrap z-10"
                      >
                        <p className="text-xs font-bold">{funFacts[i]}</p>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-black"></div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#C5E1A5" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pastel-green text-black rounded-full font-bold shadow-lg border-2 border-black transition-colors font-fredoka flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}