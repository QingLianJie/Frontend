import type { LinkProps, SystemProps } from '@chakra-ui/react'
import { Icon, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { Link as RemixLink } from 'remix'
import { Card } from '~/components/common/Card'
import { helpLinks } from '~/contents/links/external/help'
import { mobileLinks } from '~/contents/links/nav/mobile'

interface MobileProps extends SystemProps {}

export const Mobile = (props: MobileProps) => (
  <Card {...props}>
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(20%, 1fr))"
      w="full"
      p="3.5"
    >
      {mobileLinks.map(link => (
        <MobileLink {...link} key={link.name} />
      ))}
      {helpLinks.map(link => (
        <MobileLink isExternal {...link} key={link.name} />
      ))}
    </SimpleGrid>
  </Card>
)

interface MobileLinkProps extends SystemProps, LinkProps {
  href: string
  name: string
  short: string
  icon: IconType
  color: string
}

const MobileLink = ({
  href,
  name,
  short,
  icon,
  color,
  isExternal,
  ...props
}: MobileLinkProps) => (
  <Link
    as={isExternal ? undefined : RemixLink}
    to={href}
    href={href}
    key={name}
    isExternal={isExternal}
    d="flex"
    alignItems="center"
    flexDir="column"
    w="full"
    px="3.5"
    pt="4"
    pb="2.5"
    rounded="md"
    _hover={{
      textDecor: 'none',
      bg: 'gray.200',
    }}
    _dark={{
      _hover: {
        bg: 'gray.700',
      },
    }}
    {...props}
  >
    <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="2xl" />
    <Text pt="3" fontSize="smd" whiteSpace="nowrap">
      {short}
    </Text>
  </Link>
)
