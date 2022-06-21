import { Stack } from '@mui/material'
import { Bridge } from '@qing-dev/bridge'
import { useAtom } from 'jotai'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { pageLoadedAtom } from '../contexts/boolean'
import { linksAtom } from '../contexts/links'
import { schedulesAtom } from '../contexts/schedules'
import { scoresAtom } from '../contexts/scores'
import {
  bindAtom,
  bridgeAtom,
  fetcherAtom,
  timestampAtom,
} from '../contexts/university'
import { type Fetcher as FetcherType } from '../types'
import { Nav } from './Nav'
import { Bind } from './university/Bind'
import { Fetcher } from './university/Fetcher'
import { Auth } from './user/Auth'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const [, setLinks] = useAtom(linksAtom)
  const [, setPageLoaded] = useAtom(pageLoadedAtom)
  const [, setBind] = useAtom(bindAtom)
  const [, setFetcher] = useAtom(fetcherAtom)
  const [, setBridge] = useAtom(bridgeAtom)
  const [, setTimestamp] = useAtom(timestampAtom)
  const [, setScores] = useAtom(scoresAtom)
  const [, setSchedules] = useAtom(schedulesAtom)

  useEffect(() => {
    const links = localStorage.getItem('links')
    const bind = localStorage.getItem('bind')
    const timestamp = localStorage.getItem('timestamp')
    const scores = localStorage.getItem('scores')
    const schedules = localStorage.getItem('schedules')

    try {
      if (links) setLinks(JSON.parse(links))
      if (bind) setBind(JSON.parse(bind))
      if (timestamp) setTimestamp(JSON.parse(timestamp))
      if (scores) setScores(JSON.parse(scores))
      if (schedules) setSchedules(JSON.parse(schedules))
      // @ts-ignore
      const fetcher = window.Fetcher as FetcherType | undefined
      if (fetcher) {
        setFetcher(true)
        // @ts-ignore
        const bridge = new Bridge(window.Fetcher)
        setBridge(bridge)
      }
    } catch (error) {
      console.error('页面加载失败', error)
    } finally {
      setPageLoaded(true)
    }
  }, [])

  return (
    <Stack sx={{ minHeight: '100vh', pl: { xs: 0, sm: 10 } }}>
      {children}
      <Auth />
      <Bind />
      <Fetcher />
      <Nav />
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
