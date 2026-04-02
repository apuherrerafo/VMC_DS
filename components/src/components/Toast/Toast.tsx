import { useEffect, useState, type ReactNode } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  type: ToastType
  message: ReactNode
  /** Duración en ms — default 4000 */
  duration?: number
  onDismiss?: () => void
}

const ICONS: Record<ToastType, ReactNode> = {
  success: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4"/><path d="M5 8l2 2 4-4" stroke="oklch(0.4 0.15 145)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  error:   <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--red-500)" strokeWidth="1.4"/><path d="M8 5v3.5M8 10.5v.5" stroke="var(--red-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  warning: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="var(--amber-500)" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 7v2.5M8 11v.5" stroke="var(--amber-500)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  info:    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="var(--color-action-primary)" strokeWidth="1.4"/><path d="M8 7.5v4M8 5v.5" stroke="var(--color-action-primary)" strokeWidth="1.4" strokeLinecap="round"/></svg>,
}

export function Toast({ type, message, duration = 4000, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Enter
    const enterTimer = setTimeout(() => setVisible(true), 10)
    // Auto-dismiss
    const exitTimer  = setTimeout(() => { setVisible(false); setTimeout(() => onDismiss?.(), 300) }, duration)
    return () => { clearTimeout(enterTimer); clearTimeout(exitTimer) }
  }, [duration, onDismiss])

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        'flex items-center gap-2.5 px-4 py-3 min-w-[280px] max-w-[400px]',
        'rounded-[var(--radius-btn)]',
        'bg-[var(--color-surface-card)]',
        'shadow-[var(--shadow-lg)]',
        'border border-[var(--color-border-ghost)]',
        'transition-[opacity,transform] duration-[var(--duration-standard)] ease-[var(--easing-standard)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
      ].join(' ')}
    >
      <span className="shrink-0">{ICONS[type]}</span>
      <span className="flex-1 font-[var(--font-body)] text-[var(--color-text-body)]"
        style={{ fontSize: 'var(--type-body-sm-size)' }}>
        {message}
      </span>
      <button type="button" onClick={() => { setVisible(false); setTimeout(() => onDismiss?.(), 300) }}
        aria-label="Cerrar"
        className="shrink-0 text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-0 transition-colors duration-[var(--duration-micro)]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
      </button>
    </div>
  )
}

/** Contenedor posicionado bottom-right para mostrar toasts */
export function ToastContainer({ children }: { children: ReactNode }) {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-[var(--z-toast)]" aria-label="Notificaciones">
      {children}
    </div>
  )
}

export default Toast
