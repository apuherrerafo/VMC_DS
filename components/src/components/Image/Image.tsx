import { useState } from 'react'

export type ImageRatio = '16/9' | '4/3' | 'phi' | '1/1' | '3/2'

export interface ImageProps {
  src: string
  alt: string
  ratio?: ImageRatio
  fit?: 'cover' | 'contain'
  lazy?: boolean
  className?: string
}

// PHI = 1.618 → padding-top ≈ 61.8%
const RATIO_PADDING: Record<ImageRatio, string> = {
  '16/9': 'pb-[56.25%]',
  '4/3':  'pb-[75%]',
  'phi':  'pb-[61.8%]',
  '1/1':  'pb-[100%]',
  '3/2':  'pb-[66.667%]',
}

function PlaceholderIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[var(--gray-300)]">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 26l8-7 6 6 5-5 13 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

export function Image({
  src,
  alt,
  ratio = '16/9',
  fit = 'cover',
  lazy = true,
  className = '',
}: ImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError]   = useState(false)

  return (
    <div className={['relative w-full overflow-hidden rounded-[var(--radius-btn)] bg-[var(--gray-100)]', RATIO_PADDING[ratio], className].join(' ')}>
      {!error ? (
        <>
          {/* Skeleton shimmer mientras carga */}
          {!loaded && (
            <div className="absolute inset-0 bg-[var(--gray-200)] animate-pulse" aria-hidden="true" />
          )}
          <img
            src={src}
            alt={alt}
            loading={lazy ? 'lazy' : 'eager'}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={[
              'absolute inset-0 w-full h-full transition-opacity duration-[var(--duration-standard)]',
              fit === 'cover' ? 'object-cover' : 'object-contain',
              loaded ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            draggable={false}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--gray-100)]">
          <PlaceholderIcon />
        </div>
      )}
    </div>
  )
}

export default Image
