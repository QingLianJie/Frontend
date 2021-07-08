import { HStack, Link, StackDivider, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

interface TextLinkProps {
  href: string
  text: string
}

const TextLink = ({ href, text }: TextLinkProps) => {
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
        _dark={{
          color: 'purple.300',
        }}
        _hover={{
          textDecoration: 'none',
          color: 'purple.700',
          _dark: {
            color: 'purple.200',
          },
        }}
      >
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

interface AuthLinksProps {
  links: Array<{
    href: string
    text: string
  }>
}

const AuthLinks = ({ links }: AuthLinksProps) => {
  return (
    <HStack divider={<StackDivider />} justify="center" my="3">
      {links.map(link => (
        <TextLink {...link} key={link.href} />
      ))}
    </HStack>
  )
}

export default AuthLinks
