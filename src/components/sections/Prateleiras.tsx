import { whatsLink } from '../../data/loja'
import { Anotacao } from '../ui'

type Categoria = {
  titulo: string
  texto: string
  foto: string
  alt: string
  fundo: string
  classe: string
  fotoClasse: string
}

const categorias: Categoria[] = [
  {
    titulo: 'Rações',
    texto: 'Seca e úmida, pra filhote, adulto e sênior. Fala a marca e o tamanho do saco que a gente confirma se tem.',
    foto: '/fotos/racao.webp',
    alt: 'Pote azul cheio de ração sobre piso de madeira',
    fundo: 'bg-kraft',
    classe: 'lg:col-span-7 lg:row-span-2',
    fotoClasse: 'aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] lg:flex-1',
  },
  {
    titulo: 'Petiscos',
    texto: 'Bifinho, ossinho, sachê e aquele agrado que faz o rabo abanar.',
    foto: '/fotos/petiscos.webp',
    alt: 'Biscoitos em formato de osso sobre fundo rosa',
    fundo: 'bg-papel',
    classe: 'lg:col-span-5',
    fotoClasse: 'aspect-[16/9]',
  },
  {
    titulo: 'Acessórios',
    texto: 'Coleira, guia, roupinha, caminha, comedouro e brinquedo.',
    foto: '/fotos/acessorios.webp',
    alt: 'Buldogue francês vestindo moletom amarelo',
    fundo: 'bg-pessego',
    classe: 'lg:col-span-5',
    fotoClasse: 'aspect-[16/9]',
  },
]

function Perguntar({ categoria, claro = false }: { categoria: string; claro?: boolean }) {
  return (
    <a
      href={whatsLink(`Oi! Queria saber sobre ${categoria.toLowerCase()} que vocês têm aí.`)}
      target="_blank"
      rel="noreferrer"
      className={`w-fit text-lg font-semibold underline decoration-2 underline-offset-6 transition-colors hover:decoration-marcador ${
        claro ? 'decoration-papel/40' : 'decoration-tinta/30'
      }`}
    >
      Perguntar o que tem de {categoria.toLowerCase()}
    </a>
  )
}

function Cartao({ c, grande }: { c: Categoria; grande: boolean }) {
  return (
    <article className={`group flex flex-col overflow-hidden rounded-2xl ${c.fundo} ${c.classe}`}>
      <div className={`overflow-hidden ${c.fotoClasse}`}>
        <img
          src={c.foto}
          alt={c.alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex flex-col justify-between gap-6 p-6 sm:p-8 ${grande ? '' : 'flex-1'}`}>
        <div>
          <h3 className="titulo text-4xl sm:text-5xl">{c.titulo}</h3>
          <p className="mt-3 max-w-md text-lg leading-snug text-tinta/75">{c.texto}</p>
        </div>
        <Perguntar categoria={c.titulo} />
      </div>
    </article>
  )
}

export function Prateleiras() {
  return (
    <section id="prateleiras" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 className="titulo text-5xl leading-[0.92] sm:text-7xl lg:col-span-7">Do potinho de ração ao brinquedo novo.</h2>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-tinta/70">
            O essencial pro dia a dia do seu bicho, numa loja de bairro onde dá pra perguntar e receber resposta de gente.
          </p>
          <Anotacao className="mt-3 -rotate-2 text-2xl">não achou? pergunta!</Anotacao>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-12">
        {categorias.map((c, i) => (
          <Cartao key={c.titulo} c={c} grande={i === 0} />
        ))}

        <article className="group grid overflow-hidden rounded-2xl bg-cafe text-papel md:grid-cols-2 lg:col-span-12">
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
            <div>
              <h3 className="titulo text-4xl sm:text-6xl">Higiene e cuidado</h3>
              <p className="mt-4 max-w-md text-lg leading-snug text-papel/75">
                Tapete higiênico, areia pro gato, shampoo, escova e o básico do dia a dia, pra casa ficar cheirosa e o pet
                também.
              </p>
            </div>
            <Perguntar categoria="Higiene" claro />
          </div>
          <div className="min-h-64 overflow-hidden md:min-h-80">
            <img
              src="/fotos/higiene.webp"
              alt="Golden retriever sendo escovado"
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </article>
      </div>
    </section>
  )
}
