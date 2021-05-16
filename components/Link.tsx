import { Icon, Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { IListIconLinkProps } from '../next-env'

const NormalLink = ({ href, text }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="2"
        paddingY="1"
        rounded="md"
        color="purple.500"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const NormalIconLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        d="flex"
        alignItems="center"
        px="3"
        py="1.5"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          _hover: {
            bg: 'gray.100',
          },
        }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Icon as={icon} w="5" h="5" mr="3" color={color} />
        <Text fontSize="md" mr="1">
          {text}
        </Text>
      </Link>
    </NextLink>
  )
}

const ListIconLink = ({
  href,
  icon,
  text,
  color,
  small,
}: IListIconLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        d="flex"
        alignItems="center"
        px={small ? '2' : '3'}
        py={small ? '1' : '3'}
        rounded="md"
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Icon as={icon} w="5" h="5" mr={small ? '3' : '4'} color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const AppIconLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        pos="relative"
        d="inline-flex"
        alignItems="center"
        flexDir="column"
        px="5"
        py="4"
        mx="1"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          _hover: {
            bg: 'gray.100',
          },
        }}
        _focus={{ boxShadow: 'outline' }}
      >
        <Icon as={icon} w="8" h="8" mb="3" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

export { NormalLink, NormalIconLink, ListIconLink, AppIconLink }
