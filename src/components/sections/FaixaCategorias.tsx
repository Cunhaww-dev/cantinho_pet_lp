import { Pata } from '../ui'

const itens = ['Rações', 'Petiscos', 'Coleiras', 'Caminhas', 'Areia pra gato', 'Brinquedos', 'Shampoo', 'Tapete higiênico']

export function FaixaCategorias() {
  const faixa = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {itens.map((item) => (
        <span key={item} className="flex items-center">
          <span className="titulo px-6 text-3xl sm:px-8 sm:text-5xl">{item}</span>
          <Pata className="size-6 text-cartaz sm:size-8" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="overflow-hidden bg-cafe py-5 text-papel sm:py-7">
      <p className="sr-only">{itens.join(', ')}</p>
      <div className="animate-marquee flex w-max">
        {faixa}
        {faixa}
      </div>
    </div>
  )
}
