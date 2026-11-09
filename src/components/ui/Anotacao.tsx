import type { ReactNode } from 'react'

/** Anotação de marcador, escrita à mão. */
export function Anotacao({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`font-pincel leading-none text-marcador ${className}`}>{children}</p>
}

/** Setinha desenhada à mão que acompanha as anotações. */
export function SetaDesenhada({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true" className={className}>
      <path d="M52 5C44 24 30 35 9 40M9 40l10-9M9 40l12 4" />
    </svg>
  )
}
