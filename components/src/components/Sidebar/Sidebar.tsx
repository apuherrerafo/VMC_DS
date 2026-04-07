// Sidebar — L4 Layout
// Aside navigation 280px. Estado: open.
// VOYAGER.md: Shell / Sidebar

export interface SidebarProps {
  activeId?: string
  onNavigate?: (id: string) => void
  className?: string
}

// ─── icons ────────────────────────────────────────────────────────────────────

function IconHamburger() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <path d="M1 1h16M1 6h16M1 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function IconToday() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M1 8h16" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="5" y="11" width="3" height="3" rx="0.5" fill="currentColor" opacity="0.8"/>
    </svg>
  )
}

function IconTag() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="13" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 4l6 4-6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5h5M5 8h3M5 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

function IconCategories() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 5.5l1.2 3.7h3.9l-3.2 2.3 1.2 3.7L10 13l-3.1 2.2 1.2-3.7-3.2-2.3h3.9L10 5.5Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <rect x="1" y="5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="4" y="9" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="8.5" y="9" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="13" y="9" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="7" y="13" width="6" height="4" rx="0.5" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

function IconHelp() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7.5 8a2.5 2.5 0 1 1 2.5 2.5v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="14.5" r=".85" fill="currentColor"/>
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" aria-hidden="true">
      <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function SidebarLogo() {
  return (
    <div
      className="flex items-center gap-3 shrink-0"
      style={{ height: '64px', padding: '0 20px' }}
    >
      <span style={{ color: 'white', opacity: 0.7, display: 'flex', alignItems: 'center' }}>
        <IconHamburger />
      </span>
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 1l10 5-10 5V1Z" fill="var(--color-action-cta)"/>
          </svg>
          <span
            style={{
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--weight-extrabold)',
              color: 'white',
              letterSpacing: '-0.3px',
              lineHeight: 1,
            }}
          >
            VMC<span style={{ color: 'var(--color-action-cta)' }}>SUBASTAS</span>
          </span>
        </div>
        <span
          style={{
            fontSize: '8px',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-regular)',
            color: 'var(--color-text-on-dark-subtle)',
            letterSpacing: '0.5px',
            paddingLeft: '16px',
          }}
        >
          Powered by SUBASTOP.Co
        </span>
      </div>
    </div>
  )
}

// ─── Nav item types ───────────────────────────────────────────────────────────

interface NavItemDef {
  id: string
  label: string
  icon: React.ReactNode
}

const NAV_ITEMS: NavItemDef[] = [
  { id: 'hoy',           label: 'Hoy',           icon: <IconToday />      },
  { id: 'tipo-oferta',   label: 'Tipo de oferta', icon: <IconTag />        },
  { id: 'categorias',    label: 'Categorías',     icon: <IconCategories /> },
  { id: 'empresas',      label: 'Empresas',       icon: <IconBuilding />   },
]

const SUPPORT_ITEMS: NavItemDef[] = [
  { id: 'centro-ayuda', label: 'Centro de ayuda', icon: <IconHelp /> },
]

// ─── NavItem ──────────────────────────────────────────────────────────────────

function NavItem({
  item,
  isActive,
  onClick,
}: {
  item: NavItemDef
  isActive: boolean
  onClick: () => void
}) {
  if (isActive) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-current="page"
        className="w-full flex items-center justify-between cursor-pointer border-0 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
        style={{
          height: '40px',
          padding: '0 16px',
          background: 'var(--color-surface-nav-active)',
          borderLeft: '3.15px solid var(--color-action-accent)',
          borderRadius: 0,
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: '12px',
          lineHeight: '20px',
          color: 'white',
        }}
      >
        <div className="flex items-center gap-[18px]">
          <span style={{ display: 'flex', alignItems: 'center', color: 'white' }}>{item.icon}</span>
          <span>{item.label}</span>
        </div>
        <span style={{ color: 'white', opacity: 0.5 }}><IconChevronRight /></span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between cursor-pointer border-0 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
      style={{
        padding: '12px 20px',
        borderRadius: 'var(--radius-section)',
        background: 'transparent',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: '12px',
        lineHeight: '20px',
        color: 'white',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-surface-nav-active)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
    >
      <div className="flex items-center gap-[16px]">
        <span style={{ display: 'flex', alignItems: 'center', color: 'white', opacity: 0.7 }}>{item.icon}</span>
        <span>{item.label}</span>
      </div>
      <span style={{ color: 'white', opacity: 0.4 }}><IconChevronRight /></span>
    </button>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export function Sidebar({ activeId = 'hoy', onNavigate, className = '' }: SidebarProps) {
  const nav = (id: string) => onNavigate?.(id)

  return (
    <nav
      style={{ background: 'var(--color-surface-sidebar)', width: 'var(--layout-sidebar-width)' }}
      className={['flex flex-col h-full shrink-0', className].filter(Boolean).join(' ')}
      aria-label="Navegación principal"
    >
      <SidebarLogo />

      {/* Nav principal */}
      <div
        className="flex flex-col flex-1"
        style={{ padding: '20px 12px 0' }}
      >
        <div className="flex flex-col" style={{ gap: '4px' }}>
          {NAV_ITEMS.map(item => (
            <NavItem
              key={item.id}
              item={item}
              isActive={item.id === activeId}
              onClick={() => nav(item.id)}
            />
          ))}
        </div>

        {/* Soporte */}
        <div className="flex flex-col" style={{ marginTop: '20px', gap: '0' }}>
          <span
            style={{
              padding: '0 4px',
              fontSize: '12px',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--weight-bold)',
              lineHeight: '16px',
              color: 'var(--color-text-on-dark-subtle)',
              marginBottom: '4px',
            }}
          >
            Soporte
          </span>
          {SUPPORT_ITEMS.map(item => (
            <NavItem
              key={item.id}
              item={item}
              isActive={item.id === activeId}
              onClick={() => nav(item.id)}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
