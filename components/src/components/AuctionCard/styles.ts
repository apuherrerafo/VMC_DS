import type { CSSProperties } from 'react'
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  IMAGE_HEIGHT,
  CONTENT_HEIGHT,
  HEART_SIZE,
  HEART_LEFT,
  HEART_BOTTOM,
  ACCENT_BORDER_WIDTH,
} from './constants'

// ── Card contenedor ───────────────────────────────────────────────────────────
// Figma node 268:1601 — 160×235px, radius 4px, shadow brand-tinted

export const cardBase: CSSProperties = {
  width:         CARD_WIDTH,
  height:        CARD_HEIGHT,
  borderRadius:  'var(--radius-card)',
  overflow:      'hidden',
  background:    'var(--color-surface-card)',
  boxShadow:     'var(--shadow-card)',
  display:       'flex',
  flexDirection: 'column',
  flexShrink:    0,
  position:      'relative',
  transition:    `box-shadow var(--duration-standard) var(--easing-standard)`,
}

export const cardClickable: CSSProperties = {
  cursor: 'pointer',
}

// ── Zona imagen ───────────────────────────────────────────────────────────────
// Figma node 268:1602 — 160×120px, overflow clip

export const imageWrapper: CSSProperties = {
  width:      CARD_WIDTH,
  height:     IMAGE_HEIGHT,
  flexShrink: 0,
  overflow:   'hidden',
  background: 'var(--color-surface-section)',
}

// Figma: imagen ocupa 133% de altura con offset -16.67% para centrar el crop
export const imageEl: CSSProperties = {
  width:     '100%',
  height:    '133%',
  objectFit: 'cover',
  marginTop: '-16.67%',
  display:   'block',
}

export const imagePlaceholder: CSSProperties = {
  width:          '100%',
  height:         '100%',
  background:     'var(--color-surface-hero-gradient)',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
}

// ── Zona contenido ────────────────────────────────────────────────────────────
// Figma node 268:1604 — 160×115px
// Figma node 268:1605 — inner 136×91px, left:12 top:12

export const contentWrapper: CSSProperties = {
  width:      CARD_WIDTH,
  height:     CONTENT_HEIGHT,
  flexShrink: 0,
  padding:    'var(--spacing-card-padding)',
  boxSizing:  'border-box',
  position:   'relative',
}

// ── Tipografía — Título ───────────────────────────────────────────────────────
// Figma node 268:1610 — Plus Jakarta Sans ExtraBold 11px/16px, color #3b1782, uppercase

export const titleText: CSSProperties = {
  margin:        0,
  fontFamily:    'var(--font-body)',
  fontWeight:    'var(--weight-extrabold)',
  fontSize:      'var(--type-card-title-size)',
  lineHeight:    'var(--type-card-title-lh)',
  letterSpacing: 'var(--type-card-title-tracking)',
  textTransform: 'uppercase',
  color:         'var(--color-text-primary)',
  overflow:      'hidden',
  textOverflow:  'ellipsis',
  whiteSpace:    'nowrap',
}

// ── Tipografía — Subtítulo ────────────────────────────────────────────────────
// Figma node 268:1613 — Roboto Regular 12px/16px → Plus Jakarta Sans (CLAUDE.md)
// color #3b1782 → color-text-body (info secundaria)

export const subtitleText: CSSProperties = {
  margin:        0,
  fontFamily:    'var(--font-body)',
  fontWeight:    'var(--weight-regular)',
  fontSize:      'var(--font-size-xs-11)',
  lineHeight:    'var(--line-height-2xs)',
  color:         'var(--color-text-body)',
  textTransform: 'uppercase',
  overflow:      'hidden',
  textOverflow:  'ellipsis',
  whiteSpace:    'nowrap',
}

// ── Zona precio ───────────────────────────────────────────────────────────────
// Figma node 268:1615 — h:31, top:26 dentro del inner (top:43 desde content top)

export const priceBlock: CSSProperties = {
  position: 'absolute',
  bottom:   'var(--spacing-card-padding)',
  left:     'var(--spacing-card-padding)',
}

// Figma node 268:1618 — Plus Jakarta Sans SemiBold 10px/16px, color #99a1af
export const priceLabelText: CSSProperties = {
  margin:        0,
  fontFamily:    'var(--font-body)',
  fontWeight:    'var(--weight-semibold)',
  fontSize:      'var(--font-size-2xs)',
  lineHeight:    'var(--line-height-2xs)',
  letterSpacing: 'var(--tracking-micro)',
  color:         'var(--color-text-price-label)',
  textTransform: 'uppercase',
  whiteSpace:    'nowrap',
}

// Figma node 268:1620 — Plus Jakarta Sans Bold 12px/20px, color #3b1782
export const priceValueText: CSSProperties = {
  margin:         0,
  fontFamily:     'var(--font-body)',
  fontWeight:     'var(--weight-bold)',
  fontSize:       'var(--font-size-xs)',
  lineHeight:     'var(--line-height-tight)',
  color:          'var(--color-text-primary)',
  fontVariantNumeric: 'tabular-nums',
  whiteSpace:     'nowrap',
}

// ── Botón favorito ────────────────────────────────────────────────────────────
// Figma node 268:1621 — 29×29px, circular, left:110 top:45 dentro del inner

export const heartButtonBase: CSSProperties = {
  position:       'absolute',
  left:           HEART_LEFT,
  bottom:         HEART_BOTTOM,
  width:          HEART_SIZE,
  height:         HEART_SIZE,
  borderRadius:   'var(--radius-icon-btn)',
  border:         'none',
  display:        'flex',
  alignItems:     'center',
  justifyContent: 'center',
  cursor:         'pointer',
  transition:     `all var(--duration-micro) var(--easing-standard)`,
}

export const heartButtonDefault: CSSProperties = {
  ...heartButtonBase,
  background: 'var(--color-surface-icon-subtle)',
}

export const heartButtonActive: CSSProperties = {
  ...heartButtonBase,
  background: 'var(--color-action-primary)',
}

// ── Skeleton ──────────────────────────────────────────────────────────────────

export const skeletonCard: CSSProperties = {
  width:        CARD_WIDTH,
  height:       CARD_HEIGHT,
  borderRadius: 'var(--radius-card)',
  overflow:     'hidden',
  background:   'var(--color-surface-card)',
  boxShadow:    'var(--shadow-card)',
  borderBottom: `${ACCENT_BORDER_WIDTH} solid var(--color-border-default)`,
  flexShrink:   0,
}

export const skeletonImage: CSSProperties = {
  width:      CARD_WIDTH,
  height:     IMAGE_HEIGHT,
  background: 'var(--color-surface-section)',
}



export function skeletonLine(width: string, height: string, marginTop?: string): CSSProperties {
  return {
    width,
    height,
    borderRadius: 'var(--radius-sm)',
    background:   'var(--color-surface-section)',
    ...(marginTop && { marginTop }),
  }
}
