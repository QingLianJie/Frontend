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
  Tag,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/meta/links/nav-links'
import LanTag from '~/libs/common/tags/LanTag'

const HeaderNav = () => {
  return (
    <HStack as="nav">
      {navLinks.map(link =>
        link.type === 'LINK' ? (
          <HeaderNavLink {...link} key={link.name} />
        ) : (
          <HeaderNavMenu {...link} key={link.name}>
            {link.children.map(item => (
              <HeaderNavMenuItem {...item} key={item.name} />
            ))}
          </HeaderNavMenu>
        )
      )}
    </HStack>
  )
}

export default HeaderNav

interface HeaderNavItemProps {
  href: string
  name: string
  lan?: boolean
}

const HeaderNavItemStyles: SystemProps = {
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

const HeaderNavLink = ({ href, name }: HeaderNavItemProps) => (
  <Link as={RemixLink} to={href} {...HeaderNavItemStyles}>
    {name}
  </Link>
)

interface HeaderNavMenuProps {
  name: string
  children: ReactNode
}

const HeaderNavMenu = ({ name, children }: HeaderNavMenuProps) => (
  <Menu>
    <MenuButton
      as={Button}
      rightIcon={<Icon as={RiArrowDownSLine} aria-label="展开列表" />}
      {...HeaderNavItemStyles}
    >
      {name}
    </MenuButton>
    <MenuList py="3">{children}</MenuList>
  </Menu>
)

const HeaderNavMenuItem = ({ href, name, lan }: HeaderNavItemProps) => (
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
      {lan && <LanTag />}
    </Link>
  </MenuItem>
)
