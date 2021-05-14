import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Head from 'next/head'

const theme = extendTheme({
  fonts: {
    body: `"Inter",-apple-system,"Source Han Sans SC","Source Han Sans","Noto Sans SC",BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    heading: `"Source Han Serif SC","Source Han Serif","Noto Serif SC","Noto Serif",Georgia,"Times New Roman",Times,"Droid Serif",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
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
