import type { ReactNode } from 'react'

export interface HeroSectionProps {
  title: ReactNode
  subtitle?: string
  eyebrow?: string
  primaryAction?: { label: string; onClick: () => void }
  secondaryAction?: { label: string; onClick: () => void }
  backgroundImage?: string
  stat1?: { value: string; label: string }
  stat2?: { value: string; label: string }
  stat3?: { value: string; label: string }
  className?: string
}

function VaultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7V5M10 16v-2M4 10.5H2M18 10.5h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M10 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

export function HeroSection({
  title,
  subtitle,
  eyebrow,
  primaryAction,
  secondaryAction,
  backgroundImage,
  stat1,
  stat2,
  stat3,
  className = '',
}: HeroSectionProps) {
  const stats = [stat1, stat2, stat3].filter(Boolean)

  return (
    <section
      className={[
        'relative overflow-hidden',
        'flex flex-col justify-center',
        'min-h-[400px] px-6 py-14',
        className,
      ].join(' ')}
      style={{ background: 'var(--color-surface-hero-gradient)' }}
    >
      {/* Background image overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        >
          <div className="absolute inset-0" style={{ background: 'var(--purple-900)/70' }} />
        </div>
      )}

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[var(--layout-max-width)] mx-auto w-full">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[var(--cyan-500)]"><VaultIcon /></span>
            <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase tracking-[var(--tracking-wider)] text-[var(--cyan-500)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-[var(--font-body)] font-[var(--weight-extrabold)] text-white leading-tight mb-4"
          style={{ fontSize: 'var(--type-display-lg-size, 38px)', maxWidth: '600px' }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-[var(--font-body)] text-white/70 mb-8 max-w-[480px]"
            style={{ fontSize: 'var(--type-body-size)' }}>
            {subtitle}
          </p>
        )}

        {/* CTAs */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {primaryAction && (
              <button type="button" onClick={primaryAction.onClick}
                className="h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-bold)] border-0 cursor-pointer transition-all duration-[var(--duration-micro)] hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'var(--color-action-cta)', color: 'var(--purple-900)', fontSize: 'var(--type-body-sm-size)' }}>
                {primaryAction.label}
              </button>
            )}
            {secondaryAction && (
              <button type="button" onClick={secondaryAction.onClick}
                className="h-12 px-6 rounded-[var(--radius-btn)] font-[var(--font-body)] font-[var(--weight-semibold)] bg-white/10 text-white border border-white/20 cursor-pointer hover:bg-white/20 transition-colors duration-[var(--duration-micro)]"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}

        {/* Stats */}
        {stats.length > 0 && (
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, i) => stat && (
              <div key={i}>
                <p className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-white leading-none mb-0.5"
                  style={{ fontSize: 'var(--type-body-lg-size, 20px)' }}>
                  {stat.value}
                </p>
                <p className="font-[var(--font-body)] text-white/50 uppercase tracking-[var(--tracking-wider)]"
                  style={{ fontSize: 'var(--type-label-size)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
