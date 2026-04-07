import { useState, useCallback } from 'react'
import { Button } from '../components/Button'
import ButtonSrc from '../components/Button/Button.tsx?raw'
import { Badge } from '../components/Badge'
import BadgeSrc from '../components/Badge/Badge.tsx?raw'
import { TextField } from '../components/TextField'
import TextFieldSrc from '../components/TextField/TextField.tsx?raw'
import { CountdownTimer } from '../components/CountdownTimer'
import CountdownTimerSrc from '../components/CountdownTimer/CountdownTimer.tsx?raw'
import { PriceDisplay } from '../components/PriceDisplay'
import PriceDisplaySrc from '../components/PriceDisplay/PriceDisplay.tsx?raw'
import { AuctionCard, type LotData } from '../components/AuctionCard'
import AuctionCardSrc from '../components/AuctionCard/AuctionCard.tsx?raw'
import { BidForm } from '../components/BidForm'
import BidFormSrc from '../components/BidForm/BidForm.tsx?raw'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { PageLayout } from '../components/PageLayout'
import { VehicleCard } from '../components/VehicleCard'
import VehicleCardSrc from '../components/VehicleCard/VehicleCard.tsx?raw'
import { AuctioneerSection } from '../components/AuctioneerSection'
import AuctioneerSectionSrc from '../components/AuctioneerSection/AuctioneerSection.tsx?raw'
import { Checkbox } from '../components/Checkbox'
import CheckboxSrc from '../components/Checkbox/Checkbox.tsx?raw'
import { RadioButton } from '../components/RadioButton'

import { SearchInput } from '../components/SearchInput'
import SearchInputSrc from '../components/SearchInput/SearchInput.tsx?raw'
import { SelectField } from '../components/SelectField'
import SelectFieldSrc from '../components/SelectField/SelectField.tsx?raw'
import { Alert } from '../components/Alert'
import AlertSrc from '../components/Alert/Alert.tsx?raw'
import { Toast, ToastContainer } from '../components/Toast'
import ToastSrc from '../components/Toast/Toast.tsx?raw'
import { Modal } from '../components/Modal'
import ModalSrc from '../components/Modal/Modal.tsx?raw'
import { Skeleton } from '../components/Skeleton'
import SkeletonSrc from '../components/Skeleton/Skeleton.tsx?raw'
import { TabBar } from '../components/TabBar'
import TabBarSrc from '../components/TabBar/TabBar.tsx?raw'
import { Accordion } from '../components/Accordion'
import AccordionSrc from '../components/Accordion/Accordion.tsx?raw'
import { IconButton } from '../components/IconButton'
import IconButtonSrc from '../components/IconButton/IconButton.tsx?raw'
import { Divider } from '../components/Divider'
import DividerSrc from '../components/Divider/Divider.tsx?raw'
import { Avatar } from '../components/Avatar'
import AvatarSrc from '../components/Avatar/Avatar.tsx?raw'
import { Image as DSImage } from '../components/Image'
import ImageSrc from '../components/Image/Image.tsx?raw'
import { Slider, RangeSlider } from '../components/Slider'
import SliderSrc from '../components/Slider/Slider.tsx?raw'
import { UserWallet } from '../components/UserWallet'
import UserWalletSrc from '../components/UserWallet/UserWallet.tsx?raw'
import { HeroSection } from '../components/HeroSection'
import HeroSectionSrc from '../components/HeroSection/HeroSection.tsx?raw'
import { Dropdown } from '../components/Dropdown'
import DropdownSrc from '../components/Dropdown/Dropdown.tsx?raw'
import { Tooltip } from '../components/Tooltip'
import TooltipSrc from '../components/Tooltip/Tooltip.tsx?raw'
import { Breadcrumb } from '../components/Breadcrumb'
import BreadcrumbSrc from '../components/Breadcrumb/Breadcrumb.tsx?raw'
import { Pagination } from '../components/Pagination'
import PaginationSrc from '../components/Pagination/Pagination.tsx?raw'
import { FilterBar } from '../components/FilterBar'
import FilterBarSrc from '../components/FilterBar/FilterBar.tsx?raw'
import { AuctionStatusBanner } from '../components/AuctionStatusBanner'
import AuctionStatusBannerSrc from '../components/AuctionStatusBanner/AuctionStatusBanner.tsx?raw'
import { VehicleSpecsRow } from '../components/VehicleSpecsRow'
import VehicleSpecsRowSrc from '../components/VehicleSpecsRow/VehicleSpecsRow.tsx?raw'
import { BidHistoryList } from '../components/BidHistoryList'
import BidHistoryListSrc from '../components/BidHistoryList/BidHistoryList.tsx?raw'
import { VehicleImageGallery } from '../components/VehicleImageGallery'
import VehicleImageGallerySrc from '../components/VehicleImageGallery/VehicleImageGallery.tsx?raw'
import { SellerCard } from '../components/SellerCard'
import SellerCardSrc from '../components/SellerCard/SellerCard.tsx?raw'
import { AuctionSummaryWidget } from '../components/AuctionSummaryWidget'
import AuctionSummaryWidgetSrc from '../components/AuctionSummaryWidget/AuctionSummaryWidget.tsx?raw'

// ─────────────────────────────────────────────────────────────────────────────
// Syntax highlighter ligero — tokenizador JSX/TS sin dependencias
// ─────────────────────────────────────────────────────────────────────────────

type Token = { type: string; value: string }

