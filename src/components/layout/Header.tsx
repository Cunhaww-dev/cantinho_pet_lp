import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { whatsLink } from '../../data/loja'
import { usePassouDoTopo } from '../../hooks/usePassouDoTopo'
import { WhatsApp } from '../ui'

const links = [
  { href: '#prateleiras', label: 'Produtos' },
  { href: '#como-pedir', label: 'Entrega' },
  { href: '#mural', label: 'Mural' },
  { href: '#visite', label: 'Onde estamos' },
]

export function Marca({ className = '' }: { className?: string }) {
  return <img src="/logo.png" alt="Casa de Rações Cantinho do Pet" width={620} height={191} className={`h-11 w-auto sm:h-13 ${className}`} />
}

export function Header() {
  const rolou = usePassouDoTopo(24)
  const [aberto, setAberto] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou || aberto ? 'border-b border-tinta/10 bg-fundo/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8">
        <a href="#topo" aria-label="Cantinho do Pet, início">
          <Marca />
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="decoration-marcador decoration-2 underline-offset-6 hover:underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-laranja px-4 py-2.5 text-sm font-semibold text-papel transition-colors hover:bg-laranja-escuro"
          >
            <WhatsApp className="size-4" />
            WhatsApp
          </a>
          <button
            type="button"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            onClick={() => setAberto((a) => !a)}
            className="grid size-10 place-items-center rounded-full border-2 border-tinta md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${aberto ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition-all ${aberto ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="px-4 pb-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a onClick={() => setAberto(false)} href={l.href} className="titulo block border-b border-tinta/10 py-3 text-3xl">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
