import { useId } from 'react'

export interface SliderProps {
  label?: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
  formatValue?: (value: number) => string
  disabled?: boolean
  className?: string
}

export interface RangeSliderProps {
  label?: string
  min: number
  max: number
  step?: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  formatValue?: (value: number) => string
  disabled?: boolean
  className?: string
}

const defaultFormat = (v: number) => v.toLocaleString('es-PE')

export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = defaultFormat,
  disabled = false,
  className = '',
}: SliderProps) {
  const id = useId()
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <div className="flex items-center justify-between">
          <label htmlFor={id}
            className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {label}
          </label>
          <span className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {formatValue(value)}
          </span>
        </div>
      )}

      <div className="relative flex items-center h-5">
        {/* Track */}
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]" />
        {/* Fill */}
        <div className="absolute h-1.5 rounded-full bg-[var(--color-action-primary)] left-0"
          style={{ width: `${pct}%` }} />
        {/* Input */}
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={e => onChange(Number(e.target.value))}
          className={[
            'relative w-full h-5 appearance-none bg-transparent cursor-pointer',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            // Thumb styles via Tailwind arbitrary
            '[&::-webkit-slider-thumb]:appearance-none',
            '[&::-webkit-slider-thumb]:size-4',
            '[&::-webkit-slider-thumb]:rounded-full',
            '[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]',
            '[&::-webkit-slider-thumb]:border-2',
            '[&::-webkit-slider-thumb]:border-white',
            '[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]',
            '[&::-webkit-slider-thumb]:transition-transform',
            '[&::-webkit-slider-thumb]:hover:scale-110',
            '[&::-moz-range-thumb]:size-4',
            '[&::-moz-range-thumb]:rounded-full',
            '[&::-moz-range-thumb]:bg-[var(--color-action-primary)]',
            '[&::-moz-range-thumb]:border-2',
            '[&::-moz-range-thumb]:border-white',
            '[&::-moz-range-thumb]:border-solid',
          ].join(' ')}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between">
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(min)}</span>
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(max)}</span>
      </div>
    </div>
  )
}

export function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = defaultFormat,
  disabled = false,
  className = '',
}: RangeSliderProps) {
  const idLow  = useId()
  const idHigh = useId()
  const [low, high] = value
  const pctLow  = ((low  - min) / (max - min)) * 100
  const pctHigh = ((high - min) / (max - min)) * 100

  const THUMB = [
    '[&::-webkit-slider-thumb]:appearance-none',
    '[&::-webkit-slider-thumb]:size-4',
    '[&::-webkit-slider-thumb]:rounded-full',
    '[&::-webkit-slider-thumb]:bg-[var(--color-action-primary)]',
    '[&::-webkit-slider-thumb]:border-2',
    '[&::-webkit-slider-thumb]:border-white',
    '[&::-webkit-slider-thumb]:shadow-[var(--shadow-sm)]',
    '[&::-webkit-slider-thumb]:hover:scale-110',
    '[&::-webkit-slider-thumb]:transition-transform',
    '[&::-moz-range-thumb]:size-4',
    '[&::-moz-range-thumb]:rounded-full',
    '[&::-moz-range-thumb]:bg-[var(--color-action-primary)]',
    '[&::-moz-range-thumb]:border-2',
    '[&::-moz-range-thumb]:border-white',
    '[&::-moz-range-thumb]:border-solid',
  ].join(' ')

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
            style={{ fontSize: 'var(--type-label-size)' }}>
            {label}
          </span>
          <span className="font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums text-[var(--color-text-body)]"
            style={{ fontSize: 'var(--type-body-sm-size)' }}>
            {formatValue(low)} — {formatValue(high)}
          </span>
        </div>
      )}

      <div className="relative flex items-center h-5">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-[var(--gray-200)]" />
        <div className="absolute h-1.5 rounded-full bg-[var(--color-action-primary)]"
          style={{ left: `${pctLow}%`, right: `${100 - pctHigh}%` }} />

        {/* Low thumb */}
        <input id={idLow} type="range" min={min} max={high - step} step={step} value={low} disabled={disabled}
          onChange={e => onChange([Math.min(Number(e.target.value), high - step), high])}
          aria-label={`${label ?? ''} mínimo`}
          className={['absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed', THUMB].join(' ')}
        />
        {/* High thumb */}
        <input id={idHigh} type="range" min={low + step} max={max} step={step} value={high} disabled={disabled}
          onChange={e => onChange([low, Math.max(Number(e.target.value), low + step)])}
          aria-label={`${label ?? ''} máximo`}
          className={['absolute w-full h-5 appearance-none bg-transparent cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed', THUMB].join(' ')}
        />
      </div>

      <div className="flex justify-between">
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(min)}</span>
        <span className="font-[var(--font-body)] text-[var(--color-text-muted)]" style={{ fontSize: 'var(--type-label-size)' }}>{formatValue(max)}</span>
      </div>
    </div>
  )
}

export default Slider
