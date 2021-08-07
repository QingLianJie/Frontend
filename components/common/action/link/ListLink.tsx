import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode } from 'react'

interface ListLinkProps {
  href: string
  children: ReactNode | ReactNode[]
}

const ListLink = ({ href, children }: ListLinkProps) => {
  return (
    <LinkBox
      w="full"
      py="4"
      px="6"
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      _hover={{
        bg: 'gray.100',
        _dark: {
          bg: 'gray.900',
        },
      }}
      transition="all 0.2s"
    >
      <NextLink href={href} passHref>
        <LinkOverlay>{children}</LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default ListLink
