// AuctionActionBar — L3 Bloque
// Fila de CTAs secundarias del flujo de puja, debajo del BidForm principal.
// VOYAGER.md: Auction / ActionBar / {State}

import { Button } from '../Button'

export interface AuctionActionBarProps {
  hasReservePrice?: boolean
  participationLimit?: number
  onReservePrice?: () => void
  onSaveOffer?: () => void
  onParticipationLimits?: () => void
  variant?: 'full' | 'compact' | 'minimal'
  disabled?: boolean
  loading?: boolean
  className?: string
}

function ReservePriceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1L2 4v3c0 3.3 2.1 6.4 5 7 2.9-.6 5-3.7 5-7V4L7 1Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M5 7l1.5 1.5L9.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SaveOfferIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M11 12H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6l3 3v7a1 1 0 0 1-1 1Z"
        stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M9.5 12V8.5h-5V12" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M4.5 2v3h4" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  )
}

function LimitsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 4.5V7l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function AuctionActionBar({
  hasReservePrice      = true,
  participationLimit,
  onReservePrice,
  onSaveOffer,
  onParticipationLimits,
  variant              = 'full',
  disabled             = false,
  loading              = false,
  className            = '',
}: AuctionActionBarProps) {
  const isDisabled = disabled || loading

  return (
    <div
      className={[
        'flex items-center gap-[var(--space-2)] p-[var(--space-2)]',
        'rounded-[var(--radius-sm)]',
        'bg-[var(--color-surface-input)]',
        isDisabled ? 'opacity-50 pointer-events-none' : '',
        className,
      ].filter(Boolean).join(' ')}
      role="group"
      aria-label="Acciones de subasta"
    >
      {/* Con Precio Reserva — visible en full y compact */}
      {(variant === 'full' || variant === 'compact') && hasReservePrice && (
        <Button
          variant="tertiary"
          size="sm"
          onClick={onReservePrice}
          disabled={isDisabled}
          hasLeadingIcon
          className="flex-1"
        >
          <ReservePriceIcon />
          Con Precio Reserva
        </Button>
      )}

      {/* Guardar Oferta — visible en todos */}
      <Button
        variant="tertiary"
        size="sm"
        onClick={onSaveOffer}
        disabled={isDisabled}
        hasLeadingIcon
        className="flex-1"
      >
        <SaveOfferIcon />
        Guardar Oferta
      </Button>

      {/* Límites de participación — visible solo en full */}
      {variant === 'full' && (
        <Button
          variant="tertiary"
          size="sm"
          onClick={onParticipationLimits}
          disabled={isDisabled}
          hasLeadingIcon
          className="flex-1"
        >
          <LimitsIcon />
          {participationLimit !== undefined
            ? `${participationLimit} límites`
            : 'Ver límites'}
        </Button>
      )}
    </div>
  )
}

export default AuctionActionBar
