// Validated.tsx — AuctionCard specsheet
// Organizado como Polaris: ejemplos con toggle "Ver código", tabla de props, handoff.

import React, { useState } from 'react'
import { AuctionCard, type LotData } from '../components/AuctionCard'
import AuctionCardUpgrade from '../components/AuctionCard/AuctionCard.upgrade'
import { useVersion } from '../VersionContext'

// ─── tipos locales ─────────────────────────────────────────────────────────────

type BadgeType = 'live' | 'negotiable' | 'upcoming' | 'closed'

interface PropRow {
  name:     string
  type:     string
  default:  string
  required: boolean
  desc:     string
}

interface ExampleDef {
  id:          string
  title:       string
  description: string
  lot:         LotData
  snippet:     string
}

// ─── prop tables ───────────────────────────────────────────────────────────────

const PROPS_UPGRADE: PropRow[] = [
  { name: 'lot',        type: 'LotData',              default: '—',      required: true,  desc: 'Datos del lote a mostrar.' },
  { name: 'isLoading',  type: 'boolean',              default: 'false',  required: false, desc: 'Muestra el skeleton de carga.' },
  { name: 'onFavorite', type: '(id: string) => void', default: '—',      required: false, desc: 'Callback al presionar el ícono de favoritos. Recibe el id del lote.' },
  { name: 'onClick',    type: '(id: string) => void', default: '—',      required: false, desc: 'Callback al presionar la tarjeta. Recibe el id del lote.' },
  { name: 'className',  type: 'string',               default: '—',      required: false, desc: 'Clase CSS extra para sobreescribir estilos contenedor.' },
]

const PROPS_LOT: PropRow[] = [
  { name: 'title',       type: 'string',              default: '—',     required: true,  desc: 'Marca + Modelo. Ej: "TOYOTA HILUX". Se renderiza en uppercase.' },
  { name: 'price',       type: 'number',              default: '—',     required: true,  desc: 'Precio numérico. Ej: 17999.' },
  { name: 'badge',       type: "'live' | 'negotiable' | 'upcoming' | 'closed'", default: '—', required: true, desc: 'Estado del lote — determina color del borde y etiqueta inferior.' },
  { name: 'id',          type: 'string',              default: '—',     required: false, desc: 'Identificador único. Necesario para que onFavorite y onClick funcionen.' },
  { name: 'year',        type: 'number | string',     default: '—',     required: false, desc: 'Año del vehículo. Se muestra antes de la ubicación.' },
  { name: 'location',    type: 'string',              default: '—',     required: false, desc: 'Ciudad y país. Ej: "Lima, Perú". Texto libre.' },
  { name: 'imageUrl',    type: 'string',              default: '—',     required: false, desc: 'URL de la imagen. Si no se provee, muestra un placeholder.' },
  { name: 'priceLabel',  type: 'string',              default: '—',     required: false, desc: 'Etiqueta sobre el precio. Ej: "PRECIO BASE". Lo asigna el feature component según badge.' },
  { name: 'currency',    type: 'string',              default: '"US$"', required: false, desc: 'Moneda. Ej: "US$", "S/".' },
  { name: 'isFavorited', type: 'boolean',             default: 'false', required: false, desc: 'Estado del corazón. Controlado externamente por Zustand.' },
  { name: 'subtitle',    type: 'string',              default: '—',     required: false, desc: '⚠ Deprecado — usar year + location. Ignorado si se proveen year o location.' },
  { name: 'endsAt',      type: 'number | Date',       default: '—',     required: false, desc: 'Timestamp de cierre. Solo usado en variante original (countdown). Ignorado en upgrade.' },
]

// ─── ejemplos ──────────────────────────────────────────────────────────────────

