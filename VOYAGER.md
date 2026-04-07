# Voyager — Design System Governance
**VMC Subastas · Versión 1.2 · 2026-04-01**
**Equipo:** Julio (AI Engineer) · Mafer (UI)
**Stack:** React + TypeScript + Tailwind CSS v4 + OKLCH + W3C DTCG tokens
**Viewports:** Desktop 1024px · Mobile 420px

> Este documento ES Canon — la fuente de verdad que governa qué se construye,
> cómo se nombra, y cómo se produce con AI. Ningún componente se construye
> sin estar definido aquí primero.

---

## 1. Fundaciones

### 1.1 Identidad Visual — The Vault

VMC Subastas es una plataforma de subastas de vehículos de alto valor. El
sistema visual rechaza la estética de marketplace genérico. Abraza la
precisión de una galería de lujo y la autoridad de una revista automotriz
premium. Cada decisión de diseño refuerza: exclusividad, confianza, urgencia
controlada.

**North Star:** "The Digital Curator" — el usuario no compra, participa en
una subasta curada.

**Tres señales visuales clave:**
- **The Vault** — profundidad y autoridad (púrpura oscuro)
- **En Vivo** — urgencia de mercado (naranja)
- **Negociable** — oportunidad activa (cian)

---

### 1.2 Sistema de Color

Todos los colores operan en espacio **OKLCH** — nunca HEX en tokens.
Fusión por Delta E ≤ 2.0 (centroide). Máximo 3 decimales.

#### Primitivos de Color

| Token | OKLCH | Rol |
|-------|-------|-----|
| `--white` | `oklch(1.000 0.000 0.000)` | Blanco puro |
| `--surface-50` | `oklch(0.983 0.003 168.000)` | Level 0 — fondo base |
| `--surface-lavender` | `oklch(0.951 0.011 300.400)` | Level 1 lavanda nav |
| `--surface-200` | `oklch(0.919 0.006 150.300)` | Surface container highest |
| `--gray-100` | `oklch(0.970 0.001 250.000)` | Level 1 gris — sub-secciones |
| `--gray-300` | `oklch(0.872 0.011 262.000)` | Border default |
| `--gray-500` | `oklch(0.669 0.024 256.000)` | Texto secundario |
| `--gray-600` | `oklch(0.446 0.030 258.000)` | Texto disabled |
| `--neutral-800` | `oklch(0.399 0.019 302.800)` | Texto cuerpo |
| `--neutral-950` | `oklch(0.223 0.004 199.000)` | on_surface — texto principal |
| `--purple-600` | `oklch(0.335 0.163 289.500)` | Vault claro — acción primaria |
| `--purple-800` | `oklch(0.242 0.138 286.500)` | The Vault — brand principal |
| `--purple-900` | `oklch(0.294 0.149 288.000)` | Overlay hero oscuro |
| `--cyan-400` | `oklch(0.761 0.130 197.000)` | Negociable |
| `--orange-500` | `oklch(0.724 0.154 55.200)` | En Vivo — CTA urgente |
| `--red-500` | `oklch(0.637 0.207 25.500)` | Error / dot En Vivo |
| `--amber-500` | `oklch(0.784 0.172 68.000)` | Warning |

#### Semánticos de Color

| Token | Referencia | Uso |
|-------|-----------|-----|
| `--color-text-on-surface` | `--neutral-950` | Texto principal — NUNCA #000 |
| `--color-text-primary` | `--purple-800` | Headings, texto brand |
| `--color-text-body` | `--neutral-800` | Cuerpo — año, ubicación |
| `--color-text-muted` | neutral-800 / 50% | Info secundaria |
| `--color-text-label` | neutral-800 / 40% | Labels — PRECIO BASE |
| `--color-text-price-label` | `--gray-500` | Etiqueta precio en cards |
| `--color-text-disabled` | `--gray-600` | Texto deshabilitado |
| `--color-text-accent` | `--cyan-400` | Timer activo, CIERRA HOY |
| `--color-text-on-dark` | `--white` | Sobre sidebar, header, hero |
| `--color-action-primary` | `--purple-600` | Acción principal brand |
| `--color-action-cta` | `--orange-500` | CTA — INGRESA, lote destacado |
| `--color-action-accent` | `--cyan-400` | REALIZAR OFERTA, NEGOCIABLE |
| `--color-surface-page` | `--surface-50` | Fondo base de página |
| `--color-surface-card` | `--white` | Fondo de cards |
| `--color-surface-section` | `--gray-100` | Sub-secciones |
| `--color-surface-input` | `--surface-200` | Fondo inputs — sin border |
| `--color-surface-sidebar` | `--purple-800` | Sidebar y header |
| `--color-surface-hero-gradient` | gradient-brand | Hero, primary action areas |
| `--color-status-live` | `--red-500` | Dot indicador En Vivo |
| `--color-status-warning` | `--amber-500` | Advertencias |
| `--brand-vault` | `--purple-800` | The Vault |
| `--brand-en-vivo` | `--orange-500` | En Vivo |
| `--brand-negociable` | `--cyan-400` | Negociable |

**Regla No-Line (DESIGN.md):** Prohibido usar `1px solid border` para
seccionar. Los límites se definen exclusivamente por cambios de
`background-color`.

**Ghost Border:** Único border funcional permitido —
`outline_variant` al 10% de opacidad (`--color-border-ghost`).
Solo para accesibilidad cuando el contraste de superficie no es suficiente.

---

### 1.3 Sistema Tipográfico

**Familias:**
- `Plus Jakarta Sans` — todo el sistema (display, heading, body, UI, labels)
- `Roboto Mono` — VINs, placas, datos tabulares críticos

**Escala — Segunda Mayor ×1.125 desde 16px:**

| Token | px | Uso |
|-------|-----|-----|
| `--font-size-2xs` | 10px | Badge/pill uppercase |
| `--font-size-xs-11` | 11px | Card title uppercase |
| `--font-size-xs` | 12px | Label, caption |
| `--font-size-sm` | 14px | Body sm, card featured |
| `--font-size-base` | 16px | Body base |
| `--font-size-lg` | 18px | Help heading |
| `--font-size-xl` | 20px | Section heading |
| `--font-size-2xl` | 24px | Sub-display |
| `--font-size-3xl` | 27px | Display sm |
| `--font-size-4xl` | 30px | Hero title, hero timer |
| `--font-size-5xl` | 34px | Display md |
| `--font-size-6xl` | 38px | Display lg |

**Line-height:** `4 × ⌊(FontSize × 1.5) / 4⌉` — siempre múltiplo de 4px.

**Pesos:**
- 400 Regular — body, descripción
- 600 SemiBold — labels, UI
- 700 Bold — títulos de card, navegación
- 800 ExtraBold — headings, hero, badges

**Regla tabular-nums:** Precios, timers, VINs, placas, lotes — siempre
`font-variant-numeric: tabular-nums`. VINs y placas además `font-family: Roboto Mono`.

**Estilos semánticos de tipo:**

