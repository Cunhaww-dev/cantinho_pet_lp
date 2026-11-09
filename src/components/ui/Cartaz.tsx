import type { ReactNode } from 'react'

/** Cartaz amarelo de pet shop, escrito a pincel e preso com fita crepe. */
export function Cartaz({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative bg-cartaz px-6 pt-6 pb-5 text-tinta shadow-[0_18px_30px_-14px_rgba(21,40,29,0.45)] ${className}`}>
      <span className="fita -top-3 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden="true" />
      {children}
    </div>
  )
}