const EXAMPLES: ExampleDef[] = [
  {
    id: 'live',
    title: 'En vivo',
    description: 'Estado activo de subasta. Badge naranja. El priceLabel típico es "PRECIO BASE".',
    lot: {
      id: 'ex-live',
      title: 'TOYOTA HILUX',
      year: 2024,
      location: 'Lima, Perú',
      badge: 'live',
      price: 17999,
      currency: 'US$',
      priceLabel: 'PRECIO BASE',
      isFavorited: false,
    },
    snippet: `const lot: LotData = {
  id:          apiLot.id,
  title:       \`\${apiLot.brand} \${apiLot.model}\`,
  year:        apiLot.year,
  location:    \`\${apiLot.city}, \${apiLot.country}\`,
  badge:       'live',           // apiLot.status
  price:       apiLot.basePrice,
  currency:    apiLot.currency ?? 'US$',
  priceLabel:  'PRECIO BASE',
  isFavorited: isFav,
}

return <AuctionCardUpgrade lot={lot} onFavorite={handleFavorite} />`,
  },
  {
    id: 'negotiable',
    title: 'Negociable',
    description: 'Lote en proceso de negociación. Badge verde. El priceLabel típico es "OFERTA ACTUAL".',
    lot: {
      id: 'ex-neg',
      title: 'BMW X5',
      year: 2023,
      location: 'Bogotá, Colombia',
      badge: 'negotiable',
      price: 45000,
      currency: 'US$',
      priceLabel: 'OFERTA ACTUAL',
      isFavorited: false,
    },
    snippet: `const lot: LotData = {
  id:          apiLot.id,
  title:       \`\${apiLot.brand} \${apiLot.model}\`,
  year:        apiLot.year,
  location:    \`\${apiLot.city}, \${apiLot.country}\`,
  badge:       'negotiable',     // apiLot.status
  price:       apiLot.currentOffer,
  currency:    apiLot.currency ?? 'US$',
  priceLabel:  'OFERTA ACTUAL',
  isFavorited: isFav,
}

return <AuctionCardUpgrade lot={lot} onFavorite={handleFavorite} />`,
  },

  {
    id: 'closed',
    title: 'Cerrado',
    description: 'Subasta finalizada. Badge gris. El priceLabel típico es "PRECIO FINAL".',
    lot: {
      id: 'ex-closed',
      title: 'FORD RANGER',
      year: 2022,
      location: 'Santiago, Chile',
      badge: 'closed',
      price: 21500,
      currency: 'US$',
      priceLabel: 'PRECIO FINAL',
      isFavorited: false,
    },
    snippet: `const lot: LotData = {
  id:          apiLot.id,
  title:       \`\${apiLot.brand} \${apiLot.model}\`,
  year:        apiLot.year,
  location:    \`\${apiLot.city}, \${apiLot.country}\`,
  badge:       'closed',         // apiLot.status
  price:       apiLot.closingPrice,
  currency:    apiLot.currency ?? 'US$',
  priceLabel:  'PRECIO FINAL',
  isFavorited: isFav,
}

return <AuctionCardUpgrade lot={lot} onFavorite={handleFavorite} />`,
  },
  {
    id: 'loading',
    title: 'Cargando',
    description: 'Estado de carga mientras el API responde. Usar AuctionCardUpgradeSkeleton.',
    lot: {
      id: 'ex-loading',
      title: '',
      badge: 'live',
      price: 0,
      isFavorited: false,
    },
    snippet: `// Mostrar skeleton mientras carga — NO mostrar null ni el card vacío
if (isError)              return <div>Error cargando el lote.</div>
if (isLoading || !apiLot) return <AuctionCardUpgradeSkeleton />

// Nunca llega aquí sin apiLot resuelto
return <AuctionCardUpgrade lot={lot} onFavorite={handleFavorite} />`,
  },
]

// ─── snippet completo de uso ──────────────────────────────────────────────────

