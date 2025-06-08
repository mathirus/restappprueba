'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function SplashPage() {
  const router = useRouter()
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.1) {
        router.push('/home')
      } else {
        setError(true)
      }
    }, 1200)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-primary text-primary-content p-8">
      <span className="text-3xl font-bold">LOGO</span>
      <span className="loading loading-spinner loading-lg" />
      <p>Estamos preparando tu menú…</p>
      {error && (
        <div className="alert alert-error text-white mt-4">
          <span>Hubo un problema</span>
          <Button className="ml-2" onClick={() => router.refresh()}>Reintentar</Button>
        </div>
      )}
    </div>
  )
}
