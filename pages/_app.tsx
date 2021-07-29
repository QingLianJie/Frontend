import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

const fontFamily = `Inter, "HarmonyOS Sans SC", -apple-system, BlinkMacSystemFont, Roboto, "Source Han Sans SC", "Microsoft Yahei", "Noto Sans SC", "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`

const theme = extendTheme({
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: {
      body: {
        overflowY: 'overlay',
      },
      '.chakra-toast__inner': {
        margin: '-0.5rem 1.5rem 1.5rem 1.5rem !important',
      },
      '.cropper-view-box,.cropper-face ': {
        borderRadius: '50%',
      },
      '.chakra-table': {
        fontVariantNumeric: 'normal !important',
      },
      '.chakra-modal__content-container': {
        padding: '0 1rem',
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="一个简单的网站，非官方，开放源代码。"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#F687B3"></meta>

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
