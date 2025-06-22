"use client"

import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Reviviendo el
            <span className="block text-green-600 font-normal">Pasado Natural</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            Explorando la desextinción de especies perdidas en Colombia a través de la ciencia y la tecnología moderna
          </p>
        </div>

        <div className="flex justify-center">
          <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
