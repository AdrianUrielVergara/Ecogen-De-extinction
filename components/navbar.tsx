"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, PawPrintIcon as Paw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  isDark: boolean
  setIsDark: (isDark: boolean) => void
}

export default function Navbar({ isDark, setIsDark }: NavbarProps) {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } ${isDark ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Paw className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl">EcoGen</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="hover:text-green-600 transition-colors">
            Inicio
          </a>
          <a href="#desextincion" className="hover:text-green-600 transition-colors">
            Desextinción
          </a>
          <a href="#especies" className="hover:text-green-600 transition-colors">
            Especies
          </a>
          <a href="#futuro" className="hover:text-green-600 transition-colors">
            Futuro
          </a>
        </div>

        <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </nav>
  )
}
