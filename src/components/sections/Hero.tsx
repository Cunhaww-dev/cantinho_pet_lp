import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BotaoPedido, Cartaz, Pin } from '../ui'

const ease = [0.22, 1, 0.36, 1] as const

function Linha({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay, ease }}>
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yFoto = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const yGato = useTransform(scrollYProgress, [0, 1], ['0%', '-28%'])

  return (
    <section id="topo" ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 text-tinta/70"
          >
            <Pin className="size-5 text-laranja" />
            Casa de rações no Macedo, em Guarulhos
          </motion.p>

          <h1 className="titulo text-[clamp(3.2rem,9.6vw,7.4rem)] leading-[0.88]">
            <Linha delay={0.1}>Tudo que seu</Linha>
            <Linha delay={0.18}>pet pede,</Linha>
            <Linha delay={0.26}>pertinho</Linha>
            <Linha delay={0.34}>de casa.</Linha>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease }}
            className="mt-8 max-w-[34rem] text-lg leading-relaxed text-tinta/75 sm:text-xl"
          >
            Ração, petisco, acessório e produto de higiene pra cães e gatos. Você pede pelo WhatsApp e a gente leva até a
            sua casa, ou deixa separado pra você buscar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <BotaoPedido mensagem="Oi, Cantinho do Pet! Queria fazer um pedido.">Fazer pedido no WhatsApp</BotaoPedido>
            <a href="#visite" className="px-2 py-3 text-lg font-medium underline decoration-tinta/30 decoration-2 underline-offset-6 hover:decoration-marcador">
              Ver endereço da loja
            </a>
          </motion.div>
        </div>

        {/* Composição: foto em arco, gato, e o cartaz da entrega (o elemento-assinatura) */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="ml-auto w-[84%] overflow-hidden rounded-t-full rounded-b-3xl bg-[#e8742f]"
          >
            <motion.img
              src="/fotos/corgi.webp"
              alt="Filhote de corgi sentado em fundo laranja"
              style={{ y: yFoto, scale: 1.14 }}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            style={{ y: yGato }}
            className="absolute -bottom-8 left-0 w-[42%] overflow-hidden rounded-full border-[6px] border-fundo"
          >
            <img src="/fotos/gato-verde.webp" alt="Gato preto e branco apoiado na mesa" className="aspect-square w-full object-cover" />
          </motion.div>

          {/* O cartaz "bate" por último: é o momento orquestrado da página */}
          <motion.div
            initial={{ opacity: 0, scale: 1.35, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ delay: 1.05, type: 'spring', stiffness: 380, damping: 18 }}
            className="absolute top-[12%] -left-1 sm:top-[30%] sm:-left-10"
          >
            <Cartaz className="w-40 px-4 sm:w-56 sm:px-6">
              <p className="font-pincel text-[2rem] leading-[0.85] sm:text-5xl">
                Entregamos
                <br />
                no bairro!
              </p>
              <p className="font-pincel mt-2 text-base whitespace-nowrap text-marcador sm:text-xl">é só chamar no zap</p>
            </Cartaz>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
