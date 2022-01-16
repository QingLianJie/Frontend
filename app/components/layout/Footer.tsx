import {
  Flex,
  Icon,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { RiArrowRightSLine } from 'react-icons/ri'
import LogoDark from '~/assets/logo-dark.svg'
import Logo from '~/assets/logo.svg'
import { footerLinks } from '~/contents/links/external/footer'

export const Footer = () => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      as="footer"
      w="full"
      maxW="72rem"
      px={{ base: '8', sm: '8' }}
      pt={{ base: '12', sm: '12' }}
      pb={{ base: '8', sm: '12' }}
      gap="8"
      justify="space-between"
      color="gray.500"
      flexDir={{ base: 'column', sm: 'row' }}
    >
      <VStack align={{ base: 'center', sm: 'flex-start' }} pb="1">
        <Image
          src={colorMode === 'light' ? Logo : LogoDark}
          alt="清廉街 Logo"
          w="28"
          mb="5"
          userSelect="none"
          pointerEvents="none"
        />
        <Spacer />
        <FooterLink
          href="https://beian.miit.gov.cn/"
          name="黑ICP备2021003925号-1"
        />
        <Text fontWeight="bold">清廉街 © {new Date().getFullYear()}</Text>
      </VStack>
      <Wrap d={{ base: 'none', sm: 'flex' }} spacing={{ base: '8', md: '12' }}>
        {footerLinks.map(link => (
          <WrapItem key={link.name}>
            <VStack align="flex-start">
              <Text fontWeight="bold" pb="1" d="flex" alignItems="center">
                <Icon
                  as={link.icon}
                  aria-label={link.name}
                  fontSize="lg"
                  mr="3"
                />
                {link.name}
              </Text>
              <List>
                {link.links.map(item => (
                  <ListItem
                    key={item.name}
                    d="flex"
                    alignItems="center"
                    py="1"
                    maxW="64"
                  >
                    <ListIcon as={RiArrowRightSLine} aria-label="列表项" />
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
      maxW="64"
      placement="top"
    >
      {name}
    </Tooltip>
  </Link>
)
