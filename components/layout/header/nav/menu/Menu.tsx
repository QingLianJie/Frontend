import {
  ColorProps,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import NavMenuLink from './Link'

interface NavMenuLinkProps {
  text: string
  href: string
  icon?: FC
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
}

interface NavMenuProps {
  icon: FC
  links: NavMenuLinkProps[]
  color?: {
    light: ColorProps['color']
    dark: ColorProps['color']
  }
  children: ReactNode | ReactNode[]
}

const NavMenu = ({ icon, links, color, children }: NavMenuProps) => {
  return (
    <Menu>
      <MenuButton
        pos="relative"
        px="3"
        py="1.5"
        rounded="md"
        _hover={{
          textDecor: 'none',
          bg: 'gray.100',
        }}
        _focus={{ boxShadow: 'outline' }}
        _dark={{
          _hover: {
            bg: 'gray.700',
          },
        }}
      >
        <HStack spacing="3">
          <Icon
            as={icon}
            w="5"
            h="5"
            color={color?.light}
            _dark={{ color: color?.dark }}
          />
          <Text>{children}</Text>
        </HStack>
      </MenuButton>
      <MenuList minW="unset">
        {links.map((link, index) => (
          <MenuItem p="0" key={index}>
            <NavMenuLink href={link.href} icon={link.icon} color={link.color}>
              {link.text}
            </NavMenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default NavMenu
