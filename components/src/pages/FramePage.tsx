import { useState, useEffect } from 'react'
import { COMPONENT_PREVIEWS } from './ComponentPreviews'
import { FRAME_ASSEMBLIES } from './FrameAssemblies'

// ─── tipos ────────────────────────────────────────────────────────────────────

export type FrameComponent = {
  name: string
  layer: 'L0' | 'L1' | 'L2' | 'L3' | 'L4'
  count?: number
}

type ComponentDetail = {
  description: string
  figma: string
  react: string
  variants: string[]
  states: string[]
  tokens: string[]
  notes?: string
  width?: string
  height?: string
}

// ─── catálogo de detalles por componente ──────────────────────────────────────

const COMPONENT_DETAILS: Record<string, ComponentDetail> = {
  'PageLayout': {
    description: 'Contenedor raíz de todas las páginas. Sidebar izquierdo + contenido principal. Max-width 1024px.',
    figma: 'Layout / Page / {Viewport}',
    react: '<PageLayout sidebar={<Sidebar />}>',
    variants: ['WithSidebar', 'FullWidth'],
    states: ['Default'],
    tokens: ['max-width: 1024px', '--color-surface-page', 'margin: 0 auto'],
    width: '1024px', height: 'variable',
  },
  'Header': {
    description: 'Barra de navegación superior. Logo + búsqueda + acciones de usuario.',
    figma: 'Layout / Header / {Viewport}',
    react: '<Header user={session.user} />',
    variants: ['Desktop', 'Mobile'],
    states: ['Default'],
    tokens: ['--color-surface-header', '--space-16 (64px)', '--z-40'],
    notes: 'Contiene SearchInput + Button (INGRESA) + IconButton (notificaciones).',
    width: '1024px', height: '64px',
  },
  'Sidebar': {
    description: 'Navegación lateral izquierda. Categorías de subasta, filtros, links de sección.',
    figma: 'Layout / Sidebar / {State}',
    react: '<Sidebar activeSection="hoy" />',
    variants: ['Expanded', 'Collapsed', 'MobileDrawer'],
    states: ['Expanded', 'Collapsed', 'Open (mobile)', 'Closed (mobile)'],
    tokens: ['--color-surface-sidebar', '--z-40', '--duration-standard'],
    notes: 'Ancho fijo 256px. Fondo --purple-800. Item activo: borde-l 3px --cyan-400.',
    width: '256px', height: '100%',
  },
  'Footer': {
    description: 'Pie de página con links legales, redes sociales e info de empresa.',
    figma: 'Layout / Footer',
    react: '<Footer />',
    variants: ['Default'],
    states: ['Default'],
    tokens: ['--color-surface-sidebar', '--type-body-sm', '--color-text-on-dark'],
    width: '1024px', height: '~276px',
  },
  'HeroSection': {
    description: 'Sección destacada de la homepage. Contiene el lote featured + CTA principal.',
    figma: 'Layout / Hero / {State}',
    react: '<HeroSection featuredLot={lot} />',
    variants: ['Default', 'Loading'],
    states: ['Default', 'Loading (Skeleton)'],
    tokens: ['--color-surface-hero-gradient', '--type-hero-title', '--shadow-brand-tinted'],
    notes: 'Contiene VehicleImageGallery + AuctionCard (Featured) + AuctionStatusBanner + BidForm.',
    width: '744px', height: '~180px',
  },
  'AuctionCard (Featured)': {
    description: 'Card de lote de subasta. Variante Featured: imagen prominente, precio hero 30px.',
    figma: 'Auction / Card / Featured / {State}',
    react: '<AuctionCard variant="featured" lot={lot} />',
    variants: ['Standard', 'Featured', 'Compact'],
    states: ['Default', 'Hover', 'Loading'],
    tokens: ['--color-surface-card', '--shadow-brand-tinted', '--radius-sm', '--color-border-card-accent-auction'],
    notes: '4px border bottom como signature finish. Featured: precio en --type-hero-title (30px ExtraBold).',
    width: '320px', height: 'variable',
  },
  'AuctioneerSection': {
    description: 'Sección por rematador con carrusel horizontal de VehicleCards. Header con nombre + contador + "IR AL PERFIL".',
    figma: 'Auction / AuctioneerSection / {State}',
    react: '<AuctioneerSection title="MAF PERÚ" offerCount={12} cards={[...]} />',
    variants: ['Default', 'WithProfileLink'],
    states: ['Default', 'Loading'],
    tokens: ['--color-surface-section', '--type-section-heading', '--color-action-primary', '--gap-card-grid'],
    notes: 'layout="carousel": scroll horizontal (homepage). layout="grid": 2-col grid (detalle, 276px).',
    width: '276–768px', height: 'variable',
  },
  'VehicleCard': {
    description: 'Card compacta de vehículo para carruseles. Imagen + título + año/ciudad + precio + favorito.',
    figma: 'Vehicle / Card / {State}',
    react: '<VehicleCard title="TOYOTA HILUX" price="17,999" currency="US$" />',
    variants: ['Default', 'Favorited'],
    states: ['Default', 'Hover', 'Loading'],
    tokens: ['--color-surface-card', '--shadow-card', '--radius-sm', '--color-action-cta (franja 4px)'],
    notes: 'En carousel: 163px fijo. En grid 2-col: flex (≈122px). Imagen aspect-[4/3]. Borde-b 3px naranja.',
    width: '122–163px', height: 'aspect-[4/3] + ~80px',
  },
  'SubascoinsPromoBanner': {
    description: 'Banner promocional del sistema de créditos Subascoins. CTA directo a compra/canje.',
    figma: 'Market / SubascoinsPromoBanner / {Variant}',
    react: '<SubascoinsPromoBanner href="/subascoins" />',
    variants: ['Default', 'Compact'],
    states: ['Default', 'Hover'],
    tokens: ['--color-action-cta', '--color-text-on-dark', '--type-label', '--radius-sm'],
    notes: 'Fondo --orange-500. Hover: brightness(0.92). role=link.',
    width: '744px', height: '56px',
  },
  'VehicleImageGallery': {
    description: 'Galería de imágenes del vehículo. Desktop: imagen principal + thumbnails.',
    figma: 'Vehicle / ImageGallery / {Viewport}',
    react: '<VehicleImageGallery images={vehicle.images} />',
    variants: ['Desktop', 'Mobile'],
    states: ['Default', 'Loading'],
    tokens: ['--radius-sm', '--shadow-sm'],
    notes: 'Contiene IconButton (favorito con isGlass) + Badge (estado lote).',
    width: '444px', height: '~333px',
  },
  'AuctionSummaryWidget': {
    description: 'Panel de subasta activa con toda la info para que el postor tome decisión de puja.',
    figma: 'Auction / SummaryWidget / {State}',
    react: '<AuctionSummaryWidget lot={lot} />',
    variants: ['Live', 'Upcoming', 'Closed'],
    states: ['Live', 'Upcoming', 'Closed'],
    tokens: ['--color-surface-card', '--shadow-brand-tinted', '--radius-sm'],
    notes: 'Live: timer + BidForm activo. Upcoming: countdown + BidForm deshabilitado. Closed: resultado + BidForm oculto.',
    width: '276px', height: 'variable',
  },
  'AuctionStatusBanner': {
    description: 'Banner que comunica el estado del proceso de subasta. Siempre visible en página de detalle.',
    figma: 'Auction / StatusBanner / {Status}',
    react: '<AuctionStatusBanner status="live" endsAt={timestamp} />',
    variants: ['Live', 'Upcoming', 'Closed', 'Awarded'],
    states: ['Live', 'Upcoming', 'Closed', 'Awarded'],
    tokens: ['--brand-en-vivo', '--color-status-live', '--type-label'],
    notes: 'Live incluye CountdownTimer + dot rojo animado.',
    width: '744px', height: '40px',
  },
  'BidForm': {
    description: 'Formulario de oferta. Componente de mayor criticidad — errores tienen consecuencias económicas.',
    figma: 'Bidder / Form / {State}',
    react: '<BidForm lotId={id} minimumBid={amount} />',
    variants: ['Default', 'Active', 'Submitting', 'Success', 'Error'],
    states: ['Default', 'Active', 'Submitting', 'Success', 'Error'],
    tokens: ['--color-action-accent', '--font-mono (monto)', 'APCA Lc 90 (contraste)'],
    notes: 'Monto en Roboto Mono + tabular-nums. Validación en tiempo real. Confirmar con Modal antes de ejecutar.',
    width: '300px', height: '~120px',
  },
  'VehicleSpecsRow': {
    description: 'Fila de especificaciones técnicas: año, km, transmisión, combustible. Datos tabulares.',
    figma: 'Vehicle / SpecsRow / {Density}',
    react: '<VehicleSpecsRow specs={vehicle.specs} density="compact" />',
    variants: ['Default (3-4 specs)', 'Compact (2 specs)', 'Full (tabla completa)'],
    states: ['Default'],
    tokens: ['--type-label', '--type-body-sm', '--color-text-muted'],
    width: '100%', height: '56px',
  },
  'AuctionActionBar': {
    description: 'Fila de CTAs secundarias del flujo de puja debajo del BidForm principal.',
    figma: 'Auction / ActionBar / {State}',
    react: '<AuctionActionBar lotId={id} hasReservePrice offerCount={3} />',
    variants: ['Full (3 acciones)', 'Compact (2 acciones)', 'Minimal (solo guardar)'],
    states: ['Default', 'Disabled', 'Loading'],
    tokens: ['--color-surface-input', '--color-action-primary', '--type-label', '--radius-sm'],
    notes: 'Oculto cuando status=Closed o Upcoming.',
    width: '300px', height: '40px',
  },
  'Accordion': {
    description: 'Contenido expandible/colapsable. Para specs técnicas detalladas y condiciones.',
    figma: 'Navigation / Accordion / {State}',
    react: '<Accordion items={[...]} defaultOpen={0} />',
    variants: ['Vehicular', 'Description', 'Location', 'CyT', 'Más info'],
    states: ['Collapsed', 'Expanded', 'Disabled'],
    tokens: ['--color-border-ghost', '--duration-standard', '--radius-sm'],
    notes: 'Patrón Dot Notation: Accordion.Item, Accordion.Trigger, Accordion.Content.',
    width: '100%', height: 'variable',
  },
  'HelpCenterBanner': {
    description: 'Franja promocional persistente al final del contenido. Lleva al centro de ayuda.',
    figma: 'Content / HelpCenterBanner',
    react: '<HelpCenterBanner ctaHref="/ayuda" />',
    variants: ['Default', 'Compact'],
    states: ['Default'],
    tokens: ['--color-surface-section', '--type-help-heading (18px ExtraBold)', '--color-action-primary'],
    notes: 'Avatar size=lg. CTA usa Button variant=secondary.',
    width: '744px', height: '~80px',
  },
  'DocumentDownloadRow': {
    description: 'Fila de descarga: ícono de tipo + label del documento + botón Descargar.',
    figma: 'Content / DocumentDownloadRow / {State}',
    react: '<DocumentDownloadRow label="Términos de la oferta" href={url} />',
    variants: ['Default', 'WithFileType'],
    states: ['Default', 'Hover', 'Loading', 'Downloaded'],
    tokens: ['--color-surface-section', '--color-action-primary', '--type-body-sm', '--radius-sm'],
    notes: 'Sin border — fondo --color-surface-section define límite (regla No-Line).',
    width: '100%', height: '48px',
  },
  'Button': {
    description: 'Elemento de acción primario. Toda acción ejecutable usa Button.',
    figma: 'Actions / Button / {Variant} / {State}',
    react: '<Button variant="primary" size="md" />',
    variants: ['Primary', 'Secondary', 'Tertiary', 'Destructive'],
    states: ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading'],
    tokens: ['--color-action-primary', '--color-surface-hero-gradient', '--radius-sm', '--type-label'],
    notes: 'Primary usa gradient. CTA usa --color-action-cta. Alturas: sm=32px, md=40px, lg=48px.',
    width: 'variable', height: '32–48px',
  },
  'Badge': {
    description: 'Indicador de estado o categoría. Siempre pequeño, legible, alto contraste.',
    figma: 'Display / Badge / {Type} / {State}',
    react: '<Badge type="live" />',
    variants: ['Live', 'Negotiable', 'Closed', 'Upcoming', 'New', 'Featured'],
    states: ['Default', 'Disabled'],
    tokens: ['--type-badge (10px Bold UC)', '--radius-full', '--brand-en-vivo', '--brand-negociable'],
    notes: 'Live: fondo --orange-500. Negotiable: fondo --cyan-400. Texto siempre uppercase.',
    width: 'variable', height: '20px',
  },
  'PriceDisplay': {
    description: 'Muestra valores monetarios. Siempre tabular-nums. Siempre con label de contexto.',
    figma: 'Display / PriceDisplay / {Context} / {Size}',
    react: '<PriceDisplay context="hero" amount={15000} currency="USD" />',
    variants: ['Hero (30px)', 'Card (16px)', 'Compact (12px)'],
    states: ['Default', 'Loading'],
    tokens: ['--type-hero-title / --type-card-featured', 'tabular-nums', '--weight-extrabold'],
    notes: 'Nunca mostrar precio sin label (PRECIO BASE, OFERTA ACTUAL).',
    width: 'variable', height: 'variable',
  },
  'CountdownTimer': {
    description: 'Timer en tiempo real. Dato crítico — contraste APCA Lc 90. tabular-nums + Roboto Mono.',
    figma: 'Display / CountdownTimer / {State}',
    react: '<CountdownTimer endsAt={timestamp} />',
    variants: ['Default', 'Urgent (< 1h)', 'Expired'],
    states: ['Default', 'Urgent', 'Expired'],
    tokens: ['--font-mono', '--type-hero-timer (30px ExtraBold)', '--color-text-accent'],
    notes: 'Urgent activa --cyan-400. Expired muestra "CERRADO" en --gray-500.',
    width: 'variable', height: 'variable',
  },
  'DataQualityBadge': {
    description: 'Indicador de completitud del expediente del lote. N puntos coloreados por score.',
    figma: 'Display / DataQualityBadge / {Level}',
    react: '<DataQualityBadge level="high" />',
    variants: ['High (3 dots verdes)', 'Medium (verde + amber)', 'Low (amber o red)'],
    states: ['Default', 'Disabled'],
    tokens: ['--color-status-success', '--color-status-warning', '--color-status-error'],
    notes: 'Cada dot: 8×8px, --radius-full. Siempre con label "Calidad de información".',
    width: 'variable', height: '24px',
  },
  'Image': {
    description: 'Componente base de imagen. Maneja aspect ratio, estado de carga y fallback.',
    figma: 'Display / Image / {AspectRatio} / {State}',
    react: '<Image src={url} aspectRatio="16/9" alt="..." />',
    variants: ['Square (1:1)', 'Landscape (16:9)', 'Portrait (3:4)'],
    states: ['Default', 'Loading', 'Error (fallback)'],
    tokens: ['--radius-sm', '--gray-100 (fondo loading)'],
    width: 'variable', height: 'aspect-ratio',
  },
  'Avatar': {
    description: 'Imagen de perfil del usuario o vendedor. Usado en SellerCard, Header, help banners.',
    figma: 'Display / Avatar / {Size}',
    react: '<Avatar src={url} size="md" fallback="JR" />',
    variants: ['sm (24px)', 'md (40px)', 'lg (56px)'],
    states: ['Default', 'Loading', 'Fallback (iniciales)'],
    tokens: ['--radius-full', '--color-surface-section'],
    width: '24–56px', height: '24–56px',
  },
}

