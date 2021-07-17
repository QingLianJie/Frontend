import {
  Button,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  ThemeTypings,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { FC, ReactNode } from 'react'

interface ButtonLinkProps {
  children: ReactNode | ReactNode[]
  full?: boolean
  href: string
  color?: ThemeTypings['colorSchemes']
  icon?: FC
}

const ButtonLink = ({ children, href, full, color, icon }: ButtonLinkProps) => {
  return (
    <LinkBox w={full ? 'full' : undefined} _focus={{ boxShadow: 'outline' }}>
      <Button colorScheme={color} isFullWidth={full}>
        <NextLink href={href} passHref>
          <LinkOverlay d="flex" alignItems="center">
            {icon && <Icon as={icon} w="5" h="5" me="3" />}
            <Text>{children}</Text>
          </LinkOverlay>
        </NextLink>
      </Button>
    </LinkBox>
  )
}

export default ButtonLink
