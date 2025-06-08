'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/store'

export default function CheckoutPage() {
  const router = useRouter()
  const cart = useCartStore()
  const [name, setName] = useState('')

  const pay = () => {
    router.push('/payment-status?ref=123')
    cart.clear()
  }

  return (
    <div className="p-4 max-w-[430px] mx-auto">
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        <input className="w-full border p-2 rounded-xl" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={pay} className="w-full bg-primary text-white py-2 rounded-2xl">Pagar con MercadoPago</button>
      </div>
    </div>
  )
}
