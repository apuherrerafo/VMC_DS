import type { BadgeType } from '../Badge/Badge'

export interface FilterBarValue {
  search?: string
  tipo?: string
  marca?: string
  precioMin?: string
  precioMax?: string
  status?: BadgeType | ''
}

export interface FilterBarProps {
  value?: FilterBarValue
  onChange?: (value: FilterBarValue) => void
  onReset?: () => void
  className?: string
}

const TIPOS = ['Automóvil', 'Camioneta', 'Camión', 'Bus', 'Moto']
const MARCAS = ['Toyota', 'Hyundai', 'Kia', 'Nissan', 'Ford', 'Chevrolet', 'Volkswagen']
const PRECIOS = [
  { label: 'Hasta S/ 20,000', value: '0-20000' },
  { label: 'S/ 20,000 – 50,000', value: '20000-50000' },
  { label: 'S/ 50,000 – 100,000', value: '50000-100000' },
  { label: 'Más de S/ 100,000', value: '100000-' },
]
const ESTADOS: { label: string; value: BadgeType | '' }[] = [
  { label: 'Todos',       value: ''          },
  { label: 'En vivo',     value: 'live'      },
  { label: 'Próximamente',value: 'upcoming'  },
  { label: 'Negociable',  value: 'negotiable'},
  { label: 'Cerrado',     value: 'closed'    },
]

const SELECT_CLS = [
  'h-9 pl-3 pr-8 appearance-none',
  'rounded-[var(--radius-btn)]',
  'bg-[var(--color-surface-input)]',
  'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
  'border-0 outline-none cursor-pointer',
  'transition-[box-shadow] duration-[var(--duration-micro)]',
  'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
].join(' ')

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
}

export function FilterBar({ value = {}, onChange, onReset, className = '' }: FilterBarProps) {
  const set = (patch: Partial<FilterBarValue>) => onChange?.({ ...value, ...patch })
  const hasFilters = Object.values(value).some(v => v && v !== '')

  return (
    <div className={['flex flex-wrap items-center gap-2 p-3 bg-[var(--color-surface-card)] rounded-[var(--radius-card)] shadow-[var(--shadow-sm)]', className].join(' ')}>

      {/* Search */}
      <div className="relative flex items-center min-w-[180px] flex-1">
        <span className="absolute left-2.5 text-[var(--color-text-muted)] pointer-events-none"><SearchIcon /></span>
        <input
          type="search"
          placeholder="Buscar lote o vehículo..."
          value={value.search ?? ''}
          onChange={e => set({ search: e.target.value })}
          className={[
            'w-full h-9 pl-8 pr-3',
            'rounded-[var(--radius-btn)]',
            'bg-[var(--color-surface-input)]',
            'font-[var(--font-body)] text-[var(--color-text-on-surface)]',
            'border-0 outline-none',
            'placeholder:text-[var(--color-text-muted)]',
            'transition-[box-shadow] duration-[var(--duration-micro)]',
            'focus:shadow-[0_0_0_1.5px_var(--color-border-ghost)]',
            '[&::-webkit-search-cancel-button]:hidden',
          ].join(' ')}
          style={{ fontSize: 'var(--type-body-sm-size)' }}
        />
      </div>

      <div className="h-5 w-px bg-[var(--color-border-ghost)] hidden sm:block" aria-hidden="true" />

      {/* Tipo */}
      <div className="relative">
        <select value={value.tipo ?? ''} onChange={e => set({ tipo: e.target.value })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Tipo</option>
          {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Marca */}
      <div className="relative">
        <select value={value.marca ?? ''} onChange={e => set({ marca: e.target.value })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Marca</option>
          {MARCAS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Precio */}
      <div className="relative">
        <select value={value.precioMin ? `${value.precioMin}-${value.precioMax ?? ''}` : ''} onChange={e => {
          const [min, max] = e.target.value.split('-')
          set({ precioMin: min, precioMax: max })
        }} className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          <option value="">Precio</option>
          {PRECIOS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Estado */}
      <div className="relative">
        <select value={value.status ?? ''} onChange={e => set({ status: e.target.value as BadgeType | '' })}
          className={SELECT_CLS} style={{ fontSize: 'var(--type-body-sm-size)' }}>
          {ESTADOS.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-text-muted)]"><ChevronIcon /></span>
      </div>

      {/* Reset */}
      {hasFilters && (
        <button type="button" onClick={onReset}
          className="h-9 px-3 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] hover:text-[var(--color-text-body)] bg-transparent border-0 cursor-pointer transition-colors duration-[var(--duration-micro)] font-[var(--font-body)]"
          style={{ fontSize: 'var(--type-body-sm-size)' }}>
          Limpiar
        </button>
      )}
    </div>
  )
}

export default FilterBar
