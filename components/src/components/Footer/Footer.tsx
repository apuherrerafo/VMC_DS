// Footer — L4 Layout
// Footer completo VMC Subastas: 4 columnas + barra inferior.
// Ancho completo dentro del frame 1024px. Fondo: color-surface-sidebar.
// VOYAGER.md: Shell / Footer

export interface FooterProps {
  className?: string
}

// ─── icons ────────────────────────────────────────────────────────────────────

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9.25" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      <path d="M11.2 6.5H12.5V4.5H11.2C9.8 4.5 9 5.4 9 6.75V8H7.5v2H9v5h2v-5h1.5l.5-2H11V6.75c0-.15.1-.25.2-.25Z"
        fill="currentColor"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="14" cy="6" r="0.8" fill="currentColor"/>
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8.5 7.5l4.5 2.5-4.5 2.5V7.5Z" fill="currentColor"/>
    </svg>
  )
}

function XTwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3.5 3.5L8.8 10.2M3.5 3.5H7l4.5 6 5 7H13l-4.2-5.8M3.5 3.5l5.3 6.7m3.2-6.7H14L8.8 10.2m0 0L3.5 16.5h3.5L11 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden="true">
      <path d="M24 8C20 4 12 4 6 6v26c6-2 14-2 18 2 4-4 12-4 18-2V6c-6-2-14-2-18 2Z"
        stroke="white" strokeWidth="1.5" strokeLinejoin="round" opacity="0.7"/>
      <path d="M24 8v26" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M10 10v18M38 10v18" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    </svg>
  )
}

// ─── VmcLogo ──────────────────────────────────────────────────────────────────

function VmcLogo() {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-1.5">
        {/* Arrow mark */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 2l10 5-10 5V2Z" fill="var(--color-action-cta)"/>
        </svg>
        <span
          style={{
            fontSize: '15px',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-extrabold)',
            color: 'white',
            letterSpacing: '-0.3px',
          }}
        >
          VMC<span style={{ color: 'var(--color-action-cta)' }}>SUBASTAS</span>
        </span>
      </div>
      <span
        style={{
          fontSize: '9px',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-regular)',
          color: 'var(--color-text-on-dark-subtle)',
          letterSpacing: '0.5px',
          paddingLeft: '18px',
        }}
      >
        Powered by SUBASTOP.Co
      </span>
    </div>
  )
}

