export type PriceContext = 'hero' | 'card' | 'compact'

export interface PriceDisplayProps {
  /** Etiqueta semántica: "PRECIO BASE", "OFERTA ACTUAL", "PRECIO RESERVA" */
  label: string
  amount: number
  /** Código de moneda visible: "US$", "S/" */
  currency?: string
  context?: PriceContext
  isLoading?: boolean
  className?: string
}

// ── Configuración por contexto ────────────────────────────────────────────────

const CONFIG: Record<PriceContext, {
  labelSize: string
  amountSize: string
  amountWeight: string
  currencySize: string
  gap: string
}> = {
  hero: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-wider)]',
    amountSize:   'text-[var(--type-hero-title-size)] leading-[var(--type-hero-title-lh)]',
    amountWeight: 'font-[var(--weight-extrabold)]',
    currencySize: 'text-[var(--font-size-xl)]',
    gap:          'gap-0.5',
  },
  card: {
    labelSize:    'text-[var(--type-label-size)] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--type-card-featured-size)] leading-[var(--type-card-featured-lh)]',
    amountWeight: 'font-[var(--weight-bold)]',
    currencySize: 'text-[var(--font-size-xs)]',
    gap:          'gap-0',
  },
  compact: {
    labelSize:    'text-[8px] tracking-[var(--tracking-micro)]',
    amountSize:   'text-[var(--font-size-xs)] leading-[var(--line-height-tight)]',
    amountWeight: 'font-[var(--weight-semibold)]',
    currencySize: 'text-[8px]',
    gap:          'gap-0',
  },
}

// ── Formato de monto ──────────────────────────────────────────────────────────

function formatAmount(amount: number): string {
  return amount.toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

// ── Skeleton inline ───────────────────────────────────────────────────────────

function PriceSkeleton({ context }: { context: PriceContext }) {
  const heights: Record<PriceContext, string> = { hero: 'h-8', card: 'h-4', compact: 'h-3' }
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="h-2.5 w-16 rounded bg-[var(--gray-300)]" />
      <div className={`${heights[context]} w-28 rounded bg-[var(--gray-300)]`} />
    </div>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function PriceDisplay({
  label,
  amount,
  currency = 'US$',
  context = 'card',
  isLoading = false,
  className = '',
}: PriceDisplayProps) {
  if (isLoading) return <PriceSkeleton context={context} />

  const c = CONFIG[context]

  return (
    <div className={['inline-flex flex-col', c.gap, className].join(' ')}>

      {/* Label — PRECIO BASE, OFERTA ACTUAL */}
      <span
        className={[
          'font-[var(--font-body)]',
          'font-[var(--weight-semibold)]',
          'uppercase',
          'text-[var(--color-text-price-label)]',
          c.labelSize,
        ].join(' ')}
      >
        {label}
      </span>

      {/* Monto */}
      <div className="inline-flex items-baseline gap-0.5">
        <span
          className={[
            'font-[var(--font-mono)]',
            'font-[var(--weight-semibold)]',
            'text-[var(--color-text-primary)]',
            c.currencySize,
            'tabular-nums',
          ].join(' ')}
        >
          {currency}
        </span>
        <span
          className={[
            'font-[var(--font-mono)]',
            c.amountWeight,
            'text-[var(--color-text-primary)]',
            c.amountSize,
            'tabular-nums',
          ].join(' ')}
        >
          {formatAmount(amount)}
        </span>
      </div>
    </div>
  )
}

export default PriceDisplay
