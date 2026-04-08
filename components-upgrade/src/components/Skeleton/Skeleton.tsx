export type SkeletonVariant = 'text' | 'rect' | 'circle' | 'card'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: number | string
  height?: number | string
  lines?: number
  className?: string
}

const BASE = 'animate-pulse bg-[var(--gray-200)] rounded-[var(--radius-btn)]'

export function Skeleton({
  variant = 'text',
  width,
  height,
  lines = 1,
  className = '',
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width:  width  !== undefined ? (typeof width  === 'number' ? `${width}px`  : width)  : undefined,
    height: height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined,
  }

  if (variant === 'circle') {
    const size = width ?? height ?? 40
    const px = typeof size === 'number' ? `${size}px` : size
    return (
      <div
        className={['animate-pulse bg-[var(--gray-200)] rounded-full shrink-0', className].join(' ')}
        style={{ width: px, height: px }}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'card') {
    return (
      <div className={['flex flex-col gap-3 p-4 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]', className].join(' ')} aria-hidden="true">
        <div className={`${BASE} h-[132px] w-full rounded-[var(--radius-btn)]`} />
        <div className={`${BASE} h-3 w-3/4`} />
        <div className={`${BASE} h-3 w-1/2`} />
        <div className="flex justify-between mt-1">
          <div className={`${BASE} h-5 w-24`} />
          <div className={`${BASE} h-5 w-16`} />
        </div>
      </div>
    )
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={['flex flex-col gap-2', className].join(' ')} aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={BASE}
            style={{ height: 12, width: i === lines - 1 ? '66%' : '100%' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={[BASE, className].join(' ')}
      style={{ height: style.height ?? (variant === 'rect' ? 40 : 12), width: style.width ?? (variant === 'rect' ? '100%' : '80%') }}
      aria-hidden="true"
    />
  )
}

export default Skeleton
