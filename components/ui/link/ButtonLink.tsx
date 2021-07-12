import { Button, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

interface ButtonLinkProps {
  text: string
  href: string
  color: string
}

const ButtonLink = ({ text, href, color }: ButtonLinkProps) => {
  return (
    <LinkBox w="full" _focus={{ boxShadow: 'outline' }}>
      <Button colorScheme={color} isFullWidth>
        <NextLink href={href} passHref>
          <LinkOverlay>
            <Text>{text}</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  )
}

export default ButtonLink
