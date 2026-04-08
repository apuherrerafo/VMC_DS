export interface BidEntry {
  id: string
  bidder: string
  /** Iniciales para el avatar — si no se pasan se generan desde bidder */
  initials?: string
  amount: number
  currency?: string
  /** ISO timestamp */
  placedAt: string | Date
  isWinning?: boolean
  isAnonymous?: boolean
}

export interface BidHistoryListProps {
  bids: BidEntry[]
  maxVisible?: number
  isLoading?: boolean
  className?: string
}

function timeAgo(date: string | Date): string {
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  if (diff < 60)  return `hace ${diff}s`
  if (diff < 3600) return `hace ${Math.floor(diff / 60)}m`
  return `hace ${Math.floor(diff / 3600)}h`
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function maskName(name: string): string {
  const parts = name.split(' ')
  return parts.map((p, i) => i === 0 ? p : p[0] + '***').join(' ')
}

function Avatar({ initials, isWinning }: { initials: string; isWinning?: boolean }) {
  return (
    <div className={[
      'size-8 rounded-full flex items-center justify-center shrink-0 select-none',
      'font-[var(--font-body)] font-[var(--weight-bold)]',
      isWinning
        ? 'bg-[var(--color-action-primary)] text-white'
        : 'bg-[var(--gray-200)] text-[var(--gray-500)]',
    ].join(' ')}
    style={{ fontSize: '11px' }}>
      {initials}
    </div>
  )
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="size-8 rounded-full bg-[var(--gray-200)] animate-pulse shrink-0" />
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="h-2.5 w-28 bg-[var(--gray-200)] rounded animate-pulse" />
        <div className="h-2 w-16 bg-[var(--gray-200)] rounded animate-pulse" />
      </div>
      <div className="h-4 w-20 bg-[var(--gray-200)] rounded animate-pulse" />
    </div>
  )
}

export function BidHistoryList({
  bids,
  maxVisible = 5,
  isLoading = false,
  className = '',
}: BidHistoryListProps) {
  const visible = bids.slice(0, maxVisible)

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden', className].join(' ')}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]">
        <h3 className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          Historial de ofertas
        </h3>
        {bids.length > 0 && (
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {bids.length} {bids.length === 1 ? 'oferta' : 'ofertas'}
          </span>
        )}
      </div>

      {/* List */}
      <div className="divide-y divide-[var(--color-border-ghost)]">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <div key={i} className="px-4"><SkeletonRow /></div>)
          : visible.length === 0
            ? (
              <div className="px-4 py-8 text-center font-[var(--font-body)] text-[var(--color-text-muted)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                Sin ofertas aún. ¡Sé el primero!
              </div>
            )
            : visible.map((bid, i) => {
              const initials = bid.initials ?? getInitials(bid.bidder)
              const displayName = bid.isAnonymous ? maskName(bid.bidder) : bid.bidder
              const currency = bid.currency ?? 'S/'
              return (
                <div key={bid.id} className={['flex items-center gap-3 px-4 py-2.5', i === 0 && bid.isWinning !== false ? 'bg-[oklch(0.761_0.130_197.000_/_0.04)]' : ''].join(' ')}>
                  <Avatar initials={initials} isWinning={i === 0} />
                  <div className="flex-1 min-w-0">
                    <p className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)] truncate"
                      style={{ fontSize: 'var(--type-body-sm-size)' }}>
                      {displayName}
                      {i === 0 && (
                        <span className="ml-1.5 text-[var(--color-action-primary)]" style={{ fontSize: '10px' }}>▲ Mayor oferta</span>
                      )}
                    </p>
                    <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
                      style={{ fontSize: 'var(--type-label-size)' }}>
                      {timeAgo(bid.placedAt)}
                    </p>
                  </div>
                  <span
                    className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums shrink-0"
                    style={{
                      fontSize: i === 0 ? 'var(--type-body-size)' : 'var(--type-body-sm-size)',
                      color: i === 0 ? 'var(--color-action-primary)' : 'var(--color-text-body)',
                    }}
                  >
                    {currency} {bid.amount.toLocaleString('es-PE')}
                  </span>
                </div>
              )
            })
        }
      </div>

      {!isLoading && bids.length > maxVisible && (
        <div className="px-4 py-2.5 border-t border-[var(--color-border-ghost)] text-center">
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            +{bids.length - maxVisible} ofertas anteriores
          </span>
        </div>
      )}
    </div>
  )
}

export default BidHistoryList
