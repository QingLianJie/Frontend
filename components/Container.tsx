import { Stack } from '@mui/material'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Nav } from './common/Nav'
import { Auth } from './user/Auth'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <Stack sx={{ minHeight: '100vh', pl: { xs: 0, sm: 10 } }}>
    {children}
    <Nav />
    <Auth />
  </Stack>
)

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
