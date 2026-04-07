import { useState, useRef, useEffect, useId, type ReactNode } from 'react'

export interface DropdownItem {
  id: string
  label: string
  icon?: ReactNode
  shortcut?: string
  disabled?: boolean
  danger?: boolean
  dividerAfter?: boolean
}

export interface DropdownProps {
  trigger: ReactNode
  items: DropdownItem[]
  onSelect?: (id: string) => void
  align?: 'left' | 'right'
  className?: string
}

export function Dropdown({ trigger, items, onSelect, align = 'left', className = '' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)
  const menuId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  const enabledItems = items.filter(i => !i.disabled)

  useEffect(() => {
    if (!open) { setActiveIdx(-1); return }
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault(); setOpen(true); setActiveIdx(0)
      }
      return
    }
    if (e.key === 'Escape') { setOpen(false); return }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIdx(i => Math.min(i + 1, enabledItems.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx(i => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault()
      const item = enabledItems[activeIdx]
      if (item) { onSelect?.(item.id); setOpen(false) }
    }
  }

  useEffect(() => {
    if (open && activeIdx >= 0) itemRefs.current[activeIdx]?.focus()
  }, [open, activeIdx])

  return (
    <div ref={containerRef} className={['relative inline-block', className].join(' ')} onKeyDown={handleKeyDown}>
      {/* Trigger */}
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(o => !o)}
        className="outline-none cursor-pointer"
      >
        {trigger}
      </div>

      {/* Menu */}
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          className={[
            'absolute top-full mt-1 z-[var(--z-dropdown)]',
            'min-w-[180px] py-1',
            'bg-[var(--color-surface-card)]',
            'rounded-[var(--radius-card)]',
            'shadow-[var(--shadow-lg)]',
            'border border-[var(--color-border-ghost)]',
            align === 'right' ? 'right-0' : 'left-0',
          ].join(' ')}
        >
          {items.map((item, i) => {
            const enabledIdx = enabledItems.indexOf(item)
            return (
              <div key={item.id}>
                <button
                  ref={el => { if (!item.disabled) itemRefs.current[enabledIdx] = el }}
                  type="button"
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => { if (!item.disabled) { onSelect?.(item.id); setOpen(false) } }}
                  className={[
                    'w-full flex items-center gap-2.5 px-3 py-2 text-left',
                    'font-[var(--font-body)] border-0 bg-transparent cursor-pointer outline-none',
                    'transition-colors duration-[var(--duration-micro)]',
                    item.danger
                      ? 'text-[var(--red-500)] hover:bg-[oklch(0.637_0.207_25.500_/_0.06)] focus:bg-[oklch(0.637_0.207_25.500_/_0.06)]'
                      : 'text-[var(--color-text-body)] hover:bg-[var(--gray-50)] focus:bg-[var(--gray-50)]',
                    item.disabled ? 'opacity-40 cursor-not-allowed' : '',
                  ].filter(Boolean).join(' ')}
                  style={{ fontSize: 'var(--type-body-sm-size)' }}
                >
                  {item.icon && (
                    <span className="shrink-0 text-[var(--color-text-muted)]">{item.icon}</span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.shortcut && (
                    <span className="shrink-0 font-[var(--font-mono)] text-[var(--color-text-muted)]"
                      style={{ fontSize: '10px' }}>
                      {item.shortcut}
                    </span>
                  )}
                </button>
                {item.dividerAfter && i < items.length - 1 && (
                  <div className="my-1 border-t border-[var(--color-border-ghost)]" role="separator" />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown
