import { useState } from 'react'

export interface GalleryImage {
  src: string
  alt: string
}

export interface VehicleImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function VehicleImageGallery({ images, className = '' }: VehicleImageGalleryProps) {
  const [active, setActive] = useState(0)

  if (images.length === 0) {
    return (
      <div className={['flex items-center justify-center bg-[var(--gray-100)] rounded-[var(--radius-card)] aspect-[4/3]', className].join(' ')}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-[var(--gray-300)]">
          <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <circle cx="16" cy="19" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 34l10-10 8 8 6-6 16 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
    )
  }

  const prev = () => setActive(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActive(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className={['flex flex-col gap-2', className].join(' ')}>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--gray-100)] aspect-[4/3]">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Counter */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[var(--purple-900)]/60 backdrop-blur-[4px]">
          <span className="font-[var(--font-body)] text-white" style={{ fontSize: '11px' }}>
            {active + 1} / {images.length}
          </span>
        </div>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button" onClick={prev} aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              type="button" onClick={next} aria-label="Siguiente imagen"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 flex items-center justify-center rounded-full bg-[var(--purple-900)]/50 backdrop-blur-[4px] text-white border-0 cursor-pointer hover:bg-[var(--purple-900)]/75 transition-colors duration-[var(--duration-micro)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 11l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-0.5" role="tablist" aria-label="Miniaturas">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={img.alt}
              onClick={() => setActive(i)}
              className={[
                'shrink-0 size-14 rounded-[var(--radius-btn)] overflow-hidden border-2 cursor-pointer transition-[border-color,opacity] duration-[var(--duration-micro)]',
                i === active
                  ? 'border-[var(--color-action-primary)] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-90',
              ].join(' ')}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default VehicleImageGallery
