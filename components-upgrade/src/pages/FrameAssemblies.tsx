/**
 * FrameAssemblies — renders ensamblados de cada frame a 1024px.
 * Usan los componentes reales del DS tal como aparecerían en producción.
 */

import { Header }               from '../components/Header'
import { Sidebar }              from '../components/Sidebar'
import { Footer }               from '../components/Footer'
import { AuctionStatusBanner }  from '../components/AuctionStatusBanner'
import { VehicleImageGallery }  from '../components/VehicleImageGallery'
import { AuctionSummaryWidget } from '../components/AuctionSummaryWidget'
import { AuctionActionBar }     from '../components/AuctionActionBar'
import { SubascoinsPromoBanner } from '../components/SubascoinsPromoBanner'
import { VehicleSpecsRow }      from '../components/VehicleSpecsRow'
import { DataQualityBadge }     from '../components/DataQualityBadge'
import { Accordion }            from '../components/Accordion'
import { DocumentDownloadRow }  from '../components/DocumentDownloadRow'
import { AuctioneerSection }    from '../components/AuctioneerSection'
import { HelpCenterBanner }     from '../components/HelpCenterBanner'
import { AuctionCard }          from '../components/AuctionCard'
import { Badge }                from '../components/Badge'
import { CountdownTimer }       from '../components/CountdownTimer'
import { PriceDisplay }         from '../components/PriceDisplay'

// ─── sample data ──────────────────────────────────────────────────────────────

const soon = Date.now() + 1000 * 60 * 62

const sampleLot = {
  title:      'TOYOTA HILUX 2024',
  subtitle:   '2024 · Lima, Perú',
  badge:      'live' as const,
  price:      17999,
  currency:   'US$',
  priceLabel: 'PRECIO BASE',
  endsAt:     soon,
}

const cards4 = [
  { title: 'FORD BRONCO SPORT', subtitle: '2024 | LIMA, PERÚ', price: '17,999', currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'TOYOTA ETIOS',      subtitle: '2024 | LIMA, PERÚ', price: '4,999',  currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'TOYOTA HILUX',      subtitle: '2023 | LIMA, PERÚ', price: '17,999', currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'NISSAN VERSA',      subtitle: '2022 | LIMA, PERÚ', price: '3,999',  currency: 'US$', priceLabel: 'PRECIO BASE' },
]

const cards4b = [
  { title: 'DODGE CHALLENGER',  subtitle: '2023 | LIMA, PERÚ', price: '29,999', currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'KIA SPORTAGE',      subtitle: '2022 | LIMA, PERÚ', price: '14,500', currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'HYUNDAI TUCSON',    subtitle: '2022 | LIMA, PERÚ', price: '13,200', currency: 'US$', priceLabel: 'PRECIO BASE' },
  { title: 'CHEVROLET CAMARO',  subtitle: '2021 | LIMA, PERÚ', price: '22,000', currency: 'US$', priceLabel: 'PRECIO BASE' },
]

const specs = [
  { icon: 'year'         as const, label: 'Año',         value: '2024'      },
  { icon: 'km'           as const, label: 'Kilometraje', value: '12,400 km' },
  { icon: 'fuel'         as const, label: 'Combustible', value: 'Gasolina'  },
  { icon: 'transmission' as const, label: 'Transmisión', value: 'Automático'},
]

