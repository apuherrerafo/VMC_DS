import { useId } from 'react'

export interface CheckboxProps {
  label: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  hint?: string
  id?: string
  name?: string
  className?: string
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  hint,
  id: idProp,
  name,
  className = '',
}: CheckboxProps) {
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
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={e => onChange?.(e.target.checked)}
            className="peer sr-only"
          />
          {/* Custom checkbox */}
          <div className={[
            'size-4 rounded-[var(--radius-sm)] border-2 flex items-center justify-center',
            'transition-[background-color,border-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--color-action-primary)]',
            'peer-checked:bg-[var(--color-action-primary)] peer-checked:border-[var(--color-action-primary)]',
            'peer-not-checked:bg-transparent peer-not-checked:border-[var(--gray-400)] hover:peer-not-checked:border-[var(--color-action-primary)]',
            'border-[var(--gray-400)]',
          ].join(' ')}
          >
            <span className="hidden peer-checked:flex text-white" style={{ display: 'none' }}>
              <CheckIcon />
            </span>
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

export default Checkbox
