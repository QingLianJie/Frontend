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

const NavBarLink = ({ href, icon, text, color }) => {
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

const NavBarDrawerLink = ({ href, icon, text, color }) => {
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

const NavBarDrawer = () => {
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
              <NavBarDrawerLink
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

const NavBar = ({ title }) => {
  return (
    <Flex as="header" padding="6" alignItems="center">
      <NavBarDrawer />
      <Heading as="h1" size="md" paddingX="3">
        {title}
      </Heading>
      <Spacer />
      <Flex
        as="nav"
        alignItems="center"
        paddingX="3"
        display={{ base: 'none', md: 'flex' }}
      >
        {links.map(link => (
          <NavBarLink
            key={link.name}
            href={link.href}
            icon={link.icon}
            text={link.text}
            color={link.color}
          />
        ))}
      </Flex>
      <Spacer />
      <Avatar bg="gray.300" w="8" h="8" marginX="2" marginY="1" />
    </Flex>
  )
}

const HeaderBar = () => {
  return (
    <Flex
      as="header"
      flexDirection="column"
      alignItems="center"
      marginTop="3"
      paddingX="6"
      paddingY="16"
    >
      <Heading as="h1" size="lg">
        清廉街
      </Heading>
    </Flex>
  )
}

export { NavBar, HeaderBar }
