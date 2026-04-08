import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Version = 'original' | 'upgrade'

interface VersionContextValue {
  version: Version
  setVersion: (v: Version) => void
}

const VersionContext = createContext<VersionContextValue>({
  version: 'original',
  setVersion: () => {},
})

export function VersionProvider({ children }: { children: ReactNode }) {
  const getInitial = (): Version => {
    const param = new URLSearchParams(window.location.search).get('v')
    return param === 'upgrade' ? 'upgrade' : 'original'
  }

  const [version, setVersionState] = useState<Version>(getInitial)

  const setVersion = (v: Version) => {
    setVersionState(v)
    const url = new URL(window.location.href)
    url.searchParams.set('v', v)
    window.history.replaceState({}, '', url.toString())
  }

  useEffect(() => {
    const onPop = () => setVersionState(getInitial())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      {children}
    </VersionContext.Provider>
  )
}

export function useVersion() {
  return useContext(VersionContext)
}
