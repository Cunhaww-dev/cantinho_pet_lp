import { useSyncExternalStore } from 'react'

const consulta = '(pointer: fine)'

function assinar(avisar: () => void) {
  const mq = window.matchMedia(consulta)
  mq.addEventListener('change', avisar)
  return () => mq.removeEventListener('change', avisar)
}

/** Arrastar só faz sentido com mouse; no toque, atrapalharia a rolagem. */
export function usePonteiroFino() {
  return useSyncExternalStore(
    assinar,
    () => window.matchMedia(consulta).matches,
    () => false,
  )
}
