import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

const frase =
  'Aqui seu pet não é só mais um cliente. O Thor, a Mel e o Frajola têm nome, têm manias, e a gente adora saber de cada uma.'

const nomes = ['Thor,', 'Mel', 'Frajola']

function Palavra({ p, progresso, faixa }: { p: string; progresso: MotionValue<number>; faixa: [number, number] }) {
  const opacidade = useTransform(progresso, faixa, [0.18, 1])
  return (
    <motion.span style={{ opacity: opacidade }} className={`mr-[0.25em] inline-block ${nomes.includes(p) ? 'text-cartaz' : ''}`}>
      {p}
    </motion.span>
  )
}

/** Texto que acende palavra por palavra conforme a rolagem. */
export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const palavras = frase.split(' ')

  return (
    <section className="bg-tinta text-papel">
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-8 sm:py-40">
        <p ref={ref} className="text-[clamp(2rem,5vw,4.2rem)] leading-[1.08] font-semibold tracking-[-0.025em]">
          {palavras.map((p, i) => (
            <Palavra key={i} p={p} progresso={scrollYProgress} faixa={[i / palavras.length, (i + 1) / palavras.length]} />
          ))}
        </p>
      </div>
    </section>
  )
}
