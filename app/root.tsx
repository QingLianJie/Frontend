import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react'
import {
  json,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from 'remix'
import version from '~/version.json'
import { Layout } from './components/layout/Layout'
import { getSession } from './sessions'
import type { IMember } from './types'

const fontSans = `Inter, "HarmonyOS Sans SC", -apple-system, BlinkMacSystemFont,
    Roboto, "Source Han Sans SC", "Microsoft Yahei", "Noto Sans SC",
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`

const fontMono = `"JetBrains Mono", "Courier New", "Fira Mono", Consolas, "Droid Sans Mono", ${fontSans}`

const chakraTheme = extendTheme({
  fonts: {
    body: fontSans,
    heading: fontSans,
    mono: fontMono,
  },
  fontSizes: { smd: '0.925rem', mdl: '1.075rem' },
  styles: {
    global: {
      html: { scrollPadding: '6.5rem' },
    },
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
})

export const meta: MetaFunction = () => ({
  title: '清廉街',
  description: '一个简单的网站，非官方，开放源代码。',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  {
    rel: 'manifest',
    href: '/manifest.webmanifest',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/logo.png',
  },
  {
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Inter:400,700|Noto+Sans+SC:400,700&display=swap',
  },
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

export default function App() {
  const { version } = useLoaderData<RootLoader>()

  return (
    <html lang="zh-cn" data-version={version}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={chakraTheme}>
          <Layout>
            <Outlet />
          </Layout>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const { version } = useLoaderData<RootLoader>()

  return (
    <html lang="zh-cn" data-version={version}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>
          {caught.status} {caught.statusText}
        </title>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={chakraTheme}>
          <Heading as="h1" px="12" pt="12" pb="2" size="md">
            {caught.status} {caught.statusText}
          </Heading>
        </ChakraProvider>
        <Scripts />
      </body>
    </html>
  )
}
