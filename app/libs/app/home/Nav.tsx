import { Icon, Link, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { Link as RemixLink } from 'remix'
import { appLinks } from '~/contents/links/app-links'
import HomeCard from '~/libs/common/HomeCard'

interface NavLinkProps {
  href: string
  name: string
  short?: string
  icon: IconType
  color: string
}

const NavLink = ({ href, name, icon, color }: NavLinkProps) => (
  <Link
    as={RemixLink}
    to={href}
    key={name}
    d="flex"
    alignItems="center"
    gap="4"
    w="full"
    px="6"
    py="2"
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
    <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="xl" />
    {name}
  </Link>
)

const Nav = () => (
  <HomeCard title="页面" d={{ base: 'none', sm: 'flex' }}>
    <VStack align="flex-start" spacing="0" w="full" pt="2" pb="4">
      {appLinks.map(link => (
        <NavLink {...link} key={link.name} />
      ))}
    </VStack>
  </HomeCard>
)

const MobileNavLink = ({ href, name, short, icon, color }: NavLinkProps) => (
  <Link
    as={RemixLink}
    to={href}
    key={name}
    d="flex"
    alignItems="center"
    flexDir="column"
    gap="3"
    w="full"
    px="3"
    pt="3"
    pb="2"
    rounded="md"
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
    <Icon as={icon} aria-label={short} color={`${color}.500`} fontSize="28" />
    {short}
  </Link>
)

const MobileNav = () => (
  <HomeCard title="页面" d={{ base: 'flex', sm: 'none' }}>
    <Wrap w="full" px="4" pt="1" pb="4">
      {appLinks.map(link => (
        <WrapItem key={link.short}>
          <MobileNavLink {...link} />
        </WrapItem>
      ))}
    </Wrap>
  </HomeCard>
)

export { Nav, MobileNav }
