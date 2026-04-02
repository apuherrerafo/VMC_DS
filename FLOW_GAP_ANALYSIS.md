# Gap Analysis — Flow³ → Voyager
**Fecha:** 2026-03-31
**Fuente:** NodeScanner v4 — auditoría completa del repositorio Flow³ (SubasCars DS)
**Método:** Escaneo directo de 532 component sets via Figma plugin. Análisis página por página.
**Nota:** Análisis v2 — reemplaza la versión parcial basada en capturas de pantalla (~38 componentes).

---

## Páginas auditadas en Flow³

| Página | Sets | Descripción |
|--------|------|-------------|
| 🎭 Icons | ~90 | Icon library — 7-9 variantes de color cada uno |
| Taxonomía Flow3 | ~60 | PHI containers + Animation loader + intro/glosario |
| Basic / Control / Button | 6 | CTA buttons + Slider + Icon Navigation |
| Basic / Control / Icon | 3 | Navigation icons, social activity, activity counters |
| Basic / Inputs | 7 | Text Box, Dropdown Box, Checkbox, Pad Value, Keys |
| Basic / Outputs | 20 | Tags, Labels, Avatars, Image, Bubble, Auction Tracker |
| Main / Single / General | 8 | Header, Footer, Navigation Bar |
| Main / Single / Overlays | 4 | Attention (modal), Subastip (tooltip) |
| Main / Single / User | 4 | Group Avatar, ID Card, Wallet |
| Main / Single / Publication | 15 | List Items, Header, Image Holder, Cards (5 tipos), Accordion |
| Main / Multicomponent | 8 | Filmstrip, Pad, Console, Grid, Group List |
| Widgets | 30+ | Forms, CTAs, Lists, SubasChat, LogOut, Animation |
| ⚠ Uncategorized | 20+ | Countdown, Dropdown, SubasPass, Pay2Offer, Gana Ya, etc. |
| Sandbox / Landing | 5 | Placeholders, PHI duplicates |

---

## Columna 1 — Transfiere directo (adaptación visual)

Componentes con equivalente funcional claro y completo. Solo requieren reskin visual al estilo Voyager.

| Flow | Variantes | → | Voyager |
|------|-----------|---|---------|
| Basic / Control / Button / Clickable / CTA — Text | 18v: Primary/Secondary × L/M/S × Enabled/Disabled/Confirmed | → | `Button` |
| Basic / Control / Button / Clickable / CTA — Value | 10v: Primary/Secondary × estados | → | `Button` variant=value |
| Basic / Control / Button / Clickable / CTA — Features | 10v: Primary/Secondary × estados | → | `Button` variant=features |
| Basic / Control / Button / Clickable / Bidding | 4v: Enabled Default/Disabled/Hover/Pressed | → | `Button` variant=bidding |
| Basic / Inputs / Content field / Text Box | 18v (estados S/M/L) + 8v (Width 1/2) | → | `TextField` |
| Basic / Inputs / Content Field / Checkbox | 12v (S/M × estados) + Checkbox-Calification 4v | → | `Checkbox` |
| Basic / Outputs / Data Labels / Tags / Status | 7v: Pendiente/Publicado/Activo/Concretado/... | → | `Badge` |
| Basic / Outputs / Data Labels / Tags / Offering | 5v: Recuperado/Seminuevo/Facturable/Ejecutado/... | → | `Badge` variant=offering |
| Basic / Outputs / Data Labels / Tags / Date | 6v: Live/Start/Date Off/Today/... | → | `Badge` variant=date |
| Basic / Outputs / Data Labels / Tags / Indicadores | 8v: Nuevo/Grupo Flash/ODC activa/Comision 0/... | → | `Badge` variant=indicator |
| Basic / Outputs / Data Labels / Metrics | 4v: Vistas/P2P/# Ofertas × Light/Dark | → | `Badge` variant=metric |
| Main / Single / General / Header — Header-plataforma | 2v: User/Subastoper | → | `Header` |
| Main / Single / General / Footer | 2v: Mobile + Desktop | → | `Footer` |
| Main / Single / Overlays / Attention | 15v: múltiples contextos de modal | → | `Modal` |
| Main / Single / Overlays / Subastip | 3v: Recommendation/Participation/Reminder | → | `Tooltip` |
| Main / Single / User / ID Card | 3v: User Basic/SubasPass/Business | → | `SellerCard` |
| Main / Single / Publication / List Item — estados-grupo (Live/Pre-live/Cerrado) | 20v total | → | `BidHistoryList` ítem |
| Widgets / Multicomponent / List / Ranking | 3v: Default/RANKING+COUNTDOWN/Last Chance | → | `BidHistoryList` |
| Widgets / Multicomponent / List / Participations | 2v: Participaciones/Ofertas | → | `BidHistoryList` variant |

