"use client"

import { motion } from "framer-motion"
import { X, Award, Sparkles } from "lucide-react"

interface CongratulationsPopupProps {
  prize: string
  onClose: () => void
}

export function CongratulationsPopup({ prize, onClose }: CongratulationsPopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        className="bg-white rounded-3xl p-8 max-w-md w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-600 transition-colors">
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, times: [0, 0.7, 1] }}
            className="w-20 h-20 bg-pastel-yellow rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Award className="h-10 w-10 text-black" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-2xl font-bold text-black mb-2 font-cabin">Congratulations!</h2>

            <div className="relative mb-6">
              <p className="text-lg text-black font-fredoka">You've won:</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 py-3 px-6 bg-pastel-blue-light rounded-lg border-2 border-black font-bold text-xl font-cabin relative"
              >
                {prize}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-500" />
                </motion.div>
              </motion.div>
            </div>

            <p className="text-black font-fredoka mb-6">
              Thank you for your good deeds! Keep up the great work and continue making a positive impact.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-8 py-3 bg-pastel-green text-black rounded-full font-bold border-2 border-black transition-colors font-fredoka hover:bg-pastel-green-dark"
            >
              Claim Reward
            </motion.button>
          </motion.div>
        </div>

        {/* Confetti effect */}
        <div className="absolute -top-10 left-0 right-0 flex justify-center pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, x: 0, opacity: 0 }}
              animate={{
                y: 200,
                x: (i % 2 === 0 ? 1 : -1) * Math.random() * 100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: Math.random() * 2,
              }}
              className={`w-3 h-3 rounded-full absolute ${
                i % 3 === 0 ? "bg-pastel-yellow" : i % 3 === 1 ? "bg-pastel-blue" : "bg-pastel-green"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

