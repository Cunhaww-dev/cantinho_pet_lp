import { loja, whatsLink } from '../../data/loja'
import { Cartaz } from '../ui'

const navegacao = [
  { href: '#loja', label: 'A loja' },
  { href: '#prateleiras', label: 'Produtos' },
  { href: '#como-pedir', label: 'Como pedir' },
  { href: '#visite', label: 'Onde estamos' },
]

function Coluna({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-sm text-papel/50">{titulo}</p>
      <ul className="space-y-2.5 text-papel/85">{children}</ul>
    </div>
  )
}

const anoAtual = new Date().getFullYear()

const link = 'underline decoration-papel/0 underline-offset-4 transition-colors hover:text-papel hover:decoration-cartaz'

export function Rodape() {
  return (
    <footer className="bg-cafe text-papel">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-12 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/logo-claro.png" alt="Casa de Rações Cantinho do Pet" width={620} height={191} className="h-16 w-auto sm:h-20" />
          <p className="mt-6 max-w-sm leading-relaxed text-papel/70">
            Ração, petisco, acessório e higiene pra cães e gatos, aqui no Macedo, com entrega no bairro.
          </p>
          <Cartaz className="mt-10 w-fit -rotate-3 px-5 pt-5 pb-4">
            <p className="font-pincel text-2xl leading-tight">
              Pedidos pelo zap
              <br />
              <a href={whatsLink()} target="_blank" rel="noreferrer" className="text-marcador">
                {loja.whatsapp}
              </a>
            </p>
          </Cartaz>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
          <Coluna titulo="Endereço">
            <li>{loja.endereco}</li>
            <li>{loja.bairro}</li>
            <li>CEP {loja.cep}</li>
            <li>
              <a href={loja.mapsUrl} target="_blank" rel="noreferrer" className={`${link} text-cartaz`}>
                Ver no mapa
              </a>
            </li>
          </Coluna>
          <Coluna titulo="Fale com a gente">
            <li>
              <a href={whatsLink()} target="_blank" rel="noreferrer" className={link}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href={loja.telefoneLink} className={link}>
                {loja.telefone}
              </a>
            </li>
            <li>
              <a href={loja.instagramUrl} target="_blank" rel="noreferrer" className={link}>
                Instagram
              </a>
            </li>
            <li>
              <a href={loja.facebookUrl} target="_blank" rel="noreferrer" className={link}>
                Facebook
              </a>
            </li>
          </Coluna>
          <Coluna titulo="No site">
            {navegacao.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={link}>
                  {n.label}
                </a>
              </li>
            ))}
          </Coluna>
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-papel/10 px-4 py-6 text-sm text-papel/45 sm:px-8">
        © {anoAtual} Casa de Rações Cantinho do Pet. Guarulhos (SP).
      </p>
    </footer>
  )
}
