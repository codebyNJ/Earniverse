import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Earniverse - Motivate Students",
  description: "A space where every action leads to reward",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Cabin+Sketch:wght@400;700&family=Fredoka:wght@300..700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

