import { ChakraProvider } from '@chakra-ui/react'
import type { LinksFunction, MetaFunction } from 'remix'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import { links as rootLinks, meta as rootMeta, theme } from './utils/meta'

export const meta: MetaFunction = () => rootMeta

export const links: LinksFunction = () => rootLinks

const App = () => (
  <html lang="zh-cn">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <Meta />
      <Links />
    </head>
    <body>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' && <LiveReload />}
    </body>
  </html>
)

export default App
