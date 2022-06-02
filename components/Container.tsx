import { Stack } from '@mui/material'
import { useAtom } from 'jotai'
import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
import { linksAtom } from '../contexts/links'
import { Nav } from './Nav'
import { Auth } from './user/Auth'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const [, setLinks] = useAtom(linksAtom)

  useEffect(() => {
    const links = localStorage.getItem('links')
    console.log(1)

    try {
      if (!links) return
      const data = JSON.parse(links)
      setLinks(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Stack sx={{ minHeight: '100vh', pl: { xs: 0, sm: 10 } }}>
      {children}
      <Nav />
      <Auth />
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
