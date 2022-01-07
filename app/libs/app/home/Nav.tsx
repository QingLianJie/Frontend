import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { Link as RemixLink } from 'remix'
import { appLinks } from '~/contents/links/app-links'
import { HomeCard } from '~/libs/common/containers/HomeCard'

export const HomeNav = () => (
  <HomeCard title="页面">
    <Flex
      flexDir={{ base: 'row', sm: 'column' }}
      alignItems="flex-start"
      justifyContent="flex-start"
      w="full"
      pt={{ base: '1', sm: '2' }}
      px={{ base: '4', sm: '0' }}
      pb="4"
      gap={{ base: '2', sm: '0' }}
    >
      {appLinks.map(link => (
        <HomeNavLink {...link} key={link.name} />
      ))}
    </Flex>
  </HomeCard>
)

interface HomeNavLinkProps {
  href: string
  name: string
  short: string
  icon: IconType
  color: string
}

const HomeNavLink = ({ href, name, short, icon, color }: HomeNavLinkProps) => (
  <Link
    as={RemixLink}
    to={href}
    key={name}
    d="flex"
    alignItems="center"
    flexDir={{ base: 'column', sm: 'row' }}
    gap={{ base: '3', sm: '4' }}
    w={{ base: 'fit-content', sm: 'full' }}
    px={{ base: '3', sm: '6' }}
    pt={{ base: '3', sm: '2' }}
    pb={{ base: '2', sm: '2' }}
    rounded={{ base: 'md', sm: 'none' }}
    _hover={{
      textDecor: 'none',
      bg: 'gray.200',
    }}
    _dark={{
      _hover: {
        bg: 'gray.600',
      },
    }}
  >
    <Icon
      as={icon}
      aria-label={name}
      color={`${color}.500`}
      fontSize={{ base: '28', sm: 'xl' }}
    />
    <Text d={{ base: 'flex', sm: 'none' }}>{short}</Text>
    <Text d={{ base: 'none', sm: 'flex' }}>{name}</Text>
  </Link>
)
