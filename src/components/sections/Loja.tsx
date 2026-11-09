import { Cartaz, FotoColada } from '../ui'

const marcas = ['Premier', 'Golden', 'GranPlus', 'Magnus', 'Fórmula Natural']

/** Fotos reais da loja: o argumento mais forte da página. */
export function Loja() {
  return (
    <section id="loja" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-24 sm:px-8 sm:pt-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
        <div className="lg:col-span-5 lg:pt-6">
          <h2 className="titulo text-5xl leading-[0.92] sm:text-7xl">Casa de rações de verdade.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta/75">
            Prateleira cheia das marcas que seu pet já conhece, como {marcas.slice(0, -1).join(', ')} e {marcas.at(-1)}. Coleira,
            petisco e brinquedo também, tudo no mesmo cantinho.
          </p>
        </div>

        <FotoColada
          src="/fotos/loja-interior.webp"
          alt="Interior da loja Cantinho do Pet, com balcão, parede de coleiras e prateleiras de ração"
          w={680}
          h={313}
          giro="rotate-1"
          className="lg:col-span-7"
        />

        <div className="grid grid-cols-2 items-start gap-5 sm:gap-8 lg:col-span-8 lg:grid-cols-[2fr_3fr]">
          <FotoColada
            src="/fotos/loja-fachada.webp"
            alt="Fachada da loja, com a placa Casa de Rações Cantinho do Pet e os telefones"
            w={324}
            h={510}
            giro="-rotate-2"
          />
          <FotoColada
            src="/fotos/loja-prateleiras.webp"
            alt="Prateleiras da loja com sacos de ração Premier, Golden, Magnus e outras marcas"
            w={510}
            h={510}
            giro="rotate-[1.5deg]"
            className="mt-10"
          />
        </div>

        <div className="flex items-center lg:col-span-4">
          <Cartaz className="mx-auto w-fit rotate-3 px-6">
            <p className="font-pincel text-3xl leading-tight sm:text-4xl">
              Passa aqui
              <br />
              pra conhecer!
            </p>
            <p className="font-pincel mt-2 text-xl text-marcador">Rua Claudino Barbosa, 847</p>
          </Cartaz>
        </div>
      </div>
    </section>
  )
}
