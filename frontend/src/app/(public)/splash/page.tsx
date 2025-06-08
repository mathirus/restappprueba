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
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-8">
      <span className="text-3xl font-bold">LOGO</span>
      <div className="mt-4 animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
      <p className="mt-2">Estamos preparando tu menú…</p>
      {error && (
        <div className="mt-4 bg-white text-secondary p-4 rounded-xl">
          <p>Hubo un problema</p>
          <Button className="mt-2" onClick={() => router.refresh()}>Reintentar</Button>
        </div>
      )}
    </div>
  )
}