const images = [
  { src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=70', alt: 'Toyota Hilux 2024 — vista frontal' },
  { src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=70', alt: 'Toyota Hilux 2024 — lateral' },
  { src: 'https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&q=70', alt: 'Toyota Hilux 2024 — interior' },
]

// ─── FRAME: DETALLE DE LOTE ───────────────────────────────────────────────────

export function DetalleFrameAssembly() {
  return (
    <div style={{ width: '1024px', background: 'var(--color-surface-page)', overflow: 'hidden' }}>

      {/* Header */}
      <Header user={undefined} />

      {/* Body: sidebar + content */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* Sidebar 140px */}
        <Sidebar />

        {/* Contenido 768px */}
        <div style={{ width: '768px', flexShrink: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>

          {/* Status banner */}
          <AuctionStatusBanner
            status="live"
            lotTitle="TOYOTA HILUX 2024"
            endsAt={soon}
          />

          {/* ── Dos columnas: izquierda (galería+detalle) · derecha (oferta) ── */}
          <div style={{ display: 'flex', gap: '16px', padding: '16px', alignItems: 'flex-start' }}>

            {/* Col izquierda — 444px (flex:1 dentro de 736px inner) */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <VehicleImageGallery images={images} />
              <VehicleSpecsRow specs={specs} />
              <DataQualityBadge level="high" />
              <Accordion items={[
                { title: 'Información del vehículo',     content: 'Vehículo recuperado por la financiera. Año 2024, Lima San Isidro. Estado: excelente condición mecánica y estética. Placa ABC-123.' },
                { title: 'Condiciones del ofrecimiento', content: 'La firma de transferencia se realiza en nuestra oficina en Lima. El comprador debe verificar el estado del vehículo antes de la firma.' },
                { title: 'Documentos requeridos',        content: 'DNI vigente · Constancia de fondos · Formulario de participación firmado · Carta de intención.' },
              ]} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <DocumentDownloadRow label="Resolución de adjudicación" fileType="pdf" />
                <DocumentDownloadRow label="Cuadro de participantes"    fileType="xls" />
                <DocumentDownloadRow label="Contrato de transferencia"  fileType="doc" />
              </div>
            </div>

            {/* Col derecha — 276px (oferta + subascoins + relacionados) */}
            <div style={{ width: '276px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <AuctionSummaryWidget
                lotId="61019"
                title="TOYOTA HILUX 2024"
                subtitle="2024 · Lima San Isidro, Perú"
                status="live"
                currentPrice={17999}
                startingPrice={15000}
                currency="US$"
                endsAt={soon}
                minimumBid={18500}
                totalBids={7}
              />
              <AuctionActionBar variant="full" participationLimit={3} />
              <SubascoinsPromoBanner />
              <AuctioneerSection
                title="Ofertas Relacionadas"
                layout="grid"
                cards={cards4}
              />
            </div>
          </div>

          {/* Help */}
          <HelpCenterBanner />

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// ─── FRAME: HOMEPAGE ─────────────────────────────────────────────────────────

export function HomepageFrameAssembly() {
  return (
    <div style={{ width: '1024px', background: 'var(--color-surface-page)', overflow: 'hidden' }}>

      {/* Header */}
      <Header user={undefined} />

      {/* Body: sidebar + content */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* Sidebar 140px */}
        <Sidebar />

        {/* Contenido 768px */}
        <div style={{ width: '768px', flexShrink: 0, display: 'flex', flexDirection: 'column', background: 'var(--color-surface-page)' }}>

          {/* Hero */}
          <div style={{ background: 'var(--color-surface-sidebar)', padding: '24px 20px', display: 'flex', gap: '20px', alignItems: 'stretch' }}>
            {/* Left: info */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '4px' }}>
              <Badge type="live" />
              <PriceDisplay context="hero" label="PRECIO BASE" amount={17999} currency="US$" />
              <CountdownTimer endsAt={soon} />
            </div>
            {/* Right: card */}
            <div style={{ width: '320px', flexShrink: 0 }}>
              <AuctionCard variant="featured" lot={sampleLot} />
            </div>
          </div>

          {/* Subascoins */}
          <SubascoinsPromoBanner />

          {/* Rematador 1 */}
          <AuctioneerSection
            title="MAF PERÚ"
            offerCount={5}
            profileLinkLabel="IR AL PERFIL"
            cards={cards4}
          />

          {/* Rematador 2 */}
          <AuctioneerSection
            title="SUBASTOP LIMA"
            offerCount={3}
            profileLinkLabel="IR AL PERFIL"
            cards={cards4b}
          />

          {/* Help */}
          <HelpCenterBanner />

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// ─── mapa de ensamblados por frame ID ────────────────────────────────────────

import type { ReactElement } from 'react'

export const FRAME_ASSEMBLIES: Record<string, () => ReactElement> = {
  homepage: HomepageFrameAssembly,
  detalle:  DetalleFrameAssembly,
}
