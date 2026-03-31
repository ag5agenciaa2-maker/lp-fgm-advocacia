# SITE DNA — FGM ADVOCACIA CRIMINAL

**Nicho:** Advocacia Criminal especializada — Defesa penal, plantão 24h, audiência de custódia, habeas corpus, tráfico de drogas, violência doméstica e Tribunal do Júri. Público: familiares em desespero buscando ajuda imediata.
**Posicionamento:** Urgência + Autoridade + Confiança. O site comunica uma "sala de guerra jurídica" — azul petróleo escuro transmitindo seriedade institucional, ouro sugerindo excelência e resultado. O visitante sente que está diante do escritório mais capaz e disponível da zona oeste do RJ, pronto para agir agora.
**Data de criação:** 2025

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS / Tailwind Token | Hex | Função Específica no Layout |
|---|---|---|
| `primary` / `bg-primary` | `#0D2C43` | Fundo Hero, Header scrollado, seção Contato, Footer — âncora visual de autoridade |
| `secondary` / `text-secondary` | `#C5A059` | CTA principal, ícones de destaque, divisores decorativos, hover de nav links — ouro de conversão |
| `accent` / `bg-accent` | `#F8FAFC` | Fundo alternado (Serviços, Depoimentos) — quebra de ritmo sem peso |
| `white` / `bg-white` | `#FFFFFF` | Cards de serviço, cards de depoimento, seção FAQ — clareza e respiro |
| `[#071927]` | `#071927` | Footer deep — versão mais escura do primary para criar hierarquia de profundidade |
| `slate-800` | `#1E293B` | Texto body padrão |
| `slate-600` | `#475569` | Parágrafos de suporte, descrições de cards |
| `slate-400` | `#94A3B8` | Labels, metadados, endereço, "Cliente Verificada" |
| `white/5` | `rgba(255,255,255,0.05)` | Background dos info-cards na seção Contato (dark glassmorphism) |
| `secondary/20` | `rgba(197,160,89,0.20)` | Badge pill no Hero (fundo translúcido) |
| `#25D366` | `#25D366` | Botão flutuante WhatsApp — cor oficial da marca |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| H1 Hero | Playfair Display | 700–900 | `text-4xl` (2.25rem) → `md:text-6xl` (3.75rem) → `lg:text-7xl` (4.5rem) | Linha `leading-tight`; "Alto Impacto" em `italic text-secondary` |
| H2 Seções (serif) | Playfair Display | 700 | `text-3xl` (1.875rem) → `md:text-5xl` (3rem) | Títulos editoriais de seção como "Excelência Jurídica..." |
| H2 Label Acima (eyebrow) | Inter | 700 | `text-sm` (0.875rem) | `uppercase tracking-[0.2em]` em `text-secondary` — rótulo de seção |
| H3 Card Serviço | Inter | 700 | `text-xl` (1.25rem) | `text-primary`, muda para `text-secondary` no hover |
| H4 Equipe | Inter | 700 | `text-xl` (1.25rem) | `text-primary` |
| H5 Depoimento Nome | Inter | 700 | `text-base` (1rem) | `leading-none mb-1` |
| Body Parágrafos | Inter | 400 | `text-lg` (1.125rem) / `text-sm` (0.875rem) | `leading-relaxed`, cor `slate-600` |
| Nav Links Desktop | Inter | 700 | `text-[11px]` → `lg:text-xs` (0.75rem) | `uppercase tracking-widest` |
| Stats Numbers (Hero) | Playfair Display | 700 | `text-3xl` (1.875rem) | `text-secondary` — contadores de prova social |
| Stats Labels (Hero) | Inter | 400 | `text-[10px]` | `uppercase tracking-widest text-slate-400` |
| FAQ Toggle Label | Inter | 700 | `text-lg` (1.125rem) | `text-primary pr-8` |
| Footer Eyebrow | Inter | 700 | `text-sm` (0.875rem) | `uppercase tracking-wider text-white` |
| Footer Body | Inter | 400 | `text-sm` (0.875rem) | `text-slate-400` |
| Logo Principal | Playfair Display | 700 | `text-2xl` (1.5rem) | `leading-none` |
| Logo Subtexto | Inter | 500 | `text-[10px]` | `uppercase tracking-widest` |

### Estilo Geral

