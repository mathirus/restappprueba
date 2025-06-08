'use client'
export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export default function PaymentStatus() {
  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  )
}

function Content() {
  const params = useSearchParams()
  const ref = params.get('ref')
  const status = 'approved'
  return (
    <div className="p-4 max-w-[430px] mx-auto text-center">
      <div className="text-5xl mb-4">{status === 'approved' ? '✔️' : status === 'pending' ? '⏳' : '❌'}</div>
      <p className="mb-2">Pago {status}</p>
      <p>Ref: {ref}</p>
      {status === 'approved' ? (
        <Link href="/tracker" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-2xl">Ver pedido</Link>
      ) : (
        <Link href="/checkout" className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-2xl">Reintentar pago</Link>
      )}
    </div>
  )
}
