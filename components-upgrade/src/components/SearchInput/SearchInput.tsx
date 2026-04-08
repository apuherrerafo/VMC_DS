import { useState, useId, useRef } from 'react'

export interface SearchInputProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  onClear?: () => void
  disabled?: boolean
  id?: string
  className?: string
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SearchInput({
  placeholder = 'Buscar vehículo o lote...',
  value,
  defaultValue,
  onChange,
  onSearch,
  onClear,
  disabled = false,
  id: idProp,
  className = '',
}: SearchInputProps) {
  const generatedId = useId()
  const id = idProp ?? generatedId
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const inputRef = useRef<HTMLInputElement>(null)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const hasValue = currentValue.length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') onSearch?.(currentValue)
    if (e.key === 'Escape') handleClear()
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue('')
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div className={['relative flex items-center w-full', className].join(' ')}>
      {/* Leading search icon */}
      <span className="absolute left-3 text-[var(--color-text-muted)] pointer-events-none">
        <SearchIcon />
      </span>

      <input
        ref={inputRef}
        id={id}
        type="search"
        value={currentValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        className={[
          'w-full h-10 pl-9 pr-3',
          hasValue ? 'pr-9' : 'pr-3',
          'rounded-[var(--radius-btn)]',
          'bg-[var(--color-surface-input)]',
          'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
          'border-0 outline-none',
          'transition-[box-shadow,background-color] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
          'placeholder:text-[var(--color-text-muted)]',
          'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
          // Ocultar el botón nativo de clear del browser
          '[&::-webkit-search-cancel-button]:hidden',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--type-body-sm-size)' }}
      />

      {/* Trailing clear button */}
      {hasValue && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Limpiar búsqueda"
          className={[
            'absolute right-3',
            'size-5 flex items-center justify-center',
            'rounded-full border-0 cursor-pointer',
            'text-[var(--color-text-muted)] hover:text-[var(--color-text-on-surface)]',
            'bg-[var(--gray-300)] hover:bg-[var(--gray-400)]',
            'transition-colors duration-[var(--duration-micro)]',
            'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-action-primary)]',
          ].join(' ')}
        >
          <ClearIcon />
        </button>
      )}
    </div>
  )
}

export default SearchInput