// ─── sub-components ───────────────────────────────────────────────────────────

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <p
        style={{
          margin: 0,
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-body)',
          fontWeight: 'var(--weight-bold)',
          lineHeight: '20px',
          color: 'var(--color-text-on-dark-strong)',
        }}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-2 list-none m-0 p-0">
        {links.map(link => (
          <li key={link}>
            <a
              href="#"
              style={{
                fontSize: 'var(--font-size-xs)',
                fontFamily: 'var(--font-body)',
                fontWeight: 'var(--weight-regular)',
                lineHeight: '20px',
                color: 'var(--color-text-on-dark-muted)',
                textDecoration: 'none',
              }}
              className="transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── data ─────────────────────────────────────────────────────────────────────

const PLATAFORMA = [
  'SubasCars',
  'SubasBlog',
  '¿Quiénes somos?',
  '¿Cómo vender?',
  '¿Cómo obtener acceso ilimitado a las subastas?',
  'BlackSheep Nation',
]

const LEGAL = [
  'Condiciones y Términos',
  'Política de Protección de Datos Personales',
  'Política de privacidad General',
  'Testimonios',
]

const SOCIAL = [
  { icon: <FacebookIcon />,  label: 'Facebook'  },
  { icon: <InstagramIcon />, label: 'Instagram' },
  { icon: <YoutubeIcon />,   label: 'YouTube'   },
  { icon: <XTwitterIcon />,  label: 'X/Twitter' },
]

const BOTTOM_LINKS = ['Política de Cookies', 'Mapa del Sitio', 'Accesibilidad']

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      style={{ background: 'var(--color-surface-sidebar)' }}
      className={['w-full', className].join(' ')}
    >
      {/* ── contenido centrado a max 1024px ───────────────────────────────── */}
      <div
        className="flex flex-col gap-6 mx-auto px-8 pt-8 pb-6"
        style={{ maxWidth: 'var(--layout-max-width)' }}
      >

      {/* ── main grid ─────────────────────────────────────────────────────── */}
      <div className="flex justify-between">

        {/* Col 1 — logo + tagline */}
        <div className="flex flex-col gap-4" style={{ width: '200px', flexShrink: 0 }}>
          <VmcLogo />
          <p
            style={{
              margin: 0,
              fontSize: 'var(--font-size-xs)',
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--weight-regular)',
              lineHeight: '20px',
              color: 'var(--color-text-on-dark-muted)',
            }}
          >
            Ecosistema digital de subastas de autos basado en comunidad y tecnología.
          </p>
        </div>

        {/* Cols 2-4 — links distribuidas equitativamente */}
        <div className="flex gap-6">

          {/* Col 2 — Plataforma */}
          <div style={{ width: '230px', flexShrink: 0 }}>
            <FooterSection title="Plataforma" links={PLATAFORMA} />
          </div>

          {/* Col 3 — Legal */}
          <div style={{ width: '230px', flexShrink: 0 }}>
            <FooterSection title="Legal & Compliance" links={LEGAL} />
          </div>

          {/* Col 4 — Contacto + social + reclamaciones */}
          <div className="flex flex-col gap-4" style={{ width: '215px', flexShrink: 0 }}>

            {/* Contacto */}
            <div className="flex flex-col gap-2">
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-sm)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-bold)',
                  lineHeight: '20px',
                  color: 'var(--color-text-on-dark-strong)',
                }}
              >
                Contacto
              </p>
              <a
                href="#"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-regular)',
                  lineHeight: '20px',
                  color: 'var(--color-text-on-dark-muted)',
                  textDecoration: 'none',
                }}
                className="transition-colors duration-[var(--duration-micro)] hover:text-white"
              >
                Contáctanos
              </a>
            </div>

            {/* Encuéntranos en */}
            <div className="flex flex-col gap-3">
              <p
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-sm)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-bold)',
                  lineHeight: '20px',
                  color: 'var(--color-text-on-dark-strong)',
                }}
              >
                Encuéntranos en
              </p>
              <div className="flex items-center gap-3">
                {SOCIAL.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    style={{ color: 'var(--color-text-on-dark-muted)' }}
                    className="transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Libros de reclamaciones */}
            <div className="flex items-center gap-3 mt-2">
              <BookIcon />
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-semibold)',
                  lineHeight: '20px',
                  color: 'white',
                  maxWidth: '95px',
                }}
              >
                Libros de reclamaciones
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ── bottom bar ────────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between pt-4"
        style={{ borderTop: '0.75px solid var(--color-border-nav-separator)' }}
      >
        {/* Copyright */}
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-xs)',
            fontFamily: 'var(--font-body)',
            fontWeight: 'var(--weight-regular)',
            lineHeight: '20px',
            color: 'var(--color-text-on-dark-muted)',
          }}
        >
          © {new Date().getFullYear()} VMC Subastas es una marca registrada de Subastop S.A.C.
          <br />
          Todos los derechos reservados.
        </p>

        {/* Bottom links */}
        <div className="flex items-center gap-3">
          {BOTTOM_LINKS.map((link, i) => (
            <span key={link} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: 'var(--color-text-on-dark-subtle)', fontSize: '10px' }}>•</span>
              )}
              <a
                href="#"
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 'var(--weight-regular)',
                  lineHeight: '20px',
                  color: 'var(--color-text-on-dark-muted)',
                  textDecoration: 'none',
                }}
                className="transition-colors duration-[var(--duration-micro)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link}
              </a>
            </span>
          ))}
        </div>
      </div>

      </div>{/* /max-width wrapper */}
    </footer>
  )
}

export default Footer
