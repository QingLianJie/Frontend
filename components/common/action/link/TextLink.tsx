import { Link, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode } from 'react'

interface TextLinkProps {
  href: string
  external?: boolean
  color?: string
  children: ReactNode | ReactNode[]
}

const TextLink = ({ href, external, color, children }: TextLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link
        w="fit-content"
        color={`${color || 'purple'}.600`}
        _dark={{
          color: `${color || 'purple'}.300`,
        }}
        _hover={{
          textDecoration: 'none',
          color: `${color || 'purple'}.700`,
          _dark: {
            color: `${color || 'purple'}.200`,
          },
        }}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        <Text as="span" w="fit-content">
          {children}
        </Text>
      </Link>
    </NextLink>
  )
}

export default TextLink
