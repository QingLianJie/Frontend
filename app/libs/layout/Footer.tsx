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
import { footerLinks } from '~/contents/footer-links'

interface FooterLinkProps {
  href: string
  description?: string
  children: string
}

const FooterLink = ({ href, description, children }: FooterLinkProps) => (
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
      {children}
    </Tooltip>
  </Link>
)

const Footer = () => {
  const { colorMode } = useColorMode()
  return (
    <Flex
      as="footer"
      w="full"
      maxW="container.lg"
      px={{ base: '6', sm: '8' }}
      py={{ base: '8', sm: '12' }}
      gap="8"
      justify="space-between"
      color="gray.500"
      flexDir={{ base: 'column', sm: 'row' }}
    >
      <VStack align="flex-start" px="2" pb="1">
        <Image
          src={colorMode === 'light' ? Logo : LogoDark}
          alt="清廉街 Logo"
          w="32"
        />
        <Spacer />
        <FooterLink href="https://beian.miit.gov.cn/">
          黑ICP备2021003925号-1
        </FooterLink>
        <Text fontWeight="bold">清廉街 © 2022</Text>
      </VStack>
      <Wrap px="2" spacing={{ base: '8', md: '10' }}>
        {footerLinks.map(link => (
          <WrapItem key={link.name}>
            <VStack align="flex-start">
              <Text fontWeight="bold">{link.name}</Text>
              <List>
                {link.links.map(item => (
                  <ListItem key={item.title} py="1" maxW="64">
                    <FooterLink href={item.href} description={item.description}>
                      {item.title}
                    </FooterLink>
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
