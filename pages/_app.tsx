import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'

const fontFamily = `"Inter",-apple-system,"HarmonyOS Sans SC","Source Han Sans SC","Source Han Sans","Noto Sans SC",BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`

const theme = extendTheme({
  fonts: {
    body: fontFamily,
    heading: fontFamily,
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
