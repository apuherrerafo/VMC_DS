import { useState, useId, useCallback } from 'react'
import { Button } from '../Button'

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type BidFormState = 'idle' | 'active' | 'confirming' | 'submitting' | 'success' | 'error'

export interface BidFormProps {
  lotId?: string
  /** Oferta mínima requerida */
  minimumBid: number
  /** Última oferta registrada — si existe, minimumBid es el incremento sobre esta */
  currentBid?: number
  currency?: string
  /** Simula el submit — debe retornar una promesa */
  onSubmit?: (amount: number, lotId?: string) => Promise<void>
  disabled?: boolean
  className?: string
}

// ── Formato ───────────────────────────────────────────────────────────────────

function fmt(n: number, currency = 'US$') {
  return `${currency} ${n.toLocaleString('es-PE')}`
}

function parseAmount(raw: string): number {
  return Number(raw.replace(/[^0-9]/g, ''))
}

// ── Ícono check ───────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 10l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Ícono warning ─────────────────────────────────────────────────────────────

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2L14.5 13.5H1.5L8 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 7v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

export function BidForm({
  lotId,
  minimumBid,
  currentBid,
  currency = 'US$',
  onSubmit,
  disabled = false,
  className = '',
}: BidFormProps) {
  const inputId = useId()
  const [raw, setRaw] = useState('')
  const [formState, setFormState] = useState<BidFormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const amount  = parseAmount(raw)
  const isValid = amount >= minimumBid && amount > 0

  // Validación en tiempo real
  const validationMsg = raw.length > 0 && !isValid
    ? amount === 0
      ? 'Ingresa un monto válido.'
      : `La oferta mínima es ${fmt(minimumBid, currency)}.`
    : ''

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, '')
    setRaw(digits)
    if (formState === 'idle') setFormState('active')
  }, [formState])

  const handleSubmitClick = () => {
    if (!isValid) return
    setFormState('confirming')
  }

  const handleConfirm = async () => {
    setFormState('submitting')
    setErrorMsg('')
    try {
      await (onSubmit?.(amount, lotId) ?? new Promise(r => setTimeout(r, 1200)))
      setFormState('success')
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : 'Error al registrar la oferta. Intenta nuevamente.')
      setFormState('error')
    }
  }

  const handleCancel = () => {
    setFormState(raw ? 'active' : 'idle')
  }

  const handleReset = () => {
    setRaw('')
    setErrorMsg('')
    setFormState('idle')
  }

  // ── Estado: éxito ──────────────────────────────────────────────────────────

  if (formState === 'success') {
    return (
      <div className={['flex flex-col items-center gap-3 py-6 px-4 text-center', className].join(' ')}>
        <span className="text-[var(--color-action-accent)]"><CheckIcon /></span>
        <div>
          <p className="m-0 font-[var(--font-body)] font-[var(--weight-bold)] text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            OFERTA REGISTRADA
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
        </div>
        <Button variant="tertiary" size="sm" onClick={handleReset}>
          Nueva oferta
        </Button>
      </div>
    )
  }

  // ── Estado: confirmación ───────────────────────────────────────────────────

  if (formState === 'confirming') {
    return (
      <div className={['flex flex-col gap-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border-ghost)] bg-[var(--color-surface-card)]', className].join(' ')}>
        <div className="text-center">
          <p className="m-0 text-[var(--color-text-muted)] font-[var(--font-body)] uppercase"
            style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}>
            Confirmar oferta
          </p>
          <p className="m-0 mt-1 font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums text-[var(--color-text-primary)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}>
            {fmt(amount, currency)}
          </p>
          <p className="m-0 mt-1 text-[var(--color-text-muted)] font-[var(--font-body)]"
            style={{ fontSize: 'var(--font-size-xs)' }}>
            Esta acción no se puede deshacer.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" isFullWidth onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="accent" size="md" isFullWidth onClick={handleConfirm}>
            CONFIRMAR
          </Button>
        </div>
      </div>
    )
  }

  // ── Estado: idle / active / submitting / error ─────────────────────────────

  const hasError = formState === 'error' || Boolean(validationMsg)
  const errorText = errorMsg || validationMsg

  return (
    <form
      className={['flex flex-col gap-3', className].join(' ')}
      onSubmit={(e) => { e.preventDefault(); handleSubmitClick() }}
      noValidate
    >
      {/* Oferta actual */}
      {currentBid !== undefined && (
        <div className="flex items-center justify-between px-3 py-2 rounded-[var(--radius-btn)] bg-[var(--color-surface-section)]">
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--font-size-2xs)', letterSpacing: 'var(--tracking-wider)' }}>
            Oferta actual
          </span>
          <span className="font-[var(--font-mono)] font-[var(--weight-bold)] tabular-nums text-[var(--color-text-on-surface)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {fmt(currentBid, currency)}
          </span>
        </div>
      )}

      {/* Input de monto */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-body)]"
          style={{ fontSize: 'var(--type-label-size)', letterSpacing: 'var(--tracking-wider)' }}
        >
          Tu oferta
        </label>

        <div className="relative flex items-center">
          {/* Prefijo de moneda */}
          <span
            className="absolute left-3 font-[var(--font-mono)] font-[var(--weight-semibold)] tabular-nums pointer-events-none select-none text-[var(--color-text-muted)]"
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          >
            {currency}
          </span>

          <input
            id={inputId}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={raw ? Number(raw).toLocaleString('es-PE') : ''}
            onChange={handleChange}
            placeholder="0"
            disabled={disabled || formState === 'submitting'}
            aria-invalid={hasError || undefined}
            aria-describedby={`${inputId}-hint`}
            className={[
              'w-full h-14 pl-14 pr-3',
              'rounded-[var(--radius-btn)]',
              'bg-[var(--color-surface-input)]',
              'font-[var(--font-mono)] font-[var(--weight-extrabold)] tabular-nums',
              'text-[var(--color-text-on-surface)]',
              'border-0 outline-none',
              'transition-[box-shadow] duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
              'placeholder:text-[var(--color-text-muted)]',
              hasError
                ? 'shadow-[0_0_0_1.5px_var(--red-500)]'
                : 'focus:shadow-[0_0_0_1.5px_var(--color-action-accent)]',
              disabled ? 'opacity-40 cursor-not-allowed' : '',
            ].filter(Boolean).join(' ')}
            style={{ fontSize: 'var(--type-hero-title-size)', lineHeight: 'var(--type-hero-title-lh)' }}
          />
        </div>

        {/* Hint / error */}
        <div id={`${inputId}-hint`} className="min-h-[16px]">
          {errorText ? (
            <span className="flex items-center gap-1 text-[var(--red-500)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              <WarningIcon />
              {errorText}
            </span>
          ) : (
            <span className="text-[var(--color-text-muted)] font-[var(--font-body)]"
              style={{ fontSize: 'var(--type-label-size)' }}>
              Mínimo: {fmt(minimumBid, currency)}
            </span>
          )}
        </div>
      </div>

      {/* Botón */}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        isFullWidth
        isLoading={formState === 'submitting'}
        disabled={disabled || !isValid}
      >
        REALIZAR OFERTA
      </Button>
    </form>
  )
}

export default BidForm