| Token | Size | Weight | Uso |
|-------|------|--------|-----|
| `--type-hero-title` | 30px | ExtraBold | H1 hero |
| `--type-hero-timer` | 30px | ExtraBold | Timer live tabular |
| `--type-section-heading` | 20px | ExtraBold uppercase | H2 secciones |
| `--type-help-heading` | 18px | ExtraBold | Help center H2 |
| `--type-card-title` | 11px | Bold uppercase | H3 en cards |
| `--type-card-featured` | 14px | Bold uppercase | Card flotante featured |
| `--type-body` | 16px | Regular | Cuerpo principal |
| `--type-body-sm` | 14px | Regular | Descripción corta |
| `--type-label` | 12px | SemiBold | Labels UI |
| `--type-badge` | 10px | Bold uppercase | Badges y pills |
| `--type-display-lg` | 38px | ExtraBold | Display editorial |

---

### 1.4 Sistema de Espaciado

**Grilla de 4px** (no 8px — densidad transaccional requiere granularidad).
`S_norm = 4 × ⌊S_raw / 4⌉`

| Token | px | Uso semántico |
|-------|-----|--------------|
| `--space-1` | 4px | — |
| `--space-2` | 8px | Gap entre elementos en card, nav gap, icon badge |
| `--space-3` | 12px | Padding interno cards |
| `--space-4` | 16px | Gap entre cards en grid |
| `--space-5` | 20px | Padding nav row |
| `--space-6` | 24px | Padding horizontal secciones |
| `--space-7` | 28px | — |
| `--space-8` | 32px | Padding vertical hero/secciones |
| `--space-10` | 40px | Gap entre grupos de sección |
| `--space-12` | 48px | — |
| `--space-16` | 64px | Altura header / sidebar colapsado |

---

### 1.5 Border-Radius

5 niveles máximos — plataforma transaccional, aspecto riguroso:

| Token | px | Rango raw | Uso |
|-------|-----|-----------|-----|
| `--radius-none` | 0px | ≤ 1.5px | Celdas, tablas de datos |
| `--radius-sm` | 4px | 2–5px | Inputs, checkboxes, buttons, cards |
| `--radius-md` | 8px | 6–10px | Modales chicos |
| `--radius-lg` | 16px | 11–24px | Modales, drawers |
| `--radius-full` | 9999px | > 24px | Badges pill, icon buttons circulares |

---

### 1.6 Sombras

4 niveles — `blur = 2 × Y_offset`, color negro puro alpha 0.05–0.12:

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-none` | ninguna | Elementos planos |
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.06)` | Cards en reposo |
| `--shadow-md` | `0 4px 8px rgba(0,0,0,0.08)` | Cards hover |
| `--shadow-lg` | `0 8px 16px rgba(0,0,0,0.10)` | Modales |
| `--shadow-brand-tinted` | `0 8px 24px rgba(34,0,92,0.04)` | Cards flotantes (DESIGN.md) |

---

### 1.7 Transiciones

| Token | Valor | Uso |
|-------|-------|-----|
| `--duration-micro` | 150ms | Hover, focus, micro-interacciones |
| `--duration-standard` | 300ms | Modales, menús, drawers |
| `--easing-standard` | `cubic-bezier(0.3, 0, 0, 1)` | Todos los easing |

---

### 1.8 Z-Index

| Token | Valor | Uso |
|-------|-------|-----|
| `z-0` | 0 | Fondo |
| `z-10` | 10 | Elementos interactivos base |
| `z-20` | 20 | Dropdowns y tooltips |
| `z-30` | 30 | Modales y overlays |
| `z-40` | 40 | Sidebars y drawers |
| `z-50` | 50 | Alertas críticas y notificaciones |

---

### 1.9 Layout

- **Max-width:** 1024px — `margin: 0 auto`
- **Body background:** `--color-surface-page` (`#f8faf9`)
- **Viewports:** Desktop 1024px · Mobile 420px
- **Internos:** flex y grid con porcentajes
- **Íconos:** SVG inline — nunca emojis ni imágenes externas
- **Dimensiones:** todo múltiplo de 4px. `height` explícita en contenedores,
  nunca `min-height: 100vh`

---

## 2. Capas de Composición

Voyager organiza sus componentes en 5 capas jerárquicas. Cada capa construye
sobre la anterior. **Nunca saltarse una capa.**

```
LAYER 4 — LAYOUTS         Marcos estructurales macro (PageLayout, Header, Sidebar)
    ↑
LAYER 3 — BLOQUES         Acoplados al dominio subasta (AuctionCard, BidForm)
    ↑
LAYER 2 — COMPONENTES     Orquestan elementos con micro-estado (Modal, Toast, Dropdown)
    ↑
LAYER 1 — ELEMENTOS       Bloques puros, agnósticos al negocio (Button, Badge, TextField)
    ↑
LAYER 0 — PRIMITIVAS      Conductos de tokens espaciales, sin estilo visual (Box, Stack, Grid)
```

---

## 3. Modelo CEV — Nomenclatura

**Context + Element + Variant** — elimina ambigüedad en catálogos grandes.

| Campo | Pregunta | Ejemplo |
|-------|----------|---------|
| **Context** | ¿A qué entidad pertenece? | `Auction`, `Vehicle`, `Bidder` |
| **Element** | ¿Qué tipo de componente es? | `Card`, `Form`, `Badge` |
| **Variant** | ¿Qué modificador aplica? | `Featured`, `Compact`, `Live` |

**Resultado:** `AuctionCardFeatured` · `VehicleBadgeLive` · `BidderFormCompact`

**Contextos válidos en VMC:**
- `Auction` — elementos del proceso de subasta
- `Vehicle` — datos del vehículo
- `Bidder` — acciones del postor
- `Market` — datos de mercado / inteligencia
- Sin prefijo — elementos genéricos (Button, Badge, Modal)

---

## 4. Catálogo de Componentes

### Convenciones de nomenclatura por entorno

| Entorno | Formato | Ejemplo |
|---------|---------|---------|
| **Figma** | Slash-separated | `Actions / Button / Primary / Default` |
| **React** | PascalCase | `<Button variant="primary" />` |
| **CSS/Tokens** | kebab-case | `--color-action-primary` |
| **Archivo** | PascalCase | `Button.tsx` |

### Variantes por dimensión

- **Por intención:** `Primary` · `Secondary` · `Tertiary` · `Destructive`
- **Por escala:** `sm` · `md` · `lg`
- **Por composición:** props booleanas — `hasLeadingIcon`, `isFullWidth`, `isLoading`

### Estados interactivos

| Estado | Aplica a |
|--------|----------|
| `Default` | Todos |
| `Hover` | Interactivos (button, link, input, card) |
| `Focus` / `Focus-Visible` | Todos los interactivos — obligatorio visible |
| `Active` / `Pressed` | Button, IconButton |
| `Disabled` | Button, Input, Select, Checkbox |
| `Loading` | Button, Card, Form |
| `Error` / `Invalid` | Input, Form, Select |
| `Selected` / `Toggled` | Checkbox, Radio, Tab, FilterChip |
| `Read-only` | Input, TextField |

> Componentes estáticos (Divider, Skeleton, Icon) solo tienen `Default`.
> Componentes de display (Badge, PriceDisplay) tienen `Default` + `Disabled`.
> Componentes interactivos complejos (Button, TextField) — todos los estados aplicables.

---

### LAYER 0 — Primitivas

