import { useId } from 'react'

export interface RadioButtonProps {
  label: string
  value: string
  checked?: boolean
  onChange?: (value: string) => void
  disabled?: boolean
  hint?: string
  name?: string
  id?: string
  className?: string
}

export function RadioButton({
  label,
  value,
  checked = false,
  onChange,
  disabled = false,
  hint,
  name,
  id: idProp,
  className = '',
}: RadioButtonProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId

  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      <label
        htmlFor={id}
        className={[
          'inline-flex items-start gap-2.5 cursor-pointer select-none',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
        ].join(' ')}
      >
        <div className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={() => onChange?.(value)}
            className="peer sr-only"
          />
          {/* Custom radio */}
          <div className={[
            'size-4 rounded-full border-2 flex items-center justify-center',
            'transition-[border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]',
            checked
              ? 'border-[var(--color-action-primary)]'
              : 'border-[var(--gray-400)] hover:border-[var(--color-action-primary)]',
          ].join(' ')}
          >
            {checked && (
              <div
                className="size-2 rounded-full"
                style={{ background: 'var(--color-action-primary)' }}
              />
            )}
          </div>
        </div>

        <span
          className="font-[var(--font-body)] text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)', lineHeight: 'var(--type-body-sm-lh)' }}
        >
          {label}
        </span>
      </label>

      {hint && (
        <p className="ml-[26px] m-0 text-[var(--color-text-muted)] font-[var(--font-body)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {hint}
        </p>
      )}
    </div>
  )
}

export default RadioButton
