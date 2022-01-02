import {
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/nav-links'

interface NavItemProps {
  href: string
  children: ReactNode
}

const NavItemStyles = {
  px: '3',
  py: '2',
  rounded: 'md',
  fontWeight: 'bold',
  _hover: {
    bg: 'gray.100',
    textDecor: 'none',
  },
  _dark: {
    _hover: {
      bg: 'gray.700',
    },
  },
}

const NavLink = ({ href, children }: NavItemProps) => (
  <Link as={RemixLink} to={href} {...NavItemStyles}>
    {children}
  </Link>
)

interface NavMenuProps {
  text: string
  children: ReactNode
}

const NavMenu = ({ text, children }: NavMenuProps) => (
  <Menu>
    <MenuButton {...NavItemStyles}>{text}</MenuButton>
    <MenuList>{children}</MenuList>
  </Menu>
)

const NavMenuItem = ({ href, children }: NavItemProps) => (
  <MenuItem p="0">
    <Link
      href={href}
      isExternal
      w="full"
      px="6"
      py="2.5"
      _hover={{
        textDecor: 'none',
      }}
    >
      {children}
    </Link>
  </MenuItem>
)

const Nav = () => (
  <HStack as="nav">
    {navLinks.map(link =>
      link.type === 'LINK' ? (
        <NavLink href={link.href} key={link.text}>
          {link.text}
        </NavLink>
      ) : (
        <NavMenu text={link.text} key={link.text}>
          {link.children.map(item => (
            <NavMenuItem href={item.href} key={item.text}>
              {item.text}
            </NavMenuItem>
          ))}
        </NavMenu>
      )
    )}
  </HStack>
)

export default Nav
