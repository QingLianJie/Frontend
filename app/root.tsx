import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Heading,
} from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import NProgress from 'nprogress'
import styles from 'nprogress/nprogress.css'
import React, { useContext, useEffect, type ReactNode } from 'react'
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useTransition,
  type LinksFunction,
  type LoaderFunction,
  type MetaFunction,
} from 'remix'
import version from '~/version.json'
import { Layout } from './components/layout/Layout'
import { ClientStyleContext, ServerStyleContext } from './context'
import { getSession } from './sessions'
import { type IMember } from './types'

const fontSans = `Outfit, "HarmonyOS Sans SC", -apple-system, BlinkMacSystemFont,
    Roboto, "Source Han Sans SC", "Microsoft Yahei", "Noto Sans SC",
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`

const fontMono = `"JetBrains Mono", "Courier New", "Fira Mono", Consolas, "Droid Sans Mono", ${fontSans}`

const chakraTheme = extendTheme({
  fonts: { body: fontSans, heading: fontSans, mono: fontMono },
  fontSizes: { smd: '0.925rem', mdl: '1.075rem' },
  styles: {
    global: {
      html: { scrollPadding: '4rem', overflowY: 'scroll' },
      'a:hover': { textDecoration: 'none' },
    },
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
  components: {
    Link: {
      baseStyle: { _hover: { textDecoration: 'none' } },
    },
  },
})

export const meta: MetaFunction = () => ({
  title: '清廉街',
  description: '一个简单的网站，非官方，开放源代码。',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  { rel: 'manifest', href: '/manifest.webmanifest' },
  { rel: 'icon', type: 'image/png', href: '/logo.png' },
  { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Outfit:400,700|Noto+Sans+SC:400,700&display=swap',
  },
  { rel: 'stylesheet', href: styles },
]

export type RootLoader = {
  version: string
  member: IMember | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const member = session.get('member') || null

  return json<RootLoader>({ ...version, member })
}

interface DocumentProps {
  version?: string
  children: ReactNode
}

const Document = withEmotionCache(
  ({ version, children }: DocumentProps, emotionCache) => {
    const serverSyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach(tag => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    return (
      <html lang="zh-cn" data-version={version}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <Meta />
          <Links />
          {serverSyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
          <ColorModeScript
            initialColorMode={chakraTheme.config.initialColorMode}
          />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
      </html>
    )
  }
)

export default function App() {
  const transition = useTransition()
  const { version } = useLoaderData<RootLoader>()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
  }, [])

  useEffect(() => {
    if (transition.state === 'idle') NProgress.done()
    else NProgress.start()
  }, [transition.state])

  return (
    <Document version={version}>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document>
      <Heading as="h1" px="12" pt="12" pb="2" size="md">
        {caught.status} {caught.statusText}
      </Heading>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <Heading as="h1" px="12" pt="12" pb="2" size="md">
        {error.message}
      </Heading>
    </Document>
  )
}