**Total: 19 componentes / grupos de componentes**

---

## Columna 2 — Transfiere con reinterpretación desktop

Existen en Flow pero requieren rediseño de densidad, spacing, o lógica de composición para desktop 1024px.

| Flow | Reinterpretación necesaria | Voyager |
|------|---------------------------|---------|
| Basic / Control / Button / Slider — 3v: Enabled/Unlocked/Disabled | Control deslizante touch → input de rango desktop con estados | `Slider` (L1) |
| Basic / Control / Icon / Navigation — Back/Forward/Expander/Collapser/Modal trigger/Exit | Iconos de nav sueltos → `IconButton` con surface propia + estados completos | `IconButton` (L1) |
| Basic / Outputs / Data Labels / Bullet Drops — Radio button + text — 4v: Off/On × M/S | Presente en Flow; necesita reskin Voyager y validación de tamaños para desktop | `RadioButton` (L1) |
| Basic / Outputs / Data Labels / Model Values — 12v: Base/Actual/Purchase Proposal/Don Justo × M/S | Montos de tasación → montos de subasta en tiempo real con formato de moneda | `PriceDisplay` (L1) |
| Basic / Outputs / User Avatars — Business (28v) + Avatar-user-basic (35v) + Avatar-Notification (50v) | Compactar paleta a sm/md/lg para uso en cards/headers desktop | `Avatar` (L1) |
| Basic / Outputs / Image — Images (6v) + Images-Desktop (2v) + Watermark | Sistema PHI de contenedores → `Image` base con aspect-ratio, fallback, loading | `Image` (L1) |
| Basic / Inputs / Content Field / Dropdown Box — 5v + ⚠ Dropdown — 56v | Dropdown mobile → SelectField desktop con lista flotante + estados completos | `SelectField` (L1) |
| ⚠ Countdown — 10v: Desktop/Mobile × Live/period +24/-24/Live/Closing | Ya tiene variante Desktop; adaptar al token system Voyager y layout denso | `CountdownTimer` (L1) |
| Basic / Outputs / Conversational / Auction Tracker — Snapshot/Flash/Base Value | Tracker inline de puja → componente compacto de estado de oferta en tiempo real | `AuctionStatusBanner` (L3) |
| Main / Single / General / Navigation Bar — HUB/SUBASCARS | Bottom nav mobile → sidebar/top nav desktop | `Sidebar` (L4) |
| Main / Single / User / Wallet — Subazone-Wallet | Vista dedicada mobile → widget de panel desktop | `UserWallet` (L2) |
| Main / Single / Publication / Header — Header group (7v: Group/Disponible/Concretado/Live/...) | Hero mobile de publicación → HeroSection multi-columna con specs y galería | `HeroSection` (L4) |
| Main / Single / Publication / Image Holder + Main / Multicomponent / Filmstrip / Gallery | Banner + filmstrip de miniaturas → galería con navegación y thumbstrip | `VehicleImageGallery` (L3) |
| Main / Single / Accordion — 11 tipos (Vehicular/Description/Opportunity/Location/Participation/Activation/Run O.D.C./Asset Holder/Execution instructions/CyT/Más info) | Acordeón mobile profundo → paneles expandibles desktop con density aumentada | `Accordion` (L2) |
| Main / Single / Publication / Card / Display — 4v: Live/Negotiable × Enabled/Disabled | Card mobile → `AuctionCard` Standard desktop con PriceDisplay/CountdownTimer integrados | `AuctionCard` (L3) |
| Main / Single / Publication / Card / Mini — Mini card Opportunity/Group | Mini card mobile → `AuctionCard` variant=Compact | `AuctionCard` variant=Compact |
| Widgets / Multicomponent / CTA / Checkout — Upgrade Offer/Confirmation(3v)/Negotiation/Agreed Value | CTAs full-width mobile de checkout/negociación → BidForm desktop estructurado | `BidForm` (L3) |
| Widgets / Multicomponent / Pad / Value — 2v: Checkout/Negociable | Pad numérico touch → TextField numérico validado dentro de BidForm | `BidForm` (input numérico) |
| Main / Multicomponent / Filmstrip / Cards — 10v (Certificado/Participaciones/Negociables/...) | Filmstrip horizontal mobile → carrusel/sección de cards desktop | parte de layouts L4 |

