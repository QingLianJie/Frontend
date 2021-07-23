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
      // borderWidth="1px"
      // rounded="md"
      py="4"
      px="6"
      w="full"
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

export default CardLink
