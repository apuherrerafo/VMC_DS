import { memo, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react'
import { ACCENT_BORDER, ACCENT_BORDER_WIDTH } from './constants'
import * as S from './styles'
import type { AuctionCardUpgradeProps } from './types'

// ── HeartIcon ─────────────────────────────────────────────────────────────────
// Figma node 268:1621 — ícono outline cuando unfilled, sólido cuando filled

interface HeartIconProps {
  filled: boolean
}

function HeartIcon({ filled }: HeartIconProps) {
  const fill   = filled ? 'var(--color-text-on-dark)' : 'none'
  const stroke = filled ? 'var(--color-text-on-dark)' : 'var(--color-action-primary)'

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── ImagePlaceholder ──────────────────────────────────────────────────────────
// Gradient brand cuando no hay imagen disponible

function ImagePlaceholder() {
  return (
    <div style={S.imagePlaceholder}>
      {/* fill y stroke usan tokens — nunca valores directos (CLAUDE.md) */}
      <svg width="56" height="28" viewBox="0 0 72 36" fill="var(--color-text-on-dark-subtle)" aria-hidden="true">
        <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
        <circle cx="18" cy="28" r="4" fill="none" stroke="var(--color-text-on-dark-subtle)" strokeWidth="2" />
        <circle cx="54" cy="28" r="4" fill="none" stroke="var(--color-text-on-dark-subtle)" strokeWidth="2" />
      </svg>
    </div>
  )
}

// ── AuctionCardSkeleton ───────────────────────────────────────────────────────
// Estado de carga — mismas dimensiones que la card real

export function AuctionCardUpgradeSkeleton() {
  return (
    <div style={S.skeletonCard}>
      <div style={S.skeletonImage} />
      <div style={S.contentWrapper}>
        {/* Placeholder Título y Subtítulo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
          <div style={S.skeletonLine('100px', 'var(--line-height-2xs)')} />
          <div style={S.skeletonLine('72px', 'var(--line-height-2xs)')} />
        </div>
        
        {/* Placeholder Precio - Posición absoluta bottom exactamente igual a la card */}
        <div style={S.priceBlock}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <div style={S.skeletonLine('56px', 'var(--line-height-2xs)')} />
            <div style={S.skeletonLine('72px', 'var(--line-height-tight)')} />
          </div>
        </div>

        {/* Placeholder Corazón - Posición absoluta igual a la card */}
        <div style={{ ...S.heartButtonBase, background: 'var(--color-surface-section)' }} />
      </div>
    </div>
  )
}

// ── AuctionCardUpgrade ────────────────────────────────────────────────────────
// Figma node 268:1601 — 160×235px pixel-perfect
// Variante upgrade del AuctionCard — sin countdown, badge como franja inferior

export function AuctionCardUpgrade({
  lot,
  isLoading = false,
  onFavorite,
  onClick,
  className = '',
}: AuctionCardUpgradeProps) {

  if (isLoading) return <AuctionCardUpgradeSkeleton />

  // ── Estilos dinámicos ───────────────────────────────────────────────────────

  const isClosed = lot.badge === 'closed'

  const cardStyle: CSSProperties = {
    ...S.cardBase,
    ...(onClick && S.cardClickable),
    borderBottom: `${ACCENT_BORDER_WIDTH} solid ${ACCENT_BORDER[lot.badge]}`,
  }

  const heartStyle = lot.isFavorited ? S.heartButtonActive : S.heartButtonDefault

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleCardClick = () => {
    if (lot.id) onClick?.(lot.id)
  }

  const handleCardKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const isActivationKey = e.key === 'Enter' || e.key === ' '
    if (isActivationKey && lot.id) onClick?.(lot.id)
  }

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (lot.id) onFavorite?.(lot.id)
  }

  // ── Render helpers ──────────────────────────────────────────────────────────

  function renderImage() {
    if (!lot.imageUrl) return <ImagePlaceholder />
    return <img src={lot.imageUrl} alt={lot.title} style={S.imageEl} />
  }

  function renderSubtitle() {
    // Preferir year + location por separado (mapeo directo desde API)
    if (lot.year !== undefined || lot.location) {
      const parts: string[] = []
      if (lot.year !== undefined) parts.push(String(lot.year))
      if (lot.location) parts.push(lot.location)
      if (parts.length === 0) return null
      return <p style={S.subtitleText}>{parts.join(' | ')}</p>
    }
    // Fallback: subtitle legado
    if (!lot.subtitle) return null
    return <p style={S.subtitleText}>{lot.subtitle.replace('·', '|')}</p>
  }

  const formattedPrice = `${lot.currency ?? 'US$'} ${lot.price.toLocaleString('en-US')}`
  const favoriteLabel  = lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'

  const cardClass = [
    onClick ? 'auction-card-clickable' : '',
    isClosed ? 'auction-card-closed'   : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <article
      onClick={onClick && handleCardClick}
      onKeyDown={onClick ? handleCardKeyDown : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={lot.title}
      className={cardClass}
      style={cardStyle}
    >

      {/* Imagen — node 268:1602 — 160×120px */}
      <div style={S.imageWrapper}>
        {renderImage()}
      </div>

      {/* Contenido — node 268:1604 — 160×115px */}
      {/* Inner — node 268:1605 — 136×91px, padding 12px */}
      <div style={S.contentWrapper}>

        {/* Título — node 268:1610 */}
        <h3 style={S.titleText}>{lot.title}</h3>

        {/* Subtítulo — node 268:1613 */}
        {renderSubtitle()}

        {/* Precio — node 268:1615 */}
        <div style={S.priceBlock}>
          <p style={S.priceLabelText}>{lot.priceLabel ?? 'Precio Base'}</p>
          <p style={S.priceValueText}>{formattedPrice}</p>
        </div>

        {/* Favorito — node 268:1621 — 29×29px, left:110 top:45 */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          aria-label={favoriteLabel}
          aria-pressed={lot.isFavorited}
          className="auction-card-fav-btn"
          style={heartStyle}
        >
          <HeartIcon filled={Boolean(lot.isFavorited)} />
        </button>

      </div>
    </article>
  )
}

export default memo(AuctionCardUpgrade)
