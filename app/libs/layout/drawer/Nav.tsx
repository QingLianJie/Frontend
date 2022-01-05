import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Icon,
  Link,
  Spacer,
  SystemProps,
  VStack,
} from '@chakra-ui/react'
import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { NavLink as RemixLink } from 'remix'
import { navLinks } from '~/contents/links/nav-links'

const NavItemStyles: SystemProps = {
  w: 'full',
  px: '3',
  py: '2.5',
  d: 'flex',
  alignItems: 'center',
  gap: '5',
  rounded: 'md',
  whiteSpace: 'nowrap',
  textAlign: 'start',
  bg: 'transparent',
  _hover: {
    bg: 'gray.100',
    textDecor: 'none',
  },
  _active: {
    bg: 'gray.200',
  },
  _dark: {
    _hover: {
      bg: 'gray.800',
    },
    _active: {
      bg: 'gray.700',
    },
  },
}

interface NavItemIconProps {
  icon: IconType
  name: string
  color: string
}

const NavItemIcon = ({ icon, name, color }: NavItemIconProps) => (
  <Icon as={icon} aria-label={name} color={`${color}.500`} fontSize="xl" />
)

interface NavItemProps {
  href: string
  color?: string
  icon?: IconType
  name: string
}

const NavLink = ({ href, color = 'gray', icon, name }: NavItemProps) => (
  <Link as={RemixLink} to={href} {...NavItemStyles}>
    {icon && <NavItemIcon icon={icon} name={name} color={color} />}
    {name}
  </Link>
)

interface NavMenuProps {
  name: string
  color: string
  icon: IconType
  children: ReactNode
}

const NavAccordion = ({ name, color, icon, children }: NavMenuProps) => (
  <Accordion allowToggle w="full">
    <AccordionItem border="none" w="full">
      <AccordionButton {...NavItemStyles}>
        <NavItemIcon icon={icon} name={name} color={color} />
        {name}
        <Spacer />
        <AccordionIcon
          fontSize="xl"
          mr="2.5"
          color="gray.500"
          _dark={{
            color: 'gray.400',
          }}
        />
      </AccordionButton>
      <AccordionPanel py="1" ml="6">
        <VStack spacing="0">{children}</VStack>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

const NavAccordionItem = ({ href, name }: NavItemProps) => (
  <Link
    href={href}
    isExternal
    w="full"
    px="3"
    py="2"
    rounded="md"
    _hover={{
      textDecor: 'none',
    }}
    isTruncated
  >
    {name}
  </Link>
)

const Nav = () => (
  <VStack as="nav" spacing="0">
    {navLinks.map(link =>
      link.type === 'LINK' ? (
        <NavLink {...link} key={link.name} />
      ) : (
        <NavAccordion {...link} key={link.name}>
          {link.children.map(item => (
            <NavAccordionItem {...item} key={item.name} />
          ))}
        </NavAccordion>
      )
    )}
  </VStack>
)

export default Nav
