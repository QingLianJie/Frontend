import {
  Button,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SystemProps,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/links/nav-links'

interface NavItemProps {
  href: string
  name: string
}

const NavItemStyles: SystemProps = {
  px: '3',
  py: '2',
  rounded: 'md',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  bg: 'transparent',
  _hover: {
    bg: 'gray.200',
    textDecor: 'none',
  },
  _active: {
    bg: 'gray.200',
  },
  _dark: {
    _hover: {
      bg: 'gray.700',
    },
    _active: {
      bg: 'gray.700',
    },
  },
}

const NavLink = ({ href, name }: NavItemProps) => (
  <Link as={RemixLink} to={href} {...NavItemStyles}>
    {name}
  </Link>
)

interface NavMenuProps {
  name: string
  children: ReactNode
}

const NavMenu = ({ name, children }: NavMenuProps) => (
  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<Icon as={RiArrowDownSLine} aria-label="菜单图标" />}
      {...NavItemStyles}
    >
      {name}
    </MenuButton>
    <MenuList py="3">{children}</MenuList>
  </Menu>
)

const NavMenuItem = ({ href, name }: NavItemProps) => (
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
      {name}
    </Link>
  </MenuItem>
)

const Nav = () => (
  <HStack as="nav">
    {navLinks.map(link =>
      link.type === 'LINK' ? (
        <NavLink {...link} key={link.name} />
      ) : (
        <NavMenu {...link} key={link.name}>
          {link.children.map(item => (
            <NavMenuItem {...item} key={item.name} />
          ))}
        </NavMenu>
      )
    )}
  </HStack>
)

export default Nav
