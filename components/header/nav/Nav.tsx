import { Link, Text, HStack } from '@chakra-ui/react'
import { default as NextLink } from 'next/link'

const HeaderNav = () => {
  return (
    <HStack mx="8" spacing="5">
      <NextLink href="/" passHref>
        <Link>
          <Text>主页</Text>
        </Link>
      </NextLink>
    </HStack>
  )
}

export default HeaderNav
