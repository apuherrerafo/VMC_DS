// HelpCenterBanner — L2 Componente
// Franja promocional al final de página: avatar + heading + subtext + CTA.
// VOYAGER.md: Content / HelpCenterBanner

import { Avatar } from '../Avatar'
import { Button } from '../Button'

export interface HelpCenterBannerProps {
  heading?: string
  subtext?: string
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  variant?: 'default' | 'compact'
  className?: string
}

export function HelpCenterBanner({
  heading   = 'Visita nuestro Centro de ayuda',
  subtext   = 'Respuestas rápidas a todas tus dudas',
  ctaLabel  = 'IR AL CENTRO DE AYUDA',
  ctaHref,
  onCtaClick,
  variant   = 'default',
  className = '',
}: HelpCenterBannerProps) {
  const isCompact = variant === 'compact'

  return (
    <section
      className={[
        'flex items-center gap-[var(--space-4)]',
        isCompact
          ? 'px-[var(--space-4)] py-[var(--space-3)]'
          : 'px-[var(--space-6)] py-[var(--space-5)]',
        'bg-[var(--color-surface-section)]',
        className,
      ].filter(Boolean).join(' ')}
      aria-label="Centro de ayuda"
    >
      {/* Avatar */}
      <Avatar
        name="Centro de Ayuda"
        size={isCompact ? 'md' : 'lg'}
        src="https://ui-avatars.com/api/?name=CA&background=391383&color=fff&size=56"
      />

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <p
          className="m-0 font-[var(--font-body)] font-[var(--weight-extrabold)]"
          style={{
            fontSize: isCompact ? 'var(--font-size-base)' : 'var(--font-size-lg)',
            lineHeight: isCompact ? 'var(--line-height-base)' : 'var(--line-height-lg)',
            color: 'var(--color-text-on-surface)',
          }}
        >
          {heading}
        </p>
        {!isCompact && (
          <p
            className="m-0 mt-0.5 font-[var(--font-body)] font-[var(--weight-regular)]"
            style={{
              fontSize: 'var(--font-size-sm)',
              lineHeight: 'var(--line-height-tight)',
              color: 'var(--color-text-muted)',
            }}
          >
            {subtext}
          </p>
        )}
      </div>

      {/* CTA */}
      <Button
        variant="secondary"
        size={isCompact ? 'sm' : 'md'}
        onClick={onCtaClick ?? (ctaHref ? () => window.open(ctaHref, '_self') : undefined)}
      >
        {ctaLabel}
      </Button>
    </section>
  )
}

export default HelpCenterBanner
