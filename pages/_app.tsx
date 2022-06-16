import createCache from '@emotion/cache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { Container } from '../components/Container'
import { fontFamily, palette } from '../configs/theme'
import Progress from 'nextjs-progressbar'

const createEmotionCache = () => createCache({ key: 'css', prepend: true })
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: darkMode ? 'dark' : 'light', ...palette },
        typography: { fontFamily },
      }),
    [darkMode]
  )

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Progress
            color="#f687b3"
            height={2}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
