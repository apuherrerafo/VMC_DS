import { useState, type ReactNode } from 'react'
import { Header, type HeaderUser } from '../Header'
import { Sidebar } from '../Sidebar'
import { Footer } from '../Footer'

export type PageLayoutVariant = 'withSidebar' | 'fullWidth'

export interface PageLayoutProps {
  variant?: PageLayoutVariant
  user?: HeaderUser
  activeSection?: string
  onNavigate?: (id: string) => void
  onLogin?: () => void
  children: ReactNode
  className?: string
}

export function PageLayout({
  variant = 'withSidebar',
  user,
  activeSection,
  onNavigate,
  onLogin,
  children,
  className = '',
}: PageLayoutProps) {
  const [active, setActive] = useState(activeSection ?? 'subastas')

  const handleNavigate = (id: string) => {
    setActive(id)
    onNavigate?.(id)
  }

  return (
    <div
      style={{ background: 'var(--color-surface-body)' }}
      className="min-h-screen"
    >
      <div
        style={{ maxWidth: 'var(--layout-max-width)' }}
        className={['mx-auto flex flex-col min-h-screen', className].join(' ')}
      >
        {/* Header */}
        <Header
          user={user}
          onLogin={onLogin}
          className="sticky top-0 z-[var(--z-sidebar)] shrink-0"
        />

        {/* Body */}
        <div className="flex flex-1">
          {variant === 'withSidebar' && (
            <Sidebar
              activeId={active}
              onNavigate={handleNavigate}
              className="sticky top-16 h-[calc(100vh-64px)] shrink-0"
            />
          )}

          {/* Contenido principal */}
          <main
            className="flex-1 min-w-0 bg-[var(--color-surface-page)]"
            style={{ padding: 'var(--spacing-section-x)' }}
          >
            {children}
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
