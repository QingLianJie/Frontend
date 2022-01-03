import { Icon, Link, VStack } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { RiProfileLine } from 'react-icons/ri'
import { Link as RemixLink } from 'remix'
import { appLinks } from '~/contents/links/app-links'
import HomeCard from '~/libs/common/HomeCard'

interface NavLinkProps {
  href: string
  name: string
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
      bg: 'gray.50',
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
  <HomeCard title="页面">
    <VStack align="flex-start" spacing="0" w="full" pt="2" pb="4">
      <NavLink
        href="/profile"
        name="个人主页"
        color="pink"
        icon={RiProfileLine}
      />
      {appLinks.map(link => (
        <NavLink {...link} key={link.name} />
      ))}
    </VStack>
  </HomeCard>
)

export default Nav
