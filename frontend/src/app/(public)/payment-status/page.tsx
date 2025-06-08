'use client'
export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

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
    <Container className="text-center">
      <div className="text-5xl mb-4">{status === 'approved' ? '✔️' : status === 'pending' ? '⏳' : '❌'}</div>
      <p className="mb-2">Pago {status}</p>
      <p>Ref: {ref}</p>
      {status === 'approved' ? (
        <Link href="/tracker" className="mt-4 inline-block">
          <Button>Ver pedido</Button>
        </Link>
      ) : (
        <Link href="/checkout" className="mt-4 inline-block">
          <Button>Reintentar pago</Button>
        </Link>
      )}
    </Container>
  )
}