Conductos de tokens. Sin estilo visual propio. No aparecen en Figma como
componentes — son la base estructural del layout en código.

| # | React | CSS clase | Descripción |
|---|-------|-----------|-------------|
| P-01 | `Box` | `box` | Contenedor genérico — aplica tokens de spacing y color |
| P-02 | `Stack` | `stack` | Flex vertical u horizontal con gap tokenizado |
| P-03 | `Grid` | `grid-layout` | CSS Grid con columnas y gap tokenizados |

---

### LAYER 1 — Elementos

Bloques atómicos. Agnósticos al dominio VMC. Reutilizables en cualquier
contexto. Un elemento no orquesta a otros — es la unidad mínima visual.

#### 1.A — Actions

---

**Button**
`Actions / Button`

El elemento de acción primario del sistema. Toda acción ejecutable usa Button.

| Campo | Valor |
|-------|-------|
| **Figma** | `Actions / Button / {Variant} / {State}` |
| **React** | `<Button variant="primary" size="md" />` |
| **Variantes por intención** | `Primary` · `Secondary` · `Tertiary` · `Destructive` |
| **Variantes por escala** | `sm` (32px h) · `md` (40px h) · `lg` (48px h) |
| **Composición** | `hasLeadingIcon` · `hasTrailingIcon` · `isFullWidth` · `isLoading` |
| **Estados** | Default · Hover · Focus · Active · Disabled · Loading |
| **Tokens clave** | `--color-action-primary` · `--radius-sm` · `--type-label` |
| **Notas** | Primary usa `--color-surface-hero-gradient`. CTA usa `--color-action-cta`. Nunca texto en uppercase salvo si el diseño lo requiere explícitamente. |

---

**IconButton**
`Actions / IconButton`

Acción que se representa solo con un ícono. Siempre necesita `aria-label`.

| Campo | Valor |
|-------|-------|
| **Figma** | `Actions / IconButton / {Size} / {State}` |
| **React** | `<IconButton size="md" aria-label="Favorito" />` |
| **Variantes por escala** | `sm` (28px) · `md` (40px) · `lg` (48px) |
| **Composición** | `isCircular` · `isGlass` (glassmorphism para overlay de imagen) |
| **Estados** | Default · Hover · Focus · Active · Disabled |
| **Tokens clave** | `--radius-full` · `--color-surface-icon-subtle` · `--shadow-brand-tinted` |
| **Notas** | Favorito sobre imagen de vehículo usa `isGlass` — white 40% + backdrop-blur 8px. |

---

#### 1.B — Display

---

**Badge**
`Display / Badge`

Indicador de estado o categoría. Siempre pequeño, siempre legible, siempre
con alto contraste.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / Badge / {Type} / {State}` |
| **React** | `<Badge type="live" />` |
| **Variantes por tipo** | `Live` · `Negotiable` · `Closed` · `Upcoming` · `New` · `Featured` |
| **Variantes por escala** | `sm` · `md` |
| **Estados** | Default · Disabled |
| **Tokens clave** | `--type-badge` · `--radius-full` · `--brand-en-vivo` · `--brand-negociable` |
| **Notas** | `Live` — fondo `--orange-500`, texto white. `Negotiable` — fondo `--cyan-400`. `Closed` — fondo `--gray-300`. Texto siempre uppercase, 10px Bold. |

---

**Icon**
`Display / Icon`

SVG inline. Nunca imágenes externas. Tamaño en múltiplos de 4.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / Icon / {Name}` |
| **React** | `<Icon name="heart" size={20} />` |
| **Variantes por escala** | `16` · `20` · `24` · `32` |
| **Estados** | Default |
| **Tokens clave** | `currentColor` — hereda color del padre |
| **Notas** | Siempre `aria-hidden="true"` si es decorativo. Si es funcional, `role="img"` + `aria-label`. |

---

**PriceDisplay**
`Display / PriceDisplay`

Muestra valores monetarios. Siempre `tabular-nums`. Siempre claro sobre qué
moneda y qué contexto (precio base, oferta actual, precio reserva).

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / PriceDisplay / {Context} / {Size}` |
| **React** | `<PriceDisplay context="hero" amount={15000} currency="USD" />` |
| **Variantes por contexto** | `Hero` · `Card` · `Compact` |
| **Estados** | Default · Loading |
| **Tokens clave** | `--type-hero-title` / `--type-card-featured` · tabular-nums |
| **Notas** | Nunca mostrar precio sin su label (PRECIO BASE, OFERTA ACTUAL). El label usa `--type-label`. El precio usa `--weight-extrabold`. |

---

**CountdownTimer**
`Display / CountdownTimer`

Timer en tiempo real. Dato crítico — contraste APCA Lc 90 obligatorio.
`tabular-nums` + `Roboto Mono` para que los dígitos no salten.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / CountdownTimer / {State}` |
| **React** | `<CountdownTimer endsAt={timestamp} />` |
| **Estados** | Default · Urgent (< 1 hora) · Expired |
| **Tokens clave** | `--font-mono` · `--type-hero-timer` · `--color-text-accent` |
| **Notas** | Estado `Urgent` activa `--color-text-accent` (cyan). `Expired` muestra "CERRADO" en `--gray-500`. |

---

**DataQualityBadge**
`Display / DataQualityBadge`

Indicador visual del nivel de completitud del expediente de un lote. Se muestra
como una fila de N puntos coloreados según el score de calidad del dato.
No es un Badge de estado — es un indicador de confiabilidad de la información.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / DataQualityBadge / {Level}` |
| **React** | `<DataQualityBadge level="high" />` |
| **Variantes por nivel** | `High` (3 dots verdes) · `Medium` (2 dots — verde + amber) · `Low` (1 dot — amber o red) |
| **Estados** | Default · Disabled |
| **Tokens clave** | `--color-status-success` (nuevo — verde) · `--color-status-warning` (`--amber-500`) · `--color-status-error` (`--red-500`) · `--space-1` (gap entre dots) |
| **Notas** | Cada dot: 8×8px, `--radius-full`. Siempre acompañado de label "Calidad de información" en `--type-label`. Token `--color-status-success` pendiente de agregar a tokens.css: `oklch(0.702 0.165 145.000)`. Sin borde — color define el estado. |

---

**Divider**
`Display / Divider`

Separador visual. Según la Regla No-Line, se usa solo cuando el cambio de
superficie no es suficiente para definir el límite.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / Divider / {Orientation}` |
| **React** | `<Divider orientation="horizontal" />` |
| **Variantes** | `Horizontal` · `Vertical` |
| **Estados** | Default |
| **Tokens clave** | `--color-border-ghost` · 1px height/width |

---

**Image**
`Display / Image`

