'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/lib/store'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

export default function CheckoutPage() {
  const router = useRouter()
  const cart = useCartStore()
  const [name, setName] = useState('')

  const pay = () => {
    router.push('/payment-status?ref=123')
    cart.clear()
  }

  return (
    <Container>
      <h1 className="text-xl font-bold mb-4">Checkout</h1>
      <div className="space-y-4">
        <input className="input input-bordered w-full" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <Button className="w-full" onClick={pay}>Pagar con MercadoPago</Button>
      </div>
    </Container>
  )
}
