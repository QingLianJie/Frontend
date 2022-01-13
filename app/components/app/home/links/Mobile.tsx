import type { LinkProps, SystemProps } from '@chakra-ui/react'
import { Icon, Link, SimpleGrid, Text } from '@chakra-ui/react'
import type { IconType } from 'react-icons'
import { Link as RemixLink } from 'remix'
import { Card } from '~/components/common/containers/Card'
import { appLinks } from '~/contents/links/app-links'
import { tipsLinks } from '~/contents/links/tips-links'

interface MobileLinksProps extends SystemProps {}

export const MobileLinks = (props: MobileLinksProps) => (
  <Card {...props}>
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(20%, 1fr))"
      w="full"
      p="3.5"
    >
      {appLinks.map(link => (
        <MobileLink {...link} key={link.name} />
      ))}
      {tipsLinks.map(tip => (
        <MobileLink isExternal {...tip} key={tip.name} />
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
    gap="3"
    w="full"
    px="3.5"
    pt="4"
    pb="3"
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
    <Text fontSize="smd" whiteSpace="nowrap">
      {short}
    </Text>
  </Link>
)
