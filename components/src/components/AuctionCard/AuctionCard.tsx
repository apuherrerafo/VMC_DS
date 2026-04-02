import { type BadgeType, Badge } from '../Badge'
import { PriceDisplay } from '../PriceDisplay'
import { CountdownTimer } from '../CountdownTimer'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type AuctionCardVariant = 'standard' | 'featured' | 'compact'

export interface LotData {
  id?: string
  /** "TOYOTA HILUX" — siempre uppercase en la card */
  title: string
  /** "2024 · Lima, Perú" */
  subtitle?: string
  imageUrl?: string
  badge: BadgeType
  priceLabel?: string
  price: number
  currency?: string
  /** Timestamp ms — si existe, muestra CountdownTimer */
  endsAt?: number | Date
  isFavorited?: boolean
}

export interface AuctionCardProps {
  variant?: AuctionCardVariant
  lot?: LotData
  isLoading?: boolean
  onFavorite?: (id: string | undefined) => void
  onClick?: (id: string | undefined) => void
  className?: string
}

// ── Accent bottom por badge ───────────────────────────────────────────────────

const ACCENT_COLOR: Record<BadgeType, string> = {
  live:       'var(--color-border-card-accent-auction)',
  negotiable: 'var(--color-border-card-accent-negotiable)',
  upcoming:   'var(--purple-600)',
  new:        'var(--purple-600)',
  featured:   'var(--neutral-950)',
  closed:     'var(--gray-300)',
}

// ── Default lot para demos ────────────────────────────────────────────────────

const DEFAULT_LOT: LotData = {
  title:      'TOYOTA HILUX',
  subtitle:   '2024 · Lima, Perú',
  badge:      'live',
  priceLabel: 'PRECIO BASE',
  price:      17999,
  currency:   'US$',
  endsAt:     Date.now() + 45 * 60 * 1000,
}

// ── Ícono corazón ─────────────────────────────────────────────────────────────

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.5S1.5 9 1.5 4.5A3.5 3.5 0 0 1 8 2.75 3.5 3.5 0 0 1 14.5 4.5C14.5 9 8 13.5 8 13.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

function AuctionCardSkeleton({ variant }: { variant: AuctionCardVariant }) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-3 px-3 py-2.5 animate-pulse bg-[var(--color-surface-card)] rounded-[var(--radius-card)]">
        <div className="h-3 w-32 rounded bg-[var(--gray-300)]" />
        <div className="h-3 w-16 rounded bg-[var(--gray-300)] ml-auto" />
      </div>
    )
  }
  const imgH = variant === 'featured' ? 'h-[200px]' : 'h-[132px]'
  return (
    <div className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] animate-pulse bg-[var(--color-surface-card)]">
      <div className={`${imgH} w-full bg-[var(--gray-300)]`} />
      <div className="flex flex-col gap-2 px-3 py-3">
        <div className="h-2.5 w-24 rounded bg-[var(--gray-300)]" />
        <div className="h-2 w-16 rounded bg-[var(--gray-300)]" />
        <div className="h-6 w-28 rounded bg-[var(--gray-300)] mt-1" />
      </div>
      <div className="h-1 w-full bg-[var(--gray-300)]" />
    </div>
  )
}

// ── Placeholder de imagen ─────────────────────────────────────────────────────

function ImagePlaceholder() {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: 'linear-gradient(150deg, oklch(0.294 0.149 288.000) 0%, oklch(0.242 0.138 286.500) 100%)' }}
    >
      <svg width="56" height="28" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.25">
        <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
        <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
        <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  )
}

// ── Variante Standard ─────────────────────────────────────────────────────────

function StandardCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-md)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen */}
      <div className="relative h-[132px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }
        {/* Badge overlay */}
        <div className="absolute top-2 left-2">
          <Badge type={lot.badge} size="sm" />
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 px-3 pt-2 pb-2 gap-1">
        <h3
          className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </h3>

        {lot.subtitle && (
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] font-[var(--weight-regular)]"
            style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
            {lot.subtitle}
          </p>
        )}

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-1">
          <PriceDisplay
            context="card"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-8 shrink-0 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--color-surface-icon-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>

        {/* Countdown — solo si hay endsAt y no está cerrado */}
        {lot.endsAt && lot.badge !== 'closed' && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-2xs)', lineHeight: 'var(--line-height-2xs)' }}>
              CIERRA EN
            </span>
            <CountdownTimer
              endsAt={lot.endsAt}
              className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
            />
          </div>
        )}
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Featured ─────────────────────────────────────────────────────────

