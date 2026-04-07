// DataQualityBadge — L1 Elemento
// Indica la completitud del expediente de un lote con N dots coloreados.
// VOYAGER.md: Display / DataQualityBadge / {Level}

export type DataQualityLevel = 'high' | 'medium' | 'low'

export interface DataQualityBadgeProps {
  level: DataQualityLevel
  showLabel?: boolean
  disabled?: boolean
  className?: string
}

// Cada nivel define 3 dots: color de cada uno (null = inactivo/gris)
const DOT_CONFIG: Record<DataQualityLevel, (string | null)[]> = {
  high:   ['var(--color-status-success)', 'var(--color-status-success)', 'var(--color-status-success)'],
  medium: ['var(--color-status-success)', 'var(--color-status-warning)', null],
  low:    ['var(--color-status-error)',   null,                          null],
}

const LEVEL_LABEL: Record<DataQualityLevel, string> = {
  high:   'Completo',
  medium: 'Parcial',
  low:    'Incompleto',
}

export function DataQualityBadge({
  level,
  showLabel = true,
  disabled = false,
  className = '',
}: DataQualityBadgeProps) {
  const dots = DOT_CONFIG[level]

  return (
    <div
      className={[
        'inline-flex items-center gap-[var(--space-2)]',
        disabled ? 'opacity-40' : '',
        className,
      ].filter(Boolean).join(' ')}
      role="img"
      aria-label={`Calidad de información: ${LEVEL_LABEL[level]}`}
    >
      {showLabel && (
        <span
          className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase tracking-[var(--tracking-wide)]"
          style={{
            fontSize: 'var(--font-size-xs)',
            lineHeight: 'var(--line-height-tight)',
            color: 'var(--color-text-label)',
          }}
        >
          Calidad de información
        </span>
      )}

      <div className="flex items-center gap-[var(--space-1)]" aria-hidden="true">
        {dots.map((color, i) => (
          <span
            key={i}
            className="shrink-0 rounded-[var(--radius-full)]"
            style={{
              width: '8px',
              height: '8px',
              background: color ?? 'var(--gray-300)',
              transition: `background var(--duration-micro) var(--easing-standard)`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default DataQualityBadge
