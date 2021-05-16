import {
  Button,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { RiExternalLinkFill } from 'react-icons/ri'
import { IListIconLinkProps, INormalButtonLinkProps } from '../next-env'

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
        <Icon as={icon} w="5" h="5" ml="1" mr="3" color={color} />
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
        px={small ? '5' : '3'}
        py={small ? '1.5' : '3'}
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
        <Icon as={icon} w="9" h="9" mb="3" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const NormalButtonLink = ({ href, text, external }: INormalButtonLinkProps) => {
  if (external) {
    return (
      <LinkBox>
        <Button
          as="div"
          rightIcon={external && <RiExternalLinkFill />}
          iconSpacing="3"
        >
          <LinkOverlay href={href} isExternal>
            {text}
          </LinkOverlay>
        </Button>
      </LinkBox>
    )
  }

  return (
    <NextLink href={href}>
      <Button>{text}</Button>
    </NextLink>
  )
}

export {
  NormalLink,
  NormalIconLink,
  ListIconLink,
  AppIconLink,
  NormalButtonLink,
}
