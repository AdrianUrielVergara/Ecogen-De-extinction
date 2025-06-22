"use client"

import EspecieCard from "./especie-card"

const especies = [
  {
    nombre: "Oso de Anteojos Gigante",
    nombreCientifico: "Tremarctos ornatus giganteus",
    descripcion: "Una subespecie más grande del oso de anteojos que habitaba las montañas andinas.",
    habitat: "Páramos y bosques andinos",
    extincion: "Siglo XIX",
  },
  {
    nombre: "Cóndor de los Andes Menor",
    nombreCientifico: "Vultur gryphus minor",
    descripcion: "Una variedad más pequeña del cóndor andino que se extinguió por la caza excesiva.",
    habitat: "Cordillera de los Andes",
    extincion: "Principios del siglo XX",
  },
  {
    nombre: "Jaguar del Magdalena",
    nombreCientifico: "Panthera onca magdalensis",
    descripcion: "Subespecie de jaguar adaptada a los humedales del río Magdalena.",
    habitat: "Humedales del río Magdalena",
    extincion: "Mediados del siglo XX",
  },
]

export default function EspeciesSection() {
  return (
    <section id="especies" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Especies Extintas</h2>
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce algunas de las especies que una vez habitaron el territorio colombiano
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {especies.map((especie, index) => (
            <EspecieCard
              key={index}
              nombre={especie.nombre}
              nombreCientifico={especie.nombreCientifico}
              descripcion={especie.descripcion}
              habitat={especie.habitat}
              extincion={especie.extincion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
