// SubascoinsPromoBanner — L3 Bloque
// Banner promocional de Subascoins. CTA a compra/canje de créditos.
// VOYAGER.md: Market / SubascoinsPromoBanner / {Variant}

export interface SubascoinsPromoBannerProps {
  label?: string
  href?: string
  onClick?: () => void
  variant?: 'default' | 'compact'
  className?: string
}

function CoinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
      <path d="M10 6v8M8 7.5h3a1.5 1.5 0 0 1 0 3H8M8 10.5h3a1.5 1.5 0 0 1 0 3H8"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function SubascoinsPromoBanner({
  label    = 'ADQUIERE SUBASCOINS',
  href,
  onClick,
  variant  = 'default',
  className = '',
}: SubascoinsPromoBannerProps) {
  const isCompact = variant === 'compact'

  const handleClick = onClick ?? (href ? () => window.open(href, '_self') : undefined)

  return (
    <button
      type="button"
      onClick={handleClick}
      role="link"
      aria-label="Adquirir Subascoins"
      className={[
        'w-full flex items-center gap-[var(--space-3)]',
        isCompact
          ? 'px-[var(--space-4)] py-[var(--space-3)]'
          : 'px-[var(--space-6)] py-[var(--space-4)]',
        'border-0 cursor-pointer',
        'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        'hover:brightness-90 active:brightness-75',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        className,
      ].filter(Boolean).join(' ')}
      style={{ background: 'var(--color-action-cta)', color: 'var(--color-text-on-dark)' }}
    >
      <CoinIcon />

      <span
        className="flex-1 text-left font-[var(--font-body)] font-[var(--weight-extrabold)] uppercase tracking-[var(--tracking-wide)]"
        style={{
          fontSize: isCompact ? 'var(--font-size-xs)' : 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-tight)',
        }}
      >
        {label}
      </span>

      <ChevronRightIcon />
    </button>
  )
}

export default SubascoinsPromoBanner
