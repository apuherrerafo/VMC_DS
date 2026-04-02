import { type ReactNode } from 'react'
import { Button } from '../Button'

export interface HeaderUser {
  name: string
  avatarUrl?: string
}

export interface HeaderProps {
  user?: HeaderUser
  onLogin?: () => void
  onSearch?: (query: string) => void
  onNotifications?: () => void
  /** Slot para elemento adicional (ej: badge de ofertas activas) */
  extra?: ReactNode
  className?: string
}

// ── Iconos ────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2a5 5 0 0 1 5 5v3l1.5 2.5H2.5L4 10V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 14.5a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function VmcLogo() {
  return (
    <div className="flex items-center gap-2 select-none" aria-label="VMC Subastas">
      {/* Ícono del vault */}
      <div
        className="size-8 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0"
        style={{ background: 'oklch(1.000 0.000 0.000 / 0.15)' }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="14" height="11" rx="1.5" stroke="white" strokeWidth="1.4" />
          <circle cx="9" cy="9.5" r="2.5" stroke="white" strokeWidth="1.4" />
          <path d="M9 2v2M5 2.5L6 4M13 2.5L12 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]"
          style={{ fontSize: '13px', letterSpacing: '-0.3px' }}>
          VMC
        </span>
        <span className="font-[var(--font-body)] font-[var(--weight-regular)] text-[var(--color-text-on-dark-muted)]"
          style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
          SUBASTAS
        </span>
      </div>
    </div>
  )
}

// ── Avatar de usuario ─────────────────────────────────────────────────────────

function UserAvatar({ user }: { user: HeaderUser }) {
  const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div
      className="size-8 rounded-[var(--radius-icon-btn)] flex items-center justify-center shrink-0 select-none"
      style={{ background: 'var(--color-action-accent)', color: 'var(--neutral-950)' }}
      aria-label={user.name}
    >
      {user.avatarUrl
        ? <img src={user.avatarUrl} alt={user.name} className="size-full object-cover rounded-[var(--radius-icon-btn)]" />
        : <span className="font-[var(--font-body)] font-[var(--weight-bold)]" style={{ fontSize: '11px' }}>{initials}</span>
      }
    </div>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function Header({
  user,
  onLogin,
  onSearch,
  onNotifications,
  extra,
  className = '',
}: HeaderProps) {
  return (
    <header
      style={{ background: 'var(--color-surface-header)' }}
      className={[
        'w-full h-16 flex items-center px-[var(--spacing-section-x)] gap-4',
        'z-[var(--z-sidebar)]',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Logo */}
      <VmcLogo />

      {/* Search */}
      <div className="flex-1 max-w-[320px] relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-on-dark-subtle)] pointer-events-none">
          <SearchIcon />
        </span>
        <input
          type="search"
          placeholder="Buscar vehículo o lote..."
          onChange={e => onSearch?.(e.target.value)}
          className={[
            'w-full h-9 pl-9 pr-3',
            'rounded-[var(--radius-btn)]',
            'bg-[oklch(1.000_0.000_0.000_/_0.10)]',
            'font-[var(--font-body)] text-[var(--color-text-on-dark)]',
            'border-0 outline-none',
            'placeholder:text-[var(--color-text-on-dark-subtle)]',
            'focus:bg-[oklch(1.000_0.000_0.000_/_0.15)]',
            'transition-colors duration-[var(--duration-micro)]',
          ].join(' ')}
          style={{ fontSize: 'var(--font-size-xs)' }}
        />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Acciones */}
      <div className="flex items-center gap-3">
        {extra}

        {/* Notificaciones — solo si hay usuario */}
        {user && (
          <button
            type="button"
            onClick={onNotifications}
            aria-label="Notificaciones"
            className={[
              'size-9 flex items-center justify-center',
              'rounded-[var(--radius-icon-btn)] border-0 cursor-pointer',
              'text-[var(--color-text-on-dark-high)]',
              'bg-transparent hover:bg-[var(--color-surface-nav-active)]',
              'transition-colors duration-[var(--duration-micro)]',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
            ].join(' ')}
          >
            <BellIcon />
          </button>
        )}

        {/* Usuario o botón de login */}
        {user
          ? <UserAvatar user={user} />
          : (
            <Button variant="secondary" size="sm" onClick={onLogin}
              className="!border-[oklch(1.000_0.000_0.000_/_0.30)] !text-[var(--color-text-on-dark)] !bg-transparent hover:!bg-[var(--color-surface-nav-active)]">
              INGRESA
            </Button>
          )
        }
      </div>
    </header>
  )
}

export default Header
