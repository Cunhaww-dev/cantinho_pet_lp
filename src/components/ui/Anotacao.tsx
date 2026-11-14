import type { ReactNode } from 'react'

/** Anotação de marcador, escrita à mão. */
export function Anotacao({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`font-pincel leading-none text-marcador ${className}`}>{children}</p>
}

