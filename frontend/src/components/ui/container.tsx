import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('container mx-auto max-w-[430px] p-4', className)} {...props} />
}
