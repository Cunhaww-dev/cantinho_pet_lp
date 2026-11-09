// Dados da loja num lugar só — fácil de ajustar antes de apresentar.
export const loja = {
  nome: 'Cantinho do Pet',
  endereco: 'Rua Claudino Barbosa, 847',
  bairro: 'Macedo, Guarulhos (SP)',
  cep: '07113-040',
  telefone: '(11) 2441-4646',
  telefoneLink: 'tel:+551124414646',
  whatsapp: '(11) 99712-1809',
  whatsappNumero: '5511997121809',
  instagram: '@cantinhodopet.gru',
  instagramUrl: 'https://www.instagram.com/cantinhodopet.gru/',
  facebookUrl: 'https://www.facebook.com/cantinhodopet.gru',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cantinho+do+Pet+Rua+Claudino+Barbosa+847+Macedo+Guarulhos',
  mapsEmbed:
    'https://maps.google.com/maps?q=Rua%20Claudino%20Barbosa%2C%20847%20-%20Macedo%2C%20Guarulhos%20-%20SP&z=16&output=embed',
}

export function whatsLink(mensagem = 'Oi, Cantinho do Pet! Vim pelo site e queria uma informação.') {
  return `https://wa.me/${loja.whatsappNumero}?text=${encodeURIComponent(mensagem)}`
}
