import {
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import LogoDark from '~/assets/logo-dark.svg'
import Logo from '~/assets/logo.svg'
import { footerLinks } from '~/contents/meta/links/footer-links'
import { meta } from '~/contents/meta/meta'

const Footer = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      as="footer"
      w="full"
      maxW="72rem"
      px={{ base: '6', sm: '8' }}
      py={{ base: '8', sm: '12' }}
      gap="8"
      justify="space-between"
      color="gray.500"
      flexDir={{ base: 'column', sm: 'row' }}
    >
      <VStack align="flex-start" pb="1">
        <Image
          src={colorMode === 'light' ? Logo : LogoDark}
          alt={`${meta.name} Logo`}
          w="28"
          userSelect="none"
          pointerEvents="none"
        />
        <Spacer />
        <FooterLink href={meta.icp.href} name={meta.icp.name} />
        <Text fontWeight="bold">{meta.copyright}</Text>
      </VStack>
      <Wrap spacing={{ base: '8', md: '12' }}>
        {footerLinks.map(link => (
          <WrapItem key={link.name}>
            <VStack align="flex-start">
              <Text fontWeight="bold" pb="1">
                {link.name}
              </Text>
              <List>
                {link.links.map(item => (
                  <ListItem key={item.name} py="1" maxW="64">
                    <FooterLink {...item} />
                  </ListItem>
                ))}
              </List>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  )
}

export default Footer

interface FooterLinkProps {
  href: string
  description?: string
  name: string
}

const FooterLink = ({ href, description, name }: FooterLinkProps) => (
  <Link
    href={href}
    isExternal
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
      rounded="md"
      maxW="64"
      placement="top"
    >
      {name}
    </Tooltip>
  </Link>
)
