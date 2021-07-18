import { Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode } from 'react'

interface InlineLinkProps {
  href: string
  children: ReactNode | ReactNode[]
}

const InlineLink = ({ href, children }: InlineLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        w="fit-content"
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
        <Text as="span" w="fit-content">
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

export default InlineLink
