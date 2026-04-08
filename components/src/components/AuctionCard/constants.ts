import type { BadgeType } from '../Badge'
import type { LotData } from './types'

// ── Dimensiones pixel-perfect — Figma node 268:1601 ──────────────────────────
// Toda dimensión fija viene de Figma. No modificar sin revisar el nodo.

export const CARD_WIDTH          = '160px'
export const CARD_HEIGHT         = '236px'  // Normalizado (4 x 59)
export const IMAGE_HEIGHT        = '120px'
export const CONTENT_HEIGHT      = '116px'  // Normalizado (236 - 120)
export const INNER_WIDTH         = '136px'
export const INNER_HEIGHT        = '92px'   // Normalizado
export const HEART_SIZE          = '28px'
export const HEART_LEFT          = '120px'
export const HEART_BOTTOM        = '16px'   // Alineado al centro del priceBlock (bottom: 12px + mitad de altura)
export const ACCENT_BORDER_WIDTH = '3px'

// ── Accent border inferior por estado de badge ────────────────────────────────
// Figma: borde inferior comunica el estado del lote

export const ACCENT_BORDER: Record<BadgeType, string> = {
  live:       'var(--color-border-card-accent-auction)',    // orange-500
  negotiable: 'var(--color-border-card-accent-negotiable)', // cyan-400
  upcoming:   'var(--color-action-primary)',                // purple-600
  new:        'var(--color-action-primary)',                // purple-600
  featured:   'var(--color-text-on-surface)',               // neutral-950
  closed:     'var(--color-border-default)',                // gray-300
}

// ── Lote de demostración (para Docs y previews) ───────────────────────────────

export const DEFAULT_LOT: LotData = {
  title:      'TOYOTA HILUX',
  year:       2024,          // preferir year + location sobre subtitle (deprecado)
  location:   'Lima, Perú',
  badge:      'live',
  priceLabel: 'PRECIO BASE',
  price:      17999,
  currency:   'US$',
  endsAt:     Date.now() + 45 * 60 * 1000,
}
