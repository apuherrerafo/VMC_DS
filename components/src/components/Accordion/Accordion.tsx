import { useState, useId, type ReactNode } from 'react'

export interface AccordionItem {
  id?: string
  title: string
  content: ReactNode
  defaultOpen?: boolean
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

function AccordionPanel({
  id,
  title,
  content,
  isOpen,
  onToggle,
  disabled = false,
}: {
  id: string
  title: string
  content: ReactNode
  isOpen: boolean
  onToggle: () => void
  disabled?: boolean
}) {
  return (
    <div className="border-b border-[var(--color-border-ghost)] last:border-b-0">
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        disabled={disabled}
        onClick={onToggle}
        className={[
          'w-full flex items-center justify-between px-4 py-3.5 gap-3',
          'bg-transparent border-0 cursor-pointer text-left outline-none',
          'font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]',
          'transition-colors duration-[var(--duration-micro)]',
          'hover:bg-[var(--gray-50)]',
          'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-action-primary)]',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        <span>{title}</span>
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
          className={['shrink-0 text-[var(--color-text-muted)] transition-transform duration-[var(--duration-standard)]', isOpen ? 'rotate-180' : ''].join(' ')}
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!isOpen}
        className="px-4 pb-4 font-[var(--font-body)] text-[var(--color-text-body)]"
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      >
        {content}
      </div>
    </div>
  )
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
  const baseId = useId()

  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    items.forEach((item, i) => {
      if (item.defaultOpen) initial.add(item.id ?? `${baseId}-${i}`)
    })
    return initial
  })

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div
      className={[
        'bg-[var(--color-surface-card)] rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] overflow-hidden',
        className,
      ].join(' ')}
    >
      {items.map((item, i) => {
        const id = item.id ?? `${baseId}-${i}`
        return (
          <AccordionPanel
            key={id}
            id={id}
            title={item.title}
            content={item.content}
            isOpen={openIds.has(id)}
            onToggle={() => toggle(id)}
            disabled={item.disabled}
          />
        )
      })}
    </div>
  )
}

export default Accordion