**Total: 19 componentes / grupos**

---

## Columna 3 — En Flow, necesidad VMC por confirmar

> ⚠️ **PENDIENTE DE REVISIÓN HUMANA** — Esta columna fue generada por análisis funcional,
> NO por conocimiento del roadmap VMC. Julio y Mafer deben confirmar cada ítem.
> Decidir: **Incluir en Voyager** · **Excluir** · **Posponer a v2**

### 3A — Componentes sociales y de comunidad

Estos asumen que VMC no tiene funcionalidades de comunidad (SubasChat, grupos, P2P):

| Flow | Razón del supuesto | Decisión |
|------|-------------------|----------|
| Basic / Control / Icon / Social / Activity — Like (4v) | VMC no tiene "likes" en subastas | ☐ Confirmar |
| Basic / Control / Icon / Social / Activity Counter — Like/Share (8v cada uno) | VMC no tiene contadores sociales en listings | ☐ Confirmar |
| Main / Single / User / Group avatar (7v) + SubasChat-Avatars (22v) | VMC no tiene grupos de usuarios ni SubasChat | ☐ Confirmar |
| Main / Multicomponent / Console + Console Bottom | Consola de SubasChat — feature específica de SubasCars | ☐ Confirmar |
| Widgets / Multicomponent / SubasChat (2v: SubasChat/P&R) | Chat en tiempo real de subasta — ¿VMC lo necesita? | ☐ Confirmar |
| Main / Single / Publication / List Item — estados-grupo-q&a (17v) | Q&A de grupo — SubasCars specific | ☐ Confirmar |

### 3B — Features de acceso y monetización de SubasCars

Tokens, passes y features pagadas que pueden no existir en VMC:

| Flow | Razón del supuesto | Decisión |
|------|-------------------|----------|
| ⚠ SubasPass Participation (5v) + SubasPass Card + SubasPass pack | SubasPass es un producto de SubasCars — ¿VMC tiene equivalente? | ☐ Confirmar |
| ⚠ Pay2Offer (5v) | Feature paga de SubasCars — ¿VMC tiene este modelo? | ☐ Confirmar |
| ⚠ Gana Ya (3v) | Feature paga de SubasCars — ¿VMC tiene equivalente? | ☐ Confirmar |
| ⚠ Token pack | SubasTokens no existen en VMC | ☐ Confirmar |
| Widgets / Form / Operations / Billing — Facturación de Subastokens (4v) | Billing de tokens — específico SubasCars | ☐ Confirmar |
| Basic / Outputs / Data Labels / Tags / Feature — Pay2Play/CheckIn/Negociable | Tags de features pagas — ¿VMC usa "Negociable"? | ☐ Confirmar |
| Widgets / CTA / Access / Participation — CheckIn/P2P (4v cada uno) | CheckIn y P2P son features de SubasCars | ☐ Confirmar |
| Widgets / CTA / Access / Group Start — Inicio de grupo (2v) | Inicio de grupos — SubasCars specific | ☐ Confirmar |

### 3C — Features de auth y onboarding

| Flow | Razón del supuesto | Decisión |
|------|-------------------|----------|
| Widgets / Form / Registration — User Validation + Registration_Sign In | Auth de VMC es delegada — ¿este form vive en el DS? | ☐ Confirmar |
| ⚠ Sign In Invitation (3v: Marketplace/Detalle/Landing) | Sign in prompts — ¿VMC los necesita o es auth completo? | ☐ Confirmar |
| ⚠ Primeros pasos | Onboarding step — ¿VMC tiene onboarding propio? | ☐ Confirmar |
| ⚠ Referido — Cod referido | Sistema de referidos — ¿VMC lo tiene? | ☐ Confirmar |
| Basic / Control / Icon / Social / Authorized (en screenshots) | Auth social (Google/Apple/Facebook) — ¿VMC lo usa? | ☐ Confirmar |

### 3D — Features de creación/operación de subastas (seller-side)

