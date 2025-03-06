"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-pastel-beige/80 backdrop-blur-sm border-b border-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold text-black font-pacifico">
            earniverse
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <Link
            href="#features"
            className="text-black hover:text-pastel-blue-dark font-fredoka font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#motivation"
            className="text-black hover:text-pastel-green-dark font-fredoka font-medium transition-colors"
          >
            Motivation
          </Link>
          <Link
            href="#about"
            className="text-black hover:text-pastel-yellow-dark font-fredoka font-medium transition-colors"
          >
            About
          </Link>
          
        </motion.nav>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-yellow-500" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-pastel-beige-light border border-black focus:outline-none focus:ring-2 focus:ring-pastel-yellow text-sm"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <span className="text-yellow-500">✧</span>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-pastel-beige border-b border-black"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-black hover:text-pastel-blue-dark font-fredoka font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#motivation"
              className="text-black hover:text-pastel-green-dark font-fredoka font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Motivation
            </Link>
            <Link
              href="#about"
              className="text-black hover:text-pastel-yellow-dark font-fredoka font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-black hover:text-pastel-blue-dark font-fredoka font-medium transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-yellow-500" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-pastel-beige-light border border-black focus:outline-none focus:ring-2 focus:ring-pastel-yellow text-sm"
              />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

