import { Stack } from '@mui/material'
import { useAtom } from 'jotai'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { bindAtom } from '../contexts/account'
import { fetcherAtom } from '../contexts/bridge'
import { linksAtom } from '../contexts/links'
import { pageLoadedAtom } from '../contexts/switch'
import { Nav } from './Nav'
import { Bind } from './university/Bind'
import { Auth } from './user/Auth'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const [, setLinks] = useAtom(linksAtom)
  const [, setPageLoaded] = useAtom(pageLoadedAtom)
  const [, setBind] = useAtom(bindAtom)
  const [, setFetcher] = useAtom(fetcherAtom)

  useEffect(() => {
    const links = localStorage.getItem('links')
    const bind = localStorage.getItem('bind')

    try {
      if (links) setLinks(JSON.parse(links))
      if (bind) setBind(JSON.parse(bind))
      // @ts-ignore
      if (window.Fetcher) setFetcher(window.Fetcher)
    } catch (error) {
      console.error(error)
    } finally {
      setPageLoaded(true)
    }
  }, [])

  return (
    <Stack sx={{ minHeight: '100vh', pl: { xs: 0, sm: 10 } }}>
      {children}
      <Nav />
      <Auth />
      <Bind />
    </Stack>
  )
}

interface MetaProps {
  title?: string
  description?: string
}

export const Meta = ({
  title = '清廉街',
  description = '一个开源的课程查询网站。',
}: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
)