export type FrameConfig = {
  id: string
  title: string
  subtitle: string
  figmaUrl?: string
  totalWidth: number
  sidebarWidth: number
  contentWidth: number
  components: FrameComponent[]
  layoutSlots: { label: string; color: string; textColor?: string }[]
}

// ─── tokens visuales por capa ─────────────────────────────────────────────────

const LAYER_COLOR: Record<string, string> = {
  L0: 'bg-[var(--gray-100)] text-[var(--gray-500)]',
  L1: 'bg-[oklch(0.761_0.130_197.000/0.15)] text-[var(--cyan-400)]',
  L2: 'bg-[oklch(0.724_0.154_55.200/0.15)] text-[var(--orange-500)]',
  L3: 'bg-[oklch(0.335_0.163_289.500/0.12)] text-[var(--purple-600)]',
  L4: 'bg-[oklch(0.242_0.138_286.500/0.15)] text-[var(--purple-800)]',
}

const LAYER_LABEL: Record<string, string> = {
  L0: 'Primitiva', L1: 'Elemento', L2: 'Componente', L3: 'Bloque', L4: 'Layout',
}

const LAYERS = ['L4', 'L3', 'L2', 'L1'] as const

// ─── sidebar izquierdo del frame ──────────────────────────────────────────────

function FrameSidebar({ config, activeComp, onSelect }: {
  config: FrameConfig
  activeComp: string | null
  onSelect: (name: string) => void
}) {
  return (
    <nav
      className="w-[220px] shrink-0 sticky top-0 h-screen overflow-y-auto flex flex-col bg-white border-r border-[var(--gray-100)]"
      aria-label={`Componentes de ${config.title}`}
    >
      {/* Cabecera */}
      <div className="px-4 py-5 border-b border-[var(--gray-100)]">
        <a
          href="#/"
          className="flex items-center gap-1.5 text-[11px] text-[var(--gray-400)] hover:text-[var(--purple-600)] no-underline mb-3 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Documentación
        </a>
        <div className="flex items-center gap-2 mb-0.5">
          <div className="size-6 rounded bg-[var(--cyan-400)] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7l2.5 4 2.5-4 2.5 4L12 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-[13px] text-[var(--purple-900)]">
            VMC <span className="text-[var(--cyan-400)]">Design</span>
          </span>
        </div>
        <p className="text-[10px] text-[var(--gray-400)] pl-8">Frame · {config.title}</p>
      </div>

      {/* Métricas compactas */}
      <div className="px-4 py-3 border-b border-[var(--gray-100)] flex gap-3">
        {[
          { label: 'Total', value: `${config.totalWidth}px` },
          { label: 'Sidebar', value: `${config.sidebarWidth}px` },
          { label: 'Contenido', value: `${config.contentWidth}px` },
        ].map(m => (
          <div key={m.label} className="flex flex-col">
            <span className="text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]">{m.label}</span>
            <span className="text-[11px] font-bold text-[var(--purple-900)] tabular-nums">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Lista de componentes por capa */}
      <div className="flex-1 overflow-y-auto py-3 px-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-2 mb-2">
          {config.components.length} componentes
        </p>
        {LAYERS.map(l => {
          const items = config.components.filter(c => c.layer === l)
          if (!items.length) return null
          return (
            <div key={l} className="mb-3">
              <div className="flex items-center gap-1.5 px-2 mb-1">
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${LAYER_COLOR[l]}`}>{l}</span>
                <span className="text-[9px] text-[var(--gray-400)]">{LAYER_LABEL[l]}</span>
              </div>
              {items.map(c => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => onSelect(c.name)}
                  className={[
                    'w-full flex items-center justify-between px-2 py-1.5 rounded-md text-left transition-all duration-100 border-0 cursor-pointer',
                    activeComp === c.name
                      ? 'bg-[var(--purple-800)] text-white'
                      : 'bg-transparent text-[var(--gray-600)] hover:bg-[var(--gray-50)] hover:text-[var(--gray-700)]',
                  ].join(' ')}
                >
                  <span className="text-[11px] font-medium">{c.name}</span>
                  {c.count && c.count > 1 && (
                    <span className={`text-[9px] font-bold tabular-nums ${activeComp === c.name ? 'text-white/60' : 'text-[var(--gray-400)]'}`}>
                      ×{c.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )
        })}
      </div>

      {/* Figma link */}
      {config.figmaUrl && (
        <div className="px-4 py-3 border-t border-[var(--gray-100)]">
          <a
            href={config.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--purple-600)] no-underline hover:underline"
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4.5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7.5M7.5 1H11m0 0v3.5M11 1 5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Ver en Figma
          </a>
        </div>
      )}
    </nav>
  )
}

// ─── panel de detalle de un componente ────────────────────────────────────────

function ComponentDetail({ name, layer, count }: FrameComponent) {
  return (
    <div className="bg-white rounded-xl border border-[var(--gray-100)] p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${LAYER_COLOR[layer]}`}>{layer}</span>
            <span className="text-[10px] text-[var(--gray-400)]">{LAYER_LABEL[layer]}</span>
          </div>
          <h2 className="text-[22px] font-bold text-[var(--purple-900)] m-0">{name}</h2>
          {count && count > 1 && (
            <p className="text-[12px] text-[var(--gray-400)] mt-1">
              Aparece <strong className="text-[var(--purple-600)]">{count}×</strong> en este frame
            </p>
          )}
        </div>
      </div>
      <div className="bg-[var(--gray-50)] rounded-lg p-4 text-[12px] text-[var(--gray-500)]">
        Selecciona un componente en el sidebar para ver su detalle. Ve a{' '}
        <a href="#/" className="text-[var(--purple-600)] no-underline hover:underline">Documentación</a>
        {' '}para ver la implementación completa de <strong>{name}</strong>.
      </div>
    </div>
  )
}

// ─── accordion de componentes ────────────────────────────────────────────────

function ComponentAccordion({ components }: { components: FrameComponent[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (name: string) => setOpenId(prev => prev === name ? null : name)

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-8 mb-3">
        Inventario completo — {components.length} componentes
      </p>
      <div className="border-y border-[var(--gray-100)] bg-white">
        {components.map((c, i) => {
          const detail = COMPONENT_DETAILS[c.name]
          const isOpen = openId === c.name
          const isLast = i === components.length - 1

          return (
            <div key={c.name} style={{ borderBottom: isLast ? 'none' : '1px solid var(--gray-100)' }}>
              {/* Trigger */}
              <button
                type="button"
                onClick={() => toggle(c.name)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left border-0 cursor-pointer transition-colors duration-150 bg-transparent hover:bg-[var(--gray-50)]"
                aria-expanded={isOpen}
              >
                {/* Chevron */}
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', color: 'var(--gray-400)' }}
                >
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                {/* Nombre */}
                <span className="flex-1 text-[13px] font-medium text-[var(--gray-700)]">{c.name}</span>

                {/* Dimensiones */}
                {(() => {
                  const d = COMPONENT_DETAILS[c.name]
                  return d?.width ? (
                    <span className="text-[10px] font-mono tabular-nums text-[var(--gray-400)] shrink-0 w-[130px] text-right">
                      {d.width} × {d.height ?? '—'}
                    </span>
                  ) : null
                })()}

                {/* Layer badge */}
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${LAYER_COLOR[c.layer]}`}>{c.layer}</span>
                <span className="text-[10px] text-[var(--gray-400)] w-[72px]">{LAYER_LABEL[c.layer]}</span>

                {/* Instancias */}
                <span className="text-[12px] font-bold tabular-nums text-[var(--gray-500)] w-6 text-right">
                  {c.count ?? 1}
                </span>
              </button>

              {/* Panel expandido */}
              {isOpen && (
                <div className="bg-[var(--gray-50)] border-t border-[var(--gray-100)]">
                  {detail ? (
                    <div className="flex flex-col gap-4">

                      {/* Preview — canvas 1024 px, sin bordes artificiales */}
                      {COMPONENT_PREVIEWS[c.name] && (
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-4 pt-4 mb-0">
                            Preview
                          </p>
                          <div style={{ background: 'white' }}>
                            {COMPONENT_PREVIEWS[c.name]}
                          </div>
                        </div>
                      )}

                      {/* Metadata — con padding lateral */}
                      <div className="px-4 pb-4 flex flex-col gap-4">

                      {/* Descripción + dimensiones */}
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[12px] text-[var(--gray-600)] leading-5 m-0 flex-1">{detail.description}</p>
                        {detail.width && (
                          <div className="flex flex-col items-end shrink-0 gap-1">
                            <div className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]">W</span>
                                <span className="text-[11px] font-mono font-bold text-[var(--purple-700)] tabular-nums">{detail.width}</span>
                              </div>
                              <div className="text-[var(--gray-300)] text-[10px] self-end mb-0.5">×</div>
                              <div className="flex flex-col items-center">
                                <span className="text-[8px] font-bold uppercase tracking-wider text-[var(--gray-400)]">H</span>
                                <span className="text-[11px] font-mono font-bold text-[var(--purple-700)] tabular-nums">{detail.height ?? '—'}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Variantes */}
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2">Variantes</p>
                          <div className="flex flex-wrap gap-1.5">
                            {detail.variants.map(v => (
                              <span key={v} className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-[var(--gray-200)] text-[var(--gray-600)]">
                                {v}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Estados */}
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2">Estados</p>
                          <div className="flex flex-wrap gap-1.5">
                            {detail.states.map(s => (
                              <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-[var(--gray-200)] text-[var(--gray-600)]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Figma + React */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-1">Figma</p>
                          <code className="text-[10px] text-[var(--purple-600)] bg-white px-2 py-1 rounded border border-[var(--gray-200)] block">
                            {detail.figma}
                          </code>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-1">React</p>
                          <code className="text-[10px] text-[var(--cyan-400)] bg-white px-2 py-1 rounded border border-[var(--gray-200)] block">
                            {detail.react}
                          </code>
                        </div>
                      </div>

                      {/* Tokens */}
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2">Tokens clave</p>
                        <div className="flex flex-wrap gap-1.5">
                          {detail.tokens.map(t => (
                            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[oklch(0.335_0.163_289.500/0.08)] text-[var(--purple-600)] border border-[oklch(0.335_0.163_289.500/0.15)]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Notas */}
                      {detail.notes && (
                        <div className="flex gap-2 bg-white rounded-lg border border-[var(--gray-200)] px-3 py-2.5">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
                            <circle cx="7" cy="7" r="6" stroke="var(--cyan-400)" strokeWidth="1.2"/>
                            <path d="M7 6v4M7 4.5v.5" stroke="var(--cyan-400)" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          <p className="text-[11px] text-[var(--gray-500)] leading-4 m-0">{detail.notes}</p>
                        </div>
                      )}

                      </div>{/* /metadata px-4 */}
                    </div>
                  ) : (
                    <div className="px-4 pb-4 pt-3">
                      <p className="text-[11px] text-[var(--gray-400)] m-0">
                        Detalle pendiente de documentar en VOYAGER.md.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── vista principal del frame ────────────────────────────────────────────────

function FrameOverview({ config }: { config: FrameConfig }) {
  const Assembly = FRAME_ASSEMBLIES[config.id]

  return (
    <div>

      {/* ── cabecera ─────────────────────────────────────────────────── */}
      <div className="px-8 pt-10 pb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--orange-500)] mb-1">
          Frame · {config.totalWidth}px
        </p>
        <h1 className="text-[26px] font-bold text-[var(--purple-900)] leading-tight mb-1">{config.title}</h1>
        <p className="text-[13px] text-[var(--gray-500)] leading-5 max-w-[560px] m-0">{config.subtitle}</p>

        {/* métricas compactas */}
        <div className="flex gap-6 mt-4">
          {[
            { label: 'Frame total',  value: `${config.totalWidth}px`  },
            { label: 'Sidebar',      value: `${config.sidebarWidth}px` },
            { label: 'Contenido',    value: `${config.contentWidth}px` },
            { label: 'Componentes',  value: `${config.components.length}` },
          ].map(m => (
            <div key={m.label}>
              <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-0.5">{m.label}</p>
              <p className="text-[16px] font-bold text-[var(--purple-900)] tabular-nums m-0">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── canvas del frame: 1024px centrado ────────────────────────── */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] px-8 mb-3">
          Frame completo — {config.totalWidth}px
        </p>
        {/* Canvas con fondo gris — frame centrado sin overflow artificial */}
        <div style={{ background: 'var(--gray-200)', padding: '24px 0', display: 'flex', justifyContent: 'center' }}>
          {Assembly
            ? <div style={{ width: `${config.totalWidth}px`, flexShrink: 0, boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}>
                <Assembly />
              </div>
            : <div style={{ width: `${config.totalWidth}px`, height: '400px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ fontSize: '12px', color: 'var(--gray-400)' }}>Ensamblado de frame no disponible</p>
              </div>
          }
        </div>
      </div>

      {/* ── inventario de componentes — full width, sin padding lateral ── */}
      <div className="py-8">
        <ComponentAccordion components={config.components} />
      </div>

    </div>
  )
}

// ─── página completa ──────────────────────────────────────────────────────────

export default function FramePage({ config }: { config: FrameConfig }) {
  const [activeComp, setActiveComp] = useState<string | null>(null)

  // sync con hash #/frames/homepage#ComponentName
  useEffect(() => { setActiveComp(null) }, [config.id])

  const selected = activeComp
    ? config.components.find(c => c.name === activeComp) ?? null
    : null

  // Mínimo: 220px nav + 1024px frame + 48px márgenes = 1292px
  const MIN_PAGE_WIDTH = 220 + config.totalWidth + 48

  return (
    <div className="flex bg-[var(--gray-50)]" style={{ minWidth: MIN_PAGE_WIDTH, minHeight: '100vh' }}>
      {/* Sidebar de navegación del DS — sticky */}
      <div className="sticky top-0 h-screen shrink-0 overflow-y-auto">
        <FrameSidebar config={config} activeComp={activeComp} onSelect={setActiveComp} />
      </div>
      {/* Contenido — crece para usar el espacio restante */}
      <main className="flex-1">
        {selected
          ? (
            <div className="py-10 px-8">
              <ComponentDetail {...selected} />
            </div>
          )
          : <FrameOverview config={config} />
        }
      </main>
    </div>
  )
}
