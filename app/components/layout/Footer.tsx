import {
  Flex,
  HStack,
  Image,
  Link,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react'
import LogoDark from '~/assets/logo-dark.svg'
import Logo from '~/assets/logo.svg'

export const Footer = () => {
  const { colorMode } = useColorMode()

  return (
    <HStack
      as="footer"
      px={{ base: '8', sm: '10' }}
      pt={{ base: '12', sm: '4' }}
      pb={{ base: '8', sm: '8' }}
      color="gray.500"
      fontSize="smd"
      align="center"
      justify="stretch"
      w="full"
      spacing="4"
    >
      <Text flex="1">清廉街 © {new Date().getFullYear()}</Text>

      <Flex flex="1" justify="center">
        <Image
          src={colorMode === 'light' ? Logo : LogoDark}
          alt="清廉街 Logo"
          w="20"
          userSelect="none"
          pointerEvents="none"
        />
      </Flex>

      <Flex flex="1" justify="flex-end">
        <FooterLink
          href="https://beian.miit.gov.cn/"
          name="黑ICP备2021003925号-1"
        />
      </Flex>
    </HStack>
  )
}

interface FooterLinkProps {
  href: string
  description?: string
  name: string
}

const FooterLink = ({ href, description, name }: FooterLinkProps) => (
  <Link
    href={href}
    isExternal
    fontSize="smd"
    _hover={{
      textDecor: 'none',
      color: 'gray.700',
    }}
    _dark={{
      _hover: {
        color: 'gray.400',
      },
    }}
  >
    <Tooltip
      hasArrow
      label={description}
      px="2.5"
      py="1.5"
      maxW="64"
      placement="top"
    >
      {name}
    </Tooltip>
  </Link>
)
