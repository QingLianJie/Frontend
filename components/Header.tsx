import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { RiMenuFill } from 'react-icons/ri'
import { links } from '../data/meta'

const HeaderLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="3"
        paddingY="1.5"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          _hover: {
            bg: 'gray.100',
          },
        }}
      >
        <Icon as={icon} w="5" h="5" marginRight="3" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const HeaderDrawerLink = ({ href, icon, text, color }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        display="flex"
        alignItems="center"
        paddingX="3"
        paddingY="3"
        rounded="md"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Icon as={icon} w="5" h="5" marginRight="4" color={color} />
        <Text fontSize="md">{text}</Text>
      </Link>
    </NextLink>
  )
}

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        alignItems="center"
        justifyContent="center"
        marginRight="2"
        aria-label="Menu"
        icon={<RiMenuFill />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader padding="9" borderBottomWidth="1px">
            页面
          </DrawerHeader>
          <DrawerBody paddingY="6">
            {links.map(link => (
              <HeaderDrawerLink
                key={link.name}
                href={link.href}
                icon={link.icon}
                text={link.text}
                color={link.color}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const Header = ({ title, showNav }: IHeaderProps) => {
  return (
    <Flex as="header" padding="6" alignItems="center">
      {showNav && <HeaderDrawer />}

      <Heading as="h1" size="md" paddingX="3">
        {title}
      </Heading>

      <Spacer />

      {showNav && (
        <Flex
          as="nav"
          alignItems="center"
          paddingX="3"
          display={{ base: 'none', md: 'flex' }}
        >
          {links.map(link => (
            <HeaderLink
              key={link.name}
              href={link.href}
              icon={link.icon}
              text={link.text}
              color={link.color}
            />
          ))}
        </Flex>
      )}

      <Spacer />

      <Avatar bg="teal.500" w="8" h="8" marginX="2" marginY="1" />
    </Flex>
  )
}

export default Header
