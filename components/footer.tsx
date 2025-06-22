"use client"

import { PawPrintIcon as Paw } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Paw className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl">EcoGen Colombia</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Explorando el futuro de la conservación a través de la ciencia y la tecnología
        </p>
      </div>
    </footer>
  )
}
