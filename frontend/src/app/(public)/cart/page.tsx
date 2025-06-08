'use client'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const cart = useCartStore()
  const subtotal = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <Container>
      <header className="navbar bg-primary text-primary-content mb-4 rounded-box">
        <h1 className="flex-1 text-xl font-bold">Tu pedido</h1>
        <Link href="/home" className="btn btn-ghost btn-sm">Seguir comprando</Link>
      </header>
      <ul className="space-y-2">
        {cart.items.map((item) => (
          <li key={item.id} className="flex justify-between border-b pb-2">
            <span>{item.name} x{item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="card bg-base-200 mt-4 p-4 sticky bottom-0">
        <p>Subtotal: ${subtotal}</p>
        <p>Propina: 0%</p>
        <p className="font-bold">Total: ${subtotal}</p>
        <Link href="/checkout" className="block mt-2">
          <Button className="w-full">Ir a pagar</Button>
        </Link>
      </div>
    </Container>
  )
}
