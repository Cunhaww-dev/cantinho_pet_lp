import { loja, whatsLink } from '../../data/loja'
import { Facebook, Instagram, Moto, Pin, Telefone, WhatsApp } from '../ui'

function Linha({ icone, rotulo, children }: { icone: React.ReactNode; rotulo: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 border-t border-dashed border-tinta/25 py-5">
      <span className="mt-0.5 text-laranja">{icone}</span>
      <div>
        <p className="text-sm text-tinta/55">{rotulo}</p>
        <div className="mt-0.5 text-lg">{children}</div>
      </div>
    </div>
  )
}

export function Visite() {
  return (
    <section id="visite" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
      <h2 className="titulo mb-14 max-w-3xl text-5xl leading-[0.92] sm:text-7xl">Passa aqui, a gente tá no Macedo.</h2>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-3xl bg-papel p-6 sm:p-9 lg:col-span-5">
          <p className="titulo mb-4 text-3xl">{loja.nome}</p>
          <Linha icone={<Pin className="size-6" />} rotulo="Endereço">
            {loja.endereco}
            <br />
            {loja.bairro}, <span className="whitespace-nowrap">{loja.cep}</span>
          </Linha>
          <Linha icone={<Moto className="size-6" />} rotulo="Entrega">
            Entregamos no bairro. Chama no WhatsApp pra combinar.
          </Linha>
          <Linha icone={<WhatsApp className="size-6" />} rotulo="WhatsApp">
            <a href={whatsLink()} target="_blank" rel="noreferrer" className="underline decoration-tinta/30 underline-offset-4 hover:decoration-marcador">
              {loja.whatsapp}
            </a>
          </Linha>
          <Linha icone={<Telefone className="size-6" />} rotulo="Telefone">
            <a href={loja.telefoneLink} className="underline decoration-tinta/30 underline-offset-4 hover:decoration-marcador">
              {loja.telefone}
            </a>
          </Linha>
          <div className="flex flex-wrap gap-3 border-t border-dashed border-tinta/25 pt-6">
            <a
              href={loja.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-laranja px-5 py-3 font-semibold text-papel transition-colors hover:bg-laranja-escuro"
            >
              <Pin className="size-5" /> Abrir no Google Maps
            </a>
            <a href={loja.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-12 place-items-center rounded-full border-2 border-tinta transition-colors hover:bg-tinta hover:text-papel">
              <Instagram className="size-5" />
            </a>
            <a href={loja.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-12 place-items-center rounded-full border-2 border-tinta transition-colors hover:bg-tinta hover:text-papel">
              <Facebook className="size-5" />
            </a>
          </div>
        </div>

        <div className="min-h-[24rem] overflow-hidden rounded-3xl bg-pessego lg:col-span-7">
          <iframe
            title="Mapa do Cantinho do Pet"
            src={loja.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-[24rem] border-0"
          />
        </div>
      </div>
    </section>
  )
}
