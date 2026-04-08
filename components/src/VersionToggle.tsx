import { useVersion } from './VersionContext'

export default function VersionToggle() {
  const { version, setVersion } = useVersion()
  const isUpgrade = version === 'upgrade'

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        background: '#1a1a2e',
        border: '1px solid #333',
        borderRadius: '999px',
        padding: '4px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        fontFamily: 'sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        userSelect: 'none',
      }}
    >
      <button
        onClick={() => setVersion('original')}
        style={{
          padding: '6px 16px',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          background: !isUpgrade ? '#ffffff' : 'transparent',
          color: !isUpgrade ? '#1a1a2e' : '#888',
          transition: 'all 0.2s',
          fontWeight: 600,
          fontSize: '12px',
        }}
      >
        Original
      </button>
      <button
        onClick={() => setVersion('upgrade')}
        style={{
          padding: '6px 16px',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          background: isUpgrade ? '#6c63ff' : 'transparent',
          color: isUpgrade ? '#ffffff' : '#888',
          transition: 'all 0.2s',
          fontWeight: 600,
          fontSize: '12px',
        }}
      >
        Upgrade
      </button>
    </div>
  )
}
