'use client'
import { useState } from 'react'
import { useCartStore } from '@/lib/store'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const modifiers = {
  Porción: ['Media', 'Entera'],
  Toppings: ['Extra queso', 'Picante'],
}

export default function ItemPage() {
  const [qty, setQty] = useState(1)
  const cart = useCartStore()

  return (
    <Container className="fixed inset-0 bg-white overflow-y-auto">
      <button className="btn btn-ghost mb-2" onClick={() => history.back()}>Cerrar</button>
      <div className="keen-slider">
        <div className="w-full h-40 bg-gray-200 rounded-2xl" />
      </div>
      {Object.entries(modifiers).map(([group, options]) => (
        <div key={group} className="mt-4">
          <h3 className="font-semibold mb-2">{group}</h3>
          <div className="flex gap-2">
            {options.map((op) => (
              <button key={op} className="btn btn-sm btn-outline">{op}</button>
            ))}
          </div>
        </div>
      ))}
      <input type="number" className="input input-bordered mt-4" value={qty} onChange={(e) => setQty(parseInt(e.target.value))} />
      <textarea className="textarea textarea-bordered w-full mt-2" placeholder="Notas para la cocina" />
      <Button className="w-full mt-4" onClick={() => cart.addItem({ id: 99, name: 'Plato', price: 10, quantity: qty })}>Agregar al carrito</Button>
    </Container>
  )
}
