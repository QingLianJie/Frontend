import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'

const fontFamily = `"Inter",-apple-system,"Source Han Sans SC","Source Han Sans","Noto Sans SC",BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`

const theme = extendTheme({
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="一个简单的网站，非官方，开放源代码。"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#F687B3"></meta>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
