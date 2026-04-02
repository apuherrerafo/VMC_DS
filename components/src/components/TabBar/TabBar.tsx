export interface TabItem {
  id: string
  label: string
  count?: number
  disabled?: boolean
}

export interface TabBarProps {
  items: TabItem[]
  activeId: string
  onChange: (id: string) => void
  variant?: 'underline' | 'pill'
  className?: string
}

export function TabBar({
  items,
  activeId,
  onChange,
  variant = 'underline',
  className = '',
}: TabBarProps) {
  if (variant === 'pill') {
    return (
      <div
        role="tablist"
        className={['inline-flex gap-1 p-1 rounded-[var(--radius-card)] bg-[var(--color-surface-input)]', className].join(' ')}
      >
        {items.map(item => (
          <button
            key={item.id}
            role="tab"
            type="button"
            id={`tab-${item.id}`}
            aria-selected={item.id === activeId}
            aria-controls={`panel-${item.id}`}
            disabled={item.disabled}
            onClick={() => onChange(item.id)}
            className={[
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-btn)]',
              'font-[var(--font-body)] font-[var(--weight-semibold)]',
              'transition-[background,color,box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'border-0 cursor-pointer outline-none',
              'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
              item.id === activeId
                ? 'bg-[var(--color-surface-card)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)]'
                : 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]',
              item.disabled ? 'opacity-40 cursor-not-allowed' : '',
            ].filter(Boolean).join(' ')}
            style={{ fontSize: 'var(--type-body-sm-size)' }}
          >
            {item.label}
            {item.count !== undefined && (
              <span className={[
                'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold',
                item.id === activeId
                  ? 'bg-[var(--color-action-primary)] text-white'
                  : 'bg-[var(--gray-300)] text-[var(--gray-600)]',
              ].join(' ')}>
                {item.count}
              </span>
            )}
          </button>
        ))}
      </div>
    )
  }

  // Underline variant (default)
  return (
    <div
      role="tablist"
      className={['flex border-b border-[var(--color-border-ghost)]', className].join(' ')}
    >
      {items.map(item => (
        <button
          key={item.id}
          role="tab"
          type="button"
          id={`tab-${item.id}`}
          aria-selected={item.id === activeId}
          aria-controls={`panel-${item.id}`}
          disabled={item.disabled}
          onClick={() => onChange(item.id)}
          className={[
            'inline-flex items-center gap-1.5 px-4 py-2.5 -mb-px',
            'font-[var(--font-body)] font-[var(--weight-semibold)]',
            'transition-[color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'border-b-2 border-transparent',
            'bg-transparent cursor-pointer outline-none',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
            item.id === activeId
              ? 'border-[var(--color-action-primary)] text-[var(--color-action-primary)]'
              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-body)]',
            item.disabled ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        >
          {item.label}
          {item.count !== undefined && (
            <span className={[
              'inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold',
              item.id === activeId
                ? 'bg-[var(--color-action-primary)] text-white'
                : 'bg-[var(--gray-300)] text-[var(--gray-600)]',
            ].join(' ')}>
              {item.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default TabBar
