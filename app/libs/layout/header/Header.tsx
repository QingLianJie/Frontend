import { Flex, Heading } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Nav from './Nav'
import Profile from './Profile'

interface HeaderSectionProps {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

const HeaderSection = ({ align = 'center', children }: HeaderSectionProps) => (
  <Flex justify={align} flex="1" px="2">
    {children}
  </Flex>
)

interface HeaderProps {
  title?: string
}

const Header = ({ title = '清廉街' }: HeaderProps) => (
  <Flex
    as="header"
    w="full"
    align="center"
    justify="stretch"
    px="8"
    py="6"
    gap="8"
  >
    <HeaderSection align="left">
      <Heading as="h1" fontSize="1.125rem">
        {title}
      </Heading>
    </HeaderSection>
    <HeaderSection align="center">
      <Nav />
    </HeaderSection>
    <HeaderSection align="right">
      <Profile />
    </HeaderSection>
  </Flex>
)

export default Header
