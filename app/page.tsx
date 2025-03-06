import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Motivation } from "@/components/motivation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-pastel-beige">
      <Navbar />
      <Hero />
      <Features />
      <Motivation />
      <Footer />
    </main>
  )
}

