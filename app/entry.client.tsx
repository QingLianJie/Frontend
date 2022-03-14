import { CacheProvider } from '@emotion/react'
import { useState, type ReactNode } from 'react'
import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'
import { ClientStyleContext } from './context'
import createEmotionCache from './createEmotionCache'

interface ClientCacheProviderProps {
  children: ReactNode
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache())

  function reset() {
    setCache(createEmotionCache())
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

hydrate(
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
  document
)
