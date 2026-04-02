import { type ReactNode } from 'react'

export interface SidebarLink {
  id: string
  label: string
  icon: ReactNode
  href?: string
  badge?: number
}

export interface SidebarProps {
  activeId?: string
  onNavigate?: (id: string) => void
  className?: string
}

// ── Iconos de navegación ──────────────────────────────────────────────────────

function IconGrid() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
}

function IconGavel() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 15l4-4M10 4l4 4-6 6-4-4 6-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
}

function IconHeart() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 15S2 10.5 2 5.5A4 4 0 0 1 9 3.5a4 4 0 0 1 7 2C16 10.5 9 15 9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconChart() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 13l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function IconHelp() {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M7 7a2 2 0 1 1 2.5 1.9c-.5.2-.5.6-.5 1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="12.5" r=".75" fill="currentColor"/></svg>
}

// ── Nav items ─────────────────────────────────────────────────────────────────

const NAV_ITEMS: SidebarLink[] = [
  { id: 'subastas',   label: 'Subastas',   icon: <IconGrid />  },
  { id: 'mis-ofertas',label: 'Mis Ofertas',icon: <IconGavel /> },
  { id: 'favoritos',  label: 'Favoritos',  icon: <IconHeart /> },
  { id: 'mercado',    label: 'Mercado',    icon: <IconChart /> },
]

const BOTTOM_ITEMS: SidebarLink[] = [
  { id: 'ayuda', label: 'Ayuda', icon: <IconHelp /> },
]

// ── Ícono VMC (logo compacto para sidebar) ────────────────────────────────────

function SidebarLogo() {
  return (
    <div className="flex items-center gap-2.5 px-4 h-16 shrink-0 select-none border-b border-[var(--color-border-nav-separator)]">
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

// ── Nav item ──────────────────────────────────────────────────────────────────

function NavItem({ item, isActive, onClick }: { item: SidebarLink; isActive: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={[
        'w-full flex items-center gap-3 px-4 h-11',
        'rounded-[var(--radius-btn)] border-0 cursor-pointer text-left',
        'font-[var(--font-body)] font-[var(--weight-semibold)]',
        'transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        isActive
          ? 'bg-[var(--color-surface-nav-active)] text-[var(--color-text-on-dark)]'
          : 'bg-transparent text-[var(--color-text-on-dark-secondary)] hover:bg-[var(--color-surface-nav-active)] hover:text-[var(--color-text-on-dark)]',
      ].join(' ')}
      style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
    >
      <span className={isActive ? 'text-[var(--color-text-on-dark)]' : 'text-[var(--color-text-on-dark-muted)]'}>
        {item.icon}
      </span>
      <span className="uppercase">{item.label}</span>
      {item.badge !== undefined && item.badge > 0 && (
        <span
          className="ml-auto size-5 flex items-center justify-center rounded-full font-[var(--weight-bold)] text-[var(--neutral-950)]"
          style={{ fontSize: '10px', background: 'var(--color-action-accent)' }}
        >
          {item.badge > 9 ? '9+' : item.badge}
        </span>
      )}
    </button>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function Sidebar({ activeId = 'subastas', onNavigate, className = '' }: SidebarProps) {
  const nav = (id: string) => onNavigate?.(id)

  return (
    <nav
      style={{ background: 'var(--color-surface-sidebar)', width: 'var(--layout-sidebar-width)' }}
      className={[
        'flex flex-col h-full shrink-0',
        className,
      ].filter(Boolean).join(' ')}
      aria-label="Navegación principal"
    >
      <SidebarLogo />

      {/* Nav principal */}
      <div className="flex flex-col gap-1 px-3 pt-4 flex-1">
        {NAV_ITEMS.map(item => (
          <NavItem key={item.id} item={item} isActive={item.id === activeId} onClick={() => nav(item.id)} />
        ))}
      </div>

      {/* Separador + nav inferior */}
      <div className="px-3 pb-4 flex flex-col gap-1">
        <div className="h-px mx-1 mb-2" style={{ background: 'var(--color-border-nav-separator)' }} />
        {BOTTOM_ITEMS.map(item => (
          <NavItem key={item.id} item={item} isActive={item.id === activeId} onClick={() => nav(item.id)} />
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
