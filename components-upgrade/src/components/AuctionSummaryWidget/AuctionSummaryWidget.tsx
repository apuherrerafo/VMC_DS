import { CountdownTimer } from '../CountdownTimer'
import { PriceDisplay } from '../PriceDisplay'
import { BidForm } from '../BidForm'
import { Badge, type BadgeType } from '../Badge/Badge'

export interface AuctionSummaryWidgetProps {
  lotId: string
  title: string
  subtitle?: string
  status: BadgeType
  currentPrice: number
  startingPrice?: number
  currency?: string
  endsAt: number | Date
  minimumBid: number
  totalBids?: number
  onSubmitBid?: (amount: number, lotId?: string) => Promise<void>
  className?: string
}

export function AuctionSummaryWidget({
  lotId,
  title,
  subtitle,
  status,
  currentPrice,
  startingPrice,
  currency = 'S/',
  endsAt,
  minimumBid,
  totalBids,
  onSubmitBid,
  className = '',
}: AuctionSummaryWidgetProps) {
  const isLive   = status === 'live'
  const isClosed = status === 'closed'

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] shadow-[var(--shadow-brand-tinted)] overflow-hidden', className].join(' ')}>
      {/* Status strip */}
      <div className={[
        'px-4 py-2 flex items-center gap-2',
        isLive   ? 'bg-[var(--color-brand-live)]'     :
        isClosed ? 'bg-[var(--gray-400)]'             :
        'bg-[var(--color-action-primary)]',
      ].join(' ')}>
        <Badge type={status} size="sm" />
        <span className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--purple-900)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          Lote #{lotId}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Title */}
        <div>
          <h2 className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)] leading-snug"
            style={{ fontSize: 'var(--type-body-lg-size)' }}>
            {title}
          </h2>
          {subtitle && (
            <p className="font-[var(--font-body)] text-[var(--color-text-muted)] mt-0.5"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between gap-3">
          <PriceDisplay
            context="hero"
            label={isLive ? 'OFERTA ACTUAL' : 'PRECIO BASE'}
            amount={currentPrice}
            currency={currency}
          />
          {totalBids !== undefined && (
            <div className="text-right shrink-0">
              <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-body)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {totalBids}
              </span>
              <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
                style={{ fontSize: 'var(--type-label-size)' }}>
                {totalBids === 1 ? 'oferta' : 'ofertas'}
              </p>
            </div>
          )}
        </div>

        {startingPrice && isLive && (
          <div className="flex items-center gap-2 -mt-2">
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              Precio base:
            </span>
            <span className="font-[var(--font-mono)] tabular-nums text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              {currency} {startingPrice.toLocaleString('es-PE')}
            </span>
          </div>
        )}

        {/* Countdown */}
        {!isClosed && (
          <div className="flex items-center gap-2 py-2.5 border-y border-[var(--color-border-ghost)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[var(--color-text-muted)] shrink-0">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
              {isLive ? 'Cierra en' : 'Inicia en'}
            </span>
            <CountdownTimer endsAt={endsAt} />
          </div>
        )}

        {/* Bid form or closed state */}
        {isClosed ? (
          <div className="py-3 text-center">
            <p className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-muted)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Subasta finalizada
            </p>
          </div>
        ) : (
          <BidForm
            lotId={lotId}
            minimumBid={minimumBid}
            currency={currency}
            onSubmit={onSubmitBid}
          />
        )}
      </div>
    </div>
  )
}

export default AuctionSummaryWidget
