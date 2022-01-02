import { Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Flex
    minH="100vh"
    flexDir="column"
    align="center"
    justify="start"
    bg="gray.50"
  >
    {children}
  </Flex>
)

export default Layout
