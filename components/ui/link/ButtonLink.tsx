import { Button, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode, ReactNodeArray } from 'react'

interface ButtonLinkProps {
  children: ReactNode | ReactNodeArray
  full?: boolean
  href: string
  color?: string
}

const ButtonLink = ({ children, href, full, color }: ButtonLinkProps) => {
  return (
    <LinkBox w={full ? 'full' : undefined} _focus={{ boxShadow: 'outline' }}>
      <Button colorScheme={color} isFullWidth={full}>
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text>{children}</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  )
}

export default ButtonLink
