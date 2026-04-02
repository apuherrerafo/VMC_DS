import { useRef, useState, useEffect } from 'react'
import { VehicleCard, type VehicleCardProps } from '../VehicleCard/VehicleCard'

export interface AuctioneerSectionProps {
  /** Nombre del rematador: "MAF PERÚ", "ME INTERESA", etc. */
  title?: string
  /** Número de ofertas */
  offerCount?: number
  /** Texto del link de perfil */
  profileLinkLabel?: string
  onProfileClick?: () => void
  cards?: VehicleCardProps[]
  className?: string
}

export function AuctioneerSection({
  title            = 'ME INTERESA',
  offerCount       = 5,
  profileLinkLabel = 'IR AL PERFIL',
  onProfileClick,
  cards            = [],
  className        = '',
}: AuctioneerSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hasMore, setHasMore] = useState(false)

  // Detecta si hay contenido oculto a la derecha para mostrar/ocultar el fade
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
  }, [cards])

  return (
    <section
      className={[
        'flex flex-col w-full',
        'bg-[var(--color-surface-section)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* ── Header ────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-[var(--space-5)] pt-[var(--space-5)] pb-[var(--space-3)]">
        <div className="flex flex-col gap-0">
          <h2
            className="m-0 font-bold uppercase text-[var(--color-text-primary)] font-['Plus_Jakarta_Sans',sans-serif]"
            style={{ fontSize: 'var(--size-18)', lineHeight: 'var(--lh-18)' }}
          >
            {title}
          </h2>
          <span
            className="font-normal text-[var(--color-text-secondary)] font-['Plus_Jakarta_Sans',sans-serif]"
            style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
          >
            {offerCount} OFERTAS
          </span>
        </div>

        {onProfileClick && (
          <button
            type="button"
            onClick={onProfileClick}
            className={[
              'flex items-center gap-[var(--space-1)]',
              'font-semibold uppercase text-[var(--color-action-primary)]',
              'font-[\'Plus_Jakarta_Sans\',sans-serif]',
              'bg-transparent border-0 cursor-pointer',
              'transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'hover:text-[var(--color-action-primary-hover)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            ].join(' ')}
            style={{ fontSize: 'var(--size-12)', lineHeight: 'var(--lh-12)' }}
          >
            {profileLinkLabel}
            <ChevronIcon />
          </button>
        )}
      </div>

      {/* ── Cards carousel ────────────────────────────────── */}
      <div className="relative">
        {/* Scroll container — clip horizontal */}
        <div
          ref={scrollRef}
          className={[
            'flex flex-row gap-[var(--gap-card-grid)]',
            'px-[var(--space-5)] pb-[var(--space-5)]',
            'overflow-x-auto',
            'scroll-smooth',
            /* ocultar scrollbar visualmente */
            '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          ].join(' ')}
        >
          {cards.length > 0
            ? cards.map((card, i) => (
                <div key={i} className="shrink-0 w-[163px]">
                  <VehicleCard {...card} />
                </div>
              ))
            : /* Placeholders de demo */ Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="shrink-0 w-[163px]">
                  <VehicleCard />
                </div>
              ))
          }
        </div>

        {/* Fade derecho — visible solo cuando hay contenido oculto */}
        {hasMore && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-[80px]"
            style={{
              background: 'linear-gradient(to right, transparent, var(--color-surface-section))',
            }}
          />
        )}
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default AuctioneerSection
