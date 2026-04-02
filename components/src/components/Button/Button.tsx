import { type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'accent'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  hasLeadingIcon?: ReactNode
  hasTrailingIcon?: ReactNode
  isFullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  children?: ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  className?: string
}

// ── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin shrink-0"
      width="14" height="14" viewBox="0 0 14 14"
      fill="none" aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
      <path d="M12 7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── Estilos por variante ──────────────────────────────────────────────────────

const VARIANT_BASE: Record<ButtonVariant, string> = {
  primary:     'text-[var(--color-text-on-dark)] shadow-[var(--shadow-brand-tinted)]',
  secondary:   'bg-[var(--color-surface-card)] text-[var(--color-action-primary)] border border-[var(--color-action-primary)]',
  tertiary:    'bg-transparent text-[var(--color-action-primary)]',
  destructive: 'bg-[var(--red-500)] text-[var(--color-text-on-dark)]',
  accent:      'bg-[var(--color-action-accent)] text-[var(--neutral-950)]',
}

const VARIANT_HOVER: Record<ButtonVariant, string> = {
  primary:     'hover:brightness-110 active:brightness-95',
  secondary:   'hover:bg-[var(--color-surface-tinted)] active:brightness-95',
  tertiary:    'hover:bg-[var(--color-surface-tinted)] active:bg-[var(--color-surface-section)]',
  destructive: 'hover:brightness-90 active:brightness-80',
  accent:      'hover:brightness-110 active:brightness-95',
}

// ── Estilos por tamaño ───────────────────────────────────────────────────────

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'h-8  px-3 gap-1.5 text-[10px]',
  md: 'h-10 px-4 gap-2   text-[var(--type-label-size)]',
  lg: 'h-12 px-6 gap-2   text-[var(--type-label-size)]',
}

// ── Componente ───────────────────────────────────────────────────────────────

export function Button({
  variant = 'primary',
  size = 'md',
  hasLeadingIcon,
  hasTrailingIcon,
  isFullWidth = false,
  isLoading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  className = '',
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      style={variant === 'primary' ? { background: 'var(--color-surface-hero-gradient)' } : undefined}
      className={[
        // Base
        'inline-flex items-center justify-center',
        'rounded-[var(--radius-btn)]',
        'font-[var(--font-body)]',
        'font-[var(--weight-semibold)]',
        'tracking-[var(--tracking-wider)]',
        'whitespace-nowrap select-none cursor-pointer border-0 outline-none',
        'transition-[filter,background-color,opacity] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
        // Focus visible
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-action-primary)]',
        // Variante
        VARIANT_BASE[variant],
        // Hover/Active (solo si no disabled)
        !isDisabled ? VARIANT_HOVER[variant] : '',
        // Tamaño
        SIZE_CLASSES[size],
        // Full width
        isFullWidth ? 'w-full' : '',
        // Disabled
        isDisabled ? 'opacity-40 cursor-not-allowed' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {isLoading ? <Spinner /> : hasLeadingIcon}
      {children && <span>{children}</span>}
      {!isLoading && hasTrailingIcon}
    </button>
  )
}

export default Button
