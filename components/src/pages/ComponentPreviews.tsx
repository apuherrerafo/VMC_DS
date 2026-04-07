/**
 * ComponentPreviews — live renders de cada componente del DS para FramePage.
 * Cada entrada devuelve un ReactNode con datos de muestra.
 */
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import { PriceDisplay } from '../components/PriceDisplay'
import { CountdownTimer } from '../components/CountdownTimer'
import { Avatar } from '../components/Avatar'
import { Image as DSImage } from '../components/Image'
import { AuctionCard } from '../components/AuctionCard'
import { VehicleCard } from '../components/VehicleCard'
import { AuctioneerSection } from '../components/AuctioneerSection'
import { AuctionStatusBanner } from '../components/AuctionStatusBanner'
import { BidForm } from '../components/BidForm'
import { VehicleSpecsRow } from '../components/VehicleSpecsRow'
import { Accordion } from '../components/Accordion'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { VehicleImageGallery } from '../components/VehicleImageGallery'
import { AuctionSummaryWidget } from '../components/AuctionSummaryWidget'
import { DataQualityBadge } from '../components/DataQualityBadge'
import { DocumentDownloadRow } from '../components/DocumentDownloadRow'
import { HelpCenterBanner } from '../components/HelpCenterBanner'
import { SubascoinsPromoBanner } from '../components/SubascoinsPromoBanner'
import { AuctionActionBar } from '../components/AuctionActionBar'
import { Sidebar } from '../components/Sidebar'

// ─── helpers ──────────────────────────────────────────────────────────────────

const soon = Date.now() + 1000 * 60 * 62 // ~1h 2min

const sampleLot = {
  title: 'TOYOTA HILUX 2024',
  subtitle: '2024 · Lima, Perú',
  badge: 'live' as const,
  price: 17999,
  currency: 'US$',
  priceLabel: 'PRECIO BASE',
  endsAt: soon,
}

const sampleVehicleCards = Array.from({ length: 4 }, (_, i) => ({
  title: ['FORD BRONCO SPORT', 'TOYOTA ETIOS', 'TOYOTA HILUX', 'NISSAN VERSA'][i],
  subtitle: ['2024 | LIMA, PERÚ', '2024 | LIMA, PERÚ', '2023 | LIMA, PERÚ', '2022 | LIMA, PERÚ'][i],
  price: ['17,999', '4,999', '17,999', '3,999'][i],
  currency: 'US$',
  priceLabel: 'PRECIO BASE',
}))

const sampleSpecs = [
  { icon: 'year' as const,         label: 'Año',          value: '2024'     },
  { icon: 'km' as const,           label: 'Kilometraje',  value: '12,400 km'},
  { icon: 'fuel' as const,         label: 'Combustible',  value: 'Gasolina' },
  { icon: 'transmission' as const, label: 'Transmisión',  value: 'Automático'},
]

const sampleImages = [
  { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=70', alt: 'Toyota Hilux — frontal' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=70', alt: 'Toyota Hilux — lateral' },
  { src: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=70', alt: 'Toyota Hilux — interior' },
]

// ─── contenedores de preview ──────────────────────────────────────────────────

function PreviewWrap({ children, bg = 'transparent', pad = true }: {
  children: React.ReactNode
  bg?: string
  pad?: boolean
}) {
  return (
    <div style={{ background: bg, padding: pad ? '24px 32px' : '0' }}>
      {children}
    </div>
  )
}

function PreviewLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--gray-400)] mb-2">{children}</p>
}

/**
 * SizeFrame — muestra el componente a su ancho real, centrado en el canvas.
 * bg: color de fondo del canvas (útil para componentes sobre dark bg).
 */
