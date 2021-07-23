import { ColorProps, VStack, Icon, Link, Text, HStack } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface MenuListLinkProps {
  icon?: FC
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  href: string
  children: ReactNode | ReactNode[]
}

const MenuListLink = ({ icon, color, href, children }: MenuListLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        w="full"
        px="4"
        py="3"
        rounded="md"
        bg={{ base: 'transparent', md: 'white', lg: 'transparent' }}
        _hover={{
          textDecor: 'none',
          bg: 'gray.100',
        }}
        _focus={{ boxShadow: 'outline' }}
        _dark={{
          bg: { base: 'transparent', md: 'gray.800', lg: 'transparent' },
          _hover: {
            bg: 'gray.700',
          },
        }}
      >
        <HStack spacing="3">
          <Icon
            as={icon}
            w="5"
            h="5"
            color={color?.light}
            _dark={{ color: color?.dark }}
          />
          <Text textAlign="center" w="full" whiteSpace="nowrap" isTruncated>
            {children}
          </Text>
        </HStack>
      </Link>
    </NextLink>
  )
}

export default MenuListLink
