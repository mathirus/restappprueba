'use client'
import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

const steps = ['En cocina', 'Listo para retirar', 'Servido']

export default function TrackerPage() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 20000)
    return () => clearInterval(i)
  }, [])

  return (
    <Container>
      <h1 className="text-xl font-bold mb-4">Estado del pedido</h1>
      <ul className="steps steps-vertical w-full">
        {steps.map((label, idx) => (
          <li key={label} className={`step ${idx <= step ? 'step-primary' : ''}`}>{label}</li>
        ))}
      </ul>
      <Button className="mt-8" onClick={() => alert('Mozo llamado')}>Llamar al mozo</Button>
    </Container>
  )
}
