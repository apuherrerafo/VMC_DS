export interface BreadcrumbItem {
  label: string
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M4.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 5.5L6.5 1.5 11 5.5V11a1 1 0 01-1 1H3a1 1 0 01-1-1V5.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M5 12V8h3v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol className="flex items-center flex-wrap gap-0.5 list-none m-0 p-0">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          const isFirst = i === 0

          return (
            <li key={i} className="flex items-center gap-0.5">
              {i > 0 && (
                <span className="text-[var(--color-text-muted)] mx-0.5 select-none">
                  <ChevronIcon />
                </span>
              )}

              {isLast ? (
                <span
                  aria-current="page"
                  className="font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] no-underline transition-colors duration-[var(--duration-micro)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {isFirst && <HomeIcon />}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="inline-flex items-center gap-1 font-[var(--font-body)] text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] bg-transparent border-0 cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]"
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {isFirst && <HomeIcon />}
                  {item.label}
                </button>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
