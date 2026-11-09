# Cantinho do Pet

Landing page da **Casa de Rações Cantinho do Pet**, no Macedo, em Guarulhos (SP). Rações, petiscos, acessórios e higiene pra cães e gatos, com pedidos e entrega pelo WhatsApp.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build localmente
npm run lint     # oxlint
```

## Estrutura

```
src/
├── components/
│   ├── ui/         peças reutilizáveis (Cartaz, Anotacao, BotaoPedido, FotoColada, ícones)
│   ├── layout/     Header, Rodape e o botão flutuante do WhatsApp
│   └── sections/   cada bloco da página (Hero, Loja, Prateleiras, ComoPedir, Mural, Visite...)
├── data/loja.ts    endereço, telefones, redes sociais e links do WhatsApp/Maps
├── hooks/          hooks pequenos (rolagem e tipo de ponteiro)
├── App.tsx         ordem das seções
└── index.css       tokens de cor e tipografia (@theme do Tailwind)
```

Os dados da loja ficam todos em `src/data/loja.ts`. Trocou o telefone ou o endereço, é só mexer lá.

## Identidade visual

- **Cores** da fachada da loja: marrom `#3A1F16` e laranja `#E8682B`, com o amarelo de cartaz `#FFE14A` como destaque.
- **Fontes:** Bricolage Grotesque (títulos e texto) e Caveat Brush (anotações escritas à mão).
- **Elemento-assinatura:** cartazes amarelos presos com fita crepe, como os de pet shop de bairro.

## Imagens

- `public/logo*.png`, `public/logo-icone.jpg` e `public/fotos/loja-*.webp` são da própria loja.
- As demais fotos em `public/fotos/` são do [Unsplash](https://unsplash.com/license) e são provisórias. O ideal é trocar pelas fotos de clientes do Instagram [@cantinhodopet.gru](https://www.instagram.com/cantinhodopet.gru/).
