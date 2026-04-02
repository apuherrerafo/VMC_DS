import type { BadgeType } from '../Badge/Badge'

export interface AuctionStatusBannerProps {
  status: BadgeType
  lotId?: string
  lotTitle?: string
  /** ISO string or timestamp — shown when status is 'live' or 'upcoming' */
  endsAt?: number | Date
  className?: string
}

const CONFIG: Record<BadgeType, { bg: string; text: string; label: string; dot?: boolean }> = {
  live:       { bg: 'var(--color-brand-live)',    text: 'var(--purple-900)', label: 'EN VIVO',      dot: true },
  upcoming:   { bg: 'var(--color-action-primary)', text: 'white',            label: 'PRÓXIMAMENTE'           },
  negotiable: { bg: 'var(--cyan-500)',             text: 'var(--purple-900)', label: 'NEGOCIABLE'            },
  closed:     { bg: 'var(--gray-400)',             text: 'white',            label: 'CERRADO'               },
  new:        { bg: 'var(--purple-700)',           text: 'white',            label: 'NUEVO'                 },
  featured:   { bg: 'var(--purple-900)',           text: 'white',            label: 'DESTACADO'             },
}

function pad(n: number) { return String(n).padStart(2, '0') }
function formatDuration(ms: number) {
  if (ms <= 0) return '00:00:00'
  const s = Math.floor(ms / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return `${pad(h)}:${pad(m)}:${pad(sec)}`
}

import { useState, useEffect } from 'react'

export function AuctionStatusBanner({
  status,
  lotId,
  lotTitle,
  endsAt,
  className = '',
}: AuctionStatusBannerProps) {
  const { bg, text, label, dot } = CONFIG[status]

  const [remaining, setRemaining] = useState(() =>
    endsAt ? Math.max(0, Number(endsAt instanceof Date ? endsAt : new Date(endsAt)) - Date.now()) : 0
  )

  useEffect(() => {
    if (!endsAt || status === 'closed') return
    const interval = setInterval(() => {
      setRemaining(Math.max(0, Number(endsAt instanceof Date ? endsAt : new Date(endsAt)) - Date.now()))
    }, 1000)
    return () => clearInterval(interval)
  }, [endsAt, status])

  return (
    <div
      role="status"
      aria-live="polite"
      className={['flex items-center gap-3 px-4 py-2.5', className].join(' ')}
      style={{ background: bg, color: text }}
    >
      {/* Status badge */}
      <div className="flex items-center gap-1.5 shrink-0">
        {dot && (
          <span className="size-2 rounded-full bg-current animate-pulse" aria-hidden="true" />
        )}
        <span className="font-[var(--font-body)] font-[var(--weight-bold)] uppercase tracking-[var(--tracking-wider)]"
          style={{ fontSize: 'var(--type-label-size)' }}>
          {label}
        </span>
      </div>

      {lotId && (
        <>
          <span className="opacity-40 select-none" aria-hidden="true">|</span>
          <span className="font-[var(--font-body)] opacity-70 shrink-0"
            style={{ fontSize: 'var(--type-label-size)' }}>
            Lote #{lotId}
          </span>
        </>
      )}

      {lotTitle && (
        <span className="font-[var(--font-body)] font-[var(--weight-semibold)] truncate flex-1"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {lotTitle}
        </span>
      )}

      {endsAt && status !== 'closed' && (
        <span
          className="ml-auto shrink-0 font-[var(--font-mono)] font-[var(--weight-medium)] tabular-nums"
          style={{ fontSize: 'var(--type-body-sm-size)' }}
          aria-label={`Tiempo restante: ${formatDuration(remaining)}`}
        >
          {formatDuration(remaining)}
        </span>
      )}
    </div>
  )
}

export default AuctionStatusBanner
