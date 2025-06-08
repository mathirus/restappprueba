'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 1, name: 'Entradas' },
  { id: 2, name: 'Platos' },
  { id: 3, name: 'Postres' },
]

const items = [
  { id: 1, cat: 1, name: 'Bruschetta', desc: 'Pan tostado con tomate', price: 5 },
  { id: 2, cat: 2, name: 'Pizza', desc: 'Muzza clásica', price: 10 },
  { id: 3, cat: 3, name: 'Helado', desc: 'Chocolate', price: 4, outOfStock: true },
]

export default function HomePage() {
  const cart = useCartStore()
  const sectionRefs = useRef<(HTMLLIElement | null)[]>([])

  const scrollTo = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      <header className="navbar sticky top-0 z-10 bg-primary text-primary-content">
        <span className="font-bold text-xl px-2">LOGO</span>
        <input className="input input-bordered flex-1" placeholder="Buscar" />
      </header>
      <div className="flex overflow-x-auto gap-2 py-2">
        {categories.map((c, idx) => (
          <button key={c.id} className="btn btn-sm btn-outline" onClick={() => scrollTo(idx)}>{c.name}</button>
        ))}
      </div>
      <ul className="space-y-4">
        {categories.map((cat, idx) => (
          <li
            key={cat.id}
            ref={(el) => {
              sectionRefs.current[idx] = el
            }}
          >
            <h2 className="text-xl font-bold my-2" id={cat.name}>{cat.name}</h2>
            {items.filter((i) => i.cat === cat.id).map((item) => (
              <div key={item.id} className="card shadow-md flex-row items-center gap-4 p-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm line-clamp-2">{item.desc}</p>
                  <p className="font-bold mt-1">${item.price}</p>
                  {item.outOfStock && <span className="badge badge-error">Sin stock</span>}
                </div>
                <Button className="btn-sm" onClick={() => cart.addItem({ id: item.id, name: item.name, price: item.price, quantity:1 })}>+</Button>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <Link href="/cart" className="btn btn-primary fixed bottom-4 right-4 rounded-full shadow-lg">
        🛒 {cart.items.length}
      </Link>
    </Container>
  )
}
