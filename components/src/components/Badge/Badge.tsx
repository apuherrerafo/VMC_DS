export type BadgeType = 'live' | 'negotiable' | 'closed' | 'upcoming' | 'new' | 'featured'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  type: BadgeType
  size?: BadgeSize
  disabled?: boolean
  className?: string
}

// ── Configuración por tipo ────────────────────────────────────────────────────

const BADGE_CONFIG: Record<BadgeType, { label: string; bg: string; text: string; dot?: boolean }> = {
  live:       { label: 'En Vivo',    bg: 'var(--brand-en-vivo)',    text: 'var(--color-text-on-dark)',     dot: true },
  negotiable: { label: 'Negociable', bg: 'var(--brand-negociable)', text: 'var(--neutral-950)'                       },
  closed:     { label: 'Cerrado',    bg: 'var(--gray-300)',         text: 'var(--gray-600)'                          },
  upcoming:   { label: 'Próximo',    bg: 'var(--surface-lavender)', text: 'var(--purple-600)'                        },
  new:        { label: 'Nuevo',      bg: 'var(--purple-600)',       text: 'var(--color-text-on-dark)'                },
  featured:   { label: 'Destacado',  bg: 'var(--neutral-950)',      text: 'var(--color-text-on-dark)'                },
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 gap-1',
  md: 'px-2.5 py-1 gap-1.5',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Badge({ type, size = 'md', disabled = false, className = '' }: BadgeProps) {
  const { label, bg, text, dot } = BADGE_CONFIG[type]

  return (
    <span
      style={{ background: bg, color: text }}
      className={[
        'inline-flex items-center',
        'rounded-[var(--radius-full)]',
        'font-[var(--font-body)]',
        'text-[var(--type-badge-size)]',
        'font-[var(--type-badge-weight)]',
        'leading-[var(--type-badge-lh)]',
        'tracking-[var(--type-badge-tracking)]',
        'uppercase whitespace-nowrap select-none',
        SIZE_CLASSES[size],
        disabled ? 'opacity-40' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {dot && !disabled && (
        <span
          aria-hidden="true"
          className="shrink-0 size-1.5 rounded-full animate-pulse"
          style={{ background: 'var(--color-status-live)' }}
        />
      )}
      {label}
    </span>
  )
}

export default Badge