Componente base de imagen. Maneja aspect ratio, estado de carga y fallback.
Base para `VehicleImageGallery` (L3).

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / Image / {AspectRatio} / {State}` |
| **React** | `<Image src={url} aspectRatio="16/9" alt="..." />` |
| **Variantes** | `Square` (1:1) · `Landscape` (16:9) · `Portrait` (3:4) |
| **Estados** | Default · Loading · Error (fallback) |
| **Tokens clave** | `--radius-sm` · `--gray-100` (fondo loading) |
| **Notas** | Aspect-ratios basados en serie PHI de Flow³ — los contenedores de imagen de Flow usan proporciones áureas (~1:1.618 landscape/portrait, 1:1 cuadrado, formatos compactos). Los tres aspect-ratios de Voyager (1:1, 16:9, 3:4) se alinean con las series α/β/γ de Flow. Garantiza consistencia visual entre Flow y Voyager sin replicar el sistema PHI completo. |

---

**Avatar**
`Display / Avatar`

Imagen de perfil del usuario o vendedor. Usado en `SellerCard`, `Header`, listas de postores.

| Campo | Valor |
|-------|-------|
| **Figma** | `Display / Avatar / {Size}` |
| **React** | `<Avatar src={url} size="md" fallback="JR" />` |
| **Variantes por escala** | `sm` (24px) · `md` (40px) · `lg` (56px) |
| **Estados** | Default · Loading · Fallback (iniciales) |
| **Tokens clave** | `--radius-full` · `--color-surface-section` |

---

**Slider**
`Data Input / Slider`

Control de rango para filtros de precio mínimo/máximo y año de vehículo.

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / Slider / {State}` |
| **React** | `<Slider min={0} max={100000} step={1000} />` |
| **Variantes** | `Single` · `Range` (dos handles) |
| **Estados** | Default · Active · Disabled |
| **Tokens clave** | `--color-action-primary` · `--radius-full` · `--color-surface-input` |
| **Notas** | Valores siempre `tabular-nums`. Label de valor visible mientras se arrastra. |

---

#### 1.C — Data Input

---

**TextField**
`Data Input / TextField`

Input de texto libre. El más frecuente en formularios de registro, login,
búsqueda.

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / TextField / {Variant} / {State}` |
| **React** | `<TextField label="Email" placeholder="..." />` |
| **Variantes** | `Default` · `WithLeadingIcon` · `WithTrailingAction` |
| **Estados** | Default · Focus · Error · Disabled · Read-only |
| **Tokens clave** | `--color-surface-input` · `--radius-sm` · `--type-body-sm` · `--color-border-ghost` |
| **Notas** | Sin border en reposo — fondo `--color-surface-input` define el límite. Border solo aparece en Focus (ghost) y Error (red-500). Label siempre visible — nunca ocultar el label con placeholder solo. |

---

**SelectField**
`Data Input / SelectField`

Selector de opciones. Para listas cortas (< 7 opciones) usar RadioGroup.

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / SelectField / {State}` |
| **React** | `<SelectField label="Categoría" options={[...]} />` |
| **Estados** | Default · Open · Focus · Error · Disabled |
| **Tokens clave** | `--color-surface-input` · `--radius-sm` |

---

**SearchInput**
`Data Input / SearchInput`

Input de búsqueda con ícono leading. Variante del TextField optimizada para
búsqueda.

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / SearchInput / {State}` |
| **React** | `<SearchInput placeholder="Buscar vehículo..." />` |
| **Estados** | Default · Focus · Active (con query) · Disabled |
| **Tokens clave** | `--color-surface-input` · `--color-text-on-dark-subtle` (placeholder sobre fondo oscuro) |

---

**Checkbox**
`Data Input / Checkbox`

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / Checkbox / {State}` |
| **React** | `<Checkbox label="Acepto términos" />` |
| **Estados** | Default · Hover · Focus · Checked · Disabled |
| **Tokens clave** | `--color-action-primary` · `--radius-sm` |

---

**RadioButton**
`Data Input / RadioButton`

| Campo | Valor |
|-------|-------|
| **Figma** | `Data Input / RadioButton / {State}` |
| **React** | `<RadioButton label="Oferta mínima" />` |
| **Estados** | Default · Hover · Focus · Selected · Disabled |
| **Tokens clave** | `--color-action-primary` |

---

### LAYER 2 — Componentes

Orquestan Elementos con micro-estado propio. Un Componente puede contener
múltiples Elementos pero no contiene Bloques de Negocio.

#### 2.A — Navigation

---

**TabBar**
`Navigation / TabBar`

Navegación horizontal por pestañas. Usado en páginas con múltiples vistas
del mismo contenido (ej: Detalles / Historial / Documentos).

| Campo | Valor |
|-------|-------|
| **Figma** | `Navigation / TabBar / {Variant}` |
| **React** | `<TabBar tabs={[...]} activeTab="detalles" />` |
| **Variantes** | `TextOnly` · `WithIcon` |
| **Estados por tab** | Default · Hover · Active · Disabled |
| **Tokens clave** | `--color-action-primary` · `--color-border-default` |
| **Notas** | Tab activo: underline `--color-action-primary` 2px. No usar TabBar para navegación global — eso es Sidebar/Header. |

---

**Breadcrumb**
`Navigation / Breadcrumb`

Ruta de navegación contextual. Máximo 4 niveles en desktop.

| Campo | Valor |
|-------|-------|
| **Figma** | `Navigation / Breadcrumb` |
| **React** | `<Breadcrumb items={[...]} />` |
| **Estados** | Default |
| **Tokens clave** | `--type-body-sm` · `--color-text-link` · `--color-text-muted` |

---

**Pagination**
`Navigation / Pagination`

Control de paginación para listados de vehículos y resultados de búsqueda.

| Campo | Valor |
|-------|-------|
| **Figma** | `Navigation / Pagination / {State}` |
| **React** | `<Pagination total={120} pageSize={12} currentPage={1} />` |
| **Estados** | Default · Hover · Active · Disabled |
| **Tokens clave** | `--color-action-primary` · `--radius-sm` |

---

#### 2.B — Feedback & Status

---

**Toast**
`Feedback / Toast`

Notificación efímera. Se muestra 4s y desaparece. No interrumpe el flujo.

| Campo | Valor |
|-------|-------|
| **Figma** | `Feedback / Toast / {Type}` |
| **React** | `<Toast type="success" message="Oferta registrada" />` |
| **Variantes por tipo** | `Success` · `Error` · `Warning` · `Info` |
| **Estados** | Entering · Visible · Exiting |
| **Tokens clave** | `--shadow-lg` · `--radius-sm` · `--z-50` · `--duration-standard` |

---

**Alert**
`Feedback / Alert`

Mensaje inline persistente. A diferencia del Toast, no desaparece
automáticamente y vive dentro del flujo de página.

| Campo | Valor |
|-------|-------|
| **Figma** | `Feedback / Alert / {Type}` |
| **React** | `<Alert type="warning" message="..." isDismissible />` |
| **Variantes por tipo** | `Success` · `Error` · `Warning` · `Info` |
| **Composición** | `isDismissible` · `hasIcon` |
| **Estados** | Default · Dismissed |
| **Tokens clave** | `--radius-sm` · `--color-border-ghost` |

---

**Skeleton**
`Feedback / Skeleton`

Placeholder de carga. Siempre reemplaza al componente real — nunca un
spinner genérico sobre un layout vacío.

| Campo | Valor |
|-------|-------|
| **Figma** | `Feedback / Skeleton / {Shape}` |
| **React** | `<Skeleton variant="card" />` |
| **Variantes** | `Card` · `Text` · `Hero` · `Avatar` · `TableRow` |
| **Estados** | Loading |
| **Tokens clave** | `--gray-100` · `--gray-300` — animación pulse |
| **Notas** | Usar Skeleton de `Card` cuando AuctionCard está cargando. Skeleton de `TableRow` para BidHistoryList. |