const PATTERNS: [string, RegExp][] = [
  ['comment',   /^(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/],
  ['string',    /^(`[\s\S]*?`|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")/],
  ['jsx-tag',   /^(<\/?[A-Z][A-Za-z0-9.]*|<\/?[a-z][a-z0-9-]*)/],
  ['keyword',   /^(?:import|export|from|const|let|var|function|return|interface|type|default|true|false|null|undefined|if|else|class|extends|typeof|keyof|as|in|of|async|await|void|never|React)\b/],
  ['type',      /^(?:string|number|boolean|ReactNode|MouseEvent|HTMLButtonElement)\b/],
  ['number',    /^\b\d+(\.\d+)?\b/],
  ['operator',  /^[=<>!?:&|+\-*/.,;{}[\]()]+/],
  ['attr',      /^[a-z][a-zA-Z0-9_]*(?==)/],
  ['word',      /^[a-zA-Z_$][a-zA-Z0-9_$]*/],
  ['space',     /^\s+/],
]

function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  let remaining = code
  while (remaining.length > 0) {
    let matched = false
    for (const [type, re] of PATTERNS) {
      const m = remaining.match(re)
      if (m) { tokens.push({ type, value: m[0] }); remaining = remaining.slice(m[0].length); matched = true; break }
    }
    if (!matched) { tokens.push({ type: 'char', value: remaining[0] }); remaining = remaining.slice(1) }
  }
  return tokens
}

const TOKEN_COLORS: Record<string, string> = {
  comment: 'text-[#6a9955]', string: 'text-[#ce9178]', keyword: 'text-[#569cd6]',
  type: 'text-[#4ec9b0]', number: 'text-[#b5cea8]', 'jsx-tag': 'text-[#4ec9b0]',
  attr: 'text-[#9cdcfe]', operator: 'text-[#d4d4d4]', word: 'text-[#d4d4d4]', char: 'text-[#d4d4d4]',
}

function CodeHighlight({ code }: { code: string }) {
  return <>{tokenize(code).map((t, i) => <span key={i} className={TOKEN_COLORS[t.type] ?? ''}>{t.value}</span>)}</>
}

// ─────────────────────────────────────────────────────────────────────────────
// Utilidades compartidas
// ─────────────────────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')
  const copy = useCallback(() => {
    void navigator.clipboard.writeText(text).then(() => { setState('copied'); setTimeout(() => setState('idle'), 2000) })
  }, [text])
  return (
    <button type="button" onClick={copy} className={['inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all duration-150 border', state === 'copied' ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-white/6 border-white/12 text-white/50 hover:bg-white/12 hover:text-white/80'].join(' ')}>
      {state === 'copied'
        ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M8 4V2.5A1.5 1.5 0 0 0 6.5 1h-4A1.5 1.5 0 0 0 1 2.5v4A1.5 1.5 0 0 0 2.5 8H4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
      }
      {state === 'copied' ? 'Copiado' : 'Copiar'}
    </button>
  )
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-[var(--gray-200)]" />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// TOKENS — sección Foundation
// ─────────────────────────────────────────────────────────────────────────────

// Color primitivos con sus valores para el swatch
const PRIMITIVE_COLORS = [
  { token: '--purple-700', hex: '#391383', label: 'Purple 700' },
  { token: '--purple-800', hex: '#2e0f70', label: 'Purple 800' },
  { token: '--purple-900', hex: '#1a0b3d', label: 'Purple 900' },
  { token: '--cyan-500',   hex: '#00cace', label: 'Cyan 500'   },
  { token: '--amber-500',  hex: '#ffa000', label: 'Amber 500'  },
  { token: '--white',      hex: '#fefdfc', label: 'White'      },
  { token: '--gray-50',    hex: '#f6f7f9', label: 'Gray 50'    },
  { token: '--gray-100',   hex: '#f0f0f0', label: 'Gray 100'   },
  { token: '--gray-300',   hex: '#d1d5dc', label: 'Gray 300'   },
  { token: '--gray-400',   hex: '#99a1af', label: 'Gray 400'   },
  { token: '--gray-500',   hex: '#6e728c', label: 'Gray 500'   },
  { token: '--gray-600',   hex: '#4a5565', label: 'Gray 600'   },
]

// Colores semánticos agrupados
const SEMANTIC_COLOR_GROUPS: { group: string; tokens: { token: string; value: string; desc: string }[] }[] = [
  {
    group: 'Brand',
    tokens: [
      { token: '--color-brand-primary',  value: 'var(--purple-700)', desc: 'Sidebar, header, botones'   },
      { token: '--color-brand-dark',     value: 'var(--purple-800)', desc: 'Hero overlay, help section' },
      { token: '--color-brand-darkest',  value: 'var(--purple-900)', desc: 'Texto primario'             },
      { token: '--color-brand-accent',   value: 'var(--cyan-500)',   desc: 'CTA, highlights'            },
      { token: '--color-brand-live',     value: 'var(--amber-500)',  desc: 'Badge en vivo, precios'     },
    ],
  },
  {
    group: 'Action',
    tokens: [
      { token: '--color-action-primary',       value: 'var(--purple-700)', desc: 'Botón primary default' },
      { token: '--color-action-primary-hover',  value: 'var(--purple-800)', desc: 'Botón primary hover'  },
      { token: '--color-action-primary-press',  value: 'var(--purple-900)', desc: 'Botón primary active' },
      { token: '--color-action-cta',            value: 'var(--cyan-500)',   desc: 'Botón CTA default'    },
      { token: '--color-action-disabled',       value: 'var(--gray-600)',   desc: 'Disabled state'       },
    ],
  },
  {
    group: 'Surface',
    tokens: [
      { token: '--color-surface-body',    value: 'var(--gray-100)',   desc: 'Outer body bg'     },
      { token: '--color-surface-page',    value: 'var(--gray-50)',    desc: 'Page bg'            },
      { token: '--color-surface-card',    value: 'var(--white)',      desc: 'Cards, header'      },
      { token: '--color-surface-overlay', value: 'var(--purple-800)', desc: 'Hero, help section' },
    ],
  },
  {
    group: 'Text — claro',
    tokens: [
      { token: '--color-text-primary',   value: 'var(--purple-900)', desc: 'Títulos, texto principal' },
      { token: '--color-text-secondary', value: 'var(--gray-500)',   desc: 'Texto secundario'         },
      { token: '--color-text-muted',     value: 'var(--gray-400)',   desc: 'Meta, labels'             },
      { token: '--color-text-disabled',  value: 'var(--gray-600)',   desc: 'Deshabilitado'            },
      { token: '--color-text-link',      value: 'var(--purple-700)', desc: 'Links, nav'              },
      { token: '--color-text-live',      value: 'var(--amber-500)',  desc: 'Precios en vivo'         },
      { token: '--color-text-accent',    value: 'var(--cyan-500)',   desc: 'Highlights, acento'      },
    ],
  },
  {
    group: 'Text — oscuro',
    tokens: [
      { token: '--color-text-on-dark',           value: 'var(--white)',           desc: 'Texto principal sobre dark' },
      { token: '--color-text-on-dark-high',      value: 'rgba(255,255,255,0.90)', desc: 'Nav items, íconos'         },
      { token: '--color-text-on-dark-secondary', value: 'rgba(255,255,255,0.70)', desc: 'Texto secundario dark'     },
      { token: '--color-text-on-dark-muted',     value: 'rgba(255,255,255,0.55)', desc: 'Nav, footer links'         },
      { token: '--color-text-on-dark-faint',     value: 'rgba(255,255,255,0.40)', desc: 'Footer legal'              },
    ],
  },
]

// Resolvemos el color CSS real para la preview (los semánticos apuntan a primitivos)
const PRIMITIVE_HEX: Record<string, string> = {
  'var(--purple-700)': '#391383', 'var(--purple-800)': '#2e0f70', 'var(--purple-900)': '#1a0b3d',
  'var(--cyan-500)': '#00cace', 'var(--amber-500)': '#ffa000', 'var(--white)': '#fefdfc',
  'var(--gray-50)': '#f6f7f9', 'var(--gray-100)': '#f0f0f0', 'var(--gray-300)': '#d1d5dc',
  'var(--gray-400)': '#99a1af', 'var(--gray-500)': '#6e728c', 'var(--gray-600)': '#4a5565',
}

function resolveColor(value: string): string {
  return PRIMITIVE_HEX[value] ?? value
}

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

// Swatch cuadrado para primitivos
function ColorSwatch({ token, hex, label }: { token: string; hex: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const light = isLight(hex)
  return (
    <button
      type="button"
      onClick={() => { void navigator.clipboard.writeText(token).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }) }}
      title={`Copiar ${token}`}
      className="group flex flex-col rounded-lg overflow-hidden border border-[var(--gray-200)] hover:shadow-md transition-all duration-150 text-left w-full"
    >
      <div className="h-14 w-full relative" style={{ backgroundColor: `var(${token})` }}>
        {copied && (
          <span className={`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${light ? 'text-black/60' : 'text-white/80'}`}>
            ✓ copiado
          </span>
        )}
      </div>
      <div className="px-2.5 py-2 bg-white flex-1">
        <p className="text-[10px] font-mono text-[var(--gray-600)] truncate leading-tight">{token}</p>
        <p className="text-[10px] font-mono text-[var(--gray-400)] mt-0.5">{hex}</p>
        <p className="text-[9px] text-[var(--gray-400)] mt-0.5 truncate">{label}</p>
      </div>
    </button>
  )
}

// Fila para tokens semánticos de color
function SemanticColorRow({ token, value, desc }: { token: string; value: string; desc: string }) {
  const resolvedHex = resolveColor(value)
  return (
    <tr className="border-b border-[var(--gray-100)] hover:bg-[var(--gray-50)] group">
      <td className="py-2.5 pr-3">
        <div
          className="size-6 rounded border border-[var(--gray-200)] shrink-0"
          style={{ backgroundColor: `var(${token})` }}
          title={resolvedHex}
        >
          {/* tiny text for on-dark swatches that are computed from rgba */}
        </div>
      </td>
      <td className="py-2.5 pr-4">
        <code className="text-[11px] text-[var(--purple-700)] font-mono">{token}</code>
      </td>
      <td className="py-2.5 pr-4 text-[11px] font-mono text-[var(--gray-500)]">{value}</td>
      <td className="py-2.5 text-[11px] text-[var(--gray-400)]">{desc}</td>
    </tr>
  )
}

// Escala tipográfica
const TYPE_SCALE = [
  { token: '--size-11', px: '11px', lh: '16px', weight: '400', sample: 'Caption — labels pequeños', cls: 'text-[11px] leading-[16px]' },
  { token: '--size-12', px: '12px', lh: '20px', weight: '400', sample: 'Label — badges, filter buttons', cls: 'text-[12px] leading-[20px]' },
  { token: '--size-14', px: '14px', lh: '20px', weight: '400', sample: 'Body SM — specs, meta info', cls: 'text-[14px] leading-[20px]' },
  { token: '--size-16', px: '16px', lh: '24px', weight: '400', sample: 'Body — nav labels, texto base', cls: 'text-[16px] leading-[24px]' },
  { token: '--size-18', px: '18px', lh: '28px', weight: '700', sample: 'Card Title — TOYOTA HILUX', cls: 'text-[18px] leading-[28px] font-bold' },
  { token: '--size-20', px: '20px', lh: '32px', weight: '700', sample: 'Heading SM — subtítulos, CTA', cls: 'text-[20px] leading-[32px] font-bold' },
  { token: '--size-24', px: '24px', lh: '36px', weight: '700', sample: 'Heading MD — secciones', cls: 'text-[24px] leading-[36px] font-bold' },
  { token: '--size-27', px: '27px', lh: '40px', weight: '700', sample: 'Heading LG — MAF PERÚ × VMC', cls: 'text-[27px] leading-[40px] font-bold' },
  { token: '--size-30', px: '30px', lh: '44px', weight: '700', sample: 'Price Card — 17,999', cls: 'text-[30px] leading-[44px] font-bold tabular-nums' },
  { token: '--size-48', px: '48px', lh: '72px', weight: '700', sample: 'Display MD — BMW 320i', cls: 'text-[48px] leading-[72px] font-bold italic' },
  { token: '--size-54', px: '54px', lh: '80px', weight: '700', sample: 'Display LG — $14,000', cls: 'text-[54px] leading-[80px] font-bold tabular-nums' },
]

// Spacing visual
const SPACING_SCALE = [
  { token: '--space-1',  px: '4px'  }, { token: '--space-2',  px: '8px'  },
  { token: '--space-3',  px: '12px' }, { token: '--space-4',  px: '16px' },
  { token: '--space-5',  px: '20px' }, { token: '--space-6',  px: '24px' },
  { token: '--space-8',  px: '32px' }, { token: '--space-10', px: '40px' },
  { token: '--space-12', px: '48px' }, { token: '--space-16', px: '64px' },
]

// Radii
const RADIUS_SCALE = [
  { token: '--radius-none', px: '0px',    label: 'None — celdas, tablas'     },
  { token: '--radius-sm',   px: '4px',    label: 'SM — inputs, badges, chips' },
  { token: '--radius-md',   px: '8px',    label: 'MD — botones primarios'     },
  { token: '--radius-lg',   px: '16px',   label: 'LG — cards, hero, modales'  },
  { token: '--radius-full', px: '9999px', label: 'Full — píldoras, avatares'  },
]

// Sombras
const SHADOW_SCALE = [
  { token: '--shadow-sm', value: '0 2px 4px rgba(0,0,0,0.06)',  label: 'SM — cards en reposo'     },
  { token: '--shadow-md', value: '0 4px 8px rgba(0,0,0,0.08)',  label: 'MD — elementos elevados'  },
  { token: '--shadow-lg', value: '0 8px 16px rgba(0,0,0,0.10)', label: 'LG — sidebar, CTA, hover' },
]

function TokensSection() {
  return (
    <section id="tokens" className="scroll-mt-8">

      {/* ── Colores Primitivos ───────────────────────────────────── */}
      <SectionDivider title="Primitivos — Color" />
      <div className="grid grid-cols-6 gap-3 mb-12">
        {PRIMITIVE_COLORS.map(c => (
          <ColorSwatch key={c.token} token={c.token} hex={c.hex} label={c.label} />
        ))}
      </div>

      {/* ── Colores Semánticos ───────────────────────────────────── */}
      <SectionDivider title="Semánticos — Color" />
      <div className="flex flex-col gap-8 mb-12">
        {SEMANTIC_COLOR_GROUPS.map(group => (
          <div key={group.group}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">
              {group.group}
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--gray-200)]">
                  <th className="pb-2 text-left text-[10px] font-bold text-[var(--gray-400)] w-8">·</th>
                  <th className="pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]">Token</th>
                  <th className="pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]">Valor</th>
                  <th className="pb-2 text-left text-[10px] font-bold text-[var(--gray-400)]">Uso</th>
                </tr>
              </thead>
              <tbody>
                {group.tokens.map(t => (
                  <SemanticColorRow key={t.token} token={t.token} value={t.value} desc={t.desc} />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* ── Tipografía ───────────────────────────────────────────── */}
      <SectionDivider title="Tipografía — Escala" />
      <div className="mb-12 rounded-xl border border-[var(--gray-200)] overflow-hidden">
        {TYPE_SCALE.map((t, i) => (
          <div
            key={t.token}
            className={['flex items-baseline gap-6 px-5 py-3', i % 2 === 0 ? 'bg-white' : 'bg-[var(--gray-50)]'].join(' ')}
          >
            <div className="w-[200px] shrink-0 flex flex-col gap-0.5">
              <code className="text-[10px] text-[var(--purple-700)] font-mono">{t.token}</code>
              <span className="text-[9px] text-[var(--gray-400)]">
                {t.px} / lh {t.lh} / w{t.weight}
              </span>
            </div>
            <span
              className={['text-[var(--gray-600)] truncate', t.cls].join(' ')}
              style={{ fontStyle: t.cls.includes('italic') ? 'italic' : undefined }}
            >
              {t.sample}
            </span>
          </div>
        ))}
      </div>

      {/* ── Spacing ──────────────────────────────────────────────── */}
      <SectionDivider title="Spacing — Grilla 4px" />
      <div className="mb-12 flex flex-col gap-3">
        {SPACING_SCALE.map(s => (
          <div key={s.token} className="flex items-center gap-4">
            <code className="text-[11px] font-mono text-[var(--purple-700)] w-[110px] shrink-0">{s.token}</code>
            <span className="text-[11px] font-mono text-[var(--gray-400)] w-[44px] shrink-0">{s.px}</span>
            <div
              className="h-5 rounded-sm bg-[var(--cyan-500)] opacity-70 shrink-0"
              style={{ width: s.px }}
            />
          </div>
        ))}
      </div>

      {/* ── Border Radius ─────────────────────────────────────────── */}
      <SectionDivider title="Border Radius — 5 niveles" />
      <div className="mb-12 flex items-end gap-6 flex-wrap">
        {RADIUS_SCALE.map(r => (
          <div key={r.token} className="flex flex-col items-center gap-2">
            <div
              className="size-14 bg-[var(--purple-700)] opacity-80"
              style={{ borderRadius: `var(${r.token})` }}
            />
            <code className="text-[10px] font-mono text-[var(--purple-700)] text-center">{r.token}</code>
            <span className="text-[9px] text-[var(--gray-400)] text-center max-w-[90px]">{r.label}</span>
          </div>
        ))}
      </div>

      {/* ── Sombras ──────────────────────────────────────────────── */}
      <SectionDivider title="Sombras — 3 niveles + none" />
      <div className="mb-12 flex items-end gap-8 flex-wrap">
        {SHADOW_SCALE.map(s => (
          <div key={s.token} className="flex flex-col items-center gap-3">
            <div
              className="w-20 h-14 bg-white rounded-lg"
              style={{ boxShadow: s.value }}
            />
            <code className="text-[10px] font-mono text-[var(--purple-700)] text-center">{s.token}</code>
            <span className="text-[9px] text-[var(--gray-400)] text-center max-w-[100px]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Animación ────────────────────────────────────────────── */}
      <SectionDivider title="Animación" />
      <div className="mb-12 flex gap-8 flex-wrap">
        {[
          { token: '--duration-micro',    value: '150ms',                       label: 'Micro — hover, focus' },
          { token: '--duration-standard', value: '300ms',                       label: 'Standard — modales, menús' },
          { token: '--easing-standard',   value: 'cubic-bezier(0.3, 0, 0, 1)', label: 'Easing estándar' },
        ].map(a => (
          <div key={a.token} className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-[var(--gray-200)] bg-white">
            <code className="text-[11px] font-mono text-[var(--purple-700)]">{a.token}</code>
            <code className="text-[11px] font-mono text-[var(--gray-500)]">{a.value}</code>
            <span className="text-[10px] text-[var(--gray-400)] mt-0.5">{a.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Componente Button — docs
// ─────────────────────────────────────────────────────────────────────────────

type ComponentState = 'Default' | 'Hover' | 'Focus' | 'Active' | 'Disabled' | 'Loading' | 'Error'
const ALL_STATES: ComponentState[] = ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading', 'Error']

function StateTabs({ active, available, onChange }: { active: ComponentState; available: ComponentState[]; onChange: (s: ComponentState) => void }) {
  return (
    <div className="flex items-center gap-1 flex-wrap" role="tablist">
      {ALL_STATES.map(s => {
        const isAvail  = available.includes(s)
        const isActive = s === active
        return (
          <button key={s} role="tab" aria-selected={isActive} disabled={!isAvail} onClick={() => isAvail && onChange(s)}
            className={['px-3 py-1 rounded-md text-[11px] font-semibold transition-all duration-150 border',
              isActive   ? 'bg-[var(--purple-600)] text-white border-[var(--purple-600)]'
              : isAvail  ? 'bg-transparent text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]'
                         : 'opacity-30 text-[var(--gray-400)] border-[var(--gray-300)] cursor-not-allowed'].join(' ')}
          >{s}</button>
        )
      })}
    </div>
  )
}

function PropBadge({ label }: { label: string }) {
  return <span className="inline-flex items-center px-2 py-0.5 rounded bg-[var(--gray-100)] border border-[var(--gray-300)] font-mono text-[10px] text-[var(--gray-600)]">{label}</span>
}

function SpecRow({ label, value, token }: { label: string; value: string; token?: string }) {
  return (
    <tr className="border-b border-[var(--gray-100)]">
      <td className="py-2 pr-3 text-[11px] font-semibold text-[var(--gray-500)] whitespace-nowrap">{label}</td>
      <td className="py-2 pr-3 text-[11px] text-[var(--gray-600)] font-mono">{value}</td>
      {token && <td className="py-2 text-[10px] font-mono text-[var(--purple-600)]">{token}</td>}
    </tr>
  )
}

function PreviewCanvas({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className="flex items-center justify-center min-h-[140px] px-10 py-8 rounded-t-xl border border-b-0 border-[var(--gray-300)]"
      style={dark
        ? { background: 'var(--color-surface-hero-gradient)' }
        : { backgroundImage: 'linear-gradient(45deg,#f0f0f0 25%,transparent 25%),linear-gradient(-45deg,#f0f0f0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#f0f0f0 75%),linear-gradient(-45deg,transparent 75%,#f0f0f0 75%)', backgroundSize: '16px 16px', backgroundPosition: '0 0,0 8px,8px -8px,-8px 0', backgroundColor: '#fafafa' }}
    >{children}</div>
  )
}

const BUTTON_STATES: ComponentState[] = ['Default', 'Hover', 'Focus', 'Active', 'Disabled', 'Loading']

function ButtonDoc() {
  const [activeState, setActiveState] = useState<ComponentState>('Default')
  const [showCode, setShowCode] = useState(false)

  const stateProps: Record<ComponentState, string[]> = {
    Default: ['(sin props)'], Hover: ['CSS :hover'], Focus: ['CSS :focus-visible'],
    Active: ['CSS :active'], Disabled: ['disabled={true}'], Loading: ['isLoading={true}'], Error: ['—'],
  }

  const variants = ['primary', 'secondary', 'tertiary', 'destructive'] as const
  const sizes    = ['sm', 'md', 'lg'] as const

  return (
    <section id="button" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">Button</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L1 — Elemento</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        Elemento de acción principal. 4 variantes de intención × 3 tamaños. Toda acción ejecutable usa Button.
      </p>

      {/* Variantes × Tamaños */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Variantes × Tamaños</p>
        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
          <div className="flex flex-col gap-4">
            {variants.map(v => (
              <div key={v} className="flex items-center gap-4">
                <span className="w-[90px] shrink-0 text-[10px] font-mono text-[var(--gray-500)]">{v}</span>
                <div className="flex items-center gap-3 flex-wrap">
                  {sizes.map(s => (
                    <Button key={s} variant={v} size={s}>REALIZAR OFERTA</Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estados */}
      <div className="grid grid-cols-[1fr_auto] gap-8 items-start">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)]">Estados — Primary md</p>
          <StateTabs active={activeState} available={BUTTON_STATES} onChange={setActiveState} />
          <div className="flex items-center gap-2">{stateProps[activeState].map(p => <PropBadge key={p} label={p} />)}</div>
          <PreviewCanvas>
            <Button
              variant="primary"
              size="md"
              disabled={activeState === 'Disabled'}
              isLoading={activeState === 'Loading'}
            >
              REALIZAR OFERTA
            </Button>
          </PreviewCanvas>
          <div className="relative">
            <div className="absolute top-3 right-3 z-10"><CopyButton text={ButtonSrc} /></div>
            <pre className="overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6">
              <code><CodeHighlight code={ButtonSrc} /></code>
            </pre>
          </div>
        </div>

        <div className="w-[210px] shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Design specs</p>
          <table className="w-full border-collapse">
            <tbody>
              <SpecRow label="Height sm"     value="32px"               token="h-8"                        />
              <SpecRow label="Height md"     value="40px"               token="h-10"                       />
              <SpecRow label="Height lg"     value="48px"               token="h-12"                       />
              <SpecRow label="Radius"        value="4px"                token="--radius-btn"               />
              <SpecRow label="Font"          value="Plus Jakarta Sans"  token="--font-body"                />
              <SpecRow label="Weight"        value="SemiBold 600"       token="--weight-semibold"          />
              <SpecRow label="Tracking"      value="0.9px"              token="--tracking-wider"           />
              <SpecRow label="Primary bg"    value="gradient vault"     token="--color-surface-hero-gradient" />
              <SpecRow label="Shadow"        value="brand tinted"       token="--shadow-brand-tinted"      />
            </tbody>
          </table>
        </div>
      </div>

      {showCode && (
        <div className="mt-6">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">Button.tsx</span>
            <CopyButton text={ButtonSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={ButtonSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Componente Badge — docs
// ─────────────────────────────────────────────────────────────────────────────

const BADGE_TYPES = ['live', 'negotiable', 'closed', 'upcoming', 'new', 'featured'] as const

function BadgeDoc() {
  const [showCode, setShowCode] = useState(false)

  return (
    <section id="badge" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">Badge</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L1 — Elemento</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        Indicador de estado o categoría de un lote. Siempre uppercase, siempre pill. El dot pulsante de <code className="font-mono text-[11px]">live</code> indica subasta en tiempo real.
      </p>

      {/* Variantes × Tamaños */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Variantes × Tamaños</p>
        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
          {(['md', 'sm'] as const).map(size => (
            <div key={size} className="flex items-center gap-3 mb-4 last:mb-0 flex-wrap">
              <span className="w-[28px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]">{size}</span>
              {BADGE_TYPES.map(type => (
                <Badge key={type} type={type} size={size} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Estado disabled */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Estado Disabled</p>
        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
          <div className="flex items-center gap-3 flex-wrap">
            {BADGE_TYPES.map(type => (
              <Badge key={type} type={type} disabled />
            ))}
          </div>
        </div>
      </div>

      {showCode && (
        <div className="mt-2">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">Badge.tsx</span>
            <CopyButton text={BadgeSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={BadgeSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Componente TextField — docs
// ─────────────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function TextFieldDoc() {
  const [showCode, setShowCode] = useState(false)

  return (
    <section id="textfield" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">TextField</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L1 — Elemento</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        Input de texto. Sin border en reposo — el fondo <code className="font-mono text-[11px]">--color-surface-input</code> define el límite. Border ghost solo en focus y error.
      </p>

      {/* Estados */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Estados</p>
        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
          <div className="grid grid-cols-2 gap-4">
            <TextField label="Default"    placeholder="Ingresa tu nombre" />
            <TextField label="Con hint"   placeholder="usuario@email.com" hint="Nunca compartiremos tu email." />
            <TextField label="Error"      placeholder="Ingresa tu nombre" error="Este campo es requerido." defaultValue="Valor inválido" />
            <TextField label="Disabled"   placeholder="Campo deshabilitado" disabled />
            <TextField label="Read-only"  defaultValue="No se puede editar" readOnly />
            <TextField label="Con ícono"  placeholder="Buscar vehículo..." variant="withLeadingIcon" leadingIcon={<SearchIcon />} />
          </div>
        </div>
      </div>

      {/* Trailing action */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Con acción trailing</p>
        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
          <div className="max-w-[280px]">
            <TextField
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              variant="withTrailingAction"
              trailingAction={
                <button type="button" aria-label="Mostrar contraseña"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-action-primary)] transition-colors duration-[var(--duration-micro)]">
                  <EyeIcon />
                </button>
              }
            />
          </div>
        </div>
      </div>

      {showCode && (
        <div className="mt-2">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">TextField.tsx</span>
            <CopyButton text={TextFieldSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={TextFieldSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CountdownTimer + PriceDisplay — docs
// ─────────────────────────────────────────────────────────────────────────────

function CountdownAndPriceDoc() {
  const [showCodeTimer, setShowCodeTimer] = useState(false)
  const [showCodePrice, setShowCodePrice] = useState(false)

  // Timestamps de demo
  const now = Date.now()
  const in45min   = now + 45 * 60 * 1000
  const in3hours  = now + 3 * 60 * 60 * 1000
  const yesterday = now - 1000

  return (
    <>
      {/* ── CountdownTimer ── */}
      <section id="countdown-timer" className="scroll-mt-8">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-3">
            <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">CountdownTimer</h1>
            <span className="text-[11px] font-semibold text-[var(--gray-500)]">L1 — Elemento</span>
          </div>
          <button type="button" onClick={() => setShowCodeTimer(v => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {showCodeTimer ? 'Ocultar' : 'Ver fuente'}
          </button>
        </div>

        <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
          Timer en vivo con Roboto Mono y tabular-nums. Cambia a cyan cuando quedan menos de 60 minutos. Muestra CERRADO al expirar.
        </p>

        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]">default</span>
              <CountdownTimer endsAt={in3hours} />
              <span className="text-[10px] text-[var(--gray-400)]">+3h → color neutro</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]">urgent</span>
              <CountdownTimer endsAt={in45min} />
              <span className="text-[10px] text-[var(--color-text-accent)]">menos de 1h → cyan</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-[80px] shrink-0 text-[10px] font-mono text-[var(--gray-400)]">expired</span>
              <CountdownTimer endsAt={yesterday} />
              <span className="text-[10px] text-[var(--gray-400)]">expirado → CERRADO</span>
            </div>
          </div>
        </div>

        {showCodeTimer && (
          <div className="mb-6">
            <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
              <span className="text-[11px] font-mono text-white/40">CountdownTimer.tsx</span>
              <CopyButton text={CountdownTimerSrc} />
            </div>
            <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
              <code><CodeHighlight code={CountdownTimerSrc} /></code>
            </pre>
          </div>
        )}

        <div className="mt-6 border-b border-[var(--gray-100)]" />
      </section>

      {/* ── PriceDisplay ── */}
      <section id="price-display" className="scroll-mt-8 mt-12">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-center gap-3">
            <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">PriceDisplay</h1>
            <span className="text-[11px] font-semibold text-[var(--gray-500)]">L1 — Elemento</span>
          </div>
          <button type="button" onClick={() => setShowCodePrice(v => !v)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {showCodePrice ? 'Ocultar' : 'Ver fuente'}
          </button>
        </div>

        <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
          Montos monetarios en Roboto Mono con tabular-nums. Nunca sin label. 3 contextos según densidad de la UI.
        </p>

        <div className="p-6 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)] mb-4">
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-[var(--gray-400)] mb-2">hero</span>
              <PriceDisplay context="hero" label="Precio Base" amount={17999} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-[var(--gray-400)] mb-2">card</span>
              <PriceDisplay context="card" label="Precio Base" amount={17999} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-[var(--gray-400)] mb-2">compact</span>
              <PriceDisplay context="compact" label="Precio Base" amount={17999} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-[var(--gray-400)] mb-2">loading</span>
              <PriceDisplay context="card" label="Precio Base" amount={0} isLoading />
            </div>
          </div>
        </div>

        {showCodePrice && (
          <div className="mb-6">
            <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
              <span className="text-[11px] font-mono text-white/40">PriceDisplay.tsx</span>
              <CopyButton text={PriceDisplaySrc} />
            </div>
            <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
              <code><CodeHighlight code={PriceDisplaySrc} /></code>
            </pre>
          </div>
        )}

        <div className="mt-6 border-b border-[var(--gray-100)]" />
      </section>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AuctionCard — docs
// ─────────────────────────────────────────────────────────────────────────────

const DEMO_LOTS: LotData[] = [
  { id: '1', title: 'TOYOTA HILUX', subtitle: '2024 · Lima, Perú',    badge: 'live',       price: 17999, currency: 'US$', priceLabel: 'PRECIO BASE',    endsAt: Date.now() + 44 * 60 * 1000 },
  { id: '2', title: 'BMW 320i',     subtitle: '2023 · Lima, Perú',    badge: 'negotiable', price: 32500, currency: 'US$', priceLabel: 'OFERTA ACTUAL',  endsAt: Date.now() + 2 * 60 * 60 * 1000 },
  { id: '3', title: 'FORD BRONCO',  subtitle: '2022 · Arequipa, Perú',badge: 'upcoming',   price: 24000, currency: 'US$', priceLabel: 'PRECIO BASE',    endsAt: Date.now() + 5 * 60 * 60 * 1000 },
  { id: '4', title: 'KIA SPORTAGE', subtitle: '2021 · Lima, Perú',    badge: 'closed',     price: 14500, currency: 'US$', priceLabel: 'PRECIO FINAL' },
]

function AuctionCardDoc() {
  const [showCode, setShowCode] = useState(false)
  const [favorited, setFavorited] = useState<Set<string>>(new Set())

  const toggle = (id: string | undefined) => {
    if (!id) return
    setFavorited(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section id="auction-card" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">AuctionCard</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L3 — Bloque</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        El componente más crítico de VMC. Representa un lote de subasta. 3 variantes según densidad de UI. La franja de 4px en la base comunica el estado del lote.
      </p>

      {/* Standard — grid */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Standard — grid de listado</p>
        <div className="grid grid-cols-4 gap-3">
          {DEMO_LOTS.map(lot => (
            <AuctionCard
              key={lot.id}
              variant="standard"
              lot={{ ...lot, isFavorited: favorited.has(lot.id!) }}
              onFavorite={toggle}
            />
          ))}
        </div>
      </div>

      {/* Featured */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Featured — lote destacado</p>
        <div className="max-w-[300px]">
          <AuctionCard
            variant="featured"
            lot={{ ...DEMO_LOTS[0], isFavorited: favorited.has('1') }}
            onFavorite={toggle}
          />
        </div>
      </div>

      {/* Compact */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Compact — lista densa</p>
        <div className="rounded-[var(--radius-card)] border border-[var(--gray-300)] overflow-hidden max-w-[520px]">
          {DEMO_LOTS.map(lot => (
            <AuctionCard key={lot.id} variant="compact" lot={lot} />
          ))}
        </div>
      </div>

      {/* Loading skeleton */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Loading — skeleton</p>
        <div className="grid grid-cols-4 gap-3">
          {[1,2,3,4].map(i => <AuctionCard key={i} isLoading />)}
        </div>
      </div>

      {showCode && (
        <div className="mt-2">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">AuctionCard.tsx</span>
            <CopyButton text={AuctionCardSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={AuctionCardSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// BidForm — docs
// ─────────────────────────────────────────────────────────────────────────────

function BidFormDoc() {
  const [showCode, setShowCode] = useState(false)

  return (
    <section id="bid-form" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">BidForm</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L3 — Bloque</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        Formulario de oferta. Validación en tiempo real, paso de confirmación antes de ejecutar, Roboto Mono en el monto. El componente de mayor criticidad económica del sistema.
      </p>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Idle + validación */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-mono text-[var(--gray-400)]">idle / active</p>
          <div className="p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
            <BidForm lotId="demo-1" minimumBid={18500} currentBid={17999} currency="US$" />
          </div>
        </div>

        {/* Sin oferta actual */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-mono text-[var(--gray-400)]">sin oferta actual</p>
          <div className="p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
            <BidForm lotId="demo-2" minimumBid={15000} currency="US$" />
          </div>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-mono text-[var(--gray-400)]">disabled — subasta cerrada</p>
          <div className="p-4 rounded-xl border border-[var(--gray-300)] bg-[var(--color-surface-card)]">
            <BidForm lotId="demo-3" minimumBid={18500} currency="US$" disabled />
          </div>
        </div>
      </div>

      <p className="text-[11px] text-[var(--color-text-muted)] mb-6">
        Flujo completo: ingresa un monto ≥ mínimo → REALIZAR OFERTA → pantalla de confirmación → CONFIRMAR → éxito.
      </p>

      {showCode && (
        <div className="mt-2">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">BidForm.tsx</span>
            <CopyButton text={BidFormSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={BidFormSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Layouts — docs
// ─────────────────────────────────────────────────────────────────────────────

function LayoutsDoc() {
  const [activeSidebar, setActiveSidebar] = useState('subastas')

  return (
    <section id="layouts" className="scroll-mt-8">
      <div className="mb-1">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-[22px] font-bold text-[var(--color-text-primary)] leading-tight">Layouts</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-500)]">L4 — Estructuras</span>
        </div>
        <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
          Marcos estructurales macro. Definen la arquitectura de página. Max-width 1024px · margin auto.
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Header</p>
        <div className="rounded-xl overflow-hidden border border-[var(--gray-300)]">
          <Header user={{ name: 'Julio Herrera' }} />
        </div>
        <p className="mt-2 text-[11px] text-[var(--gray-500)]">Con usuario autenticado</p>
        <div className="mt-2 rounded-xl overflow-hidden border border-[var(--gray-300)]">
          <Header onLogin={() => {}} />
        </div>
        <p className="mt-2 text-[11px] text-[var(--gray-500)]">Sin usuario — botón INGRESA</p>
      </div>

      {/* Sidebar */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Sidebar</p>
        <div className="rounded-xl overflow-hidden border border-[var(--gray-300)]" style={{ width: 280, height: 420 }}>
          <Sidebar activeId={activeSidebar} onNavigate={setActiveSidebar} className="h-full" />
        </div>
        <p className="mt-2 text-[11px] text-[var(--gray-500)]">Los ítems son interactivos — haz click para cambiar el estado activo</p>
      </div>

      {/* Footer */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Footer</p>
        <div className="rounded-xl overflow-hidden border border-[var(--gray-300)]">
          <Footer />
        </div>
      </div>

      {/* PageLayout completo */}
      <div className="mb-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">PageLayout — preview completo (escala 50%)</p>
        <div
          className="rounded-xl overflow-hidden border border-[var(--gray-300)] bg-[var(--gray-100)]"
          style={{ height: 400 }}
        >
          <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%', pointerEvents: 'none' }}>
            <PageLayout user={{ name: 'Julio Herrera' }} activeSection="subastas">
              <div className="flex flex-col gap-4">
                <h2 className="m-0 font-[var(--font-body)] font-[var(--weight-extrabold)] uppercase text-[var(--color-text-primary)]"
                  style={{ fontSize: 'var(--type-section-heading-size)' }}>
                  Subastas Activas
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {DEMO_LOTS.slice(0, 3).map(lot => (
                    <AuctionCard key={lot.id} variant="standard" lot={lot} />
                  ))}
                </div>
              </div>
            </PageLayout>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-[var(--gray-500)]">Header + Sidebar + Content + Footer a 1024px max-width</p>
      </div>

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Componente VehicleCard — docs
// ─────────────────────────────────────────────────────────────────────────────

const VEHICLE_CARD_STATES: ComponentState[] = ['Default', 'Hover', 'Focus', 'Active']

function VehicleCardStatePreview({ state }: { state: ComponentState }) {
  const shadowOverride: Record<ComponentState, string> = {
    Default:  '',
    Hover:    'shadow-[var(--shadow-card-hover)]',
    Focus:    '',
    Active:   'scale-[0.98]',
    Disabled: '', Loading: '', Error: '',
  }
  const wrapClass = state === 'Focus'
    ? 'outline outline-2 outline-offset-2 outline-[var(--color-action-primary)] rounded-[var(--radius-card)]'
    : ''
  return (
    <div className={wrapClass} style={{ display: 'inline-flex' }}>
      <VehicleCard className={shadowOverride[state]} />
    </div>
  )
}

function AuctioneerSectionDoc() {
  const [showCode, setShowCode] = useState(false)
  const DEMO_CARDS = Array.from({ length: 5 }).map((_, i) => ({
    title: ['FORD BRONCO SPORT', 'TOYOTA HILUX', 'NISSAN VERSA', 'TOYOTA ETIOS', 'KIA SPORTAGE'][i],
    subtitle: ['2024 | LIMA, PERÚ', '2024 | TRUJILLO, PERÚ', '2024 | LIMA, PERÚ', '2023 | AREQUIPA, PERÚ', '2024 | LIMA, PERÚ'][i],
    price: ['17,999', '17,999', '3,999', '4,999', '12,999'][i],
  }))
  return (
    <section id="auctioneer-section" className="scroll-mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)] m-0">AuctioneerSection</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5 mb-0">Sección rematador — carousel horizontal con fade + clip</p>
        </div>
        <button onClick={() => setShowCode(s => !s)}
          className="text-[11px] px-3 py-1.5 rounded-md border border-[var(--gray-300)] text-[var(--gray-500)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)] transition-colors bg-white cursor-pointer">
          {showCode ? 'Ocultar código' : 'Ver código'}
        </button>
      </div>
      <div className="rounded-xl border border-[var(--gray-300)] overflow-hidden mb-4">
        <div className="w-[708px] max-w-full mx-auto">
          <AuctioneerSection
            title="ME INTERESA"
            offerCount={5}
            profileLinkLabel="IR AL PERFIL"
            onProfileClick={() => {}}
            cards={DEMO_CARDS}
          />
        </div>
      </div>
      {showCode && (
        <div className="mt-4">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">AuctioneerSection.tsx</span>
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={AuctioneerSectionSrc} /></code>
          </pre>
        </div>
      )}
    </section>
  )
}

function VehicleCardDoc() {
  const [activeState, setActiveState] = useState<ComponentState>('Default')
  const [showCode, setShowCode]       = useState(false)

  const stateProps: Record<ComponentState, string[]> = {
    Default:  ['(sin props)'],
    Hover:    ['CSS :hover'],
    Focus:    ['CSS :focus-visible (botón)'],
    Active:   ['CSS :active'],
    Disabled: ['—'], Loading: ['—'], Error: ['—'],
  }

  return (
    <section id="vehicle-card" className="scroll-mt-8">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <h1 className="text-[22px] font-bold text-[var(--purple-900)] leading-tight">Vehicle Card</h1>
          <span className="text-[11px] font-semibold text-[var(--gray-400)]">🟢 Confirmado</span>
        </div>
        <button type="button" onClick={() => setShowCode(v => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold border transition-all duration-150 text-[var(--gray-500)] border-[var(--gray-300)] hover:border-[var(--purple-700)] hover:text-[var(--purple-700)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 3L1 6l2.5 3M8.5 3L11 6l-2.5 3M7 1.5l-2 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {showCode ? 'Ocultar' : 'Ver fuente'}
        </button>
      </div>

      <p className="text-[13px] text-[var(--gray-500)] leading-5 mb-6 max-w-[560px]">
        Tarjeta de vehículo con imagen, precio y acción. 228px fijo, radio 16px, shadow SM en reposo y LG en hover.
      </p>

      <div className="grid grid-cols-[1fr_auto] gap-8 items-start">
        <div className="flex flex-col gap-4">
          <StateTabs active={activeState} available={VEHICLE_CARD_STATES} onChange={setActiveState} />
          <div className="flex items-center gap-2">{stateProps[activeState].map(p => <PropBadge key={p} label={p} />)}</div>
          <PreviewCanvas><VehicleCardStatePreview state={activeState} /></PreviewCanvas>
          <div className="relative">
            <div className="absolute top-3 right-3 z-10"><CopyButton text={VehicleCardSrc} /></div>
            <pre className="overflow-x-auto p-5 pt-12 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[320px] border-t border-white/6">
              <code><CodeHighlight code={VehicleCardSrc} /></code>
            </pre>
          </div>
        </div>

        <div className="w-[210px] shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Design specs</p>
          <table className="w-full border-collapse">
            <tbody>
              <SpecRow label="Width"        value="flexible (w-full)"               token="parent grid"          />
              <SpecRow label="Image height" value="128px"                          token="h-[128px]"            />
              <SpecRow label="Px horiz"     value="12px"                           token="--space-3"            />
              <SpecRow label="Background"   value="#fefdfc"                        token="--color-surface-card" />
              <SpecRow label="Radius"       value="16px"                           token="--radius-card"        />
              <SpecRow label="Shadow rest"  value="0 2px 4px rgba(0,0,0,.06)"     token="--shadow-card"        />
              <SpecRow label="Shadow hover" value="0 8px 16px rgba(0,0,0,.10)"    token="--shadow-card-hover"  />
              <SpecRow label="Title"        value="PJS Bold 12px/20px uppercase"   token="--size-12"            />
              <SpecRow label="Subtitle"     value="PJS 400 11px/16px"              token="--size-11"            />
              <SpecRow label="Precio label" value="PJS 600 11px/16px uppercase"    token="--size-11"            />
              <SpecRow label="Precio"       value="PJS Bold 16px/24px tabular"     token="--color-brand-live"   />
              <SpecRow label="Fav. button"  value="32×32px, radius-full"           token="--radius-full"        />
              <SpecRow label="Strip"        value="4px amber"                      token="--color-brand-live"   />
            </tbody>
          </table>
        </div>
      </div>

      {showCode && (
        <div className="mt-6">
          <div className="flex items-center justify-between bg-[#1e1e1e] px-4 py-2.5 rounded-t-xl border border-b-0 border-white/10">
            <span className="text-[11px] font-mono text-white/40">VehicleCard.tsx</span>
            <CopyButton text={VehicleCardSrc} />
          </div>
          <pre className="overflow-x-auto p-5 rounded-b-xl bg-[#1e1e1e] text-[12.5px] leading-[22px] font-mono max-h-[520px]">
            <code><CodeHighlight code={VehicleCardSrc} /></code>
          </pre>
        </div>
      )}

      <div className="mt-12 border-b border-[var(--gray-100)]" />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar nav
// ─────────────────────────────────────────────────────────────────────────────

type NavItem = { id: string; label: string; category: string; status: 'done' | 'wip' | 'pending' }

const NAV_ITEMS: NavItem[] = [
  // Frames
  { id: 'frame-homepage', label: 'Homepage',        category: 'Frames',     status: 'done' },
  { id: 'frame-detalle',  label: 'Detalle de Lote', category: 'Frames',     status: 'done' },
  // Foundation
  { id: 'tokens',       label: 'Tokens',        category: 'Fundación',  status: 'done' },
  // Átomos
  { id: 'button-cta',      label: 'Button / CTA',     category: 'Átomos',     status: 'done' },
  { id: 'iconbutton',      label: 'IconButton',       category: 'Átomos',     status: 'done' },
  { id: 'badge',           label: 'Badge',            category: 'Átomos',     status: 'done' },
  { id: 'avatar',          label: 'Avatar',           category: 'Átomos',     status: 'done' },
  { id: 'divider',         label: 'Divider',          category: 'Átomos',     status: 'done' },
  { id: 'image',           label: 'Image',            category: 'Átomos',     status: 'done' },
  { id: 'textfield',       label: 'TextField',        category: 'Átomos',     status: 'done' },
  { id: 'checkbox-radio',  label: 'Checkbox / Radio', category: 'Átomos',     status: 'done' },
  { id: 'searchinput',     label: 'SearchInput',      category: 'Átomos',     status: 'done' },
  { id: 'selectfield',     label: 'SelectField',      category: 'Átomos',     status: 'done' },
  { id: 'slider',          label: 'Slider',           category: 'Átomos',     status: 'done' },
  { id: 'countdown-price', label: 'Countdown / Price',category: 'Átomos',     status: 'done' },
  { id: 'alert',           label: 'Alert',            category: 'Átomos',     status: 'done' },
  { id: 'toast',           label: 'Toast',            category: 'Átomos',     status: 'done' },
  // Moléculas
  { id: 'skeleton',         label: 'Skeleton',         category: 'Moléculas',  status: 'done' },
  { id: 'tabbar',           label: 'TabBar',           category: 'Moléculas',  status: 'done' },
  { id: 'accordion',        label: 'Accordion',        category: 'Moléculas',  status: 'done' },
  { id: 'modal',            label: 'Modal',            category: 'Moléculas',  status: 'done' },
  { id: 'dropdown',         label: 'Dropdown',         category: 'Moléculas',  status: 'done' },
  { id: 'tooltip',          label: 'Tooltip',          category: 'Moléculas',  status: 'done' },
  { id: 'breadcrumb',       label: 'Breadcrumb',       category: 'Moléculas',  status: 'done' },
  { id: 'pagination',       label: 'Pagination',       category: 'Moléculas',  status: 'done' },
  { id: 'auction-card',     label: 'AuctionCard',      category: 'Moléculas',  status: 'done' },
  { id: 'bid-form',         label: 'BidForm',          category: 'Moléculas',  status: 'done' },
  { id: 'vehicle-card',     label: 'Vehicle Card',     category: 'Organismos', status: 'done' },
  { id: 'auctioneer-section', label: 'Auctioneer Section', category: 'Organismos', status: 'done' },
  { id: 'page-layout',      label: 'PageLayout',       category: 'Organismos', status: 'done' },
  { id: 'hero-section',     label: 'HeroSection',      category: 'Organismos', status: 'done' },
  { id: 'user-wallet',      label: 'UserWallet',       category: 'Moléculas',  status: 'done' },
  // L3 Bloques
  { id: 'filter-bar',            label: 'FilterBar',            category: 'Bloques', status: 'done' },
  { id: 'auction-status-banner', label: 'AuctionStatusBanner',  category: 'Bloques', status: 'done' },
  { id: 'vehicle-specs-row',     label: 'VehicleSpecsRow',      category: 'Bloques', status: 'done' },
  { id: 'bid-history-list',      label: 'BidHistoryList',       category: 'Bloques', status: 'done' },
  { id: 'vehicle-image-gallery', label: 'VehicleImageGallery',  category: 'Bloques', status: 'done' },
  { id: 'seller-card',           label: 'SellerCard',           category: 'Bloques', status: 'done' },
  { id: 'auction-summary-widget',label: 'AuctionSummaryWidget', category: 'Bloques', status: 'done' },
]

const STATUS_DOT: Record<NavItem['status'], string> = {
  done: 'bg-emerald-400', wip: 'bg-amber-400', pending: 'bg-[var(--gray-300)]',
}

function DocsSidebar({ activeId }: { activeId: string }) {
  const categories = [...new Set(NAV_ITEMS.map(i => i.category))]
  return (
    <nav className="w-[220px] shrink-0 sticky top-0 h-screen overflow-y-auto py-6 flex flex-col" aria-label="Design system docs">
      {/* Logo */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="size-6 rounded bg-[var(--cyan-500)] flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l2.5 4 2.5-4 2.5 4L12 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <span className="font-bold text-[13px] text-[var(--purple-900)]">
            VMC <span className="text-[var(--cyan-500)]">Design</span>
          </span>
        </div>
        <p className="text-[10px] text-[var(--gray-400)] pl-8">Fase 3 — UI Kit</p>
      </div>

      {categories.map(cat => (
        <div key={cat} className="mb-4 px-2">
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--gray-400)] px-2 mb-1.5">{cat}</p>
          {NAV_ITEMS.filter(i => i.category === cat).map(item => (
            <a key={item.id}
              href={item.category === 'Frames' ? `#/frames/${item.id.replace('frame-', '')}` : `#${item.id}`}
              className={['flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] transition-all duration-100 no-underline',
                activeId === item.id
                  ? 'bg-[var(--purple-700)] text-white font-semibold'
                  : 'text-[var(--gray-500)] hover:text-[var(--gray-600)] hover:bg-[var(--gray-50)]'].join(' ')}
            >
              <span className={`size-1.5 rounded-full shrink-0 ${STATUS_DOT[item.status]}`} aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </div>
      ))}

      <div className="mt-auto px-4 py-4 border-t border-[var(--gray-100)]">
        <p className="text-[9px] text-[var(--gray-400)] leading-4">
          React · TS · Tailwind v4<br/>Tokens OKLCH · W3C DTCG
        </p>
      </div>
    </nav>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// L1 Forms — Checkbox, RadioButton, SearchInput, SelectField
// ─────────────────────────────────────────────────────────────────────────────

function CheckboxRadioDoc() {
  const [showCode, setShowCode] = useState(false)
  const [cb1, setCb1] = useState(true)
  const [cb2, setCb2] = useState(false)
  const [radio, setRadio] = useState('op1')
  return (
    <section id="checkbox-radio" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Checkbox / RadioButton</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Controles de selección accesibles con estado controlado y hint.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1">Checkbox</p>
            <Checkbox label="Activo (checked)" checked={cb1} onChange={setCb1} />
            <Checkbox label="Inactivo" checked={cb2} onChange={setCb2} hint="Selecciona esta opción para continuar" />
            <Checkbox label="Deshabilitado" checked disabled />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1">RadioButton</p>
            <RadioButton label="Opción 1" value="op1" name="demo-radio" checked={radio === 'op1'} onChange={setRadio} />
            <RadioButton label="Opción 2" value="op2" name="demo-radio" checked={radio === 'op2'} onChange={setRadio} hint="Con descripción adicional" />
            <RadioButton label="Deshabilitada" value="op3" name="demo-radio" checked={false} disabled />
          </div>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={CheckboxSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function SearchInputDoc() {
  const [showCode, setShowCode] = useState(false)
  const [val, setVal] = useState('')
  return (
    <section id="searchinput" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">SearchInput</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Input de búsqueda con ícono leading, botón clear y soporte Enter/Escape.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-4 max-w-[400px]">
          <SearchInput value={val} onChange={setVal} onSearch={v => console.log('search:', v)} />
          <SearchInput disabled placeholder="Deshabilitado" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={SearchInputSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function SelectFieldDoc() {
  const [showCode, setShowCode] = useState(false)
  const [val, setVal] = useState('')
  const OPTIONS = [
    { value: 'auto', label: 'Automóvil' },
    { value: 'camion', label: 'Camión' },
    { value: 'moto', label: 'Motocicleta', disabled: true },
    { value: 'bus', label: 'Bus' },
  ]
  return (
    <section id="selectfield" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">SelectField</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Select nativo con chevron overlay, label semibold uppercase, hint y error.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <SelectField label="Tipo de vehículo" options={OPTIONS} value={val} onChange={setVal} hint="Selecciona para filtrar" className="max-w-[240px]" />
          <SelectField label="Con error" options={OPTIONS} error="Este campo es requerido" className="max-w-[240px]" />
          <SelectField label="Deshabilitado" options={OPTIONS} disabled className="max-w-[240px]" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={SelectFieldSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function AlertDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="alert" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Alert</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Bandas de feedback inline: success / error / warning / info. Dismissible opcional.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-3 max-w-[480px]">
          <Alert type="success" message="Tu oferta fue registrada correctamente." />
          <Alert type="error" message="No se pudo procesar el pago. Intenta de nuevo." isDismissible />
          <Alert type="warning" message="Esta subasta cierra en menos de 10 minutos." isDismissible />
          <Alert type="info" message="Recuerda que las pujas son vinculantes según el reglamento." />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={AlertSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function ToastDoc() {
  const [showCode, setShowCode] = useState(false)
  const [toasts, setToasts] = useState<{ id: number; type: 'success' | 'error' | 'warning' | 'info'; msg: string }[]>([])
  const nextId = useState(0)
  const add = (type: 'success' | 'error' | 'warning' | 'info', msg: string) => {
    const id = ++nextId[0]
    setToasts(t => [...t, { id, type, msg }])
  }
  const dismiss = (id: number) => setToasts(t => t.filter(x => x.id !== id))
  return (
    <section id="toast" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Toast</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Notificaciones flotantes con auto-dismiss, entrada animada y ToastContainer.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-2">
          <button type="button" onClick={() => add('success', 'Oferta registrada correctamente.')} className="px-3 py-1.5 rounded-md bg-emerald-500 text-white text-[11px] font-semibold border-0 cursor-pointer">+ Success</button>
          <button type="button" onClick={() => add('error', 'Error al procesar el pago.')} className="px-3 py-1.5 rounded-md bg-red-500 text-white text-[11px] font-semibold border-0 cursor-pointer">+ Error</button>
          <button type="button" onClick={() => add('warning', 'Subasta cierra en 5 minutos.')} className="px-3 py-1.5 rounded-md bg-amber-500 text-white text-[11px] font-semibold border-0 cursor-pointer">+ Warning</button>
          <button type="button" onClick={() => add('info', 'Las pujas son vinculantes.')} className="px-3 py-1.5 rounded-md bg-blue-500 text-white text-[11px] font-semibold border-0 cursor-pointer">+ Info</button>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={ToastSrc} />
            </pre>
          </div>
        )}
      </div>
      <ToastContainer>
        {toasts.map(t => (
          <Toast key={t.id} type={t.type} message={t.msg} onDismiss={() => dismiss(t.id)} />
        ))}
      </ToastContainer>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// L2 — Skeleton, TabBar, Accordion, Modal
// ─────────────────────────────────────────────────────────────────────────────

function SkeletonDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="skeleton" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Skeleton</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Estados de carga: text · rect · circle · card. animate-pulse sobre gray-200.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-8 items-start">
          <div className="flex flex-col gap-3 min-w-[200px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Text / Lines</p>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={200} lines={3} />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Shapes</p>
            <Skeleton variant="circle" width={40} />
            <Skeleton variant="rect" width={120} height={36} />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Card</p>
            <Skeleton variant="card" className="w-[200px]" />
          </div>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={SkeletonSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function TabBarDoc() {
  const [showCode, setShowCode] = useState(false)
  const [activeU, setActiveU] = useState('activas')
  const [activeP, setActiveP] = useState('info')
  const TABS = [
    { id: 'activas',   label: 'Activas',   count: 12 },
    { id: 'cerradas',  label: 'Cerradas',  count: 4  },
    { id: 'pendientes',label: 'Pendientes'            },
  ]
  const TABS2 = [
    { id: 'info',     label: 'Ficha técnica' },
    { id: 'ofertas',  label: 'Historial de ofertas' },
    { id: 'docs',     label: 'Documentos', disabled: true },
  ]
  return (
    <section id="tabbar" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">TabBar</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Navegación por pestañas: variante underline y pill. Con badges de conteo.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">Underline (default)</p>
            <TabBar items={TABS} activeId={activeU} onChange={setActiveU} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">Pill</p>
            <TabBar items={TABS2} activeId={activeP} onChange={setActiveP} variant="pill" />
          </div>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={TabBarSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function AccordionDoc() {
  const [showCode, setShowCode] = useState(false)
  const ITEMS = [
    { title: '¿Cómo funciona la subasta?', content: 'Las subastas VMC se realizan en tiempo real. Cada participante registra sus pujas y el sistema valida contra el mínimo vigente.' },
    { title: '¿Cuándo debo pagar?', content: 'El ganador tiene 48 horas hábiles para completar el pago. De lo contrario, el lote pasa al siguiente postor.' },
    { title: '¿Puedo cancelar una oferta?', content: 'No. Las pujas son vinculantes según el reglamento vigente de VMC Subastas.', defaultOpen: true },
  ]
  return (
    <section id="accordion" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Accordion</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Disclosure accesible con aria-expanded. Single o multi-panel. Chevron animado.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-6">
          <div className="max-w-[480px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">Single open (default)</p>
            <Accordion items={ITEMS} />
          </div>
          <div className="max-w-[480px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">Multi open</p>
            <Accordion items={ITEMS} allowMultiple />
          </div>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={AccordionSrc} />
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}

function ModalDoc() {
  const [showCode, setShowCode] = useState(false)
  const [openSm, setOpenSm] = useState(false)
  const [openMd, setOpenMd] = useState(false)
  const [openLg, setOpenLg] = useState(false)
  return (
    <section id="modal" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Modal</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Dialog accesible con portal, backdrop blur, Escape, focus-trap header/footer opcionales.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-2">
          <button type="button" onClick={() => setOpenSm(true)} className="px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer">Abrir sm</button>
          <button type="button" onClick={() => setOpenMd(true)} className="px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer">Abrir md</button>
          <button type="button" onClick={() => setOpenLg(true)} className="px-3 py-1.5 rounded-md bg-[var(--purple-700)] text-white text-[11px] font-semibold border-0 cursor-pointer">Abrir lg con footer</button>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre">
              <CodeHighlight code={ModalSrc} />
            </pre>
          </div>
        )}
      </div>
      <Modal isOpen={openSm} onClose={() => setOpenSm(false)} title="Confirmar acción" size="sm">
        <p>¿Deseas retirar tu oferta de S/ 12,500 para el lote #A-0042?</p>
      </Modal>
      <Modal isOpen={openMd} onClose={() => setOpenMd(false)} title="Detalles del vehículo" size="md">
        <p>Toyota Hilux 2022 · 4x4 · Diesel · 45,000 km · Estado: Bueno</p>
        <p className="mt-3">Precio base: <strong>S/ 48,000</strong></p>
      </Modal>
      <Modal isOpen={openLg} onClose={() => setOpenLg(false)} title="Reglamento de subastas" size="lg"
        footer={<><button type="button" onClick={() => setOpenLg(false)} className="px-4 py-2 rounded-[var(--radius-btn)] text-[var(--color-text-muted)] bg-transparent border border-[var(--color-border-ghost)] cursor-pointer text-[13px]">Cerrar</button><button type="button" className="px-4 py-2 rounded-[var(--radius-btn)] bg-[var(--purple-700)] text-white border-0 cursor-pointer text-[13px] font-semibold">Aceptar</button></>}>
        <p>Las pujas realizadas en VMC Subastas son vinculantes. Al ofertar, el participante acepta las condiciones del lote y se compromete a completar el pago en el plazo indicado.</p>
        <p className="mt-3">El ganador debe presentar DNI o RUC vigente junto con el comprobante de pago.</p>
      </Modal>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// L1 faltantes — IconButton, Avatar, Divider, Image, Slider
// ─────────────────────────────────────────────────────────────────────────────

function IconButtonDoc() {
  const [showCode, setShowCode] = useState(false)
  const [fav, setFav] = useState(false)
  const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={filled ? 'currentColor' : 'none'}>
      <path d="M8 13.5S2 9.5 2 5.5a3.5 3.5 0 017 0 3.5 3.5 0 017 0C16 9.5 8 13.5 8 13.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  )
  const ShareIcon = () => <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="11" cy="3" r="1.8" stroke="currentColor" strokeWidth="1.3"/><circle cx="11" cy="12" r="1.8" stroke="currentColor" strokeWidth="1.3"/><circle cx="4" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.3"/><path d="M9.2 4l-3.5 2m3.5 3-3.5-2" stroke="currentColor" strokeWidth="1.3"/></svg>
  const CloseIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  return (
    <section id="iconbutton" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">IconButton</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Botón solo ícono. Variantes ghost / filled / outline. Tamaños sm/md/lg. Estado isActive.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-center">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Ghost</p>
            <div className="flex gap-2 items-center">
              <IconButton icon={<HeartIcon filled={fav} />} label="Favorito" variant="ghost" isActive={fav} onClick={() => setFav(f => !f)} />
              <IconButton icon={<ShareIcon />} label="Compartir" variant="ghost" size="sm" />
              <IconButton icon={<CloseIcon />} label="Cerrar" variant="ghost" size="lg" />
              <IconButton icon={<CloseIcon />} label="Deshabilitado" variant="ghost" disabled />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Filled</p>
            <div className="flex gap-2 items-center">
              <IconButton icon={<HeartIcon filled />} label="Favorito" variant="filled" size="sm" />
              <IconButton icon={<HeartIcon filled />} label="Favorito" variant="filled" size="md" />
              <IconButton icon={<HeartIcon filled />} label="Favorito" variant="filled" size="lg" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Outline</p>
            <div className="flex gap-2 items-center">
              <IconButton icon={<ShareIcon />} label="Compartir" variant="outline" size="sm" />
              <IconButton icon={<ShareIcon />} label="Compartir" variant="outline" size="md" />
              <IconButton icon={<ShareIcon />} label="Compartir" variant="outline" size="lg" />
            </div>
          </div>
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={IconButtonSrc} /></pre></div>}
      </div>
    </section>
  )
}

function AvatarDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="avatar" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Avatar</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Foto de perfil con fallback a iniciales. Color generado desde el nombre. Status indicator.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-end">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Tamaños</p>
            <div className="flex gap-3 items-end">
              <Avatar name="Carlos Paredes" size="xs" />
              <Avatar name="Carlos Paredes" size="sm" />
              <Avatar name="Carlos Paredes" size="md" />
              <Avatar name="Carlos Paredes" size="lg" />
              <Avatar name="Carlos Paredes" size="xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Status</p>
            <div className="flex gap-3 items-end">
              <Avatar name="Ana Torres" size="md" status="online" />
              <Avatar name="Roberto M" size="md" status="busy" />
              <Avatar name="Lucia F" size="md" status="away" />
              <Avatar name="Jorge H" size="md" status="offline" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Colores auto</p>
            <div className="flex gap-2">
              {['VMC Subastas', 'Pedro Ruiz', 'Diana Castro', 'Marco Silva'].map(n => <Avatar key={n} name={n} size="sm" />)}
            </div>
          </div>
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={AvatarSrc} /></pre></div>}
      </div>
    </section>
  )
}

function DividerDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="divider" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Divider</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Separador horizontal y vertical. Con label centrado opcional.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-5 max-w-[400px]">
          <Divider />
          <Divider label="o continúa con" />
          <Divider label="Sección 2" />
          <div className="flex gap-4 items-stretch h-12">
            <span className="font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center">Izq</span>
            <Divider orientation="vertical" />
            <span className="font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center">Centro</span>
            <Divider orientation="vertical" />
            <span className="font-[var(--font-body)] text-[11px] text-[var(--gray-500)] self-center">Der</span>
          </div>
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={DividerSrc} /></pre></div>}
      </div>
    </section>
  )
}

function ImageDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="image" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Image</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Wrapper con aspect-ratio (16/9, 4/3, PHI, 1/1, 3/2), lazy load, shimmer y fallback.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <div className="w-[200px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2">16/9</p>
            <DSImage src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80" alt="Auto" ratio="16/9" />
          </div>
          <div className="w-[180px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2">PHI (1.618)</p>
            <DSImage src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80" alt="Camioneta" ratio="phi" />
          </div>
          <div className="w-[160px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2">1/1</p>
            <DSImage src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80" alt="Detalle" ratio="1/1" />
          </div>
          <div className="w-[160px]">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-2">Error fallback</p>
            <DSImage src="https://url-invalida.xyz/foto.jpg" alt="Error" ratio="16/9" />
          </div>
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={ImageSrc} /></pre></div>}
      </div>
    </section>
  )
}

function SliderDoc() {
  const [showCode, setShowCode] = useState(false)
  const [val, setVal] = useState(35000)
  const [range, setRange] = useState<[number, number]>([20000, 80000])
  const fmt = (v: number) => `S/ ${v.toLocaleString('es-PE')}`
  return (
    <section id="slider" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Slider / RangeSlider</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Input de rango simple y doble. Usado en FilterBar para precio mín/máx.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-6 max-w-[400px]">
          <Slider label="Precio máximo" min={0} max={150000} step={1000} value={val} onChange={setVal} formatValue={fmt} />
          <RangeSlider label="Rango de precio" min={0} max={150000} step={1000} value={range} onChange={setRange} formatValue={fmt} />
          <Slider label="Deshabilitado" min={0} max={100} value={40} onChange={() => {}} disabled />
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={SliderSrc} /></pre></div>}
      </div>
    </section>
  )
}

function UserWalletDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="user-wallet" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">UserWallet</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Saldo disponible, monto reservado en pujas activas, estado de cuenta, acciones.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <UserWallet balance={12500} reserved={3000} userName="Carlos" status="active" onDeposit={() => {}} onWithdraw={() => {}} className="w-[280px]" />
          <UserWallet balance={500} status="pending" className="w-[240px]" />
          <UserWallet balance={8000} reserved={8000} status="suspended" className="w-[240px]" />
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)]">Compact</p>
            <UserWallet balance={12500} reserved={3000} compact />
          </div>
        </div>
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={UserWalletSrc} /></pre></div>}
      </div>
    </section>
  )
}

function HeroSectionDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="hero-section" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">HeroSection</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Sección hero con gradiente brand, eyebrow, título, CTAs y stats. Fondo de imagen opcional.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <HeroSection
          eyebrow="The Vault — Subastas Exclusivas"
          title={<>Vehículos premium.<br />Subastas en tiempo real.</>}
          subtitle="Participa en subastas curadas de los mejores vehículos del mercado peruano. Ofertas vinculantes, pagos seguros."
          primaryAction={{ label: 'Ver subastas activas', onClick: () => {} }}
          secondaryAction={{ label: 'Cómo funciona', onClick: () => {} }}
          stat1={{ value: '312+', label: 'Subastas realizadas' }}
          stat2={{ value: 'S/ 48M', label: 'En transacciones' }}
          stat3={{ value: '2,400+', label: 'Compradores activos' }}
        />
        {showCode && <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto"><pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={HeroSectionSrc} /></pre></div>}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// L2 — Dropdown, Tooltip, Breadcrumb, Pagination
// ─────────────────────────────────────────────────────────────────────────────

function DropdownDoc() {
  const [showCode, setShowCode] = useState(false)
  const [selected, setSelected] = useState('')
  const ITEMS = [
    { id: 'edit',    label: 'Editar',    icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M9 2l2 2L4 11H2V9L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg> },
    { id: 'share',   label: 'Compartir', icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="10" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="10" cy="10.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/><circle cx="3" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8.5 3.5l-4 2m4 3-4-2" stroke="currentColor" strokeWidth="1.3"/></svg>, shortcut: '⌘S', dividerAfter: true },
    { id: 'archive', label: 'Archivar',  disabled: true },
    { id: 'delete',  label: 'Eliminar',  danger: true,  icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 3.5h9M5 3.5V2h3v1.5M10.5 3.5L10 11H3L2.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ]
  const triggerBtn = (label: string) => (
    <button type="button" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)] text-[var(--color-text-body)] font-[var(--font-body)] border-0 cursor-pointer hover:bg-[var(--gray-200)] transition-colors" style={{ fontSize: 'var(--type-body-sm-size)' }}>
      {label}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  )
  return (
    <section id="dropdown" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Dropdown</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Menú contextual accesible con teclado, ícono, shortcut, peligro, divisor y alineación.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start min-h-[160px]">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1">Align left</p>
            <Dropdown trigger={triggerBtn('Acciones')} items={ITEMS} onSelect={setSelected} align="left" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-1">Align right</p>
            <Dropdown trigger={triggerBtn('Opciones')} items={ITEMS} onSelect={setSelected} align="right" />
          </div>
          {selected && <p className="self-end font-[var(--font-body)] text-[var(--color-text-muted)] text-[11px]">Seleccionado: <strong>{selected}</strong></p>}
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={DropdownSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function TooltipDoc() {
  const [showCode, setShowCode] = useState(false)
  const chip = (label: string) => (
    <span className="inline-flex items-center h-8 px-3 rounded-[var(--radius-btn)] bg-[var(--color-surface-input)] font-[var(--font-body)] text-[var(--color-text-body)] cursor-default select-none" style={{ fontSize: 'var(--type-body-sm-size)' }}>{label}</span>
  )
  return (
    <section id="tooltip" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Tooltip</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Hint flotante con 4 posiciones, delay configurable, accesible con aria-describedby.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-10 bg-[var(--gray-50)] flex flex-wrap gap-6 justify-center items-center">
          <Tooltip content="Aparece arriba" placement="top">{chip('Top')}</Tooltip>
          <Tooltip content="Aparece abajo" placement="bottom">{chip('Bottom')}</Tooltip>
          <Tooltip content="Aparece a la izquierda" placement="left">{chip('Left')}</Tooltip>
          <Tooltip content="Aparece a la derecha" placement="right">{chip('Right')}</Tooltip>
          <Tooltip content="Sin delay" delay={0} placement="top">{chip('Sin delay')}</Tooltip>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={TooltipSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function BreadcrumbDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="breadcrumb" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Breadcrumb</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Navegación jerárquica con ícono home, soporte href y onClick, aria-current en último nodo.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Subastas', href: '#' }, { label: 'Lote A-0042' }]} />
          <Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Mis ofertas', href: '#' }, { label: 'Historial', href: '#' }, { label: 'Toyota Hilux 2022' }]} />
          <Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Página actual' }]} />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={BreadcrumbSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function PaginationDoc() {
  const [showCode, setShowCode] = useState(false)
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(5)
  const [page3, setPage3] = useState(12)
  return (
    <section id="pagination" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">Pagination</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Paginación con ellipsis inteligente, página activa resaltada, aria-current.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-col gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">5 páginas</p>
            <Pagination currentPage={page1} totalPages={5} onChange={setPage1} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">20 páginas — página {page2}</p>
            <Pagination currentPage={page2} totalPages={20} onChange={setPage2} />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--gray-400)] mb-3">50 páginas — página {page3}</p>
            <Pagination currentPage={page3} totalPages={50} onChange={setPage3} />
          </div>
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={PaginationSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// L3 Bloques
// ─────────────────────────────────────────────────────────────────────────────

function FilterBarDoc() {
  const [showCode, setShowCode] = useState(false)
  const [filters, setFilters] = useState({})
  return (
    <section id="filter-bar" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">FilterBar</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Barra de filtros para el catálogo: búsqueda, tipo, marca, precio, estado.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-4 bg-[var(--gray-50)]">
          <FilterBar value={filters} onChange={setFilters} onReset={() => setFilters({})} />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={FilterBarSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function AuctionStatusBannerDoc() {
  const [showCode, setShowCode] = useState(false)
  const soon = Date.now() + 45 * 60 * 1000
  return (
    <section id="auction-status-banner" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">AuctionStatusBanner</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Banda de estado con countdown en tiempo real. 6 variantes de estado.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="flex flex-col gap-2 p-4 bg-[var(--gray-50)]">
          <AuctionStatusBanner status="live"     lotId="A-0042" lotTitle="Toyota Hilux 2022 · 4x4 Diesel" endsAt={soon} />
          <AuctionStatusBanner status="upcoming" lotId="A-0043" lotTitle="Hyundai Tucson 2023 · Automática" endsAt={Date.now() + 2 * 60 * 60 * 1000} />
          <AuctionStatusBanner status="negotiable" lotId="A-0044" lotTitle="Kia Sportage 2021" />
          <AuctionStatusBanner status="closed"   lotId="A-0040" lotTitle="Nissan Frontier 2020" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={AuctionStatusBannerSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function VehicleSpecsRowDoc() {
  const [showCode, setShowCode] = useState(false)
  const SPECS = [
    { icon: 'year' as const,         label: 'Año',          value: '2022'      },
    { icon: 'km' as const,           label: 'Kilometraje',  value: '45,200 km' },
    { icon: 'fuel' as const,         label: 'Combustible',  value: 'Diésel'    },
    { icon: 'transmission' as const, label: 'Transmisión',  value: 'Automática'},
    { icon: 'engine' as const,       label: 'Motor',        value: '2.8L 4 cil'},
    { icon: 'doors' as const,        label: 'Puertas',      value: '4'         },
    { icon: 'color' as const,        label: 'Color',        value: 'Blanco'    },
    { icon: 'vin' as const,          label: 'VIN',          value: 'MR1FZ29G5N0123456' },
  ]
  return (
    <section id="vehicle-specs-row" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">VehicleSpecsRow</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Grid de especificaciones técnicas del vehículo. VIN en Roboto Mono.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)]">
          <VehicleSpecsRow specs={SPECS} />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={VehicleSpecsRowSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function BidHistoryListDoc() {
  const [showCode, setShowCode] = useState(false)
  const now = Date.now()
  const BIDS = [
    { id: '1', bidder: 'Carlos Paredes',   amount: 52500, placedAt: new Date(now - 30000),  isWinning: true  },
    { id: '2', bidder: 'Ana Torres',       amount: 50000, placedAt: new Date(now - 120000), isWinning: false },
    { id: '3', bidder: 'Roberto Mendoza',  amount: 48000, placedAt: new Date(now - 300000), isWinning: false, isAnonymous: true },
    { id: '4', bidder: 'Lucía Fernández',  amount: 46000, placedAt: new Date(now - 600000), isWinning: false },
    { id: '5', bidder: 'Jorge Huanca',     amount: 44000, placedAt: new Date(now - 900000), isWinning: false },
    { id: '6', bidder: 'María Quispe',     amount: 42000, placedAt: new Date(now - 1200000),isWinning: false },
  ]
  return (
    <section id="bid-history-list" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">BidHistoryList</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Historial de pujas: mayor oferta destacada, avatares, tiempo relativo, anonimización.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <BidHistoryList bids={BIDS} maxVisible={4} className="w-[320px]" />
          <BidHistoryList bids={[]} className="w-[280px]" />
          <BidHistoryList bids={BIDS} isLoading className="w-[280px]" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={BidHistoryListSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function VehicleImageGalleryDoc() {
  const [showCode, setShowCode] = useState(false)
  const IMAGES = [
    { src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80', alt: 'Toyota Hilux frontal' },
    { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', alt: 'Toyota Hilux lateral' },
    { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', alt: 'Toyota Hilux trasera' },
    { src: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=80', alt: 'Interior' },
  ]
  return (
    <section id="vehicle-image-gallery" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">VehicleImageGallery</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Galería con imagen principal, flechas de navegación, miniaturas y contador.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-6 items-start">
          <VehicleImageGallery images={IMAGES} className="w-[400px]" />
          <VehicleImageGallery images={[]} className="w-[240px]" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={VehicleImageGallerySrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function SellerCardDoc() {
  const [showCode, setShowCode] = useState(false)
  return (
    <section id="seller-card" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">SellerCard</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Card del subastador con avatar, rating, stats y contacto.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <SellerCard name="VMC Subastas Lima" role="Subastador oficial" rating={4.8} totalAuctions={312} phone="+51 1 234 5678" email="subastas@vmc.pe" isVerified className="w-[260px]" />
          <SellerCard name="Carlos Herrera" role="Agente autorizado" rating={3.5} totalAuctions={47} className="w-[220px]" />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={SellerCardSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

function AuctionSummaryWidgetDoc() {
  const [showCode, setShowCode] = useState(false)
  const endsAt = Date.now() + 23 * 60 * 1000
  return (
    <section id="auction-summary-widget" className="mb-10 scroll-mt-6">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-[var(--purple-900)]">AuctionSummaryWidget</h3>
          <p className="text-[11px] text-[var(--gray-400)] mt-0.5">Widget lateral completo: precio actual, countdown, BidForm integrado. Variantes por estado.</p>
        </div>
        <button type="button" onClick={() => setShowCode(s => !s)} className="shrink-0 text-[11px] px-3 py-1.5 rounded-md bg-[var(--gray-100)] hover:bg-[var(--gray-200)] text-[var(--gray-600)] border-0 cursor-pointer transition-colors">{showCode ? 'Ocultar' : 'Ver código'}</button>
      </div>
      <div className="rounded-xl border border-[var(--gray-200)] overflow-hidden">
        <div className="p-6 bg-[var(--gray-50)] flex flex-wrap gap-4 items-start">
          <AuctionSummaryWidget
            lotId="A-0042"
            title="Toyota Hilux 2022"
            subtitle="4x4 · Diésel · 45,200 km"
            status="live"
            currentPrice={52500}
            startingPrice={48000}
            endsAt={endsAt}
            minimumBid={53000}
            totalBids={6}
            className="w-[300px]"
          />
          <AuctionSummaryWidget
            lotId="A-0043"
            title="Hyundai Tucson 2023"
            subtitle="FWD · Gasolina · 12,000 km"
            status="upcoming"
            currentPrice={68000}
            endsAt={Date.now() + 2 * 3600 * 1000}
            minimumBid={68000}
            className="w-[300px]"
          />
          <AuctionSummaryWidget
            lotId="A-0040"
            title="Nissan Frontier 2020"
            subtitle="4x2 · Diésel · 78,000 km"
            status="closed"
            currentPrice={38500}
            endsAt={Date.now() - 1000}
            minimumBid={39000}
            totalBids={4}
            className="w-[300px]"
          />
        </div>
        {showCode && (
          <div className="border-t border-[var(--gray-200)] bg-[#1e1e1e] p-4 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed m-0 font-mono whitespace-pre"><CodeHighlight code={AuctionSummaryWidgetSrc} /></pre>
          </div>
        )}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Top bar
// ─────────────────────────────────────────────────────────────────────────────

function TopBar() {
  const done = NAV_ITEMS.filter(i => i.status === 'done').length
  const total = NAV_ITEMS.length
  return (
    <header className="h-12 border-b border-[var(--gray-200)] flex items-center justify-between px-6 bg-white shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-bold text-[var(--purple-900)]">VMC Subastas — Design System</span>
        <span className="text-[var(--gray-300)] select-none">/</span>
        <span className="text-[12px] text-[var(--gray-500)]">Documentación</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-[80px] h-1.5 rounded-full bg-[var(--gray-100)] overflow-hidden">
            <div className="h-full rounded-full bg-emerald-400 transition-all duration-500" style={{ width: `${Math.round(done / total * 100)}%` }} />
          </div>
          <span className="text-[11px] text-[var(--gray-400)]">{done}/{total} listos</span>
        </div>
        <span className="text-[10px] font-mono text-[var(--gray-300)] border border-[var(--gray-200)] rounded px-1.5 py-0.5">v0.1</span>
      </div>
    </header>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Docs — página principal
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// FRAMES — Inventario de componentes por página
// ─────────────────────────────────────────────────────────────────────────────

type FrameComponent = { name: string; layer: 'L0' | 'L1' | 'L2' | 'L3' | 'L4'; count?: number; docId?: string }

const LAYER_COLOR: Record<string, string> = {
  L0: 'bg-[var(--gray-100)] text-[var(--gray-500)]',
  L1: 'bg-[oklch(0.761_0.130_197.000/0.12)] text-[var(--cyan-400)]',
  L2: 'bg-[oklch(0.784_0.172_68.000/0.12)] text-[var(--orange-500)]',
  L3: 'bg-[oklch(0.335_0.163_289.500/0.12)] text-[var(--purple-600)]',
  L4: 'bg-[oklch(0.242_0.138_286.500/0.15)] text-[var(--purple-800)]',
}

const LAYER_LABEL: Record<string, string> = {
  L0: 'Primitiva', L1: 'Elemento', L2: 'Componente', L3: 'Bloque', L4: 'Layout',
}

const FRAME_HOMEPAGE: FrameComponent[] = [
  { name: 'PageLayout',            layer: 'L4' },
  { name: 'Header',                layer: 'L4' },
  { name: 'Sidebar',               layer: 'L4' },
  { name: 'HeroSection',           layer: 'L4' },
  { name: 'Footer',                layer: 'L4' },
  { name: 'AuctionCard (Featured)',layer: 'L3' },
  { name: 'AuctioneerSection',     layer: 'L3', count: 2 },
  { name: 'VehicleCard',           layer: 'L3', count: 8 },
  { name: 'SubascoinsPromoBanner', layer: 'L3' },
  { name: 'HelpCenterBanner',      layer: 'L2' },
  { name: 'Button',                layer: 'L1', count: 2 },
  { name: 'Badge',                 layer: 'L1', count: 3 },
  { name: 'CountdownTimer',        layer: 'L1' },
  { name: 'PriceDisplay',          layer: 'L1', count: 5 },
  { name: 'Image',                 layer: 'L1', count: 9 },
]

const FRAME_DETALLE: FrameComponent[] = [
  { name: 'PageLayout',            layer: 'L4' },
  { name: 'Header',                layer: 'L4' },
  { name: 'Sidebar',               layer: 'L4' },
  { name: 'Footer',                layer: 'L4' },
  { name: 'VehicleImageGallery',   layer: 'L3' },
  { name: 'AuctionSummaryWidget',  layer: 'L3' },
  { name: 'AuctionStatusBanner',   layer: 'L3' },
  { name: 'BidForm',               layer: 'L3' },
  { name: 'VehicleSpecsRow',       layer: 'L3' },
  { name: 'AuctionActionBar',      layer: 'L3' },
  { name: 'AuctioneerSection',     layer: 'L3' },
  { name: 'SubascoinsPromoBanner', layer: 'L3' },
  { name: 'Accordion',             layer: 'L2', count: 2 },
  { name: 'HelpCenterBanner',      layer: 'L2' },
  { name: 'DocumentDownloadRow',   layer: 'L2', count: 3 },
  { name: 'Button',                layer: 'L1', count: 4 },
  { name: 'Badge',                 layer: 'L1', count: 2 },
  { name: 'PriceDisplay',          layer: 'L1' },
  { name: 'CountdownTimer',        layer: 'L1' },
  { name: 'DataQualityBadge',      layer: 'L1' },
  { name: 'Image',                 layer: 'L1', count: 5 },
  { name: 'Avatar',                layer: 'L1' },
]

type FrameDocProps = {
  id: string
  title: string
  figmaUrl?: string
  totalWidth: number
  sidebarWidth: number
  contentWidth: number
  description: string
  components: FrameComponent[]
}

function FrameDoc({ id, title, figmaUrl, totalWidth, sidebarWidth, contentWidth, description, components }: FrameDocProps) {
  const layers = ['L4', 'L3', 'L2', 'L1', 'L0'] as const
  const byLayer = (l: string) => components.filter(c => c.layer === l)

  return (
    <div id={id} className="scroll-mt-8 mb-12">
      {/* Header del frame */}
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-[var(--gray-100)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--orange-500)]">Frame</span>
            <span className="size-1 rounded-full bg-[var(--gray-300)]" />
            <span className="text-[10px] text-[var(--gray-400)]">{totalWidth}px max-width</span>
          </div>
          <h3 className="text-[20px] font-bold text-[var(--purple-900)] m-0">{title}</h3>
          <p className="text-[12px] text-[var(--gray-400)] mt-1 max-w-[500px]">{description}</p>
        </div>
        {figmaUrl && (
          <a href={figmaUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold no-underline border border-[var(--gray-200)] text-[var(--gray-500)] hover:border-[var(--purple-600)] hover:text-[var(--purple-600)] transition-colors">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7.5M7.5 1H11m0 0v3.5M11 1 5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Ver en Figma
          </a>
        )}
      </div>

      {/* Layout metrics */}
      <div className="flex gap-3 mb-6">
        {[
          { label: 'Frame total', value: `${totalWidth}px` },
          { label: 'Sidebar', value: `${sidebarWidth}px` },
          { label: 'Área de contenido', value: `${contentWidth}px` },
          { label: 'Componentes', value: `${components.length}` },
        ].map(m => (
          <div key={m.label} className="flex-1 bg-white rounded-lg border border-[var(--gray-100)] px-3 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-0.5">{m.label}</p>
            <p className="text-[18px] font-bold text-[var(--purple-900)] tabular-nums m-0">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Dos columnas: sidebar de componentes + layout visual */}
      <div className="flex gap-6">

        {/* Sub-sidebar: inventario de componentes */}
        <div className="w-[200px] shrink-0">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Componentes en frame</p>
          <div className="flex flex-col gap-3">
            {layers.map(l => {
              const items = byLayer(l)
              if (!items.length) return null
              return (
                <div key={l}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${LAYER_COLOR[l]}`}>{l}</span>
                    <span className="text-[9px] text-[var(--gray-400)]">{LAYER_LABEL[l]}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {items.map(c => (
                      <div key={c.name} className="flex items-center justify-between px-2 py-1 rounded-md bg-white border border-[var(--gray-100)]">
                        <span className="text-[11px] text-[var(--gray-600)]">{c.name}</span>
                        {c.count && c.count > 1 && (
                          <span className="text-[9px] font-bold text-[var(--gray-400)] tabular-nums">×{c.count}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Diagrama de layout */}
        <div className="flex-1">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-3">Diagrama de layout (1024px)</p>
          <div className="bg-[var(--gray-50)] border border-[var(--gray-100)] rounded-lg p-4 overflow-x-auto">
            <div className="flex gap-0 rounded overflow-hidden border border-[var(--gray-200)]"
              style={{ width: '100%', minWidth: '400px', fontSize: '9px' }}>
              {/* Sidebar strip */}
              <div className="shrink-0 flex flex-col"
                style={{ width: `${(sidebarWidth / totalWidth) * 100}%`, background: 'var(--purple-800)', minHeight: '320px' }}>
                <div className="p-2 text-white/60 font-bold uppercase tracking-wider" style={{ fontSize: '8px' }}>
                  Sidebar<br/>{sidebarWidth}px
                </div>
              </div>
              {/* Content area */}
              <div className="flex-1 flex flex-col gap-0" style={{ background: 'var(--gray-50)' }}>
                {/* Header */}
                <div className="shrink-0 flex items-center px-2" style={{ height: '24px', background: 'var(--purple-800)' }}>
                  <span className="text-white/70 font-bold uppercase tracking-wider" style={{ fontSize: '8px' }}>Header · 64px</span>
                </div>
                {/* Main sections */}
                <div className="flex-1 flex flex-col gap-1 p-1.5">
                  {id === 'frame-homepage' ? <>
                    <div className="rounded px-2 py-1.5 text-white font-semibold" style={{ background: 'var(--purple-900)', fontSize: '8px' }}>HeroSection</div>
                    <div className="rounded px-2 py-1" style={{ background: 'var(--orange-500)', fontSize: '8px', color: 'white' }}>SubascoinsPromoBanner</div>
                    <div className="rounded px-2 py-1 bg-white border border-[var(--gray-200)]" style={{ fontSize: '8px', color: 'var(--gray-500)' }}>AuctioneerSection × 2 · VehicleCard × 8 · 196px/card</div>
                    <div className="rounded px-2 py-1" style={{ background: 'var(--gray-100)', fontSize: '8px', color: 'var(--gray-500)' }}>HelpCenterBanner</div>
                  </> : <>
                    <div className="rounded px-2 py-1.5 bg-white border border-[var(--gray-200)]" style={{ fontSize: '8px', color: 'var(--gray-500)' }}>VehicleImageGallery + AuctionSummaryWidget</div>
                    <div className="rounded px-2 py-1" style={{ background: 'var(--orange-500)', fontSize: '8px', color: 'white' }}>SubascoinsPromoBanner</div>
                    <div className="rounded px-2 py-1.5 bg-white border border-[var(--gray-200)]" style={{ fontSize: '8px', color: 'var(--gray-500)' }}>Accordion · VehicleSpecsRow · DocumentDownloadRow</div>
                    <div className="rounded px-2 py-1 bg-white border border-[var(--gray-200)]" style={{ fontSize: '8px', color: 'var(--gray-500)' }}>AuctioneerSection · VehicleCard × 4</div>
                    <div className="rounded px-2 py-1" style={{ background: 'var(--gray-100)', fontSize: '8px', color: 'var(--gray-500)' }}>HelpCenterBanner</div>
                  </>}
                  {/* Footer */}
                  <div className="shrink-0 flex items-center px-2 mt-auto rounded" style={{ height: '20px', background: 'var(--purple-800)' }}>
                    <span className="text-white/70 font-bold uppercase tracking-wider" style={{ fontSize: '8px' }}>Footer</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-[var(--gray-400)] mt-2 text-right tabular-nums">
              Sidebar {sidebarWidth}px + Contenido {contentWidth}px = {totalWidth}px total
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function FramesSection() {
  return (
    <div>
      <FrameDoc
        id="frame-homepage"
        title="Homepage"
        figmaUrl="https://www.figma.com/design/yt3TvHt7q5PpPrJvmnvi6b/VMC-2026---DESIGN-SYSTEM?node-id=1-615"
        totalWidth={1024}
        sidebarWidth={140}
        contentWidth={884}
        description="Página principal. Hero con lote destacado + countdown. Secciones por rematador con carrusel horizontal de VehicleCards."
        components={FRAME_HOMEPAGE}
      />
      <FrameDoc
        id="frame-detalle"
        title="Detalle de Lote"
        totalWidth={1024}
        sidebarWidth={140}
        contentWidth={884}
        description="Página de detalle de un lote de subasta. Galería de imágenes + widget de puja + specs técnicas + documentos + ofertas relacionadas."
        components={FRAME_DETALLE}
      />
    </div>
  )
}

export default function Docs() {
  return (
    <div className="flex flex-col min-h-screen bg-white" style={{ maxWidth: '100%' }}>
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="border-r border-[var(--gray-100)] bg-white">
          <DocsSidebar activeId="tokens" />
        </div>
        <main className="flex-1 overflow-y-auto bg-[var(--gray-50)]">
          <div className="max-w-[860px] mx-auto py-10 px-10">

            {/* Intro */}
            <div className="mb-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--cyan-500)] mb-1">Design System · Fase 3</p>
              <h1 className="text-[28px] font-bold text-[var(--purple-900)] leading-tight mb-2">Documentación</h1>
              <p className="text-[13px] text-[var(--gray-500)] leading-5">
                Tokens semánticos OKLCH · W3C DTCG · Componentes React + TypeScript + Tailwind v4.
                Cada componente incluye los 7 estados del CLAUDE.md.
              </p>
            </div>

            <div className="flex flex-col gap-16">

              {/* Frames */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Frames</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">
                    Inventario de componentes por página. Max-width 1024px — Sidebar 140px — Contenido 884px.
                  </p>
                </div>
                <FramesSection />
              </div>

              {/* Foundation */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Foundation</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">Tokens primitivos y semánticos extraídos de Figma y normalizados según CLAUDE.md.</p>
                </div>
                <TokensSection />
              </div>

              {/* Átomos */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Átomos</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">Unidades mínimas de UI. Sin dependencias de otros componentes.</p>
                </div>
                <ButtonDoc />
                <IconButtonDoc />
                <BadgeDoc />
                <AvatarDoc />
                <DividerDoc />
                <ImageDoc />
                <TextFieldDoc />
                <CheckboxRadioDoc />
                <SearchInputDoc />
                <SelectFieldDoc />
                <SliderDoc />
                <CountdownAndPriceDoc />
                <AlertDoc />
                <ToastDoc />
              </div>

              {/* Moléculas */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Moléculas</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">Componentes compuestos por átomos. Unidad reutilizable con propósito definido.</p>
                </div>
                <UserWalletDoc />
                <SkeletonDoc />
                <TabBarDoc />
                <AccordionDoc />
                <ModalDoc />
                <DropdownDoc />
                <TooltipDoc />
                <BreadcrumbDoc />
                <PaginationDoc />
                <AuctionCardDoc />
                <BidFormDoc />
                <VehicleCardDoc />
              </div>

              {/* Organismos */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Organismos</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">Secciones completas compuestas por moléculas y átomos.</p>
                </div>
                <AuctioneerSectionDoc />
                <HeroSectionDoc />
                <LayoutsDoc />
              </div>

              {/* Bloques L3 */}
              <div>
                <div className="mb-6">
                  <h2 className="text-[18px] font-bold text-[var(--purple-900)]">Bloques</h2>
                  <p className="text-[12px] text-[var(--gray-400)] mt-0.5">Bloques de negocio específicos de la plataforma VMC Subastas.</p>
                </div>
                <FilterBarDoc />
                <AuctionStatusBannerDoc />
                <VehicleSpecsRowDoc />
                <BidHistoryListDoc />
                <VehicleImageGalleryDoc />
                <SellerCardDoc />
                <AuctionSummaryWidgetDoc />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
