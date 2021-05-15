import { Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

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

export { NormalLink }
