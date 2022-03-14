import { Alert, CloseButton, Flex, Link, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { Footer } from './Footer'
import { Header } from './header/Header'

interface LayoutProps {
  title?: string
  isCenter?: boolean
  children: ReactNode
}

export const Layout = ({ title, isCenter, children }: LayoutProps) => (
  <Flex
    pt="20"
    minH="100vh"
    flexDir="column"
    align="center"
    justify="start"
    bg="gray.100"
    _dark={{
      bg: 'gray.900',
    }}
  >
    <Header title={title} />
    <Flex
      as="main"
      w="full"
      flexDir="column"
      align="center"
      justify={isCenter ? 'center' : 'flex-start'}
      flex="1"
      pt="2"
    >
      {children}
    </Flex>
    <Footer />
  </Flex>
)
