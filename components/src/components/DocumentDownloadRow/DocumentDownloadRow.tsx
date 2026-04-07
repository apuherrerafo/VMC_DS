// DocumentDownloadRow — L2 Componente
// Fila de descarga: ícono de documento + label + botón Descargar.
// VOYAGER.md: Content / DocumentDownloadRow / {State}

import { useState } from 'react'

export type DocumentType = 'pdf' | 'xls' | 'doc' | 'generic'

export interface DocumentDownloadRowProps {
  label: string
  href?: string
  fileType?: DocumentType
  disabled?: boolean
  className?: string
}

function DocIcon({ type }: { type: DocumentType }) {
  const color = {
    pdf:     'var(--red-500)',
    xls:     'var(--color-status-success)',
    doc:     'var(--color-action-primary)',
    generic: 'var(--gray-500)',
  }[type]

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect width="32" height="32" rx="4" fill={color} fillOpacity="0.1" />
      <path
        d="M10 8h8l6 6v12a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
        stroke={color} strokeWidth="1.3" fill="none" strokeLinejoin="round"
      />
      <path d="M18 8v6h6" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M12 17h8M12 20h5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v7M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function DocumentDownloadRow({
  label,
  href,
  fileType = 'generic',
  disabled = false,
  className = '',
}: DocumentDownloadRowProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleDownload = () => {
    if (disabled || state === 'loading') return
    if (href) {
      setState('loading')
      // Simula descarga — en producción sería fetch + blob
      setTimeout(() => {
        window.open(href, '_blank')
        setState('done')
        setTimeout(() => setState('idle'), 3000)
      }, 600)
    }
  }

  return (
    <div
      className={[
        'flex items-center gap-[var(--space-3)] px-[var(--space-4)] py-[var(--space-3)]',
        'bg-[var(--color-surface-section)]',
        'transition-colors duration-[var(--duration-micro)]',
        !disabled ? 'hover:bg-[var(--surface-200)]' : 'opacity-50',
        className,
      ].filter(Boolean).join(' ')}
    >
      {/* Ícono de tipo de documento */}
      <DocIcon type={fileType} />

      {/* Label */}
      <span
        className="flex-1 font-[var(--font-body)] font-[var(--weight-semibold)]"
        style={{
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-tight)',
          color: 'var(--color-text-body)',
        }}
      >
        {label}
      </span>

      {/* Botón descargar */}
      <button
        type="button"
        onClick={handleDownload}
        disabled={disabled || state === 'loading'}
        aria-label={`Descargar ${label}`}
        className={[
          'flex items-center gap-[var(--space-1)] px-[var(--space-3)] py-[var(--space-2)]',
          'rounded-[var(--radius-sm)]',
          'font-[var(--font-body)] font-[var(--weight-semibold)] uppercase',
          'border-0 cursor-pointer',
          'transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]',
          state === 'done'
            ? 'bg-[oklch(0.702_0.165_145.000/0.12)] text-[var(--color-status-success)]'
            : 'bg-[var(--color-surface-input)] text-[var(--color-action-primary)] hover:bg-[oklch(0.335_0.163_289.500/0.08)]',
          (disabled || state === 'loading') ? 'opacity-50 cursor-not-allowed' : '',
        ].filter(Boolean).join(' ')}
        style={{ fontSize: 'var(--font-size-xs)', lineHeight: 'var(--line-height-tight)' }}
      >
        {state === 'loading' ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
            className="animate-spin">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4"
              strokeDasharray="20" strokeDashoffset="10" strokeLinecap="round"/>
          </svg>
        ) : state === 'done' ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <DownloadIcon />
        )}
        {state === 'loading' ? 'Descargando' : state === 'done' ? 'Listo' : 'Descargar'}
      </button>
    </div>
  )
}

export default DocumentDownloadRow