const SNIPPET_FULL = `'use client' // OBLIGATORIO — App Router + hooks (RTK Query + Zustand)

// src/features/AuctionCard/AuctionCard.tsx
// Auditado con Context7 + Antigravity · RTK Query v2 · Zustand v4 · Next.js App Router

import { useCallback } from 'react'
import AuctionCardUpgrade, { AuctionCardUpgradeSkeleton } from '@/design-system/components/AuctionCard/AuctionCard.upgrade'
import type { LotData } from '@/design-system/components/AuctionCard'
import { useGetLotQuery } from '@/features/lots/lotsApi'
import { useFavoritesStore } from '@/store/favoritesStore'

interface AuctionCardFeatureProps {
  lotId: string
}

export function AuctionCardFeature({ lotId }: AuctionCardFeatureProps) {
  // RTK Query — isError evita skeleton infinito si el API falla
  const { data: apiLot, isLoading, isError } = useGetLotQuery(lotId)

  // Zustand — selector atómico: suscribe solo al booleano de ESTE lotId.
  // Si usas useShallow con funciones, Zustand no detecta cambios de estado
  // y el corazón nunca re-renderiza al hacer click.
  const isFav  = useFavoritesStore((state) => !!state.favorites[lotId])
  const toggle = useFavoritesStore((state) => state.toggle)

  // useCallback — estabiliza referencia para React.memo
  const handleFavorite = useCallback((id: string) => {
    toggle(id)
  }, [toggle])

  if (isError) return <div>Error cargando el lote.</div>
  if (isLoading || !apiLot) return <AuctionCardUpgradeSkeleton />

  const lot: LotData = {
    id:          apiLot.id,
    title:       \`\${apiLot.brand} \${apiLot.model}\`,
    year:        apiLot.year,
    location:    \`\${apiLot.city}, \${apiLot.country}\`,
    imageUrl:    apiLot.imageUrl,
    badge:       apiLot.status,
    price:       apiLot.basePrice,
    currency:    apiLot.currency ?? 'US$',
    priceLabel:  'PRECIO BASE',
    isFavorited: isFav,
  }

  return <AuctionCardUpgrade lot={lot} onFavorite={handleFavorite} />
}

// ─── Zustand store (src/store/favoritesStore.ts) ──────────────────────────────
// Record<string, boolean> en vez de Set — es JSON-serializable para persist
//
// import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
//
// interface FavoritesStore {
//   favorites: Record<string, boolean>
//   toggle:    (id: string) => void
// }
//
// export const useFavoritesStore = create<FavoritesStore>()(
//   persist(
//     (set) => ({
//       favorites: {},
//       toggle: (id) => set((state) => {
//         const next = { ...state.favorites }
//         if (next[id]) { delete next[id] } else { next[id] = true }
//         return { favorites: next }
//       }),
//     }),
//     { name: 'favorites-storage' }
//   )
// )

// ─── Redux Provider (src/app/layout.tsx) ─────────────────────────────────────
// REQUERIDO para que useGetLotQuery funcione.
//
// 'use client'
// import { Provider } from 'react-redux'
// import { store } from '@/store/store'
//
// export function Providers({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>
// }
//
// En layout.tsx (Server Component):
// import { Providers } from './providers'
// export default function RootLayout({ children }) {
//   return <html><body><Providers>{children}</Providers></body></html>
// }`

// ─── field mapping table ─────────────────────────────────────────────────────

interface FieldMapRow { api: string; lot: string; note: string }
const FIELD_MAP: FieldMapRow[] = [
  { api: 'apiLot.id',                    lot: 'id',          note: 'Requerido para favoritos y callbacks.' },
  { api: '`${brand} ${model}`',          lot: 'title',       note: 'El card renderiza en uppercase automáticamente.' },
  { api: 'apiLot.year',                  lot: 'year',        note: 'Se muestra antes de la ubicación.' },
  { api: '`${city}, ${country}`',        lot: 'location',    note: 'Texto libre — el card no lo parsea.' },
  { api: 'apiLot.imageUrl',              lot: 'imageUrl',    note: 'Opcional. Sin imagen muestra placeholder.' },
  { api: 'apiLot.status',                lot: 'badge',       note: '"live" | "negotiable" | "upcoming" | "closed"' },
  { api: 'apiLot.basePrice',             lot: 'price',       note: 'Numérico — el card formatea con toLocaleString.' },
  { api: 'apiLot.currency ?? "US$"',     lot: 'currency',    note: 'Default "US$" si el API no lo devuelve.' },
  { api: '— lógica local según badge',   lot: 'priceLabel',  note: '"PRECIO BASE" / "OFERTA ACTUAL" / "PRECIO FINAL"' },
  { api: '— Zustand store',              lot: 'isFavorited', note: 'NO viene del API. Estado local del usuario.' },
]

// ─── pitfalls ─────────────────────────────────────────────────────────────────

