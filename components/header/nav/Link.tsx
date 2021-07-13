import { ColorProps, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode, ReactNodeArray } from 'react'

interface NavLinkProps {
  icon: FC
  color?: ColorProps['color']
  href: string
  children: ReactNode | ReactNodeArray
}

const NavLink = ({ icon, color, href, children }: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="3"
        paddingY="1.5"
        rounded="md"
        _hover={{
          textDecor: 'none',
          bg: 'gray.100',
        }}
        _focus={{ boxShadow: 'outline' }}
        _dark={{
          _hover: {
            bg: 'gray.700',
          },
        }}
      >
        <HStack spacing="3">
          <Icon as={icon} w="5" h="5" color={color} />
          <Text fontSize="md">{children}</Text>
        </HStack>
      </Link>
    </NextLink>
  )
}

export default NavLink
