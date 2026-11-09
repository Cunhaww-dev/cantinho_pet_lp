import type { ReactNode } from 'react'
import { whatsLink } from '../../data/loja'
import { WhatsApp } from './Icons'

const tamanhos = {
  md: 'px-7 py-4 text-lg',
  lg: 'px-8 py-5 text-xl',
}

type Props = {
  children: ReactNode
  mensagem?: string
  tamanho?: keyof typeof tamanhos
  className?: string
}

/** Botão principal: abre o WhatsApp e "afunda" ao clicar. */
export function BotaoPedido({ children, mensagem, tamanho = 'md', className = '' }: Props) {
  return (
    <a
      href={whatsLink(mensagem)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-laranja font-semibold text-papel shadow-[0_6px_0_0_var(--color-tinta)] transition-all hover:translate-y-[3px] hover:shadow-[0_3px_0_0_var(--color-tinta)] active:translate-y-[6px] active:shadow-none ${tamanhos[tamanho]} ${className}`}
    >
      <WhatsApp className="size-6" />
      {children}
    </a>
  )
}