const PITFALLS: { title: string; desc: string }[] = [
  {
    title: 'Zustand + useShallow con funciones no re-renderiza',
    desc: 'Usar useShallow seleccionando funciones no detecta cambios de estado. Usa selectores atómicos: (state) => state.favorites[lotId] para suscribirte solo al booleano de ese lote.',
  },
  {
    title: 'Skeleton infinito si el API falla',
    desc: 'Siempre verificar isError antes del isLoading. Si el API falla, isLoading pasa a false pero apiLot sigue siendo undefined — sin el check de isError nunca sale del skeleton.',
  },
  {
    title: 'Set no es JSON-serializable',
    desc: 'El middleware persist de Zustand serializa con JSON.stringify. Set se pierde al rehidratar. Usar Record<string, boolean> en su lugar.',
  },
  {
    title: 'useCallback necesario para React.memo',
    desc: 'El card está memoizado. Pasar una función nueva en cada render anula React.memo y genera re-renders innecesarios. handleFavorite siempre en useCallback.',
  },
]

const CHECKLIST: string[] = [
  'El card renderiza con datos reales del API (no hardcodeados)',
  'El corazón cambia al hacer click y persiste al recargar la página',
  'El skeleton aparece mientras carga y desaparece al recibir datos',
  'Si el API devuelve error, se muestra el mensaje de error (no spinner infinito)',
  'El badge refleja el estado real del lote',
  'El título muestra MARCA MODELO en uppercase aunque el API devuelva minúsculas',
  'El subtítulo muestra AÑO | CIUDAD, PAÍS si ambos campos vienen del API',
  'Redux Provider está en layout.tsx, no en el componente',
  '"use client" está en el feature component, no en el componente del DS',
]

// ─── estilos reutilizables ────────────────────────────────────────────────────

const S = {
  monoInline: {
    fontFamily: 'monospace', fontSize: '12px',
    background: 'var(--gray-100, #f3f4f6)',
    color: '#374151',
    padding: '1px 6px', borderRadius: '4px',
  } as React.CSSProperties,
  sectionLabel: {
    fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    color: 'var(--gray-400, #9ca3af)',
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: '18px', fontWeight: 700,
    color: 'var(--color-text-primary, #111827)',
    marginBottom: '8px',
  },
  divider: {
    height: '1px',
    background: 'var(--gray-200, #e5e7eb)',
    margin: '48px 0',
  } as React.CSSProperties,
}

// ─── sub-componentes ──────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')
  function handleCopy() {
    void navigator.clipboard.writeText(text).then(() => {
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    })
  }
  return (
    <button type="button" onClick={handleCopy} style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '4px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 600,
      cursor: 'pointer', border: '1px solid',
      background:  state === 'copied' ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.07)',
      borderColor: state === 'copied' ? 'rgba(52,211,153,0.4)'  : 'rgba(255,255,255,0.15)',
      color:       state === 'copied' ? '#34d399'               : 'rgba(255,255,255,0.55)',
    }}>
      {state === 'copied' ? '✓ Copiado' : 'Copiar'}
    </button>
  )
}

