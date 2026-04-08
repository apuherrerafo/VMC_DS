export type AvatarSize   = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

export interface AvatarProps {
  name: string
  src?: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
}

const SIZE_CLS: Record<AvatarSize, { container: string; text: string; status: string }> = {
  xs: { container: 'size-6',  text: '9px',  status: 'size-1.5 border' },
  sm: { container: 'size-8',  text: '11px', status: 'size-2 border'   },
  md: { container: 'size-10', text: '14px', status: 'size-2.5 border' },
  lg: { container: 'size-12', text: '16px', status: 'size-3 border-2' },
  xl: { container: 'size-16', text: '20px', status: 'size-3.5 border-2'},
}

const STATUS_COLOR: Record<AvatarStatus, string> = {
  online:  'bg-emerald-400',
  offline: 'bg-[var(--gray-300)]',
  busy:    'bg-[var(--red-500)]',
  away:    'bg-[var(--amber-500)]',
}

function getInitials(name: string): string {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

// Genera un color de fondo consistente a partir del nombre
function getAvatarBg(name: string): string {
  const COLORS = [
    'var(--purple-700)', 'var(--cyan-500)', 'oklch(0.55 0.15 145)',
    'oklch(0.55 0.15 30)', 'oklch(0.50 0.13 250)', 'oklch(0.52 0.14 320)',
  ]
  let hash = 0
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffffffff
  return COLORS[Math.abs(hash) % COLORS.length]
}

export function Avatar({ name, src, size = 'md', status, className = '' }: AvatarProps) {
  const { container, text, status: statusCls } = SIZE_CLS[size]

  return (
    <div className={['relative inline-flex shrink-0', className].join(' ')}>
      <div
        className={[
          container,
          'rounded-full overflow-hidden flex items-center justify-center select-none',
          'font-[var(--font-body)] font-[var(--weight-bold)] text-white',
        ].join(' ')}
        style={!src ? { background: getAvatarBg(name), fontSize: text } : undefined}
        aria-label={name}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" draggable={false} />
        ) : (
          getInitials(name)
        )}
      </div>

      {status && (
        <span
          className={[
            'absolute bottom-0 right-0 rounded-full border-white',
            statusCls,
            STATUS_COLOR[status],
          ].join(' ')}
          aria-label={status}
          role="img"
        />
      )}
    </div>
  )
}

export default Avatar