---

#### 2.C — Overlays

---

**Modal**
`Overlays / Modal`

Diálogo que requiere atención y acción del usuario antes de continuar.

| Campo | Valor |
|-------|-------|
| **Figma** | `Overlays / Modal / {Size}` |
| **React** | `<Modal isOpen size="md" onClose={...}>` |
| **Variantes por tamaño** | `sm` (400px) · `md` (560px) · `lg` (720px) |
| **Composición** | `hasHeader` · `hasFooter` · `isDismissible` |
| **Estados** | Opening · Visible · Closing |
| **Tokens clave** | `--shadow-modal` · `--radius-lg` · `--z-30` · `--duration-standard` · overlay `--color-surface-overlay` |
| **Notas** | Patrón Dot Notation: `Modal.Header`, `Modal.Body`, `Modal.Footer`. Focus trap obligatorio cuando está abierto. |

---

**Tooltip**
`Overlays / Tooltip`

Información contextual sobre un elemento. Aparece en hover/focus.
No contiene acciones — solo texto informativo.

| Campo | Valor |
|-------|-------|
| **Figma** | `Overlays / Tooltip / {Position}` |
| **React** | `<Tooltip content="Precio mínimo aceptado" position="top">` |
| **Variantes** | `Top` · `Bottom` · `Left` · `Right` |
| **Estados** | Hidden · Visible |
| **Tokens clave** | `--neutral-950` fondo · `--white` texto · `--radius-sm` · `--z-20` |

---

**Dropdown**
`Overlays / Dropdown`

Menú de opciones contextual anclado a un trigger.

| Campo | Valor |
|-------|-------|
| **Figma** | `Overlays / Dropdown / {State}` |
| **React** | `<Dropdown trigger={<Button />} items={[...]} />` |
| **Estados** | Closed · Open · ItemHover · ItemActive |
| **Tokens clave** | `--shadow-md` · `--radius-sm` · `--z-20` · `--color-surface-card` |

---

**Accordion**
`Navigation / Accordion`

Contenido expandible/colapsable. En VMC usado para especificaciones técnicas
detalladas del vehículo y preguntas frecuentes de subasta.

| Campo | Valor |
|-------|-------|
| **Figma** | `Navigation / Accordion / {State}` |
| **React** | `<Accordion items={[...]} defaultOpen={0} />` |
| **Composición** | `Accordion.Item`, `Accordion.Trigger`, `Accordion.Content` |
| **Estados** | Collapsed · Expanded · Disabled |
| **Tokens clave** | `--color-border-ghost` · `--duration-standard` · `--radius-sm` |
| **Notas** | En desktop puede coexistir con TabBar — usar Accordion para specs largas, TabBar para secciones principales. |
| **Referencia Flow³** | Flow tiene 11 tipos de Accordion: `Vehicular` · `Description` · `Opportunity` · `Location` · `Participation` · `Activation` · `Run O.D.C.` · `Asset Holder` · `Execution instructions` · `CyT` · `Más info`. Los tipos relevantes para VMC son: `Vehicular` (specs técnicas), `Description` (descripción del lote), `Location` (ubicación del vehículo), `CyT` (condiciones y términos). Los tipos de operación (Run O.D.C., Execution instructions, Activation) dependen de decisiones de Column 3. |

---

**UserWallet**
`User / Wallet`

Balance y crédito disponible del postor. Widget compacto usado en Header o panel lateral.

| Campo | Valor |
|-------|-------|
| **Figma** | `User / Wallet / {State}` |
| **React** | `<UserWallet balance={amount} currency="USD" />` |
| **Estados** | Default · Loading · Insufficient (balance bajo para puja activa) |
| **Tokens clave** | `--color-surface-card` · `--shadow-sm` · `--type-label` · tabular-nums |
| **Notas** | Monto siempre `tabular-nums` + `Roboto Mono`. Estado `Insufficient` activa `--color-status-warning`. |

---

#### 2.D — Content

---

**DocumentDownloadRow**
`Content / DocumentDownloadRow`

