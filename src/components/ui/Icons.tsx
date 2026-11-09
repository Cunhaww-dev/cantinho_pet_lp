import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

export function Pata(props: P) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M32.4 34.2c7.6 0 14.9 8.3 14.9 14.6 0 5-4.3 6.7-8.2 6.7-3.1 0-4.4-1.4-6.9-1.4s-3.9 1.5-7 1.5c-4 0-8.3-1.9-8.3-6.9 0-6.3 7.8-14.5 15.5-14.5Z" />
      <ellipse cx="13.6" cy="28.6" rx="5.6" ry="7.4" transform="rotate(-22 13.6 28.6)" />
      <ellipse cx="50.6" cy="28.4" rx="5.6" ry="7.4" transform="rotate(20 50.6 28.4)" />
      <ellipse cx="24.4" cy="15.4" rx="5.4" ry="7.6" transform="rotate(-8 24.4 15.4)" />
      <ellipse cx="40.2" cy="15.2" rx="5.4" ry="7.6" transform="rotate(9 40.2 15.2)" />
    </svg>
  )
}

export function WhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2.5a9.43 9.43 0 0 0-8.1 14.24L2.5 21.5l4.9-1.4a9.43 9.43 0 1 0 4.64-17.6Zm0 17.2a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.9.83.85-2.82-.19-.3a7.78 7.78 0 1 1 6.51 3.55Zm4.27-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.91-.13.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.64-.13-.23-.01-.36.1-.48.11-.1.24-.27.36-.41.12-.14.16-.24.24-.39.08-.16.04-.3-.02-.41-.06-.12-.52-1.26-.72-1.73-.19-.45-.38-.39-.52-.4h-.45a.86.86 0 0 0-.62.3c-.21.23-.82.8-.82 1.94s.84 2.25.96 2.4c.11.16 1.65 2.52 4 3.53.56.24 1 .39 1.34.5.56.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.13-1.11-.05-.1-.21-.16-.45-.28Z" />
    </svg>
  )
}

export function Instagram(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Facebook(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.4 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.25-1.45 1.48-1.45h1.55V4.5a20 20 0 0 0-2.27-.12c-2.25 0-3.79 1.37-3.79 3.9v2.22H7.85v3h2.52V21h3.03Z" />
    </svg>
  )
}

export function Pin(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 21.3s-6.8-5.9-6.8-11.6a6.8 6.8 0 1 1 13.6 0c0 5.7-6.8 11.6-6.8 11.6Z" />
      <circle cx="12" cy="9.7" r="2.5" />
    </svg>
  )
}

export function Telefone(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5.2 3.6h3.3l1.6 4.3-2.2 1.5a11.6 11.6 0 0 0 6.7 6.7l1.5-2.2 4.3 1.6v3.3a2 2 0 0 1-2.2 2C10.4 20.2 3.8 13.6 3.2 5.8a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function Moto(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="5.5" cy="16.5" r="3" />
      <circle cx="18.5" cy="16.5" r="3" />
      <path d="M8.5 16.5h5.2l2.6-6.2h-4.6M14.6 6.6h2.6l1.3 9.9M5.5 16.5l2.2-5.2h4" />
    </svg>
  )
}
