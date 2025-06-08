'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import type { MenuCategory, MenuItem } from '@/data/menu'
const fetchMenu = async () => {
  const res = await fetch('/api/menu')
  if (!res.ok) throw new Error('Error')
  return res.json() as Promise<{ categories: MenuCategory[]; items: MenuItem[] }>
}

export default function HomePage() {
  const cart = useCartStore()
  const sectionRefs = useRef<(HTMLLIElement | null)[]>([])
  const [categories, setCategories] = useState<MenuCategory[]>([])
  const [items, setItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetchMenu().then((m) => {
      setCategories(m.categories)
      setItems(m.items)
    })
  }, [])

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
            {items.filter((i) => i.categoryId === cat.id).map((item) => (
              <div key={item.id} className="card shadow-md flex-row items-center gap-4 p-4 mb-4">
                <img src={item.image} alt="" className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm line-clamp-2">{item.description}</p>
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
