export interface VehicleSpec {
  icon: 'year' | 'km' | 'fuel' | 'transmission' | 'color' | 'engine' | 'doors' | 'vin'
  label: string
  value: string
}

import type React from 'react'

export interface VehicleSpecsRowProps {
  specs: VehicleSpec[]
  className?: string
}

const ICONS: Record<VehicleSpec['icon'], React.ReactElement> = {
  year: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1.5 5.5h11" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  km: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 7l3-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="7" cy="7" r="1" fill="currentColor"/>
    </svg>
  ),
  fuel: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 12V3a1 1 0 011-1h4a1 1 0 011 1v4l2-1v4a1 1 0 01-1 1H3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M3 7h5" stroke="currentColor" strokeWidth="1.3"/>
    </svg>
  ),
  transmission: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="3" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="11" cy="3" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="7" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M3 4.5v3M11 4.5v3M3 7.5L7 9.5M11 7.5L7 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  color: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 10v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  engine: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M1 6h2M11 6h2M5 4V2M9 4V2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  doors: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="3" y="1.5" width="8" height="11" rx="1" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="9.5" cy="7" r="0.8" fill="currentColor"/>
    </svg>
  ),
  vin: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M4 6h6M4 8.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
}

export function VehicleSpecsRow({ specs, className = '' }: VehicleSpecsRowProps) {
  return (
    <div className={['flex flex-wrap gap-x-6 gap-y-3', className].join(' ')}>
      {specs.map((spec) => (
        <div key={spec.icon + spec.label} className="flex items-center gap-2">
          <span className="text-[var(--color-text-muted)] shrink-0">
            {ICONS[spec.icon]}
          </span>
          <div className="flex flex-col leading-none gap-0.5">
            <span
              className="font-[var(--font-body)] font-[var(--weight-semibold)] uppercase text-[var(--color-text-muted)] tracking-[var(--tracking-wider)]"
              style={{ fontSize: '9px' }}
            >
              {spec.label}
            </span>
            <span
              className={[
                'font-[var(--font-body)] font-[var(--weight-semibold)] text-[var(--color-text-body)]',
                spec.icon === 'vin' ? 'font-[var(--font-mono)]' : '',
              ].filter(Boolean).join(' ')}
              style={{ fontSize: 'var(--type-body-sm-size)' }}
            >
              {spec.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VehicleSpecsRow
