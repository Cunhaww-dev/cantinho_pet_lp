import { motion } from 'framer-motion'
import { useRef } from 'react'
import { loja } from '../../data/loja'
import { usePonteiroFino } from '../../hooks/usePonteiroFino'
import { Instagram } from '../ui'

const fotos = [
  { src: '/fotos/beagle.webp', nome: 'Thor', r: -5 },
  { src: '/fotos/gatinho.webp', nome: 'Mel', r: 4 },
  { src: '/fotos/pug.webp', nome: 'Paçoca', r: -2 },
  { src: '/fotos/pastor.webp', nome: 'Bob', r: 6 },
  { src: '/fotos/gato-azul.webp', nome: 'Nina', r: -6 },
  { src: '/fotos/filhote.webp', nome: 'Luna', r: 3 },
  { src: '/fotos/vira-lata.webp', nome: 'Pipoca', r: -3 },
  { src: '/fotos/amigos.webp', nome: 'Tom e Lili', r: 5 },
]

export function Mural() {
  const area = useRef<HTMLDivElement>(null)
  const arrastavel = usePonteiroFino()

  return (
    <section id="mural" className="scroll-mt-20 overflow-hidden bg-papel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="titulo text-5xl leading-[0.92] sm:text-7xl">Clientes de quatro patas.</h2>
            {arrastavel && <p className="mt-4 text-tinta/60">Pode arrastar as fotos, eles não ligam.</p>}
          </div>
          <a
            href={loja.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full border-2 border-tinta px-5 py-3 font-semibold transition-colors hover:bg-tinta hover:text-papel"
          >
            <Instagram className="size-5" />
            Marque {loja.instagram}
          </a>
        </div>

        <div ref={area} className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-4">
          {fotos.map((f, i) => (
            <motion.figure
              key={f.nome}
              drag={arrastavel}
              dragConstraints={area}
              dragElastic={0.15}
              style={{ rotate: f.r }}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 20, cursor: 'grabbing' }}
              whileHover={arrastavel ? { scale: 1.03, rotate: 0 } : undefined}
              className={`relative bg-white p-2.5 pb-3 shadow-[0_14px_30px_-12px_rgba(21,40,29,0.35)] sm:p-3 sm:pb-4 ${
                arrastavel ? 'cursor-grab' : ''
              } ${i % 2 === 1 ? 'md:mt-10' : ''}`}
            >
              <span className="fita -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" aria-hidden="true" />
              <img src={f.src} alt={`Foto do pet ${f.nome}`} loading="lazy" draggable={false} className="pointer-events-none aspect-square w-full object-cover" />
              <figcaption className="font-pincel mt-2 text-center text-2xl sm:text-3xl">{f.nome}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
