import type { ReactNode } from 'react'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps {
  orientation?: DividerOrientation
  label?: ReactNode
  className?: string
}

export function Divider({ orientation = 'horizontal', label, className = '' }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={['self-stretch w-px bg-[var(--color-border-ghost)] shrink-0', className].join(' ')}
      />
    )
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={['flex items-center gap-3', className].join(' ')}
      >
        <div className="flex-1 h-px bg-[var(--color-border-ghost)]" />
        <span className="shrink-0 font-[var(--font-body)] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border-ghost)]" />
      </div>
    )
  }

  return (
    <hr
      role="separator"
      className={['border-0 border-t border-[var(--color-border-ghost)] w-full', className].join(' ')}
    />
  )
}

export default Divider
