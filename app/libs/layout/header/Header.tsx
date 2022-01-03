import type { SystemProps } from '@chakra-ui/react'
import { Avatar, Flex, Heading, Icon, Link, Tooltip } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { RiUserLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import SwitchTheme from '~/libs/common/SwitchTheme'
import Drawer from '../drawer/Drawer'
import Nav from './Nav'

type AlignType = 'left' | 'center' | 'right'

interface HeaderSectionProps extends SystemProps {
  align?: AlignType | { base: AlignType; md: AlignType }
  children: ReactNode
}

const HeaderSection = ({
  align = 'center',
  children,
  ...props
}: HeaderSectionProps) => (
  <Flex
    align="center"
    justify={align}
    flex="1"
    px={{ base: '0', md: '2' }}
    gap="4"
    {...props}
  >
    {children}
  </Flex>
)

interface MemberProps {
  name?: string
  avatar?: string
}

const Member = ({ name, avatar }: MemberProps) => (
  <Tooltip
    hasArrow
    placement="bottom-end"
    label={name ? `已登录到 ${name}` : '考虑登录一下吗'}
    px="2.5"
    py="1.5"
    rounded="md"
  >
    <Link as={RemixLink} to={name ? `/@${name}` : '/login'} rounded="full">
      <Avatar
        aria-label={name ?? '陌生人'}
        src={avatar}
        icon={<Icon as={RiUserLine} fontSize="xl" />}
        size="md"
        bg="gray.200"
        color="gray.500"
        _dark={{
          bg: 'gray.700',
          color: 'gray.400',
        }}
        cursor="pointer"
      />
    </Link>
  </Tooltip>
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
    px={{ base: '6', sm: '8' }}
    py="5"
    gap="8"
  >
    <HeaderSection align="left" d={{ base: 'flex', md: 'none' }}>
      <Drawer />
    </HeaderSection>
    <HeaderSection align={{ base: 'center', md: 'left' }}>
      <Heading as="h1" fontSize="1.125rem" whiteSpace="nowrap">
        {title}
      </Heading>
    </HeaderSection>
    <HeaderSection align="center" d={{ base: 'none', md: 'flex' }}>
      <Nav />
    </HeaderSection>
    <HeaderSection align="right">
      <SwitchTheme hasTooltip d={{ base: 'none', md: 'flex' }} />
      <Member />
    </HeaderSection>
  </Flex>
)

export default Header
