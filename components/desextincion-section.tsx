"use client"

import { Heart, Globe } from "lucide-react"

export default function DesextincionSection() {
  return (
    <section id="desextincion" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">¿Qué es la Desextinción?</h2>
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              La desextinción es el proceso científico de recrear especies extintas utilizando técnicas avanzadas de
              ingeniería genética, clonación y biología sintética.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              En Colombia, esta tecnología podría restaurar ecosistemas perdidos y recuperar la biodiversidad que una
              vez caracterizó nuestros paisajes naturales.
            </p>
            <div className="flex items-center space-x-4">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-gray-600 dark:text-gray-300">Restauración de ecosistemas</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8">
            <Globe className="h-16 w-16 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Impacto Global</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Colombia alberga el 10% de la biodiversidad mundial. La desextinción podría restaurar ecosistemas únicos y
              especies endémicas perdidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
