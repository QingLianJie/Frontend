import { ColorProps, Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC } from 'react'
import { ReactNode, ReactNodeArray } from 'react'

interface NavMenuLinkProps {
  href: string
  icon?: FC
  color?: ColorProps['color']
  children: ReactNode | ReactNodeArray
}

const NavMenuLink = ({ href, icon, color, children }: NavMenuLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        w="full"
        d="flex"
        py="2.5"
        ps="5"
        pe="6"
        alignItems="center"
        rounded="md"
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{ boxShadow: 'outline' }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {icon ? (
          <Icon as={icon} me="3" minW="1.125em" minH="1.125em" color={color} />
        ) : null}
        <Text>{children}</Text>
      </Link>
    </NextLink>
  )
}

export default NavMenuLink
