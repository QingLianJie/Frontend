import { ColorProps, Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface NavMenuLinkProps {
  href: string
  icon?: FC
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  children: ReactNode | ReactNode[]
}

const NavMenuLink = ({ href, icon, color, children }: NavMenuLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        w="full"
        d="flex"
        py="2.5"
        px="6"
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
          <Icon
            as={icon}
            ms="-0.5"
            me="3"
            w="5"
            h="5"
            color={color?.light}
            _dark={{ color: color?.dark }}
          />
        ) : null}
        <Text>{children}</Text>
      </Link>
    </NextLink>
  )
}

export default NavMenuLink
