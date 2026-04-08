import { useState, type ReactNode } from 'react'

export type AlertType = 'success' | 'error' | 'warning' | 'info'

export interface AlertProps {
  type: AlertType
  message: ReactNode
  isDismissible?: boolean
  hasIcon?: boolean
  className?: string
}

const CONFIG: Record<AlertType, { bg: string; border: string; text: string; icon: ReactNode }> = {
  success: {
    bg:     'var(--color-surface-card)',
    border: 'oklch(0.637 0.207 25.500 / 0)',
    text:   'oklch(0.4 0.15 145)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4"/><path d="M5 8l2 2 4-4" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  error: {
    bg:     'oklch(0.637 0.207 25.500 / 0.08)',
    border: 'oklch(0.637 0.207 25.500 / 0.30)',
    text:   'var(--red-500)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--red-500)" strokeWidth="1.4"/><path d="M8 5v3.5M8 10.5v.5" stroke="var(--red-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  warning: {
    bg:     'oklch(0.784 0.172 68.000 / 0.08)',
    border: 'oklch(0.784 0.172 68.000 / 0.30)',
    text:   'oklch(0.55 0.15 68)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="oklch(0.55 0.15 68)" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 7v2.5M8 11v.5" stroke="oklch(0.55 0.15 68)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  info: {
    bg:     'oklch(0.761 0.130 197.000 / 0.08)',
    border: 'oklch(0.761 0.130 197.000 / 0.30)',
    text:   'var(--color-action-primary)',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--color-action-primary)" strokeWidth="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="var(--color-action-primary)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
}

export function Alert({ type, message, isDismissible = false, hasIcon = true, className = '' }: AlertProps) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const { bg, border, text, icon } = CONFIG[type]

  return (
    <div
      role="alert"
      className={['flex items-start gap-2.5 px-3 py-2.5 rounded-[var(--radius-btn)]', className].join(' ')}
      style={{ background: bg, border: `1px solid ${border}`, color: text }}
    >
      {hasIcon && <span className="shrink-0 mt-0.5">{icon}</span>}
      <span className="flex-1 font-[var(--font-body)]" style={{ fontSize: 'var(--type-body-sm-size)' }}>
        {message}
      </span>
      {isDismissible && (
        <button type="button" onClick={() => setDismissed(true)} aria-label="Cerrar"
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity border-0 bg-transparent cursor-pointer p-0"
          style={{ color: text }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </button>
      )}
    </div>
  )
}

export default Alert
