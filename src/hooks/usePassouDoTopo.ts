import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

/** true depois que a página rola mais que `limite` pixels. */
export function usePassouDoTopo(limite: number) {
  const { scrollY } = useScroll()
  const [passou, setPassou] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setPassou(y > limite))
  return passou
}
