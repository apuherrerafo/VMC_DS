import { useId } from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectFieldProps {
  label: string
  options: SelectOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  id?: string
  name?: string
  className?: string
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SelectField({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Seleccionar...',
  hint,
  error,
  disabled = false,
  id: idProp,
  name,
  className = '',
}: SelectFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = hint || error ? `${id}-hint` : undefined
  const hasError = Boolean(error)

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>
      <label
        htmlFor={id}
        className={[
          'font-[var(--font-body)] font-[var(--weight-semibold)] uppercase',
          'text-[var(--color-text-body)]',
          disabled ? 'text-[var(--color-text-disabled)]' : '',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={e => onChange?.(e.target.value)}
          aria-describedby={hintId}
          aria-invalid={hasError || undefined}
          className={[
            'w-full h-10 pl-3 pr-9 appearance-none',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
            'border-0 outline-none cursor-pointer',
            'transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            hasError ? 'shadow-[0_0_0_1.5px_var(--red-500)]' : '',
            disabled ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]">
          <ChevronIcon />
        </span>
      </div>

      {(hint || error) && (
        <p
          id={hintId}
          className={[
            'font-[var(--font-body)]',
            hasError ? 'text-[var(--red-500)]' : 'text-[var(--color-text-muted)]',
          ].join(' ')}
          style={{ fontSize: 'var(--type-label-size)' }}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

export default SelectField
