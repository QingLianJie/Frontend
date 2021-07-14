import { ColorProps, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface NavLinkProps {
  icon?: FC
  color?: ColorProps['color']
  href: string
  children: ReactNode | ReactNode[]
}

const DrawerLink = ({ icon, color, href, children }: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        w="full"
        px="4"
        py="2.5"
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
          {icon ? <Icon as={icon} w="5" h="5" color={color} /> : null}
          <Text fontSize="md">{children}</Text>
        </HStack>
      </Link>
    </NextLink>
  )
}

export default DrawerLink
