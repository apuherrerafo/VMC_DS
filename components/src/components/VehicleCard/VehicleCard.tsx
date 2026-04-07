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
    <svg width="14" height="13" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <path
        d="M9 14.5S1 9.5 1 4.5A4 4 0 0 1 9 3a4 4 0 0 1 8 1.5C17 9.5 9 14.5 9 14.5Z"
        fill={filled ? 'var(--color-action-primary)' : 'none'}
        stroke={filled ? 'var(--color-action-primary)' : 'currentColor'}
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
        'overflow-hidden',
        onClick ? 'cursor-pointer' : '',
        'transition-shadow duration-[var(--duration-standard)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{
        boxShadow: '0px 8px 24px 0px rgba(34,0,92,0.08)',
        borderBottom: '3px solid var(--color-action-cta)',
      }}
    >
      {/* ── Imagen ── */}
      <div className="w-full aspect-[4/3] shrink-0 overflow-hidden bg-[var(--gray-100)]">
        {imageUrl
          ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(150deg, #3d3d4f 0%, #2a2a38 100%)' }}
            >
              <svg width="48" height="24" viewBox="0 0 72 36" fill="white" aria-hidden="true" opacity="0.3">
                <path d="M48 10H24l-6 8H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a6 6 0 0 0 11.5 0h20a6 6 0 0 0 11.5 0H62a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H54l-6-8z" />
                <circle cx="18" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="54" cy="28" r="4" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )
        }
      </div>

      {/* ── Contenido ── */}
      <div className="flex flex-col flex-1 px-3 pt-2.5 pb-3">

        {/* Nombre */}
        <h3
          className="m-0 uppercase truncate"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 800,
            fontSize: '11px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h3>

        {/* Año · Ubicación */}
        <p
          className="mt-0.5 mb-0"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            color: 'var(--color-text-primary)',
          }}
        >
          {subtitle}
        </p>

        {/* Precio + Favorito */}
        <div className="flex items-end justify-between mt-2">

          {/* Precio */}
          <div className="flex flex-col gap-0">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '16px',
                color: 'var(--color-text-muted)',
              }}
            >
              {priceLabel}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '20px',
                color: 'var(--color-text-primary)',
              }}
            >
              {currency} {price}
            </span>
          </div>

          {/* Favorito */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onFavorite?.(e) }}
            aria-label={isFavorited ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            aria-pressed={isFavorited}
            className="flex items-center justify-center border cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              width: '29px',
              height: '29px',
              borderRadius: '50%',
              background: 'white',
              borderColor: 'var(--gray-200)',
              color: isFavorited ? 'var(--color-action-primary)' : 'var(--gray-400)',
              flexShrink: 0,
            }}
          >
            <HeartIcon filled={isFavorited} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default VehicleCard
