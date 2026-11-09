import { AnimatePresence, motion } from 'framer-motion'
import { whatsLink } from '../../data/loja'
import { usePassouDoTopo } from '../../hooks/usePassouDoTopo'
import { WhatsApp } from '../ui'

/** Botão flutuante do WhatsApp, aparece depois do topo. */
export function WhatsFlutuante() {
  const visivel = usePassouDoTopo(640)

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          href={whatsLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chamar no WhatsApp"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed right-4 bottom-4 z-50 grid size-16 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-tinta/30 sm:right-8 sm:bottom-8"
        >
          <WhatsApp className="size-8" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
