import type { SystemProps } from '@chakra-ui/react'
import {
  Avatar as ChakraAvatar,
  Flex,
  Heading,
  Icon,
  Link,
  Tooltip,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { RiUserLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import { SwitchTheme } from '~/components/common/actions/SwitchTheme'
import { Drawer } from '../drawer/Drawer'
import { HeaderNav } from './Nav'

interface HeaderProps {
  title?: string
}

export const Header = ({ title = '清廉街' }: HeaderProps) => (
  <Flex
    as="header"
    position="sticky"
    top={{ base: '0', md: '-2' }}
    w="full"
    align="center"
    justify="stretch"
    px={{ base: '6', sm: '8' }}
    pt={{ base: '5', md: '5' }}
    pb={{ base: '5', md: '3' }}
    gap="8"
    zIndex="100"
    backdropFilter="blur(12px)"
    bg="#EDF2F7AA"
    _dark={{ bg: '#171923AA' }}
    transition="all 0.2s"
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
      <HeaderNav />
    </HeaderSection>
    <HeaderSection align="right">
      <SwitchTheme hasTooltip d={{ base: 'none', md: 'flex' }} />
      <HeaderAvatar />
    </HeaderSection>
  </Flex>
)

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

interface HeaderAvatarProps {
  name?: string
  avatar?: string
}

const HeaderAvatar = ({ name, avatar }: HeaderAvatarProps) => (
  <Tooltip
    hasArrow
    placement="bottom-end"
    label={
      name ? `已登录到 ${name}` : '考虑登录到「清廉街」吗？可以发评论和上传成绩'
    }
    px="2.5"
    py="1.5"
    rounded="md"
    maxW="48"
  >
    <Link
      as={RemixLink}
      to={name ? `/@${name}` : '/member/login'}
      rounded="full"
    >
      <ChakraAvatar
        aria-label={name ?? '陌生人'}
        src={avatar}
        icon={<Icon as={RiUserLine} fontSize="xl" />}
        size="md"
        bg="gray.200"
        color="gray.500"
        _hover={{
          color: 'gray.700',
        }}
        _dark={{
          bg: 'gray.800',
          color: 'gray.400',
          _hover: {
            color: 'gray.200',
          },
        }}
        cursor="pointer"
        transition="all 0.2s"
      />
    </Link>
  </Tooltip>
)