Fila de descarga de documento. Muestra ícono de tipo de archivo + label del
documento + botón de descarga. Se agrupa en bloques ("Descarga toda la
información", "Documentos requeridos") dentro de la página de detalle del lote.

| Campo | Valor |
|-------|-------|
| **Figma** | `Content / DocumentDownloadRow / {State}` |
| **React** | `<DocumentDownloadRow label="Términos de la oferta" href={url} />` |
| **Variantes** | `Default` · `WithFileType` (muestra extensión — PDF, XLS) |
| **Composición** | `hasIcon` (ícono de documento SVG inline) |
| **Estados** | Default · Hover · Loading (descargando) · Downloaded |
| **Tokens clave** | `--color-surface-section` (fondo) · `--color-action-primary` (ícono + link) · `--type-body-sm` · `--radius-sm` · `--shadow-none` |
| **Notas** | Fondo `--color-surface-section` — sin border (regla No-Line). Ícono SVG inline, tamaño 20px. Botón "Descargar" usa `Button variant=tertiary size=sm`. Estado `Loading` reemplaza botón con Skeleton. |

---

**HelpCenterBanner**
`Content / HelpCenterBanner`

Franja promocional persistente al final del contenido de página. Lleva al
usuario al centro de ayuda. Contiene avatar + heading + subtext + CTA.
Aparece en página de detalle de lote y otras páginas de alto tráfico.

| Campo | Valor |
|-------|-------|
| **Figma** | `Content / HelpCenterBanner` |
| **React** | `<HelpCenterBanner ctaHref="/ayuda" />` |
| **Variantes** | `Default` · `Compact` (sin subtext — para espacios reducidos) |
| **Estados** | Default |
| **Tokens clave** | `--color-surface-section` · `--type-help-heading` (18px ExtraBold) · `--type-body-sm` · `--color-text-body` · `--color-action-primary` |
| **Notas** | Avatar `size=lg` (56px). CTA usa `Button variant=secondary`. Fondo `--color-surface-section` — sin borde superior (cambio de superficie define límite). Heading: "Visita nuestro Centro de ayuda". Subtext: `--color-text-muted`. |

---

### LAYER 3 — Bloques de Negocio

Componentes acoplados al dominio transaccional de VMC Subastas. Usan
nomenclatura CEV con prefijo de contexto. Evolucionan rápido — se revisan
por sprint de producto.

---

**AuctionCard**
`Auction / Card`

El componente más crítico de VMC. Representa un lote de subasta. Toda la
información relevante para que el postor tome decisiones debe estar presente
o accesible desde aquí.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / Card / {Variant} / {State}` |
| **React** | `<AuctionCard variant="standard" lot={...} />` |
| **Variantes** | `Standard` · `Featured` · `Compact` |
| **Estados** | Default · Hover · Loading (Skeleton) |
| **Composición** | `AuctionCard.Image` · `AuctionCard.Header` · `AuctionCard.Specs` · `AuctionCard.Footer` |
| **Tokens clave** | `--color-surface-card` · `--shadow-brand-tinted` · `--radius-sm` · `--color-border-card-accent-auction` (4px bottom) |
| **Contiene** | `Badge` (Live/Negotiable/Closed) · `PriceDisplay` · `CountdownTimer` · `IconButton` (favorito) |
| **Notas** | `Featured` — card flotante con imagen prominente, precio hero 30px. `Standard` — grid de cards, título 11px uppercase. `Compact` — tabla densa, sin imagen. Signature finish: 4px border bottom según estado del lote. |

---

**VehicleSpecsRow**
`Vehicle / SpecsRow`

Fila de especificaciones técnicas del vehículo. Año, km, transmisión,
combustible. Datos tabulares — tabular-nums.

| Campo | Valor |
|-------|-------|
| **Figma** | `Vehicle / SpecsRow / {Density}` |
| **React** | `<VehicleSpecsRow specs={vehicle.specs} density="compact" />` |
| **Variantes** | `Default` (3-4 specs) · `Compact` (2 specs) · `Full` (tabla completa) |
| **Tokens clave** | `--type-label` · `--type-body-sm` · `--color-text-muted` |

---

**AuctionStatusBanner**
`Auction / StatusBanner`

Banner que comunica el estado del proceso de subasta. Siempre visible en
página de detalle de lote.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / StatusBanner / {Status}` |
| **React** | `<AuctionStatusBanner status="live" endsAt={timestamp} />` |
| **Variantes** | `Live` · `Upcoming` · `Closed` · `Awarded` |
| **Tokens clave** | `--brand-en-vivo` · `--color-status-live` · `--type-label` |
| **Notas** | `Live` incluye `CountdownTimer` + dot rojo animado. `Upcoming` incluye fecha de apertura. |

---

**BidForm**
`Bidder / Form`

Formulario de oferta. El componente de mayor criticidad funcional — errores
aquí tienen consecuencias económicas reales. Validación estricta.

| Campo | Valor |
|-------|-------|
| **Figma** | `Bidder / Form / {State}` |
| **React** | `<BidForm lotId={id} minimumBid={amount} />` |
| **Estados** | Default · Active (usuario ingresando oferta) · Submitting · Success · Error |
| **Contiene** | `TextField` (monto) · `Button` (Primary — REALIZAR OFERTA) · `Alert` (validación) |
| **Tokens clave** | `--color-action-accent` · `--font-mono` (monto tabular) · contraste APCA Lc 90 |
| **Notas** | El monto siempre en `Roboto Mono` + `tabular-nums`. Validación en tiempo real — no esperar submit. Confirmar oferta con Modal antes de ejecutar. |
| **Referencia Flow³** | Base de lógica: `Widgets / Multicomponent / CTA / Checkout` de Flow — 4 flujos: `Upgrade Offer` (subir oferta existente) · `Confirmation` (confirmar oferta nueva, 3v) · `Negotiation` (entrar en negociación) · `Agreed Value` (cerrar precio acordado). Voyager unifica estos 4 flujos en un solo `BidForm` con estados, en lugar de 4 widgets separados. El `Pad Value` de Flow (numérico touch) se reemplaza por `TextField` numérico validado en desktop. |

---

**FilterBar**
`Auction / FilterBar`

Barra de filtros para el listado de subastas. Desktop: fila horizontal.
Mobile: drawer expandible.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / FilterBar / {Viewport}` |
| **React** | `<FilterBar filters={[...]} onApply={...} />` |
| **Variantes** | `Desktop` (horizontal) · `Mobile` (drawer) |
| **Contiene** | `SelectField` · `Button` (Tertiary — limpiar) · `Button` (Primary — aplicar en mobile) |
| **Tokens clave** | `--color-surface-section` · `--spacing-nav-gap` |

---

**BidHistoryList**
`Auction / BidHistory`

Lista de ofertas de un lote. Actualización en tiempo real.
Datos tabulares — tabular-nums + Roboto Mono para montos.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / BidHistory / {State}` |
| **React** | `<BidHistoryList lotId={id} />` |
| **Estados** | Loading (Skeleton TableRow) · Populated · Empty |
| **Tokens clave** | `--font-mono` · tabular-nums · `--radius-none` (filas) |

---

**VehicleImageGallery**
`Vehicle / ImageGallery`

Galería de imágenes del vehículo. Desktop: imagen principal + thumbnails.
Mobile: swipe carousel.

| Campo | Valor |
|-------|-------|
| **Figma** | `Vehicle / ImageGallery / {Viewport}` |
| **React** | `<VehicleImageGallery images={vehicle.images} />` |
| **Variantes** | `Desktop` · `Mobile` |
| **Contiene** | `IconButton` (favorito con isGlass) · `Badge` (estado lote) |

---

**SellerCard**
`Vehicle / SellerCard`

Información del vendedor/consignante del lote.

| Campo | Valor |
|-------|-------|
| **Figma** | `Vehicle / SellerCard` |
| **React** | `<SellerCard seller={lot.seller} />` |
| **Tokens clave** | `--color-surface-card` · `--shadow-sm` · `--radius-sm` |

---

**AuctionSummaryWidget**
`Auction / SummaryWidget`

Widget compuesto que orquesta los bloques críticos de una subasta activa en un solo
panel. Equivalente al "Widgets / Multicomponent / Subasta" de Flow, reinterpretado
para desktop. Contiene toda la información necesaria para que el postor tome una
decisión de puja sin navegar.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / SummaryWidget / {State}` |
| **React** | `<AuctionSummaryWidget lot={lot} />` |
| **Estados** | Live · Upcoming · Closed |
| **Composición** | `AuctionSummaryWidget.Timer` · `AuctionSummaryWidget.Price` · `AuctionSummaryWidget.Status` · `AuctionSummaryWidget.BidAction` |
| **Contiene** | `CountdownTimer` · `PriceDisplay` · `AuctionStatusBanner` · `BidForm` |
| **Tokens clave** | `--color-surface-card` · `--shadow-brand-tinted` · `--radius-sm` |
| **Notas** | Estado `Live` muestra timer activo + BidForm habilitado. `Upcoming` muestra countdown al inicio + BidForm deshabilitado. `Closed` muestra resultado + BidForm oculto. |

---

**VehicleCard**
`Vehicle / Card`

Card compacta de vehículo optimizada para carruseles horizontales. Muestra
imagen + título + año/ciudad + precio base + favorito. No tiene contexto de
subasta (sin badge Live, sin countdown) — es una card de catálogo/listado.
Usada dentro de `AuctioneerSection`.

| Campo | Valor |
|-------|-------|
| **Figma** | `Vehicle / Card / {State}` |
| **React** | `<VehicleCard title="TOYOTA HILUX" price="17,999" currency="US$" />` |
| **Variantes** | `Default` · `Favorited` |
| **Composición** | `isFavorited` · `onClick` |
| **Estados** | Default · Hover · Loading (Skeleton) |
| **Tokens clave** | `--color-surface-card` · `--shadow-card` · `--radius-sm` · `--color-action-cta` (franja inferior 4px) · `--type-card-title` (12px Bold UC) · tabular-nums |
| **Notas** | Ancho fijo 163px — diseñado para carrusel, no para grid. Imagen 128px height fija, `object-cover`. Título 12px Bold uppercase. Precio en `--color-brand-live` (naranja). Franja `--color-action-cta` 4px en base — signature finish. Botón favorito: `IconButton isCircular size=sm`. Sin badge de estado de subasta — para eso usar `AuctionCard`. |

---

**AuctioneerSection**
`Auction / AuctioneerSection`

Sección que agrupa los vehículos de un rematador (operador) específico.
Encabezado con nombre del rematador + conteo de ofertas + link "IR AL PERFIL" +
carrusel horizontal de `VehicleCard` con fade gradient en el borde derecho.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / AuctioneerSection / {State}` |
| **React** | `<AuctioneerSection title="MAF PERÚ" offerCount={12} cards={[...]} />` |
| **Variantes** | `Default` · `WithProfileLink` |
| **Estados** | Default · Loading (Skeleton cards) |
| **Contiene** | `VehicleCard` (N tarjetas) · `Button variant=tertiary` (IR AL PERFIL) |
| **Tokens clave** | `--color-surface-section` · `--type-section-heading` (20px ExtraBold UC) · `--type-label` · `--color-action-primary` · `--space-5` (padding) · `--gap-card-grid` |
| **Notas** | Carrusel: `overflow-x: auto`, scroll suave, scrollbar oculta. Fade gradient derecho: `linear-gradient(to right, transparent, --color-surface-section)` — activo solo cuando hay scroll disponible. Título en uppercase. Conteo "N OFERTAS" en `--type-label` `--color-text-muted`. |

---

**AuctionActionBar**
`Auction / ActionBar`

Fila de CTAs secundarias del flujo de puja, ubicada debajo del BidForm
principal. Contiene acciones contextuales: activar precio reserva, guardar
oferta, consultar límites de participación. Se muestra solo cuando la
subasta está activa.

| Campo | Valor |
|-------|-------|
| **Figma** | `Auction / ActionBar / {State}` |
| **React** | `<AuctionActionBar lotId={id} hasReservePrice offerCount={3} />` |
| **Variantes** | `Full` (3 acciones) · `Compact` (2 acciones) · `Minimal` (solo guardar oferta) |
| **Composición** | `hasReservePrice` · `showParticipationLimits` |
| **Estados** | Default · Disabled (subasta cerrada) · Loading |
| **Tokens clave** | `--color-surface-input` (fondo de cada botón) · `--color-action-primary` · `--type-label` · `--radius-sm` · `--space-2` (gap entre botones) |
| **Notas** | Cada acción usa `Button variant=secondary size=sm`. Fondo `--color-surface-input` para diferenciar del BidForm sin usar border (regla No-Line). Oculto cuando `status=Closed` o `status=Upcoming`. "Guardar Oferta" activa Toast de confirmación. |

---

**SubascoinsPromoBanner**
`Market / SubascoinsPromoBanner`

Banner promocional del sistema de créditos Subascoins. Aparece en página de
detalle de lote entre el BidForm y las Ofertas Relacionadas. CTA directo a
la compra/canje de Subascoins.

| Campo | Valor |
|-------|-------|
| **Figma** | `Market / SubascoinsPromoBanner / {Variant}` |
| **React** | `<SubascoinsPromoBanner href="/subascoins" />` |
| **Variantes** | `Default` (ancho completo) · `Compact` (sin descripción) |
| **Estados** | Default · Hover |
| **Tokens clave** | `--color-action-cta` (`--orange-500`, fondo) · `--color-text-on-dark` (texto blanco) · `--type-label` · `--radius-sm` · `--duration-micro` |
| **Notas** | Fondo `--color-action-cta`. Texto y flecha en `--color-text-on-dark`. Hover: `filter: brightness(0.92)` — no cambiar color, solo oscurecer. Ícono de moneda SVG inline 20px. Flecha `›` al final en `--type-label`. `role=link` + `aria-label="Adquirir Subascoins"`. |

---

### LAYER 4 — Layouts

Marcos estructurales macro. Definen la arquitectura de página, no el
contenido. Evolucionan lento.

---

**PageLayout**
`Layout / Page`

El contenedor raíz de todas las páginas. Sidebar izquierdo + contenido
principal. Max-width 1024px.

| Campo | Valor |
|-------|-------|
| **Figma** | `Layout / Page / {Viewport}` |
| **React** | `<PageLayout sidebar={<Sidebar />}>` |
| **Variantes** | `WithSidebar` · `FullWidth` (páginas de login) |
| **Tokens clave** | `max-width: 1024px` · `margin: 0 auto` · `--color-surface-page` |

---

**Header**
`Layout / Header`

Barra de navegación superior. Logo + búsqueda + acciones de usuario.
Desktop: fija en top. Mobile: sticky.

| Campo | Valor |
|-------|-------|
| **Figma** | `Layout / Header / {Viewport}` |
| **React** | `<Header user={session.user} />` |
| **Variantes** | `Desktop` · `Mobile` |
| **Contiene** | `SearchInput` · `Button` (INGRESA) · `IconButton` (notificaciones) |
| **Tokens clave** | `--color-surface-header` · `--spacing-header-height` (64px) · `--z-40` |

---

**Sidebar**
`Layout / Sidebar`

Navegación lateral izquierda. Categorías de subasta, filtros principales,
links de sección.

| Campo | Valor |
|-------|-------|
| **Figma** | `Layout / Sidebar / {State}` |
| **React** | `<Sidebar activeSection="subastas" />` |
| **Estados** | Expanded · Collapsed · MobileDrawer (open/closed) |
| **Contiene** | Logo · `SideLink` (navegación) · `SocialLink` |
| **Tokens clave** | `--color-surface-sidebar` · `--z-40` · `--duration-standard` |

---

**Footer**
`Layout / Footer`

Pie de página con links legales, redes sociales, info de empresa.

| Campo | Valor |
|-------|-------|
| **Figma** | `Layout / Footer` |
| **React** | `<Footer />` |
| **Tokens clave** | `--color-surface-sidebar` · `--type-body-sm` · `--color-text-on-dark` |

---

**HeroSection**
`Layout / Hero`

Sección destacada de la homepage. Contiene el lote featured + CTA principal.

| Campo | Valor |
|-------|-------|
| **Figma** | `Layout / Hero / {State}` |
| **React** | `<HeroSection featuredLot={lot} />` |
| **Estados** | Default · Loading (Skeleton Hero) |
| **Contiene** | `VehicleImageGallery` · `AuctionCard (Featured)` · `AuctionStatusBanner` · `BidForm` |
| **Tokens clave** | `--color-surface-hero-gradient` · `--type-hero-title` · `--shadow-brand-tinted` |

---

## 5. Resumen del Catálogo

| Layer | # | Componentes |
|-------|---|-------------|
| L0 — Primitivas | 3 | Box · Stack · Grid |
| L1 — Elementos | 16 | Button · IconButton · Badge · **DataQualityBadge** · Icon · Image · Avatar · Slider · PriceDisplay · CountdownTimer · Divider · TextField · SelectField · SearchInput · Checkbox · RadioButton |
| L2 — Componentes | 13 | TabBar · Breadcrumb · Pagination · Toast · Alert · Skeleton · Modal · Tooltip · Dropdown · Accordion · UserWallet · **DocumentDownloadRow** · **HelpCenterBanner** |
| L3 — Bloques | 14 | AuctionCard · VehicleSpecsRow · AuctionStatusBanner · BidForm · FilterBar · BidHistoryList · VehicleImageGallery · SellerCard · AuctionSummaryWidget · **VehicleCard** · **AuctioneerSection** · **AuctionActionBar** · **SubascoinsPromoBanner** |
| L4 — Layouts | 5 | PageLayout · Header · Sidebar · Footer · HeroSection |
| **Total** | **51** | |

> v1.1 — 6 componentes agregados post-auditoría Flow: `Image` · `Avatar` · `Slider` (L1) · `Accordion` · `UserWallet` (L2) · `AuctionSummaryWidget` (L3)
> v1.2 — Enriquecimiento documental post gap analysis v2: referencia PHI en `Image`, 11 variantes Flow en `Accordion`, lógica Checkout Flow en `BidForm`. Catálogo sellado — 43 componentes. Column 3 (38 items) pendiente de revisión con equipo para posible expansión en v2.
> v1.3 — 7 componentes nuevos derivados de auditoría UI página de detalle de lote (vmcsubastas.com/oferta/61019): `DataQualityBadge` (L1) · `DocumentDownloadRow` · `HelpCenterBanner` (L2) · `VehicleCard` · `AuctioneerSection` · `AuctionActionBar` · `SubascoinsPromoBanner` (L3). Token pendiente: `--color-status-success` oklch(0.702 0.165 145.000).

---

## 6. Pace Layers — Secuencia de Construcción y Entrega

| Pace Layer | Componentes | Estabilidad | Entrega a dev |
|------------|-------------|------------|---------------|
| **Tokens + Fundaciones** | tokens.css completo | Alta — no cambia | Semana 1 |
| **Elementos core** | Button · IconButton · Badge · Icon · TextField · PriceDisplay · CountdownTimer | Alta — agnósticos al dominio | Semana 2–3 |
| **Componentes** | Modal · Toast · Alert · Skeleton · Dropdown · TabBar · Pagination | Media | Semana 4–5 |
| **Bloques de Negocio** | AuctionCard · BidForm · FilterBar · BidHistoryList · AuctionStatusBanner | Baja — evoluciona con producto | Semana 6–8 |
| **Layouts** | PageLayout · Header · Sidebar · Footer · HeroSection | Alta una vez estables | Semana 7–9 |

---

## 7. Gobernanza — Reglas para Agregar Componentes

Antes de construir un componente nuevo, responder:

1. **¿Ya existe?** — Verificar el catálogo. Si hay algo similar, extender
   con una variante antes de crear uno nuevo.
2. **¿En qué layer va?** — Aplicar Capas de Composición. Si no queda claro,
   es probablemente un Elemento que orquesta sin estado (L1) o un Componente
   con estado propio (L2).
3. **¿Cuál es su nombre CEV?** — Context + Element + Variant. Si no puedes
   nombrarlo en CEV, no está suficientemente definido.
4. **¿Qué variantes tiene?** — Por intención, por escala, por composición.
   No crear componentes con una sola variante sin estados.
5. **¿Qué estados maneja?** — Al menos Default. Interactivos: mínimo
   Default + Hover + Focus + Disabled.
6. **¿Qué tokens usa?** — Solo semánticos en el HTML/JSX. Nunca primitivos
   directamente.
7. **¿Tiene contrato JSON Schema?** — Requerido antes de marcar como
   entregable. Sin contrato, no es AI-readable.

---

## 8. Formato de Contrato JSON Schema (AI-Readiness)

Cada componente necesita un contrato en este formato para ser legible por AI:

```json
{
  "component": "Button",
  "layer": 1,
  "figma": "Actions / Button / {Variant} / {State}",
  "react": "Button",
  "file": "Button.tsx",
  "variants": {
    "variant": ["primary", "secondary", "tertiary", "destructive"],
    "size": ["sm", "md", "lg"]
  },
  "props": {
    "variant": { "type": "string", "required": true, "default": "primary" },
    "size": { "type": "string", "required": false, "default": "md" },
    "isLoading": { "type": "boolean", "required": false, "default": false },
    "isFullWidth": { "type": "boolean", "required": false, "default": false },
    "hasLeadingIcon": { "type": "boolean", "required": false, "default": false },
    "children": { "type": "ReactNode", "required": true },
    "onClick": { "type": "function", "required": false },
    "disabled": { "type": "boolean", "required": false, "default": false },
    "aria-label": { "type": "string", "required": false }
  },
  "states": ["default", "hover", "focus", "active", "disabled", "loading"],
  "tokens": [
    "--color-action-primary",
    "--color-surface-hero-gradient",
    "--radius-sm",
    "--type-label",
    "--duration-micro",
    "--easing-standard"
  ],
  "composition_rules": [
    "Primary usa gradient background — nunca color sólido",
    "Destructive reservado para acciones irreversibles — siempre confirmar con Modal",
    "isLoading reemplaza children con Spinner — mantener width del botón",
    "isFullWidth solo en mobile — desktop usa width auto"
  ],
  "accessibility": {
    "focus_visible": true,
    "aria_required": ["aria-label cuando no hay children de texto"],
    "keyboard": ["Enter y Space para activar"]
  }
}
```

Los contratos JSON Schema se guardan en `/contracts/{ComponentName}.json`.

---

## 9. Mapeo desde CompoBuilder (ruta anterior → Voyager)

Los componentes detectados por CompoBuilder se mapean a la nueva taxonomía:

| CompoBuilder | Layer Voyager | Nombre Voyager |
|-------------|---------------|----------------|
| Button/CTA | L1 — Elemento | `Button` variant=primary |
| Button/Login | L1 — Elemento | `Button` variant=cta |
| Button/Secondary | L1 — Elemento | `Button` variant=secondary |
| Button/IconOnly | L1 — Elemento | `IconButton` |
| Button/IconOnly/Small | L1 — Elemento | `IconButton` size=sm |
| Button/Tab/Text | L2 — Componente | `TabBar` variant=textOnly |
| Button/Tab/WithIcon | L2 — Componente | `TabBar` variant=withIcon |
| Badge/Status | L1 — Elemento | `Badge` |
| Links/TextArrow | L1 — Elemento | `Button` variant=tertiary hasTrailingIcon |
| Links/SideLink | L4 — Layout | parte de `Sidebar` |
| Links/SocialLink | L4 — Layout | parte de `Footer` |
| Cards/VehicleCard | L3 — Bloque | `AuctionCard` variant=standard |
| Sections/Hero | L4 — Layout | `HeroSection` |
| Sections/Header | L4 — Layout | `Header` |
| Sections/HelpCTA | L3 — Bloque | a evaluar en auditoría Flow |
| Footer/LinkItem | L4 — Layout | parte de `Footer` |
| Display/Price/Hero | L1 — Elemento | `PriceDisplay` context=hero |
| Display/Price/Card | L1 — Elemento | `PriceDisplay` context=card |
| Layout/Sidebar | L4 — Layout | `Sidebar` |
| Layout/Footer | L4 — Layout | `Footer` |

---

*Voyager v1.0 — Canon · La claridad de intención es la base de la precisión en la ejecución.*