function FeaturedCard({ lot, onFavorite, onClick }: { lot: LotData; onFavorite?: AuctionCardProps['onFavorite']; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <article
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex flex-col w-full overflow-hidden',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-floating)]',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-lg)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      {/* Imagen prominente */}
      <div className="relative h-[200px] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {lot.imageUrl
          ? <img src={lot.imageUrl} alt={lot.title} className="w-full h-full object-cover" />
          : <ImagePlaceholder />
        }

        {/* Badge + Favorito overlay */}
        <div className="absolute inset-0 flex items-start justify-between p-3">
          <Badge type={lot.badge} size="md" />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(lot.id) }}
            aria-label={lot.isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={lot.isFavorited}
            className={[
              'size-9 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'backdrop-blur-[8px]',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
              'active:scale-90',
              lot.isFavorited
                ? 'bg-[var(--color-action-primary)] text-white'
                : 'bg-[var(--color-surface-glass)] text-white hover:bg-white/60',
            ].join(' ')}
          >
            <HeartIcon filled={Boolean(lot.isFavorited)} />
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-3">
        <div>
          <h3
            className="m-0 uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-card-featured-size)', lineHeight: 'var(--type-card-featured-lh)' }}
          >
            {lot.title}
          </h3>
          {lot.subtitle && (
            <p className="m-0 mt-0.5 text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}>
              {lot.subtitle}
            </p>
          )}
        </div>

        <div className="flex items-end justify-between">
          <PriceDisplay
            context="hero"
            label={lot.priceLabel ?? 'Precio Base'}
            amount={lot.price}
            currency={lot.currency}
          />
          {lot.endsAt && lot.badge !== 'closed' && (
            <div className="flex flex-col items-end gap-0.5">
              <span className="text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
                style={{ fontSize: 'var(--font-size-2xs)' }}>
                Cierra en
              </span>
              <CountdownTimer endsAt={lot.endsAt} />
            </div>
          )}
        </div>
      </div>

      {/* Accent bottom */}
      <div className="h-1 w-full shrink-0" style={{ background: ACCENT_COLOR[lot.badge] }} aria-hidden="true" />
    </article>
  )
}

// ── Variante Compact ──────────────────────────────────────────────────────────

function CompactCard({ lot, onClick }: { lot: LotData; onClick?: AuctionCardProps['onClick'] }) {
  return (
    <div
      onClick={() => onClick?.(lot.id)}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(lot.id) } : undefined}
      className={[
        'flex items-center justify-between',
        'px-3 py-2.5 gap-3',
        'bg-[var(--color-surface-card)]',
        'border-b border-[var(--color-border-section-divider)]',
        'last:border-b-0',
        onClick ? 'cursor-pointer hover:bg-[var(--color-surface-section)] transition-colors duration-[var(--duration-micro)]' : '',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-action-primary)]',
      ].filter(Boolean).join(' ')}
    >
      <div className="flex items-center gap-2 min-w-0">
        <Badge type={lot.badge} size="sm" />
        <span
          className="truncate uppercase font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
          style={{ fontSize: 'var(--type-card-title-size)', lineHeight: 'var(--type-card-title-lh)' }}
        >
          {lot.title}
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {lot.endsAt && lot.badge !== 'closed' && (
          <CountdownTimer
            endsAt={lot.endsAt}
            className="!text-[var(--font-size-xs)] !leading-[var(--line-height-tight)]"
          />
        )}
        <PriceDisplay
          context="compact"
          label={lot.priceLabel ?? 'Base'}
          amount={lot.price}
          currency={lot.currency}
        />
      </div>
    </div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function AuctionCard({
  variant = 'standard',
  lot = DEFAULT_LOT,
  isLoading = false,
  onFavorite,
  onClick,
  className = '',
}: AuctionCardProps) {
  if (isLoading) return <AuctionCardSkeleton variant={variant} />

  const wrapClass = className ? `${className}` : ''

  if (variant === 'featured') return <div className={wrapClass}><FeaturedCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
  if (variant === 'compact')  return <div className={wrapClass}><CompactCard  lot={lot} onClick={onClick} /></div>
  return <div className={wrapClass}><StandardCard lot={lot} onFavorite={onFavorite} onClick={onClick} /></div>
}

export default AuctionCard
