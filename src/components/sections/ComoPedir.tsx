import { motion } from 'framer-motion'
import { Anotacao, BotaoPedido, SetaDesenhada } from '../ui'

const passos = [
  { t: 'Manda um oi', d: 'Conta no WhatsApp o que seu pet precisa. Vale mandar foto do pacote antigo.' },
  { t: 'A gente confirma', d: 'Respondemos com marca, tamanho e preço, sem enrolação.' },
  { t: 'Chega na sua casa', d: 'Entregamos no bairro. Se preferir, fica separado aqui na loja pra você buscar.' },
]

const conversa = [
  { de: 'cliente', txt: 'Oi! Tem ração de gato castrado, saco de 10kg?' },
  { de: 'loja', txt: 'Oi! Temos sim 😊 Quer que a gente leve aí?' },
  { de: 'cliente', txt: 'Quero! Rua das Flores, 120' },
  { de: 'loja', txt: 'Anotado! Já já sai pra entrega 🐾' },
]

function Celular() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] rotate-2 rounded-[2.8rem] bg-tinta p-3 shadow-2xl shadow-tinta/30">
      <div className="overflow-hidden rounded-[2.2rem] bg-[#ECE5DA]">
        <div className="flex items-center gap-3 bg-cafe px-5 pt-6 pb-4 text-papel">
          <img src="/logo-icone.jpg" alt="" className="size-10 rounded-full" />
          <div className="leading-tight">
            <p className="font-semibold">Cantinho do Pet</p>
            <p className="text-xs text-papel/70">online</p>
          </div>
        </div>
        <div className="flex min-h-[23rem] flex-col gap-2.5 p-4">
          {conversa.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ delay: 0.3 + i * 0.75, type: 'spring', stiffness: 260, damping: 22 }}
              className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[15px] leading-snug shadow-sm ${
                m.de === 'cliente' ? 'self-end rounded-br-md bg-[#D9F7C6]' : 'self-start rounded-bl-md bg-white'
              }`}
            >
              {m.txt}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ComoPedir() {
  return (
    <section id="como-pedir" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="titulo text-5xl leading-[0.92] sm:text-7xl">Pediu no zap, chegou em casa.</h2>

          <ol className="mt-12 space-y-8">
            {passos.map((p, i) => (
              <li key={p.t} className="flex gap-5">
                <span className="titulo grid size-14 shrink-0 place-items-center rounded-full border-2 border-tinta text-2xl">{i + 1}</span>
                <div className="pt-1">
                  <h3 className="text-2xl font-bold tracking-tight">{p.t}</h3>
                  <p className="mt-1 max-w-md text-lg leading-snug text-tinta/70">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <BotaoPedido mensagem="Oi, Cantinho do Pet! Queria fazer um pedido com entrega." className="mt-12">
            Pedir com entrega
          </BotaoPedido>
        </div>

        <div className="relative">
          <Celular />
          <div className="absolute -top-4 right-0 hidden -rotate-6 xl:block">
            <Anotacao className="text-2xl">assim mesmo, ó</Anotacao>
            <SetaDesenhada className="h-10 w-12 -scale-x-100 text-marcador" />
          </div>
        </div>
      </div>
    </section>
  )
}
