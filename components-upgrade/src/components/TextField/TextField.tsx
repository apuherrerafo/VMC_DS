import { type ReactNode, useId } from 'react'

export type TextFieldVariant = 'default' | 'withLeadingIcon' | 'withTrailingAction'

export interface TextFieldProps {
  label: string
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  variant?: TextFieldVariant
  leadingIcon?: ReactNode
  trailingAction?: ReactNode
  hint?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  type?: React.HTMLInputTypeAttribute
  id?: string
  name?: string
  className?: string
}

export function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  leadingIcon,
  trailingAction,
  hint,
  error,
  disabled = false,
  readOnly = false,
  type = 'text',
  id: idProp,
  name,
  className = '',
}: TextFieldProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const hintId = hint || error ? `${id}-hint` : undefined

  const hasError = Boolean(error)
  const isReadOnly = readOnly && !disabled

  return (
    <div className={['flex flex-col gap-1.5 w-full', className].join(' ')}>

      {/* Label */}
      <label
        htmlFor={id}
        className={[
          'text-[var(--type-label-size)] font-[var(--type-label-weight)] leading-[var(--type-label-lh)] tracking-[var(--type-label-tracking)]',
          'font-[var(--font-body)]',
          disabled
            ? 'text-[var(--color-text-disabled)]'
            : 'text-[var(--color-text-body)]',
        ].join(' ')}
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative flex items-center">

        {/* Leading icon */}
        {(variant === 'withLeadingIcon' && leadingIcon) && (
          <span
            aria-hidden="true"
            className="absolute left-3 flex items-center pointer-events-none text-[var(--color-text-muted)]"
          >
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={isReadOnly}
          aria-describedby={hintId}
          aria-invalid={hasError || undefined}
          className={[
            // Base
            'w-full h-10',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)]',
            'text-[var(--type-body-sm-size)] leading-[var(--type-body-sm-lh)]',
            'text-[var(--color-text-on-surface)]',
            'border-0 outline-none',
            'transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            // Placeholder
            'placeholder:text-[var(--color-text-muted)]',
            // Padding — ajusta según variante
            variant === 'withLeadingIcon'    ? 'pl-9 pr-3'  :
            variant === 'withTrailingAction' ? 'pl-3 pr-10' : 'px-3',
            // Focus — ghost border
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            // Error
            hasError
              ? 'shadow-[0_0_0_1.5px_var(--red-500)] focus:shadow-[0_0_0_1.5px_var(--red-500)]'
              : '',
            // Read-only
            isReadOnly ? 'bg-[var(--gray-100)] cursor-default' : '',
            // Disabled
            disabled   ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
        />

        {/* Trailing action */}
        {(variant === 'withTrailingAction' && trailingAction) && (
          <span className="absolute right-3 flex items-center">
            {trailingAction}
          </span>
        )}
      </div>

      {/* Hint / Error */}
      {(hint || error) && (
        <p
          id={hintId}
          className={[
            'text-[var(--type-label-size)] leading-[var(--type-label-lh)]',
            'font-[var(--font-body)]',
            hasError
              ? 'text-[var(--red-500)]'
              : 'text-[var(--color-text-muted)]',
          ].join(' ')}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  )
}

export default TextField
