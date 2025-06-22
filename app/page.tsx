"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import DesextincionSection from "@/components/desextincion-section"
import EspeciesSection from "@/components/especies-section"
import FuturoSection from "@/components/futuro-section"
import Footer from "@/components/footer"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <DesextincionSection />
      <EspeciesSection />
      <FuturoSection />
      <Footer />
    </div>
  )
}