| Flow | Razón del supuesto | Decisión |
|------|-------------------|----------|
| ⚠ Form. Creación de la O.D.C. (6v: Step 1-6) | Formulario de creación de subasta — ¿VMC tiene flujo de creación? | ☐ Confirmar |
| ⚠ Recibe ofertas (2v: Con/Sin visita) | Vista del vendedor recibiendo ofertas — ¿VMC tiene seller side? | ☐ Confirmar |
| ⚠ Visita (2v: Con/Sin visita) | Feature de visita pre-subasta — ¿VMC la tiene? | ☐ Confirmar |
| ⚠ Diagnóstico — Vehiculo certificado | Diagnóstico del vehículo — ¿VMC muestra esto? | ☐ Confirmar |
| Widgets / CTA / Execution — Ejecucion ODC (4v) | Ejecución de O.D.C. — ¿VMC tiene este flujo? | ☐ Confirmar |

### 3E — Misceláneos

| Flow | Razón del supuesto | Decisión |
|------|-------------------|----------|
| Basic / Inputs / Keys (5v: numeric pad) | VMC usa TextField numérico en BidForm, no teclado custom | ☐ Confirmar |
| Basic / Inputs / Content Field / Pad Value (Multi/Single) | Pad de valor — cubierto por BidForm input | ☐ Confirmar |
| Widgets / Single / Informative — Execution ODC/Congratulations/Expired | Empty states de SubasCars — VMC tendrá los suyos | ☐ Confirmar |
| Widgets / Multicomponent / Log Out (1v) | LogOut es ítem de menú en VMC, no componente autónomo | ☐ Confirmar |
| ⚠ Menu (2v: Subastoper/User) | ¿El menú de VMC vive como componente propio o en Sidebar? | ☐ Confirmar |
| SubasBlog Card (13v) | Blog de SubasCars — ¿VMC tiene blog/news section? | ☐ Confirmar |
| ⚠ Notifications (1v) | Panel de notificaciones — ¿componente propio en VMC? | ☐ Confirmar |
| Basic / Outputs / Data Labels / Tags / Quick Actions (3v S/M/L + Verification code) | Quick actions tags — ¿VMC los usa? | ☐ Confirmar |

### 3F — Sistema de animaciones

Flow tiene un sistema de animaciones extenso. Casi seguro no migra como está:

| Flow | Supuesto | Decisión |
|------|---------|----------|
| Widgets / Animation / Progress / Counter (START/CLOSURE/ANIMATION 5 STEPS) | Animaciones de countdown start/close — específicas SubasCars | ☐ Confirmar si VMC necesita animaciones equivalentes |
| Widgets / Animation / Progress / Context (Access/Negotiation) | Animaciones de transición de estado — UI motion, ¿VMC las necesita? | ☐ Confirmar |
| Widgets / Animation / Feedback (Attention/Success animations) | Microinteracciones de feedback — ¿VMC usa motion o solo Toast/Alert? | ☐ Confirmar |
| Animación-loader (8v: Large Loader/percentages) | Loading state animado — Voyager lo cubre con `Skeleton` | ☐ Confirmar |

**Total pendiente de confirmación: ~38 items en 6 subcategorías**

---

## Columna 4 — En Voyager, no en Flow (construir desde cero)

Componentes que VMC necesita y Flow genuinamente no tiene. Trabajo neto nuevo.

**L0 — Primitivas**
- `Box` · `Stack` · `Grid` — Flow no tiene sistema de primitivas de layout explícito. La PHI container series son proporciones de imagen, no primitivas de composición.

**L1 — Elementos nuevos**
- `SearchInput` — Flow no tiene componente de búsqueda. VMC necesita búsqueda de vehículos/subastas con estados de sugerencia y resultados.
- `Divider` — No presente en Flow. Verificar que esté documentado en Voyager con variantes horizontal/vertical y opacidades.

**L2 — Componentes nuevos**
- `TabBar` — Flow usa navegación de pantalla completa (Navigation Bar bottom). Desktop necesita tabs internos de página (Detalles / Historial / Docs). Sin equivalente en Flow.
- `Breadcrumb` — Patrón exclusivamente desktop para navegación jerárquica. Flow no lo necesita (mobile one-level nav).
- `Pagination` — Flow usa filmstrip horizontal + scroll. Desktop denso usa paginación de listados de subastas. Sin equivalente.
- `Toast` — Flow solo tiene Modal (Attention) bloqueante. VMC necesita feedback silencioso no-bloqueante: "puja registrada", "favorito guardado". Sin equivalente.
- `Alert` — Banner persistente para estados de subasta (cerrada, suspendida, retirada). Flow tiene Subastip (tooltip) y Attention (modal) — ninguno es banner persistente in-page.
- `Skeleton` — Loading states de AuctionCard, Gallery, BidHistory. Crítico para UX de datos en tiempo real. Flow tiene Animación-loader (spinner), no skeleton de contenido.

