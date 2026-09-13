# Portfolio — Next.js + Sanity

Grid de projetos → página de detalhe por case study. Todo o conteúdo
(imagens, créditos, galeria) vem do Sanity — nada está hardcoded.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind v4** (tokens em `app/globals.css`)
- **Sanity** como CMS headless — Studio roda em projeto separado
  (ver `portfolio-studio-schema/`), este repo só consome os dados

## Rodar localmente

```bash
npm install
cp .env.local.example .env.local
# preencher NEXT_PUBLIC_SANITY_PROJECT_ID e NEXT_PUBLIC_SANITY_DATASET
npm run dev
```

Sem essas duas variáveis preenchidas, o app builda mas a grid aparece
vazia (é o fallback esperado, não um erro).

## Estrutura

- `app/page.tsx` — grid da home
- `app/work/[slug]/page.tsx` — página de cada case
- `components/CaseStudyCard.tsx` — **o componente placeholder**: uma
  instância = um card na grid, alimentado por um documento do Sanity
- `components/CaseStudyDetail.tsx` — template da página de detalhe
  (hero, créditos, galeria)
- `lib/queries.ts` — todas as queries GROQ num só lugar
- `lib/types.ts` — contrato de tipos entre Sanity e os componentes
- `sanity/` — cliente de leitura (não é o Studio, só o SDK de fetch)
- `app/api/revalidate/route.ts` — webhook: publicar no Sanity atualiza
  o site sem precisar de novo deploy

## Deploy na Vercel

1. Suba este repo pro GitHub
2. Importe na Vercel
3. Nas env vars do projeto, adicione as mesmas do `.env.local.example`
4. Deploy

## Conectar ao Studio (conteúdo)

O Studio (onde você edita os cases) é um projeto Sanity separado —
veja `portfolio-studio-schema/` para o schema e o passo a passo de
criar e deployar ele. Depois de criado, pegue o Project ID gerado e
cole nas env vars acima.

## Webhook de revalidação (opcional mas recomendado)

No painel do Sanity (manage.sanity.io) → seu projeto → API →
Webhooks:

- URL: `https://seu-site.vercel.app/api/revalidate`
- Dataset: `production`
- Trigger on: Create, Update, Delete
- Secret: gere um valor qualquer, cole em `SANITY_REVALIDATE_SECRET`
  tanto no webhook quanto nas env vars da Vercel

Sem isso, o conteúdo ainda atualiza sozinho (revalidate a cada 60s),
só que com atraso em vez de instantâneo.
