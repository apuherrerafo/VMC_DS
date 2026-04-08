import type { BadgeType } from '../Badge'

// ── Variantes del componente ──────────────────────────────────────────────────

export type AuctionCardVariant = 'standard' | 'featured' | 'compact'

// ── Datos del lote ────────────────────────────────────────────────────────────

export interface LotData {
  id?: string
  /** Marca + Modelo del vehículo — ej: "TOYOTA HILUX". El componente lo renderiza en uppercase. */
  title: string
  /**
   * Subtítulo compuesto — legado.
   * Preferir `year` + `location` por separado para mapear directo desde el API.
   * Si se proveen `year` o `location`, `subtitle` es ignorado.
   * @deprecated usar year + location
   */
  subtitle?: string
  /** Año del vehículo — ej: 2024 */
  year?: number | string
  /** Ubicación — ej: "Lima, Perú" */
  location?: string
  imageUrl?: string
  badge: BadgeType
  /**
   * Etiqueta del precio según badge:
   * - live       → "PRECIO BASE"
   * - negotiable → "OFERTA ACTUAL"
   * - upcoming   → "PRECIO BASE"
   * - closed     → "PRECIO FINAL"
   */
  priceLabel?: string
  /** Precio numérico — ej: 17999 */
  price: number
  /** Moneda — ej: "US$" */
  currency?: string
  /** Timestamp ms — usado solo en variante original (countdown) */
  endsAt?: number | Date
  /** true si el usuario ya tiene este lote en favoritos */
  isFavorited?: boolean
}

// ── Props del componente original ─────────────────────────────────────────────

export interface AuctionCardProps {
  variant?: AuctionCardVariant
  lot?: LotData
  isLoading?: boolean
  onFavorite?: (id: string | undefined) => void
  onClick?: (id: string | undefined) => void
  className?: string
}

// ── Props exclusivas del upgrade ──────────────────────────────────────────────

export interface AuctionCardUpgradeProps {
  lot: LotData
  isLoading?: boolean
  /** id siempre es string — el feature component garantiza que apiLot.id existe antes de renderizar */
  onFavorite?: (id: string) => void
  onClick?: (id: string) => void
  className?: string
}
