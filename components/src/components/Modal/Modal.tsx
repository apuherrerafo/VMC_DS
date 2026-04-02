import { useEffect, useCallback, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export type ModalSize = 'sm' | 'md' | 'lg'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: ModalSize
  isDismissible?: boolean
  children: ReactNode
  footer?: ReactNode
}

const SIZE_CLASS: Record<ModalSize, string> = {
  sm: 'max-w-[400px]',
  md: 'max-w-[560px]',
  lg: 'max-w-[720px]',
}

export function Modal({
  isOpen,
  onClose,
  title,
  size = 'md',
  isDismissible = true,
  children,
  footer,
}: ModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isDismissible) onClose()
  }, [onClose, isDismissible])

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKey])

  if (!isOpen) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--purple-900)]/60 backdrop-blur-[2px]"
        onClick={isDismissible ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className={[
        'relative w-full flex flex-col',
        SIZE_CLASS[size],
        'bg-[var(--color-surface-card)]',
        'rounded-[var(--radius-card)]',
        'shadow-[var(--shadow-lg)]',
        'max-h-[90dvh]',
      ].join(' ')}>

        {/* Header */}
        {(title || isDismissible) && (
          <div className="flex items-center justify-between px-6 py-4 shrink-0 border-b border-[var(--color-border-ghost)]">
            {title && (
              <h2
                id="modal-title"
                className="font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-primary)]"
                style={{ fontSize: 'var(--type-body-lg-size)' }}
              >
                {title}
              </h2>
            )}
            {isDismissible && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="shrink-0 ml-auto text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)] border-0 bg-transparent cursor-pointer p-1 rounded transition-colors duration-[var(--duration-micro)]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 font-[var(--font-body)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="shrink-0 flex items-center justify-end gap-2 px-6 py-4 border-t border-[var(--color-border-ghost)]">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

export default Modal
