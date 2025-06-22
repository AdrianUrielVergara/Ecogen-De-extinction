"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface EspecieCardProps {
  nombre: string
  nombreCientifico: string
  descripcion: string
  habitat: string
  extincion: string
}

export default function EspecieCard({ nombre, nombreCientifico, descripcion, habitat, extincion }: EspecieCardProps) {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{nombre}</CardTitle>
        <CardDescription className="italic text-green-600">{nombreCientifico}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{descripcion}</p>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold">Hábitat:</span> {habitat}
          </div>
          <div>
            <span className="font-semibold">Extinción:</span> {extincion}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
