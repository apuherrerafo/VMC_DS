export interface FooterProps {
  className?: string
}

const LINKS = [
  { label: 'Términos y Condiciones', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Preguntas Frecuentes',   href: '#' },
  { label: 'Contacto',               href: '#' },
]

function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4"/><circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.4"/><circle cx="11.2" cy="4.8" r=".7" fill="currentColor"/></svg>
}

function FacebookIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M9.5 3H11V1H9.5C8 1 7 2 7 3.5V5H5.5v2H7v7h2V7h1.5l.5-2H9V3.5c0-.3.2-.5.5-.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
}

function LinkedinIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5.5 7v4M5.5 5.5v.01M8 11V8.5c0-1 .5-1.5 1.5-1.5S11 7.5 11 8.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      style={{ background: 'var(--color-surface-sidebar)' }}
      className={['w-full px-[var(--spacing-section-x)] py-6', className].join(' ')}
    >
      <div className="flex flex-col gap-4">
        {/* Top row: logo + social */}
        <div className="flex items-center justify-between">
          <span
            className="font-[var(--font-body)] font-[var(--weight-extrabold)] text-[var(--color-text-on-dark)]"
            style={{ fontSize: '13px', letterSpacing: '-0.3px' }}
          >
            VMC SUBASTAS
          </span>

          <div className="flex items-center gap-3">
            {[
              { icon: <InstagramIcon />, label: 'Instagram' },
              { icon: <FacebookIcon />,  label: 'Facebook'  },
              { icon: <LinkedinIcon />,  label: 'LinkedIn'  },
            ].map(({ icon, label }) => (
              <a key={label} href="#" aria-label={label}
                className="text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="h-px" style={{ background: 'var(--color-border-nav-separator)' }} />

        {/* Links + copyright */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            {LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="font-[var(--font-body)] text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-text-on-dark)] transition-colors duration-[var(--duration-micro)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ fontSize: 'var(--font-size-xs)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <span
            className="font-[var(--font-body)] text-[var(--color-text-on-dark-subtle)]"
            style={{ fontSize: 'var(--font-size-xs)' }}
          >
            © {new Date().getFullYear()} VMC Subastas. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