**L3 — Bloques nuevos**
- `FilterBar` — Filtros horizontales persistentes para listados de subastas (marca/modelo/año/precio). Flow filtra desde modal full-screen. Sin equivalente desktop.
- `VehicleSpecsRow` — Fila estructurada de specs técnicas (marca/modelo/año/km/transmisión). Flow tiene Metrics (Vistas/P2P/#Ofertas) que es analítica, no specs. Son conceptualmente distintos.
- `SellerCard` — Card del vendedor/consignador con historial y contacto. Flow tiene ID Card (perfil del usuario propio — buyer perspective), no una card de vendor para buyers.

**L4 — Layouts nuevos**
- `PageLayout` — Template maestro de página con slots para Header/Sidebar/Content/Footer. Flow no lo necesita (cada pantalla mobile es su propio frame).

> **Nota:** `CountdownTimer`, `PriceDisplay` y `RadioButton` fueron listados como "construir desde cero" en la versión anterior de este análisis. El NodeScanner confirma que EXISTEN en Flow (como "Countdown" 10v, "Model Values" 12v, y "Radio button + text" 4v). Se movieron a Columna 2.

**Total: 12 componentes**

---

## Columna 5 — En Flow, no estaba en VOYAGER.md v1.0 (agregar al catálogo)

Componentes de Flow que VMC también necesita pero faltaban en la taxonomía inicial.

| Flow | → | Agregar a Voyager como |
|------|---|----------------------|
| Basic / Control / Button / Slider — 3v | → | `Slider` (L1 — filtros de precio/año en FilterBar) |
| Basic / Outputs / Image — Images + Images-Desktop + Watermark | → | `Image` (L1 — base con aspect-ratio, fallback, loading state) |
| Basic / Outputs / User Avatars — Business/User-basic/Notification | → | `Avatar` (L1 — sm/md/lg, usado en SellerCard/Header) |
| Main / Single / Accordion (11 tipos) | → | `Accordion` (L2 — specs técnicas expandibles, documentar variantes) |
| Main / Single / User / Wallet — Subazone-Wallet | → | `UserWallet` (L2 — balance/crédito del postor) |
| ⚠ Countdown — 10v Desktop+Mobile | → | `CountdownTimer` (L1 — corazón de la subasta, tiene variante desktop) |
| Basic / Outputs / Data Labels / Model Values — 12v | → | `PriceDisplay` (L1 — montos de subasta en tiempo real) |
| Basic / Outputs / Data Labels / Bullet Drops — Radio button + text 4v | → | `RadioButton` (L1 — opciones de puja/tipo) |
| Widgets / Multicomponent / CTA / Checkout (Confirmation/Upgrade/Negotiation/Agreed Value) | → | `BidForm` (L3 — completar con lógica checkout de Flow) |
| Basic / Outputs / Conversational / Auction Tracker — Snapshot/Flash/Base Value | → | `AuctionStatusBanner` (L3 — estado de oferta en tiempo real) |

**Total: 10 componentes a agregar o completar en VOYAGER.md**

> **Nota:** VOYAGER.md ya fue actualizado con Image, Avatar, Slider (L1), Accordion, UserWallet (L2), AuctionSummaryWidget (L3) en v1.1. Pendiente agregar: CountdownTimer como L1 (no L2 como se tenía), PriceDisplay como L1, RadioButton como L1, completar BidForm con lógica de Flow, AuctionStatusBanner con referencia a Auction Tracker.

---

## Sistema PHI de contenedores de imagen

Flow³ tiene un sistema extenso de contenedores de imagen basado en proporciones áureas (PHI). Los contenedores aparecen en múltiples páginas (Taxonomía Flow3, Footer, Landing Preview, ELEMENTOS):

- **Serie α** — Rectangulares landscape/portrait (proporciones ~1:1.6)
- **Serie β** — Cuadrados
- **Serie γ** — Rectangulares compactos
- **Serie δ** — Cuadrados pequeños
- **Serie ε** — Micro (5×5)

Esto no es un componente para migrar individualmente — es el **sistema de proporciones de imagen** de Flow. 

**Impacto en Voyager:** El componente `Image` (L1) debe documentar un set de aspect-ratios estándar alineado con las proporciones PHI que Flow usa. Esto da consistencia visual entre Flow y Voyager.

---

## Sistema de iconos

Flow tiene ~90 iconos con 7-9 variantes de color cada uno. No se migran como componentes de DS — son la icon library de SubasCars.

**Impacto en Voyager:** VMC necesita su propia icon library. Los iconos de dominio de subasta de Flow (Highest bidder, Trophy, Live, Flash, Plate, Engine displacement, Transmission, Traction, etc.) son referencia para el set de iconos que Voyager necesita.

---

## Resumen Ejecutivo

| Métrica | N |
|---------|---|
| Total component sets escaneados en Flow³ | 532 |
| Component sets funcionales auditados (sin PHI duplicates, icons, sandbox) | ~85 grupos |
| Transfieren directo — Col. 1 | 19 |
| Requieren reinterpretación desktop — Col. 2 | 19 |
| Pendiente revisión humana — Col. 3 | ~38 items |
| Construir desde cero — solo Voyager — Col. 4 | 12 |
| Agregar/completar en VOYAGER.md — Col. 5 | 10 |
| **Scope confirmado de construcción — Task C** | **~50 componentes** |

**Correcciones vs. análisis v1 (basado en ~38 componentes de capturas):**
- `CountdownTimer` → EXISTE en Flow como "Countdown" (10v, tiene variante Desktop). Movido de Col.4 a Col.2.
- `PriceDisplay` → EXISTE en Flow como "Model Values" (12v). Movido de Col.4 a Col.2.
- `RadioButton` → EXISTE en Flow como "Radio button + text" (4v). Movido de Col.4 a Col.2.
- `Accordion` → MUCHO más rico de lo estimado: 11 tipos distintos en Flow. Scope de construcción mayor.
- `BidForm` → Tiene base más sólida en Flow: Checkout CTA widgets (Confirmation/Upgrade/Negotiation/Agreed Value) son el equivalente.
- Column 3 expandida: 38 items en 6 subcategorías (antes 6 items genéricos).

**Desglose real del scope de construcción:**
- 19 adaptar (reskin visual + tokens Voyager)
- 19 rediseñar (misma lógica, forma desktop)
- 12 construir neto (sin base en Flow)
- 10 completar/formalizar desde Flow

---

## Riesgo principal

Los componentes críticos de la experiencia transaccional tienen ahora base en Flow:
- `CountdownTimer` (Countdown 10v) — existe, necesita reskin desktop
- `PriceDisplay` (Model Values 12v) — existe, necesita adaptación a dominio subasta live
- `BidForm` (Checkout CTAs) — existe, necesita estructuración desktop

El riesgo se desplaza a los 12 componentes de Col.4 sin base:
`SearchInput`, `Toast`, `Alert`, `Skeleton`, `FilterBar`, `VehicleSpecsRow`, `SellerCard` son trabajo neto.
`TabBar`, `Breadcrumb`, `Pagination` son patrones desktop puros.

**Secuencia recomendada (actualizada):** Estabilizar tokens → `Badge`/`Button`/`TextField` → `CountdownTimer`/`PriceDisplay` → `AuctionCard` → `BidForm` → layouts.

---

## Impacto en VOYAGER.md

Actualizaciones pendientes de aplicar al catálogo (v1.1 → v1.2):

1. **Mover `CountdownTimer` a L1** — es un elemento base, no L2. Flow confirma.
2. **Mover `PriceDisplay` a L1** — idem. Model Values existe en Flow como elemento.
3. **Confirmar `RadioButton` como L1** — ya está documentado, confirmar scope de variantes con Flow como referencia.
4. **Ampliar scope de `Accordion`** — documentar las 11 variantes funcionales de Flow como referencia para los tipos que VMC necesita.
5. **Completar `BidForm`** — documentar que los Checkout CTAs de Flow son la base de lógica para el componente.
6. **Agregar `AuctionStatusBanner`** — referencia: Auction Tracker (Snapshot/Flash/Base Value) de Flow.
7. **Documentar sistema de aspect-ratios** — basado en serie PHI de Flow como referencia visual.

**Total componentes Voyager actualizado: 39 → mantener 39 (ajustar niveles y scope de los existentes)**
