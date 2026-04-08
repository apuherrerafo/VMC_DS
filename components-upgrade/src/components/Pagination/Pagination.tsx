export interface PaginationProps {
  currentPage: number
  totalPages: number
  onChange: (page: number) => void
  /** Max page buttons visible (excluding prev/next) — default 5 */
  maxVisible?: number
  className?: string
}

function getPages(current: number, total: number, maxVisible: number): (number | '...')[] {
  if (total <= maxVisible) return Array.from({ length: total }, (_, i) => i + 1)

  const half = Math.floor(maxVisible / 2)
  let start = Math.max(2, current - half)
  let end   = Math.min(total - 1, current + half)

  if (current - half <= 2) end = Math.min(total - 1, maxVisible - 1)
  if (current + half >= total - 1) start = Math.max(2, total - maxVisible + 2)

  const pages: (number | '...')[] = [1]
  if (start > 2) pages.push('...')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('...')
  pages.push(total)
  return pages
}

const BTN_BASE = [
  'inline-flex items-center justify-center min-w-[36px] h-9 px-2',
  'rounded-[var(--radius-btn)]',
  'font-[var(--font-body)] font-[var(--weight-semibold)]',
  'border-0 cursor-pointer outline-none',
  'transition-[background,color,box-shadow] duration-[var(--duration-micro)]',
  'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
].join(' ')

export function Pagination({
  currentPage,
  totalPages,
  onChange,
  maxVisible = 5,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = getPages(currentPage, totalPages, maxVisible)

  return (
    <nav role="navigation" aria-label="Paginación" className={['flex items-center gap-1', className].join(' ')}>
      {/* Prev */}
      <button
        type="button"
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={[
          BTN_BASE,
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent'
            : 'text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
        ].join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pages */}
      {pages.map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`}
            className="inline-flex items-center justify-center min-w-[36px] h-9 text-[var(--color-text-muted)] font-[var(--font-body)] select-none"
            style={{ fontSize: 'var(--type-body-sm-size)' }}
            aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onChange(page)}
            aria-label={`Página ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
            className={[
              BTN_BASE,
              page === currentPage
                ? 'bg-[var(--color-action-primary)] text-white shadow-[var(--shadow-sm)]'
                : 'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
            ].join(' ')}
            style={{ fontSize: 'var(--type-body-sm-size)' }}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className={[
          BTN_BASE,
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed text-[var(--color-text-muted)] bg-transparent'
            : 'text-[var(--color-text-muted)] bg-transparent hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
        ].join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 11l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}

export default Pagination
