export interface SellerCardProps {
  name: string
  role?: string
  logoUrl?: string
  initials?: string
  rating?: number
  totalAuctions?: number
  phone?: string
  email?: string
  isVerified?: boolean
  className?: string
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1l1.5 3 3.5.5-2.5 2.5.6 3.5L6 9 2.9 10.5l.6-3.5L1 4.5 4.5 4z"
        fill={filled ? 'var(--color-brand-live)' : 'var(--gray-200)'}
        stroke={filled ? 'var(--color-brand-live)' : 'var(--gray-300)'}
        strokeWidth="0.8"
      />
    </svg>
  )
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10" title="Vendedor verificado">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="4.5" fill="oklch(0.637 0.207 145)" />
        <path d="M3 5l1.5 1.5 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-emerald-600 font-[var(--font-body)] font-[var(--weight-semibold)]" style={{ fontSize: '9px' }}>Verificado</span>
    </span>
  )
}

export function SellerCard({
  name,
  role = 'Subastador',
  logoUrl,
  initials,
  rating,
  totalAuctions,
  phone,
  email,
  isVerified = false,
  className = '',
}: SellerCardProps) {
  const avatarInitials = initials ?? name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <div className={[
      'bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] p-4',
      className,
    ].join(' ')}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="size-12 rounded-full object-cover shrink-0 border border-[var(--color-border-ghost)]" />
        ) : (
          <div className="size-12 rounded-full bg-[var(--color-action-primary)] flex items-center justify-center shrink-0 select-none">
            <span className="font-[var(--font-body)] font-[var(--weight-bold)] text-white" style={{ fontSize: '16px' }}>{avatarInitials}</span>
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-body)] truncate"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              {name}
            </h3>
            {isVerified && <VerifiedBadge />}
          </div>
          <p className="font-[var(--font-body)] text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {role}
          </p>
        </div>
      </div>

      {/* Stats */}
      {(rating !== undefined || totalAuctions !== undefined) && (
        <div className="flex items-center gap-4 mb-3 py-2.5 border-y border-[var(--color-border-ghost)]">
          {rating !== undefined && (
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(rating)} />
                ))}
              </div>
              <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
                {rating.toFixed(1)} / 5.0
              </span>
            </div>
          )}
          {totalAuctions !== undefined && (
            <div className="flex flex-col gap-0.5">
              <span className="font-[var(--font-mono)] font-[var(--weight-bold)] text-[var(--color-text-body)] tabular-nums"
                style={{ fontSize: 'var(--type-body-sm-size)' }}>
                {totalAuctions.toLocaleString('es-PE')}
              </span>
              <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>
                subastas
              </span>
            </div>
          )}
        </div>
      )}

      {/* Contact */}
      {(phone || email) && (
        <div className="flex flex-col gap-2">
          {phone && (
            <a href={`tel:${phone}`}
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 2h3l1.5 3L5 6.5c1 1.8 2.7 3.5 4.5 4.5L11 9.5l3 1.5v3a1 1 0 01-1 1A16 16 0 011 1a1 1 0 011-1h0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="font-[var(--font-body)]" style={{ fontSize: 'var(--type-body-sm-size)' }}>{phone}</span>
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] no-underline transition-colors duration-[var(--duration-micro)]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="1" y="2.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="font-[var(--font-body)] truncate" style={{ fontSize: 'var(--type-body-sm-size)' }}>{email}</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default SellerCard
