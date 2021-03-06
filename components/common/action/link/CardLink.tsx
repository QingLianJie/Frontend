import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode } from 'react'

interface CardLinkProps {
  href: string
  children: ReactNode | ReactNode[]
}

const CardLink = ({ href, children }: CardLinkProps) => {
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
      borderWidth="1px"
      rounded="md"
      d="flex"
      flexDir="column"
      transition="all 0.2s"
    >
      <NextLink href={href} passHref>
        <LinkOverlay>{children}</LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}

export default CardLink
