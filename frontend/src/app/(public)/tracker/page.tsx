'use client'
import { useEffect, useState } from 'react'

const steps = ['En cocina', 'Listo para retirar', 'Servido']

export default function TrackerPage() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 20000)
    return () => clearInterval(i)
  }, [])

  return (
    <div className="p-4 max-w-[430px] mx-auto">
      <h1 className="text-xl font-bold mb-4">Estado del pedido</h1>
      <ol className="space-y-4">
        {steps.map((label, idx) => (
          <li key={label} className={idx === step ? 'animate-pulse' : ''}>{label}</li>
        ))}
      </ol>
      <button className="mt-8 border rounded-2xl px-4 py-2" onClick={() => alert('Mozo llamado')}>Llamar al mozo</button>
    </div>
  )
}
