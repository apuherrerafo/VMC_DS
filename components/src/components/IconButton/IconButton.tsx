import type { ReactNode } from 'react'

export type IconButtonVariant = 'ghost' | 'filled' | 'outline'
export type IconButtonSize    = 'sm' | 'md' | 'lg'

export interface IconButtonProps {
  icon: ReactNode
  label: string           // aria-label — siempre requerido
  variant?: IconButtonVariant
  size?: IconButtonSize
  isActive?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const SIZE: Record<IconButtonSize, string> = {
  sm: 'size-7',
  md: 'size-9',
  lg: 'size-11',
}

const VARIANT: Record<IconButtonVariant, { base: string; active: string }> = {
  ghost: {
    base:   'bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--gray-100)] hover:text-[var(--color-text-body)]',
    active: 'bg-[var(--gray-100)] text-[var(--color-action-primary)]',
  },
  filled: {
    base:   'bg-[var(--color-action-primary)] text-white hover:bg-[var(--color-action-primary-hover)]',
    active: 'bg-[var(--color-action-primary-press)] text-white',
  },
  outline: {
    base:   'bg-transparent text-[var(--color-text-body)] border border-[var(--color-border-ghost)] hover:bg-[var(--gray-50)] hover:border-[var(--gray-300)]',
    active: 'bg-[var(--gray-100)] text-[var(--color-action-primary)] border-[var(--color-action-primary)]',
  },
}

export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  isActive = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: IconButtonProps) {
  const { base, active } = VARIANT[variant]

  return (
    <button
      type={type}
      aria-label={label}
      aria-pressed={isActive || undefined}
      disabled={disabled}
      onClick={onClick}
      className={[
        'inline-flex items-center justify-center shrink-0',
        'rounded-[var(--radius-btn)]',
        'cursor-pointer outline-none',
        'transition-[background,color,border-color,box-shadow] duration-[var(--duration-micro)]',
        'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
        SIZE[size],
        isActive ? active : base,
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
        variant === 'outline' ? '' : 'border-0',
        className,
      ].filter(Boolean).join(' ')}
    >
      {icon}
    </button>
  )
}

export default IconButton