Arquitetura editorial jurídica de alto contraste: base bicolor rígida (azul petróleo `#0D2C43` vs branco `#FFFFFF`) pontuada por ouro metálico `#C5A059` como agente de conversão. Tipografia dual-system com Playfair Display (serifa editorial) para headlines de impacto e Inter (grotesca neutra) para toda informação técnica e funcional — criando tensão intencional entre autoridade clássica e eficiência moderna. Cantos arredondados agressivos em cards de depoimentos (`rounded-3xl`) contrastam com cantos médios em cards de serviço (`rounded-xl`), gerando ritmo visual sem uniformidade genérica. Glassmorphism restrito à seção dark de contato (`bg-white/5 backdrop-blur-sm`), preservando sofisticação sem excesso.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Header / Navegação Sticky

**Estrutura:** `fixed top-0 left-0 right-0 z-50` — Flexbox horizontal, `justify-between`, `items-center`. Container `mx-auto px-4 md:px-8`. Nav desktop `hidden md:flex items-center space-x-6`. Max-width implícito pelo container Tailwind.

**Fundo:** Estado inicial: `bg-transparent py-5` (overlay sobre Hero). Após scroll > 50px: `bg-primary/95 backdrop-blur-md py-3 shadow-lg` — transição `transition-all duration-300`.

**Elementos Restritos:** Logo (flex-col) à esquerda com sigla "FGM" em Playfair + subtexto "Advocacia Criminal" abaixo. Direita: 6 nav links + botão CTA `bg-secondary` com ícone phone-call. Mobile: hamburguer `text-secondary`.

**Animação:** Transição via JS classList toggle na scroll — `duration-300` no próprio elemento via Tailwind. Logo muda de `text-primary` → `text-white`; subtexto de `text-primary/70` → `text-secondary`.

**Micro-interações:** Nav links: `hover:text-secondary transition-colors`. CTA button: `hover:bg-secondary/90 transition-all shadow-lg`. Mobile menu: `max-height` de `0` → `100vh` com `transition: max-height 0.3s ease-in-out`.

**Diferenciador Visual:** Header completamente transparente no topo — Logo em azul escuro sobre Hero azul escuro (quase invisível), criando entrada imersiva. Muda de personalidade completa ao scroll, como se "emergisse" do fundo.

---

### SEÇÃO 2 — Hero

**Estrutura:** `min-h-screen flex items-center pt-20 overflow-hidden bg-primary`. Grid interno: `grid lg:grid-cols-2 gap-12 items-center`. Coluna esquerda: `max-w-2xl`. Coluna direita: visível apenas em `lg:block`.

**Fundo:** `bg-primary` base. Overlay absoluto: `bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-10`. Imagem de tribunal Unsplash como `absolute inset-0 object-cover opacity-30`. Camadas: imagem (opacity 30%) → gradient escurecedor direcionado → conteúdo.

**Elementos Restritos:**
- Badge pill: `inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 px-4 py-2 rounded-full text-secondary text-sm` com ícone shield-alert
- H1 com `<span class="text-secondary italic">` em "Alto Impacto"
- Dois CTAs lado a lado: botão principal gold + bloco de rating glassmorphism (`bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg`)
- Stats bar: 3 métricas separadas por divisores `w-px h-10 bg-white/10`, abaixo de `border-t border-white/10 pt-8`
- Coluna direita: foto `rounded-2xl border-2 border-secondary/30 transform rotate-1` + badge flutuante 5.0 (`absolute -top-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl z-20`) + blob blur `w-64 h-64 bg-secondary/10 rounded-full blur-3xl`

**Animação:** Badge 5.0 no canto superior esquerdo da foto: sem entrada animada, estático mas visualmente separado. Botão CTA principal: `animate-pulse-gold` (keyframe custom: `scale(1)→scale(1.05)` + `box-shadow 0 0 0 0 rgba(197,160,89,0.7)→0 0 20px 10px rgba(197,160,89,0)`, ciclo `2s infinite`).

**Micro-interações:** CTA principal: `hover:-translate-y-1 transition-all transform shadow-lg`. Foto da equipe: `transform rotate-1` (estático, leve inclinação para quebrar rigidez grid).

**Diferenciador Visual:** A foto da equipe inclinada 1° em `rotate-1` dentro de borda ouro `border-secondary/30` — recusa ao retângulo comportado. Badge de nota flutuante com sombra independente cria profundidade de camadas real, não simulada por sombra no card pai.

