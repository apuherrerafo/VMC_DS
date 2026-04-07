import { useRef, useState, useEffect } from 'react'
import { VehicleCard, type VehicleCardProps } from '../VehicleCard/VehicleCard'

export interface AuctioneerSectionProps {
  title?: string
  offerCount?: number
  profileLinkLabel?: string
  onProfileClick?: () => void
  cards?: VehicleCardProps[]
  /** carousel: scroll horizontal (homepage). grid: 2 columnas (detalle). */
  layout?: 'carousel' | 'grid'
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function CarouselCards({ cards }: { cards: VehicleCardProps[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const check = () => setHasMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    check()
    el.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => { el.removeEventListener('scroll', check); window.removeEventListener('resize', check) }
  }, [cards])

  const items = cards.length > 0 ? cards : Array.from({ length: 4 }, () => ({}))

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex flex-row gap-3 px-5 pb-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((card, i) => (
          <div key={i} className="shrink-0 w-[163px]">
            <VehicleCard {...card} />
          </div>
        ))}
      </div>
      {hasMore && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[80px]"
          style={{ background: 'linear-gradient(to right, transparent, var(--color-surface-section))' }}
        />
      )}
    </div>
  )
}

// ─── Grid ─────────────────────────────────────────────────────────────────────

function GridCards({ cards }: { cards: VehicleCardProps[] }) {
  const items = cards.length > 0 ? cards : Array.from({ length: 4 }, () => ({}))
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        padding: '0 12px 12px',
      }}
    >
      {items.map((card, i) => (
        <VehicleCard key={i} {...card} />
      ))}
    </div>
  )
}

// ─── AuctioneerSection ────────────────────────────────────────────────────────

export function AuctioneerSection({
  title            = 'Ofertas Relacionadas',
  offerCount,
  profileLinkLabel = 'IR AL PERFIL',
  onProfileClick,
  cards            = [],
  layout           = 'carousel',
  className        = '',
}: AuctioneerSectionProps) {
  return (
    <section
      className={['flex flex-col w-full bg-[var(--color-surface-section)]', className].filter(Boolean).join(' ')}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-4 pb-3">
        <div className="flex flex-col gap-0">
          <h2
            className="m-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 800,
              fontSize: layout === 'carousel' ? '18px' : '15px',
              lineHeight: '24px',
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </h2>
          {offerCount !== undefined && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: 'var(--color-text-secondary)',
              }}
            >
              {offerCount} OFERTAS
            </span>
          )}
        </div>

        {onProfileClick && (
          <button
            type="button"
            onClick={onProfileClick}
            className="flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '12px',
              color: 'var(--color-action-primary)',
            }}
          >
            {profileLinkLabel}
            <ChevronIcon />
          </button>
        )}
      </div>

      {/* Cards */}
      {layout === 'grid'
        ? <GridCards cards={cards} />
        : <CarouselCards cards={cards} />
      }
    </section>
  )
}

export default AuctioneerSection
