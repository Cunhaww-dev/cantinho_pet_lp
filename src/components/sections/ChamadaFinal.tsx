import { BotaoPedido, Cartaz } from '../ui'

/** Fechamento: o cartaz amarelo de novo, agora gigante. */
export function ChamadaFinal() {
  return (
    <section className="overflow-hidden px-4 py-24 sm:px-8 sm:py-32">
      <Cartaz className="mx-auto max-w-4xl -rotate-2 px-8 py-14 text-center sm:px-16 sm:py-20">
        <p className="font-pincel text-[clamp(3.4rem,10vw,7.5rem)] leading-[0.85]">Bora mimar seu pet?</p>
        <p className="mx-auto mt-6 max-w-md text-lg text-tinta/75">Pede pelo WhatsApp: entregamos no bairro ou deixamos separado pra você buscar.</p>
        <BotaoPedido mensagem="Oi, Cantinho do Pet! Queria fazer um pedido." tamanho="lg" className="mt-10">
          Fazer pedido no WhatsApp
        </BotaoPedido>
      </Cartaz>
    </section>
  )
}