function SizeFrame({ width, bg = 'var(--gray-50)', children }: {
  width: string
  bg?: string
  children: React.ReactNode
}) {
  return (
    <div style={{ background: bg, padding: '24px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width, flexShrink: 0 }}>
        {children}
      </div>
    </div>
  )
}


// ─── mapa de previews ─────────────────────────────────────────────────────────

import type { ReactNode } from 'react'

export const COMPONENT_PREVIEWS: Record<string, ReactNode> = {

  'Button': (
    <PreviewWrap>
      <PreviewLabel>Variantes de intención</PreviewLabel>
      <div className="flex flex-wrap gap-3 mb-4">
        <Button variant="primary"     size="md">PARTICIPA AHORA</Button>
        <Button variant="secondary"   size="md">Guardar Oferta</Button>
        <Button variant="tertiary"    size="md">IR AL PERFIL</Button>
        <Button variant="destructive" size="md">Retirar Oferta</Button>
      </div>
      <PreviewLabel>Tamaños</PreviewLabel>
      <div className="flex items-center gap-3">
        <Button variant="primary" size="sm">sm — 32px</Button>
        <Button variant="primary" size="md">md — 40px</Button>
        <Button variant="primary" size="lg">lg — 48px</Button>
      </div>
    </PreviewWrap>
  ),

  'Badge': (
    <PreviewWrap>
      <PreviewLabel>Todos los tipos</PreviewLabel>
      <div className="flex flex-wrap gap-2">
        <Badge type="live" />
        <Badge type="negotiable" />
        <Badge type="upcoming" />
        <Badge type="closed" />
        <Badge type="new" />
        <Badge type="featured" />
      </div>
    </PreviewWrap>
  ),

  'PriceDisplay': (
    <PreviewWrap bg="var(--purple-800)">
      <PreviewLabel>Contexto Hero</PreviewLabel>
      <PriceDisplay context="hero" amount={17999} currency="US$" label="PRECIO BASE" />
      <div className="mt-4">
        <PreviewLabel>Contexto Card</PreviewLabel>
        <PriceDisplay context="card" amount={4999} currency="US$" label="PRECIO BASE" />
      </div>
    </PreviewWrap>
  ),

  'CountdownTimer': (
    <PreviewWrap bg="var(--purple-800)">
      <PreviewLabel>Estado default</PreviewLabel>
      <CountdownTimer endsAt={soon} />
      <div className="mt-4">
        <PreviewLabel>Estado urgent (&lt; 1h)</PreviewLabel>
        <CountdownTimer endsAt={Date.now() + 1000 * 25 * 60} />
      </div>
    </PreviewWrap>
  ),

  'Avatar': (
    <PreviewWrap>
      <PreviewLabel>Tamaños sm · md · lg</PreviewLabel>
      <div className="flex items-end gap-4">
        <div className="flex flex-col items-center gap-1">
          <Avatar size="sm" fallback="JR" />
          <span className="text-[9px] text-[var(--gray-400)]">24px</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar size="md" fallback="JR" />
          <span className="text-[9px] text-[var(--gray-400)]">40px</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Avatar size="lg" fallback="JR" />
          <span className="text-[9px] text-[var(--gray-400)]">56px</span>
        </div>
      </div>
    </PreviewWrap>
  ),

  'Image': (
    <PreviewWrap pad={false}>
      <div className="grid grid-cols-3 gap-1">
        <div><DSImage aspectRatio="1/1"  alt="Square"   /></div>
        <div><DSImage aspectRatio="16/9" alt="Landscape"/></div>
        <div><DSImage aspectRatio="3/4"  alt="Portrait" /></div>
      </div>
    </PreviewWrap>
  ),

  'AuctionCard (Featured)': (
    <SizeFrame width="320px">
      <AuctionCard variant="featured" lot={sampleLot} />
    </SizeFrame>
  ),

  'VehicleCard': (
    <SizeFrame width="163px">
      <VehicleCard {...sampleVehicleCards[0]} />
    </SizeFrame>
  ),

  'AuctioneerSection': (
    <div>
      <PreviewLabel>Carousel (homepage — ancho completo)</PreviewLabel>
      <AuctioneerSection
        title="MAF PERÚ"
        offerCount={5}
        profileLinkLabel="IR AL PERFIL"
        onProfileClick={() => {}}
        cards={sampleVehicleCards}
        layout="carousel"
      />
      <div style={{ marginTop: '16px' }}>
        <PreviewLabel>Grid 2 col (detalle — 276px)</PreviewLabel>
        <SizeFrame width="276px" bg="var(--color-surface-section)">
          <AuctioneerSection
            title="Ofertas Relacionadas"
            cards={sampleVehicleCards}
            layout="grid"
          />
        </SizeFrame>
      </div>
    </div>
  ),

  'AuctionStatusBanner': (
    <div className="flex flex-col">
      <AuctionStatusBanner status="live"     lotTitle="TOYOTA HILUX 2024" endsAt={soon} />
      <AuctionStatusBanner status="upcoming" lotTitle="DODGE CHALLENGER 2023" endsAt={Date.now() + 1000 * 60 * 60 * 24} />
      <AuctionStatusBanner status="closed"   lotTitle="NISSAN VERSA 2022" />
    </div>
  ),

  'BidForm': (
    <SizeFrame width="276px">
      <BidForm lotId="demo-1" minimumBid={15000} currency="US$" />
    </SizeFrame>
  ),

  'VehicleSpecsRow': (
    <SizeFrame width="444px">
      <VehicleSpecsRow specs={sampleSpecs} />
    </SizeFrame>
  ),

  'Accordion': (
    <SizeFrame width="444px">
      <Accordion items={[
        { title: 'Información general', content: 'Vehículo recuperado por la Financiera. Año 2024, Lima San Isidro. Estado: excelente condición mecánica.' },
        { title: 'Condiciones del ofrecimiento', content: 'La firma de transferencia se realiza en nuestra oficina en Lima. El comprador debe verificar el estado del vehículo.' },
        { title: 'Documentos requeridos', content: 'DNI vigente · Constancia de fondos · Formulario de participación firmado.' },
      ]} />
    </SizeFrame>
  ),

  'VehicleImageGallery': (
    <SizeFrame width="444px">
      <VehicleImageGallery images={sampleImages} />
    </SizeFrame>
  ),

  'AuctionSummaryWidget': (
    <SizeFrame width="276px">
      <AuctionSummaryWidget
        lotId="demo-1"
        title="TOYOTA HILUX 2024"
        subtitle="2024 · Lima, Perú"
        status="live"
        currentPrice={17999}
        startingPrice={15000}
        currency="US$"
        endsAt={Date.now() + 1000 * 60 * 62}
        minimumBid={18500}
        totalBids={7}
      />
    </SizeFrame>
  ),

  'Header': (
    <div className="pointer-events-none">
      <Header user={null} />
    </div>
  ),

  'Footer': (
    <div className="pointer-events-none">
      <Footer />
    </div>
  ),

  'Sidebar': (
    <div className="pointer-events-none flex" style={{ height: '480px' }}>
      <Sidebar />
    </div>
  ),

  'PageLayout': (
    <PreviewWrap>
      <div className="border border-dashed border-[var(--gray-300)] px-4 py-3 flex items-center gap-2 rounded-lg">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="12" height="12" rx="2" stroke="var(--purple-600)" strokeWidth="1.2"/>
          <path d="M4 1v12M4 4h9" stroke="var(--purple-600)" strokeWidth="1.2"/>
        </svg>
        <span className="text-[11px] text-[var(--gray-500)]">
          Contenedor raíz — Sidebar 256px + Contenido 768px = 1024px. Ver la página completa en el frame.
        </span>
      </div>
    </PreviewWrap>
  ),

  'HeroSection': (
    <PreviewWrap>
      <div className="border border-dashed border-[var(--gray-300)] px-4 py-3 flex items-center gap-2 rounded-lg">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="12" height="12" rx="2" stroke="var(--purple-600)" strokeWidth="1.2"/>
          <path d="M1 5h12" stroke="var(--purple-600)" strokeWidth="1.2"/>
        </svg>
        <span className="text-[11px] text-[var(--gray-500)]">
          Sección hero completa — ver implementación en <a href="#hero-section" className="text-[var(--purple-600)]">Docs → HeroSection</a>.
        </span>
      </div>
    </PreviewWrap>
  ),

  'DataQualityBadge': (
    <PreviewWrap>
      <PreviewLabel>Niveles de calidad</PreviewLabel>
      <div className="flex flex-col gap-3">
        <DataQualityBadge level="high" />
        <DataQualityBadge level="medium" />
        <DataQualityBadge level="low" />
      </div>
      <div className="mt-4">
        <PreviewLabel>Sin etiqueta</PreviewLabel>
        <div className="flex items-center gap-4">
          <DataQualityBadge level="high"   showLabel={false} />
          <DataQualityBadge level="medium" showLabel={false} />
          <DataQualityBadge level="low"    showLabel={false} />
        </div>
      </div>
    </PreviewWrap>
  ),

  'DocumentDownloadRow': (
    <SizeFrame width="444px">
      <div className="flex flex-col">
        <DocumentDownloadRow label="Resolución de adjudicación"    fileType="pdf" />
        <DocumentDownloadRow label="Cuadro de participantes"       fileType="xls" />
        <DocumentDownloadRow label="Contrato de transferencia"     fileType="doc" />
        <DocumentDownloadRow label="Documento adjunto"             fileType="generic" disabled />
      </div>
    </SizeFrame>
  ),

  'HelpCenterBanner': (
    <div className="flex flex-col">
      <HelpCenterBanner />
      <HelpCenterBanner variant="compact" />
    </div>
  ),

  'SubascoinsPromoBanner': (
    <div className="flex flex-col">
      <SubascoinsPromoBanner />
      <SubascoinsPromoBanner variant="compact" label="CANJEA TUS SUBASCOINS" />
    </div>
  ),

  'AuctionActionBar': (
    <SizeFrame width="276px">
      <PreviewLabel>Full (3 acciones)</PreviewLabel>
      <AuctionActionBar variant="full" participationLimit={3} />
      <div className="mt-3">
        <PreviewLabel>Compact (2 acciones)</PreviewLabel>
        <AuctionActionBar variant="compact" />
      </div>
      <div className="mt-3">
        <PreviewLabel>Minimal (1 acción)</PreviewLabel>
        <AuctionActionBar variant="minimal" />
      </div>
    </SizeFrame>
  ),
}
