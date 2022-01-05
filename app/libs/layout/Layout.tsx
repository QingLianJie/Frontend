import { Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './header/Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <Flex
    minH="100vh"
    flexDir="column"
    align="center"
    justify="start"
    bg="gray.100"
    _dark={{
      bg: 'gray.800',
    }}
    transition="all 0.2s"
  >
    <Header />
    <Flex as="main" w="full" flexDir="column" align="center" flex="1">
      {children}
    </Flex>
    <Footer />
  </Flex>
)
