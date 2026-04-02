import { useState, useEffect } from 'react'

export type CountdownState = 'default' | 'urgent' | 'expired'

export interface CountdownTimerProps {
  /** Timestamp Unix (ms) o Date en que termina la subasta */
  endsAt: number | Date
  className?: string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getSecondsLeft(endsAt: number | Date): number {
  const end = endsAt instanceof Date ? endsAt.getTime() : endsAt
  return Math.max(0, Math.floor((end - Date.now()) / 1000))
}

function formatTime(seconds: number): string {
  if (seconds <= 0) return '00:00:00'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m, s].map(n => String(n).padStart(2, '0')).join(':')
}

function getState(seconds: number): CountdownState {
  if (seconds <= 0)    return 'expired'
  if (seconds < 3600)  return 'urgent'
  return 'default'
}

// ── Componente ────────────────────────────────────────────────────────────────

export function CountdownTimer({ endsAt, className = '' }: CountdownTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(() => getSecondsLeft(endsAt))

  useEffect(() => {
    if (secondsLeft <= 0) return
    const id = setInterval(() => {
      const s = getSecondsLeft(endsAt)
      setSecondsLeft(s)
      if (s <= 0) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [endsAt])

  const state = getState(secondsLeft)

  const colorClass =
    state === 'expired' ? 'text-[var(--gray-500)]' :
    state === 'urgent'  ? 'text-[var(--color-text-accent)]' :
                          'text-[var(--color-text-on-surface)]'

  return (
    <time
      dateTime={new Date(endsAt instanceof Date ? endsAt : endsAt).toISOString()}
      aria-label={state === 'expired' ? 'Subasta cerrada' : `Cierra en ${formatTime(secondsLeft)}`}
      className={[
        'inline-flex items-center',
        'font-[var(--font-mono)]',
        'text-[var(--type-hero-timer-size)]',
        'font-[var(--type-hero-timer-weight)]',
        'leading-[var(--type-hero-timer-lh)]',
        'tracking-[var(--type-hero-timer-tracking)]',
        'tabular-nums',
        colorClass,
        className,
      ].filter(Boolean).join(' ')}
    >
      {state === 'expired' ? 'CERRADO' : formatTime(secondsLeft)}
    </time>
  )
}

export default CountdownTimer
