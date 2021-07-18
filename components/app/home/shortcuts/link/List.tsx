import { ColorProps, VStack, Icon, Link, Text, HStack } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface ShortcutListLinkProps {
  icon?: FC
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  href: string
  children: ReactNode | ReactNode[]
}

const ShortcutListLink = ({
  icon,
  color,
  href,
  children,
}: ShortcutListLinkProps) => {
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

export default ShortcutListLink
