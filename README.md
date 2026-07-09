# Giovanna Gimenez · Psicanálise Clínica — Site

Site institucional estático (HTML + CSS + JavaScript vanilla) publicado no **GitHub Pages**
em **https://giovannagimenez98.github.io/**. A **home** é HTML estático; o **blog ("Reflexões")**
é gerado pelo **Eleventy** a partir de Markdown e pode ser alimentado por um **painel visual
(Sveltia CMS)** — ver abaixo.

- **Acessível** (WCAG 2.1 AA), **responsivo** (320px → 1440px+) e **otimizado para SEO**.
- **Blog com painel:** posts em Markdown, publicados por um CMS com login e "Publicar".

---

## 📝 Painel do blog (para quem escreve, sem código)

Acesse **`https://giovannagimenez98.github.io/admin/`**, faça login e crie/edite/exclua posts
com fotos, pela interface. Ao publicar, o GitHub Actions gera o site e publica em ~1–2 min.

> A configuração do painel fica em `src/admin/config.yml` (já aponta para este repositório).
> O login usa um serviço de autenticação (GitHub OAuth) configurado à parte.

---

## 📁 Estrutura

```
src/                          → FONTE do site (Eleventy gera _site/)
  index.html                  → Página inicial (estática, todas as seções)
  404.html
  _includes/base.njk, post.njk→ Modelos (head/header/rodapé e layout do artigo)
  reflexoes/
    index.njk                 → Listagem do blog (gerada da coleção de posts)
    posts/*.md                → Os textos, em Markdown (editados pelo painel)
  sitemap.njk                 → Sitemap (gerado)
  robots.txt
  assets/                     → css, js, images (+ images/posts = uploads do painel), icons, logo
  admin/                      → Painel Sveltia CMS (index.html + config.yml)
.eleventy.js, package.json     → Configuração do gerador (build)
.github/workflows/deploy.yml   → Build (Eleventy) + publicação no GitHub Pages
_site/                         → Saída gerada (não versionada)
```

---

## 🚀 Publicação (GitHub Pages)

Este repositório é o **site de usuária** `giovannagimenez98.github.io`, servido na **raiz**
`https://giovannagimenez98.github.io/`.

1. Em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
2. A cada `push` na `main`, o site é publicado automaticamente pelo workflow
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (~1–2 min).

> As URLs de SEO (`canonical`, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`) já estão
> configuradas para este domínio. Só é preciso revisá-las se um dia migrar para um domínio próprio.

---

## ✏️ Como editar os textos

Todos os textos editáveis da home estão marcados por comentários no `src/index.html`, por exemplo:

```html
<!-- FRASE_HERO:início -->
<p class="hero__frase">Há histórias que precisam...</p>
<!-- FRASE_HERO:fim -->
```

Basta alterar o texto **entre** os comentários. Principais marcadores:
`FRASE_HERO`, `HERO_APOIO`, `INTRO_P1`, `INTRO_P2`, `SOBRE_TITULO`, `SOBRE_TEXTO`,
`SOBRE_FORMACAO`, `AREAS_ATENDIMENTO`, `REFLEXOES_TITULO`, `REFLEXOES_APOIO`.

- **Adicionar um item de formação:** em "Sobre mim", copie uma linha `<li>...</li>`
  dentro de `<ul class="formacao">`.
- **Adicionar/remover uma área de atendimento:** copie uma `<li class="area">...</li>`
  dentro de `<ul class="areas-grid">`.

---

## 📞 Dados de contato e agendamento

Os canais já estão preenchidos com os dados reais (WhatsApp, e-mail e Instagram), na seção de
contato e no rodapé do `src/index.html` (e nos metadados JSON-LD). O botão **"Agendar"** aponta
para o link oficial de agendamento. Para trocar qualquer um, faça "localizar e substituir" em
`src/index.html`:

| Dado | Onde aparece |
|------|--------------|
| WhatsApp (`wa.me/55...` + texto `(DD) 9xxxx-xxxx`) | seção de contato e rodapé |
| e-mail (`mailto:` + texto) | seção de contato e rodapé |
| Instagram (`instagram.com/...` + `@handle`) | seção de contato e rodapé |
| link de agendamento (`https://corpora.bio/...`) | botões "Agendar" (menu, hero, CTA final) |

> O **CRP** em "Sobre mim" (formação) ainda é um placeholder — substitua pelo número de registro.

---

## 📝 Como adicionar um novo post (Reflexões)

**Jeito recomendado (sem código): pelo painel.** Acesse `…/admin/`, faça login, clique em
**Novo**, preencha título/resumo/conteúdo, anexe fotos e **Publique**. A listagem, o sitemap
e a página do post são gerados automaticamente. Fotos vão para `src/assets/images/posts/`.

**Alternativa técnica (Markdown):** crie um arquivo em `src/reflexoes/posts/<slug>.md`
com o front matter (`title`, `date`, `description`, `resumo`, `tempoLeitura`, opcional
`cover`) e o texto em Markdown. O nome do arquivo vira a URL (`/reflexoes/posts/<slug>.html`).
Não é preciso mexer na listagem nem no sitemap — o Eleventy gera tudo a partir da pasta.

---

## 🖼️ Como trocar as fotos

Veja o guia detalhado em [`src/assets/images/README.md`](src/assets/images/README.md). Em resumo:
substitua os arquivos **mantendo os mesmos nomes** (`giovanna-hero.jpg`, `giovanna-sobre.jpg`,
`og-image.jpg`) e, se possível, gere também as versões `.webp` (mais leves). As proporções
estão na tabela daquele guia.

---

## 🎨 Identidade visual

Cores e fontes ficam centralizadas no topo de `src/assets/css/styles.css` (bloco `:root`).
Paleta oficial (brand board): creme `#F6F3EF`, bege `#E7DFCF`, oliva `#6B6F4E`,
sálvia `#A7AD8A`, marrom `#3A352F`, cinza `#D9D6CF`. Fontes: **Playfair Display** (títulos)
e **Lato** (texto).

**Logo oficial:** o monograma "g" e o lockup completo ficam em `src/assets/logo/`
(`monograma.png` no cabeçalho). Os favicons/ícones em `src/assets/icons/` são derivados do
monograma. Tagline: *"escuta que acolhe, presença que transforma."*

> ⚡ **Nota de performance (home):** por velocidade, o `src/index.html` tem um pequeno bloco de
> **CSS crítico embutido** no `<head>` (um subconjunto de `styles.css` para o topo da página),
> e a folha completa carrega de forma assíncrona. Se mudar **cores, cabeçalho ou o hero** em
> `styles.css`, ajuste também esse bloco embutido no `index.html` (há um comentário no local).
> As demais páginas não têm esse bloco — nelas basta editar o `styles.css`.

---

## 💻 Pré-visualizar localmente

O blog é gerado pelo Eleventy, então o preview local usa Node:

```bash
npm install       # só na primeira vez
npm run dev       # servidor local (recarrega ao salvar)
# ou: npm run build  → gera a pasta _site/
```

---

## 📊 Analytics

O site inclui **Google Analytics (GA4)** em todas as páginas. O identificador de medição fica
nos snippets `gtag.js` no `<head>` de `src/index.html`, `src/_includes/base.njk` e `src/404.html`.

---

## ✅ Manutenção

- O **ano** no rodapé é atualizado automaticamente por JavaScript.
- O site funciona mesmo sem JavaScript (o menu vira links empilhados).

