type Props = {
  src: string
  alt: string
  w: number
  h: number
  giro: string
  className?: string
}

/** Foto impressa presa com fita, mesma linguagem dos cartazes e do mural. */
export function FotoColada({ src, alt, w, h, giro, className = '' }: Props) {
  return (
    <figure className={`relative bg-white p-2 shadow-[0_16px_32px_-14px_rgba(58,31,22,0.4)] sm:p-2.5 ${giro} ${className}`}>
      <span className="fita -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" aria-hidden="true" />
      <img src={src} alt={alt} width={w} height={h} loading="lazy" className="w-full object-cover" style={{ aspectRatio: `${w}/${h}` }} />
    </figure>
  )
}
