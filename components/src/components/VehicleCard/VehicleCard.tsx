import React from 'react'

export interface VehicleCardProps {
  /** Nombre del vehículo en mayúsculas: "FORD BRONCO SPORT" */
  title?: string
  /** Año y ubicación: "2024 | LIMA, PERÚ" */
  subtitle?: string
  /** Etiqueta sobre el precio: "PRECIO BASE" */
  priceLabel?: string
  /** Moneda: "US$" */
  currency?: string
  /** Monto formateado: "17,999" */
  price?: string
  /** URL de la imagen del vehículo */
  imageUrl?: string
  /** Estado del favorito */
  isFavorited?: boolean
  /** Handler del botón favorito */
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** Handler click en la card (navegar al detalle) */
  onClick?: () => void
  className?: string
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function VehicleCard({
  title        = 'TOYOTA HILUX',
  subtitle     = '2024 | LIMA, PERÚ',
  priceLabel   = 'PRECIO BASE',
  currency     = 'US$',
  price        = '17,999',
  imageUrl,
  isFavorited  = false,
  onFavorite,
  onClick,
  className    = '',
}: VehicleCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-card)]',
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Imagen ─────────────────────────────────────────── */}
      <div className="h-[128px] shrink-0 overflow-hidden bg-[var(--gray-50)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )
          : (
            /* Placeholder cuando no hay imagen */
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="64" height="32" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.35">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ──────────────────────────────────────── */}
      <div className="flex flex-col flex-1 px-[var(--space-3)] pt-[var(--space-2)] pb-[var(--space-2)]">

        {/* Nombre del vehículo */}
        <h3
          className="m-0 font-bold uppercase tracking-wide text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-[var(--space-1)] mb-0 font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
          style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-[var(--space-2)]">

          {/* Izquierda: etiqueta + monto */}
          <div className="flex flex-col gap-0">
            <span
              className="font-semibold uppercase text-[var(--color-text-muted)] font-['Plus_Jakarta_Sans',sans-serif]"
              style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
            >
              {priceLabel}
            </span>
            <div className="flex items-baseline gap-[2px]">
              <span
                className="font-semibold text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-11)', lineHeight: 'var(--lh-11)' }}
              >
                {currency}
              </span>
              <span
                className="font-bold tabular-nums text-[var(--color-brand-live)] font-['Plus_Jakarta_Sans',sans-serif]"
                style={{ fontSize: 'var(--size-16)', lineHeight: 'var(--lh-16)' }}
              >
                {price}
              </span>
            </div>
          </div>

          {/* Derecha: botón favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className={[
              'size-[32px] shrink-0',
              'flex items-center justify-center',
              'rounded-[var(--radius-full)]',
              'border-0 cursor-pointer',
              'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              isFavorited
                ? 'bg-[var(--color-action-primary)] text-[var(--color-text-on-dark)]'
                : 'bg-[var(--gray-50)] text-[var(--color-text-secondary)] hover:bg-[var(--gray-100)] hover:text-[var(--color-action-primary)]',
              'active:scale-[0.90]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>

      {/* ── Franja inferior amber ───────────────────────────── */}
      <div
        className="h-[4px] shrink-0 w-full"
        style={{ background: 'var(--color-brand-live)' }}
        aria-hidden="true"
      />
    </article>
  )
}

export default VehicleCard
