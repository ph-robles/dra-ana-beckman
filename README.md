# Dra. Ana Beatriz Beckman — Site

Site institucional premium para a Dra. Ana Beatriz Beckman (Harmonização
Orofacial), construído do zero em Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + Motion + GSAP + Lenis.

> Identidade visual, textos e estrutura são 100% originais. Nenhum
> conteúdo do site de referência (usado apenas como parâmetro de
> qualidade/UX) foi copiado.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Stack

- **Next.js 16** (App Router, Server + Client Components)
- **TypeScript** estrito
- **Tailwind CSS v4** (tokens via `@theme` em `app/globals.css` — sem `tailwind.config.js`)
- **Motion** (`motion/react`, ex-Framer Motion) — reveals, cursor, menu
- **GSAP** — instalado e pronto para animações de scroll mais complexas
- **Lenis** — smooth scroll (`providers/smooth-scroll-provider.tsx`)
- **React Hook Form + Zod** — formulário de contato validado
- **Resend** — envio do formulário por e-mail (`app/contato/actions.ts`)
- **embla-carousel-react** — carrossel de depoimentos
- **Radix UI + shadcn-style components** — Accordion (FAQ), Button, Input, etc.
- **sonner** — toasts

## Identidade visual

| Token | Uso |
|---|---|
| `ivory` `#fbf6f1` | Fundo base |
| `blush` `#f0dad3` | Rosa claro — seções e acentos suaves |
| `nude` `#d2a98f` | Bordas e divisores |
| `champagne` `#b08d5b` | Dourado discreto — detalhes e hover |
| `espresso` `#372420` | Texto principal |

Tipografia: **Bodoni Moda** (serif editorial, títulos) + **Manrope** (sans, texto).

**Assinatura de movimento:** o `VeilReveal` (`components/shared/veil-reveal.tsx`)
é um véu que se retrai suavemente para revelar imagens — uma metáfora
direta do conceito de harmonização (realçar, não transformar). Usado no
Hero e nas fotos principais de cada página.

## Estrutura de pastas

```
app/            rotas (App Router) — uma pasta por página
components/
  ui/           primitivos estilo shadcn (button, input, accordion...)
  layout/       navbar, mobile menu, footer
  shared/       reveal, veil-reveal, cursor, progress bar, loading screen...
sections/       blocos de página organizados por rota (home/, contato/...)
providers/      SmoothScrollProvider (Lenis)
lib/            constants.ts (dados do negócio), sample-data.ts, schemas.ts, utils.ts
types/          tipos compartilhados
```

## O que já está pronto

- Home completa (Hero, Sobre-preview, Procedimentos-preview, CTA final)
- Páginas: Sobre, Procedimentos (10 itens, com dados reais de benefícios/indicações),
  Antes e Depois, Depoimentos (carrossel), FAQ (accordion), Blog + página de post,
  Contato (formulário funcional), 4 páginas legais, 404
- Navbar com mega-dropdown de Procedimentos, menu mobile full-screen
- Cursor customizado, barra de progresso, loading screen, botão WhatsApp + voltar ao topo
- SEO: metadata por página, sitemap.xml, robots.txt, manifest, JSON-LD (MedicalBusiness)
- Acessibilidade: HTML semântico, foco visível, `prefers-reduced-motion` respeitado

## O que falta (próximos passos)

- [ ] Fotos reais (retratos, consultório, antes/depois com autorização) — todos os
      lugares com placeholder têm comentário `TODO(Raphael)`
- [ ] Textos revisados/aprovados pela cliente (bio, depoimentos)
- [ ] Banner de consentimento de cookies (Google Consent Mode v2) + GA4/Meta Pixel
- [ ] Revisão jurídica das 4 páginas legais antes de publicar
- [ ] `RESEND_API_KEY` e domínio verificado no Resend (`.env.local`)
- [ ] Favicon, `apple-touch-icon.png`, ícones do manifest, imagem de OG (`/public/images/`)
- [ ] Galeria de Instagram na Home (falta no escopo atual)
- [ ] Slider de comparação com arraste no Antes/Depois (hoje é toque para alternar)

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha antes do deploy.
