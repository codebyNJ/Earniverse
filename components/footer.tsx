"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-pastel-beige border-t-2 border-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-4 font-pacifico">earniverse</h3>
            <p className="text-black font-fredoka">
              A space where every action leads to reward. Join us on the journey to becoming your best self.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4 font-cabin">Quick Links</h4>
            <ul className="space-y-2 font-fredoka">
              <li>
                <Link
                  href="#features"
                  className="text-black hover:text-pastel-blue-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Features
                </Link>
              </li>
              <li>
                <Link
                  href="#motivation"
                  className="text-black hover:text-pastel-green-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Motivation
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-black hover:text-pastel-yellow-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-black hover:text-pastel-blue-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4 font-cabin">Resources</h4>
            <ul className="space-y-2 font-fredoka">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-pastel-blue-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-pastel-green-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Study Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-pastel-yellow-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Motivation Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-pastel-blue-dark transition-colors flex items-center gap-2"
                >
                  <span className="text-sm">→</span> Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-4 font-cabin">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-pastel-yellow p-2 rounded-full text-black hover:bg-pastel-yellow-dark transition-colors border border-black"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-pastel-blue p-2 rounded-full text-black hover:bg-pastel-blue-dark transition-colors border border-black"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-pastel-green p-2 rounded-full text-black hover:bg-pastel-green-dark transition-colors border border-black"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-pastel-yellow p-2 rounded-full text-black hover:bg-pastel-yellow-dark transition-colors border border-black"
              >
                <Mail size={20} />
              </motion.a>
            </div>
            <p className="text-black font-fredoka">Subscribe to our newsletter for updates and tips.</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-black text-center text-black">
          <p className="font-fredoka">© {new Date().getFullYear()} earniverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

