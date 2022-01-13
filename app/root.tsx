import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import { Layout } from './components/layout/Layout'

const fontFamily = `Inter, "HarmonyOS Sans SC", -apple-system, BlinkMacSystemFont,
    Roboto, "Source Han Sans SC", "Microsoft Yahei", "Noto Sans SC",
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`

export const theme = extendTheme({
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
  fontSizes: { smd: '0.925rem', mdl: '1.075rem' },
  styles: {
    global: {
      html: { scrollPadding: '1rem' },
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

export default function App() {
  return (
    <html lang="zh-cn">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
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

  return (
    <html lang="zh-cn">
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
        <ChakraProvider theme={theme}>
          <Heading as="h1" px="12" pt="12" pb="2" size="md">
            {caught.status} {caught.statusText}
          </Heading>
        </ChakraProvider>
        <Scripts />
      </body>
    </html>
  )
}