---

### SEÇÃO 3 — Serviços

**Estrutura:** `py-24 bg-accent`. Grid de cards: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`. Header da seção centralizado `text-center max-w-3xl mx-auto mb-16`. Divisor decorativo: `w-20 h-1 bg-secondary mx-auto mb-6`.

**Fundo:** `bg-accent` (#F8FAFC) — off-white frio. Cards internos `bg-white` criam duplo plano de branco.

**Elementos Restritos:** 9 cards iguais em grid responsivo. Cada card: ícone Lucide em container `inline-block p-3 bg-accent rounded-lg mb-6` + H3 + parágrafo `text-sm text-slate-600`.

**Animação:** Entrance: nenhuma animada via JS — depende de scroll nativo. Hover provoca a mudança completa.

**Micro-interações:** Card: `hover:shadow-xl hover:-translate-y-1 transition-all`. Container do ícone: `group-hover:bg-primary transition-colors`. H3: `group-hover:text-secondary transition-colors`. Usando `group` no card pai para disparar todos os filhos simultaneamente — efeito cascata coordenado.

**Diferenciador Visual:** O ícone muda de container `bg-accent` (claro) para `bg-primary` (escuro) no hover — inversão tonal total dentro de um elemento pequeno. Não é só sombra que cresce: é uma metamorfose de identidade do card.

---

### SEÇÃO 4 — Sobre o Escritório

**Estrutura:** `py-24 bg-white overflow-hidden`. Dois blocos: grid `lg:grid-cols-2 gap-16 items-center mb-24` (foto + texto) e grid `md:grid-cols-3 gap-8` (equipe). Divisor visual `pt-16 border-t border-slate-100` entre blocos.

**Fundo:** `bg-white` limpo. Foto ocupa `h-[500px] object-cover` com `rounded-2xl border-4 border-accent shadow-2xl`.

**Elementos Restritos:**
- Bloco foto: citação flutuante `absolute -bottom-8 -left-8 bg-primary p-8 rounded-xl border-r-8 border-secondary shadow-2xl z-10 max-w-xs` — blocos usa `border-r-8` (borda lateral direita de 8px) em `#C5A059` como acento arquitetônico
- Lista de diferenciais: grid `grid-cols-1 sm:grid-cols-2 gap-4` com ícone `check-circle text-secondary` + texto bold
- Cards de equipe: foto `w-64 h-64 rounded-2xl border-4 border-accent` dentro de container `group`, texto alinhado ao centro abaixo

**Animação:** Foto da equipe: `group-hover:scale-105 transition-transform duration-500` (zoom lento interno ao overflow hidden).

**Micro-interações:** Card de membro: container da foto `group-hover:border-secondary transition-all` — borda muda de `border-accent` (cinza claro) para `border-secondary` (ouro). Transição `duration-500` mais lenta que o padrão 300ms.

**Diferenciador Visual:** A citação flutuante usa `border-r-8 border-secondary` — uma borda lateral de 8px em ouro funcionando como marcador editorial (estilo livro impresso), não como decoration CSS genérica. Cria plano Z visual real sobre a foto.

---

### SEÇÃO 5 — Depoimentos

**Estrutura:** `py-24 bg-accent relative overflow-hidden`. Grid: `grid md:grid-cols-3 gap-8`. Header centralizado `max-w-4xl mx-auto mb-20`.

