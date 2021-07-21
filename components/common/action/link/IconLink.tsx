import { ColorProps, VStack, Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface IconLinkProps {
  icon?: FC
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  href: string
  children: ReactNode | ReactNode[]
}

const IconLink = ({ icon, color, href, children }: IconLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="full"
        px="3"
        pt="4"
        pb="3"
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
        borderWidth={{ base: 'none', md: '1px' }}
      >
        <VStack spacing="3">
          <Icon
            as={icon}
            w="7"
            h="7"
            color={color?.light}
            _dark={{ color: color?.dark }}
          />
          <Text textAlign="center">{children}</Text>
        </VStack>
      </Link>
    </NextLink>
  )
}

export default IconLink
