import type { SystemProps } from '@chakra-ui/react'
import {
  Avatar,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { Link as RemixLink } from 'react-router-dom'
import Nav from './Nav'

interface HeaderSectionProps extends SystemProps {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

const HeaderSection = ({
  align = 'center',
  children,
  ...props
}: HeaderSectionProps) => (
  <Flex align="center" justify={align} flex="1" px="2" gap="4" {...props}>
    {children}
  </Flex>
)

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Tooltip
      hasArrow
      label={colorMode === 'light' ? '变暗' : '变亮'}
      px="2.5"
      py="1.5"
      rounded="md"
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label="切换夜间模式"
        icon={<Icon as={colorMode === 'light' ? RiMoonFill : RiSunFill} />}
        rounded="full"
        size="md"
        fontSize="lg"
        color="gray.400"
        bg="transparent"
        _hover={{
          color: 'gray.600',
          bg: 'gray.200',
        }}
        _dark={{
          color: 'gray.500',
          _hover: {
            color: 'gray.300',
            bg: 'gray.900',
          },
        }}
      />
    </Tooltip>
  )
}

interface MemberProps {
  name: string
  heu?: string
  avatar?: string
}

const Member = ({ name, heu, avatar }: MemberProps) => (
  <Tooltip
    hasArrow
    placement="bottom-end"
    label={name ? `已登录到 ${name}` : '考虑登录一下吗？'}
    px="2.5"
    py="1.5"
    rounded="md"
  >
    <Link as={RemixLink} to={`/@${name}`} rounded="full">
      <Avatar
        name={name}
        src={avatar}
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

const Header = ({ title = '清廉街' }: HeaderProps) => {
  const memberMock = {
    name: 'Test User',
  }

  return (
    <Flex
      as="header"
      w="full"
      align="center"
      justify="stretch"
      px={{ base: '6', sm: '8' }}
      py={{ base: '4', sm: '5' }}
      gap="8"
    >
      <HeaderSection align="left">
        <Heading as="h1" fontSize="1.125rem" whiteSpace="nowrap">
          {title}
        </Heading>
      </HeaderSection>
      <HeaderSection align="center" d={{ base: 'none', md: 'flex' }}>
        <Nav />
      </HeaderSection>
      <HeaderSection align="right">
        <SwitchTheme />
        <Member {...memberMock} />
      </HeaderSection>
    </Flex>
  )
}

export default Header