**Fundo:** `bg-accent` (#F8FAFC). Sem texturas ou gradients adicionais — a leveza dos cards brancos sobre off-white cria profundidade suficiente.

**Elementos Restritos:**
- Badge Google no header: `inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-100` com logo Google real (PNG externo) + 5 estrelas + texto contagem
- Cards: `bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-slate-50 relative`
- Ícone aspas: `absolute top-8 right-8 text-secondary/10 w-12 h-12` (decorativo, quase invisível por default)
- Avatar inicial: `w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-lg` — letra inicial do nome
- Linha separadora: `border-t border-slate-50 pt-6` antes do autor

**Animação:** Hover eleva o card.

**Micro-interações:** Card: `hover:-translate-y-2 transition-all duration-300`. Ícone aspas: `group-hover:text-secondary/20 transition-colors` — de 10% para 20% de opacidade. Sutil mas presente.

**Diferenciador Visual:** `shadow-xl shadow-primary/5` — a sombra é colorida com o azul petróleo do primary em 5% de opacidade. Não é sombra preta genérica: é uma sombra com identidade cromática da marca. O `rounded-3xl` (24px) nos cards contrasta com o `rounded-xl` (12px) dos cards de serviço — linguagem de bordas diferenciada por contexto emocional.

---

### SEÇÃO 6 — FAQ

**Estrutura:** `py-24 bg-white`. Container `max-w-4xl` centralizado. `space-y-4` entre items. Cada item: `border border-slate-100 rounded-2xl overflow-hidden shadow-sm`.

**Fundo:** `bg-white`. Item expandido: área de resposta `bg-accent/20` — 20% de transparência do accent.

**Elementos Restritos:** Ícone `help-circle text-secondary/40 w-10 h-10` centralizado acima do H2 em italic. Toggle: `flex items-center justify-between p-7`. H2 do título em `italic`.

**Animação:** Expansão via JS: toggle classe `closed`↔`open`. CSS: `max-height: 0→500px` + `opacity: 0→100` com `transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out`. Primeiro item começa com `open` por padrão. Ícone de toggle: rotação `rotate-45` quando aberto (plus vira X).

**Micro-interações:** Card item: `hover:shadow-md transition-all`. Ícone `+`: `transition-transform duration-300` → `rotate-45` quando aberto.

**Diferenciador Visual:** H2 do FAQ em `italic` — tipografia editorial para uma seção normalmente tratada como utilitária. O ícone decorativo `help-circle` acima do título em `text-secondary/40` (40% opacidade) — presença sutil que guia sem anunciar.

---

### SEÇÃO 7 — Contato & Plantão

**Estrutura:** `py-24 bg-primary text-white overflow-hidden relative`. Grid interno: `grid lg:grid-cols-2 gap-12 items-stretch`. Esquerda: `space-y-6` com 2 blocos info. Direita: bloco CTA em `bg-secondary p-12 rounded-3xl`.

**Fundo:** `bg-primary` (#0D2C43). Decoração SVG absoluta: triângulo branco `opacity-10` no canto superior direito via `<path d="M0 100 L100 0 L100 100 Z" fill="white" />` com `viewBox="0 0 100 100" preserveAspectRatio="none"` — cobrindo toda a seção com um corte diagonal sutil.

**Elementos Restritos:**
- Blocos info: `bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm` — glassmorphism sutil
- Ícone em cada bloco: `bg-secondary p-4 rounded-2xl text-primary` — ouro com ícone em azul (inversão da paleta)
- Bloco CTA direito em `bg-secondary` com ícone `animate-bounce` dentro de `bg-primary/10 p-6 rounded-full`
- Botão WhatsApp: `bg-primary hover:bg-[#071927] text-white rounded-2xl` com ícone shield-check que rotaciona no hover
- Instagram link: `flex gap-4 text-primary font-bold items-center` abaixo do botão

**Animação:** Ícone message-circle: `animate-bounce` (nativo Tailwind). Sem entrance animation adicional.

**Micro-interações:** Blocos info: `hover:bg-white/10 transition-colors` (de 5% para 10% branco). Botão CTA: `hover:scale-[1.03] transition-all transform shadow-xl`. Ícone shield-check: `group-hover:rotate-12 transition-transform w-6 h-6`.

**Diferenciador Visual:** Bloco CTA direito com `bg-secondary` quebra o padrão dark da seção com um painel inteiramente em ouro — inversão completa de hierarquia cromática. O botão CTA dentro deste painel volta ao `bg-primary` — criando sanduba de cores: escuro → ouro → escuro. Triângulo SVG diagonal como textura de fundo (não imagem, não gradiente) — geometria pura em código.

---

### SEÇÃO 8 — Footer

**Estrutura:** `bg-[#071927] text-slate-400 py-12 border-t border-white/5`. Grid: `md:grid-cols-3 gap-12 mb-12`. Rodapé final: `flex flex-col md:flex-row justify-between items-center gap-4`.

**Fundo:** `#071927` — tom de azul profundo, mais escuro que o primary. Sem decorações.

**Elementos Restritos:** Logo com ícone `scale` Lucide + sigla + subtexto. 3 colunas: brand + áreas de atendimento (grid `grid-cols-2 gap-2 text-xs`) + endereço. Barra final com copyright + links legais + nota geográfica.

**Micro-interações:** Links legais: `hover:text-secondary transition-colors`.

**Diferenciador Visual:** Grade de bairros em `grid-cols-2` no footer — comunicação de presença territorial sem listar em bullet genérico. Cria densidade informacional que transmite escala de operação.

---

### SEÇÃO 9 — Botão WhatsApp Flutuante

**Estrutura:** `fixed bottom-6 right-6 z-[999] group`. Tooltip acima: `absolute -top-12 right-0 bg-white text-primary text-xs font-bold px-3 py-1 rounded shadow-lg`.

**Elementos Restritos:** SVG WhatsApp inline (path custom, não ícone Lucide). Wrapper: `bg-[#25D366] p-4 rounded-full shadow-2xl shadow-green-500/20`.

**Animação:** `animate-bounce` no wrapper — pulsação vertical contínua.

**Micro-interações:** Wrapper: `hover:scale-110 transition-transform active:scale-95`. Tooltip: `opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none` — aparece no hover sem interferir no clique.

**Diferenciador Visual:** Tooltip com texto "Advogado Online 24h" — transforma o botão de contato genérico em promessa de valor. `shadow-green-500/20` é sombra colorida com o verde do WhatsApp, não sombra preta.

---

## COMPONENTES REUTILIZÁVEIS

### Botão Primário (CTA Gold)

```css
/* Classe base aplicada */
.btn-primary {
  background-color: #C5A059;         /* secondary */
  color: #0D2C43;                     /* primary */
  font-weight: 700;
  padding: 1rem 2rem;                 /* py-4 px-8 */
  border-radius: 0.5rem;             /* rounded-lg */
  font-size: 1.125rem;               /* text-lg */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 150ms ease;
  box-shadow: 0 10px 15px -3px rgba(197,160,89,0.3);
}
.btn-primary:hover {
  background-color: rgba(197,160,89,0.9);
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(197,160,89,0.4);
}
/* Variante animada (Hero) */
.btn-primary.animated {
  animation: pulse-gold 2s infinite;
}
@keyframes pulse-gold {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(197,160,89,0.7); }
  50%       { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(197,160,89,0); }
}
```

### Botão Secundário (Dark / Contato)

```css
.btn-dark {
  background-color: #0D2C43;
  color: #ffffff;
  font-weight: 700;
  padding: 1.5rem 2rem;              /* py-6 px-8 */
  border-radius: 1rem;               /* rounded-2xl */
  font-size: 1.25rem;                /* text-xl */
  transition: all 200ms ease;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3);
}
.btn-dark:hover {
  background-color: #071927;
  transform: scale(1.03);
}
.btn-dark .icon {
  transition: transform 200ms ease;
}
.btn-dark:hover .icon {
  transform: rotate(12deg);
}
```

### Card de Serviço

```css
.card-service {
  background: #ffffff;
  padding: 2rem;                     /* p-8 */
  border-radius: 0.75rem;           /* rounded-xl */
  border: 1px solid #f1f5f9;        /* border-slate-100 */
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: all 300ms ease;
}
.card-service:hover {
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}
.card-service .icon-wrapper {
  display: inline-block;
  padding: 0.75rem;                  /* p-3 */
  background: #F8FAFC;
  border-radius: 0.5rem;
  transition: background-color 300ms ease;
}
.card-service:hover .icon-wrapper {
  background: #0D2C43;              /* bg-primary */
}
.card-service h3 {
  transition: color 300ms ease;
}
.card-service:hover h3 {
  color: #C5A059;                   /* text-secondary */
}
```

### Card de Depoimento

```css
.card-testimonial {
  background: #ffffff;
  padding: 2.5rem;                   /* p-10 */
  border-radius: 1.5rem;            /* rounded-3xl */
  border: 1px solid #f8fafc;
  box-shadow: 0 20px 25px -5px rgba(13,44,67,0.05);  /* shadow-primary/5 */
  position: relative;
  transition: all 300ms ease;
}
.card-testimonial:hover {
  transform: translateY(-8px);       /* -translate-y-2 */
}
.card-testimonial .quote-icon {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: rgba(197,160,89,0.10);
  transition: color 300ms ease;
}
.card-testimonial:hover .quote-icon {
  color: rgba(197,160,89,0.20);
}
.card-testimonial .author-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background: rgba(13,44,67,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  color: #0D2C43;
}
```

### Card de Membro da Equipe

```css
.card-member .photo-wrapper {
  width: 16rem; height: 16rem;       /* w-64 h-64 */
  border-radius: 1rem;              /* rounded-2xl */
  overflow: hidden;
  border: 4px solid #F8FAFC;        /* border-accent */
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  transition: border-color 500ms ease;
}
.card-member:hover .photo-wrapper {
  border-color: #C5A059;            /* border-secondary */
}
.card-member .photo-wrapper img {
  transition: transform 500ms ease;
}
.card-member:hover .photo-wrapper img {
  transform: scale(1.05);
}
```

### Item FAQ (Accordion)

```css
.faq-item {
  border: 1px solid #f1f5f9;
  border-radius: 1rem;              /* rounded-2xl */
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: box-shadow 300ms ease;
}
.faq-item:hover {
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);
}
.faq-content {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  overflow: hidden;
}
.faq-content.closed { max-height: 0; opacity: 0; }
.faq-content.open   { max-height: 500px; opacity: 1; }
.faq-icon {
  transition: transform 300ms ease;
}
.faq-icon.open {
  transform: rotate(45deg);         /* + vira X */
}
```

### Badge de Prova Social (Pill)

```css
.badge-proof {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(197,160,89,0.20);
  border: 1px solid rgba(197,160,89,0.30);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  color: #C5A059;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}
```

### Info Block (Glassmorphism Dark)

```css
.info-block-dark {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.10);
  padding: 2.5rem;                   /* p-10 */
  border-radius: 1.5rem;            /* rounded-3xl */
  backdrop-filter: blur(8px);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: background-color 200ms ease;
}
.info-block-dark:hover {
  background: rgba(255,255,255,0.10);
}
.info-block-dark .icon-box {
  background: #C5A059;
  padding: 1rem;
  border-radius: 1rem;
  color: #0D2C43;
  flex-shrink: 0;
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Hero com foto de aperto de mão ou martelo de juiz como imagem de fundo** — Substituído por foto real da equipe posicionada como elemento secundário inclinado (`rotate-1`) em coluna direita, e imagem de tribunal como textura de fundo com opacidade 30%, não como protagonista visual.

❌ **2. Botão CTA em verde WhatsApp genérico no corpo da página** — O CTA principal do Hero é inteiramente em ouro `#C5A059` com o texto "Falar com Advogado agora", conectado ao WhatsApp porém sem usar a cor da plataforma — a identidade do escritório prevalece sobre a identidade da ferramenta.

❌ **3. Grid de serviços com ícones coloridos em múltiplas cores arco-íris** — Todos os ícones Lucide são exibidos na cor `text-secondary` (#C5A059), monotemáticos, dentro de containers que invertem de claro para escuro no hover, mantendo coerência cromática absoluta.

❌ **4. Foto de advogado com terno e pose rígida em formato circular** — Os cards da equipe usam formato `rounded-2xl` (não circular), com zoom lento de 500ms no hover, borda que muda de cor — tratamento editorial de retrato, não template corporativo.

❌ **5. Testemunhos com texto em aspas gigantes coloridas como elemento decorativo principal** — O ícone de aspas é `absolute top-8 right-8 text-secondary/10` (10% de opacidade, quase invisível), revelando-se sutilmente a 20% no hover. A ênfase visual recai sobre o avatar inicial e o texto, não na decoração.

❌ **6. Header com logo colorido sobre Hero escuro criando logo ilegível** — O header inicia `bg-transparent` com logo em `text-primary` (azul escuro sobre fundo azul escuro) — quase invisível intencionalmente. Só após scroll o header ganha fundo `bg-primary/95` e o logo muda para branco, criando uma aparição progressiva que reforça a imersão do Hero.

❌ **7. CTA de WhatsApp flutuante sem contexto** — O tooltip `"Advogado Online 24h"` aparece no hover convertendo o botão de ícone isolado em proposta de valor. A sombra `shadow-green-500/20` ecoa a identidade da plataforma sem grudar o estilo do escritório à cor corporativa do WhatsApp.
