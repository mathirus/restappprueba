import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx('btn-primary', className)}
      {...props}
    />
  )
}
