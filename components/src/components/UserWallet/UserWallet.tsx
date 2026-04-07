export type WalletStatus = 'active' | 'pending' | 'suspended'

export interface UserWalletProps {
  balance: number
  currency?: string
  status?: WalletStatus
  userName?: string
  /** Monto reservado por pujas activas */
  reserved?: number
  onDeposit?: () => void
  onWithdraw?: () => void
  compact?: boolean
  className?: string
}

const STATUS_CONFIG: Record<WalletStatus, { label: string; color: string; bg: string }> = {
  active:    { label: 'Activa',    color: 'oklch(0.4 0.15 145)',                   bg: 'oklch(0.637 0.207 145 / 0.08)' },
  pending:   { label: 'Pendiente', color: 'var(--amber-500)',                      bg: 'oklch(0.784 0.172 68.000 / 0.10)' },
  suspended: { label: 'Suspendida',color: 'var(--red-500)',                        bg: 'oklch(0.637 0.207 25.500 / 0.08)' },
}

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="13.5" cy="11" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export function UserWallet({
  balance,
  currency = 'S/',
  status = 'active',
  userName,
  reserved,
  onDeposit,
  onWithdraw,
  compact = false,
  className = '',
}: UserWalletProps) {
  const { label, color, bg } = STATUS_CONFIG[status]
  const available = reserved !== undefined ? balance - reserved : balance

  if (compact) {
    return (
      <div className={['inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)]', className].join(' ')}>
        <span style={{ color }} className="shrink-0"><WalletIcon /></span>
        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]"
            style={{ fontSize: '9px' }}>Saldo</span>
          <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums"
            style={{ fontSize: 'var(--type-body-sm-size)', color }}>
            {currency} {available.toLocaleString('es-PE')}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={['bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden', className].join(' ')}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-ghost)]">
        <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
          <WalletIcon />
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {userName ? `Billetera de ${userName}` : 'Mi billetera'}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full font-[var(--font-body)] font-[var(--weight-semibold)]"
          style={{ fontSize: '10px', color, background: bg }}>
          {label}
        </span>
      </div>

      {/* Balance */}
      <div className="px-4 py-4">
        <p className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] mb-1"
          style={{ fontSize: 'var(--type-label-size)' }}>
          Saldo disponible
        </p>
        <p className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums leading-none"
          style={{ fontSize: 'var(--type-body-lg-size)', color: 'var(--color-text-primary)' }}>
          <span className="text-[var(--color-text-muted)] font-[var(--weight-semibold)] mr-1"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>{currency}</span>
          {available.toLocaleString('es-PE')}
        </p>

        {reserved !== undefined && reserved > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="text-[var(--amber-500)] shrink-0">
              <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5.5 3.5v2.5M5.5 7.5v.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="font-[var(--font-body)] text-[var(--color-text-muted)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              {currency} {reserved.toLocaleString('es-PE')} reservado en pujas activas
            </span>
          </div>
        )}
      </div>

      {/* Actions */}
      {(onDeposit || onWithdraw) && (
        <div className="flex gap-2 px-4 pb-4">
          {onDeposit && (
            <button type="button" onClick={onDeposit}
              className="flex-1 h-9 rounded-[var(--radius-btn)] bg-[var(--color-action-primary)] text-white font-[var(--font-body)] font-[var(--weight-semibold)] border-0 cursor-pointer hover:bg-[var(--color-action-primary-hover)] transition-colors duration-[var(--duration-micro)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Depositar
            </button>
          )}
          {onWithdraw && (
            <button type="button" onClick={onWithdraw}
              className="flex-1 h-9 rounded-[var(--radius-btn)] bg-transparent text-[var(--color-text-body)] font-[var(--font-body)] font-[var(--weight-semibold)] border border-[var(--color-border-ghost)] cursor-pointer hover:bg-[var(--gray-50)] transition-colors duration-[var(--duration-micro)]"
              style={{ fontSize: 'var(--type-body-sm-size)' }}>
              Retirar
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default UserWallet
