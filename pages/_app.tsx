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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
