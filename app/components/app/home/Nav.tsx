import type { SystemProps } from '@chakra-ui/react'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { Link as RemixLink } from 'remix'
import { HomeCard } from '~/components/common/containers/HomeCard'
import { appLinks } from '~/contents/links/app-links'

interface HomeNavProps extends SystemProps {}

export const HomeNav = (props: HomeNavProps) => (
  <HomeCard title="页面" {...props}>
    <Flex
      flexDir="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      w="full"
      pt="2"
      px="0"
      pb="4"
      gap="0"
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
    flexDir="row"
    gap="4"
    w="full"
    px="6"
    pt="2"
    pb="2"
    rounded="none"
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
    <Text>{name}</Text>
  </Link>
)
