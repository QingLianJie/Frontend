import { Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './header/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Flex
    minH="100vh"
    flexDir="column"
    align="center"
    justify="start"
    bg="gray.100"
    _dark={{
      bg: 'gray.800',
    }}
  >
    <Header />
    <Flex as="main" flex="1">
      {children}
    </Flex>
    <Footer />
  </Flex>
)

export default Layout
