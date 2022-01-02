import { extendTheme } from '@chakra-ui/react'
import type { LinkDescriptor, MetaDescriptor } from 'remix'

const fontFamily = `Inter, "HarmonyOS Sans SC", -apple-system, BlinkMacSystemFont,
    Roboto, "Source Han Sans SC", "Microsoft Yahei", "Noto Sans SC",
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji"`

export const theme = extendTheme({
  fonts: {
    body: fontFamily,
    heading: fontFamily,
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
})

export const meta: MetaDescriptor = {
  title: '清廉街',
  description: '一个简单的网站，非官方，开放源代码。',
  viewport: 'width=device-width,initial-scale=1',
}

export const links: LinkDescriptor[] = [
  {
    rel: 'manifest',
    href: '/manifest.webmanifest',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/logo.png',
  },
  {
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
]
