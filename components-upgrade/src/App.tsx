import { useState, useEffect } from 'react'
import './index.css'
import Docs from './pages/Docs'
import FramePage, { type FrameConfig } from './pages/FramePage'

// ─── configuración de frames ──────────────────────────────────────────────────

const FRAME_HOMEPAGE: FrameConfig = {
  id: 'homepage',
  title: 'Homepage',
  subtitle: 'Página principal. Hero con lote destacado + countdown. Secciones por rematador con carrusel horizontal de VehicleCards.',
  figmaUrl: 'https://www.figma.com/design/yt3TvHt7q5PpPrJvmnvi6b/VMC-2026---DESIGN-SYSTEM?node-id=1-615',
  totalWidth: 1024,
  sidebarWidth: 140,
  contentWidth: 884,
  components: [
    { name: 'PageLayout',             layer: 'L4' },
    { name: 'Header',                 layer: 'L4' },
    { name: 'Sidebar',                layer: 'L4' },
    { name: 'HeroSection',            layer: 'L4' },
    { name: 'Footer',                 layer: 'L4' },
    { name: 'AuctionCard (Featured)', layer: 'L3' },
    { name: 'AuctioneerSection',      layer: 'L3', count: 2 },
    { name: 'VehicleCard',            layer: 'L3', count: 8 },
    { name: 'SubascoinsPromoBanner',  layer: 'L3' },
    { name: 'HelpCenterBanner',       layer: 'L2' },
    { name: 'Button',                 layer: 'L1', count: 2 },
    { name: 'Badge',                  layer: 'L1', count: 3 },
    { name: 'CountdownTimer',         layer: 'L1' },
    { name: 'PriceDisplay',           layer: 'L1', count: 5 },
    { name: 'Image',                  layer: 'L1', count: 9 },
  ],
  layoutSlots: [
    { label: 'HeroSection — headline + countdown + AuctionCard Featured', color: 'var(--purple-900)' },
    { label: 'SubascoinsPromoBanner', color: 'var(--orange-500)' },
    { label: 'AuctioneerSection ×2 — VehicleCard ×8 — 196px/card', color: 'white', textColor: 'var(--gray-500)' },
    { label: 'HelpCenterBanner', color: 'var(--gray-100)', textColor: 'var(--gray-500)' },
  ],
}

const FRAME_DETALLE: FrameConfig = {
  id: 'detalle',
  title: 'Detalle de Lote',
  subtitle: 'Página de detalle de un lote de subasta. Galería de imágenes + widget de puja + specs técnicas + documentos + ofertas relacionadas.',
  totalWidth: 1024,
  sidebarWidth: 140,
  contentWidth: 884,
  components: [
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
  ],
  layoutSlots: [
    { label: 'VehicleImageGallery + AuctionSummaryWidget (BidForm + AuctionStatusBanner)', color: 'white', textColor: 'var(--gray-500)' },
    { label: 'SubascoinsPromoBanner', color: 'var(--orange-500)' },
    { label: 'Accordion — VehicleSpecsRow — DataQualityBadge — DocumentDownloadRow ×3', color: 'white', textColor: 'var(--gray-500)' },
    { label: 'AuctioneerSection — VehicleCard ×4', color: 'white', textColor: 'var(--gray-500)' },
    { label: 'HelpCenterBanner', color: 'var(--gray-100)', textColor: 'var(--gray-500)' },
  ],
}

const FRAMES: Record<string, FrameConfig> = {
  homepage: FRAME_HOMEPAGE,
  detalle:  FRAME_DETALLE,
}

// ─── router de hash ───────────────────────────────────────────────────────────

function useHashRoute() {
  const getRoute = () => window.location.hash.replace(/^#\/?/, '') || ''
  const [route, setRoute] = useState(getRoute)
  useEffect(() => {
    const handler = () => setRoute(getRoute())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return route
}

// ─── app ──────────────────────────────────────────────────────────────────────

export default function App() {
  const route = useHashRoute()

  // #/frames/homepage  →  route = "frames/homepage"
  if (route.startsWith('frames/')) {
    const frameId = route.replace('frames/', '')
    const config = FRAMES[frameId]
    if (config) return <FramePage config={config} />
  }

  return <Docs />
}