function CodeBlock({ code, tag }: { code: string; tag?: string }) {
  return (
    <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
      {tag && (
        <div style={{
          background: '#161616', padding: '8px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>{tag}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre style={{
        background: '#1a1a1a', padding: '20px', margin: 0,
        fontSize: '12.5px', lineHeight: '21px', fontFamily: '"JetBrains Mono", "Fira Code", monospace',
        overflowX: 'auto', color: '#d4d4d4',
      }}>
        {code}
      </pre>
    </div>
  )
}

function PropTable({ rows, caption }: { rows: PropRow[]; caption: string }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gray-500, #6b7280)', marginBottom: '10px' }}>{caption}</p>
      <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid var(--gray-200, #e5e7eb)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--gray-50, #f9fafb)', borderBottom: '1px solid var(--gray-200, #e5e7eb)' }}>
              {['Prop', 'Tipo', 'Default', 'Descripción'].map(h => (
                <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontSize: '11px', color: 'var(--gray-500, #6b7280)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.name} style={{ borderBottom: i < rows.length - 1 ? '1px solid var(--gray-100, #f3f4f6)' : 'none' }}>
                <td style={{ padding: '10px 14px', whiteSpace: 'nowrap' }}>
                  <code style={S.monoInline}>{row.name}</code>
                  {row.required && <span style={{ marginLeft: '6px', fontSize: '10px', fontWeight: 700, color: '#ef4444' }}>req</span>}
                </td>
                <td style={{ padding: '10px 14px' }}>
                  <code style={{ ...S.monoInline, color: '#7c3aed', background: '#f5f3ff' }}>{row.type}</code>
                </td>
                <td style={{ padding: '10px 14px' }}>
                  <code style={{ ...S.monoInline, color: '#059669', background: '#f0fdf4' }}>{row.default}</code>
                </td>
                <td style={{ padding: '10px 14px', color: 'var(--gray-600, #4b5563)', lineHeight: '1.5' }}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── componente principal ─────────────────────────────────────────────────────

export default function Validated() {
  const { version } = useVersion()
  const isUpgrade = version === 'upgrade'

  // favoritos locales de demo
  const [favorited, setFavorited] = useState<Record<string, boolean>>({})
  function handleFavorite(id: string | undefined) {
    if (!id) return
    setFavorited(prev => {
      const next = { ...prev }
      if (next[id]) { delete next[id] } else { next[id] = true }
      return next
    })
  }

  // tab activo de ejemplos
  const [activeTab, setActiveTab] = useState<string>(EXAMPLES[0].id)
  // "ver código" del ejemplo activo
  const [showExCode, setShowExCode] = useState(false)
  // "ver código" del snippet completo
  const [showFullSnippet, setShowFullSnippet] = useState(false)

  function handleNavDocs() {
    window.location.href = `/?v=${version}`
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-surface-page, #f9fafb)' }}>

      {/* ── Header ── */}
      <header style={{
        background: 'var(--color-surface-card, #fff)',
        borderBottom: '1px solid var(--gray-200, #e5e7eb)',
        padding: '0 40px', height: '52px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-primary, #111827)' }}>VMC Design System</span>
          <span style={{ color: 'var(--gray-300, #d1d5db)', fontSize: '14px' }}>/</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--gray-500, #6b7280)' }}>Componentes</span>
          <span style={{ color: 'var(--gray-300, #d1d5db)', fontSize: '14px' }}>/</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#7c3aed' }}>AuctionCard</span>
          <span style={{
            fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px',
            background: isUpgrade ? '#ede9fe' : '#f3f4f6',
            color:      isUpgrade ? '#7c3aed' : '#6b7280',
          }}>
            {version}
          </span>
        </div>
        <button type="button" onClick={handleNavDocs} style={{
          fontSize: '11px', fontWeight: 600, color: '#6b7280',
          background: 'none', border: '1px solid var(--gray-300, #d1d5db)',
          borderRadius: '6px', padding: '4px 12px', cursor: 'pointer',
        }}>
          ← Docs
        </button>
      </header>

      {/* ── Layout con sidebar ── */}
      <div style={{ display: 'flex', maxWidth: '1100px', margin: '0 auto', padding: '48px 32px', gap: '48px' }}>

        {/* ── Sidebar "On this page" ── */}
        <aside style={{ width: '180px', flexShrink: 0, position: 'sticky', top: '76px', alignSelf: 'flex-start' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-400, #9ca3af)', marginBottom: '12px' }}>
            En esta página
          </p>
          {[
            { label: 'Ejemplos',     href: '#ejemplos' },
            { label: 'Props',        href: '#props' },
            { label: 'Mapeo API',    href: '#mapeo' },
            { label: 'Pitfalls',     href: '#pitfalls' },
            { label: 'Checklist',    href: '#checklist' },
            { label: 'Código de uso', href: '#codigo' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{
              display: 'block', fontSize: '13px', padding: '4px 0',
              color: 'var(--gray-500, #6b7280)', textDecoration: 'none',
            }}>
              {item.label}
            </a>
          ))}
        </aside>

        {/* ── Contenido principal ── */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* ── Encabezado del componente ── */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--color-text-primary, #111827)', margin: 0 }}>AuctionCard</h1>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#6b7280', background: '#f3f4f6', padding: '3px 10px', borderRadius: '20px' }}>L3 — Bloque</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669', background: '#f0fdf4', padding: '3px 10px', borderRadius: '20px' }}>✓ validado · 2026-04-08</span>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--gray-600, #4b5563)', maxWidth: '600px', lineHeight: '1.6' }}>
              Tarjeta de lote para subastas de vehículos. Muestra imagen, título, año, ubicación, precio y estado del lote mediante un sistema de badges.
              La variante <strong>upgrade</strong> es la aprobada para producción.
            </p>
          </div>

          <div style={S.divider} />

          {/* ── EJEMPLOS ── */}
          <section id="ejemplos" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>Ejemplos</p>

            {/* Tabs — como Polaris */}
            <div style={{
              display: 'flex', gap: '4px', flexWrap: 'wrap',
              marginBottom: '20px',
            }}>
              {EXAMPLES.map(ex => {
                const active = ex.id === activeTab
                return (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => { setActiveTab(ex.id); setShowExCode(false) }}
                    style={{
                      fontSize: '13px', fontWeight: active ? 600 : 500,
                      padding: '7px 16px', borderRadius: '8px', cursor: 'pointer',
                      border: '1px solid',
                      background:  active ? 'var(--color-surface-card, #fff)' : 'transparent',
                      borderColor: active ? 'var(--gray-300, #d1d5db)'        : 'transparent',
                      color:       active ? 'var(--color-text-primary, #111827)' : 'var(--gray-500, #6b7280)',
                      boxShadow:   active ? '0 1px 3px rgba(0,0,0,0.08)'     : 'none',
                    }}
                  >
                    {ex.title}
                  </button>
                )
              })}
            </div>

            {/* Panel del tab activo */}
            {EXAMPLES.filter(ex => ex.id === activeTab).map(ex => {
              const isLoadingExample = ex.id === 'loading'
              const isFav = !!favorited[ex.lot.id ?? '']
              const lotWithFav: LotData = { ...ex.lot, isFavorited: isFav }

              return (
                <div key={ex.id}>
                  {/* descripción + botón Ver código */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', lineHeight: '1.6' }}>
                      {ex.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowExCode(v => !v)}
                      style={{
                        fontSize: '12px', fontWeight: 600, padding: '6px 14px',
                        borderRadius: '8px', cursor: 'pointer', border: '1px solid',
                        background:  showExCode ? '#ede9fe' : 'var(--color-surface-card, #fff)',
                        borderColor: showExCode ? '#c4b5fd' : 'var(--gray-300, #d1d5db)',
                        color:       showExCode ? '#7c3aed' : 'var(--gray-600, #4b5563)',
                        flexShrink: 0,
                      }}
                    >
                      {showExCode ? '✕ Ocultar código' : '</> Ver código'}
                    </button>
                  </div>

                  {/* preview */}
                  <div style={{
                    background: 'var(--color-surface-card, #fff)',
                    border: '1px solid var(--gray-200, #e5e7eb)',
                    borderRadius: '12px', padding: '40px 32px',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    minHeight: '200px',
                  }}>
                    {isLoadingExample
                      ? (isUpgrade
                          ? <AuctionCardUpgrade lot={lotWithFav} isLoading onFavorite={handleFavorite} />
                          : <AuctionCard variant="standard" lot={lotWithFav} isLoading onFavorite={handleFavorite} />
                        )
                      : isUpgrade
                          ? <AuctionCardUpgrade lot={lotWithFav} onFavorite={handleFavorite} />
                          : <AuctionCard variant="standard" lot={lotWithFav} onFavorite={handleFavorite} />
                    }
                  </div>

                  {/* código del tab activo — colapsable */}
                  {showExCode && (
                    <div style={{ marginTop: '12px' }}>
                      <CodeBlock code={ex.snippet} tag={`${ex.id} · LotData`} />
                    </div>
                  )}
                </div>
              )
            })}
          </section>

          <div style={S.divider} />

          {/* ── PROPS ── */}
          <section id="props" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>Props</p>
            <h2 style={S.sectionTitle}>API del componente</h2>
            <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', marginBottom: '32px', lineHeight: '1.6' }}>
              El componente recibe <code style={S.monoInline}>lot: LotData</code> como única fuente de datos.
              El feature component es responsable de transformar la respuesta del API a este tipo antes de renderizar.
            </p>
            <PropTable rows={PROPS_UPGRADE} caption="AuctionCardUpgrade — props del componente" />
            <PropTable rows={PROPS_LOT}     caption="LotData — interface de datos del lote" />
          </section>

          <div style={S.divider} />

          {/* ── MAPEO API ── */}
          <section id="mapeo" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>Implementación</p>
            <h2 style={S.sectionTitle}>Mapeo API → LotData</h2>
            <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', marginBottom: '24px', lineHeight: '1.6' }}>
              El componente <strong>no consume el API directamente.</strong> El feature component transforma la respuesta antes de pasarla al card,
              manteniendo el Design System agnóstico al backend.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid var(--gray-200, #e5e7eb)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: 'var(--gray-50, #f9fafb)', borderBottom: '1px solid var(--gray-200, #e5e7eb)' }}>
                    {['Campo en el API', 'LotData', 'Nota'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontSize: '11px', color: 'var(--gray-500, #6b7280)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FIELD_MAP.map((row, i) => (
                    <tr key={row.api} style={{ borderBottom: i < FIELD_MAP.length - 1 ? '1px solid var(--gray-100, #f3f4f6)' : 'none' }}>
                      <td style={{ padding: '10px 14px' }}><code style={{ ...S.monoInline, color: '#0369a1', background: '#f0f9ff' }}>{row.api}</code></td>
                      <td style={{ padding: '10px 14px' }}><code style={{ ...S.monoInline, color: '#7c3aed', background: '#f5f3ff' }}>{row.lot}</code></td>
                      <td style={{ padding: '10px 14px', color: 'var(--gray-600, #4b5563)', lineHeight: '1.5' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div style={S.divider} />

          {/* ── PITFALLS ── */}
          <section id="pitfalls" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>Guía de implementación</p>
            <h2 style={S.sectionTitle}>Errores comunes</h2>
            <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', marginBottom: '24px', lineHeight: '1.6' }}>
              Estos patrones ya están resueltos en el snippet de uso. Léelos antes de implementar.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PITFALLS.map(p => (
                <div key={p.title} style={{
                  padding: '16px 20px', borderRadius: '10px',
                  background: '#fffbeb', border: '1px solid #fde68a',
                }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '14px', flexShrink: 0, paddingTop: '1px' }}>⚠</span>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#92400e', marginBottom: '4px' }}>{p.title}</p>
                      <p style={{ fontSize: '13px', color: '#78350f', lineHeight: '1.6' }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={S.divider} />

          {/* ── CHECKLIST ── */}
          <section id="checklist" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>QA</p>
            <h2 style={S.sectionTitle}>Checklist de verificación</h2>
            <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', marginBottom: '24px', lineHeight: '1.6' }}>
              Confirmar cada punto antes de hacer merge a producción.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {CHECKLIST.map(item => (
                <label key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ marginTop: '2px', accentColor: '#7c3aed', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: 'var(--gray-700, #374151)', lineHeight: '1.5' }}>{item}</span>
                </label>
              ))}
            </div>
          </section>

          <div style={S.divider} />

          {/* ── CÓDIGO COMPLETO ── */}
          <section id="codigo" style={{ marginBottom: '64px' }}>
            <p style={S.sectionLabel}>Código de uso</p>
            <h2 style={S.sectionTitle}>Feature component completo</h2>
            <p style={{ fontSize: '14px', color: 'var(--gray-500, #6b7280)', marginBottom: '24px', lineHeight: '1.6' }}>
              Copia este archivo en <code style={S.monoInline}>src/features/AuctionCard/AuctionCard.tsx</code> y ajusta los imports según tu estructura de proyecto.
              Incluye el store de Zustand y el Redux Provider como comentarios de referencia.
            </p>
            <button
              type="button"
              onClick={() => setShowFullSnippet(v => !v)}
              style={{
                marginBottom: '16px',
                fontSize: '13px', fontWeight: 600, padding: '8px 18px',
                borderRadius: '8px', cursor: 'pointer', border: '1px solid',
                background:  showFullSnippet ? '#ede9fe' : 'var(--color-surface-card, #fff)',
                borderColor: showFullSnippet ? '#c4b5fd' : 'var(--gray-300, #d1d5db)',
                color:       showFullSnippet ? '#7c3aed' : 'var(--gray-700, #374151)',
              }}
            >
              {showFullSnippet ? '✕ Ocultar código' : '</> Ver código'}
            </button>
            {showFullSnippet && (
              <CodeBlock
                code={SNIPPET_FULL}
                tag={`${version} · src/features/AuctionCard/AuctionCard.tsx`}
              />
            )}
          </section>

        </main>
      </div>
    </div>
  )
}
